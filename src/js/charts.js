import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

import Swiper from 'swiper';

import { Pagination } from 'swiper/modules';



const sm = window.matchMedia('(max-width: 575px)');
const lg = window.matchMedia('(max-width: 1299px)');
let point = "center";
if (lg.matches) {
  point = "75%";
}




gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);


// Добавляет data-float всем <text> и <path> внутри .lines_with_texts по порядку
function addDataFloatToTextsAndPaths(groupSelector = '.lines_with_texts') {
  const groups = document.querySelectorAll(groupSelector);
  groups.forEach(group => {
    // Только прямые дети, чтобы не затрагивать вложенные SVG-элементы
    const texts = Array.from(group.children).filter(el => el.tagName === 'text');
    const paths = Array.from(group.children).filter(el => el.tagName === 'path');

    texts.forEach((el, i) => el.setAttribute('data-float', i));
    paths.forEach((el, i) => el.setAttribute('data-float', i));
  });
}

// Обычная floatRandomly для одного элемента
function floatRandomly(selector) {
  const el = document.querySelector(selector);
  const n = 5; // Максимальное смещение в пикселях
  if (!el) return;

  const animate = () => {
    gsap.to(el, {
      x: gsap.utils.random(-n, n),
      y: gsap.utils.random(-n, n),
      duration: gsap.utils.random(1.5, 3),
      ease: "sine.inOut",
      onComplete: animate
    });
  };

  animate();
}

function swingElement(selector, options = {}) {
  const el = document.querySelector(selector);
  if (!el) return;

  const { angle = 5, durationMin = 1.5, durationMax = 3, origin = "center bottom" } = options;
  el.style.transformOrigin = origin;

  const animate = () => {
    gsap.to(el, {
      rotate: gsap.utils.random(-angle, angle),
      duration: gsap.utils.random(durationMin, durationMax),
      ease: "sine.inOut",
      onComplete: animate
    });
  };

  animate();
}

function swingTopWithFollow(centerSelector, topSelector) {
  const center = document.querySelector(centerSelector);
  const top = document.querySelector(topSelector);
  if (!center || !top) return;

  // Сбросить transform и transformOrigin
  gsap.set(top, { clearProps: "all" });

  // Координаты "точки привязки" в системе center
  const anchorCenter = { x: 172 / 2, y: 35 };
  // Координаты "точки привязки" в системе top
  const anchorTop = { x: 35, y: 260 };

    // Устанавливаем transform-origin в точку привязки
  top.style.transformOrigin = `${anchorTop.x}px ${anchorTop.y}px`;

  function updatePosition() {
    // Получаем transform center (только rotate)
    const style = window.getComputedStyle(center);
    const matrix = style.transform !== "none" ? new DOMMatrix(style.transform) : null;

    // Получаем bbox center и top
    const centerRect = center.getBoundingClientRect();
    const topRect = top.getBoundingClientRect();
    const parentRect = top.parentElement.getBoundingClientRect();

    // Преобразуем anchorCenter с учётом поворота
    let anchorX = anchorCenter.x, anchorY = anchorCenter.y;
    let centerAngle = 0;
    if (matrix) {
      // Вращаем anchorCenter относительно transform-origin (center bottom)
      const originX = center.offsetWidth / 2;
      const originY = center.offsetHeight;
      const dx = anchorCenter.x - originX;
      const dy = anchorCenter.y - originY;
      anchorX = originX + dx * matrix.a + dy * matrix.c;
      anchorY = originY + dx * matrix.b + dy * matrix.d;
            // Получаем угол поворота нижней фигуры (в радианах)
      centerAngle = Math.atan2(matrix.b, matrix.a) * 180 / Math.PI;
    }

    // Абсолютные координаты привязки на экране
    const absAnchorX = centerRect.left + anchorX;
    const absAnchorY = centerRect.top + anchorY;

    // Смещение top так, чтобы его anchorTop совпал с absAnchor
    const topAbsAnchorX = topRect.left + anchorTop.x;
    const topAbsAnchorY = topRect.top + anchorTop.y;

    const dx = absAnchorX - topAbsAnchorX;
    const dy = 0//absAnchorY - topAbsAnchorY;

    // Текущие x/y top относительно родителя
    const curX = parseFloat(top.style.left || 0);
    const curY = parseFloat(top.style.top || 0);

    gsap.set(top, {
      x: "+=" + dx,
      y: "+=" + dy,
      rotate: -centerAngle / 2
      // duration: 0.2,
      // ease: "sine.inOut"
    });
  }

  function tick() {
    updatePosition();
    requestAnimationFrame(tick);
  }
  tick();
}

function floatTextAndLine(groupSelector = '.lines_with_texts') {
  const group = document.querySelector(groupSelector);
  if (!group) return;

  const texts = group.querySelectorAll('text[data-float]');
  const paths = group.querySelectorAll('path[data-float]');

  texts.forEach((text, i) => {
    const path = group.querySelector(`path[data-float="${i}"]`);
    if (!path) return;

    // Получаем начальную и конечную точку линии (M x0 y0 ... L x1 y1)
    const d = path.getAttribute('d');
    // Поддержка как M x0 y0 L x1 y1, так и M x0 y0 H x1, и других простых форм
    let x0, y0, x1, y1;
    let match = d.match(/M\s*([\d.]+)[ ,]([\d.]+)\s*L\s*([\d.]+)[ ,]([\d.]+)/);
    if (match) {
      x0 = parseFloat(match[1]);
      y0 = parseFloat(match[2]);
      x1 = parseFloat(match[3]);
      y1 = parseFloat(match[4]);
    } else {
      // H (горизонтальная линия)
      match = d.match(/M\s*([\d.]+)[ ,]([\d.]+)\s*H\s*([\d.]+)/);
      if (match) {
        x0 = parseFloat(match[1]);
        y0 = parseFloat(match[2]);
        x1 = parseFloat(match[3]);
        y1 = y0;
      } else {
        // Многоугольные линии (например, L x y L x y ...)
        match = d.match(/M\s*([\d.]+)[ ,]([\d.]+)[^M]*L\s*([\d.]+)[ ,]([\d.]+)$/);
        if (match) {
          x0 = parseFloat(match[1]);
          y0 = parseFloat(match[2]);
          x1 = parseFloat(match[3]);
          y1 = parseFloat(match[4]);
        } else {
          // Неизвестный формат, не трогаем
          return;
        }
      }
    }

    // Получаем bbox текста (для смещения)
    const bbox = text.getBBox();
    // Смещение центра текста относительно исходной позиции конца линии
    const textOffset = {
      x: bbox.x + bbox.width / 2 - x1,
      y: bbox.y + bbox.height / 2 - y1
    };

    // Плавное движение линии за текстом
    let lastX = x1;
    let lastY = y1;
    let targetX = x1;
    let targetY = y1;

    function animate() {
      const n = 5;
      const dx = gsap.utils.random(-n, n);
      const dy = gsap.utils.random(-n, n);

      gsap.to(text, {
        x: dx,
        y: dy,
        duration: gsap.utils.random(1.5, 3),
        ease: "sine.inOut",
        onUpdate: () => {
          // Обновляем цель для линии
          targetX = x1 + gsap.getProperty(text, "x");
          targetY = y1 + gsap.getProperty(text, "y");
        },
        onComplete: animate
      });
    }

    function smoothLine() {
      const speed = 0.15;
      lastX += (targetX - lastX) * speed;
      lastY += (targetY - lastY) * speed;

      if (/H/.test(d)) {
        path.setAttribute('d', `M${x0},${y0} H${lastX}`);
      } else if ((d.match(/L/g) || []).length > 1) {
        const dParts = d.split(/L/);
        let newD = dParts[0];
        for (let j = 1; j < dParts.length - 1; j++) {
          newD += 'L' + dParts[j];
        }
        newD += `L${lastX},${lastY}`;
        path.setAttribute('d', newD);
      } else {
        path.setAttribute('d', `M${x0},${y0} L${lastX},${lastY}`);
      }
      requestAnimationFrame(smoothLine);
    }

    animate();
    smoothLine();
  });
}



const animateChart1 = () => {

  const chart = document.querySelector('.chart[data-id="1"]');
  if (!chart) return;

  gsap.fromTo(chart,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: chart,
        start: `top ${point}`,
        onEnter: () => gsap.to(chart, { opacity: 1, duration: 1, ease: "power1.inOut" }),
        onLeaveBack: () => gsap.to(chart, { opacity: 0, duration: 0.5, ease: "power1.inOut" })
      }
    }
  );


  const path = chart.querySelector('#chart1-path');

  gsap.set(path, { drawSVG: "0%" });

  gsap.to(path, {
    drawSVG: "100%",
    duration: 2,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: chart,
      start: `top ${point}`,
      end: `center ${point}`,
      scrub: true
    }
  });
};

const animateChart2 = () => {
  const chart = document.querySelector('.chart[data-id="2"]');
  if (!chart) return;

  gsap.set([`.art[data-id="27"], .art[data-id="28"], .art[data-id="29"]`], { opacity: 1 });

  gsap.fromTo(chart,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: chart,
        start: `top ${point}`,
        onEnter: () => gsap.to(chart, { opacity: 1, duration: 1, ease: "power1.inOut" }),
        onLeaveBack: () => gsap.to(chart, { opacity: 0, duration: 0.5, ease: "power1.inOut" })
      }
    }
  );


  if (!lg.matches) {
    // Анимация SVG внутри chart__caption (без враппера)
    const captions = chart.querySelectorAll('.chart__caption');
    if (!captions) return;

    captions.forEach(caption => {
      const valueEl = caption.querySelector('.chart__caption_value');
      const finalValue = parseInt(valueEl.textContent, 10);

      gsap.fromTo(caption,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: caption,
            start: "top 65%",
            onEnter: () => {
              gsap.to(caption, { opacity: 1, duration: 1, ease: "power1.inOut" });
              gsap.fromTo(valueEl, 
                { innerText: 30 }, 
                {
                  innerText: finalValue,
                  duration: 1,
                  ease: "power1.inOut",
                  onUpdate: function() {
                    valueEl.textContent = Math.round(this.targets()[0].innerText) + '%';
                  }
                }
              );
            },
            onLeaveBack: () => {
              gsap.to(caption, { opacity: 0, duration: 0.5, ease: "power1.inOut" });
              // valueEl.textContent = '0%';
            }
          }
        }
      );
    });
  }



  if (lg.matches) {
    const swiperEl = chart.querySelector('.swiper');
    if (swiperEl && swiperEl.querySelector('.swiper-slide')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
      link.onload = () => {
        setTimeout(() => {
          console.log('Styles loaded');
          new Swiper(swiperEl, {
            modules: [Pagination],
            pagination: { 
              el: '.swiper-pagination',
              clickable: true,
            }
          });
        }, 0);
      };
      document.head.appendChild(link);
    }
  }

  swingElement('.art[data-id="28"]', { angle: 5, origin: "center bottom" });
  swingTopWithFollow('.art[data-id="28"]', '.art[data-id="29"]');

}

const animateChart3 = () => {
  const chart = document.querySelector('.chart[data-id="3"]');
  if (!chart) return;

  gsap.fromTo(chart,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: chart,
        start: `top ${point}`,
        onEnter: () => gsap.to(chart, { opacity: 1, duration: 1, ease: "power1.inOut" }),
        onLeaveBack: () => gsap.to(chart, { opacity: 0, duration: 0.5, ease: "power1.inOut" })
      }
    }
  );

  const svg = chart.querySelector('.divchart');
  // console.log(svg)
  // Получаем пути и value (текстовые поля)
  const paths = chart.querySelectorAll('.chart3__bar');
  const values = chart.querySelectorAll('.chart3__value');
  const percents = [8, 18, 24, 13, 48, 29];

  // Анимация по порядку с задержкой
  paths.forEach((path, i) => {

    gsap.set(path, { transformOrigin: `0% 50%`, scaleX: 0 });
    const value = values[i];
    if (!value) return;
    let targetValue = 0;
    let valueText = value.textContent || value.innerHTML;
    const match = valueText.match(/([\d.]+)%?/);
    if (match) targetValue = parseFloat(match[1]);
    value.textContent = '0%';



    let a = document.querySelector('.chart3__chart');
    let wd = 668
    if (lg.matches) {
      wd = a.offsetWidth;
    }

    

    // Анимация пути и value
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: chart,
        endTrigger: chart,
        start: `top+=${i * 20} ${point}`,
        end: `top+=${i * 20 + (sm.matches ? 300 : 100)} ${point}`,
        scrub: true,
      }
    });

    tl.to({}, {
      duration: 1,
      ease: 'linear',
      onUpdate: function() {
        const prog = this.progress();
        const val = Math.round(targetValue * prog);
        value.textContent = val + '%';
        gsap.set(path, { scaleX: prog });

        const currentX = wd * (percents[i] * 2 / 100) * (1 - prog)
        
        // value.style.transform = `translateX(${currentX}px)`;
        gsap.set(value, { x: -currentX });
      },
      onComplete: function() {
        value.textContent = targetValue + '%';
      }
    }, 0);
  });
}

const animateChart4 = () => {
  const chart = document.querySelector('.chart[data-id="4"]');
  if (!chart) return;

  gsap.fromTo(chart,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: chart,
        start: `top ${point}`,
        onEnter: () => gsap.to(chart, { opacity: 1, duration: 1, ease: "power1.inOut" }),
        onLeaveBack: () => gsap.to(chart, { opacity: 0, duration: 0.5, ease: "power1.inOut" })
      }
    }
  );

  let svg = chart.querySelector('.chart3__desktop');

  if (lg.matches) {
    svg = chart.querySelector('.chart3__mobile');
  }
  if (!svg) return;

  const group = svg.querySelector('.lines_with_texts');
  const texts = Array.from(group.children).filter(el => el.tagName === 'text');
  const paths = Array.from(group.children).filter(el => el.tagName === 'path');
  const rect = svg.querySelector('rect');



  gsap.set([texts, rect, paths], { opacity: 0 });

  const AnimationTimeline = () => {

  // chart, svg, group, texts, paths, rect уже определены выше
  // (если нет — получить их тут)
  if (!rect || !paths.length || !texts.length) return;

  // Сбросить состояния
  gsap.set(rect, { scale: 0, transformOrigin: "50% 50%", opacity: 1 });
  gsap.set(paths, { drawSVG: "0%", opacity: 1 });
  gsap.set(texts, { opacity: 0 });

  // Основной timeline
  const tl = gsap.timeline();

  // 1. rect scale появление
  tl.to(rect, {
    scale: 1,
    duration: 0.5,
    ease: "back.out(1.7)"
  });

  const indices = Array.from({length: paths.length}, (_, i) => i);
  gsap.utils.shuffle(indices);
  // console.log(indices)
  indices.forEach((i, id) => {
    
    const path = paths[i];
    const text = texts[i];
    tl.to(path, {
      drawSVG: "100%",
      duration: 0.7,
      ease: "power1.inOut",
      onStart: () => gsap.set(path, { opacity: 1 }),
    }, 0.2 + id * 0.05);
    tl.to(text, {
      opacity: 1,
      duration: 0.3,
      ease: "power1.inOut"
    }, ">-=0.1");
  });

  // 3. После всех — включить floatTextAndLine и addDataFloatToTextsAndPaths
  tl.call(() => {

      if (sm.matches) {
        addDataFloatToTextsAndPaths('.chart3__mobile > .lines_with_texts');
        floatTextAndLine('.chart3__mobile > .lines_with_texts');
      } else {
        addDataFloatToTextsAndPaths('.chart3__desktop > .lines_with_texts');
        floatTextAndLine('.chart3__desktop > .lines_with_texts');
      }

  });

  return tl;

  }


  gsap.fromTo(svg,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: svg,
        start: `top ${point}`,
        onEnter: () => {
          gsap.to(svg, { opacity: 1, duration: 1, ease: "power1.inOut" });
          
          AnimationTimeline()


        },
        onLeaveBack: () => {
          gsap.to(svg, { opacity: 0, duration: 0.5, ease: "power1.inOut" })
        }
      }
    }
  );
}

const animateChart5 = () => {
  const chart = document.querySelector('.chart[data-id="5"]');
  if (!chart) return;

  gsap.fromTo(chart,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: chart,
        start: `top ${point}`,
        onEnter: () => gsap.to(chart, { opacity: 1, duration: 1, ease: "power1.inOut" }),
        onLeaveBack: () => gsap.to(chart, { opacity: 0, duration: 0.5, ease: "power1.inOut" })
      }
    }
  );

  let svg = chart.querySelector('.chart5__desktop');
  if (lg.matches) {
    svg = chart.querySelector('.chart5__mobile');
  }

  if (!svg) return;
  const origPaths = svg.querySelectorAll('path');
  origPaths.forEach(p => p.style.opacity = 0);

  // Данные для секторов (проценты и цвета из оригинальных путей)
  const pieData = [
    { value: 43, color: '#42737B' },
    { value: 41, color: '#D1A79C' },
    { value: 8,  color: '#CCC1B7' },
    { value: 4,  color: '#E3DCD6' },
    { value: 4,  color: '#fff' }
  ];
  const pieStroke = '#3E3E3E';
  const pieStrokeWidth = 0.5;
  let cx = 220, cy = 216, r = 132; // центр и радиус

  
  if (lg.matches) {
    cx = 89+77, cy = 78+77, r = 77;
  }


  // Удаляем старые кастомные сектора если есть
  const oldCustom = svg.querySelectorAll('.pie-animated-sector');
  oldCustom.forEach(el => el.remove());

  // Функция для генерации path сектора по углам
  function describeArc(cx, cy, r, startAngle, endAngle) {

    // Защита от NaN: если угол невалидный, возвращаем пустую дугу
    if (isNaN(startAngle) || isNaN(endAngle)) {
      return `M${cx},${cy} L${cx + r},${cy} Z`;
    }
    const rad = Math.PI / 180;
    const x1 = cx + r * Math.cos(rad * startAngle);
    const y1 = cy + r * Math.sin(rad * startAngle);
    const x2 = cx + r * Math.cos(rad * endAngle);
    const y2 = cy + r * Math.sin(rad * endAngle);
    const largeArc = Math.abs(endAngle - startAngle) > 180 ? 1 : 0;
    return [
      `M${cx},${cy}`,
      `L${x1},${y1}`,
      `A${r},${r} 0 ${largeArc} 1 ${x2},${y2}`,
      'Z'
    ].join(' ');
  }

  // Создаём кастомные сектора (paths)
  let startAngle = -90;
  const animatedSectors = [];
  pieData.forEach((d, i) => {
    const angle = d.value / 100 * 360;
    const endAngle = startAngle + angle;
    const pathStr = describeArc(cx, cy, r, startAngle, endAngle);
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathStr);
    path.setAttribute('fill', d.color);
    path.setAttribute('stroke', pieStroke);
    path.setAttribute('stroke-width', pieStrokeWidth);
    path.classList.add('pie-animated-sector');
    path.style.opacity = 0;
    svg.appendChild(path);
    animatedSectors.push({ path, startAngle, endAngle });
    startAngle = endAngle;
  });

  // Анимация: строго последовательная — каждый сектор и подпись строго друг за другом, с поддержкой ScrollTrigger
  const textGroups = Array.from(svg.querySelectorAll('g'));
  textGroups.forEach(g => gsap.set(g, { opacity: 0 }));

  // Создаём timeline с scrub и ScrollTrigger
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: svg,
      start: `top ${point + (sm.matches ? '-=30%' : '+=10%')}`,
      end: `center ${point}`,
      scrub: true,
    }
  });

  // Для каждого сектора и подписи — строго последовательные шаги
  animatedSectors.forEach((sector, i) => {
    // Для каждого сектора создаём clipPath-дугу, которая "открывает" сектор
    const clipId = `pie-clip-${i}`;
    let clip = svg.querySelector(`#${clipId}`);
    if (clip) clip.remove();
    clip = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
    clip.setAttribute('id', clipId);
    svg.appendChild(clip);

    // В clipPath — дуга, которая "растёт" по углу
    const clipArc = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    clip.appendChild(clipArc);
    sector.path.setAttribute('clip-path', `url(#${clipId})`);

    gsap.set(sector.path, { opacity: 1 });
    const angleObj = { drawAngle: 0 };
    const angleDelta = Math.max(0, sector.endAngle - sector.startAngle);
    // Сектор — строго после предыдущего
    tl.to(angleObj, {
      drawAngle: angleDelta,
      duration: 0.7,
      ease: 'linear',
      onUpdate: function() {
        const curAngle = sector.startAngle + (angleObj.drawAngle || 0);
        if (isNaN(curAngle)) return;
        clipArc.setAttribute('d', describeArc(cx, cy, r + 1, sector.startAngle, curAngle));
      },
      onStart: function() {
        sector.path.style.opacity = 1;
      }
    });
    // Подпись — одновременно с сектором
    if (textGroups[i]) {
      tl.to(textGroups[i], {
        opacity: 1,
        duration: 0.3,
        ease: 'power1.inOut',
      }, '<'); // запускать одновременно с сектором
    }
  });
}

const animateChart6 = () => {
  
  
  floatRandomly('.art[data-id="52"]');
  floatRandomly('.art[data-id="53"]');
  floatRandomly('.art[data-id="54"]');
  
  
  const chart = document.querySelector('.chart[data-id="6"]');
  if (!chart) return;

  gsap.set([`.art[data-id="52"], .art[data-id="53"], .art[data-id="54"]`], { opacity: 1 });

  gsap.fromTo(chart,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: chart,
        start: `top ${point}`,
        onEnter: () => gsap.to(chart, { opacity: 1, duration: 1, ease: "power1.inOut" }),
        onLeaveBack: () => gsap.to(chart, { opacity: 0, duration: 0.5, ease: "power1.inOut" })
      }
    }
  );


  const captions = chart.querySelectorAll('.chart__caption');
  if (!captions) return;

captions.forEach(caption => {
  const valueEl = caption.querySelector('.chart__caption_value');
  const finalValue = parseInt(valueEl.textContent, 10);

  gsap.fromTo(caption,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: caption,
        start: `top ${point}+=15%`,
        onEnter: () => {
          gsap.to(caption, { opacity: 1, duration: 1, ease: "power1.inOut" });
          gsap.fromTo(valueEl, 
            { innerText: 1 }, 
            {
              innerText: finalValue,
              duration: 1,
              ease: "power1.inOut",
              snap: { innerText: 1 },
              onUpdate: function() {
                valueEl.textContent = Math.round(this.targets()[0].innerText) + '%';
              }
            }
          );
        },
        onLeaveBack: () => {
          gsap.to(caption, { opacity: 0, duration: 0.5, ease: "power1.inOut" });
          // valueEl.textContent = '0%';
        }
      }
    }
  );
});


  const captions2 = chart.querySelectorAll( `.chart6-sp1, .chart6-sp2, .chart6-sp3`);
  if (!captions2) return;

 
    captions2.forEach(caption2 => {
      gsap.fromTo(caption2,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: caption2,
            start: `top ${point}`,
            onEnter: () => {
              // gsap.killTweensOf(caption2); // Очищаем предыдущие анимации
              gsap.to(caption2, { opacity: 1, duration: 1, ease: "power1.inOut" });
            },
            onLeaveBack: () => {
              // gsap.killTweensOf(caption2); 
              gsap.to(caption2, { opacity: 0, duration: 0.5, ease: "power1.inOut" });
            }
          }
        }
      );
  });

}

export const animateCharts = () => {

    const charts = document.querySelectorAll('.chart');
    gsap.set(charts, { opacity: 0 });

    animateChart1();
    animateChart2();
    animateChart3();
    animateChart4();
    animateChart5();
    animateChart6();

}
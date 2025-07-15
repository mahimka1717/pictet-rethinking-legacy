import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

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

// Верхний предмет повторяет угол центрального + свой swing
function swingTopWithFollow(centerSelector, topSelector) {
  const center = document.querySelector(centerSelector);
  const top = document.querySelector(topSelector);
  if (!center || !top) return;

  top.style.transformOrigin = "center bottom";

  const animate = () => {
    // Получаем текущий угол центрального
    const centerAngle = gsap.getProperty(center, "rotate") || 0;
    // Добавляем свой swing
    const extra = gsap.utils.random(-5, 5);

    gsap.to(top, {
      rotate: centerAngle + extra,
      duration: gsap.utils.random(1.5, 3),
      ease: "sine.inOut",
      onComplete: animate
    });
  };

  animate();
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

  const path = chart.querySelector('#chart1-path');

  gsap.set(path, { drawSVG: "0%" });


  gsap.fromTo(chart,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: chart,
        start: "top center",
        onEnter: () => gsap.to(chart, { opacity: 1, duration: 1, ease: "power1.inOut" }),
        onLeaveBack: () => gsap.to(chart, { opacity: 0, duration: 0.5, ease: "power1.inOut" })
      }
    }
  );




  gsap.to(path, {
    drawSVG: "100%",
    duration: 2,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: chart,
      start: "top center",
      end: "bottom center",
      scrub: true
    }
  });
};
const animateChart2 = () => {
  // Реализуйте анимацию для второго графика
  console.log("Animating Chart 2");
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
        start: "top center",
        onEnter: () => gsap.to(chart, { opacity: 1, duration: 1, ease: "power1.inOut" }),
        onLeaveBack: () => gsap.to(chart, { opacity: 0, duration: 0.5, ease: "power1.inOut" })
      }
    }
  );

  // Получаем пути и value (текстовые поля)
  const paths = chart.querySelectorAll('#chart3-paths path');
  const values = chart.querySelectorAll('#chart3-values text tspan');

  // Анимация по порядку с задержкой
  paths.forEach((path, i) => {

    gsap.set(path, { transformOrigin: `0% 50%`, scaleX: 0 });
    const value = values[i];
    if (!value) return;

    let targetValue = 0;
    let valueText = value.textContent || value.innerHTML;
    const match = valueText.match(/([\d.]+)%?/);
    if (match) targetValue = parseFloat(match[1]);

    // Получаем x value (текущее положение) и x конца пути (откуда стартовать)
    let valueX = 0;
    if (value.getAttribute('x') !== null) {
      valueX = parseFloat(value.getAttribute('x'));
    } else if (value.getBBox) {
      valueX = value.getBBox().x;
    }

    let pathEndX = 0;
    if (path.getAttribute('d')) {
      // Ищем последнюю координату X в d (L x y или H x)
      const d = path.getAttribute('d');
      let matchL = d.match(/L\s*([\d.\-]+)[ ,]([\d.\-]+)/g);
      if (matchL && matchL.length > 0) {
        const lastL = matchL[matchL.length - 1].match(/L\s*([\d.\-]+)[ ,]([\d.\-]+)/);
        if (lastL) pathEndX = parseFloat(lastL[1]);
      } else {
        // H x
        let matchH = d.match(/H\s*([\d.\-]+)/);
        if (matchH) pathEndX = parseFloat(matchH[1]);
        else {
          // Если только M x y
          let matchM = d.match(/M\s*([\d.\-]+)[ ,]([\d.\-]+)/);
          if (matchM) pathEndX = parseFloat(matchM[1]);
        }
      }
    }

    const startX = pathEndX + 20;
    const endX = valueX;
    value.setAttribute('x', startX);
    value.textContent = '0%';

    // Анимация пути и value


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: chart,
        start: `top+=${50} center`,
        end: 'center center',
        scrub: true,
      }
    });
    tl.to({}, {
      duration: 1,
      ease: 'power1.out',
      onUpdate: function() {
        const prog = this.progress();
        const curX = startX + (endX - startX) * prog;
        value.setAttribute('x', curX);
        const val = Math.round(targetValue * prog);
        value.textContent = val + '%';
        gsap.set(path, { scaleX: prog });
      },
      onComplete: function() {
        value.setAttribute('x', endX);
        value.textContent = targetValue + '%';
      }
    }, 0);
  });
}

const animateChart4 = () => {
  // Реализуйте анимацию для четвертого графика
  console.log("Animating Chart 4");
}
const animateChart5 = () => {
  // Реализуйте анимацию для пятого графика
  console.log("Animating Chart 5");
}
const animateChart6 = () => {
  // Реализуйте анимацию для шестого графика
  console.log("Animating Chart 6");
}


export const animateCharts = () => {

    swingElement('.art[data-id="28"]', { angle: 5, origin: "center bottom" });
    swingTopWithFollow('.art[data-id="28"]', '.art[data-id="29"]');

    addDataFloatToTextsAndPaths('.lines_with_texts');
    floatTextAndLine('.lines_with_texts');

    floatRandomly('.art[data-id="52"]');
    floatRandomly('.art[data-id="53"]');
    floatRandomly('.art[data-id="54"]');

    const charts = document.querySelectorAll('.chart');
    gsap.set(charts, { opacity: 0 });


    animateChart1();
    animateChart2();
    animateChart3();
    animateChart4();
    animateChart5();
    animateChart6();

}
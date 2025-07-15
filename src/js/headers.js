
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);





export const animateHeaders = () => {
  document.querySelectorAll('.chapter .h1, .chapter .h2').forEach((heading) => {
    // SplitText: разбиваем на слова, но <mark> и <span> с классом subheader обрабатываем как одно слово
    // 1. Временно заменяем <mark> и <span class="subheader"> на плейсхолдеры
    const specialNodes = [];
    let idx = 0;
    heading.querySelectorAll('mark, span.subheader').forEach((node) => {
      const placeholder = `__SPECIAL_PLACEHOLDER_${idx}__`;
      specialNodes.push({ placeholder, html: node.outerHTML });
      node.replaceWith(placeholder);
      idx++;
    });

    // 2. SplitText по словам
    const split = new SplitText(heading, { type: 'words', wordsClass: 'split-word' });
    let words = split.words;

    // 3. Восстанавливаем <mark> и <span> на место плейсхолдеров и обновляем words
    specialNodes.forEach(({ placeholder, html }) => {
      const widx = words.findIndex(w => w.textContent === placeholder);
      if (widx !== -1) {
        const temp = document.createElement('div');
        temp.innerHTML = html;
        const node = temp.firstChild;
        words[widx].replaceWith(node);
        words[widx] = node;
      }
    });

    // 4. Скрываем слова (важно: .word должен быть display: inline-block в css)
    // Для mark и span.subheader — обязательно выставляем display: inline-block для transform
    words.forEach(w => {
      if (
        (w.tagName && w.tagName.toLowerCase() === 'mark') ||
        (w.tagName && w.tagName.toLowerCase() === 'span' && w.classList.contains('subheader'))
      ) {
        w.style.display = 'inline-block';
      }
      gsap.set(w, { opacity: 0, y: 20 });
    });

    // 5. ScrollTrigger для появления слов и обратной анимации
    ScrollTrigger.create({
      trigger: heading,
      start: 'top center',
      onEnter: () => {
        gsap.killTweensOf(words); // Убиваем предыдущие анимации, если есть
        gsap.to(words, {
          opacity: 1,
          y: 0,
          stagger: 0.075,
          duration: 1,
          ease: 'power2.out',
        });
      },
      onLeaveBack: () => {
        gsap.killTweensOf(words); // Убиваем предыдущие анимации, если есть
        gsap.to(words, {
          opacity: 0,
          y: 20,
          stagger: {
            each: 0.075,
            from: 'end',
          },
          duration: 0.2,
          ease: 'power1.in',
        });
      },
    });

    // Анимация подчеркивания у <mark>
    heading.querySelectorAll('mark').forEach((mark) => {
      if (!mark.querySelector('.underline-anim')) {
        mark.insertAdjacentHTML('beforeend', '<span class="underline-anim"></span>');
      }
      const underline = mark.querySelector('.underline-anim');
      underline.style.position = 'absolute';
      underline.style.left = 0;
      underline.style.right = 0;
      underline.style.bottom = '0.1em';
      underline.style.height = '2.5px';
      underline.style.width = '100%';
      underline.style.background = 'currentColor';
      underline.style.borderRadius = '1px';
      underline.style.transformOrigin = 'left';
      underline.style.transform = 'scaleX(0)';
      underline.style.pointerEvents = 'none';
      underline.style.display = 'block';
      underline.style.zIndex = 2;

      // ScrollTrigger для рисования линии и обратной анимации
      ScrollTrigger.create({
        trigger: heading,
        start: 'top center',
        onEnter: () => {
          gsap.to(underline, {
            scaleX: 1,
            duration: 0.5,
            ease: 'power2.out',
            delay: 0.2 + words.length * 0.08,
          });
        },
        onLeaveBack: () => {
          gsap.to(underline, {
            scaleX: 0,
            duration: 0.3,
            ease: 'power1.in',
          });
        },
      });
    });

    gsap.set([
      `.h1`,
      `.h2`,
    ], { opacity: 1 })


    
  });
};
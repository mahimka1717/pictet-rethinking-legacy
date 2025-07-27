import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

export const animateQuote = () => {
  
  let point = "60%";
  const lg = window.matchMedia('(max-width: 1299px)');
  if (lg.matches) {
    point = "75%";
  }

  const run = () => {
    // Найти все цитаты
    const quotes = document.querySelectorAll('.quote');
    quotes.forEach((quote) => {
      const svg = quote.querySelector('svg');
      const blockquote = quote.querySelector('blockquote');
      const author = quote.querySelector('.author');
      
      if (lg.matches) {
        // Удалить все <br> внутри blockquote для мобильных
        const brs = blockquote.querySelectorAll('br');
        brs.forEach(br => br.parentNode.removeChild(br));
      }

      // 1. Анимация SVG кавычек
      gsap.set(svg, { opacity: 0, y: 40, scale: 0.75, transformOrigin: 'center center' });

      // 2. SplitText: разбить цитату на строки
      const split = new SplitText(blockquote, {
         type: 'lines',
         autoSplit: true,
         linesClass: 'quote-line',
         onSplit: (self) => {
            // Для каждой строки создаём маску
            self.lines.forEach((line) => {
              // Обернуть каждую строку в div-mask
              const mask = document.createElement('div');
              mask.className = 'quote-line-mask';
              mask.style.overflow = 'hidden';
              mask.style.display = 'block';
              mask.style.position = 'relative';
              mask.style.height = line.offsetHeight + 'px';
              line.parentNode.insertBefore(mask, line);
              mask.appendChild(line);
              // Для анимации: строка из y=100%
              gsap.set(line, { y: '100%' });
            });

            // 3. Подпись автора скрыта
            gsap.set(author, { opacity: 0 });

            // 4. ScrollTrigger с анимацией в обе стороны
            ScrollTrigger.create({
              trigger: quote,
              start: `top ${point}`,
              onEnter: () => {
                // Анимация SVG кавычек
                gsap.to(svg, {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  duration: 0.7,
                  ease: 'power2.out',
                });
                // Анимация строк
                gsap.to(self.lines, {
                  y: '0%',
                  duration: 0.75,
                  ease: 'power2.out',
                  stagger: 0.1,
                  delay: 0.3,
                });
                // Показать автора после строк
                gsap.to(author, { opacity: 1, duration: 0.75, ease: 'power2.out', delay: 0.5 + self.lines.length * 0.10 });
              },
              onLeaveBack: () => {
                // Скрыть SVG кавычки
                gsap.to(svg, {
                  opacity: 0,
                  y: 40,
                  scale: 0.75,
                  duration: 0.5,
                  ease: 'power2.in',
                });
                // Скрыть строки обратно вниз
                gsap.to(self.lines, {
                  y: '100%',
                  duration: 0.5,
                  ease: 'power2.in',
                  stagger: { each: 0.08, from: 'end' },
                });
                // Скрыть автора
                gsap.to(author, { opacity: 0, duration: 0.2, ease: 'power2.in' });
              },
            });
         }
      });

    });
  };

  run()
  
}
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

export const animateQuote = () => {
  // Найти все цитаты
  const quotes = document.querySelectorAll('.quote');
  quotes.forEach((quote) => {
    const svg = quote.querySelector('svg');
    const blockquote = quote.querySelector('blockquote');
    const author = quote.querySelector('.author');

    // 1. Анимация SVG кавычек
    gsap.set(svg, { opacity: 0, y: 40 });

    // 2. SplitText: разбить цитату на строки
    const split = new SplitText(blockquote, { type: 'lines', linesClass: 'quote-line' });
    // Для каждой строки создаём маску
    split.lines.forEach((line) => {
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
      start: 'top center',
      onEnter: () => {
        // Анимация SVG кавычек
        gsap.to(svg, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
        });
        // Анимация строк
        gsap.to(split.lines, {
          y: '0%',
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.12,
          delay: 0.3,
        });
        // Показать автора после строк
        gsap.to(author, { opacity: 1, duration: 0.5, ease: 'power2.out', delay: 0.3 + split.lines.length * 0.12 });
      },
      onLeaveBack: () => {
        // Скрыть SVG кавычки
        gsap.to(svg, {
          opacity: 0,
          y: 40,
          duration: 0.5,
          ease: 'power2.in',
        });
        // Скрыть строки обратно вниз
        gsap.to(split.lines, {
          y: '100%',
          duration: 0.5,
          ease: 'power2.in',
          stagger: { each: 0.08, from: 'end' },
        });
        // Скрыть автора
        gsap.to(author, { opacity: 0, duration: 0.3, ease: 'power2.in' });
      },
    });
  });
}
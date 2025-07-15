import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);


export const animateLines = () => {
    // console.log('animateLines');
  // Найти все .line на странице
  const lines = document.querySelectorAll('.line');
  if (!lines.length) return;

  // Сбросить все path внутри .line в 0%
  const paths = [];
  lines.forEach(line => {
    const path = line.querySelector('path');
    if (path) {
      gsap.set(path, { drawSVG: '0% 0%' });
      paths.push(path);
    }
  });

  if (!paths.length) return;




  paths.forEach((path, i) => {

    let point = "center";
    if(i===13) point = "center-=50";


    ScrollTrigger.create({
        trigger: lines[i],
        start: ()=> `top ${point}`,
        end: ()=>`bottom ${point}`,
        scrub: true,
        onUpdate: self => {
            // Вычислить процент прокрутки
            const progress = self.progress.toFixed(2);
            // Установить drawSVG в зависимости от прогресса
            gsap.to(path, {
                drawSVG: `0 ${progress * 100}%`,
                duration: 0.1,
                ease: "none"
            });
        },  

        // markers: true,
    });
  });
}
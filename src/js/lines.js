import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);


const sm = window.matchMedia('(max-width: 575px)');
const lg = window.matchMedia('(max-width: 1299px)');
let point = "60%";


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
    const line = lines[i];
    const dataId = line?.dataset?.id ? Number(line.dataset.id) : i;

    if (dataId === 8 || dataId === 9 || dataId === 10) point = "75%";
    if (dataId === 13) point = "60%-=50";
    if (lg.matches) {
      point = "75%";
      if (dataId === 13) point = "75%-=50";
    }

    ScrollTrigger.create({
      trigger: lines[i],
      start: () => `top ${point}`,
      end: () => `bottom ${point}`,
      scrub: true,
      onUpdate: self => {
        const progress = self.progress.toFixed(2);
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
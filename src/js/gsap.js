import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import { animateCharts } from "./charts";
import { animateLines } from "./lines";
import { animateHeaders } from "./headers";
import { animateArts } from "./art";
import { animateQuote } from "./quote";

export let smoother;

const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

const xl = 1440;
const md = 740;
let resizeTimer;


const createScrollSmoother = () => {
    if (smoother) {
        smoother.kill();
    }

    const wd = window.innerWidth;
    const isTablet = wd > md && wd < xl;
    
    // Для планшетов отключаем эффекты у определенных элементов
    if (isTablet) {
        // Находим элементы, которые НЕ должны анимироваться на планшетах
        const elementsToDisable = document.querySelectorAll([
            '.img-6',   
            `.video-3-wrapper`,
            `.frame-28`,
        ].join(', '));
        
        // Временно убираем data-speed атрибуты
        elementsToDisable.forEach(el => {
            el.dataset.originalSpeed = el.dataset.speed;
            delete el.dataset.speed;
        });
    }
    
    smoother = ScrollSmoother.create({
        smooth: 2, // Увеличенная плавность (медленнее прокрутка)
        smoothTouch: 2,
        // smoothTouch: isIOS?0.5:false, // Плавность для сенсорных устройств
        effects: window.innerWidth > md ? true : false, // Включаем эффекты только для больших экранов
        normalizeScroll: {
            allowNestedScroll: true, // позволяет вложенную прокрутку
            type: "pointer,touch,wheel"
        },
        ignoreMobileResize: true,
    });
};
const handleResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        reinitializeAnimations();
    }, 250); // Задержка для избежания множественных вызовов
};
// Обработчик изменения ориентации
const handleOrientationChange = () => {
    // Ждем завершения поворота экрана
    setTimeout(() => {
        reinitializeAnimations();
    }, 250);
};
//////////// resize
const cleanupAnimations = () => {
    // Убиваем все ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    // Убиваем все GSAP анимации
    gsap.killTweensOf("*");

    // Восстанавливаем CSS свойства элементов к первоначальному состоянию
    cleanupElements();

    // Убиваем ScrollSmoother
    if (smoother) {
        smoother.kill();
        smoother = null;
    }

    gsap.set('*', { clearProps: "all" });
};
const reinitializeAnimations = () => {

    cleanupAnimations();

    gsap.delayedCall(0.1, () => {

        createScrollSmoother();


        // Обновляем ScrollTriggers
        ScrollTrigger.refresh();
    })
}



const animateText = () => {
    document.querySelectorAll('.p, .intro-p, .outtro-p').forEach(el => {
    // Сначала выставляем opacity 0
    gsap.set(el, { opacity: 0 });

    ScrollTrigger.create({
        trigger: el,
        start: 'top center',
        onEnter: () => {
        
        gsap.killTweensOf(el); // Убиваем предыдущие анимации, если есть  
        gsap.to(el, {
            opacity: 1,
            duration: 1.25,
            ease: 'power2.out'
        });
        },
        onLeaveBack: () => {
        gsap.killTweensOf(el);
            gsap.to(el, {
            opacity: 0,
            duration: 0.25, // например, дольше назад
            ease: 'power1.out'
        });
        }
    });
    });
}


export const initGSAP = () => {
  
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  gsap.config({
      force3D: !isIOS,
      // nullTargetWarn: false,
  });

  gsap.set([
    `.art`,
    // `.art-group`,
    // `.chart`,
    // `.line`,
    `.h1`,
    `.h2`,
    `.p`,
    `.intro-p`,
    `.outtro-p`,
    // `.quote`
  ], { opacity: 0 })


    gsap.delayedCall(0.1, () => {
        animateText();
        animateCharts();
        animateLines();
        animateArts();
        animateQuote();

        // Надёжный запуск animateHeaders после полной загрузки шрифтов и layout
        document.fonts.ready.then(() => {
            requestAnimationFrame(() => {
                setTimeout(() => {
                    animateHeaders();
                }, 30);
            });
        });

        gsap.to('.article', {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            onComplete: () => {
                // createScrollSmoother();
                ScrollTrigger.refresh();
            }
        });
    });

    // Пересоздаём анимацию заголовков при resize/orientationchange
    let lastHeadersTimeout;
    function rerunHeaders() {
        if (lastHeadersTimeout) clearTimeout(lastHeadersTimeout);
        lastHeadersTimeout = setTimeout(() => {
            if (typeof SplitText !== 'undefined' && typeof SplitText.revert === 'function') {
                SplitText.revert();
            }
            document.fonts.ready.then(() => {
                requestAnimationFrame(() => {
                    setTimeout(() => {
                        animateHeaders();
                    }, 30);
                });
            });
        }, 120);
    }
    window.addEventListener('resize', rerunHeaders);
    window.addEventListener('orientationchange', rerunHeaders);
}
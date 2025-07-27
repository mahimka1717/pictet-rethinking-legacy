import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import { animateCharts } from "./charts";
import { animateLines } from "./lines";
import { animateHeaders } from "./headers";
import { animateArts } from "./art";
import { animateQuote } from "./quote";
import { initNavigation } from "./nav.js";

export let smoother;

const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

const xl = 1440;
const md = 740;
let resizeTimer;

const sm = window.matchMedia('(max-width: 575px)');
const lg = window.matchMedia('(max-width: 1299px)');

// smoother
const createScrollSmoother = () => {
    
    createSmoothScrollStructure();
    
    if (smoother) {
        smoother.kill();
    }

    const wd = window.innerWidth;
    const isTablet = wd > md && wd < xl;
    
    // Для планшетов отключаем эффекты у определенных элементов
    if (isTablet) {
        // Находим элементы, которые НЕ должны анимироваться на планшетах
        const elementsToDisable = document.querySelectorAll([`.some-example-not-for-tablet`].join(', '));
        
        // Временно убираем data-speed атрибуты
        elementsToDisable.forEach(el => {
            el.dataset.originalSpeed = el.dataset.speed;
            delete el.dataset.speed;
        });
    }
    
    smoother = ScrollSmoother.create({
        smooth: 2, // Увеличенная плавность (медленнее прокрутка)
        smoothTouch: 1,
        // smoothTouch: isIOS?0.5:false, // Плавность для сенсорных устройств
        effects: true, // window.innerWidth > md ? true : false, // Включаем эффекты только для больших экранов
        
        normalizeScroll: (lg.matches) ? false : {
            allowNestedScroll: true, // позволяет вложенную прокрутку
            type: "pointer,touch,wheel"
        },

        ignoreMobileResize: true,
    });

    ftFixSmoother();
};

function createSmoothScrollStructure() {
  const body = document.body;

  
  if (!body) {
    console.warn('Body element not found');
    return;
  }

  // Проверяем, что структура еще не создана
  if (document.querySelector('#smooth-wrapper')) {
    return; // Структура уже существует
  }

  // Создаем wrapper div
  const smoothWrapper = document.createElement('div');
  smoothWrapper.id = 'smooth-wrapper';

  // Создаем content div
  const smoothContent = document.createElement('div');
  smoothContent.id = 'smooth-content';

  // Перемещаем все дочерние элементы body (кроме smoothWrapper) в smoothContent
  while (body.firstChild) {
    smoothContent.appendChild(body.firstChild);
  }

  // Добавляем content в wrapper
  smoothWrapper.appendChild(smoothContent);

  // Добавляем wrapper в body
  body.appendChild(smoothWrapper);
}

function ftFixSmoother() {

    const sOff = document.querySelector('.pictet-sign-off');
    const cookie = document.querySelector('.o-cookie-message');
    const leftPanel = document.querySelector('.left-panel');
    const shareContainer = document.querySelector('.share-container-inner');

    let end = `top+=${lg.matches? 77 : 0} bottom`

    gsap.killTweensOf(sOff);
    gsap.set(sOff, { clearProps: "all" });
    gsap.set(sOff, { bottom: `unset`, top: 0 });
    const nav = document.querySelector('.nav');

    // Скрываем рекламные и трекинговые элементы
    document.querySelectorAll('img[src*="adsct"], img[src*="brandmetrics.com/Info"], img[src*="./demo_files/Info"]').forEach(el => {
        el.style.display = 'none';
    });
    document.querySelectorAll('iframe[id^="_hjSafeContext_"]').forEach(el => {
        el.style.display = 'none';
    });

    ScrollTrigger.create({
      trigger: `.m-pc`,
      start: 'top top',
      end: '+=100000 top',
      pin: true,
      pinSpacing: false,
    })

    const shareBtn = document.querySelector('.left-panel .share-btn');
    if (shareBtn) {
      ScrollTrigger.create({
        trigger: shareBtn,
        endTrigger: `.footer`,
        start: 'top bottom-=80',
        end: end,
        pin: true,
        pinSpacing: false,
      });
    }

    ScrollTrigger.create({
      trigger: shareContainer,
      start: 'center center',
      end: '+=100000 center',
      pin: true,
      pinSpacing: false,
    })
 


    ScrollTrigger.create({
      trigger: cookie,
      endTrigger: `.footer`,
      start: 'bottom bottom-=20',
      end: 'bottom top',
      pin: cookie,
      pinSpacing: false,
  })

    ScrollTrigger.create({
      trigger: `.pictet-sign-off`,
      endTrigger: `.footer`,
      start: 'bottom bottom',
      end: end,
      pin: true,
      pinSpacing: false,
  })

    ScrollTrigger.create({
      trigger: nav,
      start: 'center center',
      end: '+=100000 top',
      pin: true,
      pinSpacing: false,
  })



}

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
    // cleanupElements();

    // Убиваем ScrollSmoother
    if (smoother) {
        smoother.kill();
        smoother = null;
    }

    gsap.set('*', { clearProps: "all" });
};

// const cleanupElements = () => {
//     gsap.set('.text', { clearProps: "opacity" });
// }

const reinitializeAnimations = () => {

    cleanupAnimations();

    gsap.delayedCall(0.1, () => {

        gsap.set([
        `.h1`,
        `.h2`,
        `.p`,
        `.intro-p`,
        ], { opacity: 0 })

        createScrollSmoother();

        initNavigation();
        animateText();
        animateCharts();
        animateLines();
        animateArts();
        animateQuote();
        animateHeaders();

        ScrollTrigger.refresh();

        gsap.to('#ag-infographic', {
            opacity: 1,
            duration: 0.75,
            ease: 'power2.out',
            onComplete: () => {
                // ScrollTrigger.refresh();
            }
        });

    });
}

const animateText = () => {
    document.querySelectorAll('.p, .intro-p').forEach(el => {
    // Сначала выставляем opacity 0
    gsap.set(el, { opacity: 0 });
    let point = "60%";
    
    if (lg.matches) {
      point = "75%";
    }

    ScrollTrigger.create({
        trigger: el,
        start: `top ${point}`,
        onEnter: () => {
        
        gsap.killTweensOf(el); // Убиваем предыдущие анимации, если есть  
        gsap.to(el, {
            opacity: 1,
            duration: 1.5,
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

const init = () => {
    
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    gsap.config({
        force3D: !isIOS,
        // nullTargetWarn: false,
    });

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);
    
    // Инициализируем анимации
    reinitializeAnimations();

}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
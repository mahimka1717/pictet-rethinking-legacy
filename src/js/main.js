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

let resizeTimer;
const lg = window.matchMedia('(max-width: 1299px)');
const sm = window.matchMedia('(max-width: 575px)');
let prevLgMatches = lg.matches;

export const ftFixSmootherTriggers = [];

// smoother
const createScrollSmoother = () => {
    
    createSmoothScrollStructure();

    let a = (smoother) ? true : false;
    if (smoother) smoother.kill();

    smoother = ScrollSmoother.create({
        smooth: 2, 
        smoothTouch: 1,
        effects: true,
        normalizeScroll: (lg.matches) ? false : {
            allowNestedScroll: true,
            type: "pointer,touch,wheel"
        },
        ignoreMobileResize: true,
    });

    if(!a){
      ftFixSmoother();
    }
    
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
    
    const nav = document.querySelector('.nav');

    const sOff = document.querySelector('.pictet-sign-off');
    const cookie = document.querySelector('.o-cookie-message');
    const shareContainer = document.querySelector('.share-container-inner');
    const shareBtn = document.querySelector('.left-panel .share-btn');

    let cookieStart = `bottom bottom-=${sm.matches? 0 : 20}`
    let end = `top+=${lg.matches? 77 : 0} bottom`


    gsap.killTweensOf(sOff);
    gsap.set(sOff, { clearProps: "all" });
    gsap.set(sOff, { bottom: `unset`, top: 0 });


    // Скрываем рекламные и трекинговые элементы
    document.querySelectorAll('img[src*="adsct"], img[src*="brandmetrics.com/Info"], img[src*="./demo_files/Info"]').forEach(el => {
        el.style.display = 'none';
    });
    document.querySelectorAll('iframe[id^="_hjSafeContext_"]').forEach(el => {
        el.style.display = 'none';
    });

    const trigger1 = ScrollTrigger.create({
      trigger: `.m-pc`,
      start: 'top top',
      end: '+=100000 top',
      pin: true,
      pinSpacing: false,
    })
    ftFixSmootherTriggers.push(trigger1);

    

     const trigger2 =  ScrollTrigger.create({
        trigger: shareBtn,
        endTrigger: `.footer`,
        start: 'top bottom-=80',
        end: end,
        pin: true,
        pinSpacing: false,
      });
ftFixSmootherTriggers.push(trigger2);

    const trigger3 = ScrollTrigger.create({
      trigger: shareContainer,
      start: 'center center',
      end: '+=100000 center',
      pin: true,
      pinSpacing: false,
    })
 ftFixSmootherTriggers.push(trigger3);


    const trigger4 = ScrollTrigger.create({
      trigger: cookie,
      endTrigger: `.footer`,
      start: cookieStart,
      end: 'bottom top',
      pin: cookie,
      pinSpacing: false,
  })
  ftFixSmootherTriggers.push(trigger4);

    const trigger5 = ScrollTrigger.create({
      trigger: `.pictet-sign-off`,
      endTrigger: `.footer`,
      start: 'bottom bottom',
      end: end,
      pin: true,
      pinSpacing: false,
  })
  ftFixSmootherTriggers.push(trigger5);

   const trigger6 =  ScrollTrigger.create({
      trigger: nav,
      start: 'center center',
      end: '+=100000 top',
      pin: true,
      pinSpacing: false,
  })
  ftFixSmootherTriggers.push(trigger6);



}

const handleResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (lg.matches !== prevLgMatches) {
            prevLgMatches = lg.matches;
            location.reload();
        }
    }, 200);
};

const handleOrientationChange = () => {
    setTimeout(() => {
        if (lg.matches !== prevLgMatches) {
            prevLgMatches = lg.matches;
            location.reload();
        }
    }, 200);
};

const cleanupAnimations = () => {
  // ScrollTrigger.getAll().forEach(trigger => {
  //   const vars = trigger.vars || {};
  //   // Не убиваем триггеры ScrollSmoother и связанные с dataSpeed/dataLag/effects
  //   if (
  //     !ftFixSmootherTriggers.includes(trigger)
  //   ) {
  //     trigger.kill();
  //   }
  // });
    // gsap.killTweensOf("*");
    // gsap.set('*', { clearProps: "all" });
};

const reinitializeAnimations = () => {

    cleanupAnimations();

    if(!smoother) {
        createScrollSmoother();
    }

         gsap.set([
        `.h1`,
        `.h2`,
        `.p`,
        `.intro-p`,
        ], { opacity: 0 })

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
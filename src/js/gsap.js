import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export let smoother;

const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

const xl = 1440;
const md = 740;
let resizeTimer;


const heroAnimate = () => {
    let wd = window.innerWidth

    // hero animation
    if (wd >= md) {

        const hero = document.querySelector('.hero');
        const heroVideo = document.querySelector('.video-1-wrapper');
        const heroHeader = document.querySelector('.hero-header');
        const heroText = document.querySelector('.hero-text');
        const heroPrompt = document.querySelector('.prompt');

        if (hero && heroVideo && heroHeader && heroText && heroPrompt) {
            const heroHeaderSpans = heroHeader.querySelectorAll('span');
            const [span1, span2, span3] = heroHeaderSpans;

            // Устанавливаем начальные состояния
            // gsap.set(heroVideo, { opacity: 0 });
            gsap.set([span1, span2, span3], { 
                display: 'inline-block',
                y: 30, 
                opacity: 0, 
            });
            gsap.set([heroText, heroPrompt], { y: 20, opacity: 0, force3D: true });

            // Создаем timeline
            const heroTl = gsap.timeline();

            // 1. Анимация изображения (видео) из opacity 0 в 1, длительность 1с
            heroTl.to(heroVideo, {
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            }, 0)
            
            // 2. Через 1.5с анимация первого спана (0 + 1 + 0.5)
            .to(span1, {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out"
            }, 0.8)
            
            // 3. Через 1.8с анимация второго и третьего спанов одновременно (1.5 + 0.3)
            .to([span2, span3], {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
            }, 1.0)
            
            // 4. Через 2.3с одновременно появляются текст и промпт (1.8 + 0.5)
            .to([heroText, heroPrompt], {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            }, 1.8);
        }
    }
}

const subheaderAnimate = () => {
    const subheaders = document.querySelectorAll('.subheader-element');
    subheaders.forEach((subheader) => {
        const firstText = subheader.children[0];
        const secondDiv = subheader.children[1];
        
        if (firstText && secondDiv) {
            // Разбиваем первый текст на буквы
            const textContent = firstText.textContent;
            const words = textContent.split(' ');
            firstText.innerHTML = words.map(word => {
                const letters = word.split('').map(char => 
                    `<span style="display: inline-block;">${char}</span>`
                ).join('');
                return `<span style="display: inline-block; white-space: nowrap;">${letters}</span>`;
            }).join(' ');

            const letters = firstText.querySelectorAll('span span');
            
            // Устанавливаем начальные состояния
            gsap.set(letters, { 
                y: 10, 
                opacity: 0,
                scale: 0.9
            });
            gsap.set(secondDiv, { 
                y: 20, 
                opacity: 0 
            });
            
            // Создаем анимацию по скролл триггеру
            const lettersTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: subheader,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
            
            // Анимируем буквы одну за другой
            letters.forEach((letter, index) => {
                lettersTimeline.to(letter, {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: "power2.out"
                }, index * 0.035); // небольшая задержка между буквами
            });
            
            // Анимируем второй div одновременно с началом анимации букв
            // const totalDuration = (letters.length - 1) * 0.03 + 0.6; // время до конца последней буквы
            const totalDuration = 2; // время до конца последней буквы
            lettersTimeline.to(secondDiv, {
                y: 0,
                opacity: 1,
                duration: totalDuration,
                ease: "power2.out"
            }, 0); // начинаем одновременно с первой буквой
        }
    });
}

const sectionAnimate = () => {
    let wd = window.innerWidth
    // section animations
    if (wd >= xl) {
        const sections = [
        `.flexcontainer`,
        `.img-0`,
            `.group-2`, 
            // `.frame-8`,
            `.frame-9-0`,
            `.flexcontainer-2`, 
            `.text-wrapper-11`, 
            `.frame-29`, 
            `.each-person-who`, 
            `.text-wrapper-10`, 
            `.frame-16`, 
            `.frame-19`,
            `.img-10`,
            `.img-13`,
            `.frame-24`,
            `.flexcontainer-4`,
            `.img-14`,
            `.frame-9-2`,
            `.flexcontainer-3`
        ];

        sections.forEach((sectionSelector) => {
            const section = document.querySelector(sectionSelector);
            
            if (section) {
                gsap.fromTo(section, 
                    { 
                        y: 50, 
                        opacity: 0 
                    },
                    { 
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 75%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }
        });
    }
};

const figureAnimate = () => {
    
    let wd = window.innerWidth

    const figures = document.querySelectorAll('.figure');
    figures.forEach((figure, index) => {
        const img = figure.querySelector('img');
  
        if (figure && img) {
            
            // Устанавливаем постоянный масштаб 1.2
            gsap.set(img, { scale: 1.2 });
            
            // Анимируем перемещение по Y - эффект параллакса
            gsap.fromTo(img, 
                { y: "10%" },
                { 
                    y: "-10%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: figure,
                        start: "top bottom",
                        end: ()=>`top+=${index===0?1077:958} top`,
                        scrub: true,
                        invalidateOnRefresh: true,
              
                    }
                }
            );
            if (wd >= md) {

                gsap.from(figure, {
                    scale: 0.75,
                    ease: "none",
                    scrollTrigger: {
                        trigger: figure,
                        start: "top 75%",
                        end: "top 50%",
                        toggleActions: "play none none reverse",
                        scrub: 1,
                        // markers: true
                    }
                });
            }


        }
    });
}

const ctaAnimate = () => {
    const cta = document.querySelector('.cta');
    const ctaText = document.querySelector('.cta-text');
    const ctaBtn = document.querySelector('.cta-button');
    if (ctaText && ctaBtn) {
        gsap.fromTo(ctaText, 
            { y: 20, opacity: 0 }, 
            { 
                y: 0, 
                opacity: 1, 
                duration: 0.75, 
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: cta,
                    start: "top bottom-=142",
                    toggleActions: "play none none reverse",
                }
            }
        );

        gsap.fromTo(ctaBtn, 
            { y: 30, opacity: 0 },
            {
                y: 0, 
                opacity: 1,
                duration: 0.25,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: cta,
                    start: "top bottom-=172",
                    toggleActions: "play none none reverse",
                }
            }
        );
    }
}

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

const switchBg = () => {
    ScrollTrigger.create({
        trigger: ".hero",
        start: "bottom 66%",
        onEnter: () => {
            // light mode
            gsap.killTweensOf(".gradient");
            gsap.to(".article", {
                backgroundColor: "#f7f4ef",
                duration: 0.75,
                ease: "power2.out"
            });

            gsap.to(".hero", {
                color: "#000",
                duration: 0.75,
                ease: "power2.out"
            });

           gsap.to(".flexcontainer", {
                color: "#000",
                duration: 0.75,
                ease: "power2.out"
            });

            gsap.to(".gradient", {
                opacity: 1,
                duration: 0.75,
                ease: "power2.out",
                delay: 0.75
            });

        },
        onLeaveBack: () => {
            // dark mode

            gsap.killTweensOf(".gradient");
            gsap.to(".article", {
                backgroundColor: "#111111",
                duration: 0.75,
                ease: "power2.out"
            });

            gsap.to(".hero", {
                color: "#fff",
                duration: 0.75,
                ease: "power2.out"
            });

            gsap.to(".flexcontainer", {
                color: "#fff",
                duration: 0.75,
                ease: "power2.out"
            });

            gsap.to(".gradient", {
                opacity: 0,
                duration: 0,
                ease: "power2.out"
            });

        }
    });


    const  gtop = document.querySelector('.gradient-top');
    const  gbottom = document.querySelector('.gradient-bottom');
    ScrollTrigger.create({
        trigger: ".figure1",
        endTrigger: ".figure2",
        start: "top top",
        end: "top top",
        onEnter: () => {
            gsap.set(gtop, { background: `linear-gradient(to bottom, rgba(231, 229, 217, 0.8), rgba(231, 229, 217, 0))`});
            gsap.set(gbottom, { background: `linear-gradient(to top, rgba(231, 229, 217, 0.8), rgba(231, 229, 217, 0))`});
        },
        onEnterBack: () => {
            gsap.set(gtop, { background: `linear-gradient(to bottom, rgba(231, 229, 217, 0.8), rgba(231, 229, 217, 0))`});
            gsap.set(gbottom, { background: `linear-gradient(to top, rgba(231, 229, 217, 0.8), rgba(231, 229, 217, 0))`});
        },
        onLeave: () => {
            gsap.set(gtop, { background: `linear-gradient(to bottom, rgba(247, 244, 239, 0.8), rgba(247, 244, 239, 0))`});
            gsap.set(gbottom, { background: `linear-gradient(to top, rgba(247, 244, 239, 0.8), rgba(247, 244, 239, 0))`});
        },
        onLeaveBack: () => {
            gsap.set(gtop, { background: `linear-gradient(to bottom, rgba(247, 244, 239, 0.8), rgba(247, 244, 239, 0))`});
            gsap.set(gbottom, { background: `linear-gradient(to top, rgba(247, 244, 239, 0.8), rgba(247, 244, 239, 0))`});
        }
    });
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
    }, 500);
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
};

const cleanupElements = () => {
    
    // gradient
    gsap.set('.gradient-top', { clearProps: "background" });
    gsap.set('.gradient-bottom', { clearProps: "background" });

    // Hero элементы
    gsap.set('.hero-header span', { clearProps: "all" });
    gsap.set('.hero-text, .prompt', { clearProps: "all" });
    gsap.set('.video-1-wrapper', { clearProps: "all" });
    
    // Subheader элементы - восстанавливаем оригинальный HTML
    const subheaders = document.querySelectorAll('.subheader-element');
    subheaders.forEach((subheader) => {
        const firstText = subheader.children[0];
        if (firstText && firstText.dataset.originalText) {
            firstText.innerHTML = firstText.dataset.originalText;
        }
        gsap.set(subheader.children, { clearProps: "all" });
    });
    
    // Section элементы
    const sectionSelectors = [
        '.flexcontainer', '.img-0', '.group-2', '.frame-9-0', '.flexcontainer-2', 
        '.text-wrapper-11', '.frame-29', '.each-person-who', '.text-wrapper-10', 
        '.frame-16', '.frame-19', '.img-10', '.img-13', '.frame-24', 
        '.flexcontainer-4', '.img-14', '.frame-9-2', '.flexcontainer-3'
    ];
    sectionSelectors.forEach(selector => {
        gsap.set(selector, { clearProps: "all" });
    });
    
    // Figure элементы
    gsap.set('.figure', { clearProps: "all" });
    gsap.set('.figure img', { clearProps: "all" });
    
    // CTA элементы
    gsap.set('.cta-text, .cta-button', { clearProps: "all" });
    
    // Background элементы
    gsap.set('.article', { clearProps: "backgroundColor" });
    gsap.set('.hero', { clearProps: "color" });
    gsap.set('.flexcontainer', { clearProps: "color" });
    gsap.set('.gradient', { clearProps: "opacity" });
    
    // Восстанавливаем data-speed атрибуты для планшетов
    const elementsWithOriginalSpeed = document.querySelectorAll('[data-original-speed]');
    elementsWithOriginalSpeed.forEach(el => {
        if (el.dataset.originalSpeed) {
            el.dataset.speed = el.dataset.originalSpeed;
            delete el.dataset.originalSpeed;
        }
    });
}

const reinitializeAnimations = () => {

    cleanupAnimations();

    gsap.delayedCall(0.1, () => {

        createScrollSmoother();

        // switch bg for article
        switchBg();
        // hero animation
        heroAnimate();
        // subheader animation
        subheaderAnimate();
        // section animations
        sectionAnimate();
        // big image animations for all figures
        figureAnimate();
        // cta animation
        ctaAnimate();

        // fixed position for .m-pc and .gradient
        ScrollTrigger.create({
            trigger: `.m-pc`,
            start: 'top top',
            end: '+=100000 top',
            pin: true,
            pinSpacing: false,
        })

        ScrollTrigger.create({
            trigger: `.gradient`,
            start: 'top top',
            endTrigger: '.article',
            end: 'bottom bottom+=100',
            pin: true,
            pinSpacing: false,
            onRefresh: self => {
                // Находим pin-spacer и убираем его высоту
                const spacer = self.spacer;
                if (spacer) {
                    gsap.set(spacer, { height: 0, overflow: "visible" });
                }
            },
            onUpdate: self => {
                // Также убираем высоту во время обновлений
                const spacer = self.spacer;
                if (spacer) {
                    gsap.set(spacer, { height: 0, overflow: "visible" });
                }
            },
            // markers: true
        })

        // Обновляем ScrollTriggers
        ScrollTrigger.refresh();
    })
}


export const initGSAP = () => {

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    gsap.config({
        force3D: !isIOS,
        // nullTargetWarn: false,
    });


    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);
    
    // Инициализируем анимации
    reinitializeAnimations();

    // show article
    gsap.to(".article", {
        opacity: 1,
        duration: 0.75,
        ease: "power2.inOut"
    });
    
}
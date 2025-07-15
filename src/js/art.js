



import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);

  const ids = ["1", "2", "3", "4", "5", "30", "36", "37", "38", "39", "51", "55",
    "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68",

    "14", "15", "16", "17", "19", "20"

    // "12", "13", "14", "15", "16", "18", "19", "20", "21"


  ];


const animateSinglePersons = (ids) => {

  ids.forEach(id => {
    const el = document.querySelector(`.art[data-id="${id}"]`);
    if (!el) return;

    // Получаем left относительно .article-wrapper ширины (1260px)
    const wrapper = document.querySelector('.article-wrapper');
    const wrapperRect = wrapper.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const left = 1260 - (elRect.left - wrapperRect.left);
    const originX = (left / 1260) * 100;

    el.style.transformOrigin = `${originX}% 0%`;

    gsap.set(el, { scale: 1.5, opacity: 0, y: 0 });

    gsap.to(el, {
      scale: 1,
      opacity: 1,
      y: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top center",
        end: "bottom center",
        scrub: true,
        // markers: true // для отладки
      }
    });
  });
}

const animateSingleBuilding = (ids) => {
    // wrapBuildingArtElements(ids);
    ids.forEach(id => {
        const el = document.querySelector(`.art[data-id="${id}"] > img`);
        if (!el) return;

        gsap.set(`.art[data-id="${id}"]`, { opacity: 1 });
        // console.log(el)
        gsap.set(el, { opacity: 1, y: "150%" });
        gsap.to(el, {
            opacity: 1,
            y: "0%",
            ease: "power3.out",
            scrollTrigger: {
                trigger: `.art[data-id="${id}"]`,
                start: "top 50%",
                end: "bottom 50%",
                scrub: true,
                // markers: true // для отладки
            }
        });

        let masked = document.querySelector(`.art[data-id="${id}"]`);
        gsap.set(masked, { clipPath: `ellipse(30% 0% at 50% 50%)` });
        gsap.to(masked, {
            clipPath: `ellipse(100% 65% at 50% 50%)`,
            ease: "power3.out",
            scrollTrigger: {
                trigger: masked,
                start: "top 50%",
                end: "bottom 50%",
                scrub: true,
                // markers: true // для отладки
            }
        });
    });
}


const animateArt1 = () => {

    // gsap.set(`.shadow1`, { opacity: 0 });
    gsap.set([
        `.art[data-id='6']`,
        `.art[data-id='7']`,
        `.art[data-id='8']`,
        `.art[data-id='9']`,
        `.art[data-id='10']`,
        `.art[data-id='11']`
    ], { opacity: 1 });

    const a1 = [`.art[data-id='6']`, `.art[data-id='9']`];
    const a2 = [`.art[data-id='7']`, `.art[data-id='10']`];
    const a3 = [`.art[data-id='8']`, `.art[data-id='11']`];

    // --- Генерация SVG-маски и применение к каждому элементу группы ---
    const applySvgMaskToArts = (group) => {
        group.forEach(sel => {
            const el = document.querySelector(sel);
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            // SVG mask as data URL (треугольник снизу)
            const svgString = `<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height+40}'><rect x='0' y='0' width='${width}' height='${height}' fill='white'/><polygon points='0,${height} ${width},${height} ${width/2},${height+40}' fill='white'/></svg>`;
            const encoded = 'data:image/svg+xml;utf8,' + encodeURIComponent(svgString);
            el.style.webkitMaskImage = `url('${encoded}')`;
            el.style.maskImage = `url('${encoded}')`;
            el.style.webkitMaskSize = 'cover';
            el.style.maskSize = 'cover';
            el.style.webkitMaskRepeat = 'no-repeat';
            el.style.maskRepeat = 'no-repeat';
        });
    };

    // Применяем SVG-маску к каждому элементу из a1
    applySvgMaskToArts(a1);

    // Анимация для a1, затем a2, затем a3, последовательно
    const groups = [a1, a2, a3];
    groups.forEach((group, i) => {
        group.forEach((selector) => {
            const el = document.querySelector(selector);
            if (!el) return;
            gsap.set(el, { y: 300 });
            gsap.to(el, {
                y: 0,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: `.art-group[data-id='1']`,
                    start: () => `top+=${i * 50} center`,
                    end: () => `top+=${i * 50 + 400} center`,
                    scrub: true,
                    toggleActions: "play none none reverse",
                    // markers: true
                }
            });
        });
    });
}

const animateArt2 = () => {
    let els = [        
        `.art[data-id='12']`,
        `.art[data-id='13']`,
    ]

    gsap.set(els, { opacity: 1, y: 650 });
    gsap.to(els, {
        y: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: `.art-group[data-id="2"]`,
            start: "top 50%",
            end: "bottom 50%",
            scrub: true,
            // markers: true // для отладки
        }
    });

    let masked = `.art-group[data-id="2"]`
    gsap.set(masked, { clipPath: `ellipse(0% 0% at 50% 50%)` });
    gsap.to(masked, {
        clipPath: `ellipse(100% 65% at 50% 50%)`,
        ease: "power3.out",
        scrollTrigger: {
            trigger: `.art-group[data-id="2"]`,
            start: "top 50%",
            end: "bottom 50%",
            scrub: true,
            // markers: true // для отладки
        }
    });
};

const animateArt3 = () => {
    let els = [        
        `.art[data-id='18']`,
        `.art[data-id='21']`
    ]

    gsap.set(els, { opacity: 1, y: 350 });
    gsap.to(els, {
        y: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: `.art-group[data-id="3"]`,
            start: "top 50%",
            end: "bottom 50%",
            scrub: true,
            // markers: true // для отладки
        }
    });

    let masked = `.art-group[data-id="3"]`
    gsap.set(masked, { clipPath: `ellipse(0% 0% at 50% 50%)` });
    gsap.to(masked, {
        clipPath: `ellipse(100% 65% at 50% 50%)`,
        ease: "power3.out",
        scrollTrigger: {
            trigger: `.art-group[data-id="3"]`,
            start: "top 50%",
            end: "bottom 50%",
            scrub: true,
            // markers: true // для отладки
        }
    });

}

const animateArt4 = () => {

    gsap.set(".crack", { opacity: 0 });

    animateSinglePersons([
        "23", 
        "24", 
    ]);

    animateSingleBuilding([
        "22",
        "25", 
        "26"
    ]);


    gsap.to(".crack", {
        opacity: 1,
        ease: "power1.inOut",
        duration: 0.25,
        scrollTrigger: {
            trigger: ".crack",
            start: "top center",

            scrub: false,
            toggleActions: "play reverse play reverse",
 
        }
    });
    gsap.to("#crack_close", {
        morphSVG: "#crack_open",
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".crack",
            start: "top center",
            end: "bottom center",
            scrub: true,

        }
    });
}

const animateArt5 = () => {
    animateSingleBuilding([
        "33",
        "34", 
        "35"
    ]);


    let art31 = document.querySelector(`.art[data-id="31"]`);
    let art32 = document.querySelector(`.art[data-id="32"]`);

    gsap.set(art31, { y: "234px" });
    // gsap.set(art31, { opacity: 0 });
    // gsap.set(art32, { opacity: 0 });
    gsap.to(art31, {
        y: "0%",
        ease: "power3.out",
        scrollTrigger: {
            trigger: `.art[data-id="33"]`,
            start: "top 50%",
            end: "bottom 50%",
            scrub: true,
            // markers: true // для отладки
        }
    });


    ScrollTrigger.create({
        trigger: `.art[data-id="33"]`,
        start: "25% 50%",
        onEnter: () => {
            // console.log('enter');
            gsap.to([art31], {
                opacity: 1,
                ease: "power3.out",
                duration: 0.5,
        
                stagger: 0.5
            });
        },
        onLeaveBack: () => {
            // console.log('leaveBack');
            gsap.to([art31], {
                opacity: 0,
                ease: "power3.out",
                duration: 0.166,
           
            });
        },
    });

    ScrollTrigger.create({
        trigger: `.art[data-id="33"]`,
        start: "35% 50%",
        onEnter: () => {
            // console.log('enter');
            gsap.to([art32], {
                opacity: 1,
                ease: "power3.out",
                duration: 0.5,
        
                stagger: 0.5
            });
        },
        onLeaveBack: () => {
            // console.log('leaveBack');
            gsap.to([art32], {
                opacity: 0,
                ease: "power3.out",
                duration: 0.166,
           
            });
        },
    });

    let point = "center-=50";

    gsap.to(art32, {
    scrollTrigger: {
        trigger: ".line[data-id='13']",
        start: ()=> `top ${point}`,
        end: ()=>`bottom ${point}`,
        scrub: true,
        // markers: true
    },
    motionPath: {
        path: ".line[data-id='13'] > path", // или массив точек [{x:..., y:...}, ...]
        align: ".line[data-id='13'] > path",
        autoRotate: false,
        alignOrigin: [0, 0.5]
    },
    duration: 1,
    ease: "power1.inOut"
    });


}

const animateArt6 = () => {
}

const animateArt7 = () => {

    let els = [        
        `.art[data-id='40']`,
        `.art[data-id='41']`,
        `.art[data-id='42']`
    ];

    // Установим начальные значения для всех монет
    gsap.set(els, { opacity: 1 });

    // Для каждой монеты — индивидуальная анимация падения с параллаксом и "листопадом"
    gsap.fromTo(
        `.art[data-id='40']`,
        {
            y: 0,
            x: -80,
            rotateZ: -20,
            rotateY: 10,
            rotateX: -15,
            scale: 1.1,
            opacity: 0.85
        },
        {
            y: 120,
            x: 60,
            rotateZ: 120,
            rotateY: -30,
            rotateX: 25,
            scale: 1.05,
            opacity: 1,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: `.art-group[data-id="7"]`,
                start: "top bottom",
                end: "top+=800 top",
                scrub: true,
                // markers: true
            }
        }
    );

    gsap.fromTo(
        `.art[data-id='41']`,
        {
            y: 0,
            x: 100,
            rotateZ: 40,
            rotateY: -15,
            rotateX: 20,
            scale: 0.95,
            opacity: 0.8
        },
        {
            y: 150,
            x: -90,
            rotateZ: 320,
            rotateY: 35,
            rotateX: -30,
            scale: 1.15,
            opacity: 1,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: `.art-group[data-id="7"]`,
                start: "top bottom",
                end: "top+=800 top",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        `.art[data-id='42']`,
        {
            y: 0,
            x: 40,
            rotateZ: -60,
            rotateY: 25,
            rotateX: 10,
            scale: 1.2,
            opacity: 0.9
        },
        {
            y: 120,
            x: 120,
            rotateZ: 200,
            rotateY: -40,
            rotateX: 40,
            scale: 1.05,
            opacity: 1,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: `.art-group[data-id="7"]`,
                start: "top bottom",
                end: "top+=800 top",
                scrub: true,
            }
        }
    );
}

const animateArt8 = () => {


    let els = [        
        `.art[data-id='43']`,
        `.art[data-id='44']`,
        `.art[data-id='45']`
    ]

    // gsap.set(els, { opacity: 1, y: 0});
    gsap.set(els, { opacity: 1, y: 350 });

    gsap.to(els, {
        y: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: `.art-group[data-id="8"]`,
            start: "top 50%",
            end: "bottom 50%",
            scrub: true,
            // markers: true // для отладки
        }
    });



    let masked = document.querySelector(`.art-group[data-id="8"]`);
    gsap.set(masked, { clipPath: `ellipse(30% 0% at 50% 50%)` });
    gsap.to(masked, {
        clipPath: `ellipse(100% 65% at 50% 50%)`,
        ease: "power3.out",
        scrollTrigger: {
            trigger: masked,
            start: "top 50%",
            end: "bottom 50%",
            scrub: true,
            // markers: true // для отладки
        }
    });


}

const animateArt9 = () => {

    gsap.set([
        `.art[data-id='47']`,
        `.art[data-id='48']`,
        `.art[data-id='49']`,
        `.art[data-id='50']`
    ], { opacity: 1 });

    const a1 = [`.art[data-id='47']`, `.art[data-id='49']`];
    const a2 = [`.art[data-id='48']`, `.art[data-id='50']`];


    // Анимация для a1, затем a2, затем a3, последовательно
    const groups = [a1];
    groups.forEach((group, i) => {
        group.forEach((selector) => {
            const el = document.querySelector(selector);
            if (!el) return;
            gsap.set(el, { y: 300 });
            gsap.to(el, {
                y: 0,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: `.art-group[data-id='9']`,
                    start: () => `top+=${i * 50} center`,
                    end: () => `top+=${i * 50 + 400} center`,
                    scrub: true,
                    toggleActions: "play none none reverse",
                    // markers: true
                }
            });
        });
    });

}

const animateArt10 = () => {
}


export const animateArts = () => {

    animateSinglePersons(ids);

    animateArt1(); 
    animateArt2();
    animateArt3();
    animateArt4();
    animateArt5();
    animateArt6();
    animateArt7();
    animateArt8();
    animateArt9();
    animateArt10(); 
 
};



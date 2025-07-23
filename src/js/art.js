import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);

const ids = [
    "1", "2", "3", "4", "5", "30", "36", "37", "38", "39", "51", "55",
    "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68",
    "14", "15", "16", "17", "19", "20"
    // "12", "13", "14", "15", "16", "18", "19", "20", "21"
];

const sm = window.matchMedia('(max-width: 575px)');
const lg = window.matchMedia('(max-width: 1299px)');
let point = "60%";
if (lg.matches) {
  point = "75%";
}



const animateSinglePersons = () => {

    // Дельта смещения для анимаций
    const DELTA = 20;
    // Массив направлений и соответствующих классов
    const animConfigs = [
        { cls: "anim__9", x: -DELTA, y: 0 },      // Слева (9)
        { cls: "anim__6", x: 0, y: DELTA },       // Снизу (6)
        { cls: "anim__730", x: -DELTA, y: DELTA },   // Слева снизу (7:30)
        { cls: "anim__430", x: DELTA, y: DELTA },    // Справа снизу (4:30)
        { cls: "anim__3", x: DELTA, y: 0 },       // Справа (3)
        { cls: "anim__1030", x: -DELTA, y: -DELTA },  // Справа сверху (10:30)
        { cls: "anim__12", x: 0, y: -DELTA },     // Сверху (12)
        { cls: "anim__130", x: DELTA, y: -DELTA },  // Слева сверху (1:30)
        { cls: "anim__0", x: 0, y: 0 },  // Слева сверху (1:30)
    ];

    animConfigs.forEach(({ cls, x, y }) => {
        document.querySelectorAll(`.art > img.${cls}`).forEach(img => {
            // Родитель .art
            const parent = img.closest('.art');
            
            // get .art data-id
            let delta = `0%`
            const dataId = parent ? parent.getAttribute('data-id') : null;
            if(dataId && dataId === "24"){
                if(lg.matches) {
                    delta = `15%`
                }
                console.log(delta)
            }


            if (!parent) return;
            gsap.set(img, { opacity: 0, x, y });
            gsap.to(img, {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 0.75,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: parent,
                    start: `top 75%+=${delta}`,
                    toggleActions: "play none none reverse",
                    // markers: true // для отладки
                }
            });
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
                start: `top ${point}`,
                end: `bottom ${point}`,
                scrub: true,
                // markers: true // для отладки
            }
        });

        // let masked = document.querySelector(`.art[data-id="${id}"]`);
        // gsap.set(masked, { clipPath: `ellipse(30% 0% at 50% 50%)` });
        // gsap.to(masked, {
        //     clipPath: `ellipse(100% 65% at 50% 50%)`,
        //     ease: "power3.out",
        //     scrollTrigger: {
        //         trigger: masked,
        //         start: `top ${point}`,
        //         end: `bottom ${point}`,
        //         scrub: true,
        //         // markers: true // для отладки
        //     }
        // });
    });
}


const animateArt1 = () => {

}

const animateArt2 = () => {

};

const animateArt3 = () => {

}

const animateArt4 = () => {

    const art23 = document.querySelector(`.art[data-id="23"]`);
    const art24 = document.querySelector(`.art[data-id="24"]`);
    gsap.set(".crack", { opacity: 0 }); 

    gsap.to(".crack", {
        opacity: 1,
        ease: "power1.inOut",
        duration: 0.25,
        scrollTrigger: {
            trigger: ".crack",
            start: `top ${point}`,
            scrub: false,
            toggleActions: "play reverse play reverse",
 
        }
    });
    gsap.to("#crack_close", {
        morphSVG: "#crack_open",
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".crack",
            start: `top ${point}`,
            end: `bottom ${point}`,
            scrub: true,

        }
    });

    gsap.from(art24, {
        x: -15,
        y: -15,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".crack",
            start: `top ${point}`,
            end: `bottom ${point}`,
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
    gsap.set(art31, { opacity: 0 });
    gsap.set(art32, { opacity: 0 });
    gsap.to(art31, {
        y: "0%",
        ease: "power3.out",
        scrollTrigger: {
            trigger: `.art[data-id="33"]`,
            start: `top ${point}`,
            end: `bottom ${point}`,
            scrub: true,
            // markers: true // для отладки
        }
    });


    ScrollTrigger.create({
        trigger: `.art[data-id="33"]`,
        start: `25% ${point}`,
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
        start: `35% ${point}`,
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

    // let point = "center-=50";

    gsap.to(art32, {
    scrollTrigger: {
        trigger: ".line[data-id='13']",
        start: ()=> `top ${point}-=50`,
        end: ()=>`bottom ${point}-=50`,
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
    // gsap.set(els, { opacity: 1 });

    // Для каждой монеты — индивидуальная анимация падения с параллаксом и "листопадом"
    gsap.fromTo(
        `.art[data-id='40']`,
        {
            rotateZ: -20,
            rotateY: 10,
            rotateX: -15,
        },
        {
            rotateZ: 120,
            rotateY: -30,
            rotateX: 25,
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
            rotateZ: -40,
            rotateY: -15,
            rotateX: 20,
        },
        {
            rotateZ: 170,
            rotateY: 35,
            rotateX: -30,
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
            rotateZ: -60,
            rotateY: 25,
            rotateX: 10,
        },
        {
            rotateZ: 200,
            rotateY: -40,
            rotateX: 40,
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

    animateSinglePersons();

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



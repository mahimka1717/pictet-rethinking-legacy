import { initGSAP } from "./gsap.js";
import { initNavigation } from "./nav.js";
import { initLineDrawAnimation } from "./line.js";

document.addEventListener("DOMContentLoaded", async () => {
    
    // initGSAP();
    initNavigation();
    
    // Инициализируем анимацию линий после небольшой задержки
    // setTimeout(() => {
    //     initLineDrawAnimation();
    // }, 100);

});
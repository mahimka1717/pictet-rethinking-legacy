import { initGSAP } from "./gsap.js";


// Функция для инициализации ленивой загрузки изображений
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img.lazy');
    
    // Если браузер поддерживает IntersectionObserver
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback для старых браузеров - просто загружаем все изображения
        lazyImages.forEach(img => {
            img.classList.remove('lazy');
        });
    }
}





document.addEventListener("DOMContentLoaded", async () => {
    // console.log("Heritage meets tailored luxury in cognac - initialized");
    
    // initGSAP();
    // initLazyLoading();
  

});
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Регистрируем плагин ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Состояние анимации
let allLines = [];
let completedLines = new Set();

// Абсолютно строгая последовательная анимация
export const initAbsoluteSequentialAnimations = () => {
    const lineElements = document.querySelectorAll('.line');
    
    if (!lineElements.length) return;
    
    // Сбрасываем состояние
    completedLines.clear();
    
    // Подготавливаем данные всех линий
    allLines = Array.from(lineElements).map((line, index) => {
        const path = line.querySelector('path');
        if (!path) return null;
        
        const pathLength = path.getTotalLength();
        
        // Устанавливаем начальные значения - все линии невидимы
        gsap.set(path, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength
        });
        
        return {
            element: line,
            path: path,
            pathLength: pathLength,
            index: index
        };
    }).filter(Boolean);
    
    console.log(`Найдено ${allLines.length} линий для строго последовательной анимации`);
    
    // Создаем ScrollTrigger для каждой линии
    allLines.forEach((lineData, index) => {
        const { element, path, pathLength } = lineData;
        
        ScrollTrigger.create({
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                
                // СТРОГАЯ ПРОВЕРКА: линия может анимироваться только если ВСЕ предыдущие завершены
                const canAnimate = canLineAnimateStrict(index);
                
                if (canAnimate && progress > 0) {
                    // Анимируем текущую линию
                    const currentOffset = pathLength * (1 - progress);
                    gsap.set(path, {
                        strokeDashoffset: currentOffset
                    });
                    
                    // Отмечаем как завершенную при 95% прогресса
                    if (progress >= 0.95) {
                        if (!completedLines.has(index)) {
                            completedLines.add(index);
                            console.log(`✅ Линия ${index} ЗАВЕРШЕНА! Завершено: ${Array.from(completedLines).join(', ')}`);
                        }
                    }
                } else {
                    // Линия НЕ может анимироваться - остается невидимой
                    gsap.set(path, {
                        strokeDashoffset: pathLength
                    });
                }
                
                // Отладка для первых линий
                if (index <= 5) {
                    console.log(`Линия ${index}: прогресс=${Math.round(progress * 100)}%, можетАнимироваться=${canAnimate}, завершена=${completedLines.has(index)}`);
                }
            },
            onLeave: () => {
                // При выходе из viewport завершенные линии остаются видимыми
                if (completedLines.has(index)) {
                    gsap.set(path, {
                        strokeDashoffset: 0 // Оставляем полностью видимой
                    });
                } else {
                    gsap.set(path, {
                        strokeDashoffset: pathLength // Скрываем незавершенную
                    });
                }
            },
            onEnterBack: () => {
                // При возврате в viewport проверяем состояние заново
                if (completedLines.has(index)) {
                    gsap.set(path, {
                        strokeDashoffset: 0 // Завершенная остается видимой
                    });
                }
            }
        });
    });
    
    // СТРОГАЯ функция проверки - линия может анимироваться ТОЛЬКО если ВСЕ предыдущие завершены
    const canLineAnimateStrict = (currentIndex) => {
        // Первая линия (индекс 0) всегда может анимироваться
        if (currentIndex === 0) {
            return true;
        }
        
        // Для всех остальных линий: проверяем что ВСЕ предыдущие завершены
        for (let i = 0; i < currentIndex; i++) {
            if (!completedLines.has(i)) {
                if (currentIndex <= 5) { // Логируем только первые линии
                    console.log(`❌ Линия ${currentIndex} заблокирована! Линия ${i} не завершена`);
                }
                return false;
            }
        }
        
        console.log(`✅ Линия ${currentIndex} может анимироваться! Все предыдущие завершены`);
        return true;
    };
};

// Функция для сброса состояния (для отладки)
export const resetLineAnimations = () => {
    completedLines.clear();
    allLines.forEach(lineData => {
        gsap.set(lineData.path, {
            strokeDashoffset: lineData.pathLength
        });
    });
    console.log("🔄 Состояние анимаций сброшено");
};

// Сброс состояния
const resetAnimationState = () => {
    allLines = [];
    completedLines.clear();
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

// Основная функция инициализации
export const initLineDrawAnimation = () => {
    // Сбрасываем состояние при повторной инициализации
    resetAnimationState();
    
    // Ждем загрузки DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initAbsoluteSequentialAnimations();
        });
    } else {
        initAbsoluteSequentialAnimations();
    }
};
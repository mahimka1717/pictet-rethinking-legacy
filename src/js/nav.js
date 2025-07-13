export function initNavigation() {
  const navItems = document.querySelectorAll('.nav__item');
  const chapters = document.querySelectorAll('.chapter');
  
  // Проверяем начальное состояние навигации
  function checkInitialNavState() {
    const viewportMiddle = window.scrollY + window.innerHeight / 2;
    const firstChapter = document.querySelector('.chapter[data-id="1"]');
    const nav = document.querySelector('.nav');
    
    if (firstChapter && nav) {
      const firstChapterRect = firstChapter.getBoundingClientRect();
      const firstChapterTop = window.pageYOffset + firstChapterRect.top;
      
      // Скрываем навигацию если верх первой главы еще не достиг середины вьюпорта
      if (viewportMiddle < firstChapterTop) {
        nav.style.opacity = '0';
        nav.style.visibility = 'hidden';
        nav.style.pointerEvents = 'none';
      }
    }
  }
  
  // Вызываем проверку начального состояния
  checkInitialNavState();
  
  // Функция для плавного скролла к элементу
  function scrollToChapter(chapterIndex) {
    const targetChapter = document.querySelector(`.chapter[data-id="${chapterIndex}"]`);
    if (targetChapter) {
      // Получаем позицию элемента относительно документа
      const rect = targetChapter.getBoundingClientRect();
      const targetPosition = window.pageYOffset + rect.top - 100;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }
  
  // Функция для обновления активного состояния навигации
  function updateActiveNav(activeIndex) {
    navItems.forEach((item, index) => {
      item.classList.toggle('nav__item--active', index === activeIndex - 1);
    });
  }
  
  // Обработчики кликов на элементы навигации
  navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      const chapterIndex = index + 1; // +1 потому что первая кнопка ведет на chapter 1
      scrollToChapter(chapterIndex);
      // Убираем немедленную активацию - пусть handleScroll сам определит активную кнопку
    });
  });
  
  // Отслеживание скролла для автоматического обновления активного элемента
  function handleScroll() {
    const viewportMiddle = window.scrollY + window.innerHeight / 2; // Середина вьюпорта
    const viewportBottom = window.scrollY + window.innerHeight; // Низ вьюпорта
    let activeChapterIndex = 0;
    
    // Проверяем позицию статьи и первой главы для скрытия/показа навигации
    const article = document.querySelector('.article');
    const firstChapter = document.querySelector('.chapter[data-id="1"]');
    const nav = document.querySelector('.nav');
    
    if (article && firstChapter && nav) {
      const articleRect = article.getBoundingClientRect();
      const articleBottom = window.pageYOffset + articleRect.bottom;
      
      const firstChapterRect = firstChapter.getBoundingClientRect();
      const firstChapterTop = window.pageYOffset + firstChapterRect.top;
      
      // Скрываем навигацию если:
      // 1. Низ статьи дошел до низа вьюпорта ИЛИ
      // 2. Верх первой главы еще не достиг середины вьюпорта
      if (viewportBottom >= articleBottom || viewportMiddle < firstChapterTop) {
        nav.style.opacity = '0';
        nav.style.visibility = 'hidden';
        nav.style.pointerEvents = 'none';
      } else {
        nav.style.opacity = '1';
        nav.style.visibility = 'visible';
        nav.style.pointerEvents = 'auto';
      }
    }
    
    // Проходим по всем главам от 1 до 5 и находим последнюю пройденную
    for (let i = 1; i <= 5; i++) {
      const chapter = document.querySelector(`.chapter[data-id="${i}"]`);
      if (chapter) {
        const rect = chapter.getBoundingClientRect();
        const chapterTop = window.pageYOffset + rect.top;
        
        // Если верх секции прошел середину вьюпорта, запоминаем её как активную
        if (viewportMiddle >= chapterTop) {
          activeChapterIndex = i;
        }
      }
    }
    
    // Обновляем активное состояние
    if (activeChapterIndex > 0) {
      updateActiveNav(activeChapterIndex);
    } else {
      // Если мы выше первой главы, снимаем активность со всех кнопок
      navItems.forEach(item => {
        item.classList.remove('nav__item--active');
      });
    }
  }
  
  // Добавляем обработчик скролла с троттлингом
  let scrollTimer;
  window.addEventListener('scroll', () => {
    if (scrollTimer) {
      clearTimeout(scrollTimer);
    }
    scrollTimer = setTimeout(handleScroll, 1);
  });
}

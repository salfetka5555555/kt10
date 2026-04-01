// Объект с контентом для каждой "страницы"
const pages = {
    home: `<h1>Главная страница</h1><p>Добро пожаловать в наше мини-SPA!</p>`,
    about: `<h1>О нас</h1><p>Мы — команда энтузиастов, создающая крутые проекты.</p>`,
    contacts: `<h1>Контакты</h1><p>Email: example@mail.com<br>Телефон: +7 (999) 000-00-00</p>`
};

const contentEl = document.getElementById('content');
const navLinks = document.querySelectorAll('nav a');

// Функция для отображения страницы
function showPage(pageName) {
    const page = pages[pageName];
    if (page) {
        contentEl.innerHTML = page;
        document.title = pageName.charAt(0).toUpperCase() + pageName.slice(1);
        history.pushState({ page: pageName }, '', `/${pageName}`);
    }
}

// Обработка кликов по ссылкам в меню
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Отключаем стандартное поведение
        const page = this.getAttribute('data-page');
        showPage(page);
    });
});

// Обработка кнопок "Назад/Вперёд"
window.addEventListener('popstate', function (e) {
    const state = e.state;
    if (state && state.page) {
        showPage(state.page);
    } else {
        showPage('home'); // По умолчанию — главная
    }
});

// Показываем главную страницу при первом запуске
showPage('home');

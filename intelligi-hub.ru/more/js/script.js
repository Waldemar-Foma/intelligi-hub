// Добавляем обработчики для ссылок в навигации
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Проверка наличия целевого элемента
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.warn(`Элемент с id ${targetId} не найден.`);
        }
    });
});

// Обработка формы регистрации
const registrationForm = document.querySelector('.registration form');

if (registrationForm) {
    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Перенаправление на главную страницу
        window.location.href = '../index.html'; // Замените 'index.html' на URL вашей главной страницы
    });
} else {
    console.warn('Форма регистрации не найдена.');
}


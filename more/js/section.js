document.getElementById('new-section-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем стандартное поведение формы

    // Получаем данные из формы
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const imageUrl = document.getElementById('image').value || 'img/default.png'; // Если не указана ссылка на изображение, используем изображение по умолчанию

    // Создаем новый HTML для раздела
    const sectionHtml = `
        <div class="section">
            <div class="section-title">
                <button class="section-button">${title}</button>
            </div>
            <img src="${imageUrl}" alt="${title}">
            <div class="section-content">
                <p>${description}</p>
            </div>
        </div>
    `;

    // Добавляем новый раздел в контейнер
    const sectionsContainer = document.getElementById('sections-container');
    sectionsContainer.insertAdjacentHTML('beforeend', sectionHtml);

    // Очищаем форму
    document.getElementById('new-section-form').reset();

    // Обновляем обработчики для всех кнопок (включая новые)
    updateSectionButtons();
});

// Функция для добавления функциональности к новым кнопкам
function updateSectionButtons() {
    document.querySelectorAll('.section-button').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
}

// Вызываем функцию для существующих разделов
updateSectionButtons();
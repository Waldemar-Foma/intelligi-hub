document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = link.getAttribute('href');

            // Если ссылка ведет на другую страницу
            if (href.includes('index.html')) {
                event.preventDefault();
                window.location.href = href; // Перенаправление на нужную страницу
            }
        });
    });
});
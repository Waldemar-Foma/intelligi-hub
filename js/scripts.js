let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.getElementById('quote-slider').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) { showSlide(currentIndex + step);
}

document.querySelector('.slider-container').addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        moveSlide(1);
    } else {
        moveSlide(-1);
    }
});

// Изначально показать первый слайд
showSlide(currentIndex);
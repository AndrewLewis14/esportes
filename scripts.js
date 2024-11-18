// Carrossel JS
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselContainer = document.querySelector('.carousel-container');
const totalSlides = document.querySelectorAll('.carousel-item').length;
let currentSlide = 0;

// Função para mudar para o slide anterior
function goToPrevSlide() {
    if (currentSlide === 0) {
        currentSlide = totalSlides - 1; // Vai para o último slide
    } else {
        currentSlide--;
    }
    updateCarousel();
}

// Função para mudar para o próximo slide
function goToNextSlide() {
    if (currentSlide === totalSlides - 1) {
        currentSlide = 0; // Vai para o primeiro slide
    } else {
        currentSlide++;
    }
    updateCarousel();
}

// Função para atualizar o carrossel
function updateCarousel() {
    const offset = -currentSlide * 100; // Cada slide tem 100% de largura
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

// Eventos de clique nos botões de navegação
prevBtn.addEventListener('click', goToPrevSlide);
nextBtn.addEventListener('click', goToNextSlide);

// Função de auto-navegação a cada 4 segundos
setInterval(goToNextSlide, 4000);

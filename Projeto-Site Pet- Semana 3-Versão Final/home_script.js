document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector('#slider');
    const leftButton = document.querySelector('#left_button');
    const rightButton = document.querySelector('#right_button');

    const images = [
        'imagens_slider/slider1.jpeg',
        'imagens_slider/slider2.jpeg',
        'imagens_slider/slider3.jpeg',
        'imagens_slider/slider4.jpeg',
        'imagens_slider/slider5.jpeg',
        'imagens_slider/slider6.jpeg'
    ];

    let currentIndex = 0;

    function updateSlider() {
        slider.src = images[currentIndex];
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    }

    function showPreviousImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
    }

    setInterval(showNextImage, 5000); 

    leftButton.addEventListener('click', showPreviousImage);
    rightButton.addEventListener('click', showNextImage);

    // Mostra a primeira imagem ao iniciar
    updateSlider();
});
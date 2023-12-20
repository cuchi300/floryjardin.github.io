window.swiper = new Swiper({
    el: '.slider__contenedor',
    slideClass: 'slider__slide',
    createElements: true,
    autoplay: {
        delay: 5000,
        pauseOnEnterMouse: true
    },
    speed: 1000,
    loop: true,
    pagination: true
});

AOS.init();
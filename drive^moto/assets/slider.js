var swiper = new Swiper(".slide-content", {

    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    centerSlide: 'true',
    fade: 'true',

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: 'false',
    },
});
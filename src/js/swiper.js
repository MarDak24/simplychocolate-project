const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  //відступ між слайдами
  spaceBetween: 18,
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // что-бы сделать пагинацию кликабельной
  },

  // Брейк-поінти
  breakpoints: {
    768: {
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    },
  },
});

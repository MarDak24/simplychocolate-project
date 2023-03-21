const swiper = new Swiper('.swiper-r', {
  slidesPerView: 1,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination-r',
    clickable: true, // что-бы сделать пагинацию кликабельной
  },

  // Брейк-поінти
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaseBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaseBetween: 20,
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

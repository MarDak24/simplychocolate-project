const swiper = new Swiper('.swiper-modal', {
  slidesPerView: 1,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination-modal',
    clickable: true, // что-бы сделать пагинацию кликабельной
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

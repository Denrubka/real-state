const catalogSlider = new Swiper('.catalog__slider', {
  loop: true,
  slidesPerView: 'auto',

  breakpoints: {
    320: {
      spaceBetween: 16,
    },
    601: {
      spaceBetween: 32,
    },
  },
});

const featuresSlider = new Swiper('.features__slider', {
  slidesPerView: 'auto',

  breakpoints: {
    320: {
      enabled: false,
      spaceBetween: 0,
    },
    601: {
      enabled: true,
      spaceBetween: 32,
    },
  },
});
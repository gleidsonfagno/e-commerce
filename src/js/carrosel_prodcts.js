new Swiper(".card-wrapeper", {
  loop: false,
  spaceBetween: 17,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: ".button-swiper-button-next",
    prevEl: ".button-swiper-button-prev"
  },

  // Responsive breakpoints

  breakpoints: {
    0: {
      slidesPerView: 2
    },
    640: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 5
    }
  }
})

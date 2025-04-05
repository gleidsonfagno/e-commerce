new Swiper('.card-wrapeper', {
    loop: true,
    spaceBetween: 17,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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
  });


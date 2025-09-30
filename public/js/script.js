// Home page 

// Hero slider

let swiper = new Swiper(".sklad-hero__swiper", {
  spaceBetween: 15,
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next__main__hero",
    prevEl: ".swiper-button-prev__main__hero",
  },
});


let swiperProduct = new Swiper(".product-swiper__container", {
  slidesPerView: "auto",
  spaceBetween: 8,
  navigation: {
    nextEl: ".swiper-button-next__main__product",
    prevEl: ".swiper-button-prev__main__product",
  },
});
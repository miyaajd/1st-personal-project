window.addEventListener("load", function () {
  const blueSwiper = new Swiper(".blue-left", {
  navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
  const blueSwiper2 = new Swiper(".perfumes", {
    loop: true,
    slidesPerView: 5.5,
    spaceBetween: 8
  });
});

window.addEventListener("load", function () {
  const homeSwiper = new Swiper(".home-swiper", {
    loop: true,
    slidesPerView: 4.5,
    spaceBetween: 20
  });
  const homeSwiper2 = new Swiper(".tablet-h-right", {
    loop: true,
    direction: "vertical",
    slidesPerView: 3.5,
  });
});

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
    spaceBetween: 8,
  });
  //
  // 사이즈 선택
  const sizeOption = this.document.querySelectorAll(".mL > li");
  sizeOption.forEach((size) => {
    size.addEventListener("click", () => {
      sizeOption.forEach((li) => li.classList.remove("active"));
      size.classList.add("active");
    });
  });
});

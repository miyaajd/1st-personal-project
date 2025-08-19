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
    breakpoints: {
    // 768
    0: {
      slidesPerView: 2.5,
      spaceBetween: 8,
    },
    500: {
      slidesPerView: 3.5,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 8,
    },
  },
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
  // 768 dscr 토글
  const downAngle = this.document.querySelector("#down-angle");
  const upAngle = this.document.querySelector("#up-angle");
  const dscrTxt = this.document.querySelector("#dscr");
  downAngle.addEventListener("click", function () {
    dscrTxt.classList.add("active");
    downAngle.style.display = "none";
    upAngle.style.display = "inline-block";
  });
  upAngle.addEventListener("click", function () {
    dscrTxt.classList.remove("active");
    downAngle.style.display = "inline-block";
    upAngle.style.display = "none";
  });
});

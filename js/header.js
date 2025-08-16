window.addEventListener("load", function () {
  const header = document.querySelector(".header");
  const topMenu = document.querySelectorAll(".top-menu > li");
  const subMenu = document.querySelectorAll(".depth2");
  const hamburger = document.querySelectorAll(".tablet-menu .fa-bars, .mobile-menu .fa-bars");

  topMenu.forEach((li, index) => {
    li.addEventListener("click", function () {
      // 모든 서브메뉴 닫기
      subMenu.forEach((ul) => ul.classList.remove("show"));
      // 클릭한 메뉴만 열기
      subMenu[index].classList.add("show");
    });
  });
  function closeAll() {
    subMenu.forEach((ul) => ul.classList.remove("show"));
    header.classList.remove("active");
    document.documentElement.style.overflow = "";
  }
  topMenu.forEach((li) => {
    li.addEventListener("click", function (e) {
      e.stopPropagation();
      // 모든 메뉴 닫기
      subMenu.forEach((ul) => ul.classList.remove("show"));
      // 현재 클릭한 메뉴 열기
      const currentDepth2 = li.querySelector(".depth2");
      if (currentDepth2) {
        currentDepth2.classList.add("show");
      }
      // 헤더 활성화
      header.classList.add("active");
      //   스크롤 없애기
      document.documentElement.style.overflow = "hidden";
    });
  });
  // 바깥 클릭 시 닫기 + 헤더 복구
  document.addEventListener("click", closeAll);
  // *******************768**********************
  hamburger.forEach((li) => {
    li.addEventListener("click", function (e) {
      e.stopPropagation();
      // 헤더 활성화
      header.classList.add("active");
      //   스크롤 없애기
      document.documentElement.style.overflow = "hidden";
    });
  });
});

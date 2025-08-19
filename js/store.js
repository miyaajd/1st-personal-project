window.addEventListener("load", function () {
  const storeList = this.document.querySelectorAll(".store-list li");
  const korea = this.document.querySelector("#korea");
  korea.classList.add("active");
  storeList.forEach((store) => {
    store.addEventListener("click", () => {
      storeList.forEach((li) => li.classList.remove("active"));
      store.classList.add("active");
    });
  });
  const hannamSwiper = new Swiper(".hannamSwiper", {
    loop: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});

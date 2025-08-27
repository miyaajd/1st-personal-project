window.addEventListener("load", function () {
  const modal = document.querySelector("#myModal");
  const closeBtn = document.querySelector("#closeBtn");
  const eventBtn = this.document.querySelector("#event");
  //
  modal.style.display = "block";
  //닫기
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
  // 버튼
  eventBtn.addEventListener("click", function () {
    window.location.href = "bluehinoki.html";
  });
  //
  //
  // read me modal
  // modal
  this.document.documentElement.style.overflow = "hidden";
  const modalClose = this.document.querySelector("#modalClose");
  const modal2 = this.document.querySelector(".modalWrap");
  modalClose.addEventListener("click", () => {
    modal2.classList.add("none");
    this.document.documentElement.style.overflow = "";
  });
});

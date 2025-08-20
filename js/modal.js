window.addEventListener("load", function () {
  const modal = document.querySelector("#myModal");
  const closeBtn = document.querySelector("#closeBtn");
  const eventBtn = this.document.querySelector("#event")
  //
  modal.style.display = "block";
  //닫기
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
  // 버튼
  eventBtn.addEventListener("click" , function(){
    window.location.href = "bluehinoki.html"
  })
});

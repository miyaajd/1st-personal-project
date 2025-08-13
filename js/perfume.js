window.addEventListener("load", function () {
  const mainImg = this.document.querySelectorAll(".perfume-top .p-img img");
  const thumbWrap = this.document.querySelector(
    ".perfume-bottom .perfume-list"
  );
  const thumbimg = thumbWrap ? thumbWrap.querySelectorAll("img") : [];
  //
  if (mainImg.length < 2 || !thumbWrap || thumbimg.length === 0) return;
  thumbWrap.addEventListener("click", (e) => {
    //
    const img = e.target.closest("img");
    if (!img) return;
    //
    const list = Array.from(thumbimg);
    const i = list.indexOf(img);
    if (i < 0) return;
    //
    const nextI = (i + 1) % list.length;

    mainImg[0].src = img.src;
    mainImg[1].src = list[nextI].src;
    //
    mainImg.forEach((images) => (images.style.opacity = "0"));
    setTimeout(() => {
      mainImg[0].src = img.src;
      mainImg[1].src = list[nextI].src;
      mainImg.forEach((images) => (images.style.opacity = "1"));
    }, 150);
  });
});

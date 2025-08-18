window.addEventListener("load", function () {
  const video = document.querySelector(".mainVideo");
  video.muted = true;
  video.play().catch(() => {
    console.log("자동재생이 차단됨");
  });
});

window.addEventListener("load", function () {
    const headerMenu = document.querySelectorAll('.top-menu > li > a');
    const header = document.querySelector('.header');
    headerMenu.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // 똑같이 동작
    header.classList.add('active');
  });
});
});

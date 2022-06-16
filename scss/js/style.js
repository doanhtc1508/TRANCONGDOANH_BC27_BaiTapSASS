window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var logo = document.querySelector(".img-logo-1");
  header.classList.toggle("sticky", window.scrollY > 0);
  logo.classList.toggle("img-logo-1", window.scrollY > 0);
});

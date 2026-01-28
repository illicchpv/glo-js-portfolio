const burger = document.querySelector(".humburger-menu");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu-list__item");

burger.addEventListener("click", () => {
  menu.classList.toggle("menu-active");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("menu-active");
  });
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !burger.contains(e.target)) {
    menu.classList.remove("menu-active");
  }
  // if(!(e.target.closest(".menu") || e.target.closest(".humburger-menu"))) {
  //   menu.classList.remove("menu-active");
  // }
});
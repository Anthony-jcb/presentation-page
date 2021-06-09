const navbar = document.getElementById("nav");
const menu_btn = document.getElementById("menu_btn");
const menu_items = document.getElementById("menu_items");

function stickyMenu() {
  if (window.pageYOffset > 0.0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

window.onscroll = () => stickyMenu();

addEventListener("DOMContentLoaded", () => {
  menu_btn.onclick = () => {
    menu_items.classList.toggle("show");
  };
});
let navbar = document.getElementById("nav");
let navbar_options = document.getElementById("nav_options");
let sticky = navbar.offsetTop;

function stickyMenu() {
  if (window.pageYOffset > 0.0) {
    navbar.classList.add("sticky");
    navbar_options.classList.add("sticky_option");
  } else {
    navbar.classList.remove("sticky");
    navbar_options.classList.remove("sticky_option");
  }
}

window.onscroll = function () {
  stickyMenu();
};
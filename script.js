const mobileNavBarIcon = document.querySelector(".mobile-menu-icon");
const mobileNavBar = document.querySelector(".mobile-navbar");
const mobileNavBarCloseBtn = document.querySelector(".close-btn");
const mobileNavBarLightBox = document.querySelector(".mobile-navbar-lightbox");

const documentWidth = document.documentElement.clientWidth;

mobileNavBarIcon.addEventListener("click", function () {
  displayType(mobileNavBar, mobileNavBarLightBox, "block");
});

mobileNavBarCloseBtn.addEventListener("click", function () {
  displayType(mobileNavBar, mobileNavBarLightBox, "none");
});

window.addEventListener("resize", function () {
  if (documentWidth > 720) {
    displayType(mobileNavBar, mobileNavBarLightBox, "none");
  }
});

function displayType(mobileNav, mobileNavLightBox, display) {
  mobileNav.style.display = display;
  mobileNavLightBox.style.display = display;
}

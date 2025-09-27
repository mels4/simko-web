document.addEventListener("DOMContentLoaded", () => {
  feather.replace();
  // Toggle class active
  const menu = document.querySelector(".menu");
  const hamburger = document.querySelector("#hamburger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeMenu = document.querySelector("#close-menu");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

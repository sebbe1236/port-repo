const hamburgerIcon = document.querySelector(".fas");
const navMenu = document.querySelector(".nav-menu");
const navLis = document.querySelectorAll(".nav-link");

hamburgerIcon.addEventListener("click", navOpen);

//navLis.addEventListener("click", navClose);
console.log(navLis);
export function navOpen() {
  hamburgerIcon.classList.toggle("active");
  navMenu.classList.toggle("active");
}

export function navClose() {
  hamburgerIcon.classList.remove("active");
  navMenu.classList.remove("active");
}

"use strict";
// navbar when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

//scroll to section
const contectMeBtn = document.querySelector(".home__button");
contectMeBtn.addEventListener("click", scrollsection);
navbar.addEventListener("click", scrollsection);
function scrollsection(event) {
  const target = event.target;
  const tosection = target.dataset.to;
  document
    .querySelector(`#${tosection}`)
    .scrollIntoView({ behavior: "smooth" });
}

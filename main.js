const nav = document.querySelector("header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

//Sombra do nav no objetos

const header = document.querySelector("#header");
const navHeader = header.offsetHeight;

window.addEventListener("scroll", () => {
  if (window.scrollY >= navHeader) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});



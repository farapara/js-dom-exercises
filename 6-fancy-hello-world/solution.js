const h1 = document.querySelector(".header__text");
const input = document.querySelector(".controls__input");

input.addEventListener("change", () => {
  h1.textContent = `Hello World ${input.value}`;
});

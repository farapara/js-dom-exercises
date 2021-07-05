const buttonElement = document.querySelector("button");
const BOX = document.querySelector(".box");

buttonElement.addEventListener("click", () =>{
    BOX.classList.toggle("hidden");
    if(BOX.classList.contains.("hidden")) {
        buttonElement = "show";
    } else {
        buttonElement.textContent = "hide";
    }
});
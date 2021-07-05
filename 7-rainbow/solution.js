const buttonElement = document.querySelector("button");
const liNodeList = document.querySelectorAll(".list__item");

buttonElement.addEventListener("click", () => {
  for (let i = 0; i < liNodeList.length; i++) {
    let liElement = liNodeList[i];
    console.log(liElement);
    let liColor = liNodeList[i].textContent;
    console.log(liColor);
    liElement.style.color = liColor;
  }
});

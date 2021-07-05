const h1Element = document.querySelector("h1");
let username = prompt("What is your name?");
h1Element.textContent = `${h1Element.textContent}, ${username}`;

const data = [];
const formElement = document.querySelector(".super-form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(formElement);
  const name = formElement.name.value;
  const age = formElement.age.value;
  const hobbies = formElement.hobbies.value;
  const checked = formElement.married.checked;

  console.log(name);
  console.log(age);
  console.log(hobbies);
  console.log(checked);

  const formData = {
    name,
    age,
    hobbies,
    checked,
  };
  data.push(formData);

  console.log(data);

  formElement.reset();
});

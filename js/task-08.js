const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  //Деструктуризация значений password and email (значения берутся с атрибута в html name="email" и name="password")
  const {
    elements: { email, password },
  } = event.currentTarget;

  //Если не поставить return в при проверке в if, то при пустых полях будет возвращать alert и после этого будет выполнять console.log name:"", password:"".

  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены");
  }
  console.log({
    email: email.value,
    password: password.value,
  });
  event.currentTarget.reset();
}

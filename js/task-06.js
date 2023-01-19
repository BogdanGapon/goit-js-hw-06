// Почему не доплоиться на гитхаб?
const input = document.getElementById("validation-input");
input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.target.value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

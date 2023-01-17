//Вариант 1
// const input = document.getElementById("validation-input");
// input.addEventListener("blur", onInputBlur);

// function onInputBlur(event) {
//   if (event.currentTarget.value.length !== 6) {
//     input.classList.add("invalid");
//   } else {
//     input.classList.remove("invalid");
//     input.classList.add("valid");
//   }
// }

// Вариант 2

const input = document.getElementById("validation-input");
input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length !== 6) {
    input.classList.add("invalid");
  }
  if (event.currentTarget.value.length === 6) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
}

// Подскажите почему не работает вот такой вариант ??

// const input = document.getElementById("validation-input");
// input.addEventListener("blur", onInputBlur);

// function onInputBlur(event) {
//   if (event.currentTarget.value.length === 6) {
//     input.classList.add("valid");
//   } else {
//     input.classList.remove("valid");
//     input.classList.add("invalid");
//   }
// }

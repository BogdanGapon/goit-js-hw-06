const body = document.body;
const btnChangeColor = document.querySelector(".change-color");
const spanText = document.querySelector(".color");

btnChangeColor.addEventListener("click", onChangeColorOnBody);

function onChangeColorOnBody() {
  body.style.backgroundColor = getRandomHexColor();
  spanText.textContent = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

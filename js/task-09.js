// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.

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

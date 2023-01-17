let counterValue = 0;

const btnPlus = document.querySelector("[data-action=increment]");
const btnMinus = document.querySelector("[data-action=decrement]");
const value = document.getElementById("value");

value.textContent = 0;
const increaseValue = (event) => {
  value.textContent = counterValue += 1;
};

const decreaseValue = (event) => {
  value.textContent = counterValue -= 1;
};

btnPlus.addEventListener("click", increaseValue);
btnMinus.addEventListener("click", decreaseValue);
console.log(counterValue); // Почему не меняется его значения вне слушателясобытий ?

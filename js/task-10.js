function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector("[data-create]");
const btnClean = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const boxWrapper = document.getElementById("boxes");

input.addEventListener("input", onInput);

function onInput(event) {
  let amount = 0;
  amount = event.currentTarget.value;
  btnCreate.addEventListener("click", createBox);

  function createBox() {
    for (let i = 0; i < amount; i += 1) {
      let commonValue = 30 + i * 10;
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.cssText = `width: ${commonValue}px;
       height: ${commonValue}px;
        background-color: ${getRandomHexColor()};`;
      boxWrapper.append(box);
    }
  }
}

btnClean.addEventListener("click", onCleanBtn);

function onCleanBtn() {
  boxWrapper.innerHTML = "";
}

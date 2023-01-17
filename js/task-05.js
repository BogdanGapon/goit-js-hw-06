const input = document.getElementById("name-input");
const spanText = document.getElementById("name-output");

function onTargetInput(event) {
  spanText.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    spanText.textContent = "Anonymous";
  }
}

input.addEventListener("input", onTargetInput);

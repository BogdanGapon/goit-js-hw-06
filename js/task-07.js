const inputRange = document.getElementById("font-size-control");
const spanText = document.getElementById("text");

inputRange.addEventListener("input", onRangeInput);

function onRangeInput(event) {
  console.log(Number(event.currentTarget.value));
  spanText.style.fontSize = `${event.currentTarget.value}px`;
}

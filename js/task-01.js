const allItems = document.querySelectorAll(".item");

allItems.forEach((item) => {
  console.log(`Categories: ${item.querySelector("h2").textContent}`);
  console.log(`Elements ${item.querySelector("ul").children.length}`);
});

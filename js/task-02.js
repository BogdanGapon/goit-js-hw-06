const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Вариант 1
const elements = ingredients.map((item) => {
  const newItem = document.createElement("li");
  newItem.textContent = item;
  newItem.classList.add("item");
  return newItem;
});

const listOfIngrediens = document.getElementById("ingredients");

listOfIngrediens.append(...elements);

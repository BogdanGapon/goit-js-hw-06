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

// Вариант 2 через функции которая будет принимать массив или массив объектов

// const functionCreateElements = (objectOfArrays) => {
//   return objectOfArrays.map((item) => {
//     const newItem = document.createElement("li");
//     newItem.textContent = item;
//     newItem.classList.add("item");
//     return newItem;
//   });
// };
// const newElement = functionCreateElements(ingredients);

// listOfIngrediens.append(...newElement);

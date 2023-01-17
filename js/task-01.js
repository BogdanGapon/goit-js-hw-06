// Вариант №1

// const allUlCategories = document.getElementById("categories");
// const allTitles = document.querySelectorAll("h2");

// const allChildrenUlCategories = document.querySelectorAll(".item ul");
// const allItemsChildrenOfUl = [];
// for (const oneItem of allChildrenUlCategories) {
//   allItemsChildrenOfUl.push(oneItem.children.length);
// }

// console.log(`Number of categories ${allUlCategories.children.length}`);

// console.log(`Category: ${allTitles[0].textContent}`);
// console.log(`Elements: ${allItemsChildrenOfUl[0]}`);

// console.log(`Category: ${allTitles[1].textContent}`);
// console.log(`Elements: ${allItemsChildrenOfUl[1]}`);

// console.log(`Category: ${allTitles[2].textContent}`);
// console.log(`Elements: ${allItemsChildrenOfUl[2]}`);

// Вариант №2

const allItems = document.querySelectorAll(".item");

allItems.forEach((item) => {
  console.log(`Categories: ${item.querySelector("h2").textContent}`);
  console.log(`Elements ${item.querySelector("ul").children.length}`);
});

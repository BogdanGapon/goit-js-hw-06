const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Way 1 without function
const itemList = images.map((item) => {
  const newItem = document.createElement("li");
  newItem.classList.add("list-item");
  return newItem;
});

const imgArr = images.map((image) => {
  const img = document.createElement("img");
  img.src = image.url;
  img.alt = image.alt;
  img.width = 350;
  img.height = 250;
  img.append(...itemList);
  return img;
});

const galleryList = document.querySelector(".gallery");
galleryList.append(...imgArr);

//Way 2 with function

// const itemList = (array) => {
//   return array.map((item) => {
//     const newItem = document.createElement("li");
//     newItem.classList.add("list-item");
//     return newItem;
//   });
// };

// const imgArr = (array) => {
//   return array.map((image) => {
//     const img = document.createElement("img");
//     img.src = image.url;
//     img.alt = image.alt;
//     img.width = 350;
//     img.height = 250;
//     img.append(...newItemList);
//     return img;
//   });
// };

// const newItemList = itemList(images);
// const newImgArr = imgArr(images);

// const galleryList = document.querySelector(".gallery");
// galleryList.append(...newImgArr);

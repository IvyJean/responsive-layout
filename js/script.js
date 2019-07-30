const form = document.querySelector("form");
const ul = document.querySelector("ul");
const button = document.querySelector("button");
// const title = document.getElementById("title");
// const content = document.getElementById("content");
// let itemsArray = localStorage.getItem("items")
//   ? JSON.parse(localStorage.getItem("items"))
//   : [];

// a conditional statement that checks if localStorage already exists
// if (localStorage.getItem('items')) {
//     items = JSON.parse(localStorage.getItem('items'))
// } else {
//     items = []
// }

let articles = [];

console.log(document.getElementById("content".value));

const addArticle = e => {
  e.preventDefault();
  let article = {
    id: Date(),
    title: document.getElementById("title").value,
    content: document.getElementById("content-text").value
  };

  articles.push(article);
  console.log(articles);

  localStorage.setItem("itemArray", JSON.stringify(articles));
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", addArticle);
});

// button.addEventListener('click', function(e) {
//     e.preventDefault()

//     itemsArray.push(title.value)
//     itemsArray.push(content.value)
//     localStorage.setItem('items', JSON.stringify(itemsArray))
//     console.log(itemsArray);
//   })

//   localStorage.setItem('items', JSON.stringify(itemsArray))
//   const data = JSON.parse(localStorage.getItem('items'))

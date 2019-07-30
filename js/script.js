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

const addArticle = e => {
  e.preventDefault();
  let article = {
    timeStamp: Date(),
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


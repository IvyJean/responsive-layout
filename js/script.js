// let template = document.getElementById("template");
// let articlesTitle = document.getElementById("article-text");
// let articleWrapper = template.content.querySelector("article");
// let title = articleWrapper.querySelector("#article-title");
// let timestamp = articleWrapper.querySelector("#article-timestamp");
// let content = articleWrapper.querySelector("#article-content");


// let articles = [];

// console.log(document.getElementById("content".value));

// const addArticle = e => {
//   e.preventDefault();
//   let article = {
//     id: Date(),
//     title: document.getElementById("title").value,
//     content: document.getElementById("content-text").value
//   };

//   articles.push(article);
//   console.log(articles);

//   localStorage.setItem("itemArray", JSON.stringify(articles));
// };

// document.addEventListener("DOMContentLoaded", () => {
//   document.getElementById("btn").addEventListener("click", addArticle);
// });

// function displayList(articles) {
//   title.innerHTML = articles.title;
//   timestamp.innerHTML = articles.timestamp;
//   content.innerHTML = articles.content;
//   btn_delete.setAttribute("id", articles.id);
//   console.log("ID:", btn_delete.getAttribute("id"));
// }

var template = document.getElementById("template");
var articlesTitle = document.getElementById("article-text");
var articleWrapper = template.content.querySelector("article");
var title = articleWrapper.querySelector("#article-title");
var timestamp = articleWrapper.querySelector("#article-timestamp");
var content = articleWrapper.querySelector("#article-content");
var btn_delete = articleWrapper.querySelector("#btn-delete");
var primary_id = 0;
var articleList;


if (!!window.localStorage.getItem("articleList")) {
  articleList = JSON.parse(window.localStorage.getItem("articleList"));
  } else {
    console.log("EMPTY");
    articlesTitle.innerHTML = "<center>No Articles</center>";
    article_List = [];
  }
  showList();


// crud
function showList() {
  if (!!article_List.length) {
    getLastTaskId();
    for (var item in article_List) {
      var articles = article_List[item];
      displayList(articles);
      var imp = document.importNode(articleWrapper, true);
      document.getElementById("main").appendChild(imp);
      console.log(articles);
    }
  }
}

function displayList(articles) {
  title.innerHTML = articles.title;
  timestamp.innerHTML = articles.timestamp;
  content.innerHTML = articles.content;
  btn_delete.setAttribute("id", articles.id);
  console.log("ID:", btn_delete.getAttribute("id"));
}

function removeTask(e) {
  console.log("Hello");
}

//common
function getLastTaskId() {
  var lastArticle = article_List[article_List.length - 1];
  primary_id = lastArticle.id + 1;
  console.log("LAST ID: ", primary_id);
}

init();


const submit = document.querySelector("#submit");
const titleEl = document.querySelector("#title");
const bodyEl = document.querySelector("#body");

let article1;
if (!!window.localStorage.getItem("article")) {
  article1 = JSON.parse(localStorage.getItem("article"));
} else {
  article1 = [];
}

function article() {
  let time = new Date().toLocaleString();
  let art = {
    title: titleEl.value,
    body: bodyEl.value,
    time: time
  };

  article1.push(art);
  localStorage.setItem("article", JSON.stringify(article1));
}

submit.addEventListener("click", article);

// var id = 0;
// var form_content = document.getElementById("content");
// var btn_save = document.getElementById("btn-save");

// var articleList;

// if (!!window.localStorage.getItem("articleList")) {
//   articleList = JSON.parse(window.localStorage.getItem("articleList"));
// } else {
//   articleList = [];
// }
// btn_save.addEventListener("click", saveObject);
// showList();

// function showList() {
//   if (!!articleList.length) {
//     getLastTaskId();
//   }
// }

// function showArticles() {
//   if (!!articleList.length) {
//     getLastTaskId();
//     for (var item in articleList) {
//       var article_object = articleList[item];
//       addTaskToList(task);
//     }
//     syncEvents();
//   }
// }

// function saveObject(event) {
//   var articleObject = {
//     id: primary_id,
//     title: document.getElementById("article-title").value,
//     timestamp: new Date().toLocaleString(),
//     content: document.getElementById("article-content").value
//   };
//   articleList.push(articleObject);
//   setArticle();
//   primary_id++;
// }

// function getLastTaskId() {
//   var lastArticle = articleList[articleList.length - 1];
//   primary_id = lastArticle.id + 1;
// }

// function setArticle() {
//   window.localStorage.setItem("articleList", JSON.stringify(articleList));
//   articleList = JSON.parse(window.localStorage.getItem("articleList"));
// }

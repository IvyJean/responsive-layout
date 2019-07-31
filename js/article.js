// post button
const post = document.querySelector("#submit");

// article stuff
const titleElement = document.querySelector("#title");
const bodyElement = document.querySelector("#body");

// var options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   hour: "numeric",
//   minute: "numeric"
// };

var article_object;
if (localStorage.getItem("article")) {
  article_object = JSON.parse(localStorage.getItem("article"));
} else {
  article_object = [];
}

function article() {
  var time = new Date().toLocaleString();
  var a = {
    title: titleElement.value,
    body: bodyElement.value,
    time: time
  };

  article_object.push(a);
  localStorage.setItem("article", JSON.stringify(article_object));
}

post.addEventListener("click", article);



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



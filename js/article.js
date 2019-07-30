var primary_id = 0;
var form_content = document.getElementById("content");
var btn_save = document.getElementById("btn-save");

var articleList;

// init js
function initialize() {
  if (!!window.localStorage.getItem("articleList")) {
    articleList = JSON.parse(window.localStorage.getItem("articleList"));
  } else {
    articleList = [];
  }
  btn_save.addEventListener("click", saveObject);
  console.log("INIT!");
  showList();
}

//crud stuff

function showList() {
  if (!!articleList.length) {
    getLastTaskId();
  }
}

function showArticles() {
  if (!!articleList.length) {
    getLastTaskId();
    for (var item in articleList) {
      var article_object = articleList[item];
      addTaskToList(task);
    }
    syncEvents();
  }
}

function saveObject(event) {
  var articleObject = {
    id: primary_id,
    title: document.getElementById("article-title").value,
    timestamp: new Date().toLocaleString(),
    content: document.getElementById("article-content").value
  };
  articleList.push(articleObject);
  setArticle();
  primary_id++;
}

//common

function getLastTaskId() {
  var lastArticle = articleList[articleList.length - 1];
  primary_id = lastArticle.id + 1;
}

function setArticle() {
  console.log("SAVED!!");
  window.localStorage.setItem("articleList", JSON.stringify(articleList));
  articleList = JSON.parse(window.localStorage.getItem("articleList"));
}

initialize();

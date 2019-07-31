
var article_object = JSON.parse(localStorage.getItem("article"));

var article_object_copy = article_object.slice(0).reverse();

var temp = document.querySelector("#template");
var item = temp.content.querySelector("#bodyContainer");

var i;
for (i = 0; i < article_object_copy.length; i++) {
  var imp = document.importNode(item, true);

  var item2 = imp.querySelector("#article");
  var title = item2.querySelector("#title");
  var subtitle = item2.querySelector("#subtitle");
  var body = item2.querySelector("#body");
  var deleteButton = item2.querySelector("#delete");

  var button = document.createElement("button");
  button.setAttribute("id", i);
  button.textContent = "Delete Article";
  deleteButton.appendChild(button);

  function deleteArticle(e) {
    var removeArticle = e.target.parentNode.parentNode.parentNode;
    document.getElementById("stream").removeChild(removeArticle);

    article_object_copy.splice(e.target.id, 1);
    localStorage.setItem("article", JSON.stringify(article_object_copy));

    location.reload();
  }

  button.addEventListener("click", deleteArticle);

  title.innerHTML = article_object_copy[i].title;
  subtitle.innerHTML = article_object_copy[i].time;
  body.innerHTML = article_object_copy[i].body;
  imp.setAttribute("id", "article" + i);
  document.getElementsByClassName("stream")[0].appendChild(imp);
}

// function delete() {

// }

// let temp = document.getElementById("template");
// let articlesTitle = document.getElementById("articleNotif");
// let container = template.content.querySelector("article");
// let title = container.querySelector("articleTitle");
// let timestamp = container.querySelector("#articleTime");
// let content = container.querySelector("#article-content");
// let id = 0;
// let articleList;


// if (!!window.localStorage.getItem("articleList")) {
//   articleList = JSON.parse(window.localStorage.getItem("articleList"));
//   } else {
//     articlesTitle.innerHTML = "<center>No Articles</center>";
//     articleList = [];
//   }
//   showList();

// function showList() {
//   if (!!articleList.length) {
//     getLastTaskId();
//     for (var item in articleList) {
//       var articles = articleList[item];
//       displayList(articles);
//       var imp = document.importNode(container, true);
//       document.getElementById("main").appendChild(imp);
//       console.log(articles);
//     }
//   }
// }

// function displayList(articles) {
//   title.innerHTML = articles.title;
//   timestamp.innerHTML = articles.timestamp;
//   content.innerHTML = articles.content;
//   btn_delete.setAttribute("id", articles.id);
//   console.log("ID:", btn_delete.getAttribute("id"));
// }

// function removeTask(e) {
//   console.log("Hello");
// }

// function getLastTaskId() {
//   var lastArticle = articleList[articleList.length - 1];
//   id = lastArticle.id + 1;
//   console.log("LAST ID: ", id);
// }



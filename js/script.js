
var article = JSON.parse(localStorage.getItem("article"));
var articleCopy = article.slice(0).reverse();
var temp = document.querySelector("#template");
var cont = temp.content.querySelector("#bodyContainer");

var i;
for (i = 0; i < articleCopy.length; i++) {
  var imp = document.importNode(cont, true);

  var contain = imp.querySelector("#article");
  var title = contain.querySelector("#title");
  var tStamp = contain.querySelector("#tStamp");
  var body = contain.querySelector("#body");
  // var deleteButton = contain.querySelector("#delete");

  var button = document.createElement("button");
  // button.setAttribute("id", i);
  // button.textContent = "Delete Article";
  // deleteButton.appendChild(button);

  function deleteArticle(e) {
    var removeArticle = e.target.parentNode.parentNode.parentNode;
    document.getElementById("stream").removeChild(removeArticle);

    articleCopy.splice(e.target.id, 1);
    localStorage.setItem("article", JSON.stringify(article_object_copy));

    location.reload();
  }

  // button.addEventListener("click", deleteArticle);

  title.innerHTML = articleCopy[i].title;
  tStamp.innerHTML = articleCopy[i].time;
  body.innerHTML = articleCopy[i].body;
  // imp.setAttribute("id", "article" + i);
  document.getElementsByClassName("stream")[0].appendChild(imp);
}

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
  // imp.setAttribute("id", "article" + i);
  document.getElementsByClassName("stream")[0].appendChild(imp);
}
let article = JSON.parse(localStorage.getItem("article"));
let articleCopy = article.slice(0);
let temp = document.querySelector("#template");
let cont = temp.content.querySelector("#bodyContainer");
let i;

for (i = 0; i < articleCopy.length; i++) {
  let impNode = document.importNode(cont, true);

  let contain = impNode.querySelector("#article");
  let title = contain.querySelector("#title");
  let tStamp = contain.querySelector("#tStamp");
  let body = contain.querySelector("#body");
  let deleteBtn = contain.querySelector("#delete");

  let button1 = document.createElement("button");
  button1.setAttribute("id", i);
  button1.textContent = "Delete";
  deleteBtn.appendChild(button1);

  button1.addEventListener("click", deleteArticle);

  function deleteArticle(e) {
    impNode.remove(impNode);
    articleCopy.splice(e.target.id, 1);
    localStorage.setItem("article", JSON.stringify(articleCopy));
    console.log(articleCopy);
  }

  let upButton = document.createElement("button");
  upButton.innerHTML = "Update";
  impNode.appendChild(upButton);
  upButton.setAttribute("id", i);
  upButton.setAttribute("style", "center");

  upButton.addEventListener("click", updateArticle);

  function updateArticle(e) {
    upButton.disabled = true;
    let titlenew = document.createElement("input");
    titlenew.value = title.textContent;
    titlenew.setAttribute("id", i);
    titlenew.setAttribute("rows", "1");
    titlenew.setAttribute("cols", "62");
    let text = document.createElement("textarea");
    text.value = body.textContent;
    text.setAttribute("rows", "10");
    text.setAttribute("cols", "62");
    text.setAttribute("position", "center");
    text.setAttribute("id", i);
    let submit = document.createElement("button");
    submit.innerHTML = "Save";
    submit.setAttribute("id", i);
    impNode.appendChild(submit);
    impNode.appendChild(titlenew);
    impNode.appendChild(text);

    function postArticle(e) {
      impNode.removeChild(text);
      impNode.removeChild(titlenew);
      impNode.removeChild(submit);
      body.textContent = text.value;
      title.textContent = titlenew.value;
      upButton.disabled = false;
      article[i].body = body.textContent;
      article[i].title = title.textContent;
      localStorage.setItem("article", JSON.stringify(article));
    }
    submit.addEventListener("click", postArticle);
  }

  title.innerHTML = articleCopy[i].title;
  tStamp.innerHTML = articleCopy[i].time;
  body.innerHTML = articleCopy[i].body;
  document.getElementsByClassName("stream")[0].appendChild(impNode);
}

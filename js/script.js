
let article = JSON.parse(localStorage.getItem("article"));
let articleCopy = article.slice(0).reverse();
let temp = document.querySelector("#template");
let cont = temp.content.querySelector("#bodyContainer");

let i;
for (i = 0; i < articleCopy.length; i++) {
  let impNode = document.importNode(cont, true);

  let contain = impNode.querySelector("#article");
  let title = contain.querySelector("#title");
  let tStamp = contain.querySelector("#tStamp");
  let body = contain.querySelector("#body");

  let button = document.createElement("button");

  title.innerHTML = articleCopy[i].title;
  tStamp.innerHTML = articleCopy[i].time;
  body.innerHTML = articleCopy[i].body;
  document.getElementsByClassName("stream")[0].appendChild(impNode);
}


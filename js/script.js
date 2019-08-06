let article = JSON.parse(localStorage.getItem("article"));
// let articleCopy = article.slice(0).reverse();
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
  // let updateBtn = contain.querySelector("#update");
  


  let button1 = document.createElement("button");
  button1.setAttribute("id", i);
  button1.textContent = "Delete";
  deleteBtn.appendChild(button1);

  button1.addEventListener("click", deleteArticle);
  // button2.addEventListener("click", updateArticle);

  function deleteArticle(e){
    impNode.remove(impNode);
    articleCopy.splice(e.target.id, 1);
    localStorage.setItem("article", JSON.stringify(articleCopy));
    console.log(articleCopy);
  }

  // let button2 = document.createElement("button");
  // button2.setAttribute("id", i);
  // button2.textContent = "Update";
  // updateBtn.appendChild(button2);

  // function updateArticle(e){
  //   let upTitle = document.createElement("input");
  //   upTitle.value = article.title;
  //   impNode.appendChild(upTitle);

  //   let upContent = document.createElement("textarea");
  //   upContent.textContent = article.body;
  //   impNode.appendChild(upContent);
  // }


  title.innerHTML = articleCopy[i].title;
  tStamp.innerHTML = articleCopy[i].time;
  body.innerHTML = articleCopy[i].body;
  document.getElementsByClassName("stream")[0].appendChild(impNode);
}

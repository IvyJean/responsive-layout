const submit = document.querySelector("#submit");
const titleEl = document.querySelector("#title");
const bodyEl = document.querySelector("#body");

let article1;
if (!!window.localStorage.getItem("article")) {
  article1 = JSON.parse(window.localStorage.getItem("article"));
} else {
  console.log("Empty");
  article1 = [];
}

function article() {
  let art = {
    title: titleEl.value,
    body: bodyEl.value,
    time: new Date().toLocaleString()
  };

  article1.push(art);
  localStorage.setItem("article", JSON.stringify(article1));
}

submit.addEventListener("click", article);


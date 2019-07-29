// let list = document.querySelector("select");
// let note = document.querySelector("textarea");

// let state;
// function setState(newState) {
//   list.textContent = "";
//   for (let name of Object.keys(newState.notes)) {
//     let option = document.createElement("option");
//     option.textContent = name;
//     if (newState.selected == name) option.selected = true;
//     list.appendChild(option);
//   }
//   note.value = newState.notes[newState.selected];

//   localStorage.setItem("Notes", JSON.stringify(newState));
//   state = newState;
// }
// setState(
//   JSON.parse(localStorage.getItem("Notes")) || {
//     notes: { "shopping list": "Carrots\nRaisins" },
//     selected: "shopping list"
//   }
// );

// list.addEventListener("change", () => {
//   setState({ notes: state.notes, selected: list.value });
// });
// note.addEventListener("change", () => {
//   setState({
//     notes: Object.assign({}, state.notes, { [state.selected]: note.value }),
//     selected: state.selected
//   });
// });
// document.querySelector("button").addEventListener("click", () => {
//   let name = prompt("Note name");
//   if (name)
//     setState({
//       notes: Object.assign({}, state.notes, { [name]: "" }),
//       selected: name
//     });
// });

const form = document.querySelector('form');
// const ul = document.querySelector('ul');
// const button = document.querySelector('button');
// const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach(item => {
  liMaker(item);
});

button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
});
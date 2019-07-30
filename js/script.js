
const form = document.querySelector('form')
const ul = document.querySelector('ul');
const button = document.querySelector('button')
const title = document.getElementById('title')
const content = document.getElementById('content')
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []


// a conditional statement that checks if localStorage already exists
// if (localStorage.getItem('items')) {
//     items = JSON.parse(localStorage.getItem('items'))
// } else {
//     items = []
// }

button.addEventListener('click', function(e) {
    e.preventDefault()

    itemsArray.push(title.value)
    itemsArray.push(content.value)
    localStorage.setItem('itemsArray', JSON.stringify(itemsArray))
    console.log(content.value);
  })

  localStorage.setItem('itemsArray', JSON.stringify(itemsArray))
  const data = JSON.parse(localStorage.getItem('items'))

  
  


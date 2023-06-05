const item = document.querySelector('.item');
const temp = document.querySelector('.temp');
const add = document.querySelector('#btn');

let items = getItems();

function getItems() {
  let value = localStorage.getItem('todo') || '[]';
  return JSON.parse(value);
}

function setItems(items) {
  const itemJson = JSON.stringify(items);
  localStorage.setItem('todo', itemJson);
}

function addItem(item) {
  items.unshift({
    item: item,
    checkbox: false
  });
  setItems(items);
  refreshList();
}

function refreshList() {
    temp.innerHTML = '';
    for (const item of items) {
      const itemElement = temp.firstElementChild.cloneNode(true);
      itemElement.querySelector('.item-text').textContent = item.item;
      itemElement.querySelector('.checkbox').checked = item.checkbox;
      temp.appendChild(itemElement);
    }
  }
  
add.addEventListener('click', () => {
    addItem();
})
refreshList();
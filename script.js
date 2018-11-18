const itemToDo = document.querySelector('#app ul');
const inputAddNew = document.querySelector('input');
const btnAddNew = document.querySelector('button');

let itens = JSON.parse(localStorage.getItem('list_toDo')) || ['Isso é um Item :D'];

function renderItens() {
  itemToDo.innerHTML = '';
  
  for (item of itens) {
    const itemElement = document.createElement('li');
    const itemText = document.createTextNode(item);

    const btnDelete = document.createElement('i');
    btnDelete.setAttribute('class', 'fas fa-check-circle fa-2x');
    const pos = itens.indexOf(item);
    btnDelete.setAttribute('onclick', 'deleteTodo(' + pos + ')');
    const btnDeleteText = document.createTextNode(' ');
    
    btnDelete.appendChild(btnDeleteText);
    itemElement.appendChild(itemText);
    itemElement.appendChild(btnDelete);
    itemToDo.appendChild(itemElement);
  }
}
renderItens();

function addItem(){
  let addNew = inputAddNew.value;

  itens.push(addNew);
  inputAddNew.value = '';
  renderItens();
  saveToStorage();
}

btnAddNew.addEventListener('click', addItem);

function deleteTodo(pos) {
  itens.splice(pos, 1);
  renderItens();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('list_toDo', JSON.stringify(itens));
}

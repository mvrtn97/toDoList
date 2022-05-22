let inputElement = document.getElementById("textInput");
let formElement = document.querySelector("form");
let listElement = document.querySelector("ul");
let totalTasks = document.getElementById("totalTasks");
let addBtn = document.getElementById("addBtn");
let line = document.getElementsByClassName("list");

let taskList = [];
let count = 0;


function addElement() {
  let newItem = document.createElement('li');
  let delBtn = document.createElement('button');
  let editBtn = document.createElement('button');
  let checkBtn = document.createElement('input');
  checkBtn.type = "checkbox";
  delBtn.innerHTML = "-";
  editBtn.innerHTML = "edit";
  let input = inputElement.value;

  if(input === "") {
    alert("Enter some value");
  }
  else{

  count += 1;

  newItem.innerHTML += input;
  listElement.insertAdjacentElement("beforeend", newItem);
  newItem.appendChild(delBtn);
  newItem.appendChild(editBtn);
  newItem.appendChild(checkBtn);
  taskList.push(input);
  newItem.className = "list2";

  inputElement.value = ''; /* czyszczenie input field */

  
  totalTasks.innerHTML = count;

  }

  delBtn.addEventListener('click', function(e){
    let itemToRemove = e.target.closest('li');  /* biezaca linia */
    listElement.removeChild(itemToRemove);
    count -= 1;   /*zmniejszanie licznika*/
    totalTasks.innerHTML = count;  /*zmniejszanie liczby w apce */
  })
 
  editBtn.addEventListener('click', function(e){
    let itemToEdit = e.target.closest('li');
    itemToEdit.innerHTML = window.prompt("Enter the new task!");
    itemToEdit.appendChild(delBtn);
    itemToEdit.appendChild(editBtn);
    itemToEdit.appendChild(checkBtn);
  })

  checkBtn.addEventListener('click', function(e){
    let checkedItem = e.target.closest('li');

    if(checkBtn.checked){
      checkedItem.className = "list";
    }
    else{
      checkedItem.className = "list2";
    }
  })
}

addBtn.addEventListener('click', addElement);


/* wprowadzanie danych enterem */
inputElement.addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    addElement();
    event.preventDefault(); /* aby nie refreshowalo strony */
    return false;
  }
})
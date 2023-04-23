// Made Todo List

let addToList = document.querySelector(".add");
let clear = document.querySelector(".clear");

function getAndUpdate() {
  let todoTitle = document.querySelector(".title").value;
  let todoDesc = document.querySelector(".descrip").value;

  if (localStorage.getItem("itemsJson") == null) {
    let itemJsonArray = [];
    itemJsonArray.push([todoTitle, todoDesc]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    let itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.push([todoTitle, todoDesc]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  }
update();

}


function update() {

    if (localStorage.getItem("itemsJson") == null) {
    let itemJsonArray = [];
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    let itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
  }
  
  let todoList = document.getElementById("todo-list");
  let str = "";

  itemJsonArray.forEach((element, index) => {
    str += `
      <div class="item">
                <p class="title-todo">${index + 1}. ${element[0]}</p>
                <p class="description-todo">${element[1]}</p>
                <button onClick="deleted(${index})" class="btn btn-primary delete">Delete</button>
              </div> `;
  });

  todoList.innerHTML = str;
}

function deleted(item) {
  let itemJsonArrayStr = localStorage.getItem("itemsJson");
  itemJsonArray = JSON.parse(itemJsonArrayStr);
  itemJsonArray.splice(item, 1);
  localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));

  update();
}

clear.addEventListener("click", () => {
    conf = confirm("Do Your Want to Clear all the Todos")
    if(conf){

        localStorage.clear();
        alert("Refresh the Page");
    }
});

addToList.addEventListener("click", getAndUpdate);
update();

// Todo List End

let addToList = document.querySelector(".add");
let clear = document.querySelector(".clear");

function update() {
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

  let todoList = document.getElementById("todo-list");
  let str = "";

  itemJsonArray.forEach((element, index) => {
    str += `
      <div class="item">
                <p class="title-todo">${index + 1}. ${element[0]}</p>
                <p class="description-todo">${element[1]}</p>
                <button onClick="deleted(4)" class="btn btn-primary delete">Delete</button>
              </div> `;
  });

  todoList.innerHTML = str;
}

function deleted(item) {
  alert(item);
}

clear.addEventListener("click", () => {
    conf = confirm("Do Your Want to Clear all the Todos")
    if(conf){

        localStorage.clear();
        alert("Refresh the Page");
    }
});

update();
addToList.addEventListener("click", update);

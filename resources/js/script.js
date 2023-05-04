// Made Todo List

const addToList = document.querySelector(".add");
const clear = document.querySelector(".clear");

function getAndUpdate() {
  let todoTitle = document.querySelector(".title").value;
  let todoTime = document.querySelector(".time").value;
  let todoDate = document.querySelector(".date").value;

  if (localStorage.getItem("itemsJson") == null) {
    let itemJsonArray = [];
    itemJsonArray.push([todoTitle, todoTime, todoDate]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    let itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.push([todoTitle, todoTime, todoDate]);
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
      <div class="item" id="items">
                <p class="title-todo">${index + 1}. ${element[0]}</p>
                <p class="description-todo">${element[1]}</p>
                <button onClick="deleted(${index})" class="btn btn-danger delete">Delete</button>
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
        alert("Refresh the App");
    }
});

addToList.addEventListener("click", getAndUpdate);
update();

// Todo List End


function searchToDo(){
  let inputBox = document.getElementById("search-box").value.toUpperCase();

  let itemList = document.getElementById("items");
  

  for(var i=0; i<itemList.length; i++){
   let itemValue = itemList[i].getElementsByTagName("p")[0];
    let textValue = itemValue.textContent || a.innerHTML;

    if(textValue.toUpperCase().indexOf(inputBox)){
      itemList[i].style.display = "";
      
    }else{
      itemList[i].style.display = "none";
    }
  }
}

let todoList = [];

function addTodo() {
  //Find input and push to main array
  let userInput = document.getElementById("todo-input");
  todoList.push(userInput.value);
  console.log(todoList);

  //Create list elements for each item
  let viewTodos = document.getElementById("todo-list");
  let newTodo = document.createElement("li");
  newTodo.className = "todo-item";
  newTodo.innerHTML = "<p>" + userInput.value + "</p>";
  viewTodos.appendChild(newTodo);

  //Create container for buttons
  let buttonWrapper = document.createElement("div");
  buttonWrapper.className = "button-wrapper";

  //Functionality for complete button
  let completeButton = document.createElement("button");
  completeButton.innerHTML = "Complete";
  completeButton.className = "todo-button";
  completeButton.onclick = function() {
    newTodo.classList.toggle("complete-item");
    console.log(newTodo.classList);
  };

  //Functionality for remove button
  let removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.className = "todo-button";
  removeButton.addEventListener("click", function(e) {
    newTodo.parentNode.removeChild(newTodo);
  });

  //Append buttons to container
  buttonWrapper.appendChild(completeButton);
  buttonWrapper.appendChild(removeButton);

  //Append button wrapper to list element
  let todos = document.getElementsByTagName("li");
  for (let i = 0; i < todos.length; i++) {
    todos[i].appendChild(buttonWrapper);
  }

  userInput.value = "";
}

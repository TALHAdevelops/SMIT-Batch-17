var list = document.getElementById("list");

// Add Todo

function addTodo() {
  var todo = document.getElementById("todo");

  list.innerHTML += `<li> 
  <input type='text' value= '${todo.value}' disabled/>
   <button onclick ='deleteTodo(event)'> Delete </button>
   <button onclick = 'editTodo(event)'> Edit </button>
   </li>`;

  todo.value = "";
}

// Enter Todo's (Press Enter)

function addTodoEnter(event) {
  if (event.keyCode === 13) {
    addTodo();
  }
}

// Delete Todo's

function deleteTodo(event) {
  event.target.parentNode.remove();
}

// Edit Todo

function editTodo(event) {
  var input = event.target.parentNode.childNodes[1];
  input.setAttribute("class", "focus-input");
  input.disabled = false;
  input.focus();
  event.target.innerHTML = "Update";
  event.target.setAttribute("onclick", "updateTodo(event)");
}

// Update Todo

function updateTodo(event) {
  var input = event.target.parentNode.childNodes[1];
  input.setAttribute("class", "");
  input.disabled = true;
  event.target.innerHTML = "Edit";
}

// Delete All

function deleteAll() {
  list.innerHTML = "";
}

// 1. Get elements from the HTML
const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

// 2. This array will store all our todos
let todos = [];

// 3. Add a new todo when the button is clicked
addTodoBtn.addEventListener("click", function () {
  const todoText = todoInput.value.trim();

  if (todoText === "") {
    return;
  }

  const newTodo = {
    id: crypto.randomUUID(),
    text: todoText,
    completed: false
  };

  todos.push(newTodo);
  todoInput.value = "";

  displayTodos();
});

// 4. Function to display todos on the screen
function displayTodos() {
  todoList.innerHTML = "";

  todos.forEach(function (todo) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.className = "todo-text";

    if (todo.completed) {
      span.style.textDecoration = "line-through";
      span.style.opacity = "0.6";
    }

    const actionsDiv = document.createElement("div");
    actionsDiv.className = "todo-actions";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.className = "complete-btn";

    completeBtn.addEventListener("click", function () {
      todo.completed = true;
      displayTodos();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", function () {
      todos = todos.filter(function (item) {
        return item.id !== todo.id;
      });
      displayTodos();
    });

    actionsDiv.appendChild(completeBtn);
    actionsDiv.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actionsDiv);

    todoList.appendChild(li);
  });
}

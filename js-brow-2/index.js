const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const deleteButton = document.querySelector("#delete-button");

let todos = [];

function addTodoItem(event) {
    event.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
        const todoItem = {
            id: Date.now(),
            text: todoText,
            completed: false
        };
        todos.push(todoItem);
        renderTodoList();
        todoInput.value = "";
    }
}

function toggleTodoItem(event) {
    if (event.target.tagName.toLowerCase() === "input") {
        const todoItemId = parseInt(event.target.parentElement.getAttribute("data-todo-id"));
        const todoItemIndex = todos.findIndex((item) => item.id === todoItemId);
        todos[todoItemIndex].completed = !todos[todoItemIndex].completed;
        renderTodoList();
    }
}

function deleteCompletedTodoItems() {
    todos = todos.filter((item) => !item.completed);
    renderTodoList();
}

function renderTodoList() {
    todoList.innerHTML = "";
    todos.forEach((item) => {
        const todoItem = document.createElement("li");
        todoItem.setAttribute("data-todo-id", item.id);
        if (item.completed) {
            todoItem.classList.add("is-completed");
        }
        const todoCheckbox = document.createElement("input");
        todoCheckbox.setAttribute("type", "checkbox");
        todoCheckbox.checked = item.completed;
        const todoText = document.createElement("span");
        todoText.textContent = item.text;
        todoItem.appendChild(todoCheckbox);
        todoItem.appendChild(todoText);
        todoList.appendChild(todoItem);
    });
}

todoForm.addEventListener("submit", addTodoItem);
todoList.addEventListener("click", toggleTodoItem);
deleteButton.addEventListener("click", deleteCompletedTodoItems);

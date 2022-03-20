const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function removeToDos(item) {
    return
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    todos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveTodos();
}

function paintToDo(newTodoObject) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = newTodoObject.id;
    span.innerText = newTodoObject.text;
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);

    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObject = {
        text: newTodo,
        id: Date.now(),
    };
    todos.push(newTodoObject);
    paintToDo(newTodoObject);
    saveTodos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintToDo);
}
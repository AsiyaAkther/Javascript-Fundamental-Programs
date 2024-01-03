import { Todo } from "./classes/Todo.js";

// Find elements
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#inputTodo");
const todoLists = document.querySelector("#lists");
const messageElement = document.querySelector("#message");

// Show Message function
const showMessage = (text, status) => {
    messageElement.textContent = text;
    messageElement.classList.add(`bg-${status}`);

    setTimeout(() => {
        messageElement.textContent = "";
        messageElement.classList.remove(`bg-${status}`);
    }, 1000);
};

// Create todo function
const createTodo = (newTodo) => {
    const todoElement = document.createElement("li");
    todoElement.id = newTodo.todoId;
    todoElement.classList.add("list-style");
    todoElement.innerHTML = `
    <span> ${newTodo.todoValue} </span>
    <span> <button class="btn" id="deleteButton"> <i class="fa-solid fa-trash"></i> </button> </span>
    `;
    todoLists.appendChild(todoElement);

    const deleteButton = todoElement.querySelector("#deleteButton");
    deleteButton.addEventListener("click", deleteTodo);
};

// Delete todo function
const deleteTodo = (event) => {
    const selectedTodo = event.target.parentElement.parentElement.parentElement;
    todoLists.removeChild(selectedTodo);
    showMessage("Todo is deleted", "danger");

    let todos = getTodosFromLocalStorage();
    todos = todos.filter((todo) => todo.todoId !== selectedTodo.id);
    localStorage.setItem("mytodos", JSON.stringify(todos));
};

// getTodosFromLocalStorage Function
const getTodosFromLocalStorage = () => {
    return localStorage.getItem("mytodos") ? JSON.parse(localStorage.getItem("mytodos")) : [];
};

// Add todo function
const addTodo = (event) => {
    event.preventDefault();
    const todoValue = todoInput.value;

    // Unique id
    const todoId = Date.now().toString();

    const newTodo = new Todo(todoId, todoValue);

    createTodo(newTodo);
    showMessage("Todo is created", "success");

    // Adding todo to local storage
    const todos = getTodosFromLocalStorage();
    todos.push(newTodo);
    localStorage.setItem("mytodos", JSON.stringify(todos));

    todoInput.value = "";
};

// Load todos function
const loadTodos = () => {
    const todos = getTodosFromLocalStorage();
    todos.map((todo) => createTodo(todo));
};

// Adding listener
todoForm.addEventListener("submit", addTodo);
window.addEventListener("DOMContentLoaded", loadTodos);
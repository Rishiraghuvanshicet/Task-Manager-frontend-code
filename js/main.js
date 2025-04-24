import { getTasks, saveTasks } from "./store";
import { displayTasks } from "./ui";
import { createTask } from "./task";

let tasks = getTasks();
let filter = "all";
let sortBtn = false;

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskFilter = document.getElementById("task-filter");
const sortButton = document.getElementById("task-filter-button");

function showScreen() {
  const filtered = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  if (sortBtn) {
    filtered.sort((a, b) => a.txt.localeCompare(b.txt));
  }

  displayTasks(filtered, taskList, handleToggle, handleDelete);
}

function handleAdd(e) {
  e.preventDefault();
  const txt = taskInput.value.trim();
  if (!txt) return;

  tasks.push(createTask(txt));
  taskInput.value = "";
  saveTasks(tasks);
  showScreen();
}

function handleToggle(id) {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasks(tasks);
  showScreen();
}

function handleDelete(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks(tasks);
  showScreen();
}

taskForm.addEventListener("submit", handleAdd);
taskFilter.addEventListener("change", (e) => {
  filter = e.target.value;
  showScreen();
});

sortButton.addEventListener("click", () => {
  sortBtn = !sortBtn;
  showScreen();
});

showScreen();

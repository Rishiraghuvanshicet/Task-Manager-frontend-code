export function displayTasks(tasks, container, onToggle, onDelete) {
  container.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = task.completed ? "task completed" : "task";
    li.innerHTML = `
            <span>${task.txt}</span>
            <div>
             <button class="complete-btn">Done!!</button>
               <button class="delete-btn">Delete</button>
               </div>
        `;
    li.querySelector(".complete-btn").addEventListener("click", () => {
      onToggle(task.id);
    });
    li.querySelector(".delete-btn").addEventListener("click", () => {
      onDelete(task.id);
    });
    container.appendChild(li);
  });
}

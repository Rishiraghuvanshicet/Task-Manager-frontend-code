export function displayTasks(tasks, container,onToggle, ondelete) {
    container.innerHtML = ''; 
    tasks.forEach(task=> {
        const li = document.createElement('li');
        li.className = task
        li.innerHTML = `
            <span>${task.name}</span>
            <div>
             <button class="complete-btn">Done!!</button>
               <button class="delete-btn">Delete</button>
        `;
        li.querySelector('.delete').addEventListener('click', () => {
            ondelete(task.id);
        });
    })
}
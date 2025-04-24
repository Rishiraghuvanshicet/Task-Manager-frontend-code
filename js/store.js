const secretKey = 'my-task-manager';

export function getTasks() {
    const tasks = localStorage.getItem(secretKey);
    return tasks ? JSON.parse(tasks) : [];
}

export function saveTasks(tasks) {
    localStorage.setItem(secretKey, JSON.stringify(tasks));
} 
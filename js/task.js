export function createTask(txt) {
    return {
        id: Date.now().toString(),
        txt,
        completed: false,
        createdAt: new Date().toISOString(),
    };
}
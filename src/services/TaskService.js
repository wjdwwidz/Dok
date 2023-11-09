
const taskMap = new Map();

async function getTask(taskId) {
    const data = await taskMap.get(taskId);
    return data;
}

async function createTask(taskData) {
    task = {
        id : taskData.id,
        name: taskData.name
    }
    taskMap.put(task)
}

module.exports = { getTask, createTask };
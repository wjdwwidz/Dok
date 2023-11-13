
const taskMap = new Map();

async function getTask(taskId) {
    const data = await taskMap.get(taskId);
    return data;
}


// async function getTask(taskId) {
//    return findTask(taskId);
// }

async function createTask(taskData) {
    task = {
        id : taskData.id,
        name: taskData.name
    }
    taskMap.put(task)
}

// function findTask(callback, taskId) {
//     setTimeout(() => {
//         const data = taskMap.get(taskId)
//         callback(data);
//     }, 100);
// }

module.exports = { getTask, createTask };
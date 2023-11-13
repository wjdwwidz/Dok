const taskService = require("../services/TaskService");

async function get(req, res) {
    const taskId = req.params;
    await taskService.getTask(taskId);

}

async function create(req, res) {
    const taskData = req.body;
    console.log(req.body);
    await taskService.createTask(taskData);
}


module.exports ={
    create, get
} 

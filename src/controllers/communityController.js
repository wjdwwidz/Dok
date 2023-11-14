const communityService = require("../services/CommunityService");

async function get(req, res) {
    try{
        const community_name = await communityService.func
        res.status(200).json(community_name);
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
    await communityService.getTask(taskId);

}

// async function create(req, res) {
//     const taskData = req.body;
//     console.log(req.body);
//     await taskService.createTask(taskData);
// }


module.exports ={ get } 

const { Router } = require('express');
const taskController = require('../controllers/TaskController');

const router = Router();

router.get("/:task_id", taskController.get);
router.post("/", taskController.create);

module.exports = router;
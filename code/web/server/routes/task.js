const taskController = require("../controllers/task");


const express = require("express")

let router = express.Router();

router.get('/', taskController.renderTasks);
router.get('/active', taskController.renderActiveSprintTasks);
router.post('/', taskController.createTask);
router.post('/:taskId', taskController.editTask);
router.post('/:taskId/:state', taskController.updateTaskState);

module.exports = router;

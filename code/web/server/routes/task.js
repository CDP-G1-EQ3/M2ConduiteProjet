const taskController = require("../controllers/task");
const auth = require("../middlewares/auth");


const express = require("express")

let router = express.Router();

router.get('/', auth, taskController.renderTasks);
router.get('/active', auth, taskController.renderActiveSprintTasks);
router.post('/', auth, taskController.createTask);
router.post('/:taskId', auth, taskController.updateTask);
router.post('/:taskId/:state', auth, taskController.updateTaskState);
router.delete('/:taskId', auth, taskController.deleteTask);

module.exports = router;

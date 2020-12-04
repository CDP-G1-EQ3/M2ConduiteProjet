const taskController = require("../controllers/task");


const express = require("express")

let router = express.Router();

router.get('/', taskController.renderTasks);
router.post('/', taskController.createTask);

module.exports = router;

const projectController = require("../controllers/project");

const express = require("express")

let router = express.Router();

router.post('/new', projectController.addProject);
router.get('/new', projectController.renderAddProject);
router.get('/', projectController.getAllProjects);

module.exports = router;
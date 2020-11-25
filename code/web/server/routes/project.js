const projectController = require("../controllers/project");

const express = require("express")

let router = express.Router();

router.post('/', projectController.addProject);
router.get('/', projectController.getAllProjects);

module.exports = router;
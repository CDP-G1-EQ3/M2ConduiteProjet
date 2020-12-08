const projectController = require("../controllers/project");
const auth = require("../middlewares/auth");

const express = require("express")

let router = express.Router();

router.post('/new', auth, projectController.addProject);
router.get('/new', auth, projectController.renderAddProject);
router.get('/', auth, projectController.getAllProjects);

module.exports = router;
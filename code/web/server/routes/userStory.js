const userStoryController = require("../controllers/userStory");


const express = require("express")

let router = express.Router();

router.post('/us', userStoryController.addUserStory);
//router.get('/us/:projectId', userStoryController.getUserStoriesByProjectId);
router.get('/:projectId', userStoryController.renderBacklog);

module.exports = router;

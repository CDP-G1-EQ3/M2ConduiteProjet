const userStoryController = require("../controllers/userStory");


const express = require("express")

let router = express.Router();

router.post('/us', userStoryController.addUserStory);
router.get('/:projectId', userStoryController.getUserStoriesByProjectId);

module.exports = router;

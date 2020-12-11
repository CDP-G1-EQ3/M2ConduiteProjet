const userStoryController = require("../controllers/userStory");
const auth = require("../middlewares/auth");


const express = require("express")

let router = express.Router();

router.post('/us', auth,  userStoryController.addUserStory);
//router.get('/us/:projectId', userStoryController.getUserStoriesByProjectId);
router.get('/:projectId', auth, userStoryController.renderBacklog);
router.post('/us/:usId', auth, userStoryController.updateUserStory);
router.delete('/us/:usId', auth, userStoryController.deleteUserStory);

module.exports = router;

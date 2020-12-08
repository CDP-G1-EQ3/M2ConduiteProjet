const sprintController = require("../controllers/sprint");
const auth = require("../middlewares/auth");


const express = require("express")

let router = express.Router();

router.post('/', auth, sprintController.addSprint);
router.post('/start', auth, sprintController.startSprint);
router.post('/:usId/:sprintId', auth, sprintController.addUsToSprint);

module.exports = router;

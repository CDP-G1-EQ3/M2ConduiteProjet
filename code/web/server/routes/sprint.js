const sprintController = require("../controllers/sprint");


const express = require("express")

let router = express.Router();

router.post('/', sprintController.addSprint);
router.post('/start', sprintController.startSprint);
router.post('/:usId/:sprintId', sprintController.addUsToSprint);

module.exports = router;

const sprintController = require("../controllers/sprint");


const express = require("express")

let router = express.Router();

router.post('/', sprintController.addSprint);

module.exports = router;

const userController = require("../controllers/user");


const express = require("express")

let router = express.Router();

router.get('/', userController.login);
router.post('/login', userController.login);
router.get('/login', userController.renderLogin);

router.post('/signup', userController.signup);
router.get('/signup', userController.renderRegister);

module.exports = router;

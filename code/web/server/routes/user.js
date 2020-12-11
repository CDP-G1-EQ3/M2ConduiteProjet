const userController = require("../controllers/user");


const express = require("express")

let router = express.Router();

router.post('/login', userController.login);
router.get('/', userController.renderLogin);
router.get('/login', userController.renderLogin);
router.get('/logout', userController.logout);

router.post('/signup', userController.signup);
router.get('/signup', userController.renderRegister);

module.exports = router;

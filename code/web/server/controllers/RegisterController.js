const Controller = require("../Controller");

class RegisterController extends Controller {

    getPath() {
        return '/register';
    }

    get(req, res) {
        res.render("register");
    }
}

module.exports = RegisterController;
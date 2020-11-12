const Controller = require("../Controller");

class RootController extends Controller {

    getPath() {
        return '/';
    }

    get(req, res) {
        res.render("login");
    }
}

module.exports = RootController;
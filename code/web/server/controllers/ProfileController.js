const Controller = require("../Controller");

class ProfileController extends Controller {

    getPath() {
        return '/profile';
    }

    get(req, res) {
        res.render("profile");
    }
}

module.exports = ProfileController;
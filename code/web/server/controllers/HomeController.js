const Controller = require("../Controller");

class ProfileController extends Controller {

    getPath() {
        return '/home';
    }

    get(req, res) {
        let userProjects = Controller.dm.getUserProjects(1);
        userProjects.then((projects) => {
            res.render("home", {projects});
        });
    }
}

module.exports = ProfileController;
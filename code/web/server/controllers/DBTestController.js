const Controller = require("../Controller");

class DBTestController extends Controller {

    getPath() {
        return '/dbtest';
    }

    get(req, res) {
        let output = Controller.dm.testAll();
        res.render("dbtest", {output});
    }
}

module.exports = DBTestController;
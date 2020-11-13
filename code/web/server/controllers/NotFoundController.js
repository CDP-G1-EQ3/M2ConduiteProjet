const Controller = require("../Controller");

class NotFoundController extends Controller {

    getPath() {
        return '*';
    }
}

module.exports = NotFoundController;
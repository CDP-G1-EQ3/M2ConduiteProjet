'use strict';

class Controller {

    /**
     * This is an abstract class ; Prevent its instanciation
     */
    constructor() {
        if (this.constructor === Controller) {
            throw new TypeError('Abstract class "Controller" cannot be instantiated directly');
        }
    }

    /**
     * Corresponds to the path handled by this controller. Absolute.
     */
    getPath() {
        throw new Error('Function not implemented : '+this.constructor.name+'.getPath');
    }

    /**
     * Implement the  behavior of a GET request on the specifed path.
     * Will default to the 404 page.
     * @param {express.request} req The request obtained from express
     * @param {express.response} res The response to provide to express
     */
    get(req, res) {
        res.render("404");
    }

    /**
     * Implement the  behavior of a POST request on the specifed path.
     * Will default to the 404 page.
     * @param {express.request} req The request obtained from express
     * @param {express.response} res The response to provide to express
     */
    post(req, res) {
        res.render("404");
    }

    /**
     * Applies this controller to a path.
     * @param {express} app An express application
     */
    assign(app) {
        app.get(this.getPath(), this.get);
        app.post(this.getPath(), this.post);
    }
}

module.exports = Controller;
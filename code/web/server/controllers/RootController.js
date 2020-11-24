const Controller = require("../Controller");
const bcrypt = require("bcrypt");

class RootController extends Controller {

    getPath() {
        return '/';
    }

    get(req, res) {
        res.render("login");
    }

    post(req, res) {
        Controller.dm.getUserFromIdentifier(req.body.username)
            .then(sqlResult => {
                if (sqlResult.length !== 0) {
                    bcrypt.compare(req.body.password, sqlResult[0].sha)
                        .then(valid => {
                            if (!valid)
                                res.json({ message: "invalid passord" });
                            else {
                                res.json({ message: "user logged " });
                            }
                        })
                }
                else
                    res.json({ message: "no user with this username" })
            })
            .catch(err => {
                res.json({error: err});
            });
    }
}

module.exports = RootController;
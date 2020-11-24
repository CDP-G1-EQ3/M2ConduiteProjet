const Controller = require("../Controller");
const bcrypt = require("bcrypt");

class RegisterController extends Controller {

    getPath() {
        return '/register';
    }

    get(req, res) {
        res.render('register');
    }

    post(req, res) {
       bcrypt.hash(req.body.password, 10, (err, hash) => {
           if (err)
            res.send("erreur bcrypt");
            else {
                req.body.password = hash;
                Controller.dm.createUser(req.body.username, req.body.mail, req.body.password)
                    .then(sqlResult => {
                        if (sqlResult) {
                            res.status(201).json({ message: "user added" });
                            console.log(sqlResult);
                        }else {
                            res.json({ message: 'user is not added, the user may already exists'});
                        }
                    })
                    .catch(sqlError => { res.json({ message: 'error when attempting to create user'}); });
            }
       })
 
    }
}

module.exports = RegisterController;
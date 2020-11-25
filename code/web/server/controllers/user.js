const bcrypt = require("bcrypt");

const userModel = require("../models/user");

exports.signup= (req, res) => {
   bcrypt.hash(req.body.password, 10, (err, hash) => {
       if (err)
        res.send("erreur bcrypt");
        else {
            req.body.password = hash;
            userModel.createUser(req.body.username, req.body.mail, req.body.password)
                .then(sqlResult => {
                    if (sqlResult) {
                        res.render("login");
                    }else {
                        error = "unknown error"
                        res.render("register", error);
                    }
                })
                .catch(sqlError => { 
                    error = "a user with this email/username already exists"
                    res.render("register", {error: error});
                 });
        }
   })
}

exports.renderLogin = (req, res) => {
    res.render("login");
}

exports.login= (req, res) => {
     userModel.getUserByUsername(req.body.username)
         .then(sqlResult => {
             if (sqlResult.length !== 0) {
                 bcrypt.compare(req.body.password, sqlResult[0].sha)
                     .then(valid => {
                         if (!valid)
                             res.json({ message: "invalid passord" });
                         else {
                             global.userId = sqlResult[0].id;
                             res.render("home");
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

exports.renderRegister = (req, res) => {
    res.render("register");
}

exports.logout = (req, res) => {
    res.send("logout");
}
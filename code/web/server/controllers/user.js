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
                        //res.status(201).json({ message: "user added" });
                        //console.log(sqlResult);
                        res.render("login");
                    }else {
                        res.json({ message: 'user is not added, the user may already exists'});
                    }
                })
                .catch(sqlError => { res.json({ message: 'error when attempting to create user'}); });
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
                             res.redirect("/project");
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
const projectModel = require("../models/project");

exports.getAllProjects = (req, res) => {
    projectModel.getUserProjects(global.userId)
    .then(sqlResult => {
        if (sqlResult.length != 0) {
            //res.json({ message: "succes", res: sqlResult })
            res.render("home", sqlResult);
        }else {
            res.json({ message: "faild", res: sqlResult })
        }
    })
    .catch(err => {
        res.json({error: err});
    });
}

exports.addProject = (req, res) => {
    projectModel.createNewProject(global.userId, req.body.name, req.body.description)
        .then(sqlResult => {
            if (sqlResult) {
                res.json({ message: "project added", res: sqlResult});
            } else {
                console.log("===> 5")
                res.json({ message: "A project with this name alread exists", res: sqlResult });
            }
        })
        .catch(err => {
            console.log("===> 6")
            res.json({ error: err});
        });
}
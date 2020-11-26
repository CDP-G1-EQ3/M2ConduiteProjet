const projectModel = require("../models/project");

exports.getAllProjects = (req, res) => {
    projectModel.getUserProjects(global.userId)
    .then(sqlResult => {
        res.render("project", {projects: sqlResult});
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
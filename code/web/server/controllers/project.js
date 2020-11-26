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
    projectModel.createNewProject(global.userId, req.body.title, req.body.description)
        .then(sqlResult => {
            if (sqlResult) {
                res.redirect("/project");
            } else {
                res.json({ message: "A project with this name alread exists", res: sqlResult });
            }
        })
        .catch(err => {
            res.json({ error: err});
        });
}

exports.renderAddProject = (req, res) => {
    res.render("createProject");
}
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
            res.redirect("/project");
        })
        .catch(sqlError => {
            res.redirect("/project/new?error")
        });
}

exports.renderAddProject = (req, res) => {
    res.render("createProject");
}
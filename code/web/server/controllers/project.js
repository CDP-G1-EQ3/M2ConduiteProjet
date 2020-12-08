const projectModel = require("../models/project");

exports.getAllProjects = (req, res) => {
    projectModel.getUserProjects(req.session.userId)
    .then(sqlResult => {
        res.render("project", {projects: sqlResult});
    })
    .catch(err => {
        res.json({error: err});
    });
}

exports.addProject = (req, res) => {
    projectModel.createNewProject(req.session.userId, req.body.title, req.body.description)
        .then(sqlResult => {
            res.redirect("/project");
        })
        .catch(sqlError => {
            res.render("createProject", {error: "Erreur lors de la création du projet"});
        });
}

exports.renderAddProject = (req, res) => {
    res.render("createProject");
}
let userStoryModel = require("../models/userStory");

exports.addUserStory = (req, res) => {
    userStoryModel.createUS(req.body.idProject, req.body.description, req.body.difficulty, req.body.importance)
        .then(sqlResult => {
            const message = (sqlResult != null) ? "U.S created" : "U.S creation failed";
            res.send(message);
        })
        .catch(error => res.send(error));
}

exports.getUserStoriesByProjectId = (req, res) => {
    userStoryModel.getUserStoriesByIdProject(req.params.projectId)
        .then(sqlResult => {
            res.send(sqlResult);
        })
        .catch(error => res.send(error));
}
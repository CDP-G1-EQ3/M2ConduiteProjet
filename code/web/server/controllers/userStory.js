let userStoryModel = require("../models/userStory");

exports.addUserStory = (req, res) => {
    userStoryModel.createUS(req.body.idProject, req.body.description, req.body.difficulty, req.body.importance)
        .then(sqlResult => {
            const message = (sqlResult != null) ? "U.S created" : "U.S creation failed";
            if (sqlResult) {
                res.redirect("/backlog/" + req.body.idProject);
            }else {
                res.json({erro: "error when attempting to créate a US"});
            }
        })
        .catch(error => res.send(error));
}

// not used yet
const getUserStoriesByProjectId = (req, res) => {
    userStoryModel.getUserStoriesByIdProject(req.params.projectId)
        .then(sqlResult => {
            res.send(sqlResult);
        })
        .catch(error => res.send(error));
}

exports.renderBacklog = (req, res) => {
    userStoryModel.getUserStoriesByIdProject(req.params.projectId)
        .then(sqlResult => {
            console.log(sqlResult);
            let userStories = {userStories: sqlResult, projectId: req.params.projectId};
            res.render("backlog", {userStories});
        })
        .catch(error => res.send(error));

}

exports.updateUserStory = (req, res) => {
    userStoryModel.getUserStoryById(req.params.usId)
       .then(userStories => {
           userStoryModel.updateUserStoryById(req.params.usId, req.body.description, req.body.difficulty, req.body.importance)
               .then(sqlResult => {
                   res.redirect("/backlog/" + userStories[0].project);
               })
               .catch(error => res.json({ error: "update operation on a U.S failed" }));
       })
       .catch(error => res.json({ error: "error when attempting to get the US: " + req.params.usId}));
}

exports.deleteUserStory = (req, res) => {
    userStoryModel.getUserStoryById(req.params.usId)
        .then(userStories => {
            userStoryModel.deleteUserStoryById(req.params.usId)
                .then(sqlResult => {
                    res.redirect("/backlog/" + userStories[0].project);
                })
                .catch(error => res.json({ error: "delete operation on a U.S failed" }));
        })
        .catch(error => res.json({ error: "error when attempting to get the US: " + req.params.usId}));
}
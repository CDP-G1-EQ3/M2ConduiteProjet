let userStoryModel = require("../models/userStory");
let sprintModel = require("../models/sprint");

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

exports.renderBacklog = async (req, res) => {
    req.session.currentProjectId = (req.params.projectId) ? req.params.projectId : req.session.currentProjectId;
    let allUs = await userStoryModel.getBacklogUserStories(req.params.projectId)
    const notActiveSprints = await sprintModel.selectNotActiveSprint(req.params.projectId);
    let sprintsUs = [];
    let sprints = notActiveSprints;
    for (let i=0; i<notActiveSprints.length; i++) {
        sprint = notActiveSprints[i];
        const userStories = await userStoryModel.getUserStoriesBySprint(req.params.projectId, sprint.id);
        sprintsUs.push(userStories);
    };
    let response = {
        userStories: allUs,
        sprintsUs: sprintsUs,
        sprints: sprints,
        projectId: req.params.projectId,
        activeSprint: containActiveSprint(sprints)
    }
    res.render("backlog", {response});
}

function containActiveSprint(sprints) {
    for (let i=0; i<sprints.length; i++) {
        if (sprints[i].state === "active")
            return true;
    }
    return false;
}

exports.updateUserStory = (req, res) => {
    if (req.body.method === "delete") {
        console.log("delete");
        userStoryModel.getUserStoryById(req.params.usId)
            .then(userStories => {
                userStoryModel.deleteUserStoryById(req.params.usId)
                    .then(sqlResult => {
                        res.redirect("/backlog/" + userStories[0].project);
                    })
                    .catch(error => res.json({ error: "delete operation on a U.S failed" }));
            })
            .catch(error => res.json({ error: "error when attempting to get the US: " + req.params.usId}));
    }else if (req.body.method === "put") {
        console.log("delete");
        userStoryModel.getUserStoryById(req.params.usId)
        .then(userStories => {
            userStoryModel.updateUserStoryById(req.params.usId, req.body.description, req.body.difficulty, req.body.importance)
                .then(sqlResult => {
                    res.redirect("/backlog/" + userStories[0].project);
                })
                .catch(error => res.json({ error: "update operation on a U.S failed" }));
        })
        .catch(error => res.json({ error: "error when attempting to get the US: " + req.params.usId}));
    }else {
        res.send(req.body.method);
    }
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
const { SqlError } = require("mariadb");
const sprintModel = require("../models/sprint");
const usModel = require("../models/userStory");

exports.addSprint = (req, res) => {
    getLastId()
        .then(lastId => {
            const sprintName = "sprint " + (lastId + 1);
            sprintModel.insertSprint(req.session.currentProjectId, sprintName)
                .then(SqlResult => {
                    res.redirect("/backlog/" + req.session.currentProjectId);
                })
                .catch(error => {
                    res.send(error);
                });
        })
        .catch();
}

async function getLastId() {
    const sqlResult = await sprintModel.selectLastSprint()
    if (sqlResult.length > 0)
        return sqlResult[0].id;
    return 0;
}

exports.addUsToSprint = (req, res) => {
    if (req.params.sprintId === "NULL")
        req.params.sprintId = null;
    sprintModel.updateUsSprint(req.params.sprintId, req.params.usId)
        .then(sqlResult => {
            res.redirect("/backlog/" + req.session.currentProjectId);
        })
        .catch(error => {
            res.send(error);
        });
}

exports.startSprint = (req, res) => {
    sprintModel.startSprint(req.body.sprintId, req.body.startDate, req.body.endDate)
        .then(sqlResult => {
            res.redirect("/backlog/" + req.session.currentProjectId);
        })
        .catch(error => res.send(error));
}

exports.updateSprintUs = (req, res) => {
    usModel.closeUserStories(req.params.usId, req.params.state)
        .then(sqlResult => {
            res.redirect("/backlog/" + req.session.currentProjectId);
        })
        .catch(error => res.send(error));
}

exports.closeSprint = (req, res) => {
    sprintModel.updateSprintState(req.params.sprintId, "finished")
        .then(sqlResult => {
            usModel.getNotClosedUserStrories(req.params.sprintId)
                .then(async notClosedUserStories => {
                    for (let i=0; i<notClosedUserStories.length; i++) {
                        console.log("id: " + notClosedUserStories[i]);
                        await sprintModel.updateUsSprint(null, notClosedUserStories[i].id);
                    }
                    res.redirect(303, "/backlog/" + req.session.currentProjectId);
                })
                .catch(error => res.send(error));

        })
        .catch(error => res.send(error));
}
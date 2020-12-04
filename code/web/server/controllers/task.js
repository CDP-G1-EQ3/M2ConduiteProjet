const userStryModel = require("../models/userStory");
const taskModel = require("../models/task");

exports.renderTasks = async (req, res) => {
    let userStories = await userStryModel.getUserStoriesByIdProject(global.currentProjectId);
    let currentProjectTasks = await taskModel.selectProjectTasks(global.currentProjectId);
    let response = {
        userStories: userStories,
        tasks: currentProjectTasks,
        projectId: global.currentProjectId
    };
    res.render("task", {response});
}

exports.createTask = (req, res) => {
    if (req.body.duration === "")
        req.body.duration = null;
    if (req.body.userStory === "")
        req.body.userStory = null;

    taskModel.insertTask(req.body.projectId, req.body.description, req.body.duration, req.body.userStory)
        .then(async sqlResult => {
            const dependancy = req.body.dependancy;
            if ((typeof dependancy) === "string") {
                taskModel.insertTaskDependacy(global.currentProjectId, sqlResult.insertId, dependancy)
                    .then(result => {
                        res.redirect("/task");
                    })
                    .catch(error => res.send(error));
            }else if (dependancy) {
                for (let i=0; i<dependancy.length; i++) {
                    await taskModel.insertTaskDependacy(global.currentProjectId, sqlResult.insertId, dependancy[i]);
                }
            }
            res.redirect("/task");
       })
        .catch(error => res.send(error));
}
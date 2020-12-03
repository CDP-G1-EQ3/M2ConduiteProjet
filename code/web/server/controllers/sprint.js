const { SqlError } = require("mariadb");
const sprintModel = require("../models/sprint");

exports.addSprint = (req, res) => {
    getLastId()
        .then(lastId => {
            const sprintName = "sprint " + (lastId + 1);
            sprintModel.insertSprint(global.currentProjectId, sprintName)
                .then(SqlResult => {
                    res.redirect("/backlog/" + 1);
                })
                .catch(error => {
                    res.send(error);
                });
        })
        .catch();
}

async function getLastId() {
    const sqlResult = await sprintModel.selectLastSprint(1)
    if (sqlResult.length > 0)
        return sqlResult[0].id;
    return 0;
}
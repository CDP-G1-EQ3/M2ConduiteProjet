let database = require("../Database");

/**
 * Create a US in a project
 * @param {int} project The ID of the project for this US
 * @param {string} label The text used to describe the US
 * @param {int} difficulty The difficulty for this US
 * @param {int} sprint (optionnal) The ID of a sprint to attach this US to
 */
exports.createUS = (project, label, difficulty, importance, sprint = null) => {
    let sql = "INSERT INTO cdp_us (`project`,`label`,`difficulty`, `importance`, `sprint`) VALUES (?,?,?,?,?)";
    let opt = [project, label, difficulty, importance, sprint];

    return database.fast(sql, opt);
}

//TODO rename
exports.getUserStoriesByIdProject = (projectId) => {
    const sql = "SELECT * FROM cdp_us WHERE project = ?";
    const opt = [projectId];
    return database.fast(sql, opt);
}

exports.getBacklogUserStories = (projectId) => {
    const sql = "SELECT * FROM cdp_us WHERE project = ? AND sprint IS NULL";
    const opt = [projectId];
    return database.fast(sql, opt);
}

exports.deleteUserStoryById = (usId) => {
     const sql = "DELETE FROM cdp_us WHERE id=?";
     return database.fast(sql, [usId]);
}

exports.getUserStoryById = (usId) => {
    return database.fast("SELECT * FROM cdp_us WHERE id=?", [usId]);
}

exports.updateUserStoryById = (usId, label, difficulty, importance) => {
    const opt = [label, difficulty, importance, usId];
    return database.fast("UPDATE cdp_us SET label=?, difficulty=?, importance=? WHERE id=?", opt);
}

exports.getUserStoriesBySprint = (projectId, sprintId) => {
    const sql = "SELECT * FROM cdp_us WHERE project=? AND sprint=?";
    return database.fast(sql, [projectId, sprintId]);
}
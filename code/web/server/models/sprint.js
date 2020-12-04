const database = require("../Database");

exports.insertSprint = (projectId, name) => {
    const sql = "INSERT INTO cdp_sprint (`project`, `name`) VALUES (?, ?)";
    return database.fast(sql, [projectId, name]);
}

exports.selectLastSprint = () => {
    return database.fast("SELECT * FROM cdp_sprint ORDER BY id DESC LIMIT 0,1");
}

exports.updateUsSprint = (sprintId, usId) => {
    const sql = "UPDATE cdp_us SET sprint=? WHERE id=?";
    return database.fast(sql, [sprintId, usId]);
}

exports.selectNotActiveSprint = (projectId) => {
    return database.fast("SELECT * FROM cdp_sprint WHERE project=?", [projectId]);
}

exports.startSprint = (sprintId, startDate, endDate) => {
    const sql = "UPDATE cdp_sprint SET startDate=?, endDate=?, state=? WHERE id=?";
    return database.fast(sql, [startDate, endDate, "active", sprintId]);
}
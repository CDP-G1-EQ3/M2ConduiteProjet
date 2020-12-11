const database = require("../Database");

exports.selectProjectTasks = (projectId) => {
    let sql = "SELECT task.id, task.project, task.title, task.duration, task.state, task.us, us.sprint " + 
                "FROM cdp_task as task, cdp_us as us " + 
                "WHERE task.project=? AND task.us=us.id";
    return database.fast(sql, [projectId]);
}

exports.selectStartedSprintTasks = (projectId) => {
    const sql = "SELECT task.id, task.project, task.title, task.duration, task.state, task.us " +
                    "FROM cdp_task as task, cdp_us as us, cdp_sprint as sprint " + 
                    "WHERE task.project=? AND task.us=us.id AND us.sprint=sprint.id AND sprint.state=?"
    return database.fast(sql, [projectId, "active"]);
}

exports.insertTask = (projectId, description, duration=null, us=null) => {
    let var1 = "";
    let var2 = "";
    let opt = [projectId, description, "todo"];

    if (duration != null) {
        var1 += ", `duration`";
        var2 += ", ?";
        opt.push(duration);
    }

    if(us != null) {
        var1 += ", `us`";
        var2 += ", ?";
        opt.push(us);
    }

    let sql = "INSERT INTO cdp_task (`project`, `title`, `state`" + var1 + ") VALUES (?, ?, ?" + var2 + ")";
    return database.fast(sql, opt);
}

exports.selectTaskDepencies = (taskId) => {
    const sql = "SELECT * FROM cdp_task_dep WHERE task=?";
    return database.fast(sql, [taskId]);
}

exports.insertTaskDependacy = (projectId, taskId, dependancy) => {
    return database.fast("INSERT INTO cdp_task_dep (`project`, `task`, `dep`) VALUES (?, ?, ?)", [projectId, taskId, dependancy]);
}

exports.updateState = (taskId, state) => {
    return database.fast("UPDATE cdp_task SET state=? WHERE id=?", [state, taskId]);
}

exports.updateTask = (taskId, description, duration, userStory) => {
    return database.fast("UPDATE cdp_task SET title=?, duration=?, us=? WHERE id=?", [description, duration, userStory, taskId]);
}

exports.deleteTask = (taskId) => {
    const sql = "DELETE FROM cdp_task WHERE id=?";
    return database.fast(sql, [taskId]);
}
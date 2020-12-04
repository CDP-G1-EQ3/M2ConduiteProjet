const database = require("../Database");

exports.selectProjectTasks = (projectId) => {
    return database.fast("SELECT * FROM cdp_task WHERE project=?", [projectId]);
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

exports.insertTaskDependacy = (projectId, taskId, dependancy) => {
    return database.fast("INSERT INTO cdp_task_dep (`project`, `task`, `dep`) VALUES (?, ?, ?)", [projectId, taskId, dependancy]);
}
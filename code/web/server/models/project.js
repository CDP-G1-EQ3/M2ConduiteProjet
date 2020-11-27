const database = require("../Database");
/**
 * Creates a project and assigns the owner role to the specified user
 * @param {int} user The user ID
 * @param {string} title The title of the project
 * @param {string} description The description of the project
 */
exports.createNewProject = async (user, title, description) => {
    let result = await createProject(user, title, description);
    let project = result.insertId;
    return createUserProject(project, user, 'owner');
}


/**
 * Adds a new project to the database
 * @param {string} name The name of the project
 * @param {string} description The description of the project
 */
function createProject(user, title, description) {
    let sql = "INSERT INTO cdp_project (`name_`,`description_`,`ownerid_`) VALUES (?,?,?)";
    let opt = [title, description, user];

    return database.fast(sql, opt); 
}

/**
 * Create a new project member
 * @param {int} project The project ID 
 * @param {int} user The user ID
 * @param {string} role The role for this user ('owner','admin','member')
 */
function createUserProject(project, user, role) {
    let sql = "INSERT INTO cdp_user_project (`project`,`user`,`role`) VALUES (?,?,?)";
    let opt = [project, user, role];

    return database.fast(sql, opt); 
}

/**
 * Get all of the projects for one user, and his role for each one
 * @param {int} user_id A user ID
 * @param {string} user_role (optional) Filter by the user's role
 */
exports.getUserProjects = (user_id, user_role = null) => {
    let opt = [user_id];

    let cond1 = "";
    if(user_role != null) {
        cond1 += " AND up.role = ?";
        opt.push(user_role);
    }

    return database.fast("SELECT p.id, p.name_, p.description_, o.username FROM cdp_project as p, cdp_user_project as up, cdp_user as o WHERE up.project = p.id AND up.user = o.id AND up.user = ? "+cond1, opt);
}

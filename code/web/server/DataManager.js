'use strict';

class DataManager {

    /**
     * Assigns the unique database connection
     */
    constructor() {
        if(DataManager.database == null) {
            const Database = require("./Database.js");
            
            DataManager.database = new Database();
        }
    }
    
    /**
     * Returns the currently know status about the database
     */
    isOnline() {
        return DataManager.database.online;
    }

    /**
     * Tries to determine wether the database is accessible and outputs the result
     * DEPRECATED
     */
    async test() {
       
       await DataManager.database.fast("SELECT * FROM cdp_user").then(
           (res) => {
                if(res == undefined) return;
                if(res.length >= 1) {
                    console.log("Database is online");
                } else {
                    console.log("Database doesn't seem to be online");
                }
            }
       );

    }

    /**
     * Get a user's information
     * @param {int} user_id A user ID
     */
    getUser(user_id) {        
        return DataManager.database.fast("SELECT * FROM cdp_user WHERE id=?", [user_id]);
    }

    /**
     * Get a user's information
     * @param {int} user_identifier A user ID
     */
    getUserFromIdentifier(user_identifier) {        
        return DataManager.database.fast("SELECT * FROM cdp_user WHERE identifier=?", [user_identifier]);
    }

    /**
     * Find a user if his login information is correct
     * @param {int} user_identifier A user ID
     * @param {string} pwd_hash A hash representing the user's password
     */
    getUserFromLogin(user_identifier, pwd_hash) {        
        return DataManager.database.fast("SELECT * FROM cdp_user WHERE identifier=? AND sha=?", [user_identifier, pwd_hash]);
    }

    /**
     * Get all users
     */
    getUsers() {        
        return DataManager.database.fast("SELECT * FROM cdp_user");
    }
    
    /**
     * Adds a new user to the database
     * @param {string} identifier The unique text identifier for this user
     * @param {string} username The public username of the user
     * @param {string} mail The email adresse of the user
     * @param {string} sha The encrypted password of the user
     */
    createUser(identifier, username, mail, sha) {
        let sql = "INSERT INTO cdp_user (`identifier`, `username`, `mail`, `sha`) VALUES (?,?,?,?)";
        let opt = [identifier, username, mail, sha];

        return DataManager.database.fast(sql, opt);
    }

    /**
     * Get all of the projects for one user, and his role for each one
     * @param {int} user_id A user ID
     * @param {string} user_role (optional) Filter by the user's role
     */
    getUserProjects(user_id, user_role = null) {
        let opt = [user_id];

        let cond1 = "";
        if(user_role == null) {
            cond1 += " AND up.role = ?";
            opt.push(user_role);
        }

        return DataManager.database.fast("SELECT * FROM cdp_project as p, cdp_user_project as up WHERE up.project = p.id AND up.user = ?"+cond1, opt);
    }

    /**
     * Get a project's information
     * @param {int} project_id A project ID
     */
    getProject(project_id) {        
        return DataManager.database.fast("SELECT * FROM cdp_project WHERE id=?", [project_id]);
    }

    /**
     * Get all projects
     */
    getProjects() {        
        return DataManager.database.fast("SELECT * FROM cdp_project");
    }

    /**
     * Adds a new project to the database
     * @param {string} name The name of the project
     * @param {string} description The description of the project
     */
    createProject(name, description) {
        let sql = "INSERT INTO cdp_project (`name_`,`description_`) VALUES (?,?)";
        let opt = [name, description];

        return DataManager.database.fast(sql, opt); 
    }

    /**
     * Gets all the sprints of a project
     * @param {int} project The project ID to gather the sprints from
     */
    getProjectSprints(project) {
        let sql = "SELECT * FROM cdp_sprint WHERE project = ?";
        let opt = [project];

        return DataManager.database.fast(sql, opt); 
    }
    
    /**
     * Adds a new sprint to the database
     * @param {int} project The project ID in which to create the sprint
     */
    createSprint(project) {
        let sql = "INSERT INTO cdp_sprint (`project`) VALUES (?)";
        let opt = [project];

        return DataManager.database.fast(sql, opt); 
    }

    /**
     * Gets all the sprint tables of a sprint
     * @param {int} project The project of the sprint
     * @param {int} sprint The sprint holding the tables to fetch
     */
    getSprintTables(project,sprint) {
        let sql = "SELECT * FROM cdp_sprint_table WHERE project = ? AND sprint = ?";
        let opt = [project,sprint];

        return DataManager.database.fast(sql, opt);
    }

    /**
     * Adds a new sprint table to the database
     * @param {int} project The project of the sprint
     * @param {int} sprint The sprint holding the new table
     * @param {string} title The title of the table
     */
    createSprintTable(project, sprint, title) {
        let sql = "INSERT INTO cdp_sprint_table (`project`,`sprint`,`title`) VALUES (?,?,?)";
        let opt = [project,sprint,title];

        return DataManager.database.fast(sql, opt); 
    }

    /**
     * Get all the tasks for one sprint
     * @param {int} project The ID of the project
     * @param {int} sprint The ID of the sprint
     */
    getSprintTasks(project, sprint) {
        let sql = "SELECT * FROM cdp_task as t, cdp_sprint_table as s WHERE t.project = s.project AND s.project = ? AND s.sprint = ?";
        let opt = [project, sprint]; 

        return DataManager.database.fast(sql, opt); 
    }

    /**
     * Get all the tasks for one sprint table
     * @param {int} project The ID of the project
     * @param {int} sprint The ID of the sprint
     */
    getSprintTableTasks(project, sprint_table) {
        let sql = "SELECT * FROM cdp_task WHERE AND project = ? AND sprint_table = ?";
        let opt = [project, sprint_table]; 

        return DataManager.database.fast(sql, opt); 
    }

    /**
     * Create a new task inside a sprint table
     * @param {int} project The project of this task
     * @param {string} title The title of this task
     * @param {string} duration The duration of this task
     * @param {int} sprint_table The ID of the sprint table holding this task
     * @param {int} us (optionnal) The ID of the US for this task
     */
    createTask(project, title, duration, sprint_table, us=null) {
        let sql = "INSERT INTO cdp_task (`project`,`title`,`duration`,`sprint_table`,`us`) VALUES (?,?,?,?,?)";
        let opt = [project, title, duration, sprint_table,us];

        return DataManager.database.fast(sql, opt);
    }


}

module.exports = DataManager;
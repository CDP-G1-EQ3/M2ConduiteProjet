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
    
    createUser() {

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
}

module.exports = DataManager;
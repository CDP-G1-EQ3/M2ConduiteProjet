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
}

module.exports = DataManager;
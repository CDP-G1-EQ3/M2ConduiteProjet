'use strict';

class Database {

    /**
     * Configures the database according to the config.
     * Then attemps to start a connection.
     */
    constructor(){
        const config = require('config');

        if(!config.has("db")) {
          throw("Please fill the db configs!");
        }
            
        const mariadb = require('mariadb');
        this.db = mariadb.createPool({
             host: config.get("db.host"), 
             user: config.get("db.user"), 
             password: config.get("db.pass"),
             database: config.get("db.dbname"),
             connectionLimit: 5
        });

        this.reconnect();
    }
    
    /**
     * Attempts to connect to the database.
     * Returns the result, can timeout.
     */
    async reconnect() {

        await this.db.getConnection()
            .then(conn => {
                console.log("Database reached");
                
                this.online = true;
            })
            .catch(err => {
                console.log("Error "+err);
                this.online = false;
            });

        if(!this.online) {
            await sleep(10000); // Prevent from crashing database
        }

        return this.online;
        
    }

    /**
     * Attempts to send a query to the database and returns the result.
     * @param {string} sql An sql query
     * @param {dict} opt (optionnal) A dictionnary used to replace keys in the query by the secured values
     */
    async query(sql, opt = null){
        if(!this.online) {
            console.log("DB not online");
            this.reconnect();
            return false;
        }
        try {
            await this.db.query(sql, opt).then(
                (res) => {
                    if(res == undefined) return;
                    if(res[0] == undefined) return;
                    if(res[0].hasOwnProperty("res") && res[0].res === null) return;
                    this.result = res;
                }
            )

            return true;
        } catch(e){
            console.log("Failed "+e);
            this.reconnect();
            return false;
        }
    }

    /**
     * Get the currently stored result of the last query
     * @param {int} i (optionnal) Specifies to return the ith line
     */
    getResult(i = null){
        if(i == null){
            return this.result;
        }
        if(this.result[i] != undefined){
            return this.result[i];
        }
        return false;
    }

    /**
     * Attemps to perform a query to the database and returns the obtained result.
     * @param {string} sql An sql query
     * @param {dict} opt (optionnal) A dictionnary used to replace keys in the query by the secured values
     * @param {int} i (optionnal) Specifies to return the ith line
     */
    async fast(sql, opt = null, i = null){
        this.result = null;
        await this.query(sql, opt);
        return this.getResult(i);
    }
}

module.exports = Database;
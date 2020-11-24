let online = false;
let result;
let db;

/**
 * Configures the database according to the config.
 * Then attemps to start a connection.
 */
exports.init = () => {
    const config = require('config');

    if(!config.has("db")) {
      throw("Please fill the db configs!");
    }
        
    const mariadb = require('mariadb');
    db = mariadb.createPool({
         host: config.get("db.host"), 
         user: config.get("db.user"), 
         password: config.get("db.pass"),
         database: config.get("db.dbname"),
         connectionLimit: 5
    });

    reconnect();
}
    
/**
 * Attempts to connect to the database.
 * Returns the result, can timeout.
 */
async function reconnect() {

   await db.getConnection()
        .then(conn => {
            console.log("Database reached");
            
            online = true;
        })
        .catch(err => {
            console.log("Error "+err);
            online = false;
        });

    if (!online)
        await setTimeout(()=> {
        console.log("online was false: " + online);
    }, 10000);

    return online;
    
}

/**
 * Attempts to send a query to the database and returns the result.
 * @param {string} sql An sql query
 * @param {array} opt (optionnal) An array of values to secure and replace each '?' in the query in order
 */
async function query(sql, opt = null){
    if(!online) {
        console.log("DB not online");
        reconnect();
        return false;
    }
    try {
        await db.query(sql, opt).then(
            (res) => {
                result = res;
            }
        )

        return true;
    } catch(e){
        console.log("Failed "+e);
        reconnect();
        return false;
    }
}

/**
 * Get the currently stored result of the last query
 * @param {int} i (optionnal) Specifies to return the ith line
 */
function   getResult(i = null){
    if(i == null){
        return result;
    }
    if(result[i] != undefined){
        return result[i];
    }
    return false;
}

/**
 * Attemps to perform a query to the database and returns the obtained result.
 * @param {string} sql An sql query
 * @param {array} opt (optionnal) An array of values to secure and replace each '?' in the query in order
 * @param {int} i (optionnal) Specifies to return the ith line
 */
exports.fast = async (sql, opt = null, i = null) => {
    result = null;
    await query(sql, opt);
    return getResult(i);
}
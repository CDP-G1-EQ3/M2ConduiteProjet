const database = require("../Database");

/**
     * Adds a new user to the database
     * @param {string} identifier The unique text identifier for this user
     * @param {string} username The public username of the user
     * @param {string} mail The email adresse of the user
     * @param {string} sha The encrypted password of the user
     */
exports.createUser = (username, mail, sha) => {
        let sql = "INSERT INTO cdp_user (`username`, `mail`, `sha`) VALUES (?,?,?)";
        let opt = [username, mail, sha];

        return database.fast(sql, opt);
}

/**
     * Get a user's information
     * @param {int} user_identifier A user ID
     */
exports.getUserByMail= (mail) => {        
    return database.fast("SELECT * FROM cdp_user WHERE mail=?", [mail]);
}
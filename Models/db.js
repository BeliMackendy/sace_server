const mysql = require("mysql");
const config = require("config");

var pool = mysql.createPool({
    connectionLimit: 10,
    host: config.get("host"),
    user: config.get("database.user"),
    password: config.get("database.password"),
    database: config.get("database.name"),
});

pool.getConnection(function(err, connection) {
    if (err) throw err; // not connected!

    return connection;
});

module.exports = pool;
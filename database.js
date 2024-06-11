const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: "ode.h.filess.io",
    user: "TimelineTyrants2_liquiddeep",
    password: "yourmom",
    database: "tTimelineTyrants2_liquiddeep", // Schema name 
    port: "3307"
});

module.exports = connection
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: "ode.h.filess.io",
    user: "TTimelineTyrants2_liquiddeep",
    password: "yourmom",
    database: "TimelineTyrants2_liquiddeep", // Schema name 
    port: "3307"
});

module.exports = connection
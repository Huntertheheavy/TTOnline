const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: "ode.h.filess.io",
    user: "TimelineTyrants2_liquiddeep",
    password: "TimelineTyrants2_liquiddeep",
    database: "TimelineTyrants2_liquiddeep", // Schema name 
    port: "3307"
});

module.exports = connection
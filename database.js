const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: "p3a.h.filess.io",
    user: "TimelineTyrants2_liquiddeep",
    password: "yourmom",
    database: "timelinetyrantsfinal_castlebet", // Schema name 
    port: "3307"
});

module.exports = connection
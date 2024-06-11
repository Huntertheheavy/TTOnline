const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Dinossauro03",
    database: "timeline_tyrants_db" // Schema name 
});

module.exports = connection
const mysql = require('mysql');

var connection = mysql.createPool({
    host: '', // Your hostname
    user: '', // Your username
    password: '', // Your password
    database: '' // Database name
});

module.exports = connection;

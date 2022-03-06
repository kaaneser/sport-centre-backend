const mysql = require('mysql');

var connection = mysql.createPool({
    host: 'eu-cdbr-west-02.cleardb.net',
    user: 'b4071cde596b73',
    password: '11144093',
    database: 'heroku_e452a5a64574e1b'
});

module.exports = connection;
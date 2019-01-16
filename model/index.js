var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ycxjqyt1.',
  database: 'qyt'
});

module.exports = connection;

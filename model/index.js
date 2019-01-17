var mysql = require('mysql');

var connection = mysql.createConnection({
  host: '94.191.9.42',
  user: 'root',
  password: 'Ycxjqyt1.',
  database: 'qyt'
});

module.exports = connection;

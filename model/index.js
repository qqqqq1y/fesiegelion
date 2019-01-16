var mysql = require('mysql');
var http = require('http');
var url = require('url');
var qs = require('querystring');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ycxjqyt1.',
  database: 'qyt'
});

connection.connect();

module.exports = connection;

// var connection = require('./index');
var mysql = require('mysql');
var db = {};
var connectObj = {
  host: 'localhost',
  user: 'root',
  password: 'ycxjqyt1.',
  database: 'qyt'
};

db.findArticleList = function(params, cb) {
  var connection = mysql.createConnection(connectObj);

  connection.connect();

  let addSql = "select * from article";

  connection.query(addSql, function (err, res) {
    if (err) {
      console.log(err);

      return;
    } else {
      cb(res);
    }
  });

  connection.end();
}

module.exports = db;

// function addArticle(cb) {
//   let addSql = "";

//   connection.query(addSql, function(err, res) {
//     if (err) {


//       return;
//     } else {
//       cb({
//         ret: 1,
//         tip: '添加成功',
//         data: {}
//       });
//     }
//   });
// }


// module.exports = {
//   findArticleList,
//   addArticle
// };

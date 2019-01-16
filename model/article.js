var connection = require('./index');
var mysql = require('mysql');
var errCallback = {
  ret: 0,
  tip: '操作失败',
  data: {}
};

function findArticleList(params, cb) {
  console.log(params);

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

function addArticle(cb) {
  let addSql = "";

  connection.query(addSql, function(err, res) {
    if (err) {
      cb(errCallback);

      return;
    } else {
      cb({
        ret: 1,
        tip: '添加成功',
        data: {}
      });
    }

    connection.end();
  });
}


module.exports = {
  findArticleList,
  addArticle
};

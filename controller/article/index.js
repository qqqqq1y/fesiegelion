var express = require('express');
var url = require('url');
var router = express.Router();
var articleModel = require('../../model/article');

router.get('/list', function(req, res) {
  const params = req.query;

  function cb(data) {
    res.send({
      ret: 1,
      tip: '操作成功',
      data: data
    });

    res.end();
  }

  articleModel.findArticleList(params, cb);
});

router.post('/add', function(req, res) {

  req.on('data', function (chunk) {
    body += chunk;
    console.log("chunk:", chunk);
  });

  articleModel.addArticle(cb);

  function cb(data) {
    res.send(data);
  }
});

module.exports = router;

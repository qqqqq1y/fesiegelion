var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function (req, res, next) {
  res.send({ data: { name: 'qyt' } });
});

module.exports = router;

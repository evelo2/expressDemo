var express = require('express');
var nav = require('../server/nav');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('nav', { nav });
});

module.exports = router;
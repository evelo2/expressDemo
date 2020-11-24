var express = require('express');
var people = require('../server/people');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(people);
});

module.exports = router;
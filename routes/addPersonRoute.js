var express = require('express');
var bodyParser = require('body-parser');
var people = require('../server/people');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('addPerson', { title: 'Add Person' });;
});

router.post('/', function (req, res, next) {
    try {
        const { body } = req;
        people.push(body);
        res.json({
            result: 'success'
        });
    } catch(err) {
        console.log(`ERROR: ${err}`);
    }

});

module.exports = router;
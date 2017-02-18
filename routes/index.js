var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now());
	next();
});

router.get('/', function (req, res) {
	var url = "Undefined";
	res.render('index', {
		url: url
	})
});

router.get('/:url', function (req, res) {
	var url = req.param('url');
	res.render('index', {
		url: url
	})
});

router.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, '../views/', '404.html'));
});

module.exports = router;
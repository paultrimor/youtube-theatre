var express = require('express');
var path = require('path');
var router = express.Router();


/* GET home page. */
router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now());
	next();
});

router.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../views/', 'index.html'));
});

router.get('/video/:url', function(req, res){
	res.send(req.params);
});

router.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, '../views/', '404.html'));
});

module.exports = router;


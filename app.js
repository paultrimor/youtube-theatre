var express = require('express');
var path = require('path');
var index = require('./routes/index');
var app = express();
//var http = require('http').Server(app);
//var io = require('socket.io')(http); 

app.use(express.static('public'));

app.use('/', index);

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});
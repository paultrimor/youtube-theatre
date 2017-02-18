var express = require('express');
var path = require('path');
var index = require('./routes/index');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

app.use('/', index);

io.on('connection', function (socket) {
	console.log('A user connected');
	socket.on('disconnect', function () {
		console.log('A user disconnected');
	});

	socket.on('chat message', function (msg) {
		console.log('Message: ' + msg);
		io.emit('chat message', msg);
	});

});

http.listen(process.env.PORT || 3000, function () {
	console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
var express = require('express');
var path = require('path');
var index = require('./routes/index');
var app = express();

var ejs = require('ejs');
app.set('view engine', 'ejs');

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

app.use('/', index);


io.on('connection', function (socket) {
	console.log('A user connected');

	socket.on('room', function (room) {
		socket.join(room);
		socket.broadcast.to(room).emit('sendTime');
	});

	socket.on('disconnect', function () {
		console.log('A user disconnected');
	});

	socket.on('chat message', function (msg, room) {
		console.log('Message: ' + msg + " from room: " + room);
		io.to(room).emit('chat message', msg);
	});

	socket.on('time', function (room, time) {
		socket.broadcast.to(room).emit('time', time);
	})

	socket.on('playerState', function (room, state) {
		socket.broadcast.to(room).emit('playerState', state);
	})

});

http.listen(process.env.PORT || 3000, function () {
	console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
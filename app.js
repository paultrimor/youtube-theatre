var express = require('express');
var path = require('path');
var index = require('./routes/index');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http); 

app.use(express.static('public'));

app.use('/', index);

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('disconnect', function(){
		console.log('a user disconnected'); 
	});

	socket.on('chat message', function(msg){
  		console.log('message: ' + msg);
    	io.emit('chat message', msg);
  });

});




http.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});



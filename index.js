var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http); 

http.listen(3000, function(){
  console.log('listening on *:3000');
});

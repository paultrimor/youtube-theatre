var socket = io();

socket.emit('room', url);


$('form').submit(function () {
	socket.emit('chat message', $('#m').val(), url);
	$('#m').val('');
	return false;
});

socket.on('chat message', function (msg) {
	$('#messages').append($('<li style=" overflow-wrap: word;">').text(msg));
});
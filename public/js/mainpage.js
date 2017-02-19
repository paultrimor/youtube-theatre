function functionSubmit() {
	console.log('functionsubmit');
	var youtubeInput = $('#youtubeInput').val();
	var start = youtubeInput.search('v=') + 2;
	console.log(youtubeInput.substr(start));
	window.location.href = '/' + youtubeInput.substr(start);
	return false;
};
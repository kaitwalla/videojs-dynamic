function makeVid(vidSrc,width,height,poster,id,div) {
	if (typeof vidSrc === 'undefined') {
		console.log('You need to include a video source in order to call a video');
		return false;
	}
	div = typeof div !== 'undefined' ? div : 'body';
	width = typeof width !== 'undefined' ? width : 640;
	height = typeof height !== 'undefined' ? height : 480;
	poster = typeof poster !== 'undefined' ? poster : 'none';
	id = typeof id !== 'undefined' ? id : 'player' ;
	var attributes = {
		'id': id,
		'class': 'video-js vjs-default-skin',
		'width': width,
		'height': height,
		'controls': '',
		'poster':poster,
		'preload':'auto'
	};
	source = document.createElement('source');
	$(source).attr('type','video/mp4');
	$(source).attr('src',vidSrc);

	obj = $('<video />').attr(attributes);

	$(div).append(obj);
	$(obj).append(source);
	_V_(document.getElementById('player'),{},function() {
	var videoID = this.id();
	window[videoID] = {}; 
	window[videoID].pct = 1;
	var trackEvent = function() {
		var videoID = this.id();
		_gaq.push(['_trackEvent', 'VideoJS', event.type,videoID]);
	};
	var trackTime = function() {
		var videoID = this.id();
		wv = window[videoID];
		wv.curr = this().currentTime();
		if (wv.curr/wv.pct >- wv.pct*.1 && wv.pct != 10) {
			_gaq.push(['_trackEvent', 'Progress', String(wv.pct)+'0%',videoID]);   
			wv.pct++;
		}
		 _gaq.push(['_trackEvent', 'VideoJS', event.type,videoID]);
	};
	this.on('play',trackEvent);
	this.on('timeupdate',trackTime);
	this.on('ended',trackEvent);
});
}
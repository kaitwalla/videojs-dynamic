videojs-dynamic
===============

For dynamically loading VideoJS elements & tracking events in Google Analytics.

Usage:

`function makeVid(vidSrc,width,height,poster,id,div);`

vidSrc = MP4 URL.

width = Video width (default 640)

height = Video height (default 480)

poster = Image to be displayed before playback (should be the same aspect ratio as the video, default none)

id = Player ID. Needs to be unique, will default to just 'player.' If default settings are run, will load video into same player.

div = Container element for the video to be inserted into. Default inserts at the bottom of the document body.

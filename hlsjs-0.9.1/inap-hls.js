function inap_hls(video_dom_id, video_url) {
    // Feature detection and information gathering/displaying.
      var video = document.getElementById(video_dom_id);
      var myCanPlayHLS = video.canPlayType('application/vnd.apple.mpegurl');

      // If the browser thinks it can handle HLS on its own, use the native player.
      if (myCanPlayHLS == "maybe" || myCanPlayHLS == "probably") {
        console.log("Using Native player");
        video.src = video_url;
      }
      // Next, try to see if HLS.js works.
      else if (Hls.isSupported()) {
        console.log("Using HLS.js");
        var hls = new Hls();
        hls.loadSource(video_url);
        hls.attachMedia(video);
      }
      // No video to play otherwise.
      else {
        console.log("No compatible player found.");
      }
}

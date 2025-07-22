//Check for youtube embed within iframe
//
var players = [];
var playerids = [];
var ytemb = new RegExp('(http|https)?:\/\/(www[\.]|)?[\.]?youtube[\.]?com\/embed\/.*$');


var player;
var duration = null;
var totalTime;
var currentTime;
var percent = 1;
var playing = -1;

var isPaused = false;
var isPlaying = false;


$(document).ready(function () {
    //Check for Youtube Video Embed Iframe on this page
    //
    if (AM_YoutubeEmbed()) {

        try {
            var tag = document.createElement('script');
            tag.id = 'ytapi';
            tag.src = 'https://www.youtube.com/iframe_api';
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            //Go to: onYouTubeIframeAPIReady()

        } catch (message) {

        }
    }
});




var image = new Image();
image.src = "https://youtube.com/favicon.ico";

image.onerror = function(){
    // The user can't access youtube
	//console.log(0);
}



// Called by the YT API, which should be included as:
// <script src="https://www.youtube.com/iframe_api">
//
function onYouTubeIframeAPIReady() {
   //console.log("YT API Ready");

   for (var e = document.getElementsByTagName("iframe"), x = 0; x < e.length; x++) {

      if (ytemb.test(e[x].src)) {
         var player = new YT.Player(e[x].id, { events: { 'onStateChange': onPlayerStateChange } });
         players.push(player);
      }
   }

   // Alternate video type, created on the Video.aspx page for an embedded YT video.
   //
   $(".yt-video-container[data-videoid]").each(function (i, e) {
      var self = $(this);

      //console.log("VIDEO", self);

      var player = new YT.Player(this, {
         height: self.attr("data-height"),
         width: self.attr("data-width"),
         videoId: self.attr("data-videoid"),
         playerVars: {
            rel: 0,
            autoplay: 0,
            mute: 0,
            cc_load_policy: 1,
            controls: 1,
            enablejsapi: 1,
            origin: window.location.href,
            modestbranding: 1,
            playsinline: 1
         },
         //modestbranding=1 & autoplay=0& mute=1& rel=0& cc_load_policy=1& controls=1& enablejsapi=1& playsinline=1& origin=https% 3A % 2F % 2Frethink.ft.com & widgetid=1
         events: {
            onReady: function (playerEvent) {
               // console.log("READY", playerEvent);
               // Mute and play the video.
               //
               playerEvent.target.mute();
               playerEvent.target.playVideo();

               $(".t-yt-unmute").click(function (e) {
                  var self = $(this);

                  self.hide().css("opacity", 0);

                  playerEvent.target.playVideo();
                  playerEvent.target.unMute();

                  AM_TrackEvent("click", "video_unmute_overlay", window.location.href, 1);

               });
            },
            onStateChange: function (playerEvent) {
               // In siteFunctions.js
               //
               onPlayerStateChange(playerEvent);
            }
         }
      });
   });
}

// Object for using Origami to track youtube video viewing.
//
function OD(player) {
   var duration = player.getDuration();

   this.player = player;
   this.pausedPosition = 0;
   this.state = -2;
    

   this.progressMarkers = [
      { label: "progress", time: duration * 0.0, progress: 0 },
      { label: "progress", time: duration * 0.25, progress: 25 },
      { label: "progress", time: duration * 0.5, progress: 50 },
      { label: "progress", time: duration * 0.75, progress: 75 },
      { label: "progress", time: duration * 0.99, progress: 100 }
   ];

   this.progressPosition = 0;
   this.progressTimer = null;

   this.stopProgressTimer = function () {
      if (this.progressTimer != null) {
         clearInterval(this.progressTimer);
         this.progressTimer = null;
      }
   };

   this.startProgressTimer = function () {
      this.stopProgressTimer();
      var that = this;

      this.progressTimer = setInterval(function () {
         var ptIdx = that.progressPosition;
         if (ptIdx < that.progressMarkers.length) {
            var time = that.player.getCurrentTime();

            while (ptIdx < that.progressMarkers.length && that.progressMarkers[ptIdx].time <= time) {
                that.trackEvent(that.progressMarkers[ptIdx].label, that.progressMarkers[ptIdx].progress);

               ++ptIdx;
            }

            that.progressPosition = ptIdx;
         }
      }, 1000);
   };

   this.resetProgress = function () {
      this.progressPosition = 0;
   };

   // Track video event for Origami.
   //
   this.trackEvent = function (action, progress) {
      var trackingData = {
         category: "video",
         action: action,  // was action
         content: {
            title: player.getVideoData().title
         },
         duration: player.getDuration(),
         progress: progress, //player.getCurrentTime(),
         url: window.location.href
      };

      document.body.dispatchEvent(new CustomEvent('oTracking.event', {
         detail: trackingData,
         bubbles: true
      }));
		  
		// And log the GA and Permutive Event
		// 
		if (progress!="undefined" && progress != null) {
		
			var thisEventAction = progress + "% watched";
			var thisEventCategory = "Video";
			//var thisEventLabel = window.location.href;
			var thisEventLabel = document.title;
			var thisEventValue = 0;
			
			AM_TrackEvent(thisEventAction, thisEventCategory, thisEventLabel, thisEventValue);	
            
            permutiveTrackVideo(duration, progress)
            
            
		}
       	  

   };
}

//The API calls this function when the player's state changes i.e. plays or pauses the video, or when the video finishes playing
function onPlayerStateChange(event) {
   //clearInterval(duration);


   try {
      totalTime = 0;

      var player = event.target;

      var od = player.od;

      if (typeof od == "undefined") {
         od = new OD(player);
         player.od = od;
      }

      switch (event.data) {
         case YT.PlayerState.ENDED:
            if (od.state != event.data) {
               od.state = event.data;

               od.stopProgressTimer();
               od.resetProgress();
               od.pausedPosition = player.getCurrentTime();
               od.trackEvent("ended");
            }

            break;

         case YT.PlayerState.PAUSED:
            if (od.state != event.data) {
                
                AM_TrackEvent("paused", "Video", document.title, "");	
                
               od.state = event.data;

               od.stopProgressTimer();
               od.trackEvent("pause");

               od.pausedPosition = player.getCurrentTime();
            }
            break;

         case YT.PlayerState.PLAYING:
            if (od.state != event.data) {
                
                AM_TrackEvent("playing", "Video", document.title, "");	

                
               od.state = event.data;

               var playingFrom = player.getCurrentTime();

               // Might be a slight discrepency with the time if just pausing and playing, so only count seeking if the time difference is above a threshold.
               //
               if (Math.abs(od.pausedPosition - playingFrom) > 0.1) {
                  od.trackEvent("seeked");
               }

               od.startProgressTimer();
               od.trackEvent("playing");
            }
            break;

            /*default:
            // Only other states are UNSTARTED, BUFFERING and CUED.
            od.startProgressTimer();
            od.trackEvent("seeked");
            break;*/
      }
   }
   catch (message) {
      console.log(message);
   }
}

function AM_SetVideoDuration(player, eventLabel, totalTime) {
    currentTime = player.getCurrentTime().toFixed(4);
    var currentPercentage = ((currentTime / totalTime) * 100);
    currentPercentage = Math.round(currentPercentage);
	
    if (currentPercentage >= percent && currentPercentage < 10) {
        TrackEvent("Video", "Viewed 0%", eventLabel);
        percent = 0;

    } else if (currentPercentage >= percent && currentPercentage < 20) {
        TrackEvent("Video", "Viewed 10%", eventLabel);
        percent = 20;
    } else if (currentPercentage >= percent && currentPercentage < 30) {
        TrackEvent("Video", "Viewed 20%", eventLabel);
        percent = 30;
    } else if (currentPercentage >= percent && currentPercentage < 40) {
        TrackEvent("Video", "Viewed 30%", eventLabel);
        percent = 40;
    } else if (currentPercentage >= percent && currentPercentage < 50) {
        TrackEvent("Video", "Viewed 40%", eventLabel);
        percent = 50;
    } else if (currentPercentage >= percent && currentPercentage < 60) {
        TrackEvent("Video", "Viewed 50%", eventLabel);
        percent = 60;
    } else if (currentPercentage >= percent && currentPercentage < 70) {
        TrackEvent("Video", "Viewed 60%", eventLabel);
        percent = 70;
    } else if (currentPercentage >= percent && currentPercentage < 80) {
        TrackEvent("Video", "Viewed 70%", eventLabel);
        percent = 80;
    } else if (currentPercentage >= percent && currentPercentage < 90) {
        TrackEvent("Video", "Viewed 80%", eventLabel);
        percent = 90;
    } else if (currentPercentage >= percent && currentPercentage < 100) {
        TrackEvent("Video", "Viewed 90%", eventLabel);
        clearInterval(duration);
    }

}

function AM_YoutubeEmbed() {
    //Function that checks to see if a youtube embed iframe exists on this page.
    //If it does, we can set up video event tracking (if GA Code present)
    //
    var exists = false;
    if (typeof ga != "undefined" && ga) {
        for (var e = document.getElementsByTagName("iframe"), x = 0; x < e.length; x++) {

            if (ytemb.test(e[x].src)) {
                //If this tag has no id then we can add one
                if (e[x].id == null || typeof e[x].id == "undefined" || e[x].id.length < 1) {
                    e[x].setAttribute("id", "ytemb" + x);
                }

                var src = e[x].src;
                if (src.indexOf("enablejsapi") === -1) {
                    //append to end of querystring
                    //
                    if (src.indexOf("?") > -1) {
                        src = src + "&enablejsapi=1";
                    } else {
                        src = src + "?enablejsapi=1";
                    }

                    e[x].setAttribute("src", src);

                }

                exists = true;
            }
        }
    }
    return exists;
}
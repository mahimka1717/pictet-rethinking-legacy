//Detect Mobile Browser in Javascript
//

var gtag;
var ge = {};
var players = [];
var clientWebsite = "group.pictet";
var isMobile = false;
var ga;
var ytemb = new RegExp('(http|https)?:\/\/(www[\.]|)?[\.]?youtube[\.]?com\/embed\/.*$');
var cURL;

//Detect Mobile Browser in Javascript
//
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;


//Email Regex
var er = new RegExp('^((?:(?:(?:[a-zA-Z0-9][\\.\\-\\+_]?)*)[a-zA-Z0-9])+)\\@((?:(?:(?:[a-zA-Z0-9][\\.\\-_]?){0,62})[a-zA-Z0-9])+)\\.([a-zA-Z0-9]{2,})$');

//Add more event track actions here so that they become consistant for each event we track.
//Call within the track event function as 'ge.click' which will populate the event action with the value from this array
//
ge.click = "click";
ge.videoplay = "video-play";
ge.videopause = "video-paused";
ge.videoend = "video-end";


$(document).ready(function () {
    
    cURL = window.location.href.replace("?", "QQ").replace("&", "-AND-").replace("&", "-AND-").replace("&", "-AND-").replace("&", "-AND-").replace("&", "-AND-");
    
    
    $(".main-module--aplayerBtnHidden--3QOKB").click(function (e) {
        console.log("audio play");
        e.preventDefault();
    });
    
    $(".o-cookie-message__action axx").click(function (e) {

        var t = $(this).html()
        var href = $(this).attr("href");
        
        setTimeout(function(){ 
            if (t.indexOf("Accept") > 0) {
                window.location = "/process-cookies.aspx?pageID=1&r=" + cURL;
            } else {
                window.location = href;
            }
        }, 500);
        
        //console.log(t);
        //console.log(href);
        
		e.preventDefault();
    });

    $(".related-chapter").each(function (e) {
        if (!$(this).hasClass("current-chapter"))
        {           
            $(this).hide();
        }
    });

    $('.match-row').matchHeight({ });

	var tlScroll;
	var tlMobileScroll;
	
	// Infographic Tracking
	//
	$(".pct-btn").click(function (e) {

        var t = $(this);
		var textContainer = t.find('.pct-btn-container-text');
		var text = "Button: " + textContainer.text();
		
        trackEvent("Timeline Infogrpahic", "Click", text);
	});

	$("#pct-right-btn,#pct-left-btn").click(function (e) {
	
		clearTimeout(tlScroll);
	
		tlScroll = setTimeout(function(){
			trackEvent("Timeline Infogrpahic", "Scroll", "Slide: " + $(".pct-btn-container.active").text())
		}, 2000);

	});
	

	if (isMobile) {
		var viewingMobileSlide;
		var currMobileSlide = "start";
		
		setInterval(function() {

			viewingMobileSlide = $(".pct-btn-container.active").text()

			if (viewingMobileSlide!=currMobileSlide) {
				trackEvent("Timeline Infogrpahic", "Mobile View", "Slide: " + $(".pct-btn-container.active").text())
			}
			currMobileSlide = viewingMobileSlide;
		}, 3000)
	}
	

    $("a,area").unbind("click");

    //Cookie Policy
    $(".cookieBar .acceptBtn").click(function (e) {
        $(this).parent().slideUp();
        e.preventDefault();
    });
    //

    //Social Sharing
    $(".share-toggle").click(function (e) {
        $(".share-lightbox").fadeToggle();
        e.preventDefault();
    });

    $(".share-fade").click(function () {
        $(".share-lightbox").fadeToggle();
    });
    //


    //Play HTML5 Video
    $(".play-page-video").click(function (e) {

        var t = $(this);
        var tID = t.attr("data-id");
        var video;

        if (tID != null && typeof tID != "undefined") {
            t.hide();
            video = document.getElementById(tID);
            PlayVideo(video);
        }

        e.preventDefault();
    });
    //
	
	
	$('.load-more').click(function(e){
		//$('.col-3').removeClass('hidden');
		//$(this).hide();
  //      e.preventDefault();

        console.log("test");
        $(".related-chapter").each(function (e) {
            console.log($(this));
            if (!$(this).hasClass("current-chapter")) {
                $(this).show();
            }
        });
        $(this).hide();
        e.preventDefault();
		
	});

    //When we click a filter (Entrepreneurs, Families etc) then show/hide panels that are tagged with that filter
    //
    $(".filter-options").find(".filter").click(function (e) {

        var t = $(this);
        var tSection = t.attr("data-section");

        //Check we have a section to filter
        //
        if ((tSection != null) && (tSection.length > 0) && (typeof tSection != "undefined")) {

            if (t.hasClass("inactive")) {
                t.removeClass("inactive");

                //Toggle the panels we are filtering to show/hide
                //
                $(".home-main div[data-section=" + tSection + "]").show();

                //Here, we loop through each section that may contain a [.col-2] div. 
                //[section.two-panels -container] divs have padding, whereby if the contents are empty, the padding will still remain. We show these divs if there were filtered panels inside
                //
                $(".home-main section.two-panels-container").each(function () {

                    var panelCount = 0;
                    var totalChildren = $(this).find(".col-2").length;

                    //See how many child divs are visible.
                    //
                    $(this).find(".col-2").each(function () {

                        if (!$(this).is(":visible")) {
                            panelCount++;
                        }

                    });

                    //Hide the empty divs which have hidden content inside
                    //
                    if (totalChildren == panelCount && panelCount > 0) {
                        $(this).show();
                    }
                    

                });

                t.children("a").show();

            } else {

                $(".filter-options").find(".filter").removeClass("inactive");
                $(".filter-options").find(".filter").children("a").show();
                $(".home-main div[data-section]").show();
                $(".home-main section.two-panels-container").show();

                //Mark this filter as inactive (so it fades out slightly)
                //
                t.addClass("inactive");


                //Toggle the panels we are filtering to show/hide
                //
                $(".home-main div[data-section=" + tSection + "]").hide();


                //Here, we loop through each section that may contain a [.col-2] div. 
                //[section.two-panels -container] divs have padding, whereby if the contents are empty, the padding will still remain, so we actually have to hide these divs if there is nothing inside
                //
                $(".home-main section.two-panels-container").each(function () {

                    var panelCount = 0;
                    var totalChildren = $(this).find(".col-2").length;

                    //See how many child divs are visible.
                    //
                    $(this).find(".col-2").each(function () {

                        if (!$(this).is(":visible")) {
                            panelCount++;
                        }

                    });

                    //Hide the empty divs which have hidden content inside
                    //
                    if (totalChildren == panelCount && panelCount > 0) {
                        $(this).hide();
                    }
                    

                });


                t.children("a").hide();

            }   
        }

        e.preventDefault();
    });
	
	$(".nav-toggle").click(function(e){
		
		$(".menu").toggleClass("active");
		$(this).toggleClass("active");
        e.preventDefault();
		
	});
	
    $(".sharer-toggle").click(function (e) {
		$(".share-container").toggleClass("open");
        e.preventDefault();
		
	});


    // Click Poster Image to Play YouTube Video
    // 
    $(".poster-image").click(function (e) {
        var self = $(this);
        self.hide();
        player.playVideo();
    });
	
		function reveal() {
		  var reveals = document.querySelectorAll(".shape-2023, .circle, .shape");

		  for (var i = 0; i < reveals.length; i++) {
			var windowHeight = window.innerHeight;
			var elementTop = reveals[i].getBoundingClientRect().top;
			var elementVisible = 140;

			if (elementTop < windowHeight - elementVisible) {
			  reveals[i].classList.add("active");
			} else {
			  reveals[i].classList.remove("active");
			}
		  }
		}

		window.addEventListener("scroll", reveal);

	

});

$(window).on("load", function () {

    $(".nav-link-click").click(function (e) {
        var el;
        var id = $(this).data("id");

        var found = false;
        $(".chapter-listing-container").each(function (e) {
            if (!found) {

                if ($(this).data("id") === id) {
                    found = true;
                    el = $(this);
                }
            }
        });

        if (found) {

            var offset = 10;
            if (isMobile) { offset = 90;}

            $('html, body').animate({
                scrollTop: $(el).offset().top - offset
            }, 1000);
        }
    });
});


var shareRelativePos = 0;
var bttRelativePos = 0;

$(window).scroll(function () {
   var nav = $('.menu, .menu-icon, .arrow-icon');

   scroll = $(window).scrollTop();
   sectionHeader = $(".o-header__row").outerHeight();

   if (scroll >= sectionHeader) {
      nav.addClass('fixed');
      $(".left-panel").addClass('fixed');
      $(".disclaimer__box").addClass('sticky');
      $(".chapter-nav-mb").addClass('fixed');
   }
   else {
      nav.removeClass('fixed');
      $(".left-panel").removeClass('fixed');
      $(".disclaimer__box").removeClass('sticky');
      $(".chapter-nav-mb").removeClass('fixed');
   }

    

   if (!isMobile) {
      var ftFooter = $('.o-footer');

      if (ftFooter.length > 0) {
         var ftFooterPosition = ftFooter.position();
         var ftFooterPositionTop = ftFooterPosition.top;
         var windowHeight = $(window).height();
         var diff = (windowHeight + scroll);
         var offset = diff - ftFooterPositionTop;

         if (diff >= ftFooterPositionTop) {
            $(".share-btn").css("bottom", offset + "px");
         } else {
            $(".share-btn").css("bottom", "0");
         }
      }
   }

   
   if (!isMobile) {
      var ftFooter2 = $('.footer');

      if (ftFooter2.length > 0) {
         var ftFooterPosition2 = ftFooter2.position();
         var ftFooterPositionTop2 = ftFooterPosition2.top;
         var windowHeight2 = $(window).height();
          var pictetFooterHeight = $(".pictet-sign-off").height();
          ftFooterPositionTop2 = ftFooterPositionTop2 + pictetFooterHeight + 50;
          
         var diff2 = (windowHeight2 + scroll);
         var offset2 = diff2 - ftFooterPositionTop2;
          
          /*
          console.log ("pictetFooterHeight " + pictetFooterHeight);
          console.log ("diff2 " + diff2);
          console.log ("offset2 " + offset2);
          console.log ("ftFooterPositionTop2 " + ftFooterPositionTop2);
          console.log ("*******");
          */
          
         if (diff2 > ftFooterPositionTop2) {
            $(".pictet-sign-off").css("bottom", offset2 + "px");
            //$(".pictet-sign-off").addClass("scrolled")
         } else {
            //$(".pictet-sign-off").removeClass("scrolled")
            $(".pictet-sign-off").css("bottom", "0");
         }
      }
   }
    

});




function PlayVideo(video) {

    //Function that plays a HTML5 video when the play button is clicked
    //
    //Add the controls to the video and start playing.
    video.setAttribute("controls", "controls");
    video.play();
}

function RestartVideo(video) {

    //Function that restarts the video once it has finished playing.
    //
    //Once the video as finished reload it so it can be played again.
    var restartVideo = document.getElementById(video);
    restartVideo.removeAttribute("controls");
    restartVideo.load();
    $(".play-page-video[data-id=" + video + "]").show();
}

function RestartAllVideos() {

    //Function that loops through each video on the page that is NOT a background video, and stops them playing and reloads ready to play again.
    //
    $("video.video-html5").each(function () {
        $(this)[0].load();
        $(this)[0].removeAttribute("controls");
        $(this).prev(".play-page-video").show();
    });
}

// Simple analytics event function to avoid DOM API conflict
function trackEvent(category, action, label) {
    // Здесь можно добавить отправку данных в аналитику, например, через gtag или console.log
    if (window.gtag) {
        window.gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    } else {
        console.log('trackEvent:', category, action, label);
    }
}


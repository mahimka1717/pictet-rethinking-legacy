var globalSponsor = "Pictet";	// **** <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CHANGE AS NEEDED *******
var ftPageLoadTime = Date.now();

$(document).ready(function () {


	$("a").on("click", function (e) {
			
			var self = $(this);
			var oc = self.attr("data-o-category");
			
			if (oc=="dnt") {
				// do not track these interactions
			} else {
				logInteraction(self);
				logCTA(self);
			
				var category = self.attr("data-o-category");
				var action = self.attr("data-o-action");		
				
				if (category=="share") {
					action = "click";
				}
				
				if (typeof category == "undefined" || category == null || category.length == 0) {
					// do not log
				} else {
					
		
						var trackingData = {
							category: category,
							action: typeof action == "undefined" || action == null || action.length == 0 ? "click" : action,
							url: window.location.href,
							href: self.prop("href"),
							content: {
								title: document.title
							}
						};
				
						var sponsor = self.attr("data-o-sponsor");
						if (typeof sponsor != null && sponsor != null) {
						   trackingData.button = sponsor;
						}
						
						if (category == "share") {
							trackingData.button = sponsor;
						}
				
						document.body.dispatchEvent(new CustomEvent('oTracking.event', {
							detail: trackingData,
							bubbles: true
						}))
						
				}
			
			}
			
	});

	// Track page scrolling. Requires jquery.scrolldepth.min.js, which is included in layout.master.
	//
	jQuery(function () {
		jQuery.scrollDepth({
			eventHandler: function (e, b, c, d) {
			   if (e.event == "ScrollDistance" && e.eventAction == "Percentage") {
			      var time = Math.floor((Date.now() - ftPageLoadTime) / 1000);
				   	
					var trackingData = {
						category: "page",
						action: "scrolldepth",
						content: {
						   title: document.title
						},
						meta: {
						   percentagesViewed: e.eventLabel.replace("%", ""),
						   attention: time
						},
						url: window.location.href
					};

					document.body.dispatchEvent(new CustomEvent('oTracking.event', {
						detail: trackingData,
						bubbles: true
					}));
					
					// And log the GA Event
					// 
					var thisEventAction = e.eventLabel + " scrolled";
					var thisEventCategory = "Scroll Depth";
					var thisEventLabel = window.location.href;
					var thisEventValue = 0;
					
					AM_TrackEvent(thisEventAction, thisEventCategory, thisEventLabel, thisEventValue);
					
				}
			}
		});
	});
	

	/* ************************************************************************************************************************************* */
	/* ************************************************************************************************************************************* */
	// GA Event Tracking for every 'a' and 'area' click
	//
	$(document).on("click", "a,area", function (e) {
		try {

			var t = $(this);
			var tHref = t.attr("href");
			var tTarget = t.attr("target");
			var linkType = "Internal";
			var tagName = $(this).prop("tagName").toLowerCase();
			var trackLink = true;
			var eventLabel = "";
			
			var gaaction = $(this).data("gaaction")
			var gacategory = $(this).data("gacategory")
			var galabel = $(this).data("galabel")
			

			//Check we have a link to track
			//
			if (tHref != null && typeof tHref != "undefined" && tHref.length > 0) {

				tHref = tHref.toLowerCase();
				eventLabel = t.attr("href");

				//Check which type of link this is (mailto,http etc)
				//
				if (tHref == "#") {
					if (tagName == "area") {
						if (t.attr("alt") != null && typeof t.attr("alt") != "undefined" && t.attr("alt").length > 0) {
							eventLabel = t.attr("alt");
							linkType = "Image Map"
						} else {
							trackLink = false;
						}
					} else {
						trackLink = false;
					}
				} else if ((tHref.length > 1) && (tHref.indexOf("#") > -1) && (tHref.indexOf("http") == -1)) {
					linkType = "Anchor";
				} else if ((tHref.length > 1) && (tHref.toLowerCase().indexOf("mailto:") > -1)) {
					linkType = "Mail";
				} else {
					if (tHref.indexOf("http://") > -1 || tHref.indexOf("https://") > -1) {
						if (tTarget != null && typeof tTarget != "undefined") {
							if (tTarget == "_blank") {
								linkType = "External New Window";
							} else {
								linkType = "External Same Window";
							}
						}
						else {
							linkType = "External Same Window";
						}
					}
				}

				if (trackLink) {
					
					if (gaaction && gacategory && galabel) {
						if (gaaction=="xclick") {gaaction="click";}
						AM_TrackEvent(gaaction, gacategory, galabel)
					} else {
						AM_TrackEvent(ge.click, "Link (" + linkType + ")", eventLabel);
					}
				}

			}

		} catch (message) {

		}

	});
	/* ************************************************************************************************************************************* */
	/* ************************************************************************************************************************************* */	

	
	
	
	
	
	
});



function AM_TrackEvent(eventAction, eventCategory, eventLabel, eventValue) {
	
	var tagarray = [];
    
    var ea = eventAction;
    
    if (eventAction=="0% watched") {
        ea = "1% watched";
    }
    
    var debug = true;
    
    if (debug)
    {
        console.log("calling: AM_TrackEvent 1");
        console.log("eventAction: " + ea);
        console.log("eventCategory: " + eventCategory);
        console.log("eventLabel: " + eventLabel);
        console.log("eventValue: " + eventValue);
    }

	
	// Tag Manager
	//
	if (gtag) {
		
		var data = {};
		if (eventCategory) { data.event_category = eventCategory; }
		if (eventLabel) { data.event_label = eventLabel; }
		if (eventValue) { data.value = eventValue; }
		tagarray.push(data);
		gtag('event', ea, data);

	}
	
	// Legacy Code
	//
	if (ga) {
		ga('send', 'event', eventCategory, ea, eventLabel);
	}
	
}


function logInteraction(s) {
	
	var time = Math.floor((Date.now() - ftPageLoadTime) / 1000);

	var trackingData = {
		category: "page",
		action: "interaction",
		attention: {
			total: time
		},
		content: {
			parent: "Paid Post",
			sponsor: globalSponsor,
			title: document.title
		}
	};

	document.body.dispatchEvent(new CustomEvent('oTracking.event', {
		detail: trackingData,
		bubbles: true
	}));
	
}





function logCTA(s) {
	
	var self = s;
	var category = "click";
	var action = "cta";		

	var trackingData = {
		category: "click",
		action: "cta",
		url: window.location.href,
		href: self.prop("href"),
		content: {
			title: document.title
		}
	};

	document.body.dispatchEvent(new CustomEvent('oTracking.event', {
		detail: trackingData,
		bubbles: true
	}))
	
}
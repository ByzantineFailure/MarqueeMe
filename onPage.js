var link = document.createElement("link");
link.href = chrome.extension.getURL("real-world.css");
link.type = "text/css";
link.rel = "stylesheet";

function doMarquee(onStart) {
	var randomGen = Math.random();
       	chrome.storage.local.get(['maliciousMode', 'ninetiesMode'], function(result) {
		if((!result.maliciousMode && !onStart) || (result.maliciousMode && randomGen < .15)) {
			if(result.ninetiesMode) {
				$('body').children().wrapAll('<marquee class="blink" id="marquee-me-tag"></marquee>');
			} else {
				$('body').children().wrapAll('<marquee id="marquee-me-tag"></marquee>');
			}
		}
	});
};

document.getElementsByTagName("head")[0].appendChild(link);
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	doMarquee(false);
});
$(doMarquee(true));


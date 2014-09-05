chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	$('body').children().wrapAll('<marquee></marquee>');
});

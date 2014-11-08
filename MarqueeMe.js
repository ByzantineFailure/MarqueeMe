function marqueePage(info, tab) {
	chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.sendRequest(tab.id, {});
	});
};

chrome.storage.local.get(['maliciousMode', 'ninetiesMode'], function(result) {
	if(!result.maliciousMode) {
		chrome.storage.local.set({ 'maliciousMode' : false });
	}
	if(!result.ninetiesMode) {
		chrome.storage.local.set({ 'ninetiesMode' : false });
	}
	if(!result.maliciousMode) {
		var contextItem = chrome.contextMenus.create({"title": "Marquee Me!", "onclick": marqueePage });
	}
});

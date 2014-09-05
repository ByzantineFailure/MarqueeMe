function marqueePage(info, tab) {
	chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.sendRequest(tab.id, {});
	});
};
var contextItem = chrome.contextMenus.create({"title": "Marquee Me!", "onclick": marqueePage });

function marqueePage(info, tab) {
	chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.sendRequest(tab.id, {});
	});
};

function save_options() {
	chrome.storage.local.get('maliciousMode', function(result) {
		var ninetiesMode = document.getElementById('NinetiesMode').checked;
		var maliciousMode = document.getElementById('MaliciousMode').checked;
		if(!result.maliciousMode && maliciousMode) {
			chrome.contextMenus.removeAll();	
		} else if (result.maliciousMode && !maliciousMode) {
			var contextItem = chrome.contextMenus.create({"title": "Marquee Me!", "onclick": marqueePage });
		}
		chrome.storage.local.set({ 'ninetiesMode' : ninetiesMode});
		chrome.storage.local.set({ 'maliciousMode' : maliciousMode});
		alert('Saved!');
	});
};

function restore_options() {
	chrome.storage.local.get('ninetiesMode', function(result) {
		document.getElementById('NinetiesMode').checked = result.ninetiesMode;
	});
	chrome.storage.local.get('maliciousMode', function(result) {
		document.getElementById('MaliciousMode').checked = result.maliciousMode;
	});
};

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('Save').addEventListener('click', save_options);

chrome.contextMenus.create({
    title: 'Acronym Resolver',
	contexts: ['selection'],
	onclick: function(info, tab) {
	    chrome.tabs.executeScript(tab.id, {file: "bookmarklet.js"});
	}
});
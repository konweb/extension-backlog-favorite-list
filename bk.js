var count = 2,
		attr = "ex-display-visible";

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(tab.id, {file: "jquery_2.1.3.min.js"}, function(){
		chrome.tabs.executeScript(tab.id, {file: "app.js"});
	});
	chrome.browserAction.setIcon({path:'icon_0' + count + '.png', tabId:tab.id});
	count = count === 2 ? 1 : 2;
});
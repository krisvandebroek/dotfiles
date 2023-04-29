(function(){

// ==UserScript==
// @name           Trello Markdown Cards
// @author         krisvandebroek
// @version        1.0.0
// @namespace      https://vandebroek.net
// @description    Allows to use bold, italic, strikethrough and code in the titles of Trello Cards
// @lastchanges    first version
// @updatetype     24
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_deleteValue
// @grant          GM_xmlhttpRequest
// @grant          GM_registerMenuCommand
// @grant          GM_openInTab
// @include        https://trello.com/b/*
// ==/UserScript==

function markdownAll() {
	var cards = document.getElementsByClassName('list-card-title');
	for (var i = 0; i < cards.length; i++) {
		cards[i].innerHTML = cards[i].innerHTML
		    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
		    .replace(/\*(.+?)\*/g, '<em>$1</em>')
		    .replace(/~~(.+?)~~/g, '<strike>$1</strike>')
		    .replace(/\`(.+?)\`/g, '<code>$1</code>');
	}
	setTimeout(markdownAll, 500);
}

markdownAll();

})();

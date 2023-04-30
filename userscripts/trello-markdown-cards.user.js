// ==UserScript==
// @name          Trello Markdown Cards
// @version       1.0.0
// @namespace     https://github.com/krisvandebroek
// @homepage      https://gist.github.com/gorbiz/6062481
// @description   Add support for bold and emphasized Markdown in card titles
// @icon          https://www.google.com/s2/favicons?sz=64&domain=trello.com
// @match         https://trello.com/b/*
// @match         http://trello.com/b/*
// @updateURL     https://github.com/krisvandebroek/dotfiles/raw/main/userscripts/trello-markdown-cards.user.js
// @downloadURL   https://github.com/krisvandebroek/dotfiles/raw/main/userscripts/trello-markdown-cards.user.js
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
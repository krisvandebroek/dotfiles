// ==UserScript==
// @name          Reduce Zoom
// @version       1.0.0
// @namespace     https://github.com/krisvandebroek
// @homepage      https://github.com/krisvandebroek/dotfiles/
// @description   Reduce Zoom to 90% to fit more on screen
// @icon          https://www.google.com/s2/favicons?sz=64&domain=trello.com
// @updateURL     https://github.com/krisvandebroek/dotfiles/raw/main/userscripts/trello-reduce-zoom.user.js
// @downloadURL   https://github.com/krisvandebroek/dotfiles/raw/main/userscripts/trello-reduce-zoom.user.js
// @match         https://trello.com/b/*
// @match         http://trello.com/b/*
// ==/UserScript==

document.body.style.zoom = "90%";

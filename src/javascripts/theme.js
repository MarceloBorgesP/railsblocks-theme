var $ = require('jquery');
window.jQuery = $;
window.$ = $;

var bootstrap = require('bootstrap');

var init = function () {
	//HIDE AND SHOW ADMIN LEFT MENU
	$('.show-menu').click(function() {
		$('#wrapper').toggleClass('toggled');
	});
}

$(document).ready(init);

//$.getScript("your-javascript.js")
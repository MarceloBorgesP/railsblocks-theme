var $ = require('jquery');
window.jQuery = $;
window.$ = $;

var bootstrap = require('bootstrap');

var init = function () {
	//HIDE AND SHOW ADMIN LEFT MENU
	$('.show-menu').click(function() {
		$('#wrapper').toggleClass('toggled');
	});

	//ACTIVATE TOOLTIPS
	$('[data-toggle="tooltip"]').tooltip(); 
}

$(document).ready(init);
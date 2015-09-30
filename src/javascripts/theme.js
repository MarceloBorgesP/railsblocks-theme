var $ = require('jquery');
window.jQuery = $;
window.$ = $;

var bootstrap = require('bootstrap');

//ACTIVATE DROPDOWN ON ADMIN SIDEBAR
$('#side-menu').children('li').children('a').click(function() {
	if($(this).parents('.active').length) {
		$(this).parent().removeClass('active');
		$('.collapse').collapse("hide");
	}
	else {
		$('#side-menu li').removeClass('active');
    	$('.collapse').collapse("hide");

    	$(this).parent().addClass('active');
	    $(this).next().collapse("show");

    	return false;
    	e.preventDefault();
	}
});

//HIDE AND SHOW ADMIN LEFT MENU
$('.show-menu').click(function() {
	$('#wrapper').toggleClass('toggled');
});

//$.getScript("your-javascript.js")
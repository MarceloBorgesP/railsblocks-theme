var $ = require('jquery');
window.jQuery = $;
window.$ = $;

var bootstrap = require('bootstrap');

var summary = $('.summary');

$(window).scroll(function(){
	var viewableOffset = $(".summary").offset().top - $(window).scrollTop()
	//var viewableOffset = $('.summary').offset().top;
	if (viewableOffset <=30) {
		summary.css("position", "fixed");
		//summary.css("top", "40");
	}
	else {
		summary.css("position", "relative");
	}
});
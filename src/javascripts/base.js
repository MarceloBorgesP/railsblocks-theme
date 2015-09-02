var init = function() {  
  var span = document.getElementById("year");
  if (span !== null) {
    var year = new Date().getFullYear();
    span.textContent = year;
  }
  

  $('#page-submenu-trigger').click(function() {
  	if($(".pagemenu-active").length == 0) {
  		$('#page-menu').addClass("pagemenu-active");
  	}

  	else {
  		$('.pagemenu-active').removeClass();
  	}
  });

  // Add segments to a slider
  $.fn.addSliderSegments = function () {
    return this.each(function () {
      var $this = $(this),
          option = $this.slider('option'),
          amount = (option.max - option.min)/option.step,
          orientation = option.orientation;
      if ( 'vertical' === orientation ) {
        var output = '', i;
        console.log(amount);
        for (i = 1; i <= amount - 1; i++) {
            output += '<div class="ui-slider-segment" style="top:' + 100 / amount * i + '%;"></div>';
        }
        $this.prepend(output);
      } else {
        var segmentGap = 100 / (amount) + '%';
        var segment = '<div class="ui-slider-segment" style="margin-left: ' + segmentGap + ';"></div>';
        $this.prepend(segment.repeat(amount - 1));
      }

      //Checks size of slider, and creates a scrollbar if necessary
      if(amount>12) {
        $(this).css('width', '800px');
        $(this).parent().css('overflow', 'auto');
        $(this).parent().css('white-space', 'nowrap');
      }
    });
  };

  $.fn.addSliderLabels = function (hash_descriptions, regex) {
    return this.each(function () {
      var $this = $(this),
          option = $this.slider('option'),
          amount = (option.max - option.min)/option.step;
          
      var segment = 100 / (amount);
      var segments = '';
      var segmentGap, matches;

        for(var i=0; i<=amount; i++)
        {
          segmentGap = (segment*i) + '%';
          matches = hash_descriptions[i].match(regex)
          segments += '<span class="ui-slider-value" title="' + hash_descriptions[i] + '" style="left: ' + segmentGap + ';">' + matches[1] + '</span>';
        }
      $this.prepend(segments);
    });
  };

  $('.nav-tabs a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

  $( "#redhat" ).selectmenu();
  $( "#debian" ).selectmenu();
  $( "#windows" ).selectmenu();
  $( "#centos" ).selectmenu();
  $( "#vyatta" ).selectmenu();
  $( "#ubuntu" ).selectmenu();
  $( "#cloudlinux" ).selectmenu();
  $( "#others" ).selectmenu();
  $( "#uplinks" ).selectmenu();
  if ($( "#processors" ).is("select")) {
  	$( "#processors" ).selectmenu();
  }
  if ($( "#datacenter" ).is("select")) {
  	$( "#datacenter" ).selectmenu();
  }
  
  if ($('[data-toggle="switch"]').length) {
    $('[data-toggle="switch"]').bootstrapSwitch();
  }

  var goToTop = function(){
    $('#gotoTop').click(function() {
    	$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
    });
  };

  var goToTopScroll = function(){
    $(window).scroll(function() {
      if($('body,html').scrollTop() < 250) {
        $('#gotoTop').css("display", "none");
      } else {
        $('#gotoTop').css("display", "block");
      }
    });
  };

  goToTop();
  goToTopScroll();
}

$(document).ready(init);

$(window).resize(function(){
    var windowsize = $(window).width();
		if(windowsize > 602) {
			$('.pagemenu-active').removeClass();
		}
});
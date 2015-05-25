var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

jQuery(document).ready(function($) {
	$(document).on('focusin', '.field, textarea', function() {
		if(this.title==this.value) {
			this.value = '';
		}
	}).on('focusout', '.field, textarea', function(){
		if(this.value=='') {
			this.value = this.title;
		}
	}).on('mouseenter', 'nav li', function() {
		$(this).find('.dropdown:first').show(200);
	}).on('mouseleave', 'nav li', function() {
		$(this).find('.dropdown:first').stop(true,true).hide(200);
	}).on('click', '#back-to-top', function() {
		$('html, body').animate({
			scrollTop: 0
		}, {
			duration: 900,
			easing: 'easeInOutQuint'
		});
		return false;
	});

	$('nav > ul > li > .dropdown').each(function() {
		$(this).parents('li:eq(0)').addClass('has-dd').find('a:eq(0)').append(' <span class="icon-font">V</span>');
	});

	$('nav ul ul .dropdown').each(function() {
		$(this).parents('li:eq(0)').addClass('has-dd').find('a:eq(0)').append(' <span class="icon-font">X</span>');
	});

	if ($('.mobile-nav-toggle').length) {
		$('.mobile-nav-toggle').click(function(){
			$(this).toggleClass('active');
			if($(this).hasClass('active')){ $(this).html('x'); } else { $(this).html('+'); }
			$('header #mobile-nav > ul').slideToggle('fast');
		});
	}

	if($('#slider').length) {
		$('.image-slider li').each(function() {
			var bg_src = $(this).find('img').attr('src');
			$(this).css('background-image', 'url(' + bg_src + ')').find('img').hide();
		});
	}

	$('#slider').spin();
	$('#slider').find('.spinner').fadeIn(200);

	$(window).load(function() {
		if($('#slider').length) {
			$('#slider .image-slider').flexslider({
				slideshow: slider_autocycle,
				slideshowSpeed: slider_cycle_speed,
				animationSpeed: slider_animation_speed,
				controlNav: false,
				prevText: '',
				nextText: '',
				pauseOnHover:false,
				keyboard: false,
				controlsContainer: '#slider .image-slider li',
				start: function(slider) {

					$('#slider').find('.spinner').fadeOut(200,function(){
						$(this).remove();
					});

					$('#slider .image-slider li.flex-active-slide .flex-direction-nav').fadeIn(300);
					$('#slider .image-slider li.bottom.flex-active-slide').find('.caption').animate({bottom: 0}, 500, 'easeInOutExpo');
					$('#slider .image-slider li.top.flex-active-slide').find('.caption').animate({ top: 0}, 500, 'easeInOutExpo');
					$('#slider .image-slider li.middle.flex-active-slide').find('.caption').animate({bottom: '50%'}, 500, 'easeInOutExpo');
					$('#slider .image-slider li.middle .text').animate({'top': -parseInt( $('#slider .image-slider li.flex-active-slide .text').outerHeight() / 2) }, 500, 'easeInOutExpo');


					$('#slider .image-slider .flex-direction-nav a').on('click', function() {
						slider.play()
					})
				},
				before: function(slider) {

					var currentSlideInt = parseInt(slider.currentSlide);
					var currentSlide = slider.slides.eq(currentSlideInt);

					var slideOverlay = currentSlide.find('.overlay');
					var content = slideOverlay.html();
					slideOverlay.html( content );
					if ( slideOverlay.find('.video').length ) {
						slideOverlay.find('iframe').remove();
					}

					if (currentSlide.hasClass('bottom')){
						currentSlide.find('.caption').animate({ bottom: '-100%' }, 500, 'easeInOutExpo');
					} else if (currentSlide.hasClass('top')){
						currentSlide.find('.caption').animate({ top: '-100%'}, 500, 'easeInOutExpo');
					} else if (currentSlide.hasClass('middle')){
						currentSlide.find('.overlay-dark').animate({'opacity':0},500);
						currentSlide.find('.caption').animate({ bottom: '-100%' }, 500, 'easeInOutExpo');
					}

					currentSlide.find('.flex-direction-nav').fadeOut(500);
				},
				after: function(slider) {
					$('#slider .image-slider li.bottom.flex-active-slide').find('.caption').animate({bottom: 0}, 500, 'easeInOutExpo');
					$('#slider .image-slider li.top.flex-active-slide').find('.caption').animate({ top: 0}, 500, 'easeInOutExpo');
					$('#slider .image-slider li.middle.flex-active-slide').find('.caption').animate({bottom: '50%'}, 500, 'easeInOutExpo');
					$('#slider .image-slider li.middle .text').animate({'top': -parseInt( $('#slider .image-slider li.flex-active-slide .text').outerHeight() / 2)}, 500, 'easeInOutExpo');
					$('#slider .image-slider li.flex-active-slide .flex-direction-nav').fadeIn(500);
				}
			})
		}

		if($('.theme-widget-recent-posts').length) {
			$('.theme-widget-recent-posts').append('<span class="prev" /><span class="next" />');
			$(".theme-widget-recent-posts .widget-body > ul.slides").each(function(){

				var thisID = $(this).attr('id');
				thisID = thisID.replace('slides-','');

				$(this).carouFredSel({
					direction: "up",
					width: '100%',
					height: "variable",
					infinite: false,
					circular: false,
					items: {
						visible: 2,
						minimum: 2,
						width: 'auto',
						height: "variable"
					},
					scroll: {
						items: 1,
						easing: "easeOutExpo"
					},
					auto: false,
					prev: "#"+thisID+" .prev",
					next: "#"+thisID+" .next"
				});

			});
		}

		if($('.theme-widget-upcoming-events').length) {
			$('.theme-widget-upcoming-events').append('<span class="prev" /><span class="next" />');
			$(".theme-widget-upcoming-events .widget-body > ul.slides").each(function(){

				var thisID = $(this).attr('id');
				thisID = thisID.replace('slides-','');

				$(this).carouFredSel({
					direction: "up",
					width: 'auto',
					height: "variable",
					infinite: false,
					circular: false,
					items: {
						visible: 4,
						minimum: 4,
						width: 'auto',
						height: "variable"
					},
					scroll: {
						items: 1,
						easing: "easeOutExpo"
					},
					auto: false,
					prev: "#"+thisID+" .prev",
					next: "#"+thisID+" .next"
				});

			});
		}

		if($('.theme-widget-recent-tweets').length) {
			$('.theme-widget-recent-tweets').each(function(){

				var tweetContainer = $(this).find('.tweets-container');
				var twitterAccount = tweetContainer.attr('id');
				var tweetCount = parseInt(tweetContainer.text());

				tweetContainer.append('<span class="prev" /><span class="next" />');
				tweetContainer.find("ul").carouFredSel({
					direction: "up",
					height: "variable",
					infinite: false,
					circular: false,
					items: {
						visible: 4,
						minimum: 5,
						height: "variable"
					},
					scroll: {
						items: 1,
						easing: "easeInOutExpo"
					},
					auto: false,
					prev: tweetContainer.find('.prev'),
					next: tweetContainer.find('.next')
				});

			});
		}

		if ($('#countdown').length) {
		    var austDay = new Date();
		    var date_str = $('#countdown h3').text();
		    var date_str = date_str.replace(',','');
		    var date_str = date_str.split(' ');

		    var month_str = date_str[0];
		    for(i = 0; i < months.length; i++) {
		        if(months[i] == month_str) {
		            var austMonth = i;
		        }
		    }

		    var austDate = parseInt(date_str[1]);
		    var austYear = parseInt(date_str[2]);
		    var austHours = parseInt(date_str[3]);
		    var austMinutes = parseInt(date_str[4]);
		    var austTimeZone = parseInt(date_str[5]);
		    var austTimeZone = austTimeZone / 60 / 60;

		    austDay = new Date(austYear, austMonth, austDate, austHours, austMinutes);

		    $('#countdown h3').hide().countdown({until: austDay,  layout: in_lang+' {dn} {dl}, {hn} {hl}, {mn} {ml} &amp; {sn} {sl}'}).fadeIn(1000);
	    }
	});

});

jQuery.fn.spin = function(opts) {
  this.each(function() {
    var $this = jQuery(this),
        data = $this.data();

    if (data.spinner) {
      data.spinner.stop();
      delete data.spinner;
    }
    if (opts !== false) {
      data.spinner = new Spinner(jQuery.extend({color: $this.css('color')}, opts)).spin(this);
    }
  });
  return this;
};

function vidstring_to_iframe(vid_string){
	if(vid_string.indexOf('youtube') != -1) {

        vid_string = vid_string.replace('www.', '').replace('http://youtube.com/watch?v=', '');
        return '<iframe class="vid-frame" width="940" height="509" src="http://www.youtube.com/embed/' + vid_string + '?rel=0&amp;autoplay=1&amp;wmode=transparent" frameborder="0"></iframe>';

    } else if(vid_string.indexOf('youtu.be') != -1) {

        vid_string = vid_string.replace('www.', '').replace('http://youtu.be/', '');
        return '<iframe class="vid-frame" width="940" height="509" src="http://www.youtube.com/embed/' + vid_string + '?rel=0&amp;autoplay=1&amp;wmode=transparent" frameborder="0"></iframe>';

    } else if(vid_string.indexOf('vimeo') != -1) {

        vid_string = vid_string.replace('www.', '').replace('http://vimeo.com/', '').replace('https://vimeo.com/', '');
        return '<iframe class="vid-frame" src="http://player.vimeo.com/video/' + vid_string + '?portrait=0&amp;autoplay=1" width="940" height="509" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';

    }
}

function player(templateDir, element) {
	if(jQuery('.player-container').length) {

		AudioPlayer.setup(templateDir+"/media/player.swf", {
			bg: 'ffffff',
			leftbg: 'ffffff',
			volslider: customColor,
			loader: customColor,
			lefticon: customColor,
			voltrack: customColor,
			autostart: "yes",
			rightbg: customColor,
			rightbghover: 'ffffff',
			righticon: 'ffffff',
			righticonhover: customColor
		});

		var $elements = typeof(element) != 'undefined' ? jQuery(element).find('.player-container') : jQuery('.player-container');

		$elements.each(function() {
			if (jQuery(this).is(':visible')) {
				var sound_path = jQuery(this).find('.notext').html();
				var sound_id = jQuery(this).attr('id');

				var sound_width = '100%';

				jQuery(this).html('').append('<span class="notext">' + sound_path + '</span>');

				var n = navigator.userAgent;

				if(n.match(/iPhone/i) || n.match(/iPad/i) || n.match(/Android/i) || n.match(/android/i)) {
				    jQuery("#" + sound_id).append('<audio src="' + sound_path + '" controls="controls" style="width:100%" />');
				} else {
				    AudioPlayer.embed(sound_id, {
					soundFile: sound_path,
					width: sound_width,
					height: 24,
					transparentpagebg: 'yes'
				    });
				}

			}
		});
	}
}

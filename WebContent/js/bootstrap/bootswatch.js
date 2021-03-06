$('a[rel=tooltip]').tooltip({
	'placement': 'bottom'
});


$('.navbar a, .subnav a').smoothScroll();


(function ($) {

	$(function(){

		// fix sub nav on scroll
		var $win = $(window),
				$body = $('body'),
				$nav = $('.subnav'),
				navHeight = $('.navbar').first().height(),
				subnavHeight = $('.subnav').first().height(),
				subnavTop = $('.subnav').length && $('.subnav').offset().top - navHeight,
				marginTop = parseInt($body.css('margin-top'), 10);
		
				$nav1 = $('.subnav1'),
				navHeight1 = $('.navbar').first().height(),
				subnavHeight1 = $('.subnav1').first().height(),
				subnavTop1 = $('.subnav1').length && $('.subnav1').offset().top - navHeight1,
				marginTop1 = parseInt($body.css('margin-top'), 10);
				isFixed = 0;

		processScroll();

		$win.on('scroll', processScroll);

		function processScroll() {
			var i, scrollTop = $win.scrollTop();

			if (scrollTop >= subnavTop && !isFixed) {
				isFixed = 1;
				$nav.addClass('subnav-fixed');
				$body.css('margin-top', marginTop + subnavHeight + 'px');
				$nav1.addClass('subnav-fixed');
			} else if (scrollTop <= subnavTop && isFixed) {
				isFixed = 0;
				$nav.removeClass('subnav-fixed');
				$body.css('margin-top', marginTop + 'px');
				$nav1.removeClass('subnav-fixed');
			}
		}

	});

})(window.jQuery);
$(document).ready(function(){	
	var documentHeight = $(document).height();
	var windowtHeight = $(window).height();
	var headheight = $('header').outerHeight();
	var footerheight = $('footer').outerHeight();
	var navheight = $('nav').outerHeight();
	var stickyHeight = $('#sidebar').outerHeight();
	var breakingPoint1 = headheight;
	var breakingPoint2 = documentHeight - (stickyHeight + footerheight+ navheight+30);
	$('nav').wrap('<div class="nav-contnr"> </div>');
	$('.nav-contnr').css('height', 130);
	$(window).scroll(function (e) {
		e.preventDefault();
		var scroll_top = $(window).scrollTop();
		var docHeight = $(document).height();
		var divper = (scroll_top/(docHeight-windowtHeight))*100;
		$('nav').find('.increment-bar').css('width',divper+ '%');
		if (scroll_top >= breakingPoint1) {
			$('#sidebar').addClass('sticky').css('top',navheight);
			$('nav').css({
				'position': 'fixed',
				'top': '0',
				'width': '99%'
			});
		} else if (scroll_top < breakingPoint1) {
			$('#sidebar').removeClass('sticky');
			$('nav').css({
				'position': 'relative',
				'top': 'auto',
				'width': '100%'
			});
		}
		if (scroll_top >= breakingPoint2) {
			$('#sidebar').removeClass('sticky');
			$('#sidebar').addClass('stickybtm');
		} else {
			$('#sidebar').removeClass('stickybtm');
		}
	});

	$('.menu-category-level1').on('mouseenter', '.menu-cat-entry', function(e) {
		var el = $(this),
			timeoutId, timeout2;
		timeoutId = setTimeout(function() {
			el.addClass('hovered');
			el.find('.mainmenu__flyout').css('overflow', 'visible')
		}, 500);
		el.mouseleave(function() {
			clearTimeout(timeoutId);
			clearTimeout(timeout2);
			timeout2 = setTimeout(function() {
				el.removeClass('hovered');
			}, 500);
		});
	});
	
	$('.test').click(function() {
		var getAtt = this.getAttribute('style');
		var thisProp = $(this).prop('style');
		var thisAttr = $(this).attr('style');

		console.log(getAtt, thisProp, thisAttr);
	});
});
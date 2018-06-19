@import 'vendor/jquery-1.10.2.min.js'
@import 'vendor/modernizr.js'
@import 'vendor/jquery.fancybox.js'
@import 'vendor/inputmask.js'
@import 'vendor/jquery.inputmask.js'
@import 'vendor/inputmask.extensions.js'
@import 'vendor/jquery.custom-scrollbar.js'
@import 'vendor/bower_components/canvas-5-polyfill/canvas.js'
@import 'vendor/raphael.js'

@import 'vendor/map/monza/loader.js'
@import 'vendor/map/paths.js'
@import 'vendor/map/cars.js'
@import 'vendor/map/monza/raceTitle.js'
@import 'vendor/map/cities.js'


jQuery.browser = {};
jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());

var jqApp = {
@import 'parts/kaspersky.main.js',
@import 'parts/registration.js',
//@import 'parts/ks.share.js',
@import 'parts/maploader.js',
@import 'parts/track.js',
};
jqApp.profileEndRaceTimer = null;

jqApp.touchMoveContolrs = function (type) {

	if (type === 'disable') {
		var selScrollable = '.b-modal__overlay';

		//uses document because document will be topmost level in bubbling
		$(document).on('touchmove.modaltouch', function (e) {
			if(!$('.b-modal__overlay').has($(e.target)).length)
				e.preventDefault();
		});
		//uses body because jquery on events are called off of the element they are
		//added to, so bubbling would not work if we used document instead.
		$('body').on('touchstart.modaltouch', selScrollable, function (e) {
			if (e.currentTarget.scrollTop === 0) {
				e.currentTarget.scrollTop = 1;
			} else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
				e.currentTarget.scrollTop -= 1;
			}
		});
		//prevents preventDefault from being called on document if it sees a scrollable div
		$('body').on('touchmove.modaltouch', selScrollable, function (e) {
			if(!$('.b-modal__overlay').has($(e.target)).length)
				e.stopPropagation();
		});
	}
	else {
		$(document).off('touchmove.modaltouch');
		$('body').off('touchstart.modaltouch');
		$('body').off('touchmove.modaltouch');
	}
}

jqApp.gLogic = function () {

	jqApp.maskInput();

	//$('.chosen').chosen();
	$(".fancybox").fancybox();

	//$('.social-icon a').on('click', function(e) {
	//	e.preventDefault();
	//	console.log('asd');
	//	jqApp.socialShare($(this));
	//});


	if (jQuery.browser.opera) {
		$("html").addClass("oldOpera");
	}

	// блок смены пароля
	$(".js-change-password").on("click", function (e) {
		$(this).closest(".js-settings").find(".b-change-password").fadeToggle();

		return false;
	});

	// показываем социальные иконки
	$(".js-social").hide();

	$(".js-trigger-share").on("click", function () {
		$(".js-social").fadeToggle();
	});

	//инит кастом скролла
	$(".js-test-rules__text").customScrollbar({updateOnWindowResize: !0});

	$(".js-trigger-modal").on("click", function (e) {

		$(this).toggleClass("hidden");

		$(".b-modal__overlay").toggleClass("open");
		jqApp.touchMoveContolrs('enable');

		return false;
	});

	$(window).on("mousewheel", function(){
	  $('html,body').stop();
	});

	// скролим до блока на странице
	$('a[href^="#"]').on("click", function () {
		var target = $(this).attr('href');
		if (target === '#tribune' && !$(target).is(":visible")) {
			$('.pin_winners').click();
		}
		if ($(target).size() > 0) {
			$('html,body').animate({scrollTop: $(target).offset().top - 63}, 2000);
		}
		return false;
	});

	// flip
	$('.hover').hover(function () {
		$(this).addClass('fl');
	}, function () {
		$(this).removeClass('fl');
	});


	// гамбургер меню
	var isActive = false,
			$hamburgerToggle = $(".b-menu-hamburger__toggle");

	$('.js-menu-hamburger').on('click', function () {
		if (isActive) {
			$(this).find($hamburgerToggle).removeClass('active');
			$('body').removeClass('menu-open');
		} else {
			$(this).find($hamburgerToggle).addClass('active');
			$('body').addClass('menu-open');
		}

		isActive = !isActive;

	});

	$(".js-menu a").on("click", function () {
		if (isActive) {
			$hamburgerToggle.removeClass('active');
			$('body').removeClass('menu-open');
		} else {
			$hamburgerToggle.addClass('active');
			$('body').addClass('menu-open');
		}

		isActive = !isActive;

		//return false;
	});

	var body = document.body,
			timer;

	//window.addEventListener('scroll', function () {
	//	clearTimeout(timer);
	//	if (!body.classList.contains('disable-hover')) {
	//		body.classList.add('disable-hover');
	//	}
	//
	//	timer = setTimeout(function () {
	//		body.classList.remove('disable-hover');
	//	}, 500);
	//}, false);

};

jqApp.maskInput = function () {
	$(":input").inputmask();
};

$(document).on('ready', function () {

	var page = $('body').data('page');

	jqApp.gLogic();

	if (page === 'index') {
		jqApp.index();
	}
	else if (page === 'registration') {
		jqApp.registration();
	}
	else if (page === 'maploading') {
		jqApp.index();
		jqApp.maploading();
	}

});

String.prototype.trunc = function (n, useWordBoundary) {
	var toLong = this.length > n,
			s_ = toLong ? this.substr(0, n - 1) : this;
	s_ = useWordBoundary && toLong ? s_.substr(0, s_.lastIndexOf(' ')) : s_;
	return toLong ? s_ + '...' : s_;
};
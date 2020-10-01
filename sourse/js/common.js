const $ = jQuery;
const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),

	modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			autoFocus: false,
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
		$.fancybox.defaults.backFocus = false;
	},
	// /magnificPopupCall
	toggleMenu() {
		let _this = this;
		if (_this.btnToggleMenuMobile) {

			_this.btnToggleMenuMobile.forEach(function (element) {
				element.addEventListener('click', function () {

					_this.btnToggleMenuMobile.forEach(function (element) {
						element.classList.toggle("on");
					});
					_this.menuMobile.classList.toggle("active");
					_this.body.classList.toggle("fixed");

					return false;
				});
			});
		}
	},

	closeMenu() {
		let _this = this;
		if (_this.menuMobile) {

			_this.btnToggleMenuMobile.forEach(function (element) {
				element.classList.remove("on");

			});
			_this.menuMobile.classList.remove("active");
			_this.body.classList.remove("fixed");
		}

	},

	mobileMenu() {
		// закрыть/открыть мобильное меню
		let _this = this;
		if (_this.menuMobileLink) {

			_this.toggleMenu();
			// _this.menuMobileLink.forEach(function (element) {
			// 	element.addEventListener('click', function (e) {
			// 		console.log(element);
			// 		_this.closeMenu();

			// 	});
			// })
			document.addEventListener('mouseup', function (event) {
				let container = event.target.closest(".menu-mobile--js.active"); // (1)
				if (!container) {
					_this.closeMenu();

				}
			});
		}
	},
	// /mobileMenu

	// табы  . 
	tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).show().addClass('active');

		});
	},
	// /табы  
	inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	}
	// /inputMask

};

function eventHandler() { 
	JSCCommon.modalCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();

	JSCCommon.inputMask();

	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	$(".main-wrapper").after('<div class="pixel-perfect" style="background-image: url(screen/02.jpg);"></div>')
	// /добавляет подложку для pixel perfect


 

	// листалка по стр
	$(" .top-nav li a, .scroll-link").click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});

	let defaultSl = {
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 5
		},
		slidesPerView: 1,
	}
	const swiper1 = new Swiper('.headerBlock__slider-lg--js', {
		// slidesPerView: 5,
		...defaultSl, 
		loop: true, 
								navigation: {
									nextEl: '.swiper-button-next',
									prevEl: '.swiper-button-prev',
								},
	
	});
	const swiper2 = new Swiper('.headerBlock__slider-sm--js', {
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: 'auto',
		watchOverflow: true,
		freeMode: true,
		watchOverflow: true,
		// loop: true, 
		// touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,
		spaceBetween: 28, 
	});

	const swiper44 = new Swiper('.s-news__slider--js', {
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: 'auto',
		watchOverflow: true,
		freeMode: true,
		watchOverflow: true,
		// loop: true, 
		// touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,
		spaceBetween: 30,
		breakpoints: {
			1200: {
				spaceBetween: 64
			},
			// when window width is >= 640px
			1600: {
				spaceBetween: 108
			}
		}
	});

	let aboutSlider = new Swiper('.sliderAbout-js', {
		...defaultSl,
		slidesPerView: 1,
		loop: true,
		spaceBetween: 15,
		watchOverflow: true,
		// slideToClickedSlide: true,
		freeModeMomentum: true,
		breakpoints: {
			576: {
				slidesPerView: 2
			},
			992: {
				spaceBetween: 30,
				slidesPerView: 3
			},
		},
		navigation: {
			nextEl: '.sliderAbout-js .about-next',
			prevEl: '.sliderAbout-js .about-prev',
		},
	});
	
	const swiper4 = new Swiper('.s-calendar__slider--js', {
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	});

	// modal window
 

	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
	if (isIE11) {
		$("body").prepend(`<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>`)

	}
	var wow = new WOW({
		mobile: false,
		animateClass: 'animate__animated', 
	});
	wow.init();
};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

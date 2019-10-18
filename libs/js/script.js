	// navbar
	jQuery(function($) {
		$(window).on('scroll', function() {
			if ($(this).scrollTop() >= 50) {
				$('header').addClass('fixed-top');
			} else if ($(this).scrollTop() == 0) {
				$('header').removeClass('fixed-top');
			}
		});

		function adjustNav() {
			var winWidth = $(window).width(),
			dropdown = $('.dropdown'),
			dropdownMenu = $('.dropdown-menu');

			if (winWidth >= 991) {
				dropdown.on('mouseenter', function() {
					$(this).addClass('show')
					.children(dropdownMenu).addClass('show');
				});

				dropdown.on('mouseleave', function() {
					$(this).removeClass('show')
					.children(dropdownMenu).removeClass('show');
				});
			} else {
				dropdown.off('mouseenter mouseleave');
			}
		}

		$(window).on('resize', adjustNav);
		
		adjustNav();
	}); 

	// AOS-animate

	AOS.init({
		easing: 'ease-in-out-sine'
	});


	// owlCarousel

	$('.partners-slide').owlCarousel({
		loop:true,
		nav:false,
		dots: true,
		smartSpeed: 500,
		autoplay: true,
		responsive: {
			0:{
				items:2,
			},
			600:{
				items:3,
			},
			1000:{
				items:5,
			}
		},
	});


	// hamburger-collapse

	$('#nav-top').on('show.bs.collapse', function(){
		$('.nav-top').addClass('open');
	});
	$('#nav-top').on('hide.bs.collapse', function(){
		$('.nav-top').removeClass('open');
	});

	$('#nav-bottom').on('show.bs.collapse', function(){
		$('.nav-bottom').addClass('open');
	});
	$('#nav-bottom').on('hide.bs.collapse', function(){
		$('.nav-bottom').removeClass('open');
	});


	// topcontrol

	let $btn = $('#topcontrol .btn-special');

	$btn.on('click', function(){
		$('html').animate({
			scrollTop: 0
		}, 1000);
	});


	$(window).on('scroll', function(){
		if(scrollY > 800){
			$btn.fadeIn();
		}else{
			$btn.fadeOut();
		}
	})

	// navbar-toggler
	jQuery(function($) {
		$(window).on('scroll', function() {
			if ($(this).scrollTop() >= 200) {
				$('.nav-bottom .navbar-toggler').addClass('fixed-top');
			} else if ($(this).scrollTop() == 0) {
				$('.nav-bottom .navbar-toggler').removeClass('fixed-top');
			}
		});
	}); 
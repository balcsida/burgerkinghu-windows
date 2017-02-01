$(function(){

	function getMobileOperatingSystem() {
	  	var userAgent = navigator.userAgent || navigator.vendor || window.opera;

	    if (/windows phone/i.test(userAgent) || navigator.userAgent.match(/Windows Phone/i) || navigator.userAgent.match(/iemobile/i) || navigator.userAgent.match(/WPDesktop/i)) {
	        $couponslider = $('.coupon-slider');
			$couponpager = $('.coupon-pager').find('.center span');
			$couponcode = $('.coupon-code');
			$('.coupon-slider').slick({
				nextArrow: $('.next'),
				prevArrow: $('.prev'),
				slideToShow: 1,
				adaptiveHeight: true
			});

			$couponslider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
			    var i = (currentSlide ? currentSlide : 0) + 1;
			    	i = ((currentSlide+1).toString().length > 1 ? i : '0'+i);
			    var elSlide = $(slick.$slides[currentSlide]);
			    var slides = (slick.slideCount.toString().length > 1 ? slick.slideCount : '0'+slick.slideCount);
			    var code = elSlide.data('code');

			    $couponpager.text(i + '/' + slides);
			    $couponcode.text(code);

			});

			$slides = $('.slick-slide:not(.slick-cloned)').length;
			$couponpager.text('01/'+ ($slides.toString().length > 1 ? $slides : '0'+$slides));
			$couponcode.text($('.slick-slide[data-slick-index=0]').data('code'));
			return false;
	    }

	    if (/android/i.test(userAgent)) {
	    	$('body').empty();
	        window.location = 'http://burgerking.hu/cikkek/letoltes/burger-king-mobil-applikacio';
	        return false;
	    }

	    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {   
	    	$('body').empty();
			window.location = "https://itunes.apple.com/hu/app/burger-king/id471268068?l=hu&mt=8";
			return false;
	    }

	    $('body').empty();  
	    window.location = 'http://www.burgerking.hu'
	}

	getMobileOperatingSystem();
	
});
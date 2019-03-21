$(document).ready(function () {

	$('.swiper-wrapper').slick({
		dots: true,
	});
	
	$('.reviews__slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	});

});
// $.noConflict();


jQuery(window).on('scroll', function (){
	"use strict";

	if (jQuery(window).scrollTop() > 185) {
		jQuery('header.header').addClass('is-sticky');
	}
	else {
		jQuery('header.header').removeClass('is-sticky');
	}

	// Scroll to top
	if (jQuery(this).scrollTop() > 100) {
		jQuery('#scroll-to-top').fadeIn('slow');
	} else {
		jQuery('#scroll-to-top').fadeOut('slow');
	}

});



jQuery('#scroll-to-top').on("click", function(){
	"use strict";

	jQuery("html,body").animate({ scrollTop: 0 }, 1500);
	return false;
});


jQuery(document).ready(function($) {
	"use strict"; 

	$( '.search-icon' ).on( 'click', function() {
		$(this).parent().toggleClass('active');
	});

	$( '.search-form .close' ).on( 'click', function() {
		$(this).parent().removeClass('active');
	});

	var headerheight = $('header.header').height();
	$('body').css('margin-top', headerheight);


	// Progress Bars 
	$( '.progress-bar' ).each(function() { 
		var  barWidth = $(this).data('progress-value');
		$(this).css({
			'width': barWidth
		});
	});

	$( '.skill-2 .progress-bar' ).each(function() { 
		var  barHeight = $(this).data('progress-value');
		$(this).css({
			'width': barHeight
		});
	});

	// Background Img
	$(".background-bg").css('background-image', function () {
		var bg = ('url(' + $(this).data("image-src") + ')');
		return bg;
	});

	// Background Img
	$(".thumb-bg").css('background-image', function () {
		var bg = ('url(' + $(this).data("image-src") + ')');
		return bg;
	});

	$(window).on("load resize",function(e){
		var windowHeight = $(window).height();
		$('.full-banner').css({ "height" : windowHeight });
	});

	// Post text shortner
	var minimized_elements = $('.main-content div[class*="col"]> article p');

	minimized_elements.each(function(){    
		var t = $(this).text();        
		if(t.length < 150) return;

		$(this).html(
			t.slice(0,150)+'<span>... </span><a href="#" style="display:none;" class="more">More</a>'+'<span style="display:none;">'+ t.slice(130,t.length)+' <a href="#" style="display:none;" class="less">Less</a></span>');
	}); 


	jQuery('#news-slider').carousel({
		interval: 3000
	});


	jQuery('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}
	});

	jQuery('.collection .image-popup-vertical-fit').magnificPopup({
		type: 'image',
		gallery:{
			enabled:false
		}
	});



	//Owl Carousels

	var workSlider = $(".work-carousel, .team #team-slider");
	workSlider.owlCarousel({
		autoPlay : 3000,
		stopOnHover : true,
		pagination : true,
		paginationNumbers: false,

		itemsCustom : [
		[0, 1],
		[450, 2],
		[600, 3],
		[700, 3],
		[800, 4],
		[1000, 4],
		[1200, 4],
		],
		
		responsive: true,
		responsiveRefreshRate : 200,
		responsiveBaseWidth: window
	});
	

	var testimonialSlider = $(".testimonial-slider");
	testimonialSlider.owlCarousel({
		autoPlay : 3000,
		stopOnHover : true,
		pagination : true,
		paginationNumbers: false,

		itemsCustom : [
		[0, 1],
		[450, 1],
		[600, 1],
		[700, 1],
		[800, 1],
		[1000, 1],
		[1200, 1],
		],
		
		responsive: true,
		responsiveRefreshRate : 200,
		responsiveBaseWidth: window
	});


	var testimonialSlider = $(".testimonial-slider-7");
	testimonialSlider.owlCarousel({
		autoPlay : 3000,
		stopOnHover : true,
		pagination : true,
		paginationNumbers: false,

		itemsCustom : [
		[0, 1],
		[450, 1],
		[600, 1],
		[700, 1],
		[800, 1],
		[1000, 1],
		[1200, 1],
		],
		
		responsive: true,
		responsiveRefreshRate : 200,
		responsiveBaseWidth: window
	});


	var postSlider = $(".blog-4 .post-slider");
	postSlider.owlCarousel({
		autoPlay : 3000,
		stopOnHover : true,
		pagination : true,
		margin: 4,
		paginationNumbers: false,

		itemsCustom : [
		[0, 1],
		[450, 1],
		[600, 2],
		[700, 2],
		[800, 3],
		[1000, 3],
		[1200, 3],
		],
		
		responsive: true,
		responsiveRefreshRate : 200,
		responsiveBaseWidth: window
	});


	var featuredSlider = $(".featured-slider, .service-slider");
	featuredSlider.owlCarousel({
		autoPlay : 3000,
		stopOnHover : true,
		pagination : true,
		paginationNumbers: false,

		itemsCustom : [
		[0, 1],
		[450, 1],
		[600, 2],
		[700, 2],
		[800, 3],
		[1000, 3],
		[1200, 3],
		],
		
		responsive: true,
		responsiveRefreshRate : 200,
		responsiveBaseWidth: window
	});

	var saleSlider = $(".clients-slider");
	saleSlider.owlCarousel({
		autoPlay : 3000,
		stopOnHover : true,
		navigation:true,
		paginationNumbers: false,

		itemsCustom : [
		[0, 1],
		[450, 2],
		[600, 2],
		[700, 2],
		[800, 3],
		[1000, 4],
		[1200, 4],
		],
		
		responsive: true,
		responsiveRefreshRate : 200,
		responsiveBaseWidth: window
	});



	// Vertical Progress
	$('.vertical .progress-fill span').each(function(){
		var percent = $(this).html();
		var pTop = 100 - ( percent.slice(0, percent.length - 1) ) + "%";
		$(this).parent().css({
			'height' : percent,
			'top' : pTop
		});
	});


	// magnificPopup
	$('.pop-video').magnificPopup({
		type: 'iframe',


		iframe: {
			markup: '<div class="mfp-iframe-scaler">'+
			'<div class="mfp-close"></div>'+
			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
			'<div class="mfp-title">Some caption</div>'+
			'</div>'
		},
		callbacks: {
			markupParse: function(template, values, item) {
				values.title = item.el.attr('title');
			}
		}	  

	});


	// vgrid
	$(".masonry").vgrid({
		easing: "easeOutQuint",
		time: 500,
		delay: 20,
		fadeIn: {
			time: 300,
			delay: 50
		}
	});

	$(".masonry-posts").vgrid({
		easing: "easeOutQuint",
		time: 500,
		delay: 20,
		fadeIn: {
			time: 300,
			delay: 50
		}
	});

	$(".post-gallery").vgrid({
		easing: "easeOutQuint",
		time: 500,
		delay: 20,
		fadeIn: {
			time: 300,
			delay: 50
		}
	});


	$(".recent-work-4, .recent-work-5").vgrid({
		easing: "easeOutQuint",
		time: 500,
		delay: 20,
		responsive: true,
		fadeIn: {
			time: 300,
			delay: 50
		}
	});

});

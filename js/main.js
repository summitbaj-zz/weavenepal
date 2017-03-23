$(document).ready(function() {
    // hide #back-top first
    $(".scrollToTop").hide();

    // fade in #back-top
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('.scrollToTop').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

    // add class img responsive on image tag
    $("img").addClass("img-responsive");
    //banner	
    $(window).load(function() {
        $(".banner").flexslider({
            animation: "slide",
            slideshow: true,
            animationLoop: true,
            pauseOnHover: true,
            controlNav: false,
            directionNav: true,
            smoothHeight: true,
            animationSpeed: 1000,
            slideshowSpeed: 1000,
            start: function(slider) {
                $('body').removeClass('loading');
            },

        });
    });
    //home testimonial
    $(window).load(function() {
        $("#home-testimonial").flexslider({
            animation: "slide",
            slideshow: false,
            animationLoop: true,
            pauseOnHover: true,
            controlNav: true,
            directionNav: false,
            smoothHeight: true,
            animationSpeed: 2000,
            slideshowSpeed: 3000,
            start: function(slider) {
                $('body').removeClass('loading');
            },

        });
    });
    //light box
	
    $('.gallery-image a').simpleLightbox();
	$('.gallery-product-light a').simpleLightbox();

    /* activate jquery isotope */
    var $container = jQuery('#posts').isotope({
        itemSelector: '.item',
        isFitWidth: true
    });

    jQuery(window).smartresize(function() {
        $container.isotope({
            columnWidth: '.col-sm-4'
        });
    });

    $container.isotope({
        filter: '*'
    });

    // filter items on button click
    jQuery('#filters').on('click', 'button', function() {
        var filterValue = jQuery(this).attr('data-filter');
        $container.isotope({
            filter: filterValue
        });
    });
    //menu onclick
    $('.menu').click(function() {
        $('#panel-1').slideToggle("500");
    });
    $('.message').click(function() {
        $('#panel-2').slideToggle("1000");
    });

    $('.add-cart').click(function() {
        $('#panel-3').slideToggle("1500");
    });
	
	$('.menu a,.message a').click( function(){
		if ( $(this).hasClass('current') ) {
			$(this).removeClass('current');
		} else {
			$('.menu a.current,.message a.current').removeClass('current');
			$(this).addClass('current');    
		}
	});

    //fixed navbar
	if($(document).width()>767){
    $('.header').scrollToFixed();

    var summaries = $('.summary');
    summaries.each(function(i) {
        var summary = $(summaries[i]);
        var next = summaries[i + 1];
        summary.scrollToFixed({
            marginTop: $('.header').outerHeight(true) + 10,
        });
    });
	}
	
	//for mobile
	if($(document).width()<767){
		
		$('#item-wrapper').scrollToFixed();

    var summaries = $('.summary');
    summaries.each(function(i) {
        var summary = $(summaries[i]);
        var next = summaries[i + 1];
        summary.scrollToFixed({
            marginTop: $('#item-wrapper').outerHeight(true) + 10,
        });
    });
	}
	//product dropdown
    $('.dropdown-toggle').mouseover(function() {
        $('.dropdown-menu').show();
    })

    $('.dropdown-toggle').mouseout(function() {
        t = setTimeout(function() {
            $('.dropdown-menu').hide();
        }, 1000);

        $('.dropdown-menu').on('mouseenter', function() {
            $('.dropdown-menu').show();
            clearTimeout(t);
        }).on('mouseleave', function() {
            $('.dropdown-menu').hide();
        })
    })
	//tooltip
    $('[data-toggle="tooltip"]').tooltip()
	//carousel
    $("#related-product").owlCarousel({
        autoPlay: 3000,
        items: 3,
        pagination: false,
        navigation: true,
        nav: true,
        navigationText: [
            "<i class='fa fa-chevron-left icon-white'></i>",
            "<i class='fa fa-chevron-right icon-white'></i>"
        ],
        pagination: false,

        autoHeight: true,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 2]
    });
	
	$("#gallery-product").owlCarousel({
        autoPlay: 3000,
        items: 1,
        pagination: false,
        navigation: true,
        nav: true,
        navigationText: [
            "<i class='fa fa-chevron-left icon-white'></i>",
            "<i class='fa fa-chevron-right icon-white'></i>"
        ],
        pagination: false,

        autoHeight: true,
		singleItem:true

    });
    //manufacture
    $("#manufacture,#manufacture1,#manufacture2").owlCarousel({
        //autoPlay: 3000,
        items: 1,
        pagination: false,
        navigation: true,
        nav: true,
        loop: true,
        navigationText: [
            "<i class='fa fa-chevron-left icon-white'></i>",
            "<i class='fa fa-chevron-right icon-white'></i>"
        ],
        pagination: false,

        autoHeight: true,
        singleItem:true

    });
	
	//nice-select option
	$('.language select').niceSelect();
	$('.currency select').niceSelect();
	
	//widhlist
	
	$(".wishlist a").click(function(){
        $("#show-hide").toggle('');
    });


	/*var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
    var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
    var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
    var is_safari = navigator.userAgent.indexOf("Safari") > -1;
    var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
    if ((is_chrome)&&(is_safari)) {is_safari=false;}
    if ((is_chrome)&&(is_opera)) {is_chrome=false;}*/
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
		$('.products').addClass('remove-flex');
	}
	
    	

});
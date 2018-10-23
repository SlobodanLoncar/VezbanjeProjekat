/** PRELOADER */
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/********** TEAM CAROUSEL***********/
$(function () {
    $('#team-members').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            //breakpoint from 0 up
            0: {
                items: 1
            },
            //breakpoint from 480 up
            480: {
                items: 2
            }
        }

    });

});

/********** PROGRESS BAR***********/
$(function () {
    $('#progress-elements').waypoint(function () {

        $('.progress-bar').each(function () {
            $(this).animate({
                width: $(this).attr('aria-valuenow') + '%'
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});

/********** RESPONSIVE TABS***********/

$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});

/********** PORTFOLIO***********/
$(window).on('load', function () {
    // Intialize Isotope

    $('#isotope-container').isotope({});
    // Click filters
    $('#isotope-filters').on('click', 'button', function () {
        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio 
        $('#isotope-container').isotope({
            filter: filterValue
        });
        //active button
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');
    });

});

/********** MAGNIFIER***********/
$(function () {
    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    })
});

/********** TESTIMONIALS ***********/
$(function () {
    $('#testimonial-slider').owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']

    });

});
/********** STATS COUNTER***********/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/********** CLIENT SECTIOn***********/
$(function () {
    $('#clients-list').owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            //breakpoint from 0 up
            0: {
                items: 2
            },
            //breakpoint from 480 up
            480: {
                items: 3
            },
            //breakpoint from 768 up
            768: {
                items: 6
            }
        }

    });

});
/********** NAVIGATION BAR SHOW_HIDE WHITE***********/
$(function () {


    //show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {
        //show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 200) {

            //Show white nav
            $('nav').addClass('white-nav-top');

            //Logo brand
            $('.navbar-brand img').attr('src', 'img/logo/logo-dark.png');

            //Show back to top button
            $('#back-to-top').fadeIn();

        } else {

            //Hide white nav
            $('nav').removeClass('white-nav-top');

            //Logo brand
            $('.navbar-brand img').attr('src', "img/logo/logo.png");

            //Hide back to top button
            $('#back-to-top').fadeOut();
        }
    }
});

/**********SMOOTH SCROLLING***********/
$(function () {

    $('a.smooth-scroll').click(function (event) {

        event.preventDefault();

        //Get section id like #about, #services, #work, #team ...

        var section_id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, 'easeInOutExpo');
    });

});

/**********MOBILE HAMBURGER MENU***********/
$(function () {
    $('#mobile-nav-open-btn').click(function () {
        /*Show */
        $('#mobile-nav').css('height', '100%');
    });
    $('#mobile-nav-close-btn, #mobile-nav a').click(function () {
        /*hide*/
        $('#mobile-nav').css('height', '0%');
    });

});


/**********Animation***********/
$(function () {
    /** Animate on scroll WOW **/
    new WOW().init();
});
/** Home animation on page load DIGITAL**/
$(window).on('load', function (){

    $('#home-heading-1').addClass('animated fadeInDown');
    $('#home-heading-2').addClass('animated fadeInLeft');
    $('#home-text').addClass('animated zoomIn');
    $('#home-btn').addClass('animated zoomIn');
    $('#arrow-down i').addClass('animated fadeInDown infinite');

});
// JavaScript Document
(function($) {
    "use strict"; // Start of use strict


    //Animate Hamburger Icon
    $('.first-button').on('click', function() {

        $('.animated-icon1').toggleClass('open');
    });

    //Services Hover
    $('#services .first-card').hover(
        function() {
            $('.first-card img').attr("src", "assets/img/services-extracted-size/branding-colored.png")
        },
        function() {
            $('.first-card img').attr("src", "assets/img/services-extracted-size/branding.png")
        }
    );

    $('#services .second-card').hover(
        function() {
            $('.second-card img').attr("src", "assets/img/services-extracted-size/customer-service-colored.png")
        },
        function() {
            $('.second-card img').attr("src", "assets/img/services-extracted-size/customer-service.png")
        }
    );

    $('#services .third-card').hover(
        function() {
            $('.third-card img').attr("src", "assets/img/services-extracted-size/responsive-design-symbol-colored.png")
        },
        function() {
            $('.third-card img').attr("src", "assets/img/services-extracted-size/responsive-design-symbol.png")
        }
    );

    $('#services .fourth-card').hover(
        function() {
            $('.fourth-card img').attr("src", "assets/img/services-extracted-size/guarantee-colored.png")
        },
        function() {
            $('.fourth-card img').attr("src", "assets/img/services-extracted-size/guarantee.png")
        }
    );


    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
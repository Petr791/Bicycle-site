$(function() {
    //Header menu

    let nav = $("#menu");
    let navToggle = $("#navToggle");
    let header = $("#header");
    let intro = $("#mainscreen");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    })



    //Fixed Header 

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();


        checkScroll(scrollPos, introH);


    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    //Smooth scroll

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset + 10
        }, 700);
    });

});

//igb

function ibg() {
    $.each($('.ibg'), function(index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });
}

ibg();

// topNubex position: fixed;
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('#topnubex').fadeIn();
        } else {
            $('#topnubex').fadeOut();
        }
    });
    $('#topnubex').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 700);
    });
});


//Sliders

if ($('.slider__body').length > 0) {
    $('.slider__body').slick({
        //autoplay: true,
        //infinite: false,
        dots: true,
        arrows: false,
        accessibility: false,
        slidesToShow: 1,
        autoplaySpeed: 3000,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [{
            breakpoint: 768,
            settings: {}
        }]
    });
}
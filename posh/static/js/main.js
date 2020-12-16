$(function(){
    /* Slider */
    $('.header__slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.header__slider_dots',
        speed: 700 
    });
    $('.gallery__slider').slick({
        appendArrows: '.gallery__buttons',
        prevArrow: '<button type="button" class="gallery__buttons_prev"><svg><use xlink:href="static/img/svg/symbol/sprite.svg#arrow-prev"></svg></button>',
        nextArrow: '<button type="button" class="gallery__buttons_next"><svg><use xlink:href="static/img/svg/symbol/sprite.svg#arrow-next"></svg></button>'
    });

    /* Menu */
    	var menuBtn = $('.burger');
	    var menu = $('.menu');

	menuBtn.on('click', function(event){
		event.preventDefault();
		menu.toggleClass('menu__active');
	});
	/* Scroll to element */
	 $('.scroll-link')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 50
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        }
                        ;
                    });
                }
            }
	});
});

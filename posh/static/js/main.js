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
});
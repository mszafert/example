import Skicams from './skicams';

$(window).on('resize', function() {
    var h = $(window).height() - $('header').outerHeight() - $('footer').outerHeight() - 100;
    $('.contact').height(h);
}).trigger('resize');

$('.contact-form').validate({
    debug: true,
    errorClass: 'uk-form-danger'
});
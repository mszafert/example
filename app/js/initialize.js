import Skicams from './skicams';

new Skicams;

$(window)
  .on('resize', () => {
    const h =
      $(window).height() -
      $('header').outerHeight() -
      $('footer').outerHeight() -
      100;
    $('.contact').height(h);
  })
  .trigger('resize');

$('.contact-form').validate({
  debug: true,
  errorClass: 'uk-form-danger',
});

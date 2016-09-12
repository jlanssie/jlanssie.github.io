$(document).on('scroll', function () {
    $('.Header').css('opacity', ($(document).scrollTop() / 500));
});
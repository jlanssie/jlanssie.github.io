$(document).on('scroll', function (e) {
    $('.Header').css('opacity', ($(document).scrollTop() / 500));
});
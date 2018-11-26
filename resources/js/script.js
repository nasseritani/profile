$(document).ready(function () {
    $('a[href*=\\#]').on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated rotateInDownLeft');
    }, {
        offset: '80%'
    });
    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated lightSpeedIn');
    }, {
        offset: '80%'
    });
    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated swing');
    }, {
        offset: '50%'
    });
    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated jackInTheBox');
    }, {
        offset: '50%'
    });
})

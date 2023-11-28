$(document).ready(function () {

    console.log("Hello worldsss!");

    $(window).scroll(function () {
        var windowScroll = $(this).scrollTop();

        // Banner Info Opacity
        var num = 2 - (windowScroll * 0.005);

        if (windowScroll > 0) {
            $('.bnr_info').css({
                'opacity': num
            });
        }
        else {
            $('.bnr_info').css({
                'opacity': '1'
            });
        }

        // Border Left
        var num = 2 - (windowScroll * .4);

        if (windowScroll > 0) {
            $('.bnr_border_left').css({
                'transform': 'translate3d(' + num + 'px, 0px, 0px)'
            });
        }
        else {
            $('.bnr_border_left').css({
                'transform': 'translate3d(0px, 0px, 0px)'
            });
        }

        // Border Right
        var num = (windowScroll * .4) + -2;

        if (windowScroll > 0) {
            $('.bnr_border_right').css({
                'transform': 'translate3d(' + num + 'px, 0px, 0px)'
            });
        }
        else {
            $('.bnr_border_right').css({
                'transform': 'translate3d(0px, 0px, 0px)'
            });
        }

        // Border Top
        var num = 2 - (windowScroll * .085);

        if (windowScroll > 0) {
            $('.bnr_border_top').css({
                'transform': 'translate3d(0px,' + num + 'px, 0px)'
            });
        }
        else {
            $('.bnr_border_top').css({
                'transform': 'translate3d(0px, 0px, 0px)'
            });
        }


        // Border Bottom
        var num = (windowScroll * .085) + -2;

        if (windowScroll > 0) {
            $('.bnr_border_bottom').css({
                'transform': 'translate3d(0px,' + num + 'px, 0px)'
            });
        }
        else {
            $('.bnr_border_bottom').css({
                'transform': 'translate3d(0px, 0px, 0px)'
            });
        }

    });


});
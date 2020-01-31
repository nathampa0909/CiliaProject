$(document).ready(function () {
    var trigger = $('.hamburger_open'),
        overlay = $('.overlay'),
        isClosed = false;

    trigger.click(function () {
        hamburger_open();
    });

    function hamburger_cross() {

        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    function hamburger_open() {

    }

});
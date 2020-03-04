$(document).ready(function (e) {
    $('ul li.section').click(function () {
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
        event.stopPropagation();
    });
    $(document).click(function (event) {
        if (!$(event.target).hasClass('col-4')) {
            $("ul li.section").removeClass("active");
        }
    });
});

$(document).ready(function () {
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
    }, 4000);
    $("#closeCookieConsent, .cookieConsentOK").click(function () {
        $("#cookieConsent").fadeOut(200);
    });
});

$(function () {
    $('marquee').mouseover(function () {
        $(this).attr('scrollamount', 0);
    }).mouseout(function () {
        $(this).attr('scrollamount', 10);
    });
});
var post_timers = new Array();

function destroy(selector) {
    $(selector).hide();
}

$(document).ready(function() {
    $("#wrapper").css("padding-bottom", $(".footer-container").height() + "px");
});

$(window).resize(function() {
    $("#wrapper").css("padding-bottom", $(".footer-container").height() + "px");
});

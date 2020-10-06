export default function () {
    // window scroll effect
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 10) {
            $("body").addClass("thin-header");
            $(".header").css("top", '0px');
        }
        else {
            $("body").removeClass("thin-header");
            $(".header").css("top", '50px');
        }
    });

    // check if window at top
    $(window).load(function () {
        if ($("#header-banner").position().top != 0) {
            $("body").addClass("thin-header");
            $(".header").css("top", '0px');
        }
    });
}

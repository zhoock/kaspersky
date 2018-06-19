index: function () {
    var VIPTwo = $(".js-VIP-two"),
        ticketOne = $(".js-ticket-one"),
        portrait = $(".js-portrait"),
        cap = $(".js-cap"),
        autograph = $(".js-autograph");

    VIPTwo.on("mouseenter", function () {
        $(this).addClass("hinge animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
            $(this).removeClass("hinge animated");
        });
    });

    ticketOne.on("mouseenter", function () {
        $(this).addClass("swing animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
            $(this).removeClass("swing animated");
        });
    });

    portrait.on("mouseenter", function () {
        $(this).addClass("zoomIn animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
            $(this).removeClass("zoomIn animated");
        });
    });

    cap.on("mouseenter", function () {
        $(this).addClass("bounceIn animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
            $(this).removeClass("bounceIn animated");
        });
    });

    autograph.on("mouseenter", function () {
        $(this).addClass("rubberBand animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
            $(this).removeClass("rubberBand animated");
        });
    });
}
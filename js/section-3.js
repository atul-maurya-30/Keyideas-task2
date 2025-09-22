$(document).ready(function () {
    function initCarousel() {
        if ($(window).width() < 1000) {
            if (!$(".portfolio-slider").hasClass("owl-loaded")) {
                $(".portfolio-slider").owlCarousel({
                    items: 4,
                    loop: false,
                    margin: 20,
                    nav: true,
                    dots: false,
                    responsive: {
                        0: {
                            items: 1, // Mobile: 1 card per slide
                        },
                        600: {
                            items: 2, // Tablet: 2 cards per slide
                        },
                        999: {
                            items: 2, // Just below desktop, keep 2 items
                        }
                    },
                });
            }
        } else {
            // Destroy carousel and clean up
            if ($(".portfolio-slider").hasClass("owl-loaded")) {
                $(".portfolio-slider")
                    .trigger("destroy.owl.carousel")
                    .removeClass("owl-carousel owl-loaded owl-hidden")
                    .removeAttr("style"); // Remove inline styles
                // Unwrap all Owl Carousel wrappers
                $(".portfolio-slider")
                    .find(".owl-stage-outer, .owl-stage, .owl-item")
                    .contents()
                    .unwrap();
                // Ensure grid styles take effect
                $(".portfolio-slider").css("display", "grid");
            }
        }
    }

    // Init on load
    initCarousel();

    // Re-check on resize with debounce
    let resizeTimer;
    $(window).resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(initCarousel, 100); // Debounce resize
    });
});
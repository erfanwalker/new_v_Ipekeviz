$(document).ready(() => {
    (() => {

        // ======== variables =========
        //==== boolean ====
        let menuActive = false,
            mMenuActive = false,
            dropDownIcon = false;

        //==== elements ====
        let $window = $(window),
            parallaxElem = $('.intro'),
            htmlBody = $('html, body'),
            nav = $('nav'),
            introh1 = $('.intro--h1'),
            introh4 = $('.intro--h4'),
            introCaption = $('.intro--caption--container'),
            $inputSearch = $('.input-search'),
            $overlay = $('.overlay');

        //==== ints ====

        let scrollTop = $window.scrollTop(),
            docHeight = $(document).height(),
            scrollPos = 0,
            timer1,
            timer2;

        //==== consts ====





        //========== event listeners ==========

        // ===== Scroll =====
        $($window).scroll(function() {
            curScrollPos = $(this).scrollTop();
            btnScrollUpFade(curScrollPos);
            nav_collapse(curScrollPos);
            parallax(curScrollPos);
        });

        // ===== click =====
        $('.button--scroll-up').click((event) => { // When arrow is clicked
            event.preventDefault();
            btnScrollUp();
        });
        $('.navbar--search button').click(() => {
            searchFadeToggle();
        });
        $('.navbar-collapse-btn').click(() => {
            $('.m-navbar--menu').slideToggle('medium');
            inputSearchSlideUp();
        });

        $(".dark-overlay").click(() => {
            $(".gallery-modal").removeClass("modal-container");
            $(".gallery-modal").addClass("modal-disp-none");
            $(".dark-overlay").fadeOut("medium");
        });
        $('.m-drop-down').click(() => {
            mDropDown();
        });
        $("body > *").not("body .overlay-on").click(() => {
            $('.m-navbar--menu').slideUp('fast');
            searchFadeOut();
            $($overlay).fadeOut('fast');
        });
        // ===== mouse enter & mouse leave =====
        $(".overlay-on").on("mouseenter", () => {
            timer1 = setTimeout(function() {
                overlayMouseEnter();
            }, 700);
        }).on("mouseleave", () => {
            clearTimeout(timer1);
            overlayMouseLeave();
        });
        $(".social").on("mouseenter", function() {
            clearTimeout(timer2);
            socialSlideDown();
        }).on("mouseleave", function() {
            timer2 = setTimeout(function() {
                socialSlideUp();
            }, 300)
        });






        // ===== hover =====
        $('.drop-down').hover(() => {
            $('.drop-down-item').stop().fadeIn('slow');
        }, () => {
            $('.drop-down-item').stop().fadeOut(1);
        })









        //============= functions ==============
        let nav_collapse = (curScrollPos) => {
            if (curScrollPos > scrollPos) {
                $('.m-navbar--menu').slideUp('fast');
                searchFadeOut();
                if (curScrollPos >= 180) {
                    nav.addClass('hidden');
                    if ($inputSearch.height() < 5) {
                        $($overlay).fadeOut('fast');
                    }
                }
            } else if (curScrollPos < scrollPos && !menuActive) {
                nav.removeClass('hidden');
            }
            scrollPos = curScrollPos;
        }
        let btnScrollUpFade = (scrlTop) => {
            if (scrlTop >= 800) { // If page is scrolled more than 50px
                $('.button--scroll-up').fadeIn(200); // Fade in the arrow
            } else {
                $('.button--scroll-up').fadeOut(200); // Else fade out the arrow
            }
        }
        let btnScrollUp = () => {
            $('body,html').animate({
                scrollTop: 0 // Scroll to top of body
            }, 500);
        }
        let overlayMouseEnter = () => {
            $($overlay).fadeIn(500);
        }
        let overlayMouseLeave = () => {
            $($overlay).fadeOut(500);
        }
        let parallax = (currentScrollTop) => {
            parallaxElem.css('background-position', '50%' + -currentScrollTop / 4 + 'px');
        }
        let socialSlideDown = () => {
            $('.social').children('.social-icon').slideDown('fast');
            $('.social').stop(true, true).animate({ left: 5 + "px" }, 'fast');
        }
        let socialSlideUp = () => {
            $('.social').children('.social-icon').slideUp('fast');
            $('.social').stop(true, true).animate({ left: 0 + "px" }, 'fast');
        }
        let mDropDown = () => {
            $('.m-drop-down-item').slideToggle('fast');
            if (!dropDownIcon) {
                $('.fa-sort-down').css('transform', 'rotateX(180deg)');
                dropDownIcon = true;
            } else if (dropDownIcon) {
                $('.fa-sort-down').css('transform', 'rotateX(0deg)');
                dropDownIcon = false;
            }
        }
        let inputSearchSlideUp = () => {
            if ($inputSearch.height() > 5) {
                searchFadeOut();
            } else if ($inputSearch.height() < 5) {
                return;
            }
        }
        let searchFadeToggle = () => {
            searchFadeIn();
            searchFadeOut();
        }
        let searchFadeIn = () => {
            if ($($inputSearch).height() <= 0) {
                $($inputSearch).stop().animate({ height: 38 }, "fast");
                $($inputSearch).animate({ opacity: 1 }, "fast");
                $($overlay).fadeIn(500);
            }
        }
        let searchFadeOut = () => {
            if ($($inputSearch).height() > 10) {
                $($inputSearch).stop().animate({ height: 0 }, "fast");
                $($inputSearch).animate({ opacity: 0 }, "fast");
                if (!$($overlay).is(':visible')) {
                    return;
                } else {
                    $($overlay).fadeOut(500);
                }
            }
        }









        // ===== on load execute =====
        introh1.addClass('intro--h1--anim');
        introh4.addClass('intro--h4--anim');
        introCaption.addClass('abs-md-container-anim');
    })();

});
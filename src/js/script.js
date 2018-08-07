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












(function() {


    $('.sec-2 .flex-card').hover(
        function() {
            let card = $(this);
            let base = card.parent();
            let pos = card.position();

            if (card.hasClass('first')) {
                base.css('background-position', '0%');
                base.css('background-image', 'linear-gradient(#01a6db 0%, rgb(15, 36, 126) 100%)')
                base.css('background-repeat', "no-repeat");
                base.css('background-size', '100% 100%');
                $(this).siblings().animate({ opacity: 0 }, 200);
            } else if (card.hasClass('second')) {
                base.css('background-position', '0%');
                base.css('background-image', 'linear-gradient(rgb(163, 25, 25) 0%, rgb(72, 15, 95) 100%)')
                base.css('background-repeat', "no-repeat");
                base.css('background-size', '100% 100%');
                $(this).siblings().animate({ opacity: 0 }, 200);
            }
        },
        function() {




            let card = $(this);
            let base = card.parent();
            let pos = card.position();
            if (card.hasClass('first')) {
                base.css('background-position-x', pos.left + 25);
                base.css('background-position-y', "50%");
                base.css('background-image', 'linear-gradient(#01a6db 0%, rgb(15, 36, 126) 100%)')
                base.css('background-repeat', "no-repeat");
                var fwidth = $('.sec-2 .flex-card.first').width();
                var fheight = $('.sec-2 .flex-card.first').height();
                var fbg_size = "" + fwidth + "px " + fheight + "px";
                base.css('background-size', fbg_size);
                $(this).siblings().stop().animate({ opacity: 1 }, 200);
            } else if ($(this).hasClass('second')) {
                base.css('background-position-x', pos.left + 25);
                base.css('background-position-y', "50%");
                base.css('background-image', 'linear-gradient(rgb(163, 25, 25) 0%, rgb(72, 15, 95) 100%)')
                base.css('background-repeat', "no-repeat");
                var swidth = $('.sec-2 .flex-card.second').width();
                var sheight = $('.sec-2 .flex-card.second').height();
                var sbg_size = "" + swidth + "px " + sheight + "px";
                base.css('background-size', sbg_size);
                $(this).siblings().stop().animate({ opacity: 1 }, 200);
            }
        }
    );

















})();
$(document).ready(function() {
    var fwidth = $('.sec-2 .flex-card.first').width();
    var swidth = $('.sec-2 .flex-card.second').width();
    var fheight = $('.sec-2 .flex-card.first').height();
    var sheight = $('.sec-2 .flex-card.second').height();
    var fbg_size = "" + fwidth + "px " + fheight + "px";
    var sbg_size = "" + swidth + "px " + sheight + "px";
    var fpos = $('.sec-2 .flex-card.first').position();
    var spos = $('.sec-2 .flex-card.second').position();
    $('.sec-2 .flex-card.first').parent().css('background-position-x', fpos.left + 25);
    $('.sec-2 .flex-card.first').parent().css('background-position-y', "50%");
    $('.sec-2 .flex-card.second').parent().css('background-position-x', spos.left + 25);
    $('.sec-2 .flex-card.second').parent().css('background-position-y', "50%");
    $('.sec-2 .flex-card.first').parent().css('background-size', fbg_size);
    $('.sec-2 .flex-card.second').parent().css('background-size', sbg_size);
    var first_elem_top_offset;
    var second_elem_top_offset;
    var third_elem_top_offset;
    var forth_elem_top_offset;
    var first_elem_h;
    var second_elem_h;
    var third_elem_h;
    var forth_elem_h;
    first_elem_top_offset = $('.first').offset().top;
    second_elem_top_offset = $('.second').offset().top;
    third_elem_top_offset = $('.third').offset().top;
    forth_elem_top_offset = $('.forth').offset().top;

    first_elem_h = $('.first').height();
    second_elem_h = $('.second').height();
    third_elem_h = $('.third').height();
    forth_elem_h = $('.forth').height();
    console.log("f", first_elem_top_offset, "se", second_elem_top_offset);

    $(window).resize(function() {
        first_elem_top_offset = $('.first').offset().top;
        second_elem_top_offset = $('.second').offset().top;
        third_elem_top_offset = $('.third').offset().top;
        forth_elem_top_offset = $('.forth').offset().top;

        first_elem_h = $('.first').height();
        second_elem_h = $('.second').height();
        third_elem_h = $('.third').height();
        forth_elem_h = $('.forth').height();

        var fwidth = $('.sec-2 .flex-card.first').width();
        var swidth = $('.sec-2 .flex-card.second').width();
        var fheight = $('.sec-2 .flex-card.first').height();
        var sheight = $('.sec-2 .flex-card.second').height();
        var fbg_size = "" + fwidth + "px " + fheight + "px";
        var sbg_size = "" + swidth + "px " + sheight + "px";
        var fpos = $('.sec-2 .flex-card.first').position();
        var spos = $('.sec-2 .flex-card.second').position();
        $('.sec-2 .flex-card.first').parent().css('background-position-x', fpos.left + 25);
        $('.sec-2 .flex-card.first').parent().css('background-position-y', "50%");
        $('.sec-2 .flex-card.second').parent().css('background-position-x', spos.left + 25);
        $('.sec-2 .flex-card.second').parent().css('background-position-y', "50%");
        $('.sec-2 .flex-card.first').parent().css('background-size', fbg_size);
        $('.sec-2 .flex-card.second').parent().css('background-size', sbg_size);
    });
    $(document).on('scroll', function() {
        var currentScrollTop = $(window).scrollTop();
        console.log('h', first_elem_h, 's-h', second_elem_h);
        console.log('of', first_elem_top_offset, 's-o', second_elem_top_offset, 'c-s', currentScrollTop);
        if (currentScrollTop >= ((first_elem_top_offset - first_elem_h) - (first_elem_h / 3))) {
            $('.anim-book-txt:eq(0)').addClass('anim-book-txt-anim');
            $('.inner:eq(0)').addClass('inner-d');
            $('.anim-book-img:eq(0)').addClass('anim-book-img-anim');
        }
        if (currentScrollTop >= (third_elem_top_offset - third_elem_h) - (third_elem_h / 2)) {
            $('.anim-book-txt-alt:eq(0)').addClass('anim-book-txt-anim');
            $('.inner:eq(1)').addClass('inner-d');
            $('.anim-book-img-alt:eq(0)').addClass('anim-book-img-anim');
        }
        if (currentScrollTop >= (second_elem_top_offset - second_elem_h) - (second_elem_h / 3)) {
            $('.anim-op').addClass('anim-op-anim');
        }
        if (currentScrollTop >= (forth_elem_top_offset - forth_elem_h) - (forth_elem_h / 3)) {
            $('.anim-book-txt:eq(1)').addClass('anim-book-txt-anim');
            $('.inner:eq(2)').addClass('inner-d');
            $('.anim-book-img:eq(1)').addClass('anim-book-img-anim');
        }
    });

});
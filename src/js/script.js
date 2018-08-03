function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 300) { // If page is scrolled more than 50px
        $('.button--scroll-up').fadeIn(200); // Fade in the arrow
    } else {
        $('.button--scroll-up').fadeOut(200); // Else fade out the arrow
    }
});
var menuactive = false;
$('.navbar--menu--icon').click(function() {
    $('.menu--main--container').fadeToggle(500);
    $('.menu--main--container').css('display', 'flex');
    $('.navbar--main--container').animate({ height: '.2em' }, "slow");
    menuactive = true;
    $('.menu--main--container ul').parent().click(function(e) {
        if ($(e.target).is('li')) {
            return;
        } else {
            $('.menu--main--container').fadeOut(1000, function() {
                $('.navbar--main--container').animate({ height: '3em' }, "slow");
                menuactive = false;
            });
        }
    });
});
var ScrollPos = 0;

$(window).scroll(function() {
    var CurScrollPos = $(this).scrollTop();
    if (CurScrollPos > ScrollPos) {
        if ($('.input-search').height() >= 0) {
            $('.input-search').css('height', '0px');
            $('.input-search').css('opacity', '0');
        }
        if (CurScrollPos >= 400 && !menuactive) {
            $('.navbar--main--container').css('height', '.2em');
        }

    } else if (CurScrollPos < ScrollPos && !menuactive) {
        $('.navbar--main--container').css('height', '3em');
        if ($('.input-search').height() >= 0) {
            $('.input-search').css('height', '0px');
            $('.input-search').css('opacity', '0');
        }
    }
    ScrollPos = CurScrollPos;
});

$('.button--scroll-up').click(function() { // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);
});

function myFunction(x) {
    x.classList.toggle("change");
}

// var timer;
// $(".nevbar--menu").on("mouseenter", "ul", function(){
//     timer = setTimeout(function () {
//         $('.overlay').css('display',"block");
//     }, 2000);
// }).on("mouseleave", "div", function(){
//     clearTimeout(timer);
//     $('.overlay').css('display',"none");
// });
var timer;
$(".navbar").on("mouseenter", function() {
    timer = setTimeout(function() {
        $(".overlay").fadeIn(500);
    }, 700)
}).on("mouseleave", function() {
    clearTimeout(timer);
    $(".overlay").fadeOut(500);
});
// var DScrollPos = 0;

//     $(window).scroll(function () {
//     	var DCurScrollPos = $(this).scrollTop();
//     	if (DCurScrollPos > DScrollPos) {
//     		if(DCurScrollPos>=480){
//     			$('.navbar').stop(true,true).animate({top: '-60px'}, 'fast');}

//     		} else if(DCurScrollPos < DScrollPos) {
//     			$('.navbar').stop(true,true).animate({top: '0px'}, 'fast');
//     		}
//     		DScrollPos = DCurScrollPos;
// 		});

(function() {

    // Variables
    var documentElem = $(document),
        lastScrollTop = 0,
        parallaxElem = $('.intro'),
        htmlBody = $('html, body'),
        nav = $('nav'),
        introh1 = $('.intro--h1'),
        introh4 = $('.intro--h4'),
        introCaption = $('.intro--caption--container'),
        window = $(window);

    // Nav toggle
    documentElem.on('scroll', function() {
        var currentScrollTop = $(this).scrollTop();
        if (currentScrollTop > lastScrollTop) {
            if (currentScrollTop >= 180) {
                nav.addClass('hidden');
            }

        } else if (currentScrollTop < lastScrollTop) {
            nav.removeClass('hidden');;
        }
        //(currentScrollTop > lastScrollTop) ? nav.addClass('hidden') : nav.removeClass('hidden');
        lastScrollTop = currentScrollTop;
    });
    //parallax

    documentElem.on('scroll', function() {
        var currentScrollTop = $(this).scrollTop();
        parallaxElem.css('background-position', '50%' + -currentScrollTop / 4 + 'px');
        // if (currentScrollTop > 220) {
        //     $('.anim-book-txt:eq(0)').addClass('anim-book-txt-anim');
        //     $('.inner:eq(0)').addClass('inner-d');
        //     $('.anim-book-img:eq(0)').addClass('anim-book-img-anim');
        // }
        // if (currentScrollTop > 460) {
        //     $('.anim-book-txt-alt:eq(0)').addClass('anim-book-txt-anim');
        //     $('.inner:eq(1)').addClass('inner-d');
        //     $('.anim-book-img-alt:eq(0)').addClass('anim-book-img-anim');
        // }
        // if (currentScrollTop > 680) {
        //     $('.anim-op').addClass('anim-op-anim');
        // }
        // if (currentScrollTop > 1100) {
        //     $('.anim-book-txt:eq(1)').addClass('anim-book-txt-anim');
        //     $('.inner:eq(2)').addClass('inner-d');
        //     $('.anim-book-img:eq(1)').addClass('anim-book-img-anim');
        // }
    });

    introh1.addClass('intro--h1--anim');
    introh4.addClass('intro--h4--anim');
    introCaption.addClass('abs-md-container-anim');


    var winHeight = $(window).height(),
        docHeight = $('.mobile--version').height(),
        max, value;

    /* Set the max scrollable area */
    max = (docHeight - winHeight);
    $(".navbar--progressbar").css('width', 0 + "px");

    $(document).on('scroll', function() {
        value = $(window).scrollTop() / 30;
        console.log("value", value);
        console.log('docheight', docHeight)
        console.log('winheight', winHeight)
        console.log('max', max);
        $(".navbar--progressbar").css('width', value + "%");
    });

    // $('.sec-2 .flex-card').hover(function() {
    // 	var backgroundcolor=$(this).css('background-color');
    // 	$(this).parent().css('background-image',backgroundcolor);
    // }, function() {
    // 	// on mouseout, reset the background colour
    // 	$(this).parent().css('background-color', '');
    // });
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
    // $('.social').hover(function () {
    // 	setTimeout(function () {
    // 		$('.social').children('.social-icon').slideDown('fast');
    // 		$('.social').stop(true, true).animate({ left: 5 + "px" }, 'fast');
    // 	}, 100);

    // }, function () {
    // 	setTimeout(function () {
    // 		$('.social').children('.social-icon').slideUp('fast');
    // 		$('.social'	).stop(true, true).animate({ left: -14 + "px" }, 'fast');
    // 	}, 100);

    // });

    $(".social").on("mouseenter", function() {
        clearTimeout(timer);

        $('.social').children('.social-icon').slideDown('fast');
        $('.social').stop(true, true).animate({ left: 5 + "px" }, 'fast');

    }).on("mouseleave", function() {
        timer = setTimeout(function() {
            $('.social').children('.social-icon').slideUp('fast');
            $('.social').stop(true, true).animate({ left: 0 + "px" }, 'fast');
        }, 300)
    });

    $('.drop-down').hover(() => {
        $('.drop-down-item').stop().fadeIn('slow');
    }, () => {
        $('.drop-down-item').stop().fadeOut(1);
    })

    var timer;
    $(".navbar").on("mouseenter", function() {
        timer = setTimeout(function() {
            $(".overlay").fadeIn(500);
        }, 700)
    }).on("mouseleave", function() {
        clearTimeout(timer);
        $(".overlay").fadeOut(500);
    });
    $('.navbar--search button').click(() => {
        if ($('.input-search').height() <= 0) {
            $('.input-search').stop().animate({ height: 38 }, "fast");
            $('.input-search').animate({ opacity: 1 }, "fast");

            $(".overlay").fadeIn(500);

        } else {
            //TODO:when clicked its going to do get
            // here goes the stuff
            //
            $('.input-search').stop().animate({ height: 0 }, "fast");
            $('.input-search').animate({ opacity: 0 }, "fast");
            if (!$(".overlay").is(':visible')) {
                return;
            } else {
                $(".overlay").fadeOut(500);
            }
        }
    });

    $('.navbar-collapse-btn').click(() => {
        $('.m-navbar--menu').slideToggle('medium');
    });
    var drop_down_icon = false;
    $('.m-drop-down').click(() => {
        $('.m-drop-down-item').slideToggle('fast');
        if (!drop_down_icon) {
            $('.fa-sort-down').css('transform', 'rotateX(180deg)');
            drop_down_icon = true;
        } else if (drop_down_icon) {
            $('.fa-sort-down').css('transform', 'rotateX(0deg)');
            drop_down_icon = false;
        }
    });






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

var quadimages = document.querySelectorAll("#quad figure");
for (i = 0; i < quadimages.length; i++) {
    quadimages[i].addEventListener('click', function() {
        this.classList.toggle("expanded");
        quad.classList.toggle("full")
    });
}
$(document).ready(function() {

    /*GLOBAL*/

        /*preloader*/
        $('.loader-wrapper').delay(300).fadeOut(300);

        /*anchor*/
        $('a.anchor').click(function(e){
            e.preventDefault();
            $('header').removeClass('is-menu-opened');
            var aTag = $($(this).attr("href"));
            $('html,body').animate({scrollTop: (aTag.offset().top) },'slow');
        });

        /*lazy load*/
        /*$(function() {
            $('.lazy').lazy({
                scrollDirection: 'vertical',
                effect: 'fadeIn',
                visibleOnly: true,
            });
        });*/

    /*GLOBAL*/

    /*HEADER*/

        /*header nav copy link*/
        $('.header__nav-list a').each(function(){
            $(this).find("span").clone().appendTo($(this));
        });

        /*header menu button toggle class of header*/
        $(".header__menu-btn").click(function(){
            $('header').toggleClass('is-menu-opened');
        });

        /* (use header__nav-mobile || header__nav ) && remove header active class on desctop*/
        (relocateHeaderMenu = () => {
            if (window.matchMedia("(min-width: 1025px)").matches) {
              $(".header__nav-list").appendTo($(".header__nav"));
              $(".header__discord-link").appendTo($(".header__discord"));
              $('header').removeClass('is-menu-opened');
            } else {
              $(".header__nav-list").appendTo($(".header__nav-mobile"));
              $(".header__discord-link").appendTo($(".header__nav-mobile"));
            }
        })();

        /*close header mobile menu on click anywhere else*/
        $(document).click(function(e){
            $('header').removeClass('is-menu-opened');
        });
        $('header').click(function(e){
            e.stopPropagation();
        });

        /*video pop up*/
        $('[href=intro__video]').click(function(e){
            e.preventDefault()
        })

    /*HEADER*/
   
    /*INTRO*/

        /*intro__tab height*/
        $('.intro__text').css("margin-top" , $("header").outerHeight());

        /*center .intro__banner-anchor*/
        $('.intro_banner-placeholder').css('width', $('.intro__banner-social').outerWidth());

    /*INTRO*/

    /*CLANS*/

        /*clans__block active state*/
        $('.clans__block').click(function(){
            if (window.matchMedia("(min-width: 1024px)").matches) {
                if (!$(this).hasClass("clans__block--active")) {
                    $($('.clans__block').not($(this))).css("width" , '0');
                    setTimeout(() => {
                        $(".clans__block").removeClass("clans__block--active").css("width" , '0');
                        $(this).addClass("clans__block--active").removeAttr("style");
                    }, 300);
                } else {
                    setTimeout(() => {
                        $(".clans__block").removeAttr("style");
                    }, 300);
                    $(".clans__block").removeClass("clans__block--active")

                }
            } else {
                if (!$(this).hasClass("clans__block--active")) {
                    $(".clans__block").removeClass("clans__block--active");
                    $(this).addClass("clans__block--active");
                } else {
                    $(".clans__block").removeClass("clans__block--active");
                }
            }
        });

    /*CLANS*/

    /*CLASSES*/

        /*slider*/
        $('.classes_slick-gallery')
            .slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                autoplay: false,
                fade: true,
            })
            .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                $(".class_switch-button").removeClass("class_switch-button--active")
                $(".class_switch-button[data-control-slide="+nextSlide+"]").addClass("class_switch-button--active")
            });

        /*change active slide on click btn*/
        $('.class_switch-button').click(function(){
            $('.classes_slick-gallery').slick('slickGoTo', $(this).attr("data-control-slide"));
        })


    /*CLASSES*/

    /*NFT*/

        /*nft run stroke*/
        $('.nft__gallery').slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            autoplay: false,
            fade: false,
            speed: 8000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            pauseOnFocus: false,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }],

        });

        /*line between 2 row height*/
        $('.nft__contract_line_from_row').css('top', ($('.nft__contract-block-4').outerHeight() / 2 ) + "px" );
        $('.nft__contract_line_from_row').css('height', ($('.nft__contract-block-4').outerHeight() / 2) + ($('.nft__contract-block-5').outerHeight() / 2) + 40);

    /*NFT*/

    /*ROADMAP*/

        /*#roadmap_and_team fixed jumping bg whenteam member block hovered*/
        $('.roadmap_and_team-bg-block').css("height" , $('#roadmap_and_team').outerHeight())

    /*ROADMAP*/

    /*TEAM*/

        /*team__block  change state*/
        $('.team__block').click(function(){
            if ($(this).hasClass("team__block--active")) {
                $(this).removeClass("team__block--active");
            } else {
                $('.team__block').removeClass("team__block--active");
                $(this).addClass("team__block--active");
            }
        });

        /*make all teammates card same on mobile*/
        if (!window.matchMedia("(min-width: 1025px)").matches) {
            $(".team__block").each(function(){
                if ( $(this).hasClass("team__block--large") ){
                    $(this).addClass("team__block--large-mob")
                } else {
                    $(this).addClass('team__block--large')
                }
            })
        }
        if (!window.matchMedia("(min-width: 768px)").matches) {
            $(".team__block").addClass("team__block--large team__block--large-mob")
        }

    /*TEAM*/

    /*FAQ*/
    
        /*faq state*/
        $(".faq__block").click(function(){
            if ($(this).hasClass("faq__block--active")) {
                $(this).removeClass("faq__block--active");
            } else {
                $('.faq__block').removeClass("faq__block--active");
                $(this).addClass("faq__block--active");
            }
        })

    /*FAQ*/

});


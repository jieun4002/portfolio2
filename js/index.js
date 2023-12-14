$(function () {

    // 헤더 메뉴버튼 클릭 이벤트
    $('header .header-wrap .util-menu ul li a').click(function () {
        $(this).parent().addClass('checked');
        $(this).parent().siblings().removeClass('checked')
    });



    $('.util-menu ul li a').click(function () {
        $(this).addClass('active');
        $(this).parent().addClass('active');

    });




    // 메인비주얼 - 딜레이
    setTimeout(function () {
        $('.main-visual').addClass('active');
    }, 900);


    // 메인비주얼 - 스크롤 높이값에 따라서 안보임 처리
    $(window).scroll(function () {
        var height = $(document).scrollTop();
        var scroll = $(window).height();
        console.log(height);

        if (height > scroll * '0.52') {
            $('.main-visual .visual .text h1').addClass('hide')
        } else {
            $('.main-visual .visual .text h1').removeClass('hide');
        }

    });


    $('#project .project-item a').hover(function () {
        $(this).parent().addClass('more');
    }, function () {
        $(this).parent().removeClass('more');
    })

    // slick
    $('.slick').slick({
        slidesToShow: 3.5,
        infinite: false,
        slidesToScroll: 2,
        responsive: [

            {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 2.5
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // aos
    AOS.init();


    $('header .mo-menu .menu-btn span').click(function () {
        $('header .mo-menu .slide-menu').addClass('slide');

    });


    $(' header .mo-menu .slide-menu .close span').click(function () {
        $('header .mo-menu .slide-menu').removeClass('slide');

    });

    $(' header .mo-menu .slide-menu ul li a').click(function () {
        $('header .mo-menu .slide-menu').removeClass('slide');

    });


});
// 브라우저 높이 값에 따라 높이값 계산
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
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
    $(".slick").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
        infinite: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }

            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
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

// 더보기 js
    // 더보기를 할 전체 div에 id ="js-load"
    // 더보기 될 각 리스트에 js-load class 붙어야함.

    // 더보기 버튼에 id = "js-btn-wrap"


    $(window).on('load', function () {
        note_load('#js-load', '10'); //보여질 게시글 갯수. 
        $("#js-btn-wrap .button").on("click", function () {
            note_load('#js-load', '3', '#js-btn-wrap'); //클릭 후 로드될 게시글 갯수
        });
    });

    function note_load(id, cnt, btn) {
        var note_list = id + " .js-load:not(.block)";
        var note_length = $(note_list).length;
        var note_total_cnt;
        if (cnt < note_length) {
            note_total_cnt = cnt;
        } else {
            note_total_cnt = note_length;
            $(btn).hide();

        }
        $(note_list + ":lt(" + note_total_cnt + ")").addClass("block");
    }


});
// 브라우저 높이 값에 따라 높이값 계산
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

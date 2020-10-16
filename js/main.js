/// 메인 페이지 JS - main.js ////

var hel = Array('h', 'e', 'l', 'v', 'e', 't', 'c', 'a');

$(function (e) { /////// jQB ///////////////////////


    // 사이드 메뉴
    $(".menu").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("on");
        $("header").toggleClass("on");
        $(".gnb_list").toggleClass("on");
    })

    // 원 날리기~
    var numberOfDivs = 80;
    // add x number of divs to page.
    for (var i = 0; i < numberOfDivs; i++) {
        var g = Math.floor(Math.random() * 5);
        var c = Math.floor(Math.random() * 5);
        //Create div with class c0/c3 (color) and g0/g4 (size)
        var p = $('<div/>').addClass('c' + c).addClass('g' + g).addClass('parti');
        //Add object to body
        $('#main').append(p);
    } //////// for /////////////
    $(".parti").movingBubble({
        addCss: false
    });

    // 전화번호 복사
    $(".phone").click(function () {
        copyToClipboard('010-4073-0227');
        alert('전화번호가 복사되었습니다!');
    });

    // 전화번호 알림
    $(".phone img").hover(function () {
        $(".phone_msg").fadeIn(300);
    }, function () {
        $(".phone_msg").fadeOut(300);
    });

    // 슬라이드 효과 시작
    var itpos = [];
    var itcnt = $(".itpos").length;
    //console.log(itcnt);
    for (var i = 0; i < itcnt; i++) {
        itpos[i] = $(".itpos").eq(i).offset().top;
    } ////// for문 /////////////////
    //console.log("위치순서:" + itpos);

    // 위치 갭
    var gap = 150;
    $(".wrap").scroll(function () {
        var scTop = $(this).scrollTop();
        //console.log(scTop);

        // cont1 위치 
        if (scTop >= itpos[0] - gap * 2) {
            $("#cont1 p").addClass("on");
            $(".skill_box").addClass("on");
        } /////// if ///////////

        // 블루엘리펀트 위치 
        if (scTop >= itpos[1] - gap * 2) {
            $(".prjt").first().find("h4").addClass("on");
        } ///// if ////////////

        // 사진 위치 
        if (scTop >= itpos[2] - gap * 2) {
            $(".prj_list").first().addClass("on");
        } ///// if ////////////

        // 샤롯데 위치 
        if (scTop >= itpos[3] - gap * 2) {
            $(".prjt").last().find("h4").addClass("on");
        } ///// if ////////////

        // 사진 위치 
        if (scTop >= itpos[4] - gap * 2) {
            $(".prj_list").last().addClass("on");
        } ///// if ////////////
    }); //////// scroll ////////

    // 스킬박스 더보기
    $(".cert").click(function () {
        $(".certificate").toggleClass("on");
        $(".certificate li:nth-child(n+6)").slideToggle();
    }); //////// click ////////////

    var cert = ["웹디자인기능사",
                "컴퓨터그래픽스기능사",
                "GTQ(그래픽기술자격) 1급",
                "컴퓨터활용능력 2급",
                "워드프로세서",
                "정보기술자격(ITQ) A등급 - 아래한글",
                "정보기술자격(ITQ) A등급 - 한글파워포인트",
                "정보기술자격(ITQ) A등급 - 한글엑세스",
                "전산회계 운용사 3급",
                "ERP 회계정보관리사 2급",
                "무역영어 3급",
                "국제무역사 2급",
                "비서 3급",
                "SMAT(서비스경영자격) 3급"
               ];
    var date = ["2020.09.25",
                "2020.10.08",
                "2018.11.16",
                "2016.08.12",
                "2016.12.09",
                "2016.12.01",
                "2017.03.16",
                "2018.11.01",
                "2018.04.26",
                "2018.06.12",
                "2018.10.11",
                "2017.09.09",
                "2017.12.13",
                "2017.03.06"
               ];

    // 배열 갯수
    var Anum = cert.length;
    // 포문
    for (i = 0; i < Anum; i++) {
        $(".certificate ul")
            .append("<li>" +
                "<span>" +
                date[i] +
                "</span>" +
                cert[i] +
                "</li>");
    }
    var pgnum = $(".pgpos").length;
    console.log("cont 개수 : " + pgnum);
    var pgpos = [];

    for (i = 0; i < pgnum; i++) {
        pgpos[i] = $(".pgpos").eq(i).offset().top;
        console.log("cont" + i + "위치 : " + pgpos[i]);
    } /////// for //////


    // 광클금지
    var msts = 0; //0-허용, 1 - 비허용

    // 메뉴 클릭시 이동
    $(".gnb_list li").click(function (e) {
        e.preventDefault();
        // 실행중이면 돌아가
        if (msts) return true;
        msts = 1; // 잠금(기존 0값을 변경)
        setTimeout(function () {
            msts = 0;
        }, 800); // 0.8초동안 이동하고 나서는 0이 된다

        var idx = $(this).index();
        // console.log(idx);
        $(".wrap").animate({
            scrollTop: pgpos[idx] + "px"
        }, 800, "easeOutSine"); //// animate /////////////////
    }); ////// click /////////


}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////

// 전화번호 복사 함수
function copyToClipboard(val) {
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
}

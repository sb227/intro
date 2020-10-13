/// 메인 페이지 JS - main.js ////

var hel = Array('h', 'e', 'l', 'v', 'e', 't', 'c', 'a');

$(function (e) { /////// jQB ///////////////////////
    console.log("로딩완료!");

    // 사이드 메뉴
    $(".menu").click(function () {
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
    $(".phone").hover(function () {
        $(".phone_msg").animate({
            opacity: 1
        }, 300)
    }, function () {
        $(".phone_msg").animate({
            opacity: 0
        }, 300)
    });

    // 슬라이드 효과 시작
    var itpos = [];
    var itcnt = $(".itpos").length;
    console.log(itcnt);
    for (var i = 0; i < itcnt; i++) {
        itpos[i] = $(".itpos").eq(i).offset().top;
    } ////// for문 /////////////////
    console.log("위치순서:" + itpos);
    
    // 위치 갭
    var gap = 150;
    $(".wrap").scroll(function () {
        var scTop = $(this).scrollTop();
        console.log(scTop);
        
        // cont1 위치 
        if (scTop >= itpos[0]-gap*2){
            $("#cont1 p").addClass("on");
        } /////// if ///////////
        
        // 블루엘리펀트 위치 
        if (scTop >= itpos[1]-gap*2){
            $(".prjt").first().find("h4").addClass("on");
        } ///// if ////////////
        
        // 샤롯데 위치 
        if (scTop >= itpos[2]-gap*2){
            $(".prjt").last().find("h4").addClass("on");
        } ///// if ////////////
        
    }); //////// scroll ////////


}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////

function copyToClipboard(val) {
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
}

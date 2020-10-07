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

$('.parti').movingBubble({
    addCss: false
});


// 전화번호 복사
    

$('.phone').click(function() {
  copyToClipboard('010-4073-0227');
  alert('전화번호가 복사되었습니다!');
});
    
    
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

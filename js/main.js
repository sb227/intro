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

//Add random divs as sample....
//Change numberOfDivs if you want
var numberOfDivs = 80;

// add x number of divs to page.
for (var i = 0; i < numberOfDivs; i++) {
    var g = Math.floor(Math.random() * 5);
    var c = Math.floor(Math.random() * 5);
    //Create div with class c0/c3 (color) and g0/g4 (size)
    var p = $('<div/>').addClass('c' + c).addClass('g' + g).addClass('parti');
    //Add object to body
    $('#cont1').append(p);
}


//This is where the magic happends!!!
//Add css set to none because I added display:block;position:absolute; to the css.
$('.parti').movingBubble({
    addCss: false
});


}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////

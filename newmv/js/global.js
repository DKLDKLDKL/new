function change_bgimg(){
    
function change_bgwidth(){
    var win_width = $(window).width(); 
    var win_height = $(window).height();
    $("#bgimg").css({"width":win_width,"height":win_height});
} 
//定义一个函数，让背景框的大小随可视区大小的改变而改变

change_bgwidth();
//初始化

$(window).resize(function () {
    change_bgwidth();
});
//监听改变窗口大小运行函数

var li_num = 0;
$("#bgimg ul li").each(function(){
    li_num++;
    $(this).attr("data","url(images/"+li_num+".jpg)");
});//懒加载初始化
$("#bgimg ul li").eq(0).addClass("show");
$("#bgimg ul li").eq(0).animate({opacity:1},2000);
$("#bgimg ul li").eq(1).css("display", "block");
$("#bgimg ul li").eq(0).css("background-image", $("#bgimg ul li").eq(0).attr("data"));
$("#bgimg ul li").eq(1).css("background-image", $("#bgimg ul li").eq(1).attr("data"));//先进行第一第二张图的加载
//初始化第一张图

var bg_num = 0;
var bg_timer = setInterval(function(){
    bg_num++;
    prev_bg = bg_num - 1;

    if(bg_num == 3)bg_num = 0;
    setTimeout(function(){
        $("#bgimg ul li").eq(prev_bg).removeClass("show");
        $("#bgimg ul li").eq(bg_num + 1).css("display", "block");
        $("#bgimg ul li").eq(bg_num + 1).css("background-image", $("#bgimg ul li").eq(bg_num + 1).attr("data"));
        //1S后清除上一个class给下一个加block并加载下一张图
    }, 1000);
    $("#bgimg ul li").eq(prev_bg).animate({ opacity: 0 },2000);
    $("#bgimg ul li").eq(bg_num).addClass("show");
    $("#bgimg ul li").eq(bg_num).animate({ opacity: 1 },2000);
    //给当前图片添加class以及改变上一张图片的透明度和当前图片透明度

},5000);
}
setTimeout(function(){
    change_bgimg();
},0);
$(window).resize(function () {
    if($(window).height()<950){
        $("body").css({overflow:"scroll"});
    }
    else{
        $("body").css({overflow:"hidden"});
    }
});
if($(window).height()<950){
    $("body").css({overflow:"scroll"});
}
else{
    $("body").css({overflow:"hidden"});
}
$(".change").each(function(){
    var obj = $(this);
    Math.animation(-90, 0, 1500, 'Back.easeOut', function (value) {
        obj.css("transform", "rotateX(" + value + "deg)")
    });
});
$(".change-top").each(function (index) {
setTimeout(() => {
    var obj = $(this);
    Math.animation(90, 0, 2000, 'Back.easeOut', function (value) {
        obj.css("transform", "rotateY(" + value + "deg)")
    });
    Math.animation(0, 1, 2000, 'Back.easeOut', function (value) {
        obj.css("opacity", value)
    });
}, 100*index);
    
}); 
$(".change-left").each(function () {
    var obj = $(this);
    Math.animation(-100, 0, 2000, 'Back.easeOut', function (value) {
        obj.css("transform", "translateX(" + value + "px)")
    });
    Math.animation(0, 1, 2000, 'Back.easeOut', function (value) {
        obj.css("opacity", value)
    });
});
$(".change-right").each(function (index) {
setTimeout(() => {
    var obj = $(this);
    Math.animation(100, 0, 2000, 'Back.easeOut', function (value) {
        obj.css("transform", "translateX(" + value + "px)")
    });
    Math.animation(0, 1, 2000, 'Back.easeOut', function (value) {
        obj.css("opacity", value)
    });
},100*index);
});
$(".change-bt").each(function (index) {
setTimeout(() => {
    var obj = $(this);
    Math.animation(100, 0, 2000, 'Back.easeOut', function (value) {
        obj.css("transform", "translateY(" + value + "px)")
    });
    Math.animation(0, 1, 2000, 'Back.easeOut', function (value) {
        obj.css("opacity", value)
    });
},100*index);
});
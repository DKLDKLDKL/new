for(let i=0;i<19;i++){
    $("#main .list .item ul").append("<li>"+$("#main .list .item ul li:eq(0)").html()+"</li>");
}
for(let i=0;i<4;i++){
    $("#main .list .scroll-box").append('<div class="item">'+$("#main .list .item:eq(0)").html()+'</div>');
}
for(var i = 0;i<$("#main .nav ul li").length;i++){
    (function(i){
        $("#main .nav ul li").eq(i).hover(function(){
        for(var j = 0;j<5;j++){
            (function(j){
                $("#main .nav ul li").eq(j).removeClass("hover");
            })(j)  
        }
        $("#main .nav ul li").eq(i).addClass("hover");
        $("#main .list .scroll-box").css({"marginLeft":(1200*-i)+'px'});
        })
    })(i)  
}


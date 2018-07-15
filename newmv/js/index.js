
setTimeout(() => {
    $(".all-mv").each(function(){
        $(this).css({transition: 'background 500ms,box-shadow 500ms,transform 500ms'})
        $(this).hover(function(){
            $(this).css({transform:'scale(1.05,1.05) translateX(0)'})
        },function(){
            $(this).css({transform:'scale(1,1) translateX(0)'})
        })
    })
    $(".hot-mv").each(function(){
        $(this).css({transition: 'background 500ms,box-shadow 500ms,transform 500ms'})
        $(this).hover(function(){
            $(this).css({transform:'scale(1.05,1.05) translateX(0)'})
        },function(){
            $(this).css({transform:'scale(1,1) translateX(0)'})
        })
    })
    $(".high-mv").each(function(){
        $(this).css({transition: 'background 500ms,box-shadow 500ms,transform 500ms'})
        $(this).hover(function(){
            $(this).css({transform:'scale(1.05,1.05) translateX(0)'})
        },function(){
            $(this).css({transform:'scale(1,1) translateX(0)'})
        })
    })
}, 2000);



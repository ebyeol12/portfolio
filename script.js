$(function(){
    let slide = setInterval(()=>{
        $(".allbox").delay("2800");
        $(".allbox").animate({left: '-100%'},function(){
            $(".allbox").append($(".allbox .box:eq(0)")).css({
                left:'0'
            });
        });
    });
});


$("main .category .all_shop .img").on({
    mouseover: function(){
        $(this).find("img:last-of-type").stop().animate({opacity: "0"}, 100, "linear")
    },
    mouseout: function(){
        $(this).find("img:last-of-type").stop().animate({opacity: "1"}, 100, "linear")
    }
});

$("main .all_brand .img").on({
    mouseover: function(){
        $(this).find("img:last-of-type").stop().animate({opacity: "0"}, 100, "linear")
    },
    mouseout: function(){
        $(this).find("img:last-of-type").stop().animate({opacity: "1"}, 100, "linear")
    }
});

$("main .best .all_best .bestright .bestbtm .img").on({
    mouseover: function(){
        $(this).find("img:last-of-type").stop().animate({opacity: "0"}, 100, "linear")
    },
    mouseout: function(){
        $(this).find("img:last-of-type").stop().animate({opacity: "1"}, 100, "linear")
    }
});
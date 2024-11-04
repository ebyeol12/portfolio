
// 상품 변경
$(".allbox .box .img").on({
    mouseover: function(){
        $(this).find("img:last-of-type").stop().animate({opacity: "0"}, 100, "linear")
    },
    mouseout: function(){
        $(this).find("img:last-of-type").stop().animate({opacity: "1"}, 100, "linear")
    }
});
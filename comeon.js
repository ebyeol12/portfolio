//header
$(function(){
    $(".menu>li").on({
        mouseover:function(){
            $(".submenu",this).stop().slideDown();
        },
        mouseout:function(){
            $(".submenu",this).stop().slideUp();
        }
    });

    $(".ham").click(function(){
        $(".m_menu").stop().animate({right:'0px'})
    });
    $(".close_btn").click(function(){
        $(".m_menu").stop().animate({right:'-300px'})
    });


    $(".m_menu .close .close_menu > li > a").click(function(e) {
        e.preventDefault();
        
        // 모든 링크에서 'open' 클래스를 제거하고 서브메뉴를 닫음
        $(".m_menu .close .close_menu > li > a").removeClass('open');
        $(".m_menu .close .close_menu > li > ul").slideUp(500, 'linear'); // 모든 서브메뉴 닫기
        
        // 클릭한 메뉴에 'open' 클래스 추가하고 서브메뉴 열기
        if (!$(this).hasClass('open')) {
            $(this).addClass('open');
            $(this).next().slideDown(500, 'linear');
        } else {
            $(this).next().slideUp(500, 'linear');
        }
    });

});
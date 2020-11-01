$(function () { //JQuery 준비
   
    /* 메뉴 */
    $('.menu, .navi_bg').mouseenter(function(){
        $('.menu .menu_sec, .navi_bg').stop().slideDown(200);
    }).mouseleave(function(){
        $('.menu .menu_sec, .navi_bg').stop().slideUp(200);
    });
    
    
    
    //모바일 네비게이션 바 복제
    var naviClon = $('.menu').contents().clone();/* 메뉴 밑에 있는 ul 전부다 복제를 해서 기억해라 이뜻임*/
    var navi_list = $('<div id="sm_menu"></div>');
    navi_list.append(naviClon);
    navi_list.appendTo('#mb_navi');
    
    
    
    /* 모바일 메뉴 버튼 클릭시 모바일 메뉴 나타나기 */
      $('.mb_menu').click(function(){
          $(this).toggleClass('on');
          if($(this).hasClass('on')){
               $('#mb_navi, .mobile_bg').stop().animate({
                right:0
            },500); /*클릭 햇을때 0.5초가 걸린다는 뜻*/
            $(this).find('img').attr('src','http://goodpage.dothome.co.kr/SeMA/img/mobile_img/close.png');
              $('.gnb_wrap').css({position:'fixed'});
          }else{
             $('#mb_navi, .mobile_bg').stop().animate({
                right:'-100%'
            },500);
            $('#sm_menu > ul > li > .menu_sec').hide();
            $('#sm_menu > ul > li > span a').removeClass('selected'); /* 서브메뉴 눌렀던거 닫고 다시 열으면 눌렀던거를 초기화 한거임*/
              $(this).find('img').attr('src','http://goodpage.dothome.co.kr/SeMA/img/mobile_img/menu.png');
              $('.gnb_wrap').css({position:'static'});
          }
           
            
            
            return false;
        
        });
    
    $('.mobile_bg').click(function(){
         $('.mb_menu').removeClass('on');
             $('#mb_navi, .mobile_bg').stop().animate({
                right:'-100%'
            },500);
            $('#sm_menu > ul > li > .menu_sec').hide();
            $('#sm_menu > ul > li > span a').removeClass('selected'); /* 서브메뉴 눌렀던거 닫고 다시 열으면 눌렀던거를 초기화 한거임*/
             $('.mb_menu').find('img').attr('src','http://goodpage.dothome.co.kr/SeMA/img/mobile_img/menu.png');
        
        
        })
        
       
        
        
        /* 모바일 각 메뉴 클릭시 서브메뉴 펼쳐지기 */
        $('#sm_menu > ul > li >a').click(function(){
            $(this).toggleClass('selected'); /* toggleClass는 열리고 닫혀야 되니깐 이걸 쓴거임*/
            
            $('#sm_menu > ul > li >  a').not(this).removeClass('selected');
       
            
            
            $(this).find('+div').slideToggle('fast'); /* 내가 클릭한 a 바로앞에 부모(span)와 형제인 div 를 닫아라*/
        
            $('#sm_menu > ul > li >a').not(this).find('+div').slideUp('fast');
            /*내가 클릭한 a를 제외한 다른 div는 닫혀라! 한마디로 대 메뉴를 클릭시 다른 메뉴들은 닫힘*/
         });
        
        
        
        /* PC화면 사이즈에서 모바일 메뉴 사라지고 초기화하기 */
        $(window).resize(function(){
           if($(this).width() > 800){
               $('#mb_navi').css('right','-100%');
               $('#sm_menu > ul > li > .menu_sec').hide();
               $('#sm_menu > ul > li > span a').removeClass('selected');
               $('.mobile_bg').css('right','-100%');
               $('.mb_menu').removeClass('on');
               $('.mb_menu').find('img').attr('src','http://goodpage.dothome.co.kr/SeMA/img/mobile_img/menu.png');
           }
        });
        


}); //JQuery 종료
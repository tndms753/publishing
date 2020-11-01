$(function(){ // JQuery 준비
    
   var naviClon = $('#navi').contents().clone();
    var navi_list = $('<div id="menu"></div>');
    navi_list.append(naviClon);
    navi_list.appendTo('#mb_navi')
    
   /* 모바일 메뉴 버튼 클릭시 모바일 메뉴 나타나기 */
      $('.mb_menu').click(function(){
          
               $('#mb_navi, .mobile_bg').stop().animate({
                right:0
            },500); /*클릭 햇을때 0.5초가 걸린다는 뜻*/
         
            
            return false;
        
        });
  
    $('.close').click(function(){
        $('#mb_navi, .mobile_bg').stop().animate({
                right:'-100%'
            },500);
            $('#menu > ul > li > .navi_sec').hide();
            $('#menu > ul > li > span a').removeClass('selected'); /* 서브메뉴 눌렀던거 닫고 다시 열으면 눌렀던거를 초기화 한거임*/
    });
                      
         /* 모바일 각 메뉴 클릭시 서브메뉴 펼쳐지기 */
        $('#menu > ul > li >a').click(function(){
            $(this).toggleClass('selected'); /* toggleClass는 열리고 닫혀야 되니깐 이걸 쓴거임*/
            
            $('#menu > ul > li >  a').not(this).removeClass('selected');
       
            
            
            $(this).find('+div').slideToggle('fast'); /* 내가 클릭한 a 바로앞에 부모(span)와 형제인 div 를 닫아라*/
        
            $('#menu > ul > li >a').not(this).find('+div').slideUp('fast');
            /*내가 클릭한 a를 제외한 다른 div는 닫혀라! 한마디로 대 메뉴를 클릭시 다른 메뉴들은 닫힘*/
         });
    
    
 }); // JQuery 종료
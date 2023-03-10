$(function(){

    //section 높이    
    var ht = $(window).height();      
     $("section").height(ht);      
     $(window).on("resize",function(){
        var ht = $(window).height();   
        $("section").height(ht);
    });
    
    
    //header_menu fixed
    var nav = $('.header_menu');
     var navoffset = $('.header_menu').offset();      
     $(window).scroll(function () {
        if ($(this).scrollTop() >= navoffset.top) {  
          nav.css('position','fixed').css('top',0).css('background','rgba(0,0,0,0.5');
          $(".logo2").fadeIn(300); 
        }else {
          nav.css('position','absolute').css('top',75).css('background','transparent');
          $(".logo2").fadeOut(300); 
        }
     });
    
    
    //menu_btn - active
    $(".menu_btn").click(function(){
      $("p.x1").toggleClass("active");
      $("p.x2").toggleClass("active");
      $("p.x3").toggleClass("active");
      $(".menu_btn_back").toggleClass("active");
      $(".menu2").fadeToggle();
    }); 
    
    /* 스크롤 부드럽게*/
     $(document).ready(function(){
       $('nav a, .dott a').click(function(e){
          $.scrollTo(this.hash || 0, 300);
          e.preventDefault();
       });
    });
    
    /* menu li on */
    $(window).on("scroll",function(){      
        var ht = $(window).height();    
        var scroll = $(window).scrollTop();
                    
        for(var i=0; i<6;i++){
            if(scroll>=ht*i && scroll< ht*(i+1)){
                $(".gnb li").removeClass();
                $(".gnb li").eq(i).addClass("on");
            };
        }                       
    });
    
    /* dott li on */
    $(window).on("scroll",function(){      
        var ht = $(window).height();    
        var scroll = $(window).scrollTop();
                    
        for(var i=0; i<6;i++){
            if(scroll>=ht*i && scroll< ht*(i+1)){
                $(".dott li").removeClass();
                $(".dott li").eq(i).addClass("on");
            };
        }                        
    });
    
    //section위에서 마우스 휠을 움직이면
    $("section").on("mousewheel",function(event,delta){                   
      if (delta > 0) {           
       var prev = $(this).prev().offset().top;         
        $("html,body").stop().animate({"scrollTop":prev},700);                    
        }else if (delta < 0) {  
    
       var next = $(this).next().offset().top;          
        $("html,body").stop().animate({"scrollTop":next},700);                                         
       }          
    });
    
    
    /*page4 slide*/
    jQuery(document).ready(function ($) {
    
    var jssor_1_options = {
      $Idle: 2000,
      $SlideEasing: $Jease$.$InOutSine,
      $DragOrientation: 3,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }
    };
    
    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
    
    //make sure to clear margin of the slider container element
    jssor_1_slider.$Elmt.style.margin = "";
    
    
    var MAX_WIDTH = 3000;
    var MAX_HEIGHT = 3000;
    var MAX_BLEEDING = 1;
    
    function ScaleSlider() {
        var containerElement = jssor_1_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;
    
        if (containerWidth) {
            var originalWidth = jssor_1_slider.$OriginalWidth();
            var originalHeight = jssor_1_slider.$OriginalHeight();
    
            var containerHeight = containerElement.clientHeight || originalHeight;
    
            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
            var expectedHeight = Math.min(MAX_HEIGHT || containerHeight, containerHeight);
    
            //scale the slider to expected size
            jssor_1_slider.$ScaleSize(expectedWidth, expectedHeight, MAX_BLEEDING);
    
            //position slider at center in vertical orientation
            jssor_1_slider.$Elmt.style.top = ((containerHeight - expectedHeight) / 2) + "px";
    
            //position slider at center in horizontal orientation
            jssor_1_slider.$Elmt.style.left = ((containerWidth - expectedWidth) / 2) + "px";
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    function OnOrientationChange() {
        ScaleSlider();
        window.setTimeout(ScaleSlider, 800);
    }
    
    ScaleSlider();
    
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", OnOrientationChange);
    /*#endregion responsive code end*/
    });
    
       
    }); //function end    


    $(function(){
    
      var typingBool = false; 
      var typingIdx=0; 
      var liIndex = 0;
      var liLength = $(".typing-txt>ul>li").length;
      
    
      var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
      typingTxt=typingTxt.split(""); 
      if(typingBool==false){ 
          typingBool=true; 
          var tyInt = setInterval(typing,100); // 반복동작 
      } 
           
      function typing(){ 
        if(typingIdx<typingTxt.length){ 
           $(".typing").append(typingTxt[typingIdx]);
           typingIdx++; 
         } else{ 
           if(liIndex>=liLength-1){
             liIndex=0;
           }else{
             liIndex++; 
           }
    
              typingIdx=0;
              typingBool = false; 
              typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
             
    
               clearInterval(tyInt);
               setTimeout(function(){
                  $(".typing").html('');
                 tyInt = setInterval(typing,100);
               },1000);
          } 
      } 	
        
      }); //function end
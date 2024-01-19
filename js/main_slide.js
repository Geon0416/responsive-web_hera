$(document).ready(function(){

    const l_btn = $('.left_btn'); // 좌측버튼
    const r_btn = $('.right_btn'); //우측버튼
    const c_btn = $('.ctrl_btn div');//콘트롤 버튼

    let main_slide_img = $('#main_slide li');  //슬라이드 이미지

    let i = $('#main_slide li .ctrl_btn div').index(); //0값

    function fadeInOut(){
        // console.log('시간함수호출');
        // alert('아무거나');
        main_slide_img.fadeOut();
        if(i==4){
            i=0;
        }else{
            i++;
        }
        $('.ctrl_btn div').removeClass('on');
        $('.ctrl_btn div').eq(i).addClass('on');
        main_slide_img.eq(i).stop().fadeIn();
        console.log(i);
    }

    function fadeInOut2(){
        // alert('아무거나1');
        main_slide_img.fadeOut();
        if(i==0){
            i=4;
        }else{
            i--;
        }
        $('.ctrl_btn div').removeClass('on');
        $('.ctrl_btn div').eq(i).addClass('on');
        main_slide_img.eq(i).stop().fadeIn();
        console.log(i);
    }

    let Timer = setInterval(fadeInOut,3000);

    l_btn.click(function(){
        fadeInOut2();
    });
    r_btn.click(function(){
        fadeInOut();
    });
    
    $('.left_btn,.right_btn').hover(function(){
        clearInterval(Timer);
    },function(){
        Timer = setInterval(fadeInOut,3000)
    });

    let w_size;

    // 윈도우창의 가로 스크롤값에 따른 이미지 변경
    $(window).resize(function(){
        w_size = $(this).width();
        // console.log(w_size);

        if(w_size<=1024){
            // console.log('태블릿, 모바일서식');
            $('#main_slide .slide1 img').attr('src','./images/main_slide/main_slide_m_img1.png');
            $('#main_slide .slide2 img').attr('src','./images/main_slide/main_slide_m_img2.png');
            $('#main_slide .slide3 img').attr('src','./images/main_slide/main_slide_m_img3.png');
            $('#main_slide .slide4 img').attr('src','./images/main_slide/main_slide_m_img4.jpg');
            $('#main_slide .slide5 img').attr('src','./images/main_slide/main_slide_m_img5.jpg');
        }else{
            $('.slide1 img').attr('src','./images/main_slide/main_slide_img1.jpg');
            // console.log('pc서식');
        }

    });

    // 기기 기종의 너비에 따른 메인 슬라이드 이미지 변경 서식
    w_size = $(this).width();
        // console.log(w_size);

        if(w_size<=1024){
            // console.log('태블릿, 모바일서식');
            $('#main_slide .slide1 img').attr('src','./images/main_slide/main_slide_m_img1.png');
            $('#main_slide .slide2 img').attr('src','./images/main_slide/main_slide_m_img2.png');
            $('#main_slide .slide3 img').attr('src','./images/main_slide/main_slide_m_img3.png');
            $('#main_slide .slide4 img').attr('src','./images/main_slide/main_slide_m_img4.jpg');
            $('#main_slide .slide5 img').attr('src','./images/main_slide/main_slide_m_img5.jpg');
        }else{
            $('.slide1 img').attr('src','./images/main_slide/main_slide_img1.jpg');
            // console.log('pc서식');
        }

});
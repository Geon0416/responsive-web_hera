$(document).ready(function(){

    let popupLink = $('#search_btn');
    let popup =$('#search_popup');
    let popupCloseBtn = popup.find('#search_close_btn')
    
    popupLink.click(function(e){
        e.preventDefault();
        popup.addClass('search_active');
    });
    
    popupCloseBtn.click(function(){
        popup.removeClass('search_active');
    });
});

// 검색창 인기상품 슬라이드 서식
const slide = document.querySelector('.famous_slide');
const slide_img = document.querySelectorAll('.famous_slide > li');
const l_btn = document.getElementById('famous_l_btn');
const r_btn = document.getElementById('famous_r_btn');

const img_n = slide_img.length;
console.log(img_n);

const img_w = 50;
const m = 1;
const s_count = 2;

let count = 0;

slide.style.width = (img_w+m)*img_n+m+'%';

//왼쪽으로 움직이는 슬라이드 함수
function f_mslide(n){
    slide.style.left = (img_w+m)*-n+'%';
    count=n;
    console.log(count);
    console.log(slide.style.left);
}
l_btn.addEventListener('click',function(){
    if(count>0){
        f_mslide(count-1);
    }else{
        f_mslide(img_n-s_count);
    }
});
// 오른쪽으로 움직이는 슬라이드 함수
r_btn.addEventListener('click',function(){
    if(count < img_n-s_count){
        f_mslide(count+1);
    }else{
        f_mslide(0);
    }
});


//  화면 크기에 따른 이미지 변경


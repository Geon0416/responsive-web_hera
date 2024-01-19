
$(document).ready(function(){

    let popupLink = $('#login_btn');
    let popup =$('#login_popup');
    let popupCloseBtn = popup.find('#login_close_btn')
    
    popupLink.click(function(e){
        e.preventDefault();
        popup.addClass('login_active');
    });
    
    popupCloseBtn.click(function(){
        popup.removeClass('login_active');
    });
});
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20){
            $('.navbar') .addClass("sticky");

        }else{
            $('.navbar') .removeClass("sticky");
    }

});

//toggle meanu/navbar script hahjdhashdoiyewhdksnwlicdhwil  
$('.menu-btn') .Click(function(){
    $('.navbar.menu') .toggleClass("active");
    $('.menu-btn i') .toggleClass("active");

});
});

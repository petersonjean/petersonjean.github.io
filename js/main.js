//animating the menu icon button on mobile view
function animationBtnMenu(bar){
 bar.classList.toggle("animation-btn-menu");
$(".nav").toggle("show",function(){

});
}

$(document).ready(function(){
  //active the current menu item in nav menu
  $(".menu-item a").click(function(){
                    $(".active").removeClass("active");
                    $(this).closest('li').addClass("active");

                    if( $(window).width() < 480){
                      $(".nav").hide();
                      $(".menu-mobile-icon").removeClass('animation-btn-menu');
                    }
                           });


  //changing menu depepnding on screen size
  if( $(window).width() > 480){
    $(".nav").addClass('nav-pills');
  }else{
    $(".nav").hide();
  }
  $(window).on('resize', function() {
    if( $(window).width() > 480){
      $(".nav").addClass('nav-pills');
        $(".nav").show();
    }else{
        $(".nav").removeClass('nav-pills');
        $(".nav").hide();
    }
 });



});

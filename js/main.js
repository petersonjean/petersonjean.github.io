 
  $(".menu-item a").click(function(){ 
                   $(".active").removeClass("active");   
                   $(this).closest('li').addClass("active");
                          });
 
 

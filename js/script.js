central('My Nutanix');

$(window).scroll(function() {
       wS = $(this).scrollTop();
   if (wS > 60){
      $('header').addClass('scroll');
   }
   else{
     $('header').removeClass('scroll');
   }
});

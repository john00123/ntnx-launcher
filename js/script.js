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

$('.card-container').hover(function(){
  $('h3', this).toggleClass('.card-title2')
});

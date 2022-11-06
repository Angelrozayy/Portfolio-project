$(() => {
    
    $(document).ready(() => {
        // grab the initial top of the navigation 
           const stickyNavTop = $('#nav-bar').offset().top;
           
           // our function that decides wether the navigation bar should have "fixed" css position or not.
           const stickyNav = () => {
            const scrollTop = $(window).scrollTop(); // our current vertical position from the top
                 
            // if we've scrolled more than the navigation, change its position to fixed to stick to top,
            // otherwise change it back to relative
            if (scrollTop > stickyNavTop) { 
                $('#nav-bar').addClass('sticky');
            } else {
                $('#nav-bar').removeClass('sticky'); 
            }
        };

        stickyNav();
        // and run it again every time you scroll
        $(window).scroll(() => {
            stickyNav();
        });

});
//stack overflow helped
jQuery(document).ready(($) => {

    let interval;
    interval = setInterval(() => {
      moveRight();
    }, 3000);
  
    $('._slider').mouseover(() => {
      clearInterval(interval);
    });
    
    $('._slider').mouseleave(() => {
      interval = setInterval(() => {
        moveRight();
        }, 3000);
    });
    
      let slideCount = $('._slider ul li').length;
      let slideWidth = $('._slider ul li').width();
      let slideHeight = $('._slider ul li').height();
      let sliderUlWidth = slideCount * slideWidth;
      
      $('._slider').css({ width: slideWidth, height: slideHeight });
      
      $('._slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('._slider ul li:last-child').prependTo('._slider ul');
  
      const moveLeft = () => {
          $('._slider ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('._slider ul li:last-child').prependTo('._slider ul');
              $('._slider ul').css('left', '');
          });
      };
  
      const moveRight = () => {
          $('._slider ul').animate({
              left: - slideWidth
          }, 200, () => {
              $('._slider ul li:first-child').appendTo('._slider ul');
              $('._slider ul').css('left', '');
          });
      };
  
      $('._slider_prev').click(() => {
          moveLeft();
          return false;
      });
  
      $('._slider_next').click(() => {
          moveRight();
          return false;
      });
  
  });    
  
  
    

});





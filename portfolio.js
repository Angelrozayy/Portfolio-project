$(() => {
    
    $(document).ready(function() {
        // grab the initial top of the navigation 
           const stickyNavTop = $('#nav-bar').offset().top;
           
           // our function that decides wether the navigation bar should have "fixed" css position or not.
           const stickyNav = function(){
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
        $(window).scroll(function() {
            stickyNav();
        });
    });
   

    
})





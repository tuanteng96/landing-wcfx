$(document).ready(function(){

  $('.btn-menu').click(function(e) {
      $('body').toggleClass('active-menu');
      e.stopPropagation();
  });

  $('body').click(function(e) {
        if (!$(e.target).is('#menu-mobile, #menu-mobile *')) {
            $('body').removeClass('active-menu');
        }
    });



  //
  //
  
  $('.owltreeChart').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay: 3000,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:4
      }
    }
  })

	/* Toggle Video Modal
  -----------------------------------------*/
	function toggle_video_modal() {
	    
	    // Click on video thumbnail or link
	    $(".js-trigger-video-modal").on("click", function(e){
          
          // prevent default behavior for a-tags, button tags, etc. 
	        e.preventDefault();
          
          // Add class to the body to visually reveal the modal
          $("body").addClass("show-video-modal noscroll");
	    
      });

	    // Close and Reset the Video Modal
      function close_video_modal() {
        
        event.preventDefault();

        // re-hide the video modal
        $("body").removeClass("show-video-modal noscroll");

        // reset the source attribute for the iframe template, kills the video
        
      }
      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-video-modal, .video-modal .overlay', function(event) {
	        
          // call the close and reset function
          close_video_modal();
	        
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            
            // call the close and reset function
            close_video_modal();
            
          }
      });
	}
	toggle_video_modal();

  // Slide Grally
  $('.owlGallery').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    autoplay: true,
    responsive:{
      0:{
        items: 1
      },
      600:{
        items: 1
      },
      1000:{
        items: 1
      }
    }
  })

});
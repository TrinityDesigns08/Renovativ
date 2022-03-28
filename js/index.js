



// $(document).ready(function(){
    
//   // Menu Function
 
  
//   // Window scroll function
  
  
// });
(function () {
  $('.nav-button').click(function(){ 
    $('.nav-button, .side-nav, .nav-header, .nav-options').toggleClass('nav-open'); 
    return false;
});

// Food Menu function
$('.nav-link.the-menu').click(function(){
    $('.nav-button, .side-nav, .nav-header, .nav-options').removeClass('nav-open');
    $('.menu-container').addClass('displayed');
    return false;
});

// closing the menu-overlay
$('.close, .menu-container').click(function(){ $('.menu-container').removeClass('displayed'); return false;});
// preventing clicks on the menu closing it for now because there is nothing inside yet.
$('.tab.menu-tab').click(function(){ return false; }); 
    "use strict";
  
    var car = function () {
      $(".owl-carousel1").owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        autoplay:true,
      autoplayTimeout:2800,
      autoplayHoverPause:true,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          680: {
            items: 2,
            nav: false,
            loop: true,
          },
          1000: {
            items: 3,
            nav: true
          }
        }
      });
    };
  
    (function ($) {
      car();
    })(jQuery);
  })();

  jQuery(document).ready(function(){
    $(".dropdown").hover(
        function() { $('.dropdown-menu', this).fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).fadeOut("fast");
    });
});


$(document).ready(function(){
  function adjustNav() {
    var winWidth = $(window).width(),
      dropdown = $('.dropdown'),
      dropdownMenu = $('.dropdown-menu');
    
    if (winWidth >= 768) {
      dropdown.on('mouseenter', function() {
        $(this).addClass('show')
          .children(dropdownMenu).addClass('show');
      });
      
      dropdown.on('mouseleave', function() {
        $(this).removeClass('show')
          .children(dropdownMenu).removeClass('show');
      });
    } else {
      dropdown.off('mouseenter mouseleave');
    }
  }
  
  $(window).on('resize', adjustNav);
  
  adjustNav();
  });






// gsap.registerPlugin(SrollTriger);

$(document).ready(function(){
  let tl = gsap.timeline(
    {
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: ".team_div_2",
        // pin: true,   // pin the trigger element while active
        start: "top bottom", // when the top of the trigger hits the top of the viewport
        end: "300", // end after scrolling 500px beyond the start
        scrub: 1,
        duration: {min: 0.2, max: 3}, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // snap: {
        //   snapTo: "labels", // snap to the closest label in the timeline
        //   duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        //   ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
        // }
      }
    }
  );
  
  tl
  .from(".vativ_l_1", {y:300, duration:2})
  .addLabel("end")
  .from("team_footer", {y:-300, duration:2})
  // .from(".team_footer", {y:-200, duration:3})
  
  
  // .to(".vativ_l_1", {y:, duration:1})
  
  // $(document).ready(function() {
  
  //   $(".twd_item a").mouseover(function () {
  //       $(".twd_item a img").css("display", "none"); // hide all product images
  //       $(this).find("img").css("display", "inline-block").css("visibility", "visible"); // show current hover image
  //   })
  //   $(".twd_item a").mouseout(function () {
  //       $(".twd_item a img").css("display", "none"); // hide all product images
  //   })
  // });
});

/*
* 
* Credits to https://css-tricks.com/long-dropdowns-solution/
*
*/

var maxHeight = 500;

$(function(){

    $(".dropdown_side > li").hover(function() {
    
         var $container = $(this),
             $list = $container.find("ul"),
             $anchor = $container.find("a"),
             height = $list.height() * 1.1,       // make sure there is enough room at the bottom
             multiplier = height / maxHeight;     // needs to move faster if list is taller
        
        // need to save height here so it can revert on mouseout            
        $container.data("origHeight", $container.height());
        
        // so it can retain it's rollover color all the while the dropdown is open
        $anchor.addClass("hover");
        
        // make sure dropdown appears directly below parent list item    
        $list
            .show()
            .css({
                paddingTop: $container.data("origHeight")
            });
        
        // don't do any animation if list shorter than max
        if (multiplier > 1) {
            $container
                .css({
                    height: maxHeight,
                    overflow: "hidden"
                })
                .mousemove(function(e) {
                    var offset = $container.offset();
                    var relativeY = ((e.pageY - offset.top) * multiplier) - ($container.data("origHeight") * multiplier);
                    if (relativeY > $container.data("origHeight")) {
                        $list.css("top", -relativeY + $container.data("origHeight"));
                    };
                });
        }
        
    }, function() {
    
        var $el = $(this);
        
        // put things back to normal
        $el
            .height($(this).data("origHeight"))
            .find("ul")
            .css({ top: 0 })
            .hide()
            .end()
            .find("a")
            .removeClass("hover");
    
    });  
    
});


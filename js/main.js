/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

function initMap() {
    var mapOptions = {
      center: { lat: 11.931948, lng: 75.573752 }, // Set the coordinates for the map center
      zoom: 12 // Set the initial zoom level
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }


/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){ 
    if (videoFile.paused){
        // Play video
        videoFile.play()
        // We change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else {
        // Pause video
        videoFile.pause(); 
        // We change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')

    }
}
//videoButton.addEventListener('click', playPause)

function finalVideo(){
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// ended, when the video ends
//videoFile.addEventListener('ended', finalVideo)

  $(document).ready(function(){
    $('#gallery').owlCarousel({
      nav: true, // Enable navigation arrows
      dots: true, // Enable dots navigation
      autoplay:true,
      loop:true,
      navText: [
        '<i class="ri-arrow-left-s-line" style="color: #787878;font-size: 2rem; background-color: #fff;"></i>', // Remix icon for previous button
        '<i class="ri-arrow-right-s-line" style="color: #787878;font-size: 2rem; background-color: #fff;"></i>' // Remix icon for next button
      ],
      responsive: {
        0: {
          items: 1 // Number of items to show at different screen sizes
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  });
  $(document).ready(function(){
    $('#testimonial1').owlCarousel({
      nav: true, // Enable navigation arrows
      dots: true, // Enable dots navigation
      autoplay:true,
      loop:true,
    //   navText: [
    //     '<i class="ri-arrow-left-s-line" style="color: #787878;font-size: 2rem; background-color: #fff;"></i>', // Remix icon for previous button
    //     '<i class="ri-arrow-right-s-line" style="color: #787878;font-size: 2rem; background-color: #fff;"></i>' // Remix icon for next button
    //   ],
      responsive: {
        0: {
          items: 1 // Number of items to show at different screen sizes
        },
        600: {
          items: 2
        },
        1000: {
          items: 2
        }
      }
    });
  });
  $(document).ready(function(){
    $('#plan').owlCarousel({
      nav: true, // Enable navigation arrows
      dots: true, // Enable dots navigation
      autoplay:true,
      loop:true,
    //   navText: [
    //     '<i class="ri-arrow-left-s-line" style="color: #787878;font-size: 2rem; background-color: #fff;"></i>', // Remix icon for previous button
    //     '<i class="ri-arrow-right-s-line" style="color: #787878;font-size: 2rem; background-color: #fff;"></i>' // Remix icon for next button
    //   ],
      responsive: {
        0: {
          items: 1 // Number of items to show at different screen sizes
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  });
  $(document).ready(function(){
    $('#buses').owlCarousel({
      nav: true, // Enable navigation arrows
      dots: true, // Enable dots navigation
      autoplay:true,
      loop:true,
      // navText: [
      //   '<i class="ri-arrow-left-s-line" style="color: #787878;font-size: 2rem; background-color: #fff;"></i>', // Remix icon for previous button
      //   '<i class="ri-arrow-right-s-line" style="color: #787878;font-size: 2rem; background-color: #fff;"></i>' // Remix icon for next button
      // ],
      responsive: {
        0: {
          items: 1 // Number of items to show at different screen sizes
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  });

  $(document).ready(function(){
    $('#review').owlCarousel({
      nav: false, // Enable navigation arrows
      dots: true, // Enable dots navigation
      autoplay:true,
      loop:true,
      // navText: [
      //   '<i class="ri-arrow-left-s-line" style="color: #787878;font-size: 2rem; background-color: #fff;"></i>', // Remix icon for previous button
      //   '<i class="ri-arrow-right-s-line" style="color: #787878;font-size: 2rem; background-color: #fff;"></i>' // Remix icon for next button
      // ],
      responsive: {
        0: {
          items: 1 // Number of items to show at different screen sizes
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  });
  $(document).ready(function(){
    $('#review').owlCarousel({
      nav: false, // Enable navigation arrows
      dots: true, // Enable dots navigation
      autoplay:true,
      loop:true,
      // navText: [
      //   '<i class="ri-arrow-left-s-line" style="color: #787878;font-size: 2rem; background-color: #fff;"></i>', // Remix icon for previous button
      //   '<i class="ri-arrow-right-s-line" style="color: #787878;font-size: 2rem; background-color: #fff;"></i>' // Remix icon for next button
      // ],
      responsive: {
        0: {
          items: 1 // Number of items to show at different screen sizes
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  });
  $(document).ready(function(){
    $('#pkgs').owlCarousel({
      nav: false, // Enable navigation arrows
      dots: true, // Enable dots navigation
      autoplay:true,
      loop:true,
      navText: [
        '<i class="ri-arrow-left-s-line" style="color: #787878;font-size: 2rem; background-color: #fff;"></i>', // Remix icon for previous button
        '<i class="ri-arrow-right-s-line" style="color: #787878;font-size: 2rem; background-color: #fff;"></i>' // Remix icon for next button
      ],
      responsive: {
        0: {
          items: 2 // Number of items to show at different screen sizes
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    });
  });
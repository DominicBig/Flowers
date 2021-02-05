$(document).ready(function(){
  const flowersSlider = new Swiper('.flowers-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

   // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      
    },
    
    // when window width is >= 992px
    992: {
      slidesPerView: 6,
      
    }
  }

});


const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

$("#review-1").on('click', function() {

  $.fancybox.open([
    {
      src  : 'https://source.unsplash.com/photos/bq6Gd7pQznU',
      opts : {
        caption : 'First caption',
        thumb   : 'https://source.unsplash.com/photos/bq6Gd7pQznU'
      }
    },
     {
      src  : 'https://source.unsplash.com/photos/SUa1Y8Md608',
      opts : {
        caption : 'Second caption',
        thumb   : 'https://source.unsplash.com/photos/SUaY8Md608'
      }
    },
     {
      src  : 'https://source.unsplash.com/photos/SUa1Y8Md608',
      opts : {
        caption : 'Second caption',
        thumb   : 'https://source.unsplash.com/photos/SUaY8Md608'
      }
    },
    {
      src  : 'https://source.unsplash.com/0JYgd2QuMf/1500x1000',
      opts : {
        caption : 'Third caption',
        thumb   : 'https://source.unsplash.com/0JYgd2Qufw/240x160'
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});




});
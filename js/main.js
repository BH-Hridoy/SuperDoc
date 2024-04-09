$(document).ready(function(){
    $('.doctor-slider-wrapper').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow : '.prev-btn-1',
        nextArrow : '.next-btn-1',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      $('.doctor-slider-wrapper-2').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow : '.prev-btn-2',
        nextArrow : '.next-btn-2',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      $('.specialties-slider-wrapper').slick({
        slidesToShow: 5,
        slidesToScroll: 3,
        dots : true,
        appendDots : '.slider-dots',
        prevArrow : '.sp-slide-1',
        nextArrow : '.sp-slide-2',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
})

// Mobile Menu 
function openMenu() {
  document.getElementById('navbar').style.left = "0";
}
function closeMenu() {
  document.getElementById('navbar').style.left = "-100%";
}
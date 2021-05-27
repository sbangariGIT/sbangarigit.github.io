$(document).ready(
    function(){
        $(window).scroll(function(){
            if(this.scrollY > 40){
                $('.navbar').addClass('sticky');
            }else{
                $('.navbar').removeClass('sticky');
            }
        })
    }
);
function myFunction(x) {
    x.classList.toggle("change");
    $('.navbar .menu').toggleClass('active');
  }
//typing script
var typed = new Typed(".typing",{
    strings: ["an entrepreneur","a programmer", "an app developer"],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true,
});

$('.carousel').owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 1000,
    autoplayHoverPause: true,
    dots: true,
    nav: true,
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items: 2,
        },
        1000:{
            items: 3,
        }
    }
    
});
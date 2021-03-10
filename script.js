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
    strings: ["a Programmer", "an Entrepreneur", "a Flutter developer","a clown"],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true,
});
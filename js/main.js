
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
});
//nav bar
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    console.log(document.documentElement.scrollTop)
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}
//   owl carousel code 



// navbar hide
let navlink=document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse.collapse")
navlink.forEach(function(e){
 e.addEventListener("click",function(){
    navCollapse.classList.remove("show")
 })
})

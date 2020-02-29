var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 20,
    mousewheel: true,
    // loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    on: {
        slideChangeTransitionStart:function(){
            console.log(this.realIndex);
            if(this.realIndex == 0) {
                $secondTitle.classList.remove("second-slide-animation");
                $thirdTitle.classList.remove("third-slide-animation");
                $fourthTitle.classList.remove("fourth-slide-animation");
                $fifthTitle.classList.remove("fifth-slide-animation");
                $sixthTitle.classList.remove("sixth-slide-animation");
                $seventhTitle.classList.remove("seventh-slide-animation");
                $eighthTitle.classList.remove("eight-slide-animation");
                $ninethTitle.classList.remove("nineth-slide-animation");
            }
            if(this.realIndex == 1) {
                $secondTitle.classList.add("second-slide-animation");
                $thirdTitle.classList.remove("third-slide-animation");
                $fourthTitle.classList.remove("fourth-slide-animation");
                $fifthTitle.classList.remove("fifth-slide-animation");
                $sixthTitle.classList.remove("sixth-slide-animation");
                $seventhTitle.classList.remove("seventh-slide-animation");
                $eighthTitle.classList.remove("eight-slide-animation");
                $ninethTitle.classList.remove("nineth-slide-animation");
            }
            if(this.realIndex == 2) {
                $thirdTitle.classList.add("third-slide-animation");
                $secondTitle.classList.remove("second-slide-animation");
                $fourthTitle.classList.remove("fourth-slide-animation");
                $fifthTitle.classList.remove("fifth-slide-animation");
                $sixthTitle.classList.remove("sixth-slide-animation");
                $seventhTitle.classList.remove("seventh-slide-animation");
                $eighthTitle.classList.remove("eight-slide-animation");
                $ninethTitle.classList.remove("nineth-slide-animation");
            }
            if(this.realIndex == 3) {
                $fourthTitle.classList.add("fourth-slide-animation");
                $secondTitle.classList.remove("second-slide-animation");
                $thirdTitle.classList.remove("third-slide-animation");
                $fifthTitle.classList.remove("fifth-slide-animation");
                $sixthTitle.classList.remove("sixth-slide-animation");
                $seventhTitle.classList.remove("seventh-slide-animation");
                $eighthTitle.classList.remove("eight-slide-animation");
                $ninethTitle.classList.remove("nineth-slide-animation");
            }
            if(this.realIndex == 4) {
                animateYears("servYears", 0, 8, 4000);
                $fifthTitle.classList.add("fifth-slide-animation");
                $secondTitle.classList.remove("second-slide-animation");
                $thirdTitle.classList.remove("third-slide-animation");
                $fourthTitle.classList.remove("fourth-slide-animation");
                $sixthTitle.classList.remove("sixth-slide-animation");
                $seventhTitle.classList.remove("seventh-slide-animation");
                $eighthTitle.classList.remove("eight-slide-animation");
                $ninethTitle.classList.remove("nineth-slide-animation");
            }
            if(this.realIndex == 5) {
                $sixthTitle.classList.add("sixth-slide-animation");
                $secondTitle.classList.remove("second-slide-animation");
                $thirdTitle.classList.remove("third-slide-animation");
                $fourthTitle.classList.remove("fourth-slide-animation");
                $fifthTitle.classList.remove("fifth-slide-animation");
                $seventhTitle.classList.remove("seventh-slide-animation");
                $eighthTitle.classList.remove("eight-slide-animation");
                $ninethTitle.classList.remove("nineth-slide-animation");
            }
            if(this.realIndex == 6) {
                $seventhTitle.classList.add("seventh-slide-animation");
                $secondTitle.classList.remove("second-slide-animation");
                $thirdTitle.classList.remove("third-slide-animation");
                $fourthTitle.classList.remove("fourth-slide-animation");
                $fifthTitle.classList.remove("fifth-slide-animation");
                $sixthTitle.classList.remove("sixth-slide-animation");
                $eighthTitle.classList.remove("eighth-slide-animation");
                $ninethTitle.classList.remove("nineth-slide-animation");
            }
            if(this.realIndex == 7) {
                $eighthTitle.classList.add("eighth-slide-animation");
                $secondTitle.classList.remove("second-slide-animation");
                $thirdTitle.classList.remove("third-slide-animation");
                $fourthTitle.classList.remove("fourth-slide-animation");
                $fifthTitle.classList.remove("fifth-slide-animation");
                $sixthTitle.classList.remove("sixth-slide-animation");
                $seventhTitle.classList.remove("seventh-slide-animation");
                $ninethTitle.classList.remove("nineth-slide-animation");
            }
            if(this.realIndex == 8) {
                $ninethTitle.classList.add("nineth-slide-animation");
                $secondTitle.classList.remove("second-slide-animation");
                $thirdTitle.classList.remove("third-slide-animation");
                $fourthTitle.classList.remove("fourth-slide-animation");
                $fifthTitle.classList.remove("fifth-slide-animation");
                $sixthTitle.classList.remove("sixth-slide-animation");
                $seventhTitle.classList.remove("seventh-slide-animation");
                $eighthTitle.classList.remove("eighth-slide-animation");
            }
            if(this.realIndex == 9) {
                $secondTitle.classList.remove("second-slide-animation");
                $thirdTitle.classList.remove("third-slide-animation");
                $fourthTitle.classList.remove("fourth-slide-animation");
                $fifthTitle.classList.remove("fifth-slide-animation");
                $sixthTitle.classList.remove("sixth-slide-animation");
                $seventhTitle.classList.remove("seventh-slide-animation");
                $eighthTitle.classList.remove("eighth-slide-animation");
                $ninethTitle.classList.remove("nineth-slide-animation");
            }
        }
    }
});

var onloadCallback = function() {
    alert("grecaptcha is ready!");
};

$(document).ready(function() {
    
    /* if(window.screen.width > 720 ){
        var prevElem = document.getElementById('control-prev');
        var prosElem = document.getElementById('control-next');
        prevElem.remove();
        prosElem.remove();
        $('#carousel-resp-example').carousel({
            interval: 999999999
        });
    } */

    $(window).resize(function() {
        //resize just happened, pixels changed
    });
    
});

function animateYears(id, start, end, duration) {
    var range = end + start;
    var current = start;
    var increment = end > start ? 1 : +1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

const $secondTitle = document.getElementById('second-title');
const $thirdTitle = document.getElementById('third-title');
const $fourthTitle = document.getElementById('fourth-title');
const $fifthTitle = document.getElementById('fifth-title');
const $sixthTitle = document.getElementById('sixth-title');
const $seventhTitle = document.getElementById('seventh-title');
const $eighthTitle = document.getElementById('eighth-title');
const $ninethTitle = document.getElementById('nineth-title');


//carousel
$('#carousel-resp-example').on('slide.bs.carousel', function (e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('.carousel-item').length;
 
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});
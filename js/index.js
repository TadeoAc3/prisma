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
                $secondTitle.classList.remove("title-slide-animation");
                $principalTitle.classList.add('principal-title-animation');
            }
            if(this.realIndex == 1) {
                $secondTitle.classList.add("title-slide-animation");
                $thirdTitle.classList.remove("title-slide-animation");
                $principalTitle.classList.remove('principal-title-animation');
                $phoneShake.classList.remove("phone-shake-animation");
            }
            if(this.realIndex == 2) {
                $thirdTitle.classList.add("title-slide-animation");
                $secondTitle.classList.remove("title-slide-animation");
                $fourthTitle.classList.remove("title-slide-animation");
                $fanSpin.classList.remove("fan-img-animation");
                $phoneShake.classList.add("phone-shake-animation");
            }
            if(this.realIndex == 3) {
                $fourthTitle.classList.add("title-slide-animation");
                $thirdTitle.classList.remove("title-slide-animation");
                $fifthTitle.classList.remove("title-slide-animation");
                $fanSpin.classList.add("fan-img-animation");
                $phoneShake.classList.remove("phone-shake-animation");
            }
            if(this.realIndex == 4) {
                animateYears("servYears", 0, 8, 4000);
                $fifthTitle.classList.add("title-slide-animation");
                $fourthTitle.classList.remove("title-slide-animation");
                $sixthTitle.classList.remove("title-slide-animation");
                $fanSpin.classList.remove("fan-img-animation");
            }
            if(this.realIndex == 5) {
                $sixthTitle.classList.add("title-slide-animation");
                $fifthTitle.classList.remove("title-slide-animation");
                $seventhTitle.classList.remove("title-slide-animation");
                $leftMachine.classList.remove("left-machine-animation");
                $centerMachine.classList.remove("center-machine-animation");
                $rightMachine.classList.remove("right-machine-animation");
            }
            if(this.realIndex == 6) {
                $seventhTitle.classList.add("title-slide-animation");
                $sixthTitle.classList.remove("title-slide-animation");
                $eighthTitle.classList.remove("title-slide-animation");
                $leftMachine.classList.add("left-machine-animation");
                $centerMachine.classList.add("center-machine-animation");
                $rightMachine.classList.add("right-machine-animation");
            }
            if(this.realIndex == 7) {
                $eighthTitle.classList.add("title-slide-animation");
                $seventhTitle.classList.remove("title-slide-animation");
                $ninethTitle.classList.remove("title-slide-animation");
                $leftMachine.classList.remove("left-machine-animation");
                $centerMachine.classList.remove("center-machine-animation");
                $rightMachine.classList.remove("right-machine-animation");
                // $clientBrand.classList.remove("client-brand-animation");
            }
            if(this.realIndex == 8) {
                $ninethTitle.classList.add("title-slide-animation");
                $eighthTitle.classList.remove("title-slide-animation");
                $phoneShake.classList.remove("phone-shake-animation");
                // $clientBrand.classList.add("client-brand-animation");
            }
            if(this.realIndex == 9) {
                $ninethTitle.classList.remove("title-slide-animation");
                $phoneShake.classList.add("phone-shake-animation");
                // $clientBrand.classList.remove("client-brand-animation");
            }
        }
    }
});

const $principalTitle = document.getElementById('principal-title');
const $secondTitle = document.getElementById('second-title');
const $thirdTitle = document.getElementById('third-title');
const $fourthTitle = document.getElementById('fourth-title');
const $fifthTitle = document.getElementById('fifth-title');
const $sixthTitle = document.getElementById('sixth-title');
const $seventhTitle = document.getElementById('seventh-title');
const $eighthTitle = document.getElementById('eighth-title');
const $ninethTitle = document.getElementById('nineth-title');
const $fanSpin = document.getElementById('fan-img');
const $phoneShake = document.getElementById('phone-shake');
const $leftMachine = document.getElementById('left-machine');
const $centerMachine = document.getElementById('center-machine');
const $rightMachine = document.getElementById('right-machine');
// const $clientBrand = document.getElementById('client-brand');

var onloadCallback = function() {
    alert("grecaptcha is ready!");
};

$(document).ready(function() {
    $principalTitle.classList.add('principal-title-animation');
    
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
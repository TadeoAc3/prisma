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
            if(this.realIndex == 4) {
                animateYears("servYears", 0, 8, 4000);
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
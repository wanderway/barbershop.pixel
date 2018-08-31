var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
    }
});

(function () {

    if (window.matchMedia("(max-width: 768px)").matches) {
        $('.features__wrapper').slick({
            settings: 'unslick',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        dots: true,
                        arrows: false,
                        autoplay: true
                    }
                }
            ]
        });
    }
})();

(function () {

    if (window.matchMedia("(max-width: 1500px)").matches) {
        $('.feedback__slider-wrapper').slick({
            settings: 'unslick',
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        dots: true,
                        arrows: false,
                        autoplay: true
                    }
                }
            ]
        });
    }
})();
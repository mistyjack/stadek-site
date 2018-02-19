import $ from 'jquery';
import 'slick-carousel';

class Carousel {
    constructor() {
        this.singleSlide = $('.single-slide');
        this.slidingImg = $('.sliding-images');
        this.startSliding();
    }

    startSliding() {
        this.slidingImg.slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [{
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });

        this.singleSlide.slick({
            autoplay: true,
            autoplaySpeed: 2500,
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            arrows: false,
            cssEase: 'linear'
        });
    }
}

export default Carousel;
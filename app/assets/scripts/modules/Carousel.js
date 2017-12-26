import $ from 'jquery';
import 'slick-carousel';

class Carousel {
    constructor() {
        this.slidingImg = $('.sliding-images');
        this.startSliding();
    }

    startSliding() {
        this.slidingImg.slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            arrows: true,
            autoplay: true
        });
    }
}

export default Carousel;
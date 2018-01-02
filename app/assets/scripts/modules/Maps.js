import $ from 'jquery';
import 'google-maps';

class Maps {
    constructor() {
        this.maps = $('.maps');
        this.initMap();
    }

    initMap() {
        var map = new google.maps.Map(this.maps, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    }
}

export default Maps;
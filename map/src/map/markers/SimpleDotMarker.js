import L from 'leaflet';

export class SimpleDotMarker {
    static defaultOptions = {
        fillOpacity: 0.9,
        radius: 5,
        color: '#ffffff',
        fillColor: '#fe8800',
        weight: 1,
        zIndex: 1000,
        simple: true,
        renderer: L.svg(), // Use SVG renderer for better performance with many markers
    };

    /**
     * @param {L.LatLng} latlng – marker position
     * @param {object} place – GeoJSON feature
     * @param {object} [options] – override defaultOptions
     */
    constructor(latlng, place, options = {}) {
        this.latlng = latlng;
        this.place = place;
        this.options = {
            ...SimpleDotMarker.defaultOptions,
            ...options,
        };
    }

    /**
     * Creates the circle marker and attaches event listeners.
     * @returns {L.CircleMarker}
     */
    build() {
        return L.circleMarker(this.latlng, this.options);
    }
}

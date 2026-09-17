import L from 'leaflet';
import { formatMapHash } from '@map/map/util/mapHash';

function mapAt(zoom, lat = 50.4584, lng = 30.531) {
    return { getZoom: () => zoom, getCenter: () => L.latLng(lat, lng) };
}

// the precision of the coordinates is the one of leaflet-hash: ceil(log2(zoom)) digits, 4 for zoom 16, 5 above it
test('the hash keeps the zoom to hundredths and stays a whole number for a whole zoom', () => {
    expect(formatMapHash(mapAt(16.745795355902786))).toBe('#16.75/50.45840/30.53100');
    expect(formatMapHash(mapAt(16))).toBe('#16/50.4584/30.5310');
    // zoomSnap 0.01 leaves a float error on the map zoom
    expect(formatMapHash(mapAt(19.990000000000002))).toBe('#19.99/50.45840/30.53100');
    expect(formatMapHash(mapAt(5, 50, 5))).toBe('#5/50.000/5.000');
});

test('leaflet-hash reads a fractional zoom from the url and rejects a broken hash', () => {
    const hash = new L.Hash();

    expect(hash.parseHash('#13.65/50.4376/30.5501')).toEqual({ center: L.latLng(50.4376, 30.5501), zoom: 13.65 });
    expect(hash.parseHash('12/50.4376/30.5501').zoom).toBe(12);
    for (const broken of ['', '#12/50.4376', '#12/50.4376/30.5501/1', '#zoom/50.4376/30.5501', '#12/lat/30.5501']) {
        expect(hash.parseHash(broken)).toBeNull();
    }
    // the instance writes through the same formatter
    expect(hash.formatHash(mapAt(16.745795355902786))).toBe('#16.75/50.45840/30.53100');
});

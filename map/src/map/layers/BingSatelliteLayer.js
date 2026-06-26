import { useContext, useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import MapContext from '../../context/MapContext';
import { isOsmAndTileURL } from '../mvt/MvtDemoConfig';

const BING_SATELLITE_PANE = 'mvtBingSatellitePane';
const BING_SATELLITE_URL = 'https://ecn.t{s}.tiles.virtualearth.net/tiles/a{quadkey}.jpeg?g=1';

function getQuadKey({ x, y, z }) {
    let quadKey = '';

    for (let i = z; i > 0; i--) {
        const mask = 1 << (i - 1);
        let digit = 0;

        if (x & mask) {
            digit += 1;
        }
        if (y & mask) {
            digit += 2;
        }

        quadKey += digit;
    }

    return quadKey;
}

const BingTileLayer = L.TileLayer.extend({
    getTileUrl(coords) {
        return L.Util.template(this._url, {
            ...coords,
            quadkey: getQuadKey(coords),
            s: this._getSubdomain(coords),
        });
    },
});

export default function BingSatelliteLayer() {
    const map = useMap();
    const mtx = useContext(MapContext);

    useEffect(() => {
        if (!isOsmAndTileURL(mtx.tileURL)) {
            return undefined;
        }

        const pane = map.getPane(BING_SATELLITE_PANE) || map.createPane(BING_SATELLITE_PANE);
        pane.style.zIndex = '200';
        pane.style.pointerEvents = 'none';

        const layer = new BingTileLayer(BING_SATELLITE_URL, {
            pane: BING_SATELLITE_PANE,
            subdomains: ['0', '1', '2', '3'],
            minZoom: 1,
            maxZoom: 20,
            maxNativeZoom: 19,
            attribution: '&copy; Microsoft Bing',
        }).addTo(map);

        return () => {
            map.removeLayer(layer);
        };
    }, [map, mtx.tileURL]);

    return null;
}

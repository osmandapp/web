import { useContext, useEffect, useSyncExternalStore } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import MapContext from '../../context/MapContext';
import { isOsmAndTileURL } from '../mvt/MvtDemoConfig';

const HYBRID_UNDERLAY_URL_KEY = 'mvtHybridUnderlayUrl';
const HYBRID_UNDERLAY_ACTIVE_KEY = 'mvtHybridUnderlayActive';
const HYBRID_UNDERLAY_EVENT = 'mvt-hybrid-underlay-url-changed';
const HYBRID_UNDERLAY_PANE = 'mvtHybridUnderlayPane';

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

const TemplateTileLayer = L.TileLayer.extend({
    getTileUrl(coords) {
        return L.Util.template(this._url, {
            ...coords,
            quadkey: getQuadKey(coords),
            s: this._getSubdomain(coords),
        });
    },
});

export function getHybridUnderlayUrl() {
    if (localStorage.getItem(HYBRID_UNDERLAY_ACTIVE_KEY) !== 'true') {
        return '';
    }
    return localStorage.getItem(HYBRID_UNDERLAY_URL_KEY) || '';
}

function emitHybridUnderlayUrlChange() {
    window.dispatchEvent(new Event(HYBRID_UNDERLAY_EVENT));
}

function activateHybridUnderlayUrl(url) {
    if (url) {
        localStorage.setItem(HYBRID_UNDERLAY_URL_KEY, url);
        localStorage.setItem(HYBRID_UNDERLAY_ACTIVE_KEY, 'true');
    }
    emitHybridUnderlayUrlChange();
}

function deactivateHybridUnderlayUrl() {
    localStorage.removeItem(HYBRID_UNDERLAY_ACTIVE_KEY);
    emitHybridUnderlayUrlChange();
}

function subscribeHybridUnderlayUrl(callback) {
    window.addEventListener(HYBRID_UNDERLAY_EVENT, callback);
    window.addEventListener('storage', callback);

    return () => {
        window.removeEventListener(HYBRID_UNDERLAY_EVENT, callback);
        window.removeEventListener('storage', callback);
    };
}

export function useHybridUnderlayUrl() {
    return useSyncExternalStore(subscribeHybridUnderlayUrl, getHybridUnderlayUrl, () => '');
}

export function toggleHybridUnderlayUrl() {
    const currentUrl = getHybridUnderlayUrl();
    if (currentUrl) {
        deactivateHybridUnderlayUrl();
        return;
    }

    const savedUrl = localStorage.getItem(HYBRID_UNDERLAY_URL_KEY) || '';
    const nextUrl = window.prompt('UNDERLAY_URL', savedUrl)?.trim();
    if (nextUrl) {
        activateHybridUnderlayUrl(nextUrl);
    }
}

export function isHybridStyleLayer(layer) {
    return layer.type === 'fill' || layer.type === 'background';
}

export function setStyleHybridVisibility(style, visibility) {
    style.layers = style.layers?.map((layer) =>
        isHybridStyleLayer(layer)
            ? {
                  ...layer,
                  layout: {
                      ...layer.layout,
                      visibility,
                  },
              }
            : layer
    );
}

export function setMapHybridVisibility(maplibreMap, style, active) {
    style.layers?.filter(isHybridStyleLayer).forEach((layer) => {
        if (maplibreMap.getLayer(layer.id)) {
            const visibility = active ? 'none' : layer.layout?.visibility || 'visible';
            maplibreMap.setLayoutProperty(layer.id, 'visibility', visibility);
        }
    });
}

export default function MvtHybridDemoUnderlay() {
    const map = useMap();
    const mtx = useContext(MapContext);
    const underlayUrl = useHybridUnderlayUrl();

    useEffect(() => {
        if (!underlayUrl || !isOsmAndTileURL(mtx.tileURL)) {
            return undefined;
        }

        const pane = map.getPane(HYBRID_UNDERLAY_PANE) || map.createPane(HYBRID_UNDERLAY_PANE);
        pane.style.zIndex = '200';
        pane.style.pointerEvents = 'none';

        const layer = new TemplateTileLayer(underlayUrl, {
            pane: HYBRID_UNDERLAY_PANE,
            subdomains: ['0', '1', '2', '3'],
            minZoom: 1,
            maxZoom: 20,
            maxNativeZoom: 19,
        }).addTo(map);

        return () => {
            map.removeLayer(layer);
        };
    }, [map, mtx.tileURL, underlayUrl]);

    return null;
}

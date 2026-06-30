import { useContext, useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'maplibre-gl/dist/maplibre-gl.css';
import '@maplibre/maplibre-gl-leaflet';
import AppContext, { updateConfigureMapCache } from '../../context/AppContext';
import MapContext from '../../context/MapContext';
import { osmandTileURL } from '../baseTileURL';
import { isWebGLAvailable } from '../mvt/MvtDemoConfig';

const POPUP_MAX_HEIGHT = 220;
const SHOW_TILE_BOUNDARIES = true;
const TILE_SOURCES_KEY = '__osmandMvtTileSources';

function getPublicAssetPath(path) {
    const publicUrl = (process.env.PUBLIC_URL || '').replace(/\/$/, '');
    return `${publicUrl}${path}`;
}

function getPublicAssetUrl(path) {
    return new URL(getPublicAssetPath(path), window.location.origin).toString();
}

function createStyle(baseStyle, tileUrl) {
    const style = JSON.parse(JSON.stringify(baseStyle));
    style.sources = {
        ...style.sources,
        osm: {
            ...style.sources.osm,
            tiles: [tileUrl],
        },
    };
    style.sprite = getPublicAssetUrl('/mvt/sprites/sprite');
    style.glyphs = getPublicAssetPath('/mvt/fonts/{fontstack}/{range}.pbf');
    return style;
}

function getMvtSources(config) {
    const sources = createStyle(config.style, config.tileUrl).sources || {};
    return Object.entries(sources).flatMap(([id, source]) =>
        source?.type === 'vector' && source.tiles?.length
            ? [
                  {
                      id,
                      url: source.tiles[0],
                      minzoom: source.minzoom ?? 0,
                      maxzoom: source.maxzoom ?? 22,
                      scheme: source.scheme,
                  },
              ]
            : []
    );
}

function getTileCoord({ lat, lng }, source, zoom) {
    const z = Math.max(source.minzoom, Math.min(source.maxzoom, Math.floor(zoom)));
    const n = 2 ** z;
    const sin = Math.sin((Math.max(-85.05112878, Math.min(85.05112878, lat)) * Math.PI) / 180);
    const x = Math.floor((((L.Util.wrapNum(lng, [-180, 180], true) + 180) / 360) * n) % n);
    const y = Math.max(0, Math.min(n - 1, Math.floor((0.5 - Math.log((1 + sin) / (1 - sin)) / (4 * Math.PI)) * n)));

    return { z, x, y: source.scheme === 'tms' ? n - y - 1 : y };
}

export function getMvtTileDownloads(map, latlng) {
    if (!map || !latlng) {
        return [];
    }

    return (map?.[TILE_SOURCES_KEY] || []).map((source) => {
        const { z, x, y } = getTileCoord(latlng, source, source.getZoom?.() ?? map.getZoom());
        return {
            url: source.url.replace('{z}', z).replace('{x}', x).replace('{y}', y),
            name: `${source.layerKey || source.id}-${z}-${x}-${y}.mvt`,
        };
    });
}

function formatPopupValue(value) {
    if (value === undefined || value === null) {
        return 'N/A';
    }
    if (typeof value === 'object') {
        return JSON.stringify(value);
    }
    return value.toString();
}

function createTagsPopupContent(properties, popupClassName) {
    const wrapper = L.DomUtil.create('div', popupClassName);
    wrapper.style.maxHeight = `${POPUP_MAX_HEIGHT}px`;
    wrapper.style.overflowY = 'auto';

    const entries = Object.entries(properties || {}).sort(([a], [b]) => a.localeCompare(b));

    if (entries.length === 0) {
        const empty = L.DomUtil.create('div', '', wrapper);
        empty.textContent = 'No tags';
        return wrapper;
    }

    const table = L.DomUtil.create('table', '', wrapper);
    table.style.borderCollapse = 'collapse';
    table.style.width = '100%';

    entries.forEach(([key, value]) => {
        const row = L.DomUtil.create('tr', '', table);
        const keyCell = L.DomUtil.create('td', '', row);
        const valueCell = L.DomUtil.create('td', '', row);

        keyCell.textContent = key || 'N/A';
        valueCell.textContent = formatPopupValue(value);

        keyCell.style.fontWeight = '600';
        keyCell.style.padding = '3px 8px 3px 0';
        keyCell.style.verticalAlign = 'top';
        valueCell.style.padding = '3px 0';
        valueCell.style.textAlign = 'right';
        valueCell.style.verticalAlign = 'top';
        valueCell.style.wordBreak = 'break-word';
    });

    return wrapper;
}

export default function MvtLayer({ config }) {
    const map = useMap();
    const ctx = useContext(AppContext);
    const mtx = useContext(MapContext);

    useEffect(() => {
        const { style, tileUrl, isActive, popupClassName, errorLabel } = config;

        if (!isActive(mtx.tileURL)) {
            return undefined;
        }

        window.seIsTilesLoaded = false;

        if (!isWebGLAvailable()) {
            window.seIsTilesLoaded = true;
            console.warn(`${errorLabel}: WebGL is not available`);
            mtx.setTileURL(osmandTileURL);
            mtx.setRenderingType(null);
            const configureMap = {
                ...ctx.configureMapState,
                mapStyle: { tileURL: osmandTileURL, renderingType: null },
            };
            updateConfigureMapCache(configureMap);
            ctx.setConfigureMapState(configureMap);
            return undefined;
        }

        const glLayer = L.maplibreGL({
            style: createStyle(style, tileUrl),
            interactive: false,
            fadeDuration: 0,
        }).addTo(map);

        const maplibreMap = glLayer.getMaplibreMap();
        maplibreMap.showTileBoundaries = SHOW_TILE_BOUNDARIES && ctx.develFeatures === true;

        const sourceOwner = Symbol(config.tileUrl);
        const sources = getMvtSources(config).map((source) => ({
            ...source,
            sourceOwner,
            layerKey: mtx.tileURL?.key,
            getZoom: () => maplibreMap.getZoom(),
        }));
        map[TILE_SOURCES_KEY] = [...(map[TILE_SOURCES_KEY] || []), ...sources];

        let activePopup = null;

        const handleLoading = () => {
            window.seIsTilesLoaded = false;
        };

        const handleIdle = () => {
            window.seIsTilesLoaded = true;
        };

        const handleError = (event) => {
            console.warn(errorLabel, event?.error ?? event);
        };

        const handleMapClick = (event) => {
            const canvas = glLayer.getCanvas();
            const rect = canvas.getBoundingClientRect();
            const point = [event.originalEvent.clientX - rect.left, event.originalEvent.clientY - rect.top];
            let features = [];
            try {
                features = maplibreMap.queryRenderedFeatures(point);
            } catch (error) {
                return;
            }
            if (features.length === 0) {
                // Only close our own popup, not unrelated ones (POI, tracks, …).
                if (activePopup) {
                    map.closePopup(activePopup);
                    activePopup = null;
                }
                return;
            }

            const feature = features.find((item) => Object.keys(item.properties || {}).length > 0) || features[0];
            activePopup = L.popup({
                closeButton: true,
                autoClose: true,
                closeOnClick: false,
                maxWidth: 360,
            })
                .setLatLng(event.latlng)
                .setContent(createTagsPopupContent(feature.properties, popupClassName))
                .openOn(map);
        };

        const handlePopupClose = (event) => {
            if (event.popup === activePopup) {
                activePopup = null;
            }
        };

        map.on('click', handleMapClick);
        map.on('popupclose', handlePopupClose);
        maplibreMap.on('dataloading', handleLoading);
        maplibreMap.on('idle', handleIdle);
        maplibreMap.on('error', handleError);

        return () => {
            window.seIsTilesLoaded = true;
            map.off('click', handleMapClick);
            map.off('popupclose', handlePopupClose);
            maplibreMap.off('dataloading', handleLoading);
            maplibreMap.off('idle', handleIdle);
            maplibreMap.off('error', handleError);
            if (activePopup) {
                map.closePopup(activePopup);
                activePopup = null;
            }
            map[TILE_SOURCES_KEY] = (map[TILE_SOURCES_KEY] || []).filter(
                (source) => source.sourceOwner !== sourceOwner
            );
            map.removeLayer(glLayer);
        };
    }, [map, mtx.tileURL, config, ctx.develFeatures]);

    return null;
}

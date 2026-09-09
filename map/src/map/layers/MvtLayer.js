import { useContext, useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import 'maplibre-gl/dist/maplibre-gl.css';
import '@maplibre/maplibre-gl-leaflet';
import AppContext, { OBJECT_TYPE_POI, updateConfigureMapCache } from '../../context/AppContext';
import MapContext from '../../context/MapContext';
import { osmandTileURL } from '../baseTileURL';
import { isWebGLAvailable } from './MvtLayerConfig';
import { MENU_INFO_OPEN_SIZE, POI_LAYER_ID } from '../../manager/GlobalManager';
import { navigateToPoi } from '../../manager/PoiManager';
import { createMvtObject, pickClickableFeature } from '../util/MvtObjectSelection';
import {
    ensureLeafletPane,
    setMapHybridVisibility,
    setStyleHybridVisibility,
    useHybridUnderlayUrl,
} from './MvtHybridDemo';

const SHOW_TILE_BOUNDARIES = true;
const TILE_SOURCES_KEY = '__osmandMvtTileSources';
const POINTER_CURSOR = 'pointer';
// as in Android MapSelectionHelper (20 px on touch screens)
const CLICK_TOLERANCE_PX = 5;

function getPublicAssetPath(path) {
    const publicUrl = (process.env.PUBLIC_URL || '').replace(/\/$/, '');
    return `${publicUrl}${path}`;
}

function getPublicAssetUrl(path) {
    return new URL(getPublicAssetPath(path), window.location.origin).toString();
}

function createStyle(baseStyle, tileUrl, options = {}) {
    const style = structuredClone(baseStyle);
    style.sources = {
        ...style.sources,
        osm: {
            ...style.sources.osm,
            tiles: [tileUrl],
        },
    };
    style.sprite = getPublicAssetUrl('/mvt/sprites/sprite');
    style.glyphs = getPublicAssetPath('/mvt/fonts/{fontstack}/{range}.pbf');
    if (options.hideHybridLayers) {
        setStyleHybridVisibility(style, 'none');
    }
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

function resetPointerCursor(container) {
    if (container.style.cursor === POINTER_CURSOR) {
        container.style.cursor = '';
    }
}

export default function MvtLayer({ config }) {
    const map = useMap();
    const ctx = useContext(AppContext);
    const mtx = useContext(MapContext);
    const navigate = useNavigate();
    const hybridUnderlayUrl = useHybridUnderlayUrl();
    const hybridUnderlayUrlRef = useRef(hybridUnderlayUrl);
    const maplibreMapRef = useRef(null);

    hybridUnderlayUrlRef.current = hybridUnderlayUrl;

    useEffect(() => {
        const { style, tileUrl, isActive, clickable, errorLabel, pane: paneName, paneZIndex } = config;

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

        if (paneName) {
            ensureLeafletPane(map, paneName, paneZIndex);
        }

        const glLayer = L.maplibreGL({
            style: createStyle(style, tileUrl, {
                hideHybridLayers: Boolean(hybridUnderlayUrlRef.current),
            }),
            interactive: false,
            fadeDuration: 0,
            ...(paneName ? { pane: paneName } : {}),
        }).addTo(map);

        const maplibreMap = glLayer.getMaplibreMap();
        maplibreMapRef.current = maplibreMap;
        maplibreMap.showTileBoundaries = SHOW_TILE_BOUNDARIES && ctx.develFeatures === true;

        const sourceOwner = Symbol(config.tileUrl);
        const sources = getMvtSources(config).map((source) => ({
            ...source,
            sourceOwner,
            layerKey: mtx.tileURL?.key,
            getZoom: () => maplibreMap.getZoom(),
        }));
        map[TILE_SOURCES_KEY] = [...(map[TILE_SOURCES_KEY] || []), ...sources];

        const handleLoading = () => {
            window.seIsTilesLoaded = false;
        };

        const handleIdle = () => {
            window.seIsTilesLoaded = true;
        };

        const handleError = (event) => {
            console.warn(errorLabel, event?.error ?? event);
        };

        const getClickableFeature = (mouseEvent) => {
            const canvas = glLayer.getCanvas();
            const rect = canvas.getBoundingClientRect();
            const x = mouseEvent.clientX - rect.left;
            const y = mouseEvent.clientY - rect.top;
            const box = [
                [x - CLICK_TOLERANCE_PX, y - CLICK_TOLERANCE_PX],
                [x + CLICK_TOLERANCE_PX, y + CLICK_TOLERANCE_PX],
            ];
            try {
                return pickClickableFeature(maplibreMap.queryRenderedFeatures(box));
            } catch (error) {
                return null;
            }
        };

        // DOM listener runs after Leaflet map handlers (NavigationLayer resets the cursor on map mousemove)
        const handleMouseMove = (mouseEvent) => {
            const container = map.getContainer();
            if (getClickableFeature(mouseEvent)) {
                container.style.cursor = POINTER_CURSOR;
            } else {
                resetPointerCursor(container);
            }
        };

        const handleMapClick = (event) => {
            const feature = getClickableFeature(event.originalEvent);
            if (!feature) {
                return;
            }
            const obj = createMvtObject(feature, event.latlng);
            ctx.setCurrentObjectType(OBJECT_TYPE_POI);
            ctx.setInfoBlockWidth(MENU_INFO_OPEN_SIZE + 'px');
            // as after a marker hover: keeps GlobalFrame from opening the POI by the URL below
            ctx.setSelectedWptId({ id: obj.mvt.osmId, show: false, type: POI_LAYER_ID });
            // no selectedWpt.id: SearchLayer (useSelectMarkerOnMap) would draw a selected pin for it
            ctx.setSelectedWpt(obj);
            navigateToPoi(obj, navigate);
        };

        if (clickable) {
            map.on('click', handleMapClick);
            L.DomEvent.on(map.getContainer(), 'mousemove', handleMouseMove);
        }
        maplibreMap.on('dataloading', handleLoading);
        maplibreMap.on('idle', handleIdle);
        maplibreMap.on('error', handleError);

        return () => {
            window.seIsTilesLoaded = true;
            if (clickable) {
                map.off('click', handleMapClick);
                L.DomEvent.off(map.getContainer(), 'mousemove', handleMouseMove);
                resetPointerCursor(map.getContainer());
            }
            maplibreMap.off('dataloading', handleLoading);
            maplibreMap.off('idle', handleIdle);
            maplibreMap.off('error', handleError);
            map[TILE_SOURCES_KEY] = (map[TILE_SOURCES_KEY] || []).filter(
                (source) => source.sourceOwner !== sourceOwner
            );
            maplibreMapRef.current = null;
            map.removeLayer(glLayer);
        };
    }, [map, mtx.tileURL, config, ctx.develFeatures]);

    useEffect(() => {
        const maplibreMap = maplibreMapRef.current;
        if (!maplibreMap || !config.isActive(mtx.tileURL)) {
            return undefined;
        }

        const applyVisibility = () => {
            setMapHybridVisibility(maplibreMap, config.style, Boolean(hybridUnderlayUrl));
        };

        if (maplibreMap.isStyleLoaded()) {
            applyVisibility();
            return undefined;
        }

        maplibreMap.once('idle', applyVisibility);
        return () => {
            maplibreMap.off('idle', applyVisibility);
        };
    }, [config, mtx.tileURL, hybridUnderlayUrl]);

    return null;
}

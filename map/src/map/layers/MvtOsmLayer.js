import { useContext, useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import MapContext from '../../context/MapContext';
import mvtOsmStyle from '../mvt/mvtOsmStyle.json';
import { isMvtOsmTileURL, MVT_OSM_TILE_URL } from '../mvt/MvtDemoConfig';

const PANE_NAME = 'mvtOsmPane';
const POPUP_MAX_HEIGHT = 220;
const MAPLIBRE_ZOOM_OFFSET = -1;
const PAN_BUFFER = 768;
const SHOW_TILE_BOUNDARIES = true;

function getPublicAssetPath(path) {
    const publicUrl = (process.env.PUBLIC_URL || '').replace(/\/$/, '');
    return `${publicUrl}${path}`;
}

function getPublicAssetUrl(path) {
    return new URL(getPublicAssetPath(path), window.location.origin).toString();
}

function createStyle() {
    const style = JSON.parse(JSON.stringify(mvtOsmStyle));
    style.sources = {
        ...style.sources,
        osm: {
            ...style.sources.osm,
            tiles: [MVT_OSM_TILE_URL],
        },
    };
    style.sprite = getPublicAssetUrl('/mvt/sprites/sprite');
    style.glyphs = getPublicAssetPath('/mvt/fonts/{fontstack}/{range}.pbf');
    return style;
}

function getMapLibreZoom(leafletZoom) {
    return Math.max(0, leafletZoom + MAPLIBRE_ZOOM_OFFSET);
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

function createTagsPopupContent(properties) {
    const wrapper = L.DomUtil.create('div', 'mvt-osm-popup');
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

export default function MvtOsmLayer() {
    const map = useMap();
    const mtx = useContext(MapContext);
    const maplibreRef = useRef(null);

    useEffect(() => {
        if (!isMvtOsmTileURL(mtx.tileURL)) {
            return undefined;
        }

        window.seIsTilesLoaded = false;

        let pane = map.getPane(PANE_NAME);
        if (!pane) {
            pane = map.createPane(PANE_NAME);
        }
        pane.style.zIndex = '200';
        pane.style.pointerEvents = 'none';

        const container = L.DomUtil.create('div', 'leaflet-layer leaflet-zoom-animated mvt-osm-maplibre-layer', pane);
        container.style.position = 'absolute';
        container.style.overflow = 'hidden';
        container.style.pointerEvents = 'none';
        container.style.transformOrigin = '0 0';

        const initialSize = map.getSize();
        container.style.width = `${initialSize.x + PAN_BUFFER * 2}px`;
        container.style.height = `${initialSize.y + PAN_BUFFER * 2}px`;
        L.DomUtil.setPosition(container, map.containerPointToLayerPoint([-PAN_BUFFER, -PAN_BUFFER]));

        const center = map.getCenter();
        const maplibreMap = new maplibregl.Map({
            container,
            style: createStyle(),
            center: [center.lng, center.lat],
            zoom: getMapLibreZoom(map.getZoom()),
            attributionControl: false,
            interactive: false,
            fadeDuration: 0,
        });
        maplibreMap.showTileBoundaries = SHOW_TILE_BOUNDARIES;

        maplibreRef.current = maplibreMap;

        let disposed = false;
        let syncFrame = null;
        let deferredContainerSync = null;
        let dragging = false;
        let zooming = false;
        let containerWidth = initialSize.x + PAN_BUFFER * 2;
        let containerHeight = initialSize.y + PAN_BUFFER * 2;

        const syncContainer = () => {
            const size = map.getSize();
            const nextWidth = size.x + PAN_BUFFER * 2;
            const nextHeight = size.y + PAN_BUFFER * 2;

            if (nextWidth !== containerWidth || nextHeight !== containerHeight) {
                containerWidth = nextWidth;
                containerHeight = nextHeight;
                container.style.width = `${containerWidth}px`;
                container.style.height = `${containerHeight}px`;
                maplibreMap.resize();
            }
            L.DomUtil.setPosition(container, map.containerPointToLayerPoint([-PAN_BUFFER, -PAN_BUFFER]));
        };

        const cancelDeferredContainerSync = () => {
            if (deferredContainerSync !== null) {
                maplibreMap.off('render', deferredContainerSync);
                deferredContainerSync = null;
            }
        };

        const jumpToLeafletView = ({ center = map.getCenter(), zoom = map.getZoom() } = {}) => {
            if (disposed) {
                return;
            }
            const nextView = {
                center: [center.lng, center.lat],
                zoom: getMapLibreZoom(zoom),
                bearing: 0,
                pitch: 0,
            };
            maplibreMap.jumpTo(nextView);
        };

        const syncView = (view) => {
            if (disposed) {
                return;
            }
            cancelDeferredContainerSync();
            syncContainer();
            jumpToLeafletView(view);
        };

        const syncViewAfterPan = () => {
            if (disposed) {
                return;
            }
            cancelDeferredContainerSync();
            deferredContainerSync = () => {
                deferredContainerSync = null;
                syncContainer();
            };
            maplibreMap.once('render', deferredContainerSync);
            jumpToLeafletView();
            maplibreMap.triggerRepaint();
        };

        const requestSync = () => {
            if (dragging || zooming || syncFrame !== null) {
                return;
            }
            syncFrame = L.Util.requestAnimFrame(() => {
                syncFrame = null;
                syncView();
            });
        };

        const cancelRequestedSync = () => {
            if (syncFrame !== null) {
                L.Util.cancelAnimFrame(syncFrame);
                syncFrame = null;
            }
        };

        const handleDragStart = () => {
            dragging = true;
            cancelRequestedSync();
            cancelDeferredContainerSync();
        };

        const handleMoveEnd = () => {
            if (!dragging) {
                return;
            }
            dragging = false;
            syncViewAfterPan();
        };

        const handleZoomAnim = (event) => {
            if (disposed) {
                return;
            }
            zooming = true;
            cancelRequestedSync();
            cancelDeferredContainerSync();
            const scale = map.getZoomScale(event.zoom);
            const topLeftLatLng = map.layerPointToLatLng(map.containerPointToLayerPoint([-PAN_BUFFER, -PAN_BUFFER]));
            const offset = map._latLngToNewLayerPoint(topLeftLatLng, event.zoom, event.center);
            L.DomUtil.setTransform(container, offset, scale);
        };

        const handleZoomEnd = () => {
            if (!zooming) {
                return;
            }
            zooming = false;
            syncView();
        };

        const handleLoading = () => {
            window.seIsTilesLoaded = false;
        };

        const handleIdle = () => {
            window.seIsTilesLoaded = true;
        };

        const handleError = (event) => {
            console.warn('MVT OSM layer error', event?.error ?? event);
        };

        const handleMapClick = (event) => {
            if (disposed) {
                return;
            }
            const point = [event.containerPoint.x + PAN_BUFFER, event.containerPoint.y + PAN_BUFFER];
            let features = [];
            try {
                features = maplibreMap.queryRenderedFeatures(point);
            } catch (error) {
                return;
            }
            if (features.length === 0) {
                map.closePopup();
                return;
            }

            const feature = features.find((item) => Object.keys(item.properties || {}).length > 0) || features[0];
            L.popup({
                closeButton: true,
                autoClose: true,
                closeOnClick: false,
                maxWidth: 360,
            })
                .setLatLng(event.latlng)
                .setContent(createTagsPopupContent(feature.properties))
                .openOn(map);
        };

        map.on('move zoom resize viewreset', requestSync);
        map.on('dragstart', handleDragStart);
        map.on('moveend', handleMoveEnd);
        map.on('zoomanim', handleZoomAnim);
        map.on('zoomend', handleZoomEnd);
        map.on('click', handleMapClick);
        maplibreMap.on('dataloading', handleLoading);
        maplibreMap.on('idle', handleIdle);
        maplibreMap.on('error', handleError);
        syncView();

        return () => {
            disposed = true;
            cancelRequestedSync();
            cancelDeferredContainerSync();
            map.off('move zoom resize viewreset', requestSync);
            map.off('dragstart', handleDragStart);
            map.off('moveend', handleMoveEnd);
            map.off('zoomanim', handleZoomAnim);
            map.off('zoomend', handleZoomEnd);
            map.off('click', handleMapClick);
            maplibreMap.off('dataloading', handleLoading);
            maplibreMap.off('idle', handleIdle);
            maplibreMap.off('error', handleError);
            maplibreMap.remove();
            container.remove();
            if (maplibreRef.current === maplibreMap) {
                maplibreRef.current = null;
            }
        };
    }, [map, mtx.tileURL]);

    return null;
}

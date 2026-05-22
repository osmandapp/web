import { useContext, useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import MapContext from '../../context/MapContext';
import defaultStyle from '../mvt/defaultStyle.json';
import { isMvtDemoTileURL, MVT_DEMO_TILE_URL } from '../mvt/MvtDemoConfig';

const PANE_NAME = 'mvtDemoPane';
const POPUP_MAX_HEIGHT = 220;

function getPublicAssetPath(path) {
    const publicUrl = (process.env.PUBLIC_URL || '').replace(/\/$/, '');
    return `${publicUrl}${path}`;
}

function getPublicAssetUrl(path) {
    return new URL(getPublicAssetPath(path), window.location.origin).toString();
}

function createStyle() {
    const style = JSON.parse(JSON.stringify(defaultStyle));
    style.sources = {
        ...style.sources,
        osm: {
            ...style.sources.osm,
            tiles: [MVT_DEMO_TILE_URL],
        },
    };
    style.sprite = getPublicAssetUrl('/mvt/sprites/sprite');
    style.glyphs = getPublicAssetPath('/mvt/fonts/{fontstack}/{range}.pbf');
    return style;
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
    const wrapper = L.DomUtil.create('div', 'mvt-demo-popup');
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

export default function MvtDemoLayer() {
    const map = useMap();
    const mtx = useContext(MapContext);
    const maplibreRef = useRef(null);

    useEffect(() => {
        if (!isMvtDemoTileURL(mtx.tileURL)) {
            return undefined;
        }

        window.seIsTilesLoaded = false;

        let pane = map.getPane(PANE_NAME);
        if (!pane) {
            pane = map.createPane(PANE_NAME);
        }
        pane.style.zIndex = '200';
        pane.style.pointerEvents = 'none';

        const container = L.DomUtil.create('div', 'leaflet-layer mvt-demo-maplibre-layer', pane);
        container.style.position = 'absolute';
        container.style.overflow = 'hidden';
        container.style.pointerEvents = 'none';

        const initialSize = map.getSize();
        container.style.width = `${initialSize.x}px`;
        container.style.height = `${initialSize.y}px`;
        L.DomUtil.setPosition(container, map.containerPointToLayerPoint([0, 0]));

        const center = map.getCenter();
        const maplibreMap = new maplibregl.Map({
            container,
            style: createStyle(),
            center: [center.lng, center.lat],
            zoom: map.getZoom(),
            attributionControl: false,
            interactive: false,
            fadeDuration: 0,
        });

        maplibreRef.current = maplibreMap;

        let disposed = false;

        const syncContainer = () => {
            const size = map.getSize();
            container.style.width = `${size.x}px`;
            container.style.height = `${size.y}px`;
            L.DomUtil.setPosition(container, map.containerPointToLayerPoint([0, 0]));
            maplibreMap.resize();
        };

        const syncView = () => {
            if (disposed) {
                return;
            }
            const nextCenter = map.getCenter();
            syncContainer();
            maplibreMap.jumpTo({
                center: [nextCenter.lng, nextCenter.lat],
                zoom: map.getZoom(),
                bearing: 0,
                pitch: 0,
            });
        };

        const requestSync = () => {
            L.Util.requestAnimFrame(syncView);
        };

        const handleLoading = () => {
            window.seIsTilesLoaded = false;
        };

        const handleIdle = () => {
            window.seIsTilesLoaded = true;
        };

        const handleError = (event) => {
            console.warn('MVT demo layer error', event?.error ?? event);
        };

        const handleMapClick = (event) => {
            if (disposed) {
                return;
            }

            const point = [event.containerPoint.x, event.containerPoint.y];
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
        map.on('click', handleMapClick);
        maplibreMap.on('dataloading', handleLoading);
        maplibreMap.on('idle', handleIdle);
        maplibreMap.on('error', handleError);
        syncView();

        return () => {
            disposed = true;
            map.off('move zoom resize viewreset', requestSync);
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

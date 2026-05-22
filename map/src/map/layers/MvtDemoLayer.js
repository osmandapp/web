import { useContext, useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import MapContext from '../../context/MapContext';
import defaultStyle from '../mvt/defaultStyle.json';
import { isMvtDemoTileURL, MVT_DEMO_TILE_URL } from '../mvt/MvtDemoConfig';

const PANE_NAME = 'mvtDemoPane';

function createStyle() {
    const style = JSON.parse(JSON.stringify(defaultStyle));
    style.sources = {
        ...style.sources,
        osm: {
            ...style.sources.osm,
            tiles: [MVT_DEMO_TILE_URL],
        },
    };
    style.sprite = `${process.env.PUBLIC_URL || ''}/mvt/sprites/sprite`;
    return style;
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

        map.on('move zoom resize viewreset', requestSync);
        maplibreMap.on('dataloading', handleLoading);
        maplibreMap.on('idle', handleIdle);
        maplibreMap.on('error', handleError);
        syncView();

        return () => {
            disposed = true;
            map.off('move zoom resize viewreset', requestSync);
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

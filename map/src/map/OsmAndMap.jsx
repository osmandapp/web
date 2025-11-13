import React, { useEffect, useRef, useContext, useState } from 'react';
import { MapContainer, Marker, ScaleControl, AttributionControl, ZoomControl } from 'react-leaflet';
import AppContext from '../context/AppContext';
import NavigationLayer from './layers/NavigationLayer';
import WeatherLayer from './layers/WeatherLayer';
import 'leaflet-hash';
import L from 'leaflet';
import 'leaflet-contextmenu';
import 'leaflet-contextmenu/dist/leaflet.contextmenu.css';
import FavoriteLayer from './layers/FavoriteLayer';
import CloudTrackLayer from './layers/CloudTrackLayer';
import LocalClientTrackLayer from './layers/LocalClientTrackLayer';
import MarkerOptions from './markers/MarkerOptions';
import ContextMenu from './components/ContextMenu';
import PoiLayer from './layers/PoiLayer';
import GraphLayer from './layers/GraphLayer';
import { initialZoom, initialPosition, detectGeoByIp, LocationControl } from './components/LocationControl';
import { useWindowSize } from '../util/hooks/useWindowSize';
import CustomTileLayer from './layers/CustomTileLayer';
import ExploreLayer from './layers/ExploreLayer';
import SearchLayer from './layers/SearchLayer';
import HeightmapLayer from './layers/HeightmapLayer';
import TravelLayer from './layers/TravelLayer';
import ShareFileLayer from './layers/ShareFileLayer';
import TrackAnalyzerLayer from './layers/TrackAnalyzerLayer';
import { Box } from '@mui/material';
import { MENU_INFO_CLOSE_SIZE, NAVIGATE_URL } from '../manager/GlobalManager';
import { hasMissingRoutePoint } from '../menu/navigation/NavigationMenu';

const updateMarker = ({ lat, lng, setHoverPoint, hoverPointRef, ctx }) => {
    if (lat) {
        if (hoverPointRef.current) {
            hoverPointRef.current.setLatLng([lat, lng]);
        } else {
            setHoverPoint({ lat, lng });
        }
        ctx.setGraphHighlightedPoint({ lat, lng });
    } else {
        setHoverPoint(null);
        ctx.setGraphHighlightedPoint(null);
    }
};

export function addClicksToMap(map, ctx) {
    const CLICK_DELAY = 280; // ms

    let clickTimer = null;

    const hasMyClick = map._events?.click?.some?.((e) => e.fn.mapClick);
    const hasMyDblClick = map._events?.dblclick?.some?.((e) => e.fn.mapClick);

    const shouldSkipMenuClose = () => {
        if (!globalThis.location.pathname.includes(NAVIGATE_URL)) {
            return false;
        }
        const routeObject = ctx.routeObject;
        if (!routeObject) {
            return false;
        }
        return hasMissingRoutePoint(routeObject);
    };

    const onClick = (event) => {
        if (ctx.createTrack?.enable) return;
        if (ctx.openContextMenu) return;
        if (event?.originalEvent?.navigationHandled) return;
        if (shouldSkipMenuClose()) return;

        if (clickTimer) clearTimeout(clickTimer);
        clickTimer = setTimeout(() => {
            clickTimer = null;
            ctx.setInfoBlockWidth(MENU_INFO_CLOSE_SIZE + 'px');
        }, CLICK_DELAY);
    };

    const onDblClick = () => {
        if (clickTimer) {
            clearTimeout(clickTimer);
            clickTimer = null;
        }
    };

    onClick.mapClick = true;
    onDblClick.mapClick = true;

    if (!hasMyClick) map.on('click', onClick);
    if (!hasMyDblClick) map.on('dblclick', onDblClick);

    map.on('unload', () => {
        map.off('click', onClick);
        map.off('dblclick', onDblClick);
    });
}

const OsmAndMap = ({ mainMenuWidth, menuInfoWidth }) => {
    const mapRef = useRef(null);
    const tileLayer = useRef(null);
    const hoverPointRef = useRef(null);

    const [geocodingData, setGeocodingData] = useState(null);
    const [regionData, setRegionData] = useState(null);
    const [width] = useWindowSize();

    const ctx = useContext(AppContext);
    const [hoverPoint, setHoverPoint] = useState(null);

    const menuMargin = parseFloat(menuInfoWidth) !== 0 ? parseFloat(menuInfoWidth) - 100 : 0;
    const attributionSize = 300;
    const marginLeft = width / 2 - attributionSize + menuMargin;

    const whenReadyHandler = (event) => {
        const { target: map } = event;
        if (map) {
            const hash = new L.Hash(map);

            window.__leafletMap = map;
            window.__leafletHash = hash;

            mapRef.current = map;
            if (!ctx.mapMarkerListener) {
                ctx.setMapMarkerListener(
                    () => (lat, lng) => updateMarker({ lat, lng, setHoverPoint, hoverPointRef, ctx })
                );
            }
            detectGeoByIp({ map, hash });
            addClicksToMap(map, ctx);
        }
    };

    useEffect(() => {
        if (tileLayer.current) {
            tileLayer.current.getLeafletLayer().setUrl(ctx.tileURL.url);
        }
    }, [ctx.tileURL]);

    useEffect(() => {
        if (tileLayer.current && tileLayer.current.getLeafletLayer) {
            const leafletLayer = tileLayer.current.getLeafletLayer();
            if (leafletLayer) {
                leafletLayer.on('load', () => (window.seIsTilesLoaded = true));
                leafletLayer.on('tileload', () => (window.seIsTilesLoaded = false));
            }
        }
    }, [tileLayer.current]);

    // fix contextmenu of point for mobile device
    useEffect(() => {
        const markerEventHandler = (e) => {
            if (
                e.target?.draggable &&
                e.target?.alt === 'Marker' &&
                e.target?.classList?.contains('leaflet-marker-draggable')
            ) {
                if (e.type === 'touchstart') {
                    ctx.setPointContextMenu({});
                    e.preventDefault();
                }
                if (e.type === 'touchend') {
                    e.preventDefault();
                    if (e.target?.title !== 'poly') {
                        e.target?.dispatchEvent(new Event('contextmenu', e));
                    }
                }
            }
        };
        document.addEventListener('touchstart', markerEventHandler, { passive: false });
        document.addEventListener('touchend', markerEventHandler, { passive: false });

        return () => {
            document.removeEventListener('touchstart', markerEventHandler);
            document.removeEventListener('touchend', markerEventHandler);
        };
    }, [ctx]);

    const routersReady = ctx.trackRouter.isReady() && ctx.routeObject.isReady();

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                position: 'fixed',
                '& .leaflet-control-layers': {
                    border: '0px !important',
                },
                '& .leaflet-bottom .leaflet-control-zoom': {
                    bottom: ctx.globalGraph?.show ? `${ctx.globalGraph.size}px` : '0px',
                },
                '& .leaflet-control-scale': {
                    marginLeft:
                        width < 750 || width - marginLeft < 500
                            ? `${(parseFloat(mainMenuWidth) || 0) + (parseFloat(menuInfoWidth) || 0) + 20}px`
                            : `${marginLeft}px`,
                    display: width > 750 && width - marginLeft > 500 ? 'inline-block' : 'flex',
                    float: 'none',
                    marginBottom: ctx.globalGraph?.show ? `${ctx.globalGraph.size + 20}px` : '20px',
                },
                '& .leaflet-control-attribution': {
                    left: `${(parseFloat(mainMenuWidth) || 0) + (parseFloat(menuInfoWidth) || 0)}px`,
                    marginLeft: '20px',
                    borderRadius: '4px !important',
                    marginBottom: ctx.globalGraph?.show ? `${ctx.globalGraph.size + 20}px` : '20px',
                },
                '& .leaflet-control-layers-toggle': {
                    width: '0px !important',
                    height: '0px !important',
                },
                '& .leaflet-bar': {
                    border: '4px !important',
                    width: '40px !important',
                },
                '& .leaflet-bar a': {
                    width: '40px !important',
                    color: '#757575',
                    border: '4px !important',
                },
            }}
        >
            <MapContainer
                zoom={initialZoom}
                center={initialPosition}
                minZoom={1}
                maxZoom={20}
                zoomControl={false}
                whenReady={whenReadyHandler}
                contextmenu={true}
                contextmenuItems={[]}
                editable={true}
                attributionControl={false}
                style={{ width: '100%', height: '100%' }}
            >
                {routersReady && <CloudTrackLayer />}
                {routersReady && <LocalClientTrackLayer />}
                {routersReady && <NavigationLayer geocodingData={geocodingData} region={regionData} />}
                <TrackAnalyzerLayer />
                <ShareFileLayer />
                <TravelLayer />
                <FavoriteLayer />
                <WeatherLayer />
                <GraphLayer />
                <PoiLayer />
                <SearchLayer />
                <ExploreLayer />
                <CustomTileLayer
                    ref={tileLayer}
                    attribution='OsmAnd Web Beta &amp;copy <a href="https://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'
                    minZoom={1}
                    maxZoom={20}
                    maxNativeZoom={19}
                />
                <HeightmapLayer />
                {hoverPoint && (
                    <Marker ref={hoverPointRef} position={hoverPoint} icon={MarkerOptions.options.pointerGraph} />
                )}
                <ScaleControl position="bottomleft" imperial={false} />
                <AttributionControl position="bottomleft" prefix={false} />
                <LocationControl position="bottomright" />
                <ZoomControl position="bottomright" />
                <ContextMenu setGeocodingData={setGeocodingData} setRegionData={setRegionData} />
            </MapContainer>
        </Box>
    );
};

export default OsmAndMap;

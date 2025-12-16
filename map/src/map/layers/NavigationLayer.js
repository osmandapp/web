import React, { useEffect, useRef, useContext, useCallback } from 'react';
import { Marker, GeoJSON, useMap, Popup } from 'react-leaflet';
import L from 'leaflet';
import AppContext, { isRouteTrack, OBJECT_TYPE_NAVIGATION_ALONE } from '../../context/AppContext';
import MarkerOptions from '../markers/MarkerOptions';
import { fitBoundsOptions } from '../../manager/track/TracksManager';
import {
    ROUTE_POINTS_START,
    ROUTE_POINTS_FINISH,
    ROUTE_POINTS_VIA,
    ROUTE_POINTS_AVOID_ROADS,
} from '../../store/geoRouter/profileConstants';
import { NAVIGATE_URL } from '../../manager/GlobalManager';
import { pickNextRoutePoint } from '../../menu/navigation/NavigationMenu';

const DRAG_DEBOUNCE_MS = 10;

function moveableMarker(routeObject, map, marker) {
    let startPx = null;
    let startLL = null; // LatLng

    function trackCursor(evt) {
        marker.setLatLng(evt.latlng);
    }

    marker.on('mousedown', () => {
        startLL = marker.getLatLng();
        startPx = map.latLngToLayerPoint(startLL);
        map.dragging.disable();
        map.on('mousemove', trackCursor);
    });

    marker.on('mouseup', () => {
        map.dragging.enable();
        map.off('mousemove', trackCursor);

        if (!startPx) return;
        const endPx = map.latLngToLayerPoint(marker.getLatLng());
        const moved = Math.abs(endPx.x - startPx.x) + Math.abs(endPx.y - startPx.y);

        if (moved > 10) {
            routeObject.routeAddViaPoint({ ll: marker.getLatLng(), old: startLL });
        }

        startPx = null;
        startLL = null;
    });

    return marker;
}

const NavigationLayer = ({ geocodingData, region }) => {
    const map = useMap();
    const ctx = useContext(AppContext);

    const makeDotIcon = useCallback((color = '#ff7800', opacity = 0.9, size = 16, border = '#000', strokeWidth = 1) => {
        const r = size / 2 - strokeWidth / 2;
        const c = size / 2;
        const svg =
            `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="display:block">` +
            `<circle cx="${c}" cy="${c}" r="${r}" fill="${color}" fill-opacity="${opacity}" stroke="${border}" stroke-width="${strokeWidth}"/>` +
            `</svg>`;
        return L.divIcon({
            className: 'nav-dot-icon',
            html: svg,
            iconSize: [size, size],
            iconAnchor: [size / 2, size / 2],
        });
    }, []);

    const routeObject = ctx.routeObject;

    useEffect(() => {
        const container = map.getContainer();

        const updateCursor = () => {
            if (!globalThis.location.pathname.includes(NAVIGATE_URL)) {
                container.style.cursor = '';
                return;
            }
            container.style.cursor = pickNextRoutePoint(routeObject, ctx.viaInputsCount || 0) ? 'crosshair' : '';
        };

        const handleMapClick = (event) => {
            if (!globalThis.location.pathname.includes(NAVIGATE_URL)) {
                return;
            }
            if (event?.originalEvent?.button !== 0) {
                return;
            }
            const latlng = event?.latlng;
            if (!latlng) {
                return;
            }

            // Find first empty input from top to bottom (start -> intermediates -> finish)
            const target = pickNextRoutePoint(routeObject, ctx.viaInputsCount || 0);
            if (!target) {
                updateCursor();
                return;
            }
            const point = L.latLng(latlng.lat, latlng.lng);

            // remove focus from all inputs
            globalThis.dispatchEvent(new Event('nav-blur'));

            // Handle intermediate point
            if (target.type === ROUTE_POINTS_VIA) {
                const viaPoints = routeObject.getOption(ROUTE_POINTS_VIA) || [];
                const newViaPoints = [...viaPoints];
                while (newViaPoints.length <= target.index) {
                    newViaPoints.push(null);
                }
                newViaPoints[target.index] = point;
                routeObject.setOption(ROUTE_POINTS_VIA, newViaPoints);
            } else {
                // Handle start or finish point
                routeObject.setOption(target, point);
            }

            ctx.setRouteTrackFile(null);

            updateCursor();
            if (event?.originalEvent) {
                event.originalEvent.navigationHandled = true;
            }
        };

        // Don't register click handler when context menu is open
        if (ctx.openContextMenu) {
            updateCursor();
            map.on('mousemove', updateCursor);
            return () => {
                map.off('mousemove', updateCursor);
                container.style.cursor = '';
            };
        }

        updateCursor();
        map.on('click', handleMapClick);
        map.on('mousemove', updateCursor);

        return () => {
            map.off('click', handleMapClick);
            map.off('mousemove', updateCursor);
            container.style.cursor = '';
        };
    }, [routeObject, ctx.openContextMenu, ctx.viaInputsCount]);

    const startPoint = routeObject.getOption(ROUTE_POINTS_START);
    const finishPoint = routeObject.getOption(ROUTE_POINTS_FINISH);
    const viaPoints = routeObject.getOption(ROUTE_POINTS_VIA);
    const avoidRoads = routeObject.getOption(ROUTE_POINTS_AVOID_ROADS);

    let timer = null;
    function debouncer(f) {
        if (timer === null) {
            timer = setTimeout(() => {
                timer = null;
                f();
            }, DRAG_DEBOUNCE_MS);
        }
    }

    const startPointRef = useRef(null);
    const finishPointRef = useRef(null);
    const pinPointRef = useRef(null);
    const startEventHandlers = useCallback(
        {
            drag() {
                const marker = startPointRef.current;
                if (marker != null) {
                    debouncer(() => routeObject.setOption(ROUTE_POINTS_START, marker.getLatLng()));
                }
            },
            dragstart() {
                routeObject.onDragStart();
            },
            dragend() {
                routeObject.onDragEnd();
                const marker = startPointRef.current;
                if (marker != null) {
                    routeObject.setOption(ROUTE_POINTS_START, marker.getLatLng());
                    ctx.setRouteTrackFile(null);
                }
            },
            click() {
                if (!globalThis.location.pathname.includes(NAVIGATE_URL)) {
                    ctx.setCurrentObjectType(OBJECT_TYPE_NAVIGATION_ALONE);
                }
            },
        },
        [startPointRef]
    );

    const endEventHandlers = useCallback(
        {
            drag() {
                const marker = finishPointRef.current;
                if (marker != null) {
                    debouncer(() => routeObject.setOption(ROUTE_POINTS_FINISH, marker.getLatLng()));
                }
            },
            dragstart() {
                routeObject.onDragStart();
            },
            dragend() {
                routeObject.onDragEnd();
                const marker = finishPointRef.current;
                if (marker != null) {
                    routeObject.setOption(ROUTE_POINTS_FINISH, marker.getLatLng());
                    ctx.setRouteTrackFile(null);
                }
            },
            click() {
                if (!globalThis.location.pathname.includes(NAVIGATE_URL)) {
                    ctx.setCurrentObjectType(OBJECT_TYPE_NAVIGATION_ALONE);
                }
            },
        },
        [finishPointRef]
    );

    const pinEventHandlers = useCallback(
        {
            dragend() {
                const marker = pinPointRef.current;
                if (marker != null) {
                    ctx.setPinPoint(marker.getLatLng());
                    ctx.setRouteTrackFile(null);
                }
            },
        },
        [pinPointRef]
    );

    const intermediateEventHandlers = useCallback(
        {
            drag(event) {
                debouncer(() => {
                    const ind = event.target.options['data-index'];
                    const newViaPoints = Object.assign([], viaPoints);
                    newViaPoints[ind] = event.target.getLatLng();
                    routeObject.setOption(ROUTE_POINTS_VIA, newViaPoints);
                });
            },
            dragstart() {
                routeObject.onDragStart();
            },
            dragend(event) {
                routeObject.onDragEnd();
                const ind = event.target.options['data-index'];
                const newViaPoints = Object.assign([], viaPoints);
                newViaPoints[ind] = event.target.getLatLng();
                routeObject.setOption(ROUTE_POINTS_VIA, newViaPoints);
            },
        },
        [viaPoints]
    );

    const geojsonMarkerOptions = {
        radius: 8,
        fillColor: '#ff7800',
        color: '#000',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8,
    };

    const onEachFeature = ({ feature, layer, id = null }) => {
        if (feature.properties?.description) {
            let desc = feature.properties.description;
            if (feature.properties.roadId) {
                const id = feature.properties.roadId;
                const name = 'Way ' + Math.trunc(id / 64);
                const osm = Math.floor(id / 64);

                window['addAvoidRoadId' + id] = () => {
                    const newAvoidRoads = Object.assign([], avoidRoads);
                    newAvoidRoads.push({ id, name });
                    routeObject.setOption(ROUTE_POINTS_AVOID_ROADS, newAvoidRoads);
                };

                desc = `${desc}.
                    <input type="button" value="Avoid" onclick="addAvoidRoadId${id}()"/>
                    <a href="https://openstreetmap.org/way/${osm}" target="_blank">${name}</a>`;
            }
            layer.on('add', function () {
                const el = layer.getElement();
                if (el) {
                    el.setAttribute('id', id);
                }
            });
            layer.bindPopup(desc);
        }
        layer.on('click', () => {
            if (!globalThis.location.pathname.includes(NAVIGATE_URL)) {
                ctx.setCurrentObjectType(OBJECT_TYPE_NAVIGATION_ALONE);
            }
        });
    };

    // filter features for GeoJSON
    const routeFilter = (feature /*, layer*/) => {
        return !(feature?.geometry?.type === 'Point' && routeObject.getOption('route.map.hidePoints') === true);
    };

    const pointToLayer = (feature, latlng) => {
        let opts = { ...geojsonMarkerOptions };
        if (feature.properties?.description?.includes('[MUTE]')) {
            opts.fillColor = '#777';
        }
        return moveableMarker(
            routeObject,
            map,
            L.marker(latlng, {
                icon: makeDotIcon(opts.fillColor, opts.fillOpacity),
                interactive: true,
            })
        );
    };

    const pointToLayerGeoData = (feature, latlng) => {
        let opts = { ...geojsonMarkerOptions };
        if (feature.properties && feature.properties.index) {
            opts.fillOpacity = Math.min(1 / Math.log(feature.properties.index + 2), 1);
            let clrs = ['#6DD6DA', '#95D9DA', '#A2ABB5', '#AE8CA3', '#817F82'];
            let indx = [2, 5, 7, 10, 20];
            for (var i = 0; i < indx.length; i++) {
                if (feature.properties.index > indx[i]) {
                    opts.fillColor = clrs[i];
                }
            }
        }
        return L.marker(latlng, {
            icon: makeDotIcon(opts.fillColor, opts.fillOpacity),
            interactive: true,
        });
    };

    // GeoJSON requires dynamic key to refresh/refilter
    // used to redraw layer(s) killed after Local Track Editor
    const refreshKey = isRouteTrack(ctx).toString();
    const routeDataKey = routeObject.getRouteKey() + refreshKey;

    const routeLayerRef = useRef(null);
    const routeLayer = routeLayerRef.current;

    const viaLayersRef = useRef([]);

    // fitBounds (route)
    // activated on route.map.zoom
    const routeZoom = routeObject.getOption('route.map.zoom');
    useEffect(() => {
        if (routeLayer && routeZoom) {
            routeObject.setOption('route.map.zoom', false);
            map.fitBounds(routeLayer.getBounds(), fitBoundsOptions(ctx));
        }
    }, [routeZoom, routeLayer]);

    // conceal (remove layer)
    // activated on route.map.conceal
    // dep on routeLayer to concel refreshed layer again
    const routeConceal = routeObject.getOption('route.map.conceal');
    useEffect(() => {
        if (routeLayer && routeConceal) {
            // stop conceal only when isRouteTrack mode started
            if (isRouteTrack(ctx)) {
                routeObject.setOption('route.map.conceal', false);
            }

            // avoid conceal if zoom is requested
            if (routeZoom === false) {
                map.removeLayer(routeLayer);

                // remove start, finish
                map.removeLayer(startPointRef.current);
                map.removeLayer(finishPointRef.current);

                // remove viaPoints (ref array) and reset the array
                viaLayersRef.current.forEach((m) => m && map.removeLayer(m));
                viaLayersRef.current = [];
            }
        }
    }, [routeConceal, routeLayer]);

    // pass geojson.features.style to set colors/etc
    const passStyle = (f) => {
        if (!f.style && f.geometry?.type === 'LineString') {
            f.style = { color: routeObject.getColor() };
        }
        return f.style;
    };

    return (
        <>
            {routeObject.getRoute() && (
                <GeoJSON
                    ref={routeLayerRef}
                    key={routeDataKey}
                    data={routeObject.getRoute()}
                    style={passStyle}
                    pointToLayer={pointToLayer}
                    onEachFeature={(feature, layer) => onEachFeature({ feature, layer })}
                    filter={routeFilter}
                />
            )}
            {geocodingData && (
                <GeoJSON
                    key={geocodingData.id + refreshKey}
                    data={geocodingData.geojson}
                    pointToLayer={pointToLayerGeoData}
                    onEachFeature={(feature, layer) => onEachFeature({ feature, layer, id: 'se-geojson-search' })}
                />
            )}
            {startPoint && (
                <Marker
                    key={'mark-start' + refreshKey}
                    position={startPoint}
                    icon={MarkerOptions.options.startIcon}
                    ref={startPointRef}
                    draggable={true}
                    eventHandlers={startEventHandlers}
                    zIndexOffset={1000}
                />
            )}
            {viaPoints.map((it, ind) => (
                <Marker
                    ref={(m) => m && viaLayersRef.current.push(m)}
                    key={'mark-via' + ind + refreshKey}
                    data-index={ind}
                    position={it}
                    icon={MarkerOptions.options.interIcon}
                    draggable={true}
                    eventHandlers={intermediateEventHandlers}
                    zIndexOffset={1000}
                />
            ))}
            {finishPoint && (
                <Marker
                    key={'mark-finish' + refreshKey}
                    position={finishPoint}
                    icon={MarkerOptions.options.endIcon}
                    ref={finishPointRef}
                    draggable={true}
                    eventHandlers={endEventHandlers}
                    zIndexOffset={1000}
                />
            )}
            {ctx.pinPoint && (
                <Marker
                    key={'pin-point' + refreshKey}
                    position={ctx.pinPoint}
                    icon={MarkerOptions.options.pointerIcons}
                    ref={pinPointRef}
                    draggable={true}
                    eventHandlers={pinEventHandlers}
                />
            )}
            {region && <Popup position={region.latlng}>{region.regions}</Popup>}
        </>
    );
};

export default NavigationLayer;

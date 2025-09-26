import React, { useEffect, useRef, useContext, useCallback } from 'react';
import { Marker, GeoJSON, useMap, Popup } from 'react-leaflet';
import L from 'leaflet';
import AppContext, { isRouteTrack, OBJECT_TYPE_NAVIGATION_ALONE } from '../../context/AppContext';
import MarkerOptions from '../markers/MarkerOptions';
import { fitBoundsOptions } from '../../manager/track/TracksManager';

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

    const startPoint = routeObject.getOption('route.points.start');
    const finishPoint = routeObject.getOption('route.points.finish');
    const viaPoints = routeObject.getOption('route.points.viaPoints');
    const avoidRoads = routeObject.getOption('route.points.avoidRoads');

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
                    debouncer(() => routeObject.setOption('route.points.start', marker.getLatLng()));
                }
            },
            dragstart() {
                routeObject.onDragStart();
            },
            dragend() {
                routeObject.onDragEnd();
                const marker = startPointRef.current;
                if (marker != null) {
                    routeObject.setOption('route.points.start', marker.getLatLng());
                    ctx.setRouteTrackFile(null);
                }
            },
            click() {
                ctx.setCurrentObjectType(OBJECT_TYPE_NAVIGATION_ALONE);
            },
        },
        [startPointRef]
    );

    const endEventHandlers = useCallback(
        {
            drag() {
                const marker = finishPointRef.current;
                if (marker != null) {
                    debouncer(() => routeObject.setOption('route.points.finish', marker.getLatLng()));
                }
            },
            dragstart() {
                routeObject.onDragStart();
            },
            dragend() {
                routeObject.onDragEnd();
                const marker = finishPointRef.current;
                if (marker != null) {
                    routeObject.setOption('route.points.finish', marker.getLatLng());
                    ctx.setRouteTrackFile(null);
                }
            },
            click() {
                ctx.setCurrentObjectType(OBJECT_TYPE_NAVIGATION_ALONE);
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
                    routeObject.setOption('route.points.viaPoints', newViaPoints);
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
                routeObject.setOption('route.points.viaPoints', newViaPoints);
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
                    routeObject.setOption('route.points.avoidRoads', newAvoidRoads);
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
        layer.on('click', (e) => {
            ctx.setCurrentObjectType(OBJECT_TYPE_NAVIGATION_ALONE);
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

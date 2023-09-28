import React, { useEffect, useRef, useContext, useCallback } from 'react';
import { Marker, GeoJSON, useMap, Popup } from 'react-leaflet';
import L from 'leaflet';
import AppContext from '../../context/AppContext';
import MarkerOptions from '../markers/MarkerOptions';
import { FIT_BOUNDS_OPTIONS } from '../../manager/TracksManager';

const DRAG_DEBOUNCE_MS = 10;

function moveableMarker(routeObject, map, marker) {
    let moved;
    let mv;

    function trackCursor(evt) {
        marker.setLatLng(evt.latlng);
    }

    marker.on('mousedown', () => {
        moved = marker._point;
        mv = marker.getLatLng();
        map.dragging.disable();
        map.on('mousemove', trackCursor);
    });

    marker.on('mouseup', () => {
        map.dragging.enable();
        map.off('mousemove', trackCursor);
        if (moved && Math.abs(moved.x - marker._point.x) + Math.abs(moved.y - marker._point.y) > 10) {
            routeObject.routeAddViaPoint({ ll: marker.getLatLng(), old: mv });
        }
    });

    return marker;
}

const RouteLayer = ({ geocodingData, region }) => {
    const map = useMap();
    const ctx = useContext(AppContext);

    const routeObject = ctx.routeObject;

    const startPoint = routeObject.getOption('route.points.start');
    const finishPoint = routeObject.getOption('route.points.finish');
    const viaPoints = routeObject.getOption('route.points.viaPoints');
    const avoidRoads = routeObject.getOption('route.points.avoidRoads');

    let timer = null;
    function debouncer(f) {
        // if (timer) { clearTimeout(timer); timer = null; } // another kind of debouncer
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

    const onEachFeature = (feature, layer) => {
        if (feature.properties && feature.properties.description) {
            let desc = feature.properties.description;
            if (feature.properties.roadId) {
                const id = feature.properties.roadId;
                const name = 'Way ' + Math.trunc(id / 64);
                const osm = id / 64;

                window['addAvoidRoadId' + id] = () => {
                    const newAvoidRoads = Object.assign([], avoidRoads);
                    newAvoidRoads.push({ id, name });
                    routeObject.setOption('route.points.avoidRoads', newAvoidRoads);
                };

                desc = `${desc}.
                    <input type="button" value="Avoid" onclick="addAvoidRoadId${id}()"/>
                    <a href="https://openstreetmap.org/way/${osm}" target="_blank">${name}</a>`;
            }
            layer.bindPopup(desc);
        }
    };

    // filter features for GeoJSON
    const routeFilter = (feature /*, layer*/) => {
        if (feature?.geometry?.type === 'Point' && routeObject.getOption('route.map.hidePoints') === true) {
            return false;
        }
        return true;
    };

    // GeoJSON requires dynamic key to refresh/refilter
    const routeDataKey = () => routeObject.getRouteKey();

    const pointToLayer = (feature, latlng) => {
        let opts = Object.assign({}, geojsonMarkerOptions);
        if (feature.properties && feature.properties.description && feature.properties.description.includes('[MUTE]')) {
            opts.fillColor = '#777';
        }
        return moveableMarker(routeObject, map, L.circleMarker(latlng, opts));
    };

    const pointToLayerGeoData = (feature, latlng) => {
        let opts = Object.assign({}, geojsonMarkerOptions);
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
        return L.circleMarker(latlng, opts);
    };

    const pointToLayerSearch = (feature, latlng) => {
        let opts = Object.assign({}, geojsonMarkerOptions);
        if (feature.properties && feature.properties.index) {
            opts.fillOpacity = Math.min(1 / Math.log(feature.properties.index + 2), 1);
            let clrs = ['#6DD6DA', '#95D9DA', '#A2ABB5', '#AE8CA3', '#817F82'];
            let indx = [3, 10, 30, 100, 1000];
            for (var i = 0; i < indx.length; i++) {
                if (feature.properties.index > indx[i]) {
                    opts.fillColor = clrs[i];
                }
            }
        }

        return L.circleMarker(latlng, opts);
    };

    useEffect(() => {
        let searchRes = ctx.searchCtx.chooseResult;
        if (searchRes) {
            map.flyTo([searchRes[1], searchRes[0]], 17);
        }
    }, [ctx.searchCtx]);

    // fitBounds (route)
    // activated on route.map.zoom
    const routeLayerRef = useRef(null);
    const routeLayer = routeLayerRef.current;
    const routeZoom = routeObject.getOption('route.map.zoom');
    useEffect(() => {
        if (routeLayer && routeZoom) {
            routeObject.setOption('route.map.zoom', false);
            map.fitBounds(routeLayer.getBounds(), { ...FIT_BOUNDS_OPTIONS, padding: [100, 100] }); // FIXME padding global
        }
    }, [routeZoom, routeLayer]);

    const passStyle = (f) => f.style; // pass geojson.features.style to set colors/etc

    return (
        <>
            {routeObject.getRoute() && (
                <GeoJSON
                    ref={routeLayerRef}
                    key={routeDataKey()}
                    data={routeObject.getRoute()}
                    style={passStyle}
                    pointToLayer={pointToLayer}
                    onEachFeature={onEachFeature}
                    filter={routeFilter}
                />
            )}
            {geocodingData && (
                <GeoJSON
                    key={geocodingData.id}
                    data={geocodingData.geojson}
                    pointToLayer={pointToLayerGeoData}
                    onEachFeature={onEachFeature}
                />
            )}
            {ctx.searchCtx.geojson && (
                <GeoJSON
                    key={ctx.searchCtx.id}
                    data={ctx.searchCtx.geojson}
                    pointToLayer={pointToLayerSearch}
                    onEachFeature={onEachFeature}
                />
            )}
            {startPoint && (
                <Marker
                    position={startPoint}
                    icon={MarkerOptions.options.startIcon}
                    ref={startPointRef}
                    draggable={true}
                    eventHandlers={startEventHandlers}
                />
            )}
            {viaPoints.map((it, ind) => (
                <Marker
                    key={'mark' + ind}
                    data-index={ind}
                    position={it}
                    icon={MarkerOptions.options.interIcon}
                    draggable={true}
                    eventHandlers={intermediateEventHandlers}
                />
            ))}
            {finishPoint && (
                <Marker
                    position={finishPoint}
                    icon={MarkerOptions.options.endIcon}
                    ref={finishPointRef}
                    draggable={true}
                    eventHandlers={endEventHandlers}
                />
            )}
            {ctx.pinPoint && (
                <Marker
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

export default RouteLayer;

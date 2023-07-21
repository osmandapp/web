import React, { useEffect, useRef, useContext, useState, useCallback } from 'react';
import { Marker, GeoJSON, useMap, Popup } from 'react-leaflet';
import L from 'leaflet';
import AppContext from '../../context/AppContext';
import { useNavigate, useLocation } from 'react-router-dom';
import MarkerOptions from '../markers/MarkerOptions';

const DRAG_DEBOUNCE_MS = 10;

function moveableMarker(ctx, map, marker) {
    let moved;
    let mv;

    function trackCursor(evt) {
        marker.setLatLng(evt.latlng);
    }

    // marker.on("mousemove", () => {
    //     if (moved) {
    //         console.log('drag...');
    //     }
    // })

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
            ctx.routeRouter.newInterPoint({ ctx, ll: marker.getLatLng(), old: mv });
        }
    });

    return marker;
}

const RouteLayer = ({ geocodingData, region }) => {
    const map = useMap();
    const ctx = useContext(AppContext);
    const navigate = useNavigate();
    const url = useLocation();

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

    const [routeQueryStringParams, setRouteQueryStringParams] = useState({});
    const [routeQueryStringCleanup, setQueryStringCleanup] = useState(false);

    useEffect(() => {
        if (ctx.routeRouter.isReady()) {
            let obj = {};
            if (ctx.startPoint) {
                obj['start'] = ctx.startPoint.lat.toFixed(6) + ',' + ctx.startPoint.lng.toFixed(6);
            }
            if (ctx.endPoint) {
                obj['end'] = ctx.endPoint.lat.toFixed(6) + ',' + ctx.endPoint.lng.toFixed(6);
            }
            if (ctx.pinPoint) {
                obj['pin'] = ctx.pinPoint.lat.toFixed(6) + ',' + ctx.pinPoint.lng.toFixed(6);
            }
            if (ctx.interPoints?.length > 0) {
                obj['inter'] = ctx.interPoints.map((i) => i.lat.toFixed(6) + ',' + i.lng.toFixed(6)).join(';');
            }
            if (ctx.avoidRoads?.length > 0) {
                obj['avoid'] = ctx.avoidRoads.map(({ id }) => id).join(';');
            }
            const qs = new URLSearchParams(window.location.search);
            if (Object.keys(obj).length > 0 || (qs.get('type') && qs.get('profile'))) {
                const { type, profile } = ctx.routeRouter.getProfile();
                obj.type = type;
                obj.profile = profile;
            }
            if (Object.keys(obj).length > 0 || routeQueryStringCleanup) {
                setQueryStringCleanup(true);
                setRouteQueryStringParams(obj);
            }
        }
    }, [ctx.startPoint, ctx.endPoint, ctx.pinPoint, ctx.interPoints, ctx.avoidRoads, ctx.routeRouter.getEffectDeps()]);

    useEffect(() => {
        if (ctx.routeRouter.isReady() && (Object.keys(routeQueryStringParams).length > 0 || routeQueryStringCleanup)) {
            if (Object.keys(routeQueryStringParams).length === 0) {
                setQueryStringCleanup(false); // only once
            }
            const pretty = new URLSearchParams(Object.entries(routeQueryStringParams))
                .toString()
                .replaceAll('%2C', ',')
                .replaceAll('%3B', ';');
            navigate({
                hash: url.hash,
                search: '?' + pretty,
            });
        }
    }, [routeQueryStringParams, ctx.routeRouter.isReady()]); // setRouteQueryStringParams

    const startPointRef = useRef(null);
    const endPointRef = useRef(null);
    const pinPointRef = useRef(null);
    const startEventHandlers = useCallback(
        {
            drag() {
                const marker = startPointRef.current;
                if (marker != null) {
                    debouncer(() => ctx.setStartPoint(marker.getLatLng()));
                }
            },
            dragstart() {
                ctx.routeRouter.onDragStart();
            },
            dragend() {
                ctx.routeRouter.onDragEnd();
                const marker = startPointRef.current;
                if (marker != null) {
                    ctx.setStartPoint(marker.getLatLng());
                    ctx.setRouteTrackFile(null);
                }
            },
            // click() {
            //     // ctx.setStartPoint(null);
            //     // ctx.setRouteData(null);
            // }
        },
        [ctx.setStartPoint, startPointRef]
    );

    const endEventHandlers = useCallback(
        {
            drag() {
                const marker = endPointRef.current;
                if (marker != null) {
                    debouncer(() => ctx.setEndPoint(marker.getLatLng()));
                }
            },
            dragstart() {
                ctx.routeRouter.onDragStart();
            },
            dragend() {
                ctx.routeRouter.onDragEnd();
                const marker = endPointRef.current;
                if (marker != null) {
                    ctx.setEndPoint(marker.getLatLng());
                    ctx.setRouteTrackFile(null);
                }
            },
        },
        [ctx.setEndPoint, endPointRef]
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
        [ctx.setPinPoint, pinPointRef]
    );

    const intermediatEventHandlers = useCallback(
        {
            // click called after dragend
            // clicknotworking(event) {
            //     let ind = event.target.options['data-index'];
            //     let newinter = Object.assign([], ctx.interPoints);
            //     newinter.splice(ind, 1);
            //     ctx.setInterPoints(newinter);
            // },
            drag(event) {
                debouncer(() => {
                    let ind = event.target.options['data-index'];
                    let newinter = Object.assign([], ctx.interPoints);
                    newinter[ind] = event.target.getLatLng();
                    ctx.setInterPoints(newinter);
                });
            },
            dragstart() {
                ctx.routeRouter.onDragStart();
            },
            dragend(event) {
                ctx.routeRouter.onDragEnd();
                let ind = event.target.options['data-index'];
                let newinter = Object.assign([], ctx.interPoints);
                newinter[ind] = event.target.getLatLng();
                ctx.setInterPoints(newinter);
            },
        },
        [ctx.setInterPoints, ctx.interPoints]
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

                window['addAvoidRoadId' + id] = () => {
                    let newAvoidRoads = Object.assign([], ctx.avoidRoads);
                    newAvoidRoads.push({ id, name });
                    ctx.setAvoidRoads(newAvoidRoads);
                };

                desc = `${desc}. <input type="button" value="Avoid ${name}" onclick="addAvoidRoadId${id}()"/>`;
            }
            layer.bindPopup(desc);
        }
    };

    // filter features for GeoJSON
    const routeFilter = (feature /*, layer*/) => {
        if (feature?.geometry?.type === 'Point' && ctx.routeShowPoints === false) {
            return false;
        }
        return true;
    };

    // GeoJSON requires dynamic key to refresh (used for re-filtering)
    const routeDataKey = () => ctx.routeData.id + ':' + ctx.routeShowPoints;

    const pointToLayer = (feature, latlng) => {
        let opts = Object.assign({}, geojsonMarkerOptions);
        if (feature.properties && feature.properties.description && feature.properties.description.includes('[MUTE]')) {
            opts.fillColor = '#777';
        }
        return moveableMarker(ctx, map, L.circleMarker(latlng, opts));
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
    }, [ctx.searchCtx, ctx.setSearchCtx]);

    const passStyle = (f) => f.style; // pass geojson.features.style to set colors/etc

    return (
        <>
            {ctx.routeData && (
                <GeoJSON
                    key={routeDataKey()}
                    data={ctx.routeData.geojson}
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
            {ctx.startPoint && (
                <Marker
                    position={ctx.startPoint}
                    icon={MarkerOptions.options.startIcon}
                    ref={startPointRef}
                    draggable={true}
                    eventHandlers={startEventHandlers}
                />
            )}
            {ctx.interPoints.map((it, ind) => (
                <Marker
                    key={'mark' + ind}
                    data-index={ind}
                    position={it}
                    icon={MarkerOptions.options.interIcon}
                    draggable={true}
                    eventHandlers={intermediatEventHandlers}
                />
            ))}
            {ctx.endPoint && (
                <Marker
                    position={ctx.endPoint}
                    icon={MarkerOptions.options.endIcon}
                    ref={endPointRef}
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

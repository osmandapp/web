import React, { useEffect, useRef, useContext, useState, useCallback } from 'react';
import { Marker, GeoJSON, useMap, Popup } from "react-leaflet";
import L from 'leaflet';
import MarkerIcon from '../MarkerIcon.js'
import AppContext from "../../context/AppContext";
import { useNavigate, useLocation } from 'react-router-dom';



function dist(a1, a2) {
    // distance is not correct
    return (a1.lat - a2.lat) * (a1.lat - a2.lat) +
        (a1.lng - a2.lng) * (a1.lng - a2.lng);
}

function moveableMarker(ctx, map, marker) {
    let moved ;
    let mv;
    function trackCursor(evt) {
        marker.setLatLng(evt.latlng)
    }

    marker.on("mousedown", () => {
        moved = marker._point;
        mv = marker.getLatLng();
        map.dragging.disable()
        map.on("mousemove", trackCursor)
    })

    marker.on("mouseup", () => {
        map.dragging.enable();
        map.off("mousemove", trackCursor);
        if (moved && Math.abs(moved.x - marker._point.x) + Math.abs(moved.y - marker._point.y) > 10) {
            let newInterPoints = Object.assign([], ctx.interPoints);
            let minInd = -1;
            if (ctx.interPoints.length > 0) {
                let minDist = dist(ctx.endPoint, mv) +
                    dist(ctx.interPoints[ctx.interPoints.length - 1], mv);
                for (let i = 0; i < ctx.interPoints.length; i++) {
                    let dst = dist(i === 0 ? ctx.startPoint : ctx.interPoints[i - 1], mv) +
                        dist(ctx.interPoints[i], mv);
                    if (dst < minDist) {
                        minInd = i;
                        minDist = dst;
                    }
                }
            }
            if (minInd < 0) {
                newInterPoints.push(marker.getLatLng());
            } else {
                newInterPoints.splice(minInd, 0, marker.getLatLng());
            }
            ctx.setInterPoints(newInterPoints);
        }
    })

    return marker
}


const RouteLayer = () => {
    const map = useMap();
    const ctx = useContext(AppContext);
    const navigate = useNavigate();
    const url = useLocation();

    const [geocodingData, setGeocodingData] = useState(null);
    const [searchParams, setSearchParams] = useState({});
    useEffect(() => {
        let obj = {};
        if (ctx.startPoint) {
            obj['start'] = ctx.startPoint.lat.toFixed(6) + ',' + ctx.startPoint.lng.toFixed(6);
        }
        if (ctx.interPoints?.length > 0) {
            let r = '';
            ctx.interPoints.forEach((it, ind) => {
                r += ',' + ctx.endPoint.lat.toFixed(6) + ',' + ctx.endPoint.lng.toFixed(6);
            })
            obj['ipoints'] = r.substring(1);
        }
        if (ctx.endPoint) {
            obj['end'] = ctx.endPoint.lat.toFixed(6) + ',' + ctx.endPoint.lng.toFixed(6);
        }
        if (ctx.pinPoint) {
            obj['pin'] = ctx.pinPoint.lat.toFixed(6) + ',' + ctx.pinPoint.lng.toFixed(6);
        }
        if (Object.keys(obj).length > 0) {
            if (ctx.routeMode?.mode && (Object.keys(obj).includes('start') || Object.keys(obj).includes('end'))) {
                obj['mode'] = ctx.routeMode.mode;
            }
            setSearchParams(obj);
        }
    }, [ctx.startPoint, ctx.endPoint, ctx.pinPoint, ctx.routeMode]);

    useEffect(() => {
        if (searchParams['pin'] || searchParams['start'] || searchParams['end']) {
            navigate({
                hash: url.hash,
                search: "?" + new URLSearchParams(Object.entries(searchParams)).toString()
            })
        }
    }, [searchParams, setSearchParams]);

    const startPointRef = useRef(null);
    const endPointRef = useRef(null);
    const pinPointRef = useRef(null);
    const startEventHandlers = useCallback({
        dragend() {
            const marker = startPointRef.current;
            if (marker != null) {
                ctx.setStartPoint(marker.getLatLng());
                ctx.setRouteTrackFile(null);
            }
        },
        click() {
            // ctx.setStartPoint(null);
            // ctx.setRouteData(null);
        }
    }, [ctx.setStartPoint, startPointRef]);
    const endEventHandlers = useCallback({
        dragend() {
            const marker = endPointRef.current;
            if (marker != null) {
                ctx.setEndPoint(marker.getLatLng());
                ctx.setRouteTrackFile(null);
            }
        }
    }, [ctx.setEndPoint, endPointRef]);
    const pinEventHandlers = useCallback({
        dragend() {
            const marker = pinPointRef.current;
            if (marker != null) {
                ctx.setPinPoint(marker.getLatLng());
                ctx.setRouteTrackFile(null);
            }
        }
    }, [ctx.setPinPoint, pinPointRef]);

    const intermediatEventHandlers = useCallback({
        // click called after dragend
        clicknotworking(event) {
           // console.log('Marker clicked');
            let ind = event.target.options['data-index'];
            let newinter = Object.assign([], ctx.interPoints);
            newinter.splice(ind, 1);
            ctx.setInterPoints(newinter);
        },
        dragend(event) {
            // console.log('Marker dragged');
            let ind = event.target.options['data-index'];
            let newinter = Object.assign([], ctx.interPoints);
            newinter[ind] = event.target.getLatLng();
            ctx.setInterPoints(newinter);
        }
    }, [ctx.setInterPoints, ctx.interPoints]);

    const whereAmI = async (e) => {
        setGeocodingData(null);
        const params = `lat=${e.latlng.lat.toFixed(6)}&lon=${e.latlng.lng.toFixed(6)}`;
        const response = await fetch(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/geocoding?${params}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            let data = await response.json();
            let props = {};
            if (data.features.length > 0) {
                props = data.features[0]?.properties;
            }
            setGeocodingData({ geojson: data, id: new Date().getTime(), props: props });
        }
    };

    useEffect(() => {
        if (map) {
            // const map = mapRef.current;
            map.contextmenu.removeAllItems();
            map.contextmenu.addItem({
                text: 'Set as start',
                callback: (e) => ctx.setStartPoint(e.latlng)
            });
            map.contextmenu.addItem({
                text: 'Set as end',
                callback: (e) => ctx.setEndPoint(e.latlng)
            });
            map.contextmenu.addItem({
                text: 'Add pin',
                callback: (e) => ctx.setPinPoint(e.latlng)
            });
            map.contextmenu.addItem({
                text: 'Where am I',
                callback: whereAmI
            });
        }
    }, [ctx.startPoint, ctx.endPoint, ctx.setStartPoint, ctx.setEndPoint, ctx.pinPoint, ctx.setPinPoint, map, ctx.setRouteData]);
    const geojsonMarkerOptions = {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };
    const onEachFeature = (feature, layer) => {
        if (feature.properties && feature.properties.description) {
            let desc = feature.properties.description;
            if (feature.properties.roadId) {    
                let roadId = feature.properties.roadId;
                let avoidRoadObj = {
                    id: roadId,
                    name: 'Way ' + Math.trunc(roadId / 64)
                };
                window['addAvoidRoadId' + avoidRoadObj.id] = () => {  
                    let newAvoidRoads = Object.assign([], ctx.avoidRoads);
                    newAvoidRoads.push(avoidRoadObj);
                    ctx.setAvoidRoads(newAvoidRoads);
                }
                desc = `${desc}. <a href="#" onclick="addAvoidRoadId${avoidRoadObj.id}()">` +
                    `Avoid ${avoidRoadObj.name}</a>`;
            }
            layer.bindPopup(desc);
        }
    }
    const pointToLayer = (feature, latlng) => {
        let opts = Object.assign({}, geojsonMarkerOptions);
        if (feature.properties && feature.properties.description && 
            feature.properties.description.includes('[MUTE]')) {
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
            let clrs = ['#6DD6DA','#95D9DA', '#A2ABB5', '#AE8CA3','#817F82'];
            let indx = [3, 10, 30, 100, 1000];
            for(var i = 0; i < indx.length; i++) {
                if (feature.properties.index > indx[i]) {
                    opts.fillColor = clrs[i];
                }
            }
        }
        
        return L.circleMarker(latlng, opts);
    };

    return <>
        {ctx.routeData && <GeoJSON key={ctx.routeData.id} data={ctx.routeData.geojson}
            pointToLayer={pointToLayer} onEachFeature={onEachFeature} />}
        {geocodingData && <GeoJSON key={geocodingData.id} data={geocodingData.geojson}
            pointToLayer={pointToLayerGeoData} onEachFeature={onEachFeature} />}
        {ctx.searchCtx.geojson && <GeoJSON key={ctx.searchCtx.id} data={ctx.searchCtx.geojson}
            pointToLayer={pointToLayerSearch} onEachFeature={onEachFeature} />}
        {ctx.startPoint && //<CircleMarker center={ctx.startPoint} radius={5} pathOptions={{ color: 'green' }} opacity={1}
            <Marker position={ctx.startPoint} icon={MarkerIcon({ bg: 'blue' })}
                ref={startPointRef} draggable={true} eventHandlers={startEventHandlers} />}
        {ctx.interPoints.map((it, ind) => 
            // <CircleMarker key={'mark'+ind} center={it} radius={5} pathOptions={{ color: 'green', 
            //     radius: 8, fillOpacity: 0.8 }} opacity={1} on
            <Marker key={'mark' + ind} data-index={ind} position={it} icon={MarkerIcon({ bg: 'blue' })}
                    draggable={true} eventHandlers={intermediatEventHandlers}/>)}
        {ctx.endPoint && <Marker position={ctx.endPoint} icon={MarkerIcon({ bg: 'red' })}
            ref={endPointRef} draggable={true} eventHandlers={endEventHandlers} />}
        {ctx.pinPoint && <Marker position={ctx.pinPoint} icon={MarkerIcon({ bg: 'yellow' })}
                                 ref={pinPointRef} draggable={true} eventHandlers={pinEventHandlers} />}
    </>;
};

export default RouteLayer;

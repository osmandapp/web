import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../context/AppContext";
import {useMap} from "react-leaflet";
import L from "leaflet";
import TrackLayerProvider from "../TrackLayerProvider";
import TracksManager from "../../context/TracksManager";
import MarkerOptions from "../markers/MarkerOptions";
import _ from "lodash";


export default function LocalClientTrackLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [layers, setLayers] = useState({});
    const [selectedPointMarker, setSelectedPointMarker] = useState(null);

    function addTrackToMap(track, fitBounds, active) {
        let layer = TrackLayerProvider.createLayersByTrackData(track);
        if (fitBounds) {
            map.fitBounds(layer.getBounds());
        }
        layer.addTo(map);
        layers[track.name] = {layer: layer, points: TracksManager.getEditablePoints(track), active: active};
    }

    function createPointMarkerOnMap() {
        return new L.marker({
            lng: ctx.selectedGpxFile.showPoint.lng,
            lat: ctx.selectedGpxFile.showPoint.lat
        }, {
            icon: MarkerOptions.options.pointerIcons
        }).addTo(map);
    }

    function showSelectedTrackOnMap() {
        let currLayer = layers[ctx.selectedGpxFile.name];
        if (currLayer) {
            map.fitBounds(currLayer.layer.getBounds());
        }
    }

    function showSelectedPointOnMap() {
        if (selectedPointMarker) {
            map.removeLayer(selectedPointMarker.marker);
        }
        let marker = createPointMarkerOnMap();
        setSelectedPointMarker({marker: marker, trackName: ctx.selectedGpxFile.name});
    }

    useEffect(() => {
        if (ctx.selectedGpxFile?.selected) {
            if (ctx.selectedGpxFile.showPoint) {
                showSelectedPointOnMap();
            }
            // else {
            //     showSelectedTrackOnMap();
            // }
        }
    }, [ctx.selectedGpxFile, ctx.setSelectedGpxFile]);

    function updateTrackOnMap(track, active) {
        map.removeLayer(layers[track.name].layer);
        delete layers[track.name];
        addTrackToMap(track, false, active);
    }

    useEffect(() => {
        for (let l in layers) {
            layers[l].active = false;
        }
        Object.values(ctx.localTracks).forEach((track) => {
            let currLayer = layers[track.name]
            if (track.selected && !currLayer) {
                addTrackToMap(track, true, true);
            } else if (currLayer) {
                currLayer.active = track.selected;
                if (track.updated) {
                    updateTrackOnMap(track, currLayer.active);
                }
            }
        });

        for (let l in layers) {
            if (!layers[l].active) {
                if (selectedPointMarker && selectedPointMarker.trackName === l) {
                    map.removeLayer(selectedPointMarker.marker);
                }
                map.removeLayer(layers[l].layer);
                delete layers[l];
            }
        }

        setLayers({...layers});

    }, [ctx.localTracks, ctx.setLocalTracks]);

    useEffect(() => {
        if (ctx.selectedGpxFile?.addPoint) {
            getNewRoute().then();
        }
        if (ctx.selectedGpxFile?.updateLayers) {
            updateLayers(ctx.selectedGpxFile.tracks[0].points, ctx.selectedGpxFile.layers, true);
            ctx.selectedGpxFile.updateLayers = false;
            saveChanges();
        }
    }, [ctx.selectedGpxFile])

    async function getNewRoute() {
        let prevPoint = ctx.selectedGpxFile.prevPoint;
        let newPoint = ctx.selectedGpxFile.newPoint;
        let points = ctx.selectedGpxFile.tracks[0].points;
        let layers = ctx.selectedGpxFile.layers;
        ctx.selectedGpxFile.addPoint = false;
        if (prevPoint) {
            getProfile(newPoint, prevPoint, points);
            newPoint.geometry = await TracksManager.updateRouteBetweenPoints(ctx, prevPoint, newPoint);
            if (!newPoint.geometry) {
                delete prevPoint.geometry;
                points.pop();
                points.push(prevPoint);
            }
            updateLayers([newPoint], layers, false);
            points.push(newPoint);
            saveChanges();
        } else {
            let layer = new L.Marker((new L.LatLng(newPoint.lat, newPoint.lng)), {
                icon: MarkerOptions.options.route,
                draggable: true
            })
            addEvent([layer]);
            points.push(newPoint);
            layers.addLayer(layer);
        }
    }

    function saveChanges() {
        TracksManager.addDistance(ctx.selectedGpxFile);
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }

    function updateLayers(points, trackLayers, deleteOld) {
        if (trackLayers) {
            let layers = [];
            TrackLayerProvider.parsePoints(points, layers, true);
            addEvent(layers);
            if (deleteOld) {
                trackLayers.clearLayers();
            }
            layers.forEach(layer => {
                trackLayers.addLayer(layer);
            })
        }
    }

    function addEvent(layers) {
        layers.forEach(layer => {
            if (layer instanceof L.Marker) {
                layer.on('dragstart', dragStartPoint);
                layer.on('dragend', dragEndPoint);
            }
        })
    }

    function getProfile(newPoint, prevPoint, points) {
        newPoint.profile = ctx.routeMode.mode;
        if (newPoint.profile !== prevPoint.profile) {
            prevPoint.profile = newPoint.profile;
            points.pop();
            points.push(prevPoint);
        }
    }

    function onMapClickAddPoint(e) {
        ctx.selectedGpxFile.addPoint = true;
        let newPoint = {
            lat: e.latlng.lat,
            lng: e.latlng.lng,
            profile: ctx.routeMode.mode,
            geometry: []
        };

        if (ctx.selectedGpxFile.newPoint) {
            let points = ctx.selectedGpxFile.tracks[0].points;
            ctx.selectedGpxFile.prevPoint = points[points.length - 1];
        }
        ctx.selectedGpxFile.newPoint = newPoint;
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }

    useEffect(() => {
        if (ctx.createTrack?.enable) {
            map.getContainer().style.cursor = 'crosshair';
            if (ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK && ctx.selectedGpxFile?.index >= 0) {
                editCurrentTrack();
            } else {
                deleteOldLayers();
                let type = ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK;
                ctx.setCurrentObjectType(type);
                initNewTrack();
            }
            map.on("click", onMapClickAddPoint);
        } else if (ctx.createTrack?.enable === false) {
            map.getContainer().style.cursor = '';
            map.removeLayer(ctx.selectedGpxFile.layers);
            TracksManager.prepareTrack(ctx.selectedGpxFile);
            ctx.setCreateTrack(null);
            map.off('click');
        }
    }, [ctx.createTrack])

    function initNewTrack() {
        ctx.selectedGpxFile = {};
        ctx.selectedGpxFile.tracks = [];
        let points = [];
        let track = {};
        track["points"] = points;
        ctx.selectedGpxFile.tracks.push(track);
        ctx.selectedGpxFile.name = TracksManager.createName(ctx);
        ctx.selectedGpxFile.layers = new L.FeatureGroup();
        ctx.selectedGpxFile.layers.addTo(map);

        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }

    function editCurrentTrack() {
        map.removeLayer(layers[ctx.selectedGpxFile.name].layer);
        deleteOldLayers();
        let currentTrack = ctx.localTracks.find(t => t.name === ctx.selectedGpxFile.name);
        if (currentTrack) {
            ctx.selectedGpxFile = _.cloneDeep(currentTrack);
        }
        ctx.selectedGpxFile.layers = new L.FeatureGroup();
        let points = ctx.selectedGpxFile.tracks[0].points;
        updateLayers(points, ctx.selectedGpxFile.layers, true);
        ctx.selectedGpxFile.layers.addTo(map);
        ctx.selectedGpxFile.newPoint = points[points.length - 1];

        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }

    function deleteOldLayers() {
        if (ctx.selectedGpxFile?.layers) {
            map.removeLayer(ctx.selectedGpxFile?.layers);
        }
    }

    function dragStartPoint(e) {
        let lat = e.target._latlng.lat;
        let lng = e.target._latlng.lng;
        let ind = ctx.selectedGpxFile.tracks[0].points.findIndex(point => point.lat === lat && point.lng === lng);
        if (ind >= 0) {
            ctx.selectedGpxFile.dragPoint = {
                ind: ind,
                lat: lat,
                lng: lng
            };
            ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
        }
    }

    async function dragEndPoint(e) {
        let lat = e.target._latlng.lat;
        let lng = e.target._latlng.lng;

        let trackPoints = ctx.selectedGpxFile.tracks[0].points;
        let ind = ctx.selectedGpxFile.dragPoint.ind;
        let currentPoint = trackPoints[ind];
        currentPoint.lat = lat;
        currentPoint.lng = lng;

        let prevPoint = trackPoints[ind - 1];
        let nextPoint = trackPoints[ind + 1];

        if (prevPoint) {
            currentPoint.geometry = await TracksManager.updateRouteBetweenPoints(ctx, prevPoint, currentPoint);
        }

        if (nextPoint) {
            nextPoint.geometry = await TracksManager.updateRouteBetweenPoints(ctx, currentPoint, nextPoint);
        }

        let layers = ctx.selectedGpxFile.layers.getLayers();
        let polylines = getPolylines(layers);

        let firstPoint = ind === 0;
        let lastPoint = ind === trackPoints.length - 1;

        if (firstPoint) {
            updatePolyline(nextPoint, ind, polylines);
        } else if (lastPoint) {
            updatePolyline(currentPoint, ind - 1, polylines);
        } else {
            updatePolyline(nextPoint, ind, polylines);
            updatePolyline(currentPoint, ind - 1, polylines);
        }
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }

    function updatePolyline(point, index, polylines) {
        let latlngs = [];
        point.geometry.forEach(point => {
            latlngs.push(new L.LatLng(point.lat, point.lng))
        })
        polylines[index].setLatLngs(latlngs);
    }

    function getPolylines(layers) {
        let res = [];
        layers.forEach(layer => {
            if (layer instanceof L.Polyline) {
                let points = layer.getLatLngs();
                if (points.length > 0) {
                    res.push(layer);
                }
            }
        })
        return res;
    }
}
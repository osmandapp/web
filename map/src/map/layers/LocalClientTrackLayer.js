import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../context/AppContext";
import {useMap} from "react-leaflet";
import L from "leaflet";
import TrackLayerProvider from "../TrackLayerProvider";
import TracksManager from "../../context/TracksManager";
import MarkerOptions from "../markers/MarkerOptions";


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
        if (prevPoint) {
            ctx.selectedGpxFile.addPoint = false;
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
            })
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
            TrackLayerProvider.parsePoints(points, layers);
            if (deleteOld) {
                trackLayers.clearLayers();
            }
            layers.forEach(layer => {
                trackLayers.addLayer(layer);
            })
        }
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
        ctx.selectedGpxFile.layers = new L.FeatureGroup();
        let points = ctx.selectedGpxFile.tracks[0].points;
        updateLayers(points, ctx.selectedGpxFile.layers, true);
        ctx.selectedGpxFile.layers.addTo(map);
        ctx.selectedGpxFile.newPoint = points[points.length - 1];
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }
}
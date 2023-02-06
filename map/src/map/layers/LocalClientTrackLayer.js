import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../context/AppContext";
import {useMap} from "react-leaflet";
import L from "leaflet";
import TrackLayerProvider from "../TrackLayerProvider";
import TracksManager from "../../context/TracksManager";
import MarkerOptions from "../markers/MarkerOptions";
import _ from "lodash";
import EditablePolyline from "../EditablePolyline";
import EditableMarker from "../EditableMarker";
import Utils from "../../util/Utils";


export default function LocalClientTrackLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [layers, setLayers] = useState({});
    const [selectedPointMarker, setSelectedPointMarker] = useState(null);

    useEffect(() => {
        if (ctx.selectedGpxFile?.selected) {
            if (ctx.selectedGpxFile.showPoint) {
                showSelectedPointOnMap();
            }
            // else {
            //     showSelectedTrackOnMap();
            // }
        }
        if (ctx.selectedGpxFile?.addPoint) {
            getNewRoute().then();
        } else {
            checkDragPoint();
        }
        checkUpdateLayers()
    }, [ctx.selectedGpxFile]);

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
        if (ctx.createTrack?.enable && !ctx.createTrack?.layers) {
            if (ctx.createTrack.edit || ctx.selectedGpxFile.analysis) {
                editCurrentTrack();
            } else {
                deleteOldLayers();
                let type = ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK;
                ctx.setCurrentObjectType(type);
                initNewTrack();
            }
            addClickOnMap();
        } else if (ctx.createTrack?.enable === false) {
            if (ctx.createTrack.layers) {
                map.removeLayer(ctx.createTrack.layers);
            }
            ctx.setCreateTrack(null);
            deleteClickOnMap();
        }
    }, [ctx.createTrack])

    function addTrackToMap(track, fitBounds, active) {
        let layer = TrackLayerProvider.createLayersByTrackData(track);
        if (fitBounds) {
            map.fitBounds(layer.getBounds());
        }
        layer.addTo(map);
        layers[track.name] = {layer: layer, points: TracksManager.getEditablePoints(track), active: active};
        ctx.selectedGpxFile.layers = layer;
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
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
        if (ctx.selectedGpxFile.showPoint.wpt) {
            map.setView([ctx.selectedGpxFile.showPoint.layer._latlng.lat, ctx.selectedGpxFile.showPoint.layer._latlng.lng], 17);
        } else {
            if (selectedPointMarker) {
                map.removeLayer(selectedPointMarker.marker);
            }
            let marker = createPointMarkerOnMap();
            setSelectedPointMarker({marker: marker, trackName: ctx.selectedGpxFile.name});
        }
    }

    function checkDragPoint() {
        if (ctx.selectedGpxFile?.dragPoint) {
            deleteClickOnMap();
        } else {
            if (ctx.createTrack?.enable) {
                addClickOnMap();
            }
        }
    }

    function checkUpdateLayers() {
        if (ctx.selectedGpxFile?.updateLayers) {
            updateLayers(ctx.selectedGpxFile.points, ctx.selectedGpxFile.wpts, ctx.selectedGpxFile.layers, true);
            ctx.selectedGpxFile.updateLayers = false;
            saveChanges(ctx.selectedGpxFile.points);
        }
    }

    function updateTrackOnMap(track, active) {
        map.removeLayer(layers[track.name].layer);
        track.layers?.getLayers().forEach(l => {
            map.removeLayer(l);
        })
        delete layers[track.name];
        addTrackToMap(track, false, active);
    }

    async function getNewRoute() {
        let prevPoint = ctx.selectedGpxFile.prevPoint;
        let newPoint = ctx.selectedGpxFile.newPoint;
        let points = ctx.selectedGpxFile.points;
        let layers = ctx.selectedGpxFile.layers;
        ctx.selectedGpxFile.addPoint = false;
        if (prevPoint) {
            getProfile(newPoint, prevPoint, points);
            let marker = new EditableMarker(map, ctx, newPoint, null).create();
            layers.addLayer(marker);
            let polylineTemp = TrackLayerProvider.createTempPolyline(prevPoint, newPoint);
            polylineTemp.addTo(map);
            deleteClickOnMap();
            if (newPoint.profile === TracksManager.PROFILE_LINE) {
                let polylines = TrackLayerProvider.getPolylines(layers.getLayers());
                let currentPolyline = polylines.find(p => {
                    let lastPoint = p._latlngs[p._latlngs.length - 1];
                    if (lastPoint.lat === prevPoint.lat || lastPoint.lng === prevPoint.lng) {
                        return p;
                    }
                })
                if (trackHasRouting()) {
                    newPoint.geometry = Utils.getPointsDist([{
                        lat: prevPoint.lat,
                        lng: prevPoint.lng
                    }, {lat: newPoint.lat, lng: newPoint.lng}]);
                    let polyline = new EditablePolyline(map, ctx, [prevPoint, {
                        lat: newPoint.lat,
                        lng: newPoint.lng
                    }], null).create();
                    polyline.setStyle({
                        color: ctx.creatingRouteMode.colors[ctx.creatingRouteMode.mode]
                    })
                    layers.addLayer(polyline);
                } else {
                    delete newPoint.geometry;
                    if (prevPoint.geometry?.length === 0) {
                        delete prevPoint.geometry;
                    }
                    if (currentPolyline) {
                        currentPolyline._latlngs.push(newPoint)
                        currentPolyline.setLatLngs(currentPolyline._latlngs);
                    } else {
                        let polyline = new EditablePolyline(map, ctx, [prevPoint, {
                            lat: newPoint.lat,
                            lng: newPoint.lng
                        }], null).create();
                        polyline.setStyle({
                            color: ctx.creatingRouteMode.colors[ctx.creatingRouteMode.mode]
                        })
                        layers.addLayer(polyline);
                    }
                }
                points.push(newPoint);
                map.removeLayer(polylineTemp);
                addClickOnMap();
                saveChanges(points);
            } else {
                ctx.setGpxLoading(true);
                await TracksManager.updateRouteBetweenPoints(ctx, prevPoint, newPoint).then(res => {
                    ctx.setGpxLoading(false);
                    newPoint.geometry = res;
                    map.removeLayer(polylineTemp);
                    if (!newPoint.geometry) {
                        delete prevPoint.geometry;
                        points.pop();
                        points.push(prevPoint);
                    } else {
                        let polyline = new EditablePolyline(map, ctx, newPoint.geometry, null).create();
                        polyline.setStyle({
                            color: ctx.creatingRouteMode.colors[ctx.creatingRouteMode.mode]
                        });
                        layers.addLayer(polyline);
                    }

                    let prevProfilePoint = points.length - 2 >= 0 ? points[points.length - 2] : null;

                    if (prevProfilePoint && prevProfilePoint.profile === TracksManager.PROFILE_LINE && !points[points.length - 2].geometry) {
                        prevPoint.geometry = deleteInfo(_.cloneDeep(points));
                        let firstP = points[0];
                        firstP.geometry = [];
                        points = [firstP, prevPoint, newPoint];
                        updateLayers(points, null, layers, true);
                    } else {
                        points.push(newPoint);
                    }

                    addClickOnMap();
                    saveChanges(points);
                });
            }
        } else {
            let marker = new EditableMarker(map, ctx, newPoint, null).create();
            points.push(newPoint);
            layers.addLayer(marker);
            saveCreatedLayers(marker);
        }
    }

    function deleteInfo(points) {
        points.forEach(p => {
            delete p.profile;
            delete p.geometry
        })
        return points;
    }

    function trackHasRouting() {
        let pointWithRouting = ctx.selectedGpxFile.points.find(p =>
            p.profile !== undefined && p.profile !== TracksManager.PROFILE_LINE
        )
        return !!pointWithRouting;
    }

    function saveChanges(points) {
        ctx.selectedGpxFile.points = points;
        TracksManager.addDistance(ctx.selectedGpxFile);
        TracksManager.addDistanceToPoints(ctx.selectedGpxFile.points, null)
        saveCreatedLayers(ctx.selectedGpxFile.layers);
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }

    function saveCreatedLayers(layers) {
        ctx.createTrack.layers = _.cloneDeep(layers);
        ctx.setCreateTrack({...ctx.createTrack});
    }

    function updateLayers(points, wpts, trackLayers, deleteOld) {
        if (trackLayers) {
            let layers = [];
            TrackLayerProvider.parsePoints(points, layers, true, ctx);
            TrackLayerProvider.parseWpt(wpts, layers);
            layers = createEditableLayers(layers)
            if (deleteOld) {
                trackLayers.getLayers().forEach(l => {
                    map.removeLayer(l)
                })
                trackLayers.clearLayers();
            }
            layers.forEach(layer => {
                trackLayers.addLayer(layer);
            })
            if (deleteOld) {
                trackLayers.addTo(map)
            }

        }
    }

    function createEditableLayers(layers) {
        let res = [];
        layers.forEach(layer => {
            if (layer instanceof L.Marker) {
                let editableMarker = new EditableMarker(map, ctx, null, layer).create();
                res.push(editableMarker);
            } else if (layer instanceof L.Polyline) {
                let editablePolyline = new EditablePolyline(map, ctx, null, layer).create();
                res.push(editablePolyline);
            }
        })
        return res;
    }

    function getProfile(newPoint, prevPoint, points) {
        newPoint.profile = ctx.creatingRouteMode.mode;
        if (newPoint.profile !== prevPoint.profile) {
            prevPoint.profile = newPoint.profile;
            points.pop();
            points.push(prevPoint);
        }
    }

    function addClickOnMap() {
        if (ctx.selectedGpxFile?.dragPoint === false) {
            delete ctx.selectedGpxFile?.dragPoint;
            ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
        } else if (ctx.selectedGpxFile?.dragPoint === undefined) {
            map.getContainer().style.cursor = 'crosshair';
            map.on("click", clickMap);
        }
    }

    function deleteClickOnMap() {
        map.getContainer().style.cursor = '';
        map.off('click');
    }

    function clickMap(e) {
        if (ctx.selectedGpxFile?.addWpt) {
            ctx.addFavorite.location = e.latlng;
            ctx.addFavorite.editTrack = true;
            ctx.setAddFavorite({...ctx.addFavorite});
            delete ctx.selectedGpxFile.addWpt;
        } else {
            ctx.selectedGpxFile.addPoint = true;
            let newPoint = {
                lat: e.latlng.lat,
                lng: e.latlng.lng,
                ele: TracksManager.NAN_MARKER,
                profile: ctx.creatingRouteMode.mode,
                geometry: []
            };
            if (newPoint.profile !== TracksManager.PROFILE_LINE) {
                newPoint.geometry = [];
            }
            if (ctx.selectedGpxFile.newPoint) {
                let points = ctx.selectedGpxFile.points;
                ctx.selectedGpxFile.prevPoint = points[points.length - 1];
                if (!ctx.selectedGpxFile.prevPoint.profile) {
                    ctx.selectedGpxFile.prevPoint.profile = TracksManager.PROFILE_LINE
                }
            }
            ctx.selectedGpxFile.newPoint = newPoint;
        }
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }

    function initNewTrack() {
        ctx.selectedGpxFile = {};
        ctx.selectedGpxFile.tracks = createGpxTracks();
        ctx.selectedGpxFile.points = [];
        ctx.selectedGpxFile.name = TracksManager.createName(ctx);
        ctx.selectedGpxFile.layers = new L.FeatureGroup();

        ctx.selectedGpxFile.layers.addTo(map);
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }

    function createGpxTracks() {
        let res = [];
        res.push({points: []})
        return res;
    }

    function editCurrentTrack() {
        if (layers[ctx.selectedGpxFile.name]) {
            map.removeLayer(layers[ctx.selectedGpxFile.name]?.layer);
        }
        deleteOldLayers();

        let currentTrack = ctx.localTracks.find(t => t.name === ctx.selectedGpxFile.name);
        if (currentTrack) {
            ctx.selectedGpxFile = _.cloneDeep(currentTrack);
        }
        let points = TracksManager.getEditablePoints(ctx.selectedGpxFile);
        ctx.selectedGpxFile.layers = getLayersBySelectedTrack(points, ctx.selectedGpxFile.wpts);
        ctx.selectedGpxFile.updateLayers = true;
        ctx.selectedGpxFile.points = points;

        ctx.selectedGpxFile.newPoint = points[points.length - 1];
        ctx.selectedGpxFile.update = false;

        ctx.creatingRouteMode.mode = ctx.selectedGpxFile.newPoint.profile ? ctx.selectedGpxFile.newPoint.profile : TracksManager.PROFILE_LINE;
        ctx.setCreatingRouteMode({...ctx.creatingRouteMode});

        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }

    function getLayersBySelectedTrack(points, wpts) {
        let layers = new L.FeatureGroup();
        updateLayers(points, wpts, layers, true);
        layers.addTo(map);
        return layers;
    }

    function deleteOldLayers() {
        if (ctx.selectedGpxFile?.layers) {
            map.removeLayer(ctx.selectedGpxFile?.layers);
        }
    }
}
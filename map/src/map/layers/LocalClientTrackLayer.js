import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../../context/AppContext';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import TrackLayerProvider from '../TrackLayerProvider';
import TracksManager from '../../context/TracksManager';
import MarkerOptions from '../markers/MarkerOptions';
import _ from 'lodash';
import EditablePolyline from '../EditablePolyline';
import EditableMarker from '../EditableMarker';
import Utils from '../../util/Utils';
import RoutingManager from '../../context/RoutingManager';
import WptMapDialog from '../components/WptMapDialog';
import AddRoutingToTrackDialog from '../components/AddRoutingToTrackDialog';

export default function LocalClientTrackLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [localLayers, setLocalLayers] = useState({});
    const [selectedPointMarker, setSelectedPointMarker] = useState(null);
    const [queueForRouting, setQueueForRouting] = useState({
        isProcessing: false,
        objs: [],
    });
    const [addRoutingToTrack, setAddRoutingToTrack] = useState(false);
    const [openAddRoutingToTrackDialog, setOpenAddRoutingToTrackDialog] = useState(false);
    const [newPoint, setNewPoint] = useState(null);

    const routingCashRef = useRef(ctx.routingCash);

    useEffect(() => {
        routingCashRef.current = ctx.routingCash;
    }, [ctx.routingCash]);

    const queueForRoutingRef = useRef(queueForRouting);

    useEffect(() => {
        queueForRoutingRef.current = queueForRouting;
    }, [queueForRouting]);

    const trackRef = useRef(ctx.selectedGpxFile);
    useEffect(() => {
        trackRef.current = ctx.selectedGpxFile;
    }, [ctx.selectedGpxFile]);

    const routeModeRef = useRef(ctx.creatingRouteMode);
    useEffect(() => {
        routeModeRef.current = ctx.creatingRouteMode;
    }, [ctx.creatingRouteMode]);

    useEffect(() => {
        if (ctx.selectedGpxFile) {
            if (ctx.selectedGpxFile.getRouting) {
                getRouting();
            } else {
                checkDeleteSelected();
                if (
                    ctx.createTrack?.enable &&
                    (ctx.selectedGpxFile?.points?.length > 0 || ctx.selectedGpxFile?.wpts?.length > 0)
                ) {
                    saveLocal();
                }
                checkZoom();
                checkClickOnMapEvent();
                checkUpdateLayers();
            }
        }
        if (ctx.selectedGpxFile?.layers) {
            /*
                map.off('click');
                map.on('click', clickMap);

                clickMap() uses context vars?
                Got old context inside event handler?

                1. Use Effect() to monitor context changes.
                2. Disable previous handler (don't queue handlers).
                3. Re-setup new event handler with refreshed context.
             */
            addClickOnMap(); // refresh ctx
        }
    }, [ctx.selectedGpxFile]);

    useEffect(() => {
        for (let l in localLayers) {
            localLayers[l].active = false;
        }
        Object.values(ctx.localTracks).forEach((track) => {
            let currLayer = localLayers[track.name];
            if (track.selected && !currLayer) {
                addTrackToMap(track, true, true);
            } else if (currLayer) {
                currLayer.active = track.selected;
                if (track.updated) {
                    updateTrackOnMap(track, currLayer.active);
                }
            }
        });

        for (let l in localLayers) {
            if (!localLayers[l].active) {
                if (selectedPointMarker && selectedPointMarker.trackName === l) {
                    map.removeLayer(selectedPointMarker.marker);
                }
                map.removeLayer(localLayers[l].layer);
                if (l === ctx.selectedGpxFile.name) {
                    map.removeLayer(ctx.selectedGpxFile.layers);
                    ctx.setSelectedGpxFile({});
                }
                delete localLayers[l];
            }
        }

        setLocalLayers({ ...localLayers });
    }, [ctx.localTracks, ctx.setLocalTracks]);

    useEffect(() => {
        if (ctx.createTrack?.closePrev && !_.isEmpty(ctx.createTrack.closePrev.file)) {
            clearCreateLayers(ctx.createTrack.closePrev.file.layers);
            saveResult(ctx.createTrack.closePrev.file, true);
            delete ctx.createTrack.closePrev;
            delete ctx.createTrack.layers;
        }
        if (ctx.createTrack?.enable && !ctx.createTrack?.layers) {
            if (ctx.createTrack.edit) {
                editCurrentTrack();
            } else {
                deleteOldLayers();
                let type = ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK;
                ctx.setCurrentObjectType(type);
                initNewTrack();
            }
            addClickOnMap();
        } else if (ctx.createTrack?.enable === false) {
            if (ctx.createTrack.clear) {
                clearCreateLayers(ctx.selectedGpxFile.layers);
            } else {
                clearCreateLayers(ctx.createTrack.layers);
            }
            let savedFile;
            if (ctx.createTrack.deletePrev && ctx.selectedGpxFile.prevState) {
                savedFile = ctx.selectedGpxFile.prevState;
            } else {
                savedFile = ctx.selectedGpxFile;
            }
            saveResult(savedFile, false);
            ctx.setCreateTrack(null);
            deleteClickOnMap();
        }
    }, [ctx.createTrack]);

    function saveResult(file, closePrev) {
        let ind = ctx.localTracks.findIndex((t) => t.name === file.name);
        if (ind !== -1) {
            ctx.localTracks[ind] = file;
            ctx.localTracks[ind].index = ind;
            if (ctx.createTrack.clear) {
                ctx.localTracks[ind].selected = false;
                ctx.setSelectedGpxFile({});
            } else {
                if (ctx.createTrack.edit || closePrev) {
                    ctx.localTracks[ind].updated = true;
                } else {
                    ctx.localTracks[ind].selected = true;
                }
            }
            TracksManager.saveTracks(ctx.localTracks, ctx);
            ctx.setLocalTracks([...ctx.localTracks]);
        }
    }

    function clearCreateLayers(layers) {
        if (layers) {
            map.removeLayer(layers);
        }
    }

    function getRouting() {
        if (ctx.selectedGpxFile.getRouting) {
            let trackWithRouting = RoutingManager.getRoutingFromCash(ctx.selectedGpxFile, ctx, map);
            trackWithRouting.getRouting = false;
            ctx.setSelectedGpxFile({ ...trackWithRouting });
        }
    }

    function checkDeleteSelected() {
        if (ctx.selectedGpxFile.clear) {
            deleteOldLayers();
            ctx.setSelectedGpxFile({});
        }
    }

    function checkClickOnMapEvent() {
        if (ctx.selectedGpxFile.addPoint && !ctx.selectedGpxFile.addWpt) {
            //getNewRoute();
        } else {
            checkDragPoint();
        }
    }

    function saveLocal() {
        if (ctx.localTracks.length > 0) {
            // localTracks exist: do update/append
            TracksManager.saveTracks(ctx.localTracks, ctx);
        } else {
            // localTracks empty: add gpx as 1st track (points and/or wpts are included)
            createLocalTrack(ctx.selectedGpxFile, ctx.selectedGpxFile.points, ctx.selectedGpxFile.wpts);
        }
    }

    function checkZoom() {
        if (ctx.selectedGpxFile.selected && ctx.selectedGpxFile.zoom) {
            showSelectedTrackOnMap();
        } else if (ctx.selectedGpxFile.showPoint) {
            showSelectedPointOnMap();
        }
    }

    function addTrackToMap(track, fitBounds, active) {
        if (track.points) {
            track.tracks = [{ points: track.points }];
        }
        let layer = TrackLayerProvider.createLayersByTrackData(track);
        if (layer) {
            if (fitBounds) {
                if (!_.isEmpty(layer.getBounds())) {
                    map.fitBounds(layer.getBounds());
                }
            }
            layer.on('click', () => {
                if (!ctx.createTrack || !ctx.createTrack.enable) {
                    ctx.setCreateTrack({
                        enable: true,
                        edit: true,
                    });
                    track.analysis = TracksManager.prepareAnalysis(track.analysis);
                    ctx.setSelectedGpxFile(track);
                    let type = ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK;
                    ctx.setCurrentObjectType(type);
                    ctx.setUpdateContextMenu(true);
                }
            });
            layer.addTo(map);
            localLayers[track.name] = {
                layer: layer,
                points: track.points ? track.points : TracksManager.getEditablePoints(track),
                active: active,
            };
            setLocalLayers({ ...localLayers });
        }
    }

    function createPointMarkerOnMap() {
        return new L.marker(
            {
                lng: ctx.selectedGpxFile.showPoint.lng,
                lat: ctx.selectedGpxFile.showPoint.lat,
            },
            {
                icon: MarkerOptions.options.pointerIcons,
            }
        ).addTo(map);
    }

    function showSelectedTrackOnMap() {
        let currLayer = localLayers[ctx.selectedGpxFile.name];
        if (currLayer) {
            map.fitBounds(currLayer.layer.getBounds());
        }
    }

    function showSelectedPointOnMap() {
        if (ctx.selectedGpxFile?.showPoint?.layer) {
            map.setView(
                [ctx.selectedGpxFile.showPoint.layer._latlng.lat, ctx.selectedGpxFile.showPoint.layer._latlng.lng],
                17
            );
        } else {
            if (selectedPointMarker) {
                map.removeLayer(selectedPointMarker.marker);
            }
            let marker = createPointMarkerOnMap();
            setSelectedPointMarker({ marker: marker, trackName: ctx.selectedGpxFile.name });
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
            ctx.selectedGpxFile.updateLayers = false;
            if (!ctx.selectedGpxFile.layers) {
                ctx.selectedGpxFile.layers = new L.FeatureGroup();
            }
            ctx.selectedGpxFile.layers = updateLayers(
                ctx.selectedGpxFile.points,
                ctx.selectedGpxFile.wpts,
                ctx.selectedGpxFile.layers,
                true
            );
            saveChanges(ctx.selectedGpxFile.points, ctx.selectedGpxFile.wpts, ctx.selectedGpxFile.layers);
        }
    }

    function updateTrackOnMap(track, active) {
        map.removeLayer(localLayers[track.name].layer);
        track.layers?.getLayers().forEach((l) => {
            map.removeLayer(l);
        });
        delete localLayers[track.name];
        addTrackToMap(track, false, active);
    }

    function isEqualPoints(point1, point2) {
        return point1.lat === point2.lat && point1.lng === point2.lng;
    }

    useEffect(() => {
        let queue = [];
        for (const key in ctx.routingCash) {
            if (ctx.routingCash[key].geometry === null) {
                queue.push({
                    key: key,
                    obj: ctx.routingCash[key],
                });
            }
        }
        const newQueue = {
            ...queueForRouting,
            objs: queue,
        };
        setQueueForRouting(newQueue);
    }, [ctx.routingCash]);

    useEffect(() => {
        if (queueForRouting.objs?.length > 0) {
            if (queueForRouting.isProcessing) return;
            const segmentObj = queueForRouting.objs[0].obj;
            const segmentKey = queueForRouting.objs[0].key;
            const newFile = ctx.selectedGpxFile;
            Promise.resolve(
                TracksManager.updateRouteBetweenPoints(
                    ctx,
                    segmentObj.startPoint,
                    segmentObj.endPoint,
                    segmentObj.routeMode
                ).then((res) => {
                    if (!res) {
                        res = [
                            {
                                lat: segmentObj.startPoint.lat,
                                lng: segmentObj.startPoint.lng,
                            },
                            {
                                lat: segmentObj.endPoint.lat,
                                lng: segmentObj.endPoint.lng,
                            },
                        ];
                    }

                    ctx.routingCash[segmentKey].geometry = res;
                    segmentObj.endPoint.geometry = res;
                    const startInd = newFile.points?.findIndex((p) => isEqualPoints(p, segmentObj.startPoint));
                    if (
                        newFile.points &&
                        startInd !== -1 &&
                        isEqualPoints(newFile.points[startInd + 1], segmentObj.endPoint)
                    ) {
                        newFile.points[startInd + 1].geometry = _.cloneDeep(res);
                        let currentLine = segmentObj.tempLine;
                        let polyline = new EditablePolyline(map, ctx, res, null, ctx.selectedGpxFile).create();
                        currentLine.setLatLngs(polyline._latlngs);
                        currentLine.options.name = undefined;
                        currentLine.setStyle({
                            color: ctx.creatingRouteMode.colors[segmentObj.startPoint.profile],
                            dashArray: null,
                        });

                        setQueueForRouting((prev) => ({
                            isProcessing: false,
                            objs: prev.objs,
                        }));

                        TracksManager.getTrackWithAnalysis(
                            TracksManager.GET_ANALYSIS,
                            ctx,
                            ctx.setLoadingContextMenu,
                            newFile.points
                        ).then((res) => {
                            saveChanges(null, null, null, res);
                            setQueueForRouting((prev) => ({
                                isProcessing: false,
                                objs: prev.objs,
                            }));
                            ctx.setSelectedGpxFile({ ...res });
                            ctx.setProcessRouting(false);
                        });
                    }
                })
            );
            const newObjs = queueForRouting.objs.slice(1);
            const newQueue = {
                isProcessing: true,
                objs: newObjs,
            };
            setQueueForRouting(newQueue);
        }
    }, [queueForRouting]);

    function createNewRouteLine(prevPoint, newPoint, points, layers) {
        newPoint = points[points.length - 1];
        let polylines = TrackLayerProvider.getPolylines(layers.getLayers());
        let currentPolyline = polylines.find((p) => {
            let lastPoint = p._latlngs[p._latlngs.length - 1];
            if (lastPoint.lat === prevPoint.lat || lastPoint.lng === prevPoint.lng) {
                return p;
            }
            return null;
        });
        if (trackHasRouting()) {
            newPoint.geometry = Utils.getPointsDist([
                {
                    lat: prevPoint.lat,
                    lng: prevPoint.lng,
                },
                { lat: newPoint.lat, lng: newPoint.lng },
            ]);
            let polyline = new EditablePolyline(
                map,
                ctx,
                [
                    prevPoint,
                    {
                        lat: newPoint.lat,
                        lng: newPoint.lng,
                    },
                ],
                null,
                ctx.selectedGpxFile
            ).create();
            polyline.setStyle({
                color: ctx.creatingRouteMode.colors[ctx.creatingRouteMode.mode],
            });
            layers.addLayer(polyline);
        } else {
            delete newPoint.geometry;
            if (prevPoint.geometry?.length === 0) {
                delete prevPoint.geometry;
            }
            if (currentPolyline) {
                currentPolyline._latlngs.push(newPoint);
                currentPolyline.setLatLngs(currentPolyline._latlngs);
            } else {
                let polyline = new EditablePolyline(
                    map,
                    ctx,
                    [
                        prevPoint,
                        {
                            lat: newPoint.lat,
                            lng: newPoint.lng,
                        },
                    ],
                    null,
                    ctx.selectedGpxFile
                ).create();
                polyline.setStyle({
                    color: ctx.creatingRouteMode.colors[ctx.creatingRouteMode.mode],
                });
                layers.addLayer(polyline);
            }
        }
        TracksManager.getTrackWithAnalysis(TracksManager.GET_ANALYSIS, ctx, ctx.setLoadingContextMenu, points).then(
            (res) => {
                saveChanges(null, null, null, res);
            }
        );
    }

    function addGeometryToTrack(newPoint, points) {
        let prevPoint = points[points.length - 1];
        prevPoint.geometry = deleteInfo(_.cloneDeep(points));
        prevPoint.profile = newPoint.profile;
        let firstP = points[0];
        firstP.geometry = [];
        firstP.profile = TracksManager.PROFILE_LINE;
        return [firstP, prevPoint];
    }

    function createPointOnMap(newPoint, layers, track) {
        let marker = new EditableMarker(map, ctx, newPoint, null, track).create();
        marker.addTo(map);
        layers.addLayer(marker);
    }

    function createLocalTrack(file, points = [], wpts = []) {
        TracksManager.prepareTrack(file);
        file.tracks = [{ points, wpts }];
        file.layers = TrackLayerProvider.createLayersByTrackData(file);
        file.index = ctx.localTracks.length;
        ctx.localTracks.push(file);

        ctx.setLocalTracks([...ctx.localTracks]);
    }

    function createFirstLayers(newPoint, layers) {
        let marker = new EditableMarker(map, ctx, newPoint, null, ctx.selectedGpxFile).create();
        layers = new L.FeatureGroup().addLayer(marker);
        saveCreatedLayers(marker);
        return layers;
    }

    function deleteInfo(points) {
        points.forEach((p) => {
            delete p.profile;
            delete p.geometry;
        });
        return points;
    }

    function trackHasRouting() {
        let pointWithRouting = ctx.selectedGpxFile.points.find(
            (p) => p.profile !== undefined && p.profile !== TracksManager.PROFILE_LINE
        );
        return !!pointWithRouting;
    }

    function saveChanges(points, wpts, layers, res) {
        if (res) {
            ctx.selectedGpxFile = res;
            if (layers) {
                ctx.selectedGpxFile.layers = layers;
            }
        } else {
            ctx.selectedGpxFile.points = points;
            ctx.selectedGpxFile.wpts = wpts;
            ctx.selectedGpxFile.layers = layers;
        }
        TracksManager.addDistance(ctx.selectedGpxFile);
        if (ctx.selectedGpxFile.points) {
            TracksManager.addDistanceToPoints(ctx.selectedGpxFile.points);
        }
        saveCreatedLayers(ctx.selectedGpxFile.layers);
        ctx.selectedGpxFile.zoom = false;
        ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
    }

    function saveCreatedLayers(layers) {
        if (ctx.createTrack) {
            ctx.createTrack.layers = _.cloneDeep(layers);
        }
    }

    function isTileLayer(layer) {
        return layer._url;
    }

    function isTempLayer(layer) {
        return layer.options.name === 'temp';
    }

    function updateLayers(points, wpts, trackLayers, deleteOld) {
        if (trackLayers) {
            let layers = [];
            if (points?.length > 0) {
                TrackLayerProvider.parsePoints(points, layers, true, ctx);
            }
            if (wpts?.length > 0) {
                TrackLayerProvider.parseWpt(wpts, layers);
            }
            layers = createEditableLayers(layers);
            if (deleteOld) {
                map.eachLayer((layer) => {
                    if (!isTileLayer(layer) && !isTempLayer(layer)) {
                        map.removeLayer(layer);
                    }
                });
                trackLayers.eachLayer((layer) => {
                    if (
                        !isTempLayer(layer) ||
                        (isTempLayer(layer) && !points.find((p) => isEqualPoints(p, layer.point)))
                    ) {
                        trackLayers.removeLayer(layer);
                    }
                });
            }
            layers.forEach((layer) => {
                trackLayers.addLayer(layer);
            });
            if (deleteOld) {
                trackLayers.addTo(map);
            }
            return trackLayers;
        }
    }

    function createEditableLayers(layers) {
        let res = [];
        layers.forEach((layer) => {
            if (layer instanceof L.Marker) {
                let editableMarker = new EditableMarker(map, ctx, null, layer, trackRef.current).create();
                res.push(editableMarker);
            } else if (layer instanceof L.Polyline) {
                let editablePolyline = new EditablePolyline(map, ctx, null, layer, trackRef.current).create();
                res.push(editablePolyline);
            }
        });
        return res;
    }

    function addClickOnMap() {
        if (ctx.selectedGpxFile?.dragPoint === false) {
            delete ctx.selectedGpxFile?.dragPoint;
            ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
        } else if (ctx.selectedGpxFile?.dragPoint === undefined) {
            ctx.trackState.block = false;
            map.getContainer().style.cursor = 'crosshair';
            map.off('click'); // !!!
            map.on('click', clickMap);
        }
    }

    function deleteClickOnMap() {
        map.getContainer().style.cursor = '';
        map.off('click');
    }

    useEffect(() => {
        if (addRoutingToTrack) {
            let points = trackRef.current.points;
            let layers = trackRef.current.layers;
            points = addGeometryToTrack(newPoint, points);
            points.push(newPoint);
            let prevPoint = getPrevPoint(points);
            prevPoint.profile = newPoint.profile;
            prevPoint.routeMode = newPoint.routeMode;

            let tempLine = TrackLayerProvider.createEditableTempLPolyline(prevPoint, newPoint, map, ctx);
            layers.addLayer(tempLine);

            RoutingManager.addRoutingToCash(prevPoint, newPoint, tempLine, ctx, routingCashRef.current);

            trackRef.current.newPoint = newPoint;
            trackRef.current.points = points;

            createPointOnMap(newPoint, layers, trackRef.current);

            trackRef.current.layers = updateLayers(points, trackRef.current.wpts, layers, true);

            ctx.setSelectedGpxFile({ ...trackRef.current });
            TracksManager.updateState(ctx);
            setAddRoutingToTrack(false);
        }
    }, [addRoutingToTrack]);

    function clickMap(e) {
        if (trackRef.current?.addWpt) {
            ctx.addFavorite.location = e.latlng;
            ctx.addFavorite.editTrack = true;
            ctx.setAddFavorite({ ...ctx.addFavorite });
            delete trackRef.current.addWpt;
            ctx.setSelectedGpxFile({ ...trackRef.current });
            TracksManager.updateState(ctx);
        } else {
            let newPoint = createNewPoint(e, routeModeRef.current);
            let points = trackRef.current.points;
            let layers = trackRef.current.layers;
            let prevPoint = trackRef.current.prevPoint;
            if (isNewPoint(trackRef, newPoint)) {
                newPoint.routeMode = routeModeRef.current;
                if (newPoint.profile !== TracksManager.PROFILE_LINE && trackWithoutRouting(points)) {
                    setOpenAddRoutingToTrackDialog(true);
                    setNewPoint(newPoint);
                } else {
                    points.push(newPoint);
                    if (points?.length > 1) {
                        prevPoint = getPrevPoint(points);
                        if (!prevPoint.profile) {
                            prevPoint.profile = TracksManager.PROFILE_LINE;
                        }
                        prevPoint.profile = newPoint.profile;
                        prevPoint.routeMode = newPoint.routeMode;
                        if (newPoint.profile === TracksManager.PROFILE_LINE) {
                            createNewRouteLine(prevPoint, newPoint, points, layers);
                        } else {
                            trackRef.current.hasGeo = true;
                            let tempLine = TrackLayerProvider.createEditableTempLPolyline(
                                prevPoint,
                                newPoint,
                                map,
                                ctx
                            );
                            layers.addLayer(tempLine);
                            RoutingManager.addRoutingToCash(prevPoint, newPoint, tempLine, ctx, routingCashRef.current);
                        }
                    } else {
                        layers = createFirstLayers(newPoint, layers);
                    }
                    trackRef.current.newPoint = newPoint;
                    trackRef.current.points = points;
                    createPointOnMap(newPoint, layers, trackRef.current);
                    trackRef.current.layers = updateLayers(points, trackRef.current.wpts, layers, true);
                    ctx.setSelectedGpxFile({ ...trackRef.current });
                    TracksManager.updateState(ctx);
                }
            }
        }
    }

    function getPrevPoint(points) {
        let prevPoint = points[points.length - 2];
        if (!prevPoint.profile) {
            prevPoint.profile = TracksManager.PROFILE_LINE;
        }
        return prevPoint;
    }

    function isNewPoint(trackRef, newPoint) {
        return !trackRef.current.points.find((p) => isEqualPoints(p, newPoint));
    }

    function createNewPoint(e, routeModeRef) {
        let newPoint = {
            lat: e ? e.latlng.lat : ctx.createTrack.latlng.lat,
            lng: e ? e.latlng.lng : ctx.createTrack.latlng.lng,
            ele: TracksManager.NAN_MARKER,
            profile: routeModeRef ? routeModeRef.mode : ctx.creatingRouteMode.mode,
            geometry: [],
            routeMode: routeModeRef ? routeModeRef : ctx.creatingRouteMode,
        };
        if (newPoint.profile !== TracksManager.PROFILE_LINE) {
            newPoint.geometry = [];
        }
        return newPoint;
    }

    function initNewTrack() {
        ctx.selectedGpxFile = {};
        ctx.selectedGpxFile.name = TracksManager.createName(ctx);
        ctx.selectedGpxFile.tracks = TracksManager.createGpxTracks();
        ctx.selectedGpxFile.pointsGroups = {};
        ctx.selectedGpxFile.points = [];
        if (ctx.createTrack.latlng) {
            createPointFromMap();
        }
        ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
    }

    function createPointFromMap() {
        const newPoint = createNewPoint();
        ctx.selectedGpxFile.newPoint = newPoint;
        ctx.selectedGpxFile.points.push(newPoint);
        createLocalTrack(ctx.selectedGpxFile, ctx.selectedGpxFile.points);
        ctx.selectedGpxFile.layers = createFirstLayers(newPoint, ctx.selectedGpxFile.layers);
        ctx.selectedGpxFile.updateLayers = true;
        ctx.selectedGpxFile.addPoint = true;
        ctx.setUpdateContextMenu(true);

        TracksManager.updateState(ctx);
    }

    function editCurrentTrack() {
        if (localLayers[ctx.selectedGpxFile.name]) {
            map.removeLayer(localLayers[ctx.selectedGpxFile.name]?.layer);
        }
        deleteOldLayers();

        let currentTrack = ctx.localTracks.find((t) => t.name === ctx.selectedGpxFile.name);
        if (currentTrack) {
            ctx.selectedGpxFile = currentTrack;
        }
        let points = TracksManager.getEditablePoints(ctx.selectedGpxFile);
        ctx.selectedGpxFile.layers = getLayersBySelectedTrack(points, ctx.selectedGpxFile.wpts);
        ctx.selectedGpxFile.points = points;

        ctx.selectedGpxFile.newPoint = points[points.length - 1];
        ctx.selectedGpxFile.update = false;

        const currentProfile = ctx.selectedGpxFile.newPoint?.profile
            ? ctx.selectedGpxFile.newPoint?.profile
            : TracksManager.PROFILE_LINE;
        TracksManager.updateGlobalProfileState(ctx, currentProfile);

        // ctx.addFavorite.editTrack = true;
        // ctx.setAddFavorite({...ctx.addFavorite});

        ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });

        TracksManager.updateState(ctx);
    }

    function getLayersBySelectedTrack(points, wpts) {
        let layers = new L.FeatureGroup();
        layers = updateLayers(points, wpts, layers, true);
        layers.addTo(map);
        return layers;
    }

    function deleteOldLayers() {
        if (ctx.selectedGpxFile?.layers) {
            map.removeLayer(ctx.selectedGpxFile?.layers);
        }
    }

    function trackWithoutRouting(points) {
        let prevProfilePoint = points.length - 2 > 0 ? points[points.length - 2] : null;
        let prevProfile = prevProfilePoint?.profile;
        return (
            prevProfilePoint &&
            (!prevProfile || (prevProfile === TracksManager.PROFILE_LINE && !prevProfilePoint.geometry))
        );
    }

    useEffect(() => {
        if (!_.isEmpty(ctx.routingNewSegments)) {
            ctx.routingNewSegments.forEach((s) => {
                RoutingManager.validateRoutingCash(s.oldPoint, ctx, ctx.routingCash);
                RoutingManager.addRoutingToCash(s.start, s.end, s.tempPolyline, ctx, routingCashRef.current);
            });
        }
    }, [ctx.routingNewSegments]);

    return (
        <>
            {openAddRoutingToTrackDialog && (
                <AddRoutingToTrackDialog
                    setOpenAddRoutingToTrackDialog={setOpenAddRoutingToTrackDialog}
                    setAddRoutingToTrack={setAddRoutingToTrack}
                />
            )}
            <WptMapDialog />
        </>
    );
}

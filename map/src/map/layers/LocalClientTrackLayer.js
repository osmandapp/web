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

const GET_ANALYSIS_DEBOUNCE_MS = 1000; // don't flood get-analysis

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

    const debouncerTimer = useRef(null);

    function debouncer(f, timerRef, ms) {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        if (timerRef.current === null) {
            timerRef.current = setTimeout(() => {
                timerRef.current = null;
                f();
            }, ms);
        }
    }

    useEffect(() => {
        routingCashRef.current = ctx.routingCash;
    }, [ctx.routingCash]);

    const queueForRoutingRef = useRef(queueForRouting);

    useEffect(() => {
        queueForRoutingRef.current = queueForRouting;
    }, [queueForRouting]);

    let ctxTrack = ctx.selectedGpxFile;

    const geoRouter = ctx.trackRouter;

    useEffect(() => {
        if (ctxTrack) {
            if (ctxTrack.getRouting) {
                getRouting();
            } else {
                checkDeleteSelected();
                if (ctx.createTrack?.enable && (ctxTrack?.points?.length > 0 || ctxTrack?.wpts?.length > 0)) {
                    saveLocal();
                }
                checkZoom();
                // checkClickOnMapEvent();
                checkUpdateLayers();
            }
        }
    }, [ctxTrack]);

    useEffect(() => {
        /*
            Reminders if event handler uses context:
            - Use Effect() to monitor context changes;
            - Disable previous handler (don't chain handlers);
            - Re-setup new event handler with refreshed context.
         */
        if (ctx.createTrack && ctxTrack) {
            if (ctxTrack?.dragPoint === false) {
                delete ctxTrack?.dragPoint;
                ctx.setSelectedGpxFile({ ...ctxTrack });
            } else if (
                ctx.createTrack?.enable &&
                _.isEmpty(ctx.pointContextMenu) &&
                ctxTrack?.dragPoint === undefined
            ) {
                setupClickOnMap();
            } else {
                deleteClickOnMap();
            }
        }
        // ctx.pointContextMenu was added to monitor menu state and ignore click
    }, [ctx.createTrack, ctxTrack, geoRouter.getEffectDeps(), ctx.pointContextMenu]);

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
                if (l === ctxTrack.name) {
                    map.removeLayer(ctxTrack.layers);
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
            // addClickOnMap();
        } else if (ctx.createTrack?.enable === false) {
            if (ctx.createTrack.clear) {
                clearCreateLayers(ctxTrack.layers);
            } else {
                clearCreateLayers(ctx.createTrack.layers);
            }
            let savedFile;
            if (ctx.createTrack.deletePrev && ctxTrack.prevState) {
                savedFile = ctxTrack.prevState;
            } else {
                savedFile = ctxTrack;
            }
            saveResult(savedFile, false);
            ctx.setCreateTrack(null);
            // deleteClickOnMap();
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
        if (ctxTrack.getRouting) {
            let trackWithRouting = RoutingManager.getRoutingFromCash(ctxTrack, ctx, map);
            trackWithRouting.getRouting = false;
            ctx.setSelectedGpxFile({ ...trackWithRouting });
        }
    }

    function checkDeleteSelected() {
        if (ctxTrack.clear) {
            deleteOldLayers();
            ctx.setSelectedGpxFile({});
        }
    }

    // function checkClickOnMapEvent() {
    //     if (ctx.selectedGpxFile.addPoint && !ctx.selectedGpxFile.addWpt) {
    //         //getNewRoute();
    //     } else {
    //         checkDragPoint();
    //     }
    // }

    function saveLocal() {
        if (ctx.localTracks.length > 0) {
            // localTracks exist: do update/append
            TracksManager.saveTracks(ctx.localTracks, ctx);
        } else {
            // localTracks empty: add gpx as 1st track (points and/or wpts are included)
            createLocalTrack(ctxTrack, ctxTrack.points, ctxTrack.wpts);
        }
    }

    function checkZoom() {
        if (ctxTrack.selected && ctxTrack.zoom) {
            showSelectedTrackOnMap();
        } else if (ctxTrack.showPoint) {
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
                lng: ctxTrack.showPoint.lng,
                lat: ctxTrack.showPoint.lat,
            },
            {
                icon: MarkerOptions.options.pointerIcons,
            }
        ).addTo(map);
    }

    function showSelectedTrackOnMap() {
        let currLayer = localLayers[ctxTrack.name];
        if (currLayer) {
            map.fitBounds(currLayer.layer.getBounds());
        }
    }

    function showSelectedPointOnMap() {
        if (ctxTrack?.showPoint?.layer) {
            map.setView([ctxTrack.showPoint.layer._latlng.lat, ctxTrack.showPoint.layer._latlng.lng], 17);
        } else {
            if (selectedPointMarker) {
                map.removeLayer(selectedPointMarker.marker);
            }
            let marker = createPointMarkerOnMap();
            setSelectedPointMarker({ marker: marker, trackName: ctxTrack.name });
        }
    }

    // function checkDragPoint() {
    //     if (ctx.selectedGpxFile?.dragPoint) {
    //         deleteClickOnMap();
    //     } else {
    //         if (ctx.createTrack?.enable) {
    //             addClickOnMap();
    //         }
    //     }
    // }

    function checkUpdateLayers() {
        if (ctxTrack?.updateLayers) {
            ctxTrack.updateLayers = false;
            if (!ctxTrack.layers) {
                ctxTrack.layers = new L.FeatureGroup();
            }
            ctxTrack.layers = updateLayers(ctxTrack.points, ctxTrack.wpts, ctxTrack.layers, true);
            saveChanges(ctxTrack.points, ctxTrack.wpts, ctxTrack.layers);
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
            const newFile = ctxTrack;
            Promise.resolve(
                ctx.trackRouter
                    .updateRouteBetweenPoints(ctx, segmentObj.startPoint, segmentObj.endPoint, segmentObj.geoProfile)
                    .then((res) => {
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
                            let polyline = new EditablePolyline(map, ctx, res, null, ctxTrack).create();
                            currentLine.setLatLngs(polyline._latlngs);
                            currentLine.options.name = undefined;
                            currentLine.setStyle({
                                color: geoRouter.getColor(segmentObj.startPoint),
                                dashArray: null,
                            });

                            setQueueForRouting((prev) => ({
                                isProcessing: false,
                                objs: prev.objs,
                            }));

                            const analysis = () => {
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
                            };

                            debouncer(analysis, debouncerTimer, GET_ANALYSIS_DEBOUNCE_MS);
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
                ctxTrack
            ).create();
            polyline.setStyle({
                color: geoRouter.getColor(),
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
                    ctxTrack
                ).create();
                polyline.setStyle({
                    color: geoRouter.getColor(),
                });
                layers.addLayer(polyline);
            }
        }
        const analysis = () => {
            TracksManager.getTrackWithAnalysis(TracksManager.GET_ANALYSIS, ctx, ctx.setLoadingContextMenu, points).then(
                (res) => {
                    saveChanges(null, null, null, res);
                }
            );
        };
        debouncer(analysis, debouncerTimer, GET_ANALYSIS_DEBOUNCE_MS);
    }

    function addGeometryToTrack(newPoint, points) {
        let prevPoint = points[points.length - 1];
        prevPoint.geometry = deleteInfo(_.cloneDeep(points));
        prevPoint.profile = newPoint.profile;
        prevPoint.geoProfile = newPoint.geoProfile;
        let firstP = points[0];
        firstP.geometry = [];
        firstP.profile = TracksManager.PROFILE_LINE;
        firstP.geoProfile = geoRouter.getGeoProfile({ profile: TracksManager.PROFILE_LINE });
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
        let marker = new EditableMarker(map, ctx, newPoint, null, ctxTrack).create();
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
        let pointWithRouting = ctxTrack.points.find(
            (p) => p.profile !== undefined && p.profile !== TracksManager.PROFILE_LINE
        );
        return !!pointWithRouting;
    }

    function saveChanges(points, wpts, layers, res) {
        if (res) {
            ctxTrack = res;
            if (layers) {
                ctxTrack.layers = layers;
            }
        } else {
            ctxTrack.points = points;
            ctxTrack.wpts = wpts;
            ctxTrack.layers = layers;
        }
        TracksManager.addDistance(ctxTrack);
        if (ctxTrack.points) {
            TracksManager.addDistanceToPoints(ctxTrack.points);
        }
        saveCreatedLayers(ctxTrack.layers);
        ctxTrack.zoom = false;
        ctx.setSelectedGpxFile({ ...ctxTrack });
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
                let editableMarker = new EditableMarker(map, ctx, null, layer, ctxTrack).create();
                res.push(editableMarker);
            } else if (layer instanceof L.Polyline) {
                let editablePolyline = new EditablePolyline(map, ctx, null, layer, ctxTrack).create();
                res.push(editablePolyline);
            }
        });
        return res;
    }

    function setupClickOnMap() {
        if (ctxTrack?.dragPoint === false) {
            delete ctxTrack?.dragPoint;
            ctx.setSelectedGpxFile({ ...ctxTrack });
        } else if (ctxTrack?.dragPoint === undefined) {
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
            let points = ctxTrack.points;
            let layers = ctxTrack.layers;
            points = addGeometryToTrack(newPoint, points);
            points.push(newPoint);
            let prevPoint = getPrevPoint(points);
            prevPoint.profile = newPoint.profile;
            prevPoint.geoProfile = newPoint.geoProfile;

            let tempLine = TrackLayerProvider.createEditableTempLPolyline(prevPoint, newPoint, map, ctx);
            layers.addLayer(tempLine);

            RoutingManager.addRoutingToCash(prevPoint, newPoint, tempLine, ctx, routingCashRef.current);

            ctxTrack.newPoint = newPoint;
            ctxTrack.points = points;

            createPointOnMap(newPoint, layers, ctxTrack);

            ctxTrack.layers = updateLayers(points, ctxTrack.wpts, layers, true);

            ctx.setSelectedGpxFile({ ...ctxTrack });
            TracksManager.updateState(ctx);
            setAddRoutingToTrack(false);
        }
    }, [addRoutingToTrack]);

    function clickMap(e) {
        if (ctxTrack?.addWpt) {
            ctx.addFavorite.location = e.latlng;
            ctx.addFavorite.editTrack = true;
            ctx.setAddFavorite({ ...ctx.addFavorite });
            delete ctxTrack.addWpt;
            ctx.setSelectedGpxFile({ ...ctxTrack });
            TracksManager.updateState(ctx);
        } else {
            let newPoint = createNewPoint(e, geoRouter.getGeoProfile());
            let points = ctxTrack.points;
            let layers = ctxTrack.layers;
            let prevPoint = ctxTrack.prevPoint;
            if (isNewPoint(ctxTrack, newPoint)) {
                if (newPoint.profile !== TracksManager.PROFILE_LINE && trackWithoutRouting(points)) {
                    setOpenAddRoutingToTrackDialog(true);
                    setNewPoint(newPoint);
                } else {
                    points.push(newPoint);
                    if (points?.length > 1) {
                        prevPoint = getPrevPoint(points);
                        if (!prevPoint.profile) {
                            prevPoint.profile = TracksManager.PROFILE_LINE;
                            prevPoint.geoProfile = geoRouter.getGeoProfile({ profile: TracksManager.PROFILE_LINE });
                        }
                        prevPoint.profile = newPoint.profile;
                        prevPoint.geoProfile = newPoint.geoProfile;
                        if (newPoint.profile === TracksManager.PROFILE_LINE) {
                            createNewRouteLine(prevPoint, newPoint, points, layers);
                        } else {
                            ctxTrack.hasGeo = true;
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
                    ctxTrack.newPoint = newPoint;
                    ctxTrack.points = points;
                    createPointOnMap(newPoint, layers, ctxTrack);
                    ctxTrack.layers = updateLayers(points, ctxTrack.wpts, layers, true);
                    ctx.setSelectedGpxFile({ ...ctxTrack });
                    TracksManager.updateState(ctx);
                }
            }
        }
    }

    function getPrevPoint(points) {
        let prevPoint = points[points.length - 2];
        if (!prevPoint.profile) {
            prevPoint.profile = TracksManager.PROFILE_LINE;
            prevPoint.geoProfile = geoRouter.getGeoProfile({ profile: TracksManager.PROFILE_LINE });
        }
        return prevPoint;
    }

    function isNewPoint(track, newPoint) {
        return !track.points.find((p) => isEqualPoints(p, newPoint));
    }

    function createNewPoint(e, geoProfile = geoRouter.getGeoProfile()) {
        const newPoint = {
            lat: e ? e.latlng.lat : ctx.createTrack.latlng.lat,
            lng: e ? e.latlng.lng : ctx.createTrack.latlng.lng,
            ele: TracksManager.NAN_MARKER,
            profile: geoProfile.profile, // required by get-analisys
            geoProfile: geoProfile,
            geometry: [],
        };
        // if (newPoint.profile !== TracksManager.PROFILE_LINE) {
        //     newPoint.geometry = []; // geometry is already set to [] just few lines before
        // }
        return newPoint;
    }

    function initNewTrack() {
        ctxTrack = {};
        ctxTrack.name = TracksManager.createName(ctx);
        ctxTrack.tracks = TracksManager.createGpxTracks();
        ctxTrack.pointsGroups = {};
        ctxTrack.points = [];
        if (ctx.createTrack.latlng) {
            createPointFromMap();
        }
        ctx.setSelectedGpxFile({ ...ctxTrack });
    }

    function createPointFromMap() {
        const newPoint = createNewPoint();
        ctxTrack.newPoint = newPoint;
        ctxTrack.points.push(newPoint);
        createLocalTrack(ctxTrack, ctxTrack.points);
        ctxTrack.layers = createFirstLayers(newPoint, ctxTrack.layers);
        ctxTrack.updateLayers = true;
        ctxTrack.addPoint = true;
        ctx.setUpdateContextMenu(true);

        TracksManager.updateState(ctx);
    }

    function editCurrentTrack() {
        if (localLayers[ctxTrack.name]) {
            map.removeLayer(localLayers[ctxTrack.name]?.layer);
        }
        deleteOldLayers();

        let currentTrack = ctx.localTracks.find((t) => t.name === ctxTrack.name);
        if (currentTrack) {
            ctxTrack = currentTrack;
        }
        let points = TracksManager.getEditablePoints(ctxTrack);
        ctxTrack.layers = getLayersBySelectedTrack(points, ctxTrack.wpts);
        ctxTrack.points = points;

        ctxTrack.newPoint = points[points.length - 1];
        ctxTrack.update = false;

        if (ctxTrack.newPoint?.geoProfile || ctxTrack.newPoint?.profile) {
            geoRouter.onGeoProfile(ctxTrack.newPoint);
        } else {
            geoRouter.onGeoProfile({ profile: TracksManager.PROFILE_LINE });
        }
        // ctx.addFavorite.editTrack = true;
        // ctx.setAddFavorite({...ctx.addFavorite});

        ctx.setSelectedGpxFile({ ...ctxTrack });

        TracksManager.updateState(ctx);
    }

    function getLayersBySelectedTrack(points, wpts) {
        let layers = new L.FeatureGroup();
        layers = updateLayers(points, wpts, layers, true);
        layers.addTo(map);
        return layers;
    }

    function deleteOldLayers() {
        if (ctxTrack?.layers) {
            map.removeLayer(ctxTrack?.layers);
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

    const getLastSegmentGeoProfile = () => {
        if (ctxTrack.points?.length > 1) {
            const beforeLast = ctxTrack.points[ctxTrack.points.length - 2];
            if (beforeLast && beforeLast.geoProfile) {
                return geoRouter.getGeoProfile(beforeLast.geoProfile);
            }
        }
        return null;
    };

    const lastSegmentGeoProfile = getLastSegmentGeoProfile();

    useEffect(() => {
        // useful with Undo/Redo
        if (lastSegmentGeoProfile) {
            geoRouter.onGeoProfile(lastSegmentGeoProfile);
        }
    }, [JSON.stringify(lastSegmentGeoProfile)]);

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

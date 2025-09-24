import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext, { isLocalTrack, OBJECT_TYPE_LOCAL_TRACK } from '../../context/AppContext';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import TrackLayerProvider, {
    redrawWptsOnLayer,
    TEMP_LAYER_FLAG,
    WPT_SIMPLIFY_THRESHOLD,
} from '../util/TrackLayerProvider';
import TracksManager, { fitBoundsOptions, isEmptyTrack } from '../../manager/track/TracksManager';
import isEmpty from 'lodash-es/isEmpty';
import cloneDeep from 'lodash-es/cloneDeep';
import EditablePolyline from '../util/creator/EditablePolyline';
import EditableMarker from '../util/creator/EditableMarker';
import { effectDebouncer } from '../../util/Utils';
import AddRoutingToTrackDialog from '../components/AddRoutingToTrackDialog';
import TracksRoutingCache, {
    debouncer,
    effectControlRouterRequests,
    effectRefreshTrackWithRouting,
    GET_ANALYSIS_DEBOUNCE_MS,
    requestAnalytics,
    syncTrackWithCache,
} from '../../context/TracksRoutingCache';
import useZoomMoveMapHandlers from '../../util/hooks/map/useZoomMoveMapHandlers';
import { deleteLocalTracksByIndexes, saveTrackToLocalStorage } from '../../context/LocalTrackStorage';
import { createLocalTrack, createNewPoint, initNewSelectedTrack, isNewTrack } from '../util/creator/LocalTrackHelper';
import {
    addRegisteredLayers,
    clearAllRegisteredLayers,
    createFirstLayers,
    deleteOldLayers,
    updateLayers,
} from '../util/creator/LocalTrackLayerHelper';
import { addLayerToMap } from '../util/MapManager';

const CONTROL_ROUTER_REQUEST_DEBOUNCER_MS = 50;
const REFRESH_TRACKS_WITH_ROUTING_DEBOUNCER_MS = 500;
export const LOCAL_TRACKS_LAYERS_ID = 'localTracksLayers';

export default function LocalClientTrackLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [registeredLayers, setRegisteredLayers] = useState({});

    const [localLayers, setLocalLayers] = useState({});
    const [selectedPointMarker, setSelectedPointMarker] = useState(null);
    const [addRoutingToTrack, setAddRoutingToTrack] = useState(false);
    const [openAddRoutingToTrackDialog, setOpenAddRoutingToTrackDialog] = useState(false);
    const [addNewPoint, setAddNewPoint] = useState(null);

    const debouncerTimer = useRef(null);

    const timerControlRouterRequests = useRef(null);
    const timerRefreshTrackWithRouting = useRef(null);
    const [triggerControlRouterRequests, setTriggerControlRouterRequests] = useState(0);
    const [triggerRefreshTrackWithRouting, setTriggerRefreshTrackWithRouting] = useState(0);

    const [startedRouterJobs, setStartedRouterJobs] = useState(0);

    const [zoom, setZoom] = useState(map ? map.getZoom() : 0);
    const [prevZoom, setPrevZoom] = useState(null);
    const [move, setMove] = useState(false);

    useZoomMoveMapHandlers(map, setZoom, setMove);

    useEffect(() => {
        map.spin(ctx.processingSaveTrack, { color: '#1976d2' });
    }, [ctx.processingSaveTrack]);

    let ctxTrack = ctx.selectedGpxFile;

    const geoRouter = ctx.trackRouter;

    /*
        unverifiedGpxFile is a kind of selectedGpxFile

        They're calculated by async get-analysis calls. Due to delayed/async
        nature, user might have already choosen another selectedGpxFile when
        we've got get-analysis results. This is the reason why we can't
        directly update unverifiedGpxFile to selectedGpxFile.

        To avoid mis-overwriting selectedGpxFile with unverifiedGpxFile, we
        have to compare name, description, 'selected', and points before
        setting selectedGpxFile.
    */
    useEffect(() => {
        const trusted = ctx.selectedGpxFile;
        const unverified = ctx.unverifiedGpxFile;

        function isPointsHaveSameGeo(p1, p2) {
            if (!p1 || !p2 || p1.length !== p2.length) {
                return false;
            }
            for (let i = 0; i < p1.length; i++) {
                if (TracksManager.isEqualPoints(p1[i], p2[i]) === false) {
                    return false;
                }
            }
            for (let i = 0; i < p1.length; i++) {
                const g1 = p1[i].geometry;
                const g2 = p2[i].geometry;
                if (!g1 && !g2) {
                    return true; // both w/o geometry = ok
                }
                if (!g1 || !g2 || g1.length !== g2.length) {
                    return false;
                }
                for (let j = 0; j < g1.length; j++) {
                    if (TracksManager.isEqualPoints(g1[j], g2[j]) === false) {
                        return false;
                    }
                }
            }
            return true; // all-the-same
        }

        if (unverified && trusted) {
            if (
                unverified.name === trusted.name &&
                unverified.selected === trusted.selected &&
                unverified.metaData?.desc === trusted.metaData?.desc &&
                (isPointsHaveSameGeo(unverified.points, trusted.points) ||
                    (unverified.tracks &&
                        trusted.tracks &&
                        isPointsHaveSameGeo(unverified.tracks[0]?.points, trusted.tracks[0]?.points)))
            ) {
                // cleanup triggers
                unverified.zoom = false;
                unverified.syncRouting = false;
                unverified.updateLayers = false;
                unverified.localRedrawWpts = false;
                unverified.cloudRedrawWpts = false;
                unverified.refreshAnalytics = false;

                // keep layers
                unverified.gpx = trusted.gpx;
                unverified.layers = trusted.layers;

                ctx.setSelectedGpxFile(unverified);
            } else {
                console.debug('unverified-gpx-file', unverified.name);
            }
        }
    }, [ctx.unverifiedGpxFile]);

    /**
     * Note: run on any selectedGpxFile including Cloud-mode
     *
     * Depends: every change of ctx.selectedGpxFile
     *
     * SortActions:
     *
     * - finish track rename (oldName)
     * - check/get routing from cache (syncRouting)
     * - redraw (force visible) track waypoints (localRedrawWpts)
     * - refresh analytics (used after unrouted Line-segment changes)
     * - save Local tracks (when editor enabled)
     * - check/set Zoom (fitBounds) for Local tracks
     * - .updateLayers processing (?)
     */
    useEffect(() => {
        if (ctxTrack && isLocalTrack(ctx)) {
            if (ctxTrack.oldName) {
                finishTrackRename();
            } else if (ctxTrack.syncRouting) {
                syncRouting();
            } else if (ctxTrack.localRedrawWpts) {
                localRedrawWpts();
            } else if (ctxTrack.refreshAnalytics) {
                refreshAnalytics();
            } else {
                if (ctx.createTrack?.enable && isEmptyTrack(ctxTrack) === false) {
                    if (ctx.localTracks.length > 0) {
                        saveTrackToLocalStorage({ ctx, track: ctxTrack });
                    }
                    if (isNewTrack(ctx.localTracks, ctxTrack)) {
                        createLocalTrack({ ctx, map, file: ctxTrack });
                    }
                }
                if (ctxTrack?.updateLayers) {
                    checkUpdateLayers();
                } else {
                    checkZoom();
                }
            }
        }
    }, [ctxTrack]);

    useEffect(() => {
        const needUpdate =
            (move || zoom !== prevZoom) &&
            ctx.selectedGpxFile.wpts?.length > 100 &&
            ctx.selectedGpxFile.points?.length > 100;
        if (needUpdate && ctx.createTrack?.enable && ctxTrack) {
            ctxTrack.layers = updateLayers({
                map,
                ctx,
                localLayers,
                ctxTrack,
                points: ctxTrack.points,
                wpts: ctxTrack.wpts,
                trackLayers: ctxTrack.layers,
            });
            if (ctxTrack.layers) {
                ctxTrack.layers.options = { ...ctxTrack.layers.options, type: LOCAL_TRACKS_LAYERS_ID };
                saveChanges(ctxTrack.points, ctxTrack.wpts, ctxTrack.layers);
            }

            setPrevZoom(zoom);
            setMove(false);
        }
    }, [zoom, move]);

    useEffect(() => {
        if (ctx.createTrack && ctxTrack) {
            if (ctx.createTrack?.enable && isEmpty(ctx.pointContextMenu) && !ctx.openContextMenu) {
                setupClickOnMap();
            } else {
                deleteClickOnMap();
            }
        }
        // ctx.pointContextMenu was added to monitor menu state and ignore click
        // ctx.routingCache was added to have actual context for addRoutingToCache()
    }, [
        ctx.createTrack,
        ctxTrack,
        geoRouter.getEffectDeps(),
        ctx.pointContextMenu,
        ctx.routingCache,
        ctx.openContextMenu,
    ]);

    /**
     * Refresh visible (active) localTracks.
     */
    useEffect(() => {
        // Mark all tracks as inactive before updating
        for (let l in localLayers) {
            localLayers[l].active = false;
        }
        const deleteInds = [];
        // Loop through all local tracks and update their visibility on the map
        Object.values(ctx.localTracks).forEach((track, index) => {
            if (!track?.name) {
                deleteInds.push(index);
                return;
            }
            const currLayer = localLayers[track.name];

            // Check if the track is selected and not already added to the map
            if (track.selected && !currLayer) {
                const needFitBounds = track.name === ctxTrack.name && !isEmptyTrack(track);
                addTrackToMap(track, needFitBounds, true);
            } else if (currLayer) {
                // If the track is already on the map, update its active status
                currLayer.active = track.selected;

                // Check if the track layer is still present on the map
                if (!map.hasLayer(currLayer.layer)) {
                    currLayer.layer.options = { ...currLayer.layer.options, type: LOCAL_TRACKS_LAYERS_ID };
                    map.addLayer(currLayer.layer);
                }

                // If the track was updated, refresh its layer on the map
                if (track.updated) {
                    updateTrackOnMap(track, currLayer.active);
                }
            }
        });

        // Remove inactive layers from the map
        for (let l in localLayers) {
            if (!localLayers[l].active) {
                if (map.hasLayer(localLayers[l].layer)) {
                    map.removeLayer(localLayers[l].layer);
                }
                delete localLayers[l];
            }
        }

        // Update the localLayers state after cleaning up
        setLocalLayers({ ...localLayers });

        if (!isEmpty(deleteInds)) {
            deleteLocalTracksByIndexes(ctx, deleteInds);
        }
    }, [ctx.localTracks, !!ctx.createTrack]);

    /*
        Track Editor state life cycle:

        Start: ctx.createTrack = null => ctx.createTrack.enable = true
        Stop: ctx.createTrack.enable = false (!!!) => ctx.createTrack = null

        ctx.createTrack.latlng: used to specify newly created-track coordinates
        ctx.createTrack.closePrev: close previous file, use with both enable=true/false
        ctx.createTrack.cloudAutoSave: ignore cloud-already-exist confirmation (used by Cloud -> Edit track)

        ctx.createTrack.layers: (replaced with registeredLayers) used to clean-up (some) layers on editor exit

        ctx.createTrack.edit: ?
        ctx.createTrack.clear: ?
        ctx.createTrack.deletePrev: ?
    */
    useEffect(() => {
        if (ctx.createTrack === null) {
            clearAllRegisteredLayers(map, setRegisteredLayers);
        }
        if (ctx.createTrack?.closePrev && !isEmpty(ctx.createTrack.closePrev.file)) {
            clearCreateLayers(ctx.createTrack.closePrev.file.layers);
            saveResult(ctx.createTrack.closePrev.file, true);
            clearAllRegisteredLayers(map, setRegisteredLayers);
            delete ctx.createTrack.closePrev;
            ctx.setCreateTrack({ ...ctx.createTrack }); // closePrev, not always stop-editor
        }
        if (ctx.createTrack?.enable && Object.keys(registeredLayers).length === 0) {
            ctx.setSelectedWpt(null);
            if (ctx.createTrack.edit) {
                editCurrentTrack();
            } else {
                deleteOldLayers(ctxTrack?.layers, map);
                ctx.setCurrentObjectType(OBJECT_TYPE_LOCAL_TRACK);
                initNewSelectedTrack({
                    ctx,
                    map,
                    geoRouter,
                    selectedGpxFile: ctxTrack,
                    setRegisteredLayers,
                });
            }
        } else if (ctx.createTrack?.enable === false) {
            if (ctx.createTrack.clear) {
                clearCreateLayers(ctxTrack.layers); // track-closed (edited, by Visible switch)
                clearAllRegisteredLayers(map, setRegisteredLayers);
            } else {
                clearAllRegisteredLayers(map, setRegisteredLayers); // reset+cleanup track-closed (edited, by Close button)
            }
            let savedFile;
            if (ctx.createTrack.deletePrev && ctxTrack.prevState) {
                savedFile = ctxTrack.prevState;
            } else {
                savedFile = ctxTrack;
            }
            if (savedFile) {
                saveResult(savedFile, false);
            }
            ctx.setCreateTrack(null); // stop-editor (finished)
        }
    }, [ctx.createTrack]);

    function saveResult(file, closePrev) {
        const ind = ctx.localTracks.findIndex((t) => t?.name === file?.name);
        if (ind !== -1) {
            ctx.localTracks[ind] = file;
            if (ctx.createTrack.clear) {
                ctx.localTracks[ind].selected = false;
            } else {
                if (ctx.createTrack.edit || closePrev) {
                    ctx.localTracks[ind].updated = true;
                } else {
                    ctx.localTracks[ind].selected = true;
                }
            }
            saveTrackToLocalStorage({ ctx, track: file }); // ctx.localTracks might be modified there
            ctx.setLocalTracks([...ctx.localTracks]); // save our mutations which were made before

            if (ctx.createTrack.clear) {
                ctx.setSelectedGpxFile({}); // finally, after saveTracks
            }
        }
    }

    function clearCreateLayers(layers) {
        if (layers) {
            map.removeLayer(layers);
        }
    }

    function refreshAnalytics() {
        requestAnalytics({ ctx, track: ctxTrack, debouncerTimer });
        ctx.setSelectedGpxFile({ ...ctxTrack, refreshAnalytics: false });
    }

    function syncRouting() {
        const track = { ...ctxTrack };
        track.syncRouting = false;
        syncTrackWithCache({ ctx, track, geoRouter, debouncerTimer }); // mutate track
        ctx.setSelectedGpxFile(track);
    }

    function localRedrawWpts() {
        redrawWptsOnLayer({ layer: ctxTrack.layers });
        ctx.setSelectedGpxFile((o) => ({ ...o, localRedrawWpts: false }));
    }

    function finishTrackRename() {
        const track = { ...ctxTrack };

        const newName = track.name;
        const oldName = track.oldName;

        // when GeneralInfo's changeFileName() is done
        // additionally need to change localLayers locally
        if (newName && oldName && localLayers[oldName]) {
            localLayers[newName] = localLayers[oldName];
            delete localLayers[oldName];
            setLocalLayers({ ...localLayers });
        }

        track.oldName = null;
        ctx.setSelectedGpxFile(track);
    }

    function checkZoom() {
        if (ctxTrack.selected && ctxTrack.zoom) {
            showSelectedTrackOnMap();
        } else if (ctxTrack.showPoint) {
            TracksManager.showSelectedPointOnMap(ctxTrack, map, selectedPointMarker, setSelectedPointMarker);
        }
    }

    function addTrackToMap(track, fitBounds, active) {
        if (track.points) {
            track.tracks = [{ points: track.points }];
        }
        if (track.updated) {
            track.updated = false; // reset
        }
        let layer = TrackLayerProvider.createLayersByTrackData({
            data: track,
            ctx,
            map,
            simplifyWpts: track?.wpts?.length >= WPT_SIMPLIFY_THRESHOLD,
        });
        if (layer) {
            if (fitBounds) {
                if (!isEmpty(layer.getBounds())) {
                    map.fitBounds(layer.getBounds(), fitBoundsOptions(ctx));
                }
            }
            layer.on('click', () => {
                if (!ctx.createTrack || !ctx.createTrack.enable) {
                    ctx.setCreateTrack({
                        enable: true, // start-editor
                        edit: true,
                    });
                    track.analysis = TracksManager.prepareAnalysis(track.analysis);
                    ctx.setSelectedGpxFile(track);
                    ctx.setCurrentObjectType(OBJECT_TYPE_LOCAL_TRACK);
                    ctx.setUpdateInfoBlock(true);
                }
            });
            layer.options = { ...layer.options, type: LOCAL_TRACKS_LAYERS_ID };
            addLayerToMap(map, layer, 'add-local-track-layer');
            localLayers[track.name] = {
                layer: layer,
                points: track.points ? track.points : TracksManager.getEditablePoints(track),
                active: active,
            };
        }
    }

    function showSelectedTrackOnMap() {
        let currLayer = localLayers[ctxTrack.name];
        if (currLayer) {
            map.fitBounds(currLayer.layer.getBounds(), fitBoundsOptions(ctx));
            ctxTrack.zoom = false;
            ctx.setSelectedGpxFile({ ...ctxTrack });
        }
    }

    function checkUpdateLayers() {
        if (ctxTrack?.updateLayers) {
            ctxTrack.updateLayers = false;
            if (!ctxTrack.layers) {
                ctxTrack.layers = new L.FeatureGroup();
            }
            ctxTrack.layers = updateLayers({
                map,
                ctx,
                localLayers,
                ctxTrack,
                points: ctxTrack.points,
                wpts: ctxTrack.wpts,
                trackLayers: ctxTrack.layers,
            });
            saveChanges(ctxTrack.points, ctxTrack.wpts, ctxTrack.layers);
        }
    }

    function updateTrackOnMap(track, active) {
        map.removeLayer(localLayers[track.name].layer);
        track.layers?.getLayers().forEach((l) => {
            map.removeLayer(l); // remove sub-layers
        });
        delete localLayers[track.name];
        addTrackToMap(track, false, active);
    }

    // get-routing
    useEffect(() => {
        effectDebouncer({
            effect: () => effectControlRouterRequests({ ctx, startedRouterJobs, setStartedRouterJobs }),
            timerRef: timerControlRouterRequests,
            setTrigger: setTriggerControlRouterRequests,
            delay: CONTROL_ROUTER_REQUEST_DEBOUNCER_MS,
        });
    }, [ctx.routingCache, startedRouterJobs, triggerControlRouterRequests]);

    // after-routing
    useEffect(() => {
        effectDebouncer({
            effect: () =>
                effectRefreshTrackWithRouting({
                    ctx,
                    geoRouter,
                    saveChanges,
                    debouncerTimer,
                }),
            timerRef: timerRefreshTrackWithRouting,
            setTrigger: setTriggerRefreshTrackWithRouting,
            delay: REFRESH_TRACKS_WITH_ROUTING_DEBOUNCER_MS,
        });
    }, [ctx.routingCache, triggerRefreshTrackWithRouting]);

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

        const analysis = () => {
            TracksManager.getTrackWithAnalysis(TracksManager.GET_ANALYSIS, ctx, ctx.setLoadingContextMenu, points).then(
                (res) => {
                    if (res) ctx.setUnverifiedGpxFile(() => ({ ...res }));
                }
            );
        };

        debouncer(analysis, debouncerTimer, GET_ANALYSIS_DEBOUNCE_MS);

        // saveChanges does useful job, but setSelectedGpxFile() is double-called (later, by parent)
        saveChanges(null, null, null, ctxTrack);
    }

    function addGeometryToTrack(newPoint, points) {
        let prevPoint = points[points.length - 1];
        prevPoint.geometry = deleteInfo(cloneDeep(points));
        prevPoint.profile = newPoint.profile;
        prevPoint.geoProfile = newPoint.geoProfile;
        let firstP = points[0];
        firstP.geometry = [];
        firstP.profile = TracksManager.PROFILE_LINE;
        firstP.geoProfile = geoRouter.getShortGeoProfile({ profile: TracksManager.PROFILE_LINE });
        return [firstP, prevPoint];
    }

    function createPointOnMap(newPoint, layers, track) {
        const marker = new EditableMarker(map, ctx, newPoint, null, track).create();
        layers.addLayer(marker);
    }

    function deleteInfo(points) {
        points.forEach((p) => {
            delete p.profile;
            delete p.geometry;
        });
        return points;
    }

    function trackHasRouting() {
        // hasGeo set before?
        if (ctxTrack.hasGeo) {
            return true;
        }
        // just-created is routable
        if (ctxTrack.points.length <= 2) {
            return true;
        }
        // finally, assume Line-only as non-routable
        const pointWithRouting = ctxTrack.points.find(
            (p) => p.profile !== undefined && p.profile !== TracksManager.PROFILE_LINE
        );
        return !!pointWithRouting;
    }

    function saveChanges(points, wpts, layers, res) {
        let track = ctxTrack;
        if (res) {
            track = res;
            if (layers) {
                track.layers = layers;
            }
        } else {
            track.points = points;
            track.wpts = wpts;
            track.layers = layers;
        }
        TracksManager.addDistance(track);
        track.zoom = false;

        addRegisteredLayers(track.layers, setRegisteredLayers);

        ctx.setSelectedGpxFile({ ...track });
    }

    function setupClickOnMap() {
        map.getContainer().style.cursor = 'crosshair';
        map.off('click'); // !!!
        map.on('click', clickMap);
    }

    function deleteClickOnMap() {
        map.getContainer().style.cursor = '';
        map.off('click');
    }

    useEffect(() => {
        if (addRoutingToTrack) {
            let points = ctxTrack.points;
            let layers = ctxTrack.layers;
            points = addGeometryToTrack(addNewPoint, points);
            points.push(addNewPoint);
            let prevPoint = getPrevPoint(points);
            prevPoint.profile = addNewPoint.profile;
            prevPoint.geoProfile = addNewPoint.geoProfile;

            let tempLine = TrackLayerProvider.createEditableTempLPolyline(prevPoint, addNewPoint, map, ctx);
            tempLine.options = { ...tempLine.options, name: TEMP_LAYER_FLAG };
            layers.addLayer(tempLine);

            TracksRoutingCache.addRoutingToCache(prevPoint, addNewPoint, tempLine, ctx);

            ctxTrack.addNewPoint = addNewPoint;
            ctxTrack.points = points;

            createPointOnMap(addNewPoint, layers, ctxTrack);

            ctxTrack.layers = updateLayers({
                map,
                ctx,
                localLayers,
                ctxTrack,
                points,
                wpts: ctxTrack.wpts,
                trackLayers: layers,
            });

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
            const newPoint = createNewPoint({ ctx, e, geoProfile: geoRouter.getShortGeoProfile() });
            const points = ctxTrack.points;
            let layers = ctxTrack.layers ?? new L.FeatureGroup();
            let prevPoint = ctxTrack.prevPoint;
            if (isNewPoint(ctxTrack, newPoint)) {
                if (newPoint.profile !== TracksManager.PROFILE_LINE && trackWithoutRouting(points)) {
                    setOpenAddRoutingToTrackDialog(true);
                    setAddNewPoint(newPoint);
                } else {
                    points.push(newPoint);
                    if (points?.length > 1) {
                        prevPoint = getPrevPoint(points);
                        if (!prevPoint.profile) {
                            prevPoint.profile = TracksManager.PROFILE_LINE;
                            prevPoint.geoProfile = geoRouter.getShortGeoProfile({
                                profile: TracksManager.PROFILE_LINE,
                            });
                        }
                        prevPoint.profile = newPoint.profile;
                        prevPoint.geoProfile = newPoint.geoProfile;
                        if (newPoint.profile === TracksManager.PROFILE_LINE && !trackHasRouting()) {
                            createNewRouteLine(prevPoint, newPoint, points, layers);
                        } else {
                            ctxTrack.hasGeo = true;
                            const tempLine = TrackLayerProvider.createEditableTempLPolyline(
                                prevPoint,
                                newPoint,
                                map,
                                ctx
                            );
                            layers.addLayer(tempLine);
                            TracksRoutingCache.addRoutingToCache(prevPoint, newPoint, tempLine, ctx);
                        }
                    } else {
                        layers = createFirstLayers({ map, ctx, track: ctxTrack, newPoint, setRegisteredLayers });
                    }
                    ctxTrack.newPoint = newPoint;
                    ctxTrack.points = points;
                    createPointOnMap(newPoint, layers, ctxTrack);
                    ctxTrack.layers = updateLayers({
                        map,
                        ctx,
                        localLayers,
                        ctxTrack,
                        points,
                        wpts: ctxTrack.wpts,
                        trackLayers: layers,
                    });
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
        return !track.points.find((p) => TracksManager.isEqualPoints(p, newPoint));
    }

    function editCurrentTrack() {
        if (localLayers[ctxTrack.name]) {
            map.removeLayer(localLayers[ctxTrack.name]?.layer);
        }
        deleteOldLayers(ctxTrack?.layers, map);

        let currentTrack = ctx.localTracks.find((t) => t.name === ctxTrack.name);
        if (currentTrack) {
            ctxTrack = currentTrack;
        }
        const points = TracksManager.getEditablePoints(ctxTrack);
        ctxTrack.layers = updateLayers({
            map,
            ctx,
            localLayers,
            ctxTrack,
            points,
            wpts: ctxTrack.wpts,
            trackLayers: new L.FeatureGroup(),
        });
        ctxTrack.points = points;

        ctxTrack.newPoint = points[points.length - 1];
        ctxTrack.update = false;

        if (ctxTrack.newPoint?.geoProfile || ctxTrack.newPoint?.profile) {
            geoRouter.onGeoProfile(ctxTrack.newPoint);
        } else {
            geoRouter.onGeoProfile({ profile: TracksManager.PROFILE_LINE });
        }

        ctx.setSelectedGpxFile({ ...ctxTrack });

        addRegisteredLayers(ctxTrack.layers, setRegisteredLayers);

        TracksManager.updateState(ctx);
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
        if (!isEmpty(ctx.routingNewSegments)) {
            ctx.routingNewSegments.forEach((s) => {
                TracksRoutingCache.addRoutingToCache(s.start, s.end, s.tempPolyline, ctx);
            });
            ctx.setRoutingNewSegments([]); // reset new segments queue
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
        </>
    );
}

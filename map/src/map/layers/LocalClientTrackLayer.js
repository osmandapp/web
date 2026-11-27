import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import AppContext, { isLocalTrack, OBJECT_TYPE_LOCAL_TRACK } from '../../context/AppContext';
import MapContext from '../../context/MapContext';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import TrackLayerProvider, {
    checkShowPoints,
    isWptClick,
    redrawWptsOnLayer,
    WPT_SIMPLIFY_THRESHOLD,
} from '../util/TrackLayerProvider';
import TracksManager, { getResolvedPointsGroups, isEmptyTrack } from '../../manager/track/TracksManager';
import { applyZoomToFit, addLayerToMap } from '../util/MapManager';
import isEmpty from 'lodash-es/isEmpty';
import { effectDebouncer } from '../../util/Utils';
import AddRoutingToTrackDialog from '../components/AddRoutingToTrackDialog';
import {
    effectControlRouterRequests,
    effectRefreshTrackWithRouting,
    effectRequestAnalysis,
    isAnalysisWanted,
} from '../../context/TracksRoutingCache';
import useZoomMoveMapHandlers from '../../util/hooks/map/useZoomMoveMapHandlers';
import { useSelectMarkerOnMap } from '../../util/hooks/map/useSelectMarkerOnMap';
import { deleteLocalTracksByIndexes, saveTrackToLocalStorage } from '../../context/LocalTrackStorage';
import {
    ADDED_POINT,
    addPointToTrack,
    addRoutedSegment,
    createLocalTrack,
    createNewPoint,
    getLastSegmentGeoProfile,
    initNewSelectedTrack,
    isAddPointByClick,
    isNewTrack,
} from '../util/creator/LocalTrackHelper';
import {
    addRegisteredLayers,
    clearAllRegisteredLayers,
    createFirstLayers,
    deleteOldLayers,
    redrawPointMarkers,
    redrawTrackPoints,
    updateLayers,
} from '../util/creator/LocalTrackLayerHelper';
import { hideMarkersUnderPin } from '../util/MarkerSelectionService';
import { passClickToNavigation } from '../../manager/NavigationManager';
import { assignPointIds, assignWptIds, findPointIndex } from '../../manager/track/TrackOperations';

const EDITOR_PICKS_POINT_CLASS = 'track-editor-picks-point';

const CONTROL_ROUTER_REQUEST_DEBOUNCER_MS = 50;
const REFRESH_TRACKS_WITH_ROUTING_DEBOUNCER_MS = 500;
export const LOCAL_TRACKS_LAYERS_ID = 'localTracksLayers';

export function isTrackEditorPicksPoint(map) {
    return L.DomUtil.hasClass(map.getContainer(), EDITOR_PICKS_POINT_CLASS);
}

export default function LocalClientTrackLayer() {
    const ctx = useContext(AppContext);
    const mtx = useContext(MapContext);
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

    const pendingZoomRef = useRef(false);

    useZoomMoveMapHandlers(map, setZoom, setMove);

    const getLocalWptLayers = useCallback(() => {
        if (!isLocalTrack(ctx)) return null;
        return ctx.selectedGpxFile?.layers?.getLayers?.() ?? null;
    }, [ctx.selectedGpxFile?.layers, ctx.currentObjectType]);

    useSelectMarkerOnMap({ ctx, getLayers: getLocalWptLayers, type: LOCAL_TRACKS_LAYERS_ID, map, zoom, move });

    let ctxTrack = ctx.selectedGpxFile;

    const geoRouter = ctx.trackRouter;

    /**
     * Note: run on any selectedGpxFile including Cloud-mode
     *
     * Depends: every change of ctx.selectedGpxFile
     *
     * SortActions:
     *
     * - finish track rename (oldName)
     * - redraw (force visible) track waypoints (localRedrawWpts)
     * - save Local tracks (when editor enabled)
     * - check/set Zoom (fitBounds) for Local tracks
     * - .updateLayers processing (?)
     */
    useEffect(() => {
        if (ctxTrack && isLocalTrack(ctx)) {
            if (ctxTrack.oldName) {
                finishTrackRename();
            } else if (ctxTrack.localRedrawWpts) {
                localRedrawWpts();
            } else {
                if (
                    ctx.createTrack?.enable &&
                    (isEmptyTrack(ctxTrack) === false || !isNewTrack(ctx.localTracks, ctxTrack))
                ) {
                    if (ctx.localTracks.length > 0) {
                        saveTrackToLocalStorage({ ctx, track: ctxTrack, writeToDB: !isAnalysisWanted(ctxTrack) });
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
        if (isEditedTrackDrawn()) {
            redrawTrackPoints({ map, ctx, points: ctxTrack.points, trackLayers: ctxTrack.layers });
            hideMarkersUnderSelectedPin();
        }
        if (selectedPointMarker && findPointIndex(ctxTrack?.points ?? [], selectedPointMarker.pointId) === -1) {
            map.removeLayer(selectedPointMarker.marker);
            setSelectedPointMarker(null);
        }
    }, [ctxTrack?.points]);

    useEffect(() => {
        const needUpdate =
            (move || zoom !== prevZoom) &&
            (ctx.selectedGpxFile.wpts?.length >= WPT_SIMPLIFY_THRESHOLD ||
                (ctx.selectedGpxFile.wpts?.length > 100 && ctx.selectedGpxFile.points?.length > 100));
        if (needUpdate && ctx.createTrack?.enable && ctxTrack) {
            ctxTrack.layers = updateTrackLayers(ctxTrack.layers);
            if (ctxTrack.layers) {
                ctxTrack.layers.options = { ...ctxTrack.layers.options, type: LOCAL_TRACKS_LAYERS_ID };
                saveChanges(ctxTrack.points, ctxTrack.wpts, ctxTrack.layers);
            }

            setPrevZoom(zoom);
            setMove(false);
        } else if (isEditedTrackDrawn()) {
            redrawPointMarkers({ map, ctx, points: ctxTrack.points, trackLayers: ctxTrack.layers });
            checkShowPoints(ctxTrack.layers, ctx.showPoints.points, false);
            hideMarkersUnderSelectedPin();
        }
    }, [zoom, move]);

    useEffect(() => {
        const picksPoint = Boolean(ctxTrack && isAddPointByClick(ctx));
        map.getContainer().classList.toggle(EDITOR_PICKS_POINT_CLASS, picksPoint);
        if (!picksPoint) {
            return;
        }
        map.on('click', clickMap);

        return () => map.off('click', clickMap);
        // ctx.pointContextMenu was added to monitor menu state and ignore click
    }, [ctx.createTrack, ctxTrack, geoRouter.getEffectDeps(), ctx.pointContextMenu, ctx.openContextMenu]);

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
        for (let index = 0; index < ctx.localTracks.length; index++) {
            const track = ctx.localTracks[index];
            if (!track?.name) {
                deleteInds.push(index);
                continue;
            }
            const currLayer = localLayers[track.name];

            // Check if the track is selected and not already added to the map
            if (track.selected && !currLayer) {
                const needFitBounds = track.name === ctxTrack.name && !isEmptyTrack(track);
                addTrackToMap(track, needFitBounds, true);
            } else if (currLayer) {
                // If the track is already on the map, update its active status
                currLayer.active = track.selected;

                const edited =
                    ctx.createTrack?.enable &&
                    (track.name === ctxTrack.name || track.name === ctx.createTrack.closePrev?.file?.name);

                // Check if the track layer is still present on the map
                if (!map.hasLayer(currLayer.layer) && !edited) {
                    currLayer.layer.options = { ...currLayer.layer.options, type: LOCAL_TRACKS_LAYERS_ID };
                    // Set trackName for all polylines in the layer
                    TrackLayerProvider.setTrackName(currLayer.layer.getLayers(), track.name);
                    map.addLayer(currLayer.layer);
                }

                // If the track was updated, refresh its layer on the map
                if (currLayer.active && currLayer.track !== track && !edited) {
                    updateTrackOnMap(track, currLayer.active);
                }
            }
        }

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
            let closePrev = false;
            if (ctx.createTrack.deletePrev && ctxTrack.prevState) {
                savedFile = ctxTrack.prevState;
            } else if (isEmpty(ctxTrack) && ctx.selectedLocalTrackObj) {
                savedFile = ctx.localTracks.find((t) => t?.name === ctx.selectedLocalTrackObj.name);
                closePrev = true;
            } else {
                savedFile = ctxTrack;
            }
            if (savedFile) {
                saveResult(savedFile, closePrev);
            }
            ctx.setCreateTrack(null); // stop-editor (finished)
        }
    }, [ctx.createTrack]);

    function saveResult(file, closePrev) {
        const ind = ctx.localTracks.findIndex((t) => t?.name === file?.name);
        if (ind !== -1) {
            if (ctx.createTrack.clear) {
                file.selected = false;
            } else if (!ctx.createTrack.edit && !closePrev) {
                file.selected = true;
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

    function localRedrawWpts() {
        const pg = getResolvedPointsGroups(ctxTrack);
        redrawWptsOnLayer({ layer: ctxTrack.layers, pointsGroups: pg });
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
            ctx.setSelectedGpxFile((o) => ({ ...o, showPoint: false }));
        }
    }

    function addTrackToMap(track, fitBounds, active) {
        let layer = TrackLayerProvider.createLayersByTrackData({
            data: track.points ? { ...track, tracks: [{ points: track.points }] } : track,
            ctx,
            map,
            simplifyWpts: track?.wpts?.length >= WPT_SIMPLIFY_THRESHOLD,
        });
        if (layer) {
            if (fitBounds) {
                pendingZoomRef.current = true;
            }
            layer.on('click', (e) => {
                if (!isWptClick(e) && passClickToNavigation(e)) {
                    return;
                }
                if (!ctx.createTrack?.enable) {
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
                track,
                active: active,
            };
        }
    }

    function showSelectedTrackOnMap() {
        let currLayer = localLayers[ctxTrack.name];
        if (currLayer) {
            applyZoomToFit({ map, mtx, bounds: currLayer.layer.getBounds() });
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
            ctxTrack.layers = updateTrackLayers(ctxTrack.layers);
            saveChanges(ctxTrack.points, ctxTrack.wpts, ctxTrack.layers);
            // After layer rebuild, re-hide markers under the selected pin (new marker instances were created)
            hideMarkersUnderSelectedPin();
        }
    }

    function updateTrackLayers(trackLayers) {
        return updateLayers({
            map,
            ctx,
            localLayers,
            ctxTrack,
            points: ctxTrack.points,
            wpts: ctxTrack.wpts,
            trackLayers,
        });
    }

    function isEditedTrackDrawn() {
        return (
            ctx.createTrack?.enable &&
            isLocalTrack(ctx) &&
            ctxTrack?.points &&
            ctxTrack.layers &&
            map.hasLayer(ctxTrack.layers)
        );
    }

    function hideMarkersUnderSelectedPin() {
        if (ctx.selectedCreatedLayerRef?.current && map.hasLayer(ctx.selectedCreatedLayerRef.current)) {
            hideMarkersUnderPin(map, ctx);
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
    }, [ctxTrack?.points, ctx.routingCache, startedRouterJobs, triggerControlRouterRequests]);

    // after-routing
    useEffect(() => {
        effectDebouncer({
            effect: () =>
                effectRefreshTrackWithRouting({
                    ctx,
                    geoRouter,
                    saveChanges,
                }),
            timerRef: timerRefreshTrackWithRouting,
            setTrigger: setTriggerRefreshTrackWithRouting,
            delay: REFRESH_TRACKS_WITH_ROUTING_DEBOUNCER_MS,
        });
    }, [ctxTrack?.points, ctx.routingCache, triggerRefreshTrackWithRouting]);

    useEffect(() => {
        if (ctx.createTrack?.enable && isLocalTrack(ctx)) {
            effectRequestAnalysis({ ctx, track: ctxTrack, debouncerTimer });
        }
    }, [ctxTrack?.points]);

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

    useEffect(() => {
        if (addRoutingToTrack) {
            ctxTrack.addNewPoint = addNewPoint;
            ctxTrack.points = addRoutedSegment({ points: ctxTrack.points, newPoint: addNewPoint, geoRouter });

            ctx.setSelectedGpxFile({ ...ctxTrack });
            TracksManager.updateState(ctx);
            setAddRoutingToTrack(false);
        }
    }, [addRoutingToTrack]);

    function clickMap(e) {
        if (ctxTrack?.addWpt) {
            ctx.setAddFavorite((prev) => ({
                ...prev,
                location: e.latlng,
                editTrack: true,
                openKey: Date.now(),
            }));
            delete ctxTrack.addWpt;
            ctx.setSelectedGpxFile({ ...ctxTrack });
            TracksManager.updateState(ctx);
        } else {
            const newPoint = createNewPoint({ ctx, e, geoProfile: geoRouter.getShortGeoProfile() });
            const added = addPointToTrack(ctxTrack, newPoint);
            if (added === ADDED_POINT.ASK_ROUTING) {
                setOpenAddRoutingToTrackDialog(true);
                setAddNewPoint(newPoint);
            } else if (added) {
                if (added === ADDED_POINT.FIRST) {
                    ctxTrack.layers = updateTrackLayers(createFirstLayers(setRegisteredLayers));
                } else if (added === ADDED_POINT.LINE) {
                    // saveChanges does useful job, but setSelectedGpxFile() is double-called (later, by parent)
                    saveChanges(null, null, null, ctxTrack);
                }
                ctx.setSelectedGpxFile({ ...ctxTrack });
                TracksManager.updateState(ctx);
            }
        }
    }

    function editCurrentTrack() {
        if (localLayers[ctxTrack.name]) {
            map.removeLayer(localLayers[ctxTrack.name]?.layer);
        }
        deleteOldLayers(ctxTrack?.layers, map);

        let currentTrack = ctx.localTracks.find((t) => t?.name === ctxTrack.name);
        if (currentTrack) {
            ctxTrack = currentTrack;
        }
        const points = assignPointIds(ctxTrack.points);
        assignWptIds(ctxTrack.wpts);
        ctxTrack.layers = updateTrackLayers(new L.FeatureGroup());
        ctxTrack.points = points;

        const lastPoint = points[points.length - 1];

        if (lastPoint?.geoProfile || lastPoint?.profile) {
            geoRouter.onGeoProfile(lastPoint);
        } else {
            geoRouter.onGeoProfile({ profile: TracksManager.PROFILE_LINE });
        }

        const zoom = pendingZoomRef.current;
        if (zoom) pendingZoomRef.current = false;
        ctx.setSelectedGpxFile({ ...ctxTrack, zoom });

        addRegisteredLayers(ctxTrack.layers, setRegisteredLayers);

        TracksManager.updateState(ctx);
    }

    const lastSegmentGeoProfile = getLastSegmentGeoProfile(ctxTrack.points, geoRouter);

    useEffect(() => {
        // useful with Undo/Redo
        if (lastSegmentGeoProfile) {
            geoRouter.onGeoProfile(lastSegmentGeoProfile);
        }
    }, [JSON.stringify(lastSegmentGeoProfile)]);

    return (
        openAddRoutingToTrackDialog && (
            <AddRoutingToTrackDialog
                setOpenAddRoutingToTrackDialog={setOpenAddRoutingToTrackDialog}
                setAddRoutingToTrack={setAddRoutingToTrack}
            />
        )
    );
}

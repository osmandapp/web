import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../../context/AppContext';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import TrackLayerProvider, { TEMP_LAYER_FLAG } from '../TrackLayerProvider';
import TracksManager, { isEmptyTrack } from '../../context/TracksManager';
import _ from 'lodash';
import EditablePolyline from '../EditablePolyline';
import EditableMarker from '../EditableMarker';
import Utils, { effectDebouncer } from '../../util/Utils';
import WptMapDialog from '../components/WptMapDialog';
import AddRoutingToTrackDialog from '../components/AddRoutingToTrackDialog';
import TracksRoutingCache, {
    syncTrackWithCache,
    effectControlRouterRequests,
    effectRefreshTrackWithRouting,
    GET_ANALYSIS_DEBOUNCE_MS,
    debouncer,
} from '../../context/TracksRoutingCache';

const CONTROL_ROUTER_REQUEST_DEBOUNCER_MS = 50;
const REFRESH_TRACKS_WITH_ROUTING_DEBOUNCER_MS = 500;

export default function LocalClientTrackLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [localLayers, setLocalLayers] = useState({});
    const [selectedPointMarker, setSelectedPointMarker] = useState(null);

    const debouncerTimer = useRef(null);

    const timerControlRouterRequests = useRef(null);
    const timerRefreshTrackWithRouting = useRef(null);
    const [triggerControlRouterRequests, setTriggerControlRouterRequests] = useState(0);
    const [triggerRefreshTrackWithRouting, setTriggerRefreshTrackWithRouting] = useState(0);

    const [startedRouterJobs, setStartedRouterJobs] = useState(0);

    const [addRoutingToTrack, setAddRoutingToTrack] = useState(false);
    const [openAddRoutingToTrackDialog, setOpenAddRoutingToTrackDialog] = useState(false);
    const [newPoint, setNewPoint] = useState(null);

    let ctxTrack = ctx.selectedGpxFile;

    const geoRouter = ctx.trackRouter;

    /*
        unverifiedGpxFile is a kind of selectedGpxFile

        They're calculated by async get-analytics calls. Due to delayed/async
        nature, user might have already choosen another selectedGpxFile when
        we've got get-analytics results. This is the reason why we can't
        directly update unverifiedGpxFile to selectedGpxFile.

        To avoid mis-overwriting selectedGpxFile with unverifiedGpxFile, we
        have to compare name, description, 'selected', and points before
        setting selectedGpxFile.

        Optionally, in case when unverifiedGpxFile is stale, we could try to
        find corresponding file in localTracks/gpxTracks and update there if we
        have found actual file to update (TODO).
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
                    isPointsHaveSameGeo(unverified.tracks[0]?.points, trusted.tracks[0]?.points))
            ) {
                // cleanup some triggers
                unverified.syncRouting = false;
                unverified.updateLayers = false;
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
     * Actions:
     *
     * - check/get routing from cache
     * - save Local tracks (when editor enabled)
     * - check/set Zoom (fitBounds) for Local tracks
     * - .updateLayers processing (?)
     */
    useEffect(() => {
        if (ctxTrack && ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK) {
            if (ctxTrack.syncRouting) {
                syncRouting();
            } else {
                // checkDeleteSelected();
                if (ctx.createTrack?.enable && isEmptyTrack(ctxTrack) === false) {
                    saveLocal();
                }
                checkZoom();
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
        // ctx.routingCache was added to have actual context for addRoutingToCache()
    }, [ctx.createTrack, ctxTrack, geoRouter.getEffectDeps(), ctx.pointContextMenu, ctx.routingCache]);

    // after Edit, cleanup localLayers which were "killed" by updateLayers()
    useEffect(() => {
        if (ctx.createTrack?.enable === false) {
            let deleted = 0;
            for (const l in localLayers) {
                if (map.hasLayer(localLayers[l]) === false) {
                    delete localLayers[l];
                    deleted++;
                }
            }
            if (deleted > 0) {
                setLocalLayers({ ...localLayers });
            }
        }
    }, [ctx.createTrack?.enable]);

    useEffect(() => {
        for (let l in localLayers) {
            localLayers[l].active = false;
        }

        Object.values(ctx.localTracks).forEach((track) => {
            let currLayer = localLayers[track.name];
            if (track.selected && !currLayer) {
                const needFitBounds = isEmptyTrack(track) === false;
                addTrackToMap(track, needFitBounds, true);
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
                    if (ctxTrack.layers) {
                        map.removeLayer(ctxTrack.layers);
                    } else {
                        console.debug('layers-cleanup got empty layer', ctxTrack.name);
                    }
                    ctx.setSelectedGpxFile({});
                }
                delete localLayers[l];
            }
        }

        setLocalLayers({ ...localLayers });
    }, [ctx.localTracks, ctx.setLocalTracks]);

    /*
        Track Editor state life cycle:

        Start: ctx.createTrack = null => ctx.createTrack.enable = true
        Stop: ctx.createTrack.enable = false (!!!) => ctx.createTrack = null

        ctx.createTrack.latlng: used to specify newly created-track coordinates
        ctx.createTrack.closePrev: close previous file, use with both enable=true/false
        ctx.createTrack.cloudAutoSave: ignore cloud-already-exist confirmation (used by Cloud -> Edit track)

        ctx.createTrack.edit: ?
        ctx.createTrack.clear: ?
        ctx.createTrack.layers: ?
        ctx.createTrack.deletePrev: ?
    */
    useEffect(() => {
        if (ctx.createTrack?.closePrev && !_.isEmpty(ctx.createTrack.closePrev.file)) {
            clearCreateLayers(ctx.createTrack.closePrev.file.layers);
            saveResult(ctx.createTrack.closePrev.file, true);
            delete ctx.createTrack.closePrev;
            delete ctx.createTrack.layers;
            ctx.setCreateTrack({ ...ctx.createTrack }); // closePrev, not always stop-editor
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
            ctx.setCreateTrack(null); // stop-editor (finished)
        }
    }, [ctx.createTrack]);

    function saveResult(file, closePrev) {
        let ind = ctx.localTracks.findIndex((t) => t.name === file.name);
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
            TracksManager.saveTracks({ ctx, track: file }); // ctx.localTracks might be modified there
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

    function syncRouting() {
        const track = { ...ctxTrack };
        track.syncRouting = false;
        syncTrackWithCache({ ctx, track, geoRouter, debouncerTimer }); // mutate track
        ctx.setSelectedGpxFile(track);
    }

    // function checkDeleteSelected() {
    //     if (ctxTrack.clear) {
    //         deleteOldLayers();
    //         ctx.setSelectedGpxFile({});
    //     }
    // }

    function saveLocal() {
        if (ctx.localTracks.length > 0) {
            // localTracks exist: do update/append into localStorage
            TracksManager.saveTracks({ ctx, track: ctx.selectedGpxFile });
        } else {
            // localTracks empty: add gpx as 1st track (points and/or wpts are included)
            createLocalTrack(ctxTrack, ctxTrack.points, ctxTrack.wpts);
        }
    }

    function checkZoom() {
        if (ctxTrack.selected && ctxTrack.zoom) {
            // local-track-zoom
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
        let layer = TrackLayerProvider.createLayersByTrackData(track, ctx, map);
        if (layer) {
            if (fitBounds) {
                if (!_.isEmpty(layer.getBounds())) {
                    map.fitBounds(layer.getBounds(), TracksManager.FIT_BOUNDS_OPTIONS);
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
                    let type = ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK;
                    ctx.setCurrentObjectType(type);
                    ctx.setUpdateInfoBlock(true);
                }
            });
            layer.addTo(map);
            localLayers[track.name] = {
                layer: layer,
                points: track.points ? track.points : TracksManager.getEditablePoints(track),
                active: active,
            };
            // setLocalLayers({ ...localLayers }); // redunant setLocalLayers - called soon by parents
        }
    }

    function showSelectedTrackOnMap() {
        let currLayer = localLayers[ctxTrack.name];
        if (currLayer) {
            map.fitBounds(currLayer.layer.getBounds(), TracksManager.FIT_BOUNDS_OPTIONS);
        }
    }

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
        file.layers = TrackLayerProvider.createLayersByTrackData(file, ctx, map);

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
        return layer.options.name === TEMP_LAYER_FLAG;
    }

    function updateLayers(points, wpts, trackLayers, deleteOld) {
        if (trackLayers) {
            let layers = [];
            if (points?.length > 0) {
                TrackLayerProvider.parsePoints({ map, ctx, points, layers, draggable: true });
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

            TracksRoutingCache.addRoutingToCache(prevPoint, newPoint, tempLine, ctx);

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
                            TracksRoutingCache.addRoutingToCache(prevPoint, newPoint, tempLine, ctx);
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
        return newPoint;
    }

    function initNewTrack() {
        ctxTrack = {};
        // ctxTrack.selected = true; // wrong way
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
        ctx.setUpdateInfoBlock(true);

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

        saveCreatedLayers(ctxTrack.layers);

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
                TracksRoutingCache.addRoutingToCache(s.start, s.end, s.tempPolyline, ctx);
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

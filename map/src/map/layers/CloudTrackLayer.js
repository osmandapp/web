import { useContext, useEffect, useState } from 'react';
import AppContext, { isCloudTrack, OBJECT_TYPE_CLOUD_TRACK } from '../../context/AppContext';
import { useMap } from 'react-leaflet';
import TrackLayerProvider, { redrawWptsOnLayer, WPT_SIMPLIFY_THRESHOLD } from '../util/TrackLayerProvider';
import TracksManager, { fitBoundsOptions, getTracksArrBounds } from '../../manager/track/TracksManager';
import { encodeString, useMutator } from '../../util/Utils';
import { INFO_MENU_URL, MAIN_URL_WITH_SLASH, MENU_INFO_OPEN_SIZE, TRACKS_URL } from '../../manager/GlobalManager';
import { clusterMarkers } from '../util/Clusterizer';
import { DEFAULT_ICON_SIZE } from '../markers/MarkerOptions';
import { processMarkers } from './FavoriteLayer';
import useZoomMoveMapHandlers from '../../util/hooks/map/useZoomMoveMapHandlers';
import isEmpty from 'lodash-es/isEmpty';
import { SHARE_FILE_TYPE } from '../../menu/share/shareConstants';
import { addLayerToMap } from '../util/MapManager';
import { TRACKS_KEY, useRecentDataSaver } from '../../util/hooks/menu/useRecentDataSaver';
import { useNavigate } from 'react-router-dom';

function clickHandler({ ctx, file, navigate, recentSaver }) {
    if (file.name === ctx.selectedCloudTrackObj?.name) return;

    file.analysis = TracksManager.prepareAnalysis(file.analysis);
    file.mapObj = true;
    recentSaver(TRACKS_KEY, file);
    ctx.setSelectedGpxFile({ ...file, cloudRedrawWpts: true });
    ctx.setCurrentObjectType(OBJECT_TYPE_CLOUD_TRACK);
    if (ctx.selectedWpt) {
        ctx.setSelectedWpt(null);
    }
    navigate(
        {
            pathname: MAIN_URL_WITH_SLASH + TRACKS_URL + INFO_MENU_URL + encodeURIComponent(encodeString(file.name)),
            hash: window.location.hash,
        },
        { replace: true }
    );
    ctx.setInfoBlockWidth(MENU_INFO_OPEN_SIZE + 'px');
    ctx.setUpdateInfoBlock(true);
}

export function addTrackToMap({ ctx, file, map, fit = false, recentSaver, navigate } = {}) {
    const ID = 'add-cloud-track-to-map';
    let layer = TrackLayerProvider.createLayersByTrackData({ data: file, ctx, map });
    if (!layer) {
        return null;
    }
    layer.on('click', () => clickHandler({ ctx, file, layer, recentSaver, navigate }));

    if (fit || file.zoomToTrack) {
        map.fitBounds(layer.getBounds(), fitBoundsOptions(ctx));
        if (file.wpts?.length < WPT_SIMPLIFY_THRESHOLD) {
            addLayerToMap(map, layer, ID);
            // otherwise, layer is added after zoom
        }
    } else {
        // case for Make track visible
        if (file.wpts?.length >= WPT_SIMPLIFY_THRESHOLD) {
            layer = simplifyLayer({
                layerGroup: layer,
                wpts: file.wpts,
                map,
                ctx,
                data: file,
                useMapBounds: true,
            });
        }
        addLayerToMap(map, layer, ID);
    }
    return layer;
}

function simplifyLayer({ layerGroup, wpts, map, ctx = null, data = null, useMapBounds = false }) {
    const zoom = map.getZoom();
    const center = map.getCenter();
    const mapBounds = map.getBounds();
    const { mainMarkers, secondaryMarkers } = clusterMarkers({
        places: wpts,
        zoom,
        latitude: center.lat,
        iconSize: DEFAULT_ICON_SIZE,
        isFavorites: true,
    });
    const otherLayers = [];
    const mainLayers = [];
    const secondaryLayers = [];
    let wptLayerGroup = [];
    if (ctx) {
        // parse wpts if layers already simplified
        TrackLayerProvider.parseWpt({ points: wpts, layers: wptLayerGroup, ctx, map, data });
    }
    if (wptLayerGroup.length > 0) {
        wptLayerGroup.forEach((layer) => {
            const markerLatLng = layer.getLatLng();
            if (useMapBounds && !mapBounds.contains(markerLatLng)) {
                return;
            }
            processMarkers({
                layer,
                markerLatLng,
                mainMarkers,
                secondaryMarkers,
                mainLayers,
                secondaryLayers,
            });
        });
    }
    layerGroup.eachLayer((layer) => {
        if (layer.options.wpt) {
            if (wptLayerGroup.length === 0) {
                const markerLatLng = layer.getLatLng();
                if (useMapBounds && !mapBounds.contains(markerLatLng)) {
                    return;
                }
                processMarkers({
                    layer,
                    markerLatLng,
                    mainMarkers,
                    secondaryMarkers,
                    mainLayers,
                    secondaryLayers,
                });
            } else {
                map.removeLayer(layer);
            }
        } else {
            otherLayers.push(layer);
        }
    });
    layerGroup.clearLayers();
    mainLayers.forEach((l) => layerGroup.addLayer(l));
    secondaryLayers.forEach((l) => layerGroup.addLayer(l));
    otherLayers.forEach((l) => layerGroup.addLayer(l));

    return layerGroup;
}

function removeLayerFromMap(file, map) {
    map.removeLayer(file.gpx);
    return null;
}

const CloudTrackLayer = () => {
    const ctx = useContext(AppContext);
    const ctxTrack = ctx.selectedGpxFile;

    const [allLayers, mutateAllLayers] = useMutator({});
    const [selectedPointMarker, setSelectedPointMarker] = useState(null);

    const map = useMap();

    const navigate = useNavigate();

    const [zoom, setZoom] = useState(map ? map.getZoom() : 0);
    const [prevZoom, setPrevZoom] = useState(null);
    const [move, setMove] = useState(false);

    useZoomMoveMapHandlers(map, setZoom, setMove);
    const recentSaver = useRecentDataSaver();

    useEffect(() => {
        const needUpdate = move || zoom !== prevZoom;
        let processed = 0;
        if (needUpdate) {
            const newGpxFiles = { ...ctx.gpxFiles } ?? {};
            Object.values(newGpxFiles).forEach((file) => {
                if (file.url && file.gpx) {
                    if (file.wpts.length >= WPT_SIMPLIFY_THRESHOLD) {
                        const layer = simplifyLayer({
                            layerGroup: file.gpx,
                            wpts: file.wpts,
                            map,
                            ctx,
                            data: file,
                            useMapBounds: true,
                        });
                        layer.on('click', () => clickHandler({ ctx, file, navigate, recentSaver }));
                        file.gpx = layer;
                        addLayerToMap(map, file.gpx, 'add-cloud-track-to-map-zoom-move');
                        processed++;
                    }
                }
            });
            setPrevZoom(zoom);
            setMove(false);
            if (processed > 0) {
                ctx.setGpxFiles(newGpxFiles);
            }
        }
    }, [zoom, move]);

    function cleanupZombieLayers({ id, name }) {
        for (let x in allLayers) {
            if (x !== id && allLayers[x].name === name) {
                map.removeLayer(allLayers[x].layer);
                mutateAllLayers((o) => delete o[x]);
            }
        }
    }

    function registerCleanupFileLayer(file) {
        const name = file.name;
        const layer = file.gpx;
        const id = file.gpx._leaflet_id;
        cleanupZombieLayers({ id, name });
        mutateAllLayers((o) => (o[id] = { name, layer }));
    }

    function unregisterCleanupFileLayer(file) {
        const name = file.name;
        const id = file.gpx._leaflet_id;
        cleanupZombieLayers({ id, name });
        mutateAllLayers((o) => delete o[id]);
    }

    // update all click handlers with fresh context
    useEffect(() => {
        for (const l in ctx.gpxFiles) {
            const file = ctx.gpxFiles[l];
            if (file?.url && file.gpx && map.hasLayer(file.gpx)) {
                file.gpx.off('click');
                file.gpx.on('click', () => clickHandler({ ctx, file, navigate, recentSaver }));
            }
        }
    }, [ctx.selectedGpxFile?.name, ctx.infoBlockWidth]);

    // control zoom-fit for cloud tracks
    useEffect(() => {
        if (ctxTrack?.gpx && isCloudTrack(ctx)) {
            if (ctxTrack.zoom) {
                map.fitBounds(ctxTrack.gpx.getBounds(), fitBoundsOptions(ctx));
                ctx.setSelectedGpxFile((o) => ({ ...o, zoom: false }));
            } else if (ctxTrack.cloudRedrawWpts) {
                // skip processing if layer is removed
                if (ctxTrack.gpx && map.hasLayer(ctxTrack.gpx)) {
                    redrawWptsOnLayer({ layer: ctxTrack.gpx });
                    ctx.setSelectedGpxFile((o) => ({ ...o, cloudRedrawWpts: false }));
                }
            } else if (ctxTrack.showPoint) {
                TracksManager.showSelectedPointOnMap(ctxTrack, map, selectedPointMarker, setSelectedPointMarker);
                ctx.setSelectedGpxFile((o) => ({ ...o, showPoint: false }));
            }
        }
    }, [ctxTrack]);

    // after Edit, reload Cloud Tracks, whose Layers were killed by UpdateLayers()
    useEffect(() => {
        if (ctx.createTrack?.enable === false) {
            let restored = 0;
            const newGpxFiles = { ...ctx.gpxFiles } ?? {};
            for (const l in newGpxFiles) {
                if (newGpxFiles[l].gpx && map.hasLayer(newGpxFiles[l].gpx) === false) {
                    restored++;
                    newGpxFiles[l].gpx = addTrackToMap({ ctx, file: newGpxFiles[l], map, fit: false, recentSaver });
                    registerCleanupFileLayer(newGpxFiles[l]);

                    // update setSelectedGpxFile cloud layer
                    if (ctxTrack.name === newGpxFiles[l].name) {
                        ctx.setSelectedGpxFile((o) => ({ ...o, gpx: newGpxFiles[l].gpx }));
                    }
                }
            }
            if (restored > 0) {
                ctx.setGpxFiles(newGpxFiles); // finally
            }
        }
    }, [ctx.createTrack?.enable]); // think about dep on ctx.gpxFiles

    // add or remove cloud tracks to/from map
    const processFiles = (files, updateCtxFiles) => {
        let processed = 0;
        const newFiles = { ...files };

        Object.values(newFiles).forEach((file) => {
            if (file.url && !file.gpx && (file.showOnMap || file.zoomToTrack)) {
                processed++;
                file.gpx = addTrackToMap({ ctx, file, map, recentSaver, navigate });
                if (file.name === ctxTrack.name) {
                    ctx.setSelectedGpxFile((o) => ({ ...o, gpx: file.gpx, cloudRedrawWpts: true }));
                }
                registerCleanupFileLayer(file);
            } else if (file.url && file.zoomToTrack && file.gpx) {
                map.fitBounds(file.gpx.getBounds(), fitBoundsOptions(ctx));
                file.zoomToTrack = false;
            } else if (!file.url && file.gpx) {
                processed++;
                unregisterCleanupFileLayer(file);
                file.gpx = removeLayerFromMap(file, map);
                file.showOnMap = false;
            } else if (file.delete) {
                processed++;
                delete newFiles[file.name];
            }
        });

        if (processed > 0) {
            updateCtxFiles(newFiles);
        }
    };

    // process own cloud tracks
    useEffect(() => {
        if (ctx.gpxFiles) {
            processFiles(ctx.gpxFiles, ctx.setGpxFiles);
        }
    }, [ctx.gpxFiles]);

    // process shared with me cloud tracks
    useEffect(() => {
        if (ctx.shareWithMeFiles?.tracks) {
            processFiles(ctx.shareWithMeFiles.tracks, (updatedTracks) => {
                ctx.setShareWithMeFiles({
                    ...ctx.shareWithMeFiles,
                    tracks: updatedTracks,
                });
            });
        }
    }, [ctx.shareWithMeFiles?.tracks]);

    useEffect(() => {
        if (
            ctx.fitBoundsShareTracks &&
            ctx.fitBoundsShareTracks.type === SHARE_FILE_TYPE &&
            !isEmpty(ctx.shareWithMeFiles?.tracks)
        ) {
            const bounds = getTracksArrBounds(Object.values(ctx.shareWithMeFiles.tracks));
            if (bounds.length > 0) {
                map.fitBounds(bounds, fitBoundsOptions(ctx));
            }
            ctx.setFitBoundsShareTracks(null);
        }
    }, [ctx.fitBoundsShareTracks]);
};

export default CloudTrackLayer;

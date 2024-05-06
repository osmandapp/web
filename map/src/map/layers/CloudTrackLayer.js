import { useContext, useEffect, useState } from 'react';
import AppContext, { isCloudTrack, OBJECT_TYPE_CLOUD_TRACK } from '../../context/AppContext';
import { useMap } from 'react-leaflet';
import TrackLayerProvider, { redrawWptsOnLayer } from '../util/TrackLayerProvider';
import TracksManager, { fitBoundsOptions } from '../../manager/track/TracksManager';
import { useMutator } from '../../util/Utils';
import { MENU_INFO_CLOSE_SIZE } from '../../manager/GlobalManager';

function clickHandler({ ctx, file, layer }) {
    if (file.name !== ctx.selectedGpxFile.name || ctx.infoBlockWidth === MENU_INFO_CLOSE_SIZE) {
        file.analysis = TracksManager.prepareAnalysis(file.analysis);
        ctx.setSelectedGpxFile({ ...file, cloudRedrawWpts: true });
        ctx.setCurrentObjectType(OBJECT_TYPE_CLOUD_TRACK);
        if (ctx.selectedWpt) {
            ctx.setSelectedWpt(null);
        }
        ctx.setUpdateInfoBlock(true);
        layer.off('click'); // once
    }
}

function addTrackToMap({ ctx, file, map, fit = true } = {}) {
    const layer = TrackLayerProvider.createLayersByTrackData({ data: file, ctx, map });

    layer.on('click', () => clickHandler({ ctx, file, layer }));

    if (fit) {
        map.fitBounds(layer.getBounds(), fitBoundsOptions(ctx));
    }
    layer.addTo(map);
    return layer;
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
            if (file && file.url && file.gpx && map.hasLayer(file.gpx)) {
                file.gpx.off('click');
                file.gpx.on('click', () => clickHandler({ ctx, file, layer: file.gpx }));
            }
        }
    }, [ctx.selectedGpxFile.name, ctx.infoBlockWidth]);

    // control zoom-fit for cloud tracks
    useEffect(() => {
        if (ctxTrack && ctxTrack.gpx && isCloudTrack(ctx)) {
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
                    newGpxFiles[l].gpx = addTrackToMap({ ctx, file: newGpxFiles[l], map, fit: false });
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

    useEffect(() => {
        let processed = 0;
        const newGpxFiles = { ...ctx.gpxFiles } ?? {};
        Object.values(newGpxFiles).forEach((file) => {
            if (file.url && !file.gpx && file.showOnMap) {
                processed++;
                file.gpx = addTrackToMap({ ctx, file, map });
                if (file.name === ctxTrack.name) {
                    ctx.setSelectedGpxFile((o) => ({ ...o, gpx: file.gpx, cloudRedrawWpts: true }));
                }
                registerCleanupFileLayer(file);
            } else if (!file.url && file.gpx) {
                processed++;
                unregisterCleanupFileLayer(file);
                file.gpx = removeLayerFromMap(file, map);
                file.showOnMap = false;
            } else if (file.delete) {
                processed++;
                delete newGpxFiles[file.name];
            }
        });
        if (processed > 0) {
            ctx.setGpxFiles(newGpxFiles); // finally
        }
    }, [ctx.gpxFiles]);
};

export default CloudTrackLayer;

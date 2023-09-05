import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { useMap } from 'react-leaflet';
import TrackLayerProvider from '../TrackLayerProvider';
import TracksManager from '../../context/TracksManager';
import { useMutator } from '../../util/Utils';

function clickHandler({ ctx, file, layer }) {
    if (file.name !== ctx.selectedGpxFile.name || ctx.infoBlockWidth === '0px') {
        file.analysis = TracksManager.prepareAnalysis(file.analysis);
        ctx.setSelectedGpxFile(Object.assign({}, file));
        const type = ctx.OBJECT_TYPE_CLOUD_TRACK;
        ctx.setCurrentObjectType(type);
        ctx.setUpdateInfoBlock(true);
        layer.off('click'); // once
    }
}

function addTrackToMap({ ctx, file, map, fit = true } = {}) {
    const layer = TrackLayerProvider.createLayersByTrackData(file, ctx, map);

    layer.on('click', () => clickHandler({ ctx, file, layer }));

    if (fit) {
        map.fitBounds(layer.getBounds(), TracksManager.FIT_BOUNDS_OPTIONS);
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
        if (ctxTrack && ctxTrack.zoom && ctxTrack.gpx && ctx.currentObjectType === ctx.OBJECT_TYPE_CLOUD_TRACK) {
            map.fitBounds(ctxTrack.gpx.getBounds(), TracksManager.FIT_BOUNDS_OPTIONS);
        } else if (ctxTrack.showPoint) {
            TracksManager.showSelectedPointOnMap(ctxTrack, map, selectedPointMarker, setSelectedPointMarker);
        }
    }, [ctxTrack]);

    // after Edit, reload Cloud Tracks, whose Layers were killed by UpdateLayers()
    useEffect(() => {
        if (ctx.createTrack?.enable === false) {
            let restored = 0;
            for (const l in ctx.gpxFiles) {
                if (ctx.gpxFiles[l].gpx && map.hasLayer(ctx.gpxFiles[l].gpx) === false) {
                    restored++;
                    ctx.gpxFiles[l].gpx = addTrackToMap({ ctx, file: ctx.gpxFiles[l], map, fit: false });
                }
            }
            if (restored > 0) {
                ctx.setGpxFiles({ ...ctx.gpxFiles });
            }
        }
    }, [ctx.createTrack?.enable]); // think about dep on ctx.gpxFiles

    useEffect(() => {
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

        let processed = 0;
        const newGpxFiles = { ...ctx.gpxFiles } ?? {};
        Object.values(newGpxFiles).forEach((file) => {
            if (file.url && !file.gpx) {
                processed++;
                file.gpx = addTrackToMap({ ctx, file, map });
                if (file.name === ctxTrack.name) {
                    const newGpxFiles = Object.assign({}, ctxTrack);
                    newGpxFiles.gpx = file.gpx;
                    ctx.setSelectedGpxFile(newGpxFiles);
                }
                registerCleanupFileLayer(file);
            } else if (!file.url && file.gpx) {
                processed++;
                unregisterCleanupFileLayer(file);
                file.gpx = removeLayerFromMap(file, map);
            } else if (file.delete) {
                processed++;
                delete newGpxFiles[file.name];
            }
        });
        if (processed > 0) {
            ctx.gpxFiles = newGpxFiles;
            ctx.setGpxFiles(newGpxFiles); // finally
        }
    }, [ctx.gpxFiles]);
};

export default CloudTrackLayer;

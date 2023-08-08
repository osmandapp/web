import { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import { useMap } from 'react-leaflet';
import TrackLayerProvider from '../TrackLayerProvider';
import TracksManager from '../../context/TracksManager';
import { useMutator } from '../../util/Utils';

function addTrackToMap({ ctx, file, map, fit = true } = {}) {
    const layer = TrackLayerProvider.createLayersByTrackData(file);

    layer.on('click', () => {
        file.analysis = TracksManager.prepareAnalysis(file.analysis);
        ctx.setSelectedGpxFile(Object.assign({}, file));
        const type = ctx.OBJECT_TYPE_CLOUD_TRACK;
        ctx.setCurrentObjectType(type);
        ctx.setUpdateContextMenu(true);
    });
    // file.gpx = layer; // better modify state by parent (closer to setState)

    if (fit) {
        map.fitBounds(layer.getBounds(), TracksManager.FIT_BOUNDS_OPTIONS);
    }

    layer.addTo(map);

    return layer;
    // ctx.setGpxFiles(ctx.gpxFiles); // not here, better call once, after parent's full cycle
    // ctx.setSelectedGpxFile(Object.assign({}, file)); // not now, because this is view-layer init
}

function removeLayerFromMap(file, map) {
    map.removeLayer(file.gpx);
    return null;
}

const TrackLayer = () => {
    const ctx = useContext(AppContext);
    const ctxTrack = ctx.selectedGpxFile;

    const [allLayers, mutateAllLayers] = useMutator({});

    const map = useMap();

    // control zoom-fit for cloud tracks
    useEffect(() => {
        if (ctxTrack && ctxTrack.zoom && ctxTrack.gpx && ctx.currentObjectType === ctx.OBJECT_TYPE_CLOUD_TRACK) {
            map.fitBounds(ctxTrack.gpx.getBounds(), TracksManager.FIT_BOUNDS_OPTIONS);
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
                registerCleanupFileLayer(file);
            } else if (!file.url && file.gpx) {
                processed++;
                unregisterCleanupFileLayer(file);
                file.gpx = removeLayerFromMap(file, map);
            }
        });
        if (processed > 0) {
            ctx.gpxFiles = newGpxFiles;
            ctx.setGpxFiles(newGpxFiles); // finally
        }
    }, [ctx.gpxFiles]);
};

export default TrackLayer;

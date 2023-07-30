import { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import { useMap } from 'react-leaflet';
import TrackLayerProvider from '../TrackLayerProvider';
import TracksManager from '../../context/TracksManager';

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
    file.gpx = null;
}

const TrackLayer = () => {
    const ctx = useContext(AppContext);
    const ctxTrack = ctx.selectedGpxFile;

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
        let processed = 0;
        const filesMap = ctx.gpxFiles ?? {};
        Object.values(filesMap).forEach((file) => {
            if (file.url && !file.gpx) {
                processed++;
                file.gpx = addTrackToMap({ ctx, file, map });
            } else if (!file.url && file.gpx) {
                processed++;
                removeLayerFromMap(file, map);
            }
        });
        if (processed > 0) {
            ctx.setGpxFiles({ ...ctx.gpxFiles }); // finally
        }
    }, [ctx.gpxFiles]);
};

export default TrackLayer;

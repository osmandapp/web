import {useContext, useEffect} from 'react';
import AppContext from "../../context/AppContext";
import {useMap} from "react-leaflet";
import TrackLayerProvider from "../TrackLayerProvider";
import TracksManager from "../../context/TracksManager";


async function addTrackToMap(ctx, file, map) {
    let layer = TrackLayerProvider.createLayersByTrackData(file);
    layer.on('click', (e) => {
        file.analysis = TracksManager.prepareAnalysis(file.analysis);
        ctx.setSelectedGpxFile(Object.assign({}, file));
        let type = ctx.OBJECT_TYPE_CLOUD_TRACK;
        ctx.setCurrentObjectType(type);
        ctx.setUpdateContextMenu(true);
    });
    file.gpx = layer;
    map.fitBounds(layer.getBounds());
    layer.addTo(map);
    ctx.setGpxFiles(ctx.gpxFiles);
    ctx.setSelectedGpxFile(Object.assign({}, file));
}

function removeLayerFromMap(file, map) {
    map.removeLayer(file.gpx);
    file.gpx = null;
}

const TrackLayer = () => {
    const ctx = useContext(AppContext);
    const map = useMap();

    useEffect(() => {
        let filesMap = ctx.gpxFiles ? ctx.gpxFiles : {};
        Object.values(filesMap).forEach((file) => {
            if (file.url && !file.gpx) {
                addTrackToMap(ctx, file, map);
            } else if (!file.url && file.gpx) {
                removeLayerFromMap(file, map);
            }
        });
    }, [ctx.gpxFiles, ctx.setGpxFiles]);
};

export default TrackLayer;
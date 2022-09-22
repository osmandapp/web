import React, {useContext, useEffect} from 'react';
import AppContext from "../../context/AppContext";
import {useMap} from "react-leaflet";
import LayerCreator from "../LayerCreator";


async function addTrackToMap(ctx, file, map) {
    console.log(file)
    let layer = LayerCreator.createLayersByTrackData(file);
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
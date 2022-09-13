import React, {useContext, useEffect} from 'react';
import L from "leaflet";
import AppContext from "../../context/AppContext";
import Utils from "../../util/Utils";
import {useMap} from "react-leaflet";
import markerOptions from "../markers/MarkerOptions";


async function addTrackToMap(ctx, file, map) {
    let trackData = await Utils.getFileData(file);

    file.gpx = new L.GPX(trackData, {
        async: true,
        marker_options: markerOptions
    }).on('loaded', function (e) {
        ctx.setSelectedGpxFile(Object.assign({}, file));
        map.fitBounds(e.target.getBounds());
    }).addTo(map);
    file.points = [];
    ctx.setGpxFiles(ctx.gpxFiles);
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
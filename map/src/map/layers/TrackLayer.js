import React, {useContext, useEffect} from 'react';
import L from "leaflet";
import MarkerIcon from "../MarkerIcon";
import AppContext from "../../context/AppContext";
import Utils from "../../util/Utils";
import {useMap} from "react-leaflet";

const markerOptions = {
    startIcon: MarkerIcon({bg: 'blue'}),
    endIcon: MarkerIcon({bg: 'red'}),
    wptIcons: {
        '': MarkerIcon({bg: 'yellow'}),
    }
};

async function addTrackToMap(ctx, file, map) {
    let trackData = await Utils.getFileData(file);

    file.gpx = new L.GPX(trackData, {
        async: true,
        marker_options: markerOptions
    }).on('loaded', function (e) {
        let trackPoints = Object.values(e.layers._layers)[0]._latlngs;
        trackPoints.forEach((point) => {
            let pointObj = {lat: point.lat, lng: point.lng};
            file.points.push(pointObj);
        })
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
        if (ctx.selectedGpxFile?.summary) {
            map.fitBounds([
                [ctx.selectedGpxFile.summary.top, ctx.selectedGpxFile.summary.right],
                [ctx.selectedGpxFile.summary.bottom, ctx.selectedGpxFile.summary.left]
            ])
        }
    }, [ctx.selectedGpxFile, ctx.setSelectedGpxFile]);

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
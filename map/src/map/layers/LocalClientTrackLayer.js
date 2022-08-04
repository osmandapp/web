import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../context/AppContext";
import {useMap} from "react-leaflet";
import L from "leaflet";
import MarkerIcon from "../MarkerIcon";


export default function LocalClientTrackLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [layers, setLayers] = useState([]);
    const markerOptions = {
        startIcon: MarkerIcon({bg: 'blue'}),
        endIcon: MarkerIcon({bg: 'red'}),
        wptIcons: {
            '': MarkerIcon({bg: 'yellow'}),
        }
    };
    
    function addTrackToMap(track) {
        let layer = new L.GPX(track.gpx, {
            async: true,
            marker_options: markerOptions
        }).on('loaded', function (e) {
            map.fitBounds(e.target.getBounds());
        }).addTo(map);
        layers.push({name: track.name, layer: layer, active: true})
    }

    useEffect(() => {
        if (ctx.selectedGpxFile?.selected) {
            let currLayer = layers.find(l => l.name === ctx.selectedGpxFile.name);
            if (currLayer) {
                map.fitBounds(currLayer.layer._info.bounds);
            }
        }
    }, [ctx.selectedGpxFile, ctx.setSelectedGpxFile]);

    useEffect(() => {
        layers.forEach(l => l.active = false);
        Object.values(ctx.localClientsTracks).forEach((track) => {
            let currLayer = layers.find(l => l.name === track.name);
            if (track.selected && !currLayer) {
                addTrackToMap(track);
            } else if (currLayer) {
                currLayer.active = track.selected;
            }
        });

        let deletedLayers = new Set();
        layers.forEach(l => {
            if (!l.active) {
                deletedLayers.add(l)
                map.removeLayer(l.layer);
            }
        });

        setLayers([...layers.filter(x => !deletedLayers.has(x))]);

    }, [ctx.localClientsTracks, ctx.setLocalClientsTracks]);
}
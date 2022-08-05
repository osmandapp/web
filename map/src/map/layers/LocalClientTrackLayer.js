import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../context/AppContext";
import {useMap} from "react-leaflet";
import L from "leaflet";
import MarkerIcon from "../MarkerIcon";


export default function LocalClientTrackLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [layers, setLayers] = useState({});
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

        layers[track.name] = {layer: layer, active: true}
    }

    useEffect(() => {
        if (ctx.selectedGpxFile?.selected) {
            let currLayer = layers[ctx.selectedGpxFile.name];
            if (currLayer) {
                map.fitBounds(currLayer.layer._info.bounds);
            }
        }
    }, [ctx.selectedGpxFile, ctx.setSelectedGpxFile]);

    useEffect(() => {
        for (let l in layers) {
            layers[l].active = false;
        }
        Object.values(ctx.localClientsTracks).forEach((track) => {
            let currLayer = layers[track.name]
            if (track.selected && !currLayer) {
                addTrackToMap(track);
            } else if (currLayer) {
                currLayer.active = track.selected;
            }
        });

        for (let l in layers) {
            if (!layers[l].active) {
                map.removeLayer(layers[l].layer);
                delete layers[l];
            }
        }

        setLayers({...layers});

    }, [ctx.localClientsTracks, ctx.setLocalClientsTracks]);
}
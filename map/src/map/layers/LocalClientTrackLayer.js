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

    function removeLayerFromMap(layer) {
        map.removeLayer(layer.layer);
        layers.splice(layers.indexOf(layer), 1);
        setLayers([...layers]);
    }

    function clearUnusedLayers() {
        let listForDeleted = [];
        layers.forEach(l => {
            if (ctx.localClientsTracks.find(t => t.name === l.name) === undefined) {
                listForDeleted.push(l);
            }
        })
        listForDeleted.forEach(l => removeLayerFromMap(l));
    }

    function addTrackToMap(track) {
        let layer = new L.GPX(track.gpx, {
            async: true,
            marker_options: markerOptions
        }).on('loaded', function (e) {
            map.fitBounds(e.target.getBounds());
        }).addTo(map);
        setLayers([...layers, {name: track.name, layer: layer}])
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
        if (layers.length > ctx.localClientsTracks.length) {
            clearUnusedLayers();
        } else {
            Object.values(ctx.localClientsTracks).forEach((track) => {
                let currLayer = layers.find(l => l.name === track.name);
                if (track.selected && !currLayer) {
                    addTrackToMap(track);
                } else if (!track.selected && currLayer) {
                    removeLayerFromMap(currLayer);
                }
            });
        }

    }, [ctx.localClientsTracks, ctx.setLocalClientsTracks]);
}
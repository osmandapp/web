import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../context/AppContext";
import {useMap} from "react-leaflet";
import L from "leaflet";
import TrackLayerProvider from "../TrackLayerProvider";
import TracksManager from "../../context/TracksManager";
import MarkerOptions from "../markers/MarkerOptions";


export default function LocalClientTrackLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [layers, setLayers] = useState({});
    const [selectedPointMarker, setSelectedPointMarker] = useState(null);

    function addTrackToMap(track, fitBounds, active) {
        let layer = TrackLayerProvider.createLayersByTrackData(track);
        if (fitBounds) {
            map.fitBounds(layer.getBounds());
        }
        layer.addTo(map);
        layers[track.name] = {layer: layer, points: TracksManager.getEditablePoints(track), active: active};
    }

    function createPointMarkerOnMap() {
        return new L.marker({
            lng: ctx.selectedGpxFile.showPoint.lng,
            lat: ctx.selectedGpxFile.showPoint.lat
        }, {
            icon: MarkerOptions.options.pointerIcons
        }).addTo(map);
    }

    function showSelectedTrackOnMap() {
        let currLayer = layers[ctx.selectedGpxFile.name];
        if (currLayer) {
            map.fitBounds(currLayer.layer.getBounds());
        }
    }

    function showSelectedPointOnMap() {
        if (selectedPointMarker) {
            map.removeLayer(selectedPointMarker.marker);
        }
        let marker = createPointMarkerOnMap();
        setSelectedPointMarker({marker: marker, trackName: ctx.selectedGpxFile.name});
    }

    useEffect(() => {
        if (ctx.selectedGpxFile?.selected) {
            if (ctx.selectedGpxFile.showPoint) {
                showSelectedPointOnMap();
            } else {
                showSelectedTrackOnMap();
            }
        }
    }, [ctx.selectedGpxFile, ctx.setSelectedGpxFile]);

    function updateTrackOnMap(track, active) {
        map.removeLayer(layers[track.name].layer);
        delete layers[track.name];
        addTrackToMap(track, false, active);
    }

    useEffect(() => {
        for (let l in layers) {
            layers[l].active = false;
        }
        Object.values(ctx.localTracks).forEach((track) => {
            let currLayer = layers[track.name]
            if (track.selected && !currLayer) {
                addTrackToMap(track, true, true);
            } else if (currLayer) {
                currLayer.active = track.selected;
                if (track.updated) {
                    updateTrackOnMap(track, currLayer.active);
                }
            }
        });

        for (let l in layers) {
            if (!layers[l].active) {
                if (selectedPointMarker && selectedPointMarker.trackName === l) {
                    map.removeLayer(selectedPointMarker.marker);
                }
                map.removeLayer(layers[l].layer);
                delete layers[l];
            }
        }

        setLayers({...layers});

    }, [ctx.localTracks, ctx.setLocalTracks]);
}
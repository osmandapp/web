import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../context/AppContext";
import {useMap} from "react-leaflet";
import L from "leaflet";
import LayerCreator from "../LayerCreator";
import markerOptions from "../markers/MarkerOptions";
import TracksManager from "../../context/TracksManager";


export default function LocalClientTrackLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [layers, setLayers] = useState({});
    const [selectedPointMarker, setSelectedPointMarker] = useState(null);

    function addTrackToMap(track, fitBounds) {
        let layer = LayerCreator.createLayersByTrackData(track);
        if (fitBounds) {
            map.fitBounds(layer.getBounds());
        }
        layer.addTo(map);
        layers[track.name] = {layer: layer, track: Object.assign([], track), active: true};
    }

    function createPointMarkerOnMap() {
        return new L.marker({
            lng: ctx.selectedGpxFile.showPoint.lng,
            lat: ctx.selectedGpxFile.showPoint.lat
        }, {
            icon: markerOptions.pointerIcons
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

    function updateTrackOnMap(track) {
        map.removeLayer(layers[track.name].layer);
        delete layers[track.name];
        addTrackToMap(track, false);
    }

    function orderPointsWasChanged(tracksP, layersP) {
        for (let tp in tracksP) {
            for (let lp in layersP) {
                if (tp === lp && (tracksP[tp].lat !== layersP[lp].lat || tracksP[tp].lng !== layersP[lp].lng)) {
                    return true;
                }
            }
        }
        return false;
    }

    useEffect(() => {
        for (let l in layers) {
            layers[l].active = false;
        }
        Object.values(ctx.localTracks).forEach((track) => {
            let currLayer = layers[track.name]
            if (track.selected && !currLayer) {
                addTrackToMap(track, true);
            } else if (currLayer) {
                currLayer.active = track.selected;
                if (TracksManager.getActivePoints(track).length !== TracksManager.getActivePoints(currLayer.track).length) {
                    updateTrackOnMap(track);
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
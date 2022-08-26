import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../context/AppContext";
import {useMap} from "react-leaflet";
import L from "leaflet";
import MarkerIcon from "../MarkerIcon";
import Utils from "../../util/Utils";


export default function LocalClientTrackLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [layers, setLayers] = useState({});
    const [selectedPointMarker, setSelectedPointMarker] = useState(null);

    const markerOptions = {
        startIcon: MarkerIcon({bg: 'blue'}),
        endIcon: MarkerIcon({bg: 'red'}),
        wptIcons: {
            '': MarkerIcon({bg: 'yellow'}),
        }
    };

    function addTrackToMap(track, fitBounds) {
        let layer = new L.GPX(track.gpx, {
            async: true,
            marker_options: markerOptions
        }).on('loaded', function (e) {
            if (fitBounds) {
                map.fitBounds(e.target.getBounds());
            }
            if (layer._info.meta) {
                track.metadata = layer._info.meta;
            }

            if (layer._info.trk.length > 0) {
                track.trk = layer._info.trk;
            }

            if (layer._info.rte.length > 0) {
                track.rte = layer._info.rte;
            }

            if (layer._info.wpt) {
                track.wpt = layer._info.wpt;
            }

            if (layer._info.points.length > 0) {
                track.points = Utils.getPointsDist(layer._info.points);
            }
            ctx.setSelectedGpxFile(Object.assign({}, track));
        }).addTo(map);

        layers[track.name] = {layer: layer, points: Object.assign([], track.points), active: true};
    }

    function createPointMarkerOnMap() {
        return new L.marker({
            lng: ctx.selectedGpxFile.showPoint.lng,
            lat: ctx.selectedGpxFile.showPoint.lat
        }, {
            icon: MarkerIcon({bg: 'yellow'})
        }).addTo(map);
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
            }
        }
    }, [ctx.selectedGpxFile, ctx.setSelectedGpxFile]);

    function updateTrackOnMap(track) {
        map.removeLayer(layers[track.name].layer);
        delete layers[track.name];
        addTrackToMap(track, false)
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
        Object.values(ctx.localClientsTracks).forEach((track) => {
            let currLayer = layers[track.name]
            if (track.selected && !currLayer) {
                addTrackToMap(track, true);
            } else if (currLayer) {
                currLayer.active = track.selected;
                if (track.points.length !== currLayer.points.length || orderPointsWasChanged(track.points, currLayer.points)) {
                    updateTrackOnMap(track)
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

    }, [ctx.localClientsTracks, ctx.setLocalClientsTracks]);
}
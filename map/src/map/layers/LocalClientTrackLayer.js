import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../context/AppContext";
import {useMap} from "react-leaflet";
import L from "leaflet";
import MarkerIcon from "../MarkerIcon";


export default function LocalClientTrackLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [deletedEditTrack, setDeletedEditTrack] = useState(null);

    const markerOptions = {
        startIcon: MarkerIcon({bg: 'blue'}),
        endIcon: MarkerIcon({bg: 'red'}),
        wptIcons: {
            '': MarkerIcon({bg: 'yellow'}),
        }
    };

    function removeLayerFromMap(track) {
        map.removeLayer(track.layer);
        track.layer = null;
        ctx.setLocalClientsTracks(...[ctx.localClientsTracks]);
    }

    function addTrackToMap(track) {
        track.layer = new L.GPX(track.gpx, {
            async: true,
            marker_options: markerOptions
        }).on('loaded', function (e) {
            map.fitBounds(e.target.getBounds());
        }).addTo(map);

        ctx.setLocalClientsTracks(...[ctx.localClientsTracks]);
    }

    useEffect(() => {
        let trackMap = ctx.localClientsTracks ? ctx.localClientsTracks : {};
        Object.values(trackMap).forEach((track) => {
            if (track.selected && !track.layer) {
                addTrackToMap(track);
            } else if (!track.selected && track.layer) {
                removeLayerFromMap(track);
            }
        });
    }, [ctx.localClientsTracks, ctx.setLocalClientsTracks]);

    useEffect(() => {
        if (deletedEditTrack) {
            ctx.localClientsTracks.splice(ctx.localClientsTracks.indexOf(deletedEditTrack), 1);
            ctx.setLocalClientsTracks([...ctx.localClientsTracks]);
        }

    }, [deletedEditTrack, setDeletedEditTrack]);
}
import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../context/AppContext";
import {useMap} from "react-leaflet";
import L from "leaflet";
import MarkerIcon from "../MarkerIcon";


export default function CreatedTrackLayer() {
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
        ctx.setCreatedTracks(...[ctx.createdTracks]);
    }

    function addTrackToMap(track) {
        track.layer = new L.GPX(track.gpx, {
            async: true,
            marker_options: markerOptions
        }).on('loaded', function (e) {
            map.fitBounds(e.target.getBounds());
        }).addTo(map);

        ctx.setCreatedTracks(...[ctx.createdTracks]);
    }


    useEffect(() => {
        let trackMap = ctx.createdTracks ? ctx.createdTracks : {};
        Object.values(trackMap).forEach((track) => {
            if (track.selected && !track.layer) {
                addTrackToMap(track);
            } else if (!track.selected && track.layer) {
                removeLayerFromMap(track);
            }
        });
    }, [ctx.createdTracks, ctx.setCreatedTracks]);


    useEffect(() => {
        if (deletedEditTrack) {
            ctx.createdTracks.splice(ctx.createdTracks.indexOf(deletedEditTrack), 1);
            ctx.setCreatedTracks([...ctx.createdTracks]);
        }

    }, [deletedEditTrack, setDeletedEditTrack]);
}
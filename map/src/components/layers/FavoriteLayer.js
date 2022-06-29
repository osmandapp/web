import React, {useContext, useEffect} from 'react';
import AppContext from "../../context/AppContext";
import L from "leaflet";
import '../../util/gpx.js';
import Utils from "../../util/Utils";
import {useMap} from "react-leaflet";

async function addFavoritesToMap(ctx, file, map) {
    let trackData = await Utils.getFileData(file);
    file.gpx = new L.GPX(trackData, {
        async: true,
        group: ctx.favorites.groups
    }).on('loaded', function (e) {
        map.fitBounds(e.target.getBounds());
    }).on('error', function (e) {
        ctx.favorites.groupsUnique = e.target._info.favouritesGroup.filter((v, i, a) => a.indexOf(v) === i);
        if (!ctx.favorites.readFirst) {
            ctx.favorites.readFirst = true;
            ctx.setFavorites({...ctx.favorites});
        }
    }).addTo(map);
}

function removeLayerFromMap(file, map) {
    if (file && file.gpx && map.hasLayer(file.gpx)) {
        map.removeLayer(file.gpx);
        file.gpx = null;
    }
}

const FavoriteLayer = () => {
    const ctx = useContext(AppContext);
    const map = useMap();
    useEffect(() => {
        let file = ctx.favorites.file;
        if (file && file.url) {
            removeLayerFromMap(file, map);
            addFavoritesToMap(ctx, file, map);
        }
    }, [ctx.favorites, ctx.setFavorites]);
};

export default FavoriteLayer;
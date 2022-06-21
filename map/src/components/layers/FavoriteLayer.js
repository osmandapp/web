import React, {useContext, useEffect} from 'react';
import AppContext from "../../context/AppContext";
import L from "leaflet";
import '../../util/gpx.js';
import Utils from "../../util/Utils";
import {useMap} from "react-leaflet";
import Favorites from "../drawer/Favorites";

async function addFavoritesToMap(ctx, file, map) {
    let trackData = await Utils.getFileData(file);

    file.gpx = new L.GPX(trackData, {
        async: true,
        group: ctx.favoritesGroups
    }).on('loaded', function (e) {
        map.fitBounds(e.target.getBounds());
    }).on('error', function (e) {
        let uniqueGroups = e.target._info.favouritesGroup.filter((v, i, a) => a.indexOf(v) === i);
        ctx.favoritesGroupsCache.push(uniqueGroups);
    }).addTo(map);

    ctx.setFavoriteFile(ctx.favoriteFile);
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
        let file = Object.keys(ctx.favoriteFile).length !== 0 ? ctx.favoriteFile : null;
        if (file && file.url) {
            removeLayerFromMap(file, map);
            addFavoritesToMap(ctx, file, map);
        }
    }, [ctx.favoriteFile, ctx.setFavoriteFile, ctx.setFavoritesGroups]);

};

export default FavoriteLayer;
import React, {useContext, useEffect} from 'react';
import AppContext from "../../context/AppContext";
import L from "leaflet";
import '../../util/gpx.js';
import Utils from "../../util/Utils";
import {useMap} from "react-leaflet";

const FavoriteLayer = () => {
    const ctx = useContext(AppContext);
    const map = useMap();

    useEffect(() => {
        removeFavoriteFromMap(ctx.favorites.visibleMarker.prev);
        addFavoriteToMap(ctx.favorites.visibleMarker.current);

        let file = ctx.favorites.file;
        if (file && file.url) {
            removeLayerFromMap(file);
            addFavoritesToMap(file).then();
        }
    }, [ctx.favorites, ctx.setFavorites]);

    async function addFavoritesToMap(file) {
        let trackData = await Utils.getFileData(file);
        file.gpx = new L.GPX(trackData, {
            async: true,
            group: ctx.favorites.groups
        }).on('error', function (e) {
            ctx.favorites.groupsUnique = e.target._info.favouritesGroup;
            if (!ctx.favorites.readFirst) {
                ctx.favorites.readFirst = true;
                ctx.setFavorites({...ctx.favorites});
            }
        }).addTo(map);
    }

    function removeLayerFromMap(file) {
        if (file && file.gpx && map.hasLayer(file.gpx)) {
            map.removeLayer(file.gpx);
            file.gpx = null;
        }
    }

    function addFavoriteToMap(marker) {
        if (marker) {
            marker.addTo(map);
            map.flyTo([marker._latlng.lat, marker._latlng.lng], 17)
        }
    }

    function removeFavoriteFromMap(marker) {
        if (marker && map.hasLayer(marker)) {
            map.removeLayer(marker);
        }
    }
};

export default FavoriteLayer;
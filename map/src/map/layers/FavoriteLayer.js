import {useContext, useEffect, useState} from 'react';
import AppContext from "../../context/AppContext";
import L from "leaflet";
import '../../util/gpx.js';
import Utils from "../../util/Utils";
import {useMap} from "react-leaflet";

const FavoriteLayer = () => {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [groupsCache, setGroupsCache] = useState(null);

    useEffect(() => {
        removeFavoriteFromMap(ctx.favorites.visibleMarker.prev);

        if (groupsCache !== ctx.favorites.groups) {
            updateFavoritesLayers();
        }

        addFavoriteToMap(ctx.favorites.visibleMarker.current);

    }, [ctx.favorites, ctx.setFavorites]);


    function updateFavoritesLayers() {
        if (ctx.favorites.groupsUnique.length === 0) {
            let file = ctx.favorites.file;
            if (file && file.url) {
                addFavoritesLayerToMap(file).then();
            }
        } else {
            setGroupsCache(ctx.favorites.groups);
            if (ctx.favorites.groups.length === 0) {
                map.eachLayer(function (l) {
                    if (l.options.group) {
                        map.removeLayer(l);
                    }
                })
            } else {
                map.eachLayer(function (l) {
                    ctx.favorites.groups.forEach(g => {
                        if (l.options.group && g.type !== l.options.group) {
                            map.removeLayer(l);
                        }
                    })
                    ctx.favorites.groups.forEach(g => {
                        g.markers.forEach(m => {
                            if (!map.hasLayer(m)) {
                                m.addTo(map)
                            }
                        })
                    })
                })
            }
        }
    }

    async function addFavoritesLayerToMap(file) {
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
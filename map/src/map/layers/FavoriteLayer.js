import {useContext, useEffect} from 'react';
import AppContext from "../../context/AppContext";
import "../../assets/css/gpx.css";
import {useMap} from "react-leaflet";
import TrackLayerProvider from "../TrackLayerProvider";

const FavoriteLayer = () => {
    const ctx = useContext(AppContext);
    const map = useMap();

    //add favorites groups
    useEffect(() => {
        let filesMap = ctx.favorites ? ctx.favorites : {};
        Object.values(filesMap).forEach((file) => {
            if (file.url) {
                if (!file.markers) {
                    file.markers = TrackLayerProvider.createLayersByTrackData(file);
                }
                if (file.addToMap) {
                    file.markers.addTo(map);
                }
                if (file.name === ctx.selectedFavoritesFile.file?.name) {
                    map.fitBounds(file.markers.getBounds());
                }
            } else if (!file.url && file.markers) {
                map.removeLayer(file.markers);
            }
        });

    }, [ctx.favorites, ctx.setFavorites]);

    //add selected favorite
    useEffect(() => {
        if (ctx.selectedFavoritesFile.markerCurrent) {
            map.flyTo([ctx.selectedFavoritesFile.markerCurrent.layer._latlng.lat,ctx.selectedFavoritesFile.markerCurrent.layer._latlng.lng], 17);
            ctx.selectedFavoritesFile.markerCurrent.layer.addTo(map);
        } else if (ctx.selectedFavoritesFile.markerPrev) {
            map.removeLayer(ctx.selectedFavoritesFile.markerPrev.layer);
        }
    }, [ctx.selectedFavoritesFile, ctx.setSelectedFavoritesFile]);
};

export default FavoriteLayer;
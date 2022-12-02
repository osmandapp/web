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
                    file.markers.addTo(map).on('click', onClick);
                }
                if (file.name === ctx.selectedGpxFile.file?.name) {
                    map.fitBounds(file.markers.getBounds());
                }
            } else if (!file.url && file.markers) {
                map.removeLayer(file.markers);
            }
        });

    }, [ctx.favorites, ctx.setFavorites]);

    //add selected favorite
    useEffect(() => {
        if (ctx.selectedGpxFile?.markerCurrent) {
            map.flyTo([ctx.selectedGpxFile.markerCurrent.layer._latlng.lat, ctx.selectedGpxFile.markerCurrent.layer._latlng.lng], 17);
            ctx.selectedGpxFile.markerCurrent.layer.addTo(map).on('click', onClick);
        }
        if (ctx.selectedGpxFile?.markerPrev) {
            map.removeLayer(ctx.selectedGpxFile.markerPrev.layer);
        }
    }, [ctx.selectedGpxFile, ctx.setSelectedGpxFile]);

    function onClick(e) {
        ctx.setCurrentObjectType('favorite');
        if (e.layer) {
            ctx.selectedGpxFile.markerCurrent = e;
        } else {
            ctx.selectedGpxFile.markerCurrent.layer = e.sourceTarget;
        }
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }
};

export default FavoriteLayer;
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
        Object.entries(filesMap).forEach(([key, file]) => {
            if (file.url) {
                if (!file.markers) {
                    file.markers = TrackLayerProvider.createLayersByTrackData(file);
                    if (ctx.selectedGpxFile?.markerCurrent && key === ctx.selectedGpxFile.nameGroup) {
                        updateSelectedFavoriteOnMap(file);
                    }
                }
                if (file.addToMap && file.markers) {
                    file.markers.addTo(map).on('click', onClick);
                }
                if (file.name === ctx.selectedGpxFile.file?.name && !ctx.selectedGpxFile.editFavorite) {
                    map.fitBounds(file.markers.getBounds());
                }
            } else if (!file.url && file.markers) {
                map.removeLayer(file.markers);
            }
        })
    }, [ctx.favorites, ctx.setFavorites]);

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
        ctx.selectedGpxFile.markerCurrent = {
            title: e.sourceTarget.options.title,
            icon: e.sourceTarget.options.icon.options.html,
            layer: e.sourceTarget
        };
        if (!ctx.selectedGpxFile.file) {
            ctx.selectedGpxFile.file =  Object.assign({}, ctx.favorites[e.sourceTarget.options.group]);
        }
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }

    function updateSelectedFavoriteOnMap(file) {
        Object.values(file?.markers._layers).forEach(marker => {
            if (marker.options.title === ctx.selectedGpxFile.markerCurrent.title) {
                ctx.selectedGpxFile.markerPrev = Object.assign({}, ctx.selectedGpxFile.markerCurrent);
                ctx.selectedGpxFile.markerCurrent.layer = marker;
                ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
            }
        })
    }
};

export default FavoriteLayer;
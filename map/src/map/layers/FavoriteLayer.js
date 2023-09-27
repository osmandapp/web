import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext, { OBJECT_TYPE_FAVORITE } from '../../context/AppContext';
import '../../assets/css/gpx.css';
import { useMap } from 'react-leaflet';
import TrackLayerProvider from '../TrackLayerProvider';
import AddFavoriteDialog from '../../infoblock/components/favorite/AddFavoriteDialog';
import FavoritesManager from '../../manager/FavoritesManager';
import TracksManager from '../../manager/TracksManager';
import _ from 'lodash';

const FavoriteLayer = () => {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [openAddDialog, setOpenAddDialog] = useState(false);

    const selectedGpxFileRef = useRef(ctx.selectedGpxFile);

    useEffect(() => {
        selectedGpxFileRef.current = ctx.selectedGpxFile;
    }, [ctx.selectedGpxFile]);

    //add favorites groups
    useEffect(() => {
        let filesMap = ctx.favorites ? ctx.favorites : {};
        Object.entries(filesMap).forEach(([key, file]) => {
            if (file.url) {
                if (!file.markers) {
                    file.markers = TrackLayerProvider.createLayersByTrackData(file, ctx, map);
                    if (ctx.selectedGpxFile?.markerCurrent && key === ctx.selectedGpxFile.nameGroup) {
                        updateSelectedFavoriteOnMap(file);
                    }
                }
                if (file.markers) {
                    if (file.addToMap && file.markers) {
                        file.markers.addTo(map).on('click', onClick);
                    }
                    if (
                        ctx.selectedGpxFile &&
                        file.name === ctx.selectedGpxFile.file?.name &&
                        !ctx.selectedGpxFile.editFavorite
                    ) {
                        map.fitBounds(file.markers.getBounds(), TracksManager.FIT_BOUNDS_OPTIONS);
                    }
                }
            } else if (!file.url && file.markers) {
                map.removeLayer(file.markers);
            }
            deleteOldMarkers(file);
        });
    }, [ctx.favorites, ctx.setFavorites]);

    useEffect(() => {
        if (ctx.selectedGpxFile?.markerCurrent && ctx.selectedGpxFile.markerCurrent.layer) {
            ctx.selectedGpxFile.markerCurrent.layer.addTo(map).on('click', onClick);
            if (ctx.selectedGpxFile.zoom) {
                map.setView(
                    [
                        ctx.selectedGpxFile.markerCurrent.layer._latlng.lat,
                        ctx.selectedGpxFile.markerCurrent.layer._latlng.lng,
                    ],
                    17
                );
                delete ctx.selectedGpxFile.zoom;
            }
        }

        if (ctx.selectedGpxFile?.markerPrev && ctx.selectedGpxFile?.markerPrev.layer) {
            map.removeLayer(ctx.selectedGpxFile.markerPrev.layer);
        }
    }, [ctx.selectedGpxFile, ctx.setSelectedGpxFile]);

    function onClick(e) {
        let type = OBJECT_TYPE_FAVORITE;
        ctx.setCurrentObjectType(type);
        ctx.selectedGpxFile = {};
        ctx.selectedGpxFile.prevState = _.cloneDeep(selectedGpxFileRef.current);
        ctx.selectedGpxFile.markerCurrent = {
            title: e.sourceTarget.options.title,
            icon: e.sourceTarget.options.icon.options.html,
            layer: e.sourceTarget,
        };
        ctx.selectedGpxFile.name = ctx.selectedGpxFile.markerCurrent.title;
        ctx.selectedGpxFile.nameGroup = e.sourceTarget.options.category
            ? e.sourceTarget.options.category
            : FavoritesManager.DEFAULT_GROUP_NAME;
        ctx.selectedGpxFile.file = Object.assign({}, ctx.favorites[e.sourceTarget.options.category]);
        ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
        ctx.setUpdateInfoBlock(true);
    }

    function updateSelectedFavoriteOnMap(file) {
        Object.values(file?.markers._layers).forEach((marker) => {
            if (marker.options.title === ctx.selectedGpxFile.markerCurrent.title) {
                ctx.selectedGpxFile.markerPrev = Object.assign({}, ctx.selectedGpxFile.markerCurrent);
                ctx.selectedGpxFile.markerCurrent.layer = marker;
                ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
            }
        });
    }

    useEffect(() => {
        if (ctx.addFavorite.location && !openAddDialog) {
            setOpenAddDialog(true);
        }
    }, [ctx.addFavorite]);

    function deleteOldMarkers(file) {
        if (file.oldMarkers) {
            map.removeLayer(file.oldMarkers);
            delete file.oldMarkers;
        }
    }

    return <AddFavoriteDialog dialogOpen={openAddDialog} setDialogOpen={setOpenAddDialog} />;
};

export default FavoriteLayer;

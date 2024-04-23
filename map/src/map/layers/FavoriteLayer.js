import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext, { OBJECT_TYPE_FAVORITE } from '../../context/AppContext';
import '../../assets/css/gpx.css';
import { useMap } from 'react-leaflet';
import TrackLayerProvider from '../util/TrackLayerProvider';
import AddFavoriteDialog from '../../infoblock/components/favorite/AddFavoriteDialog';
import FavoritesManager, { FAVORITE_FILE_TYPE, FAVORITE_STORAGE } from '../../manager/FavoritesManager';
import { fitBoundsOptions } from '../../manager/track/TracksManager';
import _, { isEmpty } from 'lodash';

const FavoriteLayer = () => {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [openAddDialog, setOpenAddDialog] = useState(false);

    const selectedGpxFileRef = useRef(ctx.selectedGpxFile);

    useEffect(() => {
        selectedGpxFileRef.current = ctx.selectedGpxFile;
    }, [ctx.selectedGpxFile]);

    useEffect(() => {
        if (ctx.zoomToFavGroup) {
            const group = ctx.favorites.mapObjs[ctx.zoomToFavGroup];
            if (group && group.markers) {
                map.fitBounds(group.markers.getBounds(), fitBoundsOptions(ctx));
            }
        }
    }, [ctx.zoomToFavGroup]);

    useEffect(() => {
        if (!ctx.loginUser) {
            // If there is no logged-in user, remove all favorites layers.
            map.eachLayer((layer) => {
                if (layer.options.type === FAVORITE_FILE_TYPE) {
                    map.removeLayer(layer);
                }
            });
            // Clear the cache of favorites.
            localStorage.removeItem(FAVORITE_STORAGE);
        }
    }, [ctx.loginUser]);

    useEffect(() => {
        // created favorites markers and move them to ctx.favorites for adding to map
        if (ctx.updateMarkers) {
            ctx.setFavorites(() => {
                let favoritesGroups = ctx.updateMarkers;
                favoritesGroups.mapObjs = Object.keys(favoritesGroups.mapObjs).reduce((group, key) => {
                    const file = favoritesGroups.mapObjs[key];
                    if (!file.markers) {
                        file.markers = TrackLayerProvider.createLayersByTrackData({
                            data: file,
                            ctx,
                            map,
                            type: FAVORITE_FILE_TYPE,
                        });
                        if (ctx.selectedGpxFile?.markerCurrent && key === ctx.selectedGpxFile.nameGroup) {
                            updateSelectedFavoriteOnMap(file);
                        }
                    }
                    group[key] = file;
                    return group;
                }, {});
                ctx.setProcessingGroups(false);
                return favoritesGroups;
            });
        }
    }, [ctx.updateMarkers]);

    useEffect(() => {
        if (!isEmpty(ctx.favorites)) {
            Object.values(ctx.favorites.mapObjs).forEach((file) => {
                if (!ctx.configureMapState.showFavorites) {
                    removeMarkersFromMap(file);
                } else {
                    addMarkersOnMap(file);
                }
            });
        }
    }, [ctx.configureMapState.showFavorites]);

    function removeMarkersFromMap(file) {
        deleteMarkers(file);
        deleteOldMarkers(file);
    }

    function addMarkersOnMap(file) {
        if (file.markers && file.hidden !== 'true') {
            if (file.markers) {
                file.markers.eachLayer((layer) => {
                    layer.options.isFavorite = true;
                });
                file.markers.addTo(map).on('click', onClick);
            }
            if (
                ctx.selectedGpxFile &&
                file.name === ctx.selectedGpxFile.file?.name &&
                !ctx.selectedGpxFile.editFavorite
            ) {
                map.fitBounds(file.markers.getBounds(), fitBoundsOptions(ctx));
            }
        }
    }

    // add markers on map or remove markers from map
    useEffect(() => {
        const favoritesGroups = ctx.favorites?.mapObjs;
        favoritesGroups &&
            Object.values(favoritesGroups).forEach((file) => {
                if (file.url && ctx.configureMapState.showFavorites) {
                    addMarkersOnMap(file);
                    deleteOldMarkers(file);
                } else if (!file.url) {
                    removeMarkersFromMap(file);
                }
            });
    }, [ctx.favorites]);

    useEffect(() => {
        if (ctx.selectedGpxFile?.markerCurrent?.layer) {
            // if the group is hidden, then only zoom to the group markers
            if (ctx.configureMapState.showFavorites && ctx.selectedGpxFile.file.hidden !== 'true') {
                ctx.selectedGpxFile.markerCurrent.layer.addTo(map).on('click', onClick);
            }
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
    }, [ctx.selectedGpxFile]);

    function onClick(e) {
        ctx.setCurrentObjectType(OBJECT_TYPE_FAVORITE);
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
        ctx.selectedGpxFile.file = Object.assign({}, ctx.favorites.mapObjs[e.sourceTarget.options.category]);
        ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
        ctx.setSelectedWpt(ctx.selectedGpxFile);
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
        setOpenAddDialog((ctx.addFavorite.location && !openAddDialog) ?? false);
    }, [ctx.addFavorite]);

    function deleteMarkers(file) {
        if (file.markers && !isEmpty(file.markers)) {
            if (map.hasLayer(file.markers)) {
                map.removeLayer(file.markers);
            }
        }
    }

    function deleteOldMarkers(file) {
        if (file.oldMarkers) {
            map.removeLayer(file.oldMarkers);
            delete file.oldMarkers;
        }
    }

    return <AddFavoriteDialog dialogOpen={openAddDialog} setDialogOpen={setOpenAddDialog} />;
};

export default FavoriteLayer;

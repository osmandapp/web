import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import AppContext, { OBJECT_TYPE_FAVORITE } from '../../context/AppContext';
import '../../assets/css/gpx.css';
import { useMap } from 'react-leaflet';
import TrackLayerProvider from '../util/TrackLayerProvider';
import AddFavoriteDialog from '../../infoblock/components/favorite/AddFavoriteDialog';
import FavoritesManager, { FAVORITE_FILE_TYPE, FAVORITE_STORAGE } from '../../manager/FavoritesManager';
import { fitBoundsOptions } from '../../manager/track/TracksManager';
import _, { isEmpty } from 'lodash';
import { ZOOM_TO_MAP } from './SearchLayer';
import { clusterMarkers, createHoverMarker } from '../util/Clusterizer';
import { DEFAULT_ICON_SIZE, DEFAULT_WPT_COLOR } from '../markers/MarkerOptions';
import useHashParams from '../../util/hooks/useHashParams';
import L from 'leaflet';
import Utils from '../../util/Utils';
import useZoomMoveMapHandlers from '../../util/hooks/useZoomMoveMapHandlers';
import { updateMarkerZIndex } from './ExploreLayer';

export function restoreOriginalIcon(layer) {
    if (layer.options.originalIcon) {
        if (layer.icon !== layer.options.originalIcon) {
            layer.setIcon(layer.options.originalIcon);
        }
    }
}

export function filterPointsInBounds(points, map) {
    const mapBounds = map.getBounds();

    return points.filter((point) => {
        const pointLatLng = L.latLng(point.lat, point.lon);
        return mapBounds.contains(pointLatLng);
    });
}

export function processMarkers({ layer, markerLatLng, mainMarkers, secondaryMarkers, mainLayers, secondaryLayers }) {
    if (!layer.options.originalIcon) {
        layer.options.originalIcon = layer.options.icon;
    }

    const isMainMarker = mainMarkers.some((mainMarker) => {
        const mainLatLng = L.latLng(mainMarker.lat, mainMarker.lon);
        return mainLatLng.equals(markerLatLng);
    });

    const isSecondaryMarker = secondaryMarkers.some((secMarker) => {
        const secLatLng = L.latLng(secMarker.lat, secMarker.lon);
        return secLatLng.equals(markerLatLng);
    });

    if (isMainMarker) {
        restoreOriginalIcon(layer);
        mainLayers.push(layer);
    }

    if (isSecondaryMarker) {
        const color = layer.options.color ? Utils.hexToArgb(layer.options.color) : DEFAULT_WPT_COLOR;
        const customIcon = L.divIcon({
            className: 'custom-circle-icon',
            iconSize: [10, 10],
            html: `<div style="background-color:${color};border-radius:50%;width:10px;height:10px;border:1px solid #ffffff;"></div>`,
        });
        // Replace the marker's icon with the custom circle-like icon
        layer.setIcon(customIcon);
        secondaryLayers.push(layer);
    }
}

const FavoriteLayer = () => {
    const ctx = useContext(AppContext);
    const map = useMap();

    const { lat } = useHashParams();
    const [move, setMove] = useState(false);
    const [zoom, setZoom] = useState(map ? map.getZoom() : 0);

    useZoomMoveMapHandlers(map, setZoom, setMove);

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
                let favoritesGroups = { ...ctx.updateMarkers };
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
                const mapBounds = map.getBounds();

                const { mainMarkers, secondaryMarkers } = clusterMarkers({
                    places: filterPointsInBounds(file.wpts, map),
                    zoom,
                    latitude: lat,
                    iconSize: DEFAULT_ICON_SIZE,
                    isFavorites: true,
                });

                const markersToAdd = [];
                const mainLayers = [];
                const secondaryLayers = [];
                file.markers.eachLayer((layer) => {
                    const markerLatLng = layer.getLatLng();
                    if (!mapBounds.contains(markerLatLng)) {
                        return;
                    }
                    layer.options.isFavorite = true;
                    if (!layer.options.hasClickHandler) {
                        layer.on('click', onClick);
                        layer.options.hasClickHandler = true;
                    }
                    processMarkers({
                        layer,
                        markerLatLng,
                        mainMarkers,
                        secondaryMarkers,
                        mainLayers,
                        secondaryLayers,
                    });
                });
                markersToAdd.push(...mainLayers, ...secondaryLayers);

                markersToAdd.forEach((marker) => {
                    createHoverMarker({
                        marker,
                        mainStyle: true,
                        text: marker.options['title'],
                        latlng: marker._latlng,
                        iconSize: [DEFAULT_ICON_SIZE, DEFAULT_ICON_SIZE],
                        map,
                        ctx,
                    });
                });

                if (file.markersOnMap) {
                    map.removeLayer(file.markersOnMap);
                }

                const mainLayersGroup = new L.FeatureGroup(mainLayers);
                const secLayersGroup = new L.FeatureGroup(secondaryLayers);
                const res = new L.LayerGroup([secLayersGroup, mainLayersGroup]);
                res.addTo(map);
                updateMarkerZIndex(mainLayersGroup, 2000);
                file.markersOnMap = res;
            }
        }
    }

    // add markers on map or remove markers from map
    useEffect(() => {
        ctx.setFavLoading(false);
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

    // update markers on map after zoom
    useEffect(() => {
        if (ctx.selectedGpxFile.zoom) {
            // zoom after click on favorite
            // not update object in context to avoid call useEffect with ctx.selectedGpxFile
            // always delete after zoom from map.setView
            delete ctx.selectedGpxFile.zoom;
            return;
        }
        updateMarkers();
    }, [zoom]);

    // update markers on map after move
    useEffect(() => {
        if (move) {
            updateMarkers();
            setMove(false);
        }
    }, [move]);

    function updateMarkers() {
        const favoritesGroups = ctx.favorites?.mapObjs;
        favoritesGroups &&
            Object.values(favoritesGroups).forEach((file) => {
                if (file.url && ctx.configureMapState.showFavorites) {
                    addMarkersOnMap(file);
                    deleteOldMarkers(file);
                }
            });
    }

    useEffect(() => {
        if (ctx.selectedGpxFile?.markerCurrent?.layer) {
            // if the group is hidden, then only zoom to the group markers
            if (ctx.configureMapState.showFavorites && ctx.selectedGpxFile.file.hidden !== 'true') {
                if (!map.hasLayer(ctx.selectedGpxFile.markerCurrent.layer)) {
                    const layer = ctx.selectedGpxFile.markerCurrent.layer;
                    layer.addTo(map).on('click', onClick);
                    layer.options.hasClickHandler = true;
                }
            }
            if (ctx.selectedGpxFile.zoom) {
                map.setView(
                    [
                        ctx.selectedGpxFile.markerCurrent.layer._latlng.lat,
                        ctx.selectedGpxFile.markerCurrent.layer._latlng.lng,
                    ],
                    ZOOM_TO_MAP
                );
            }
        }

        if (ctx.selectedGpxFile?.markerPrev && ctx.selectedGpxFile?.markerPrev.layer) {
            map.removeLayer(ctx.selectedGpxFile.markerPrev.layer);
        }
    }, [ctx.selectedGpxFile]);

    const onClick = useCallback(
        (e) => {
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
        },
        [ctx, selectedGpxFileRef]
    );

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
        if (file.markersOnMap) {
            map.removeLayer(file.markersOnMap);
        }
    }

    function deleteOldMarkers(file) {
        if (file?.oldMarkers) {
            map.removeLayer(file.oldMarkers);
            delete file.oldMarkers;
        }
        if (file?.hidden === 'true' && file?.markersOnMap) {
            map.removeLayer(file.markersOnMap);
        }
    }

    return <AddFavoriteDialog dialogOpen={openAddDialog} setDialogOpen={setOpenAddDialog} />;
};

export default FavoriteLayer;

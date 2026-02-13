import React, { useCallback, useContext, useEffect, useRef, useState, useMemo } from 'react';
import AppContext, { FAVORITES_URL_PARAM_FOLDER } from '../../context/AppContext';
import { useSearchParams } from 'react-router-dom';
import '../../assets/css/gpx.css';
import { useMap } from 'react-leaflet';
import TrackLayerProvider from '../util/TrackLayerProvider';
import AddFavoriteDialog from '../../infoblock/components/favorite/AddFavoriteDialog';
import FavoritesManager, { FAVORITE_FILE_TYPE, openFavoriteObj } from '../../manager/FavoritesManager';
import { fitBoundsOptions } from '../../manager/track/TracksManager';
import isEmpty from 'lodash-es/isEmpty';
import cloneDeep from 'lodash-es/cloneDeep';
import { ZOOM_TO_MAP } from './SearchLayer';
import { clusterMarkers, createHoverMarker } from '../util/Clusterizer';
import {
    applySelectedWithUpdateMarker,
    applySelectedWithCreateMarker,
    hideMarkersNearPoint,
    restoreHiddenMarkers,
} from '../util/MarkerSelectionService';
import { DEFAULT_ICON_SIZE, DEFAULT_WPT_COLOR } from '../markers/MarkerOptions';
import useHashParams from '../../util/hooks/useHashParams';
import L from 'leaflet';
import Utils from '../../util/Utils';
import useZoomMoveMapHandlers from '../../util/hooks/map/useZoomMoveMapHandlers';
import { updateMarkerZIndex } from './ExploreLayer';
import { deleteAllFavoritesFromDB } from '../../context/FavoriteStorage';
import LoginContext from '../../context/LoginContext';
import { MENU_INFO_OPEN_SIZE, NAVIGATE_URL } from '../../manager/GlobalManager';
import { NAVIGATION_OBJECT_TYPE_FAVORITE } from '../../manager/NavigationManager';

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
        const color = layer.options.color ? Utils.hexToRgba(layer.options.color) : DEFAULT_WPT_COLOR;
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
    const ltx = useContext(LoginContext);

    const map = useMap();

    const [searchParams] = useSearchParams();

    const { lat } = useHashParams();
    const [move, setMove] = useState(false);
    const [zoom, setZoom] = useState(map ? map.getZoom() : 0);

    useZoomMoveMapHandlers(map, setZoom, setMove);

    const openGroupId = useMemo(() => {
        const folderName = searchParams.get(FAVORITES_URL_PARAM_FOLDER);
        if (!folderName || !ctx.favorites?.groups) return null;
        const group = ctx.favorites.groups.find((g) => g.name === folderName);
        return group?.id || null;
    }, [searchParams, ctx.favorites?.groups]);

    const [openAddDialog, setOpenAddDialog] = useState(false);

    const selectedGpxFileRef = useRef(ctx.selectedGpxFile);

    useEffect(() => {
        selectedGpxFileRef.current = ctx.selectedGpxFile;
    }, [ctx.selectedGpxFile]);

    useEffect(() => {
        if (ctx.zoomToFavGroup) {
            const group = ctx.favorites.mapObjs[ctx.zoomToFavGroup];
            if (group?.markers) {
                map.fitBounds(group.markers.getBounds(), fitBoundsOptions(ctx));
                ctx.setZoomToFavGroup(null);
            }
        }
    }, [ctx.zoomToFavGroup]);

    useEffect(() => {
        if (ctx.removeFavGroup) {
            removeMarkersFromMap(ctx.removeFavGroup);
            ctx.setRemoveFavGroup(null);
        }
    }, [ctx.removeFavGroup]);

    useEffect(() => {
        if (!ltx.loginUser) {
            // If there is no logged-in user, remove all favorites layers.
            map.eachLayer((layer) => {
                if (layer.options.type === FAVORITE_FILE_TYPE) {
                    map.removeLayer(layer);
                }
            });
            deleteAllFavoritesFromDB().then();
        }
    }, [ltx.loginUser]);

    useEffect(() => {
        // created favorites markers and move them to ctx.favorites for adding to map
        if (ctx.updateMarkers) {
            ctx.setFavorites(() => {
                const favoritesGroups = { ...ctx.updateMarkers };
                favoritesGroups.mapObjs = Object.keys(favoritesGroups.mapObjs).reduce((group, key) => {
                    const file = favoritesGroups.mapObjs[key];
                    if (!file.markers) {
                        file.markers = TrackLayerProvider.createLayersByTrackData({
                            data: file,
                            groupId: key,
                            ctx,
                            map,
                            type: FAVORITE_FILE_TYPE,
                        });
                        if (ctx.selectedGpxFile?.markerCurrent && key === ctx.selectedGpxFile.id) {
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

    function removeMarkersFromMap(file) {
        deleteMarkers(file);
        deleteOldMarkers(file);
    }

    function updateMarkers({ onlyOpened = false } = {}) {
        const favoritesGroups = ctx.favorites?.mapObjs;
        if (!favoritesGroups) return;

        for (const fileId of Object.keys(favoritesGroups)) {
            const file = favoritesGroups[fileId];

            if (onlyOpened && !file.url) {
                continue;
            }

            if (!ctx.configureMapState.showFavorites && !openGroupId) {
                removeMarkersFromMap(file);
                continue;
            }

            if (file.url) {
                if (openGroupId) {
                    fileId === openGroupId ? addMarkersOnMap(file) : removeMarkersFromMap(file);
                } else {
                    addMarkersOnMap(file);
                }
                deleteOldMarkers(file);
            } else {
                removeMarkersFromMap(file);
            }
        }
        applySelectionIfNeeded();
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
                    if (!layer) return;

                    const markerLatLng = layer.getLatLng?.();
                    if (!markerLatLng) return;

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
                        text: marker.options['name'],
                        latlng: marker._latlng,
                        iconSize: DEFAULT_ICON_SIZE,
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
                applySelectionIfNeeded();
            }
        } else {
            if (file.markersOnMap) {
                map.removeLayer(file.markersOnMap);
            }
        }
    }

    useEffect(() => {
        ctx.setFavLoading(false);
        updateMarkers();
    }, [ctx.favorites, openGroupId, ctx.configureMapState.showFavorites]);

    // update markers on map after zoom
    useEffect(() => {
        updateMarkers({ onlyOpened: true });
    }, [zoom]);

    // update markers on map after move
    useEffect(() => {
        if (move) {
            updateMarkers({ onlyOpened: true });
            setMove(false);
        }
    }, [move]);

    useEffect(() => {
        applySelectionIfNeeded();
    }, [ctx.selectedGpxFile.markerCurrent, ctx.configureMapState.showFavorites, openGroupId]);

    const onClick = useCallback(
        (e) => {
            if (globalThis.location.pathname.includes(NAVIGATE_URL)) {
                const lat = e.latlng?.lat ?? e.sourceTarget?._latlng?.lat;
                const lon = e.latlng?.lng ?? e.sourceTarget?._latlng?.lng;

                if (lat && lon) {
                    const wpt = {
                        ...e.sourceTarget.options,
                        lat,
                        lng: lon,
                        type: NAVIGATION_OBJECT_TYPE_FAVORITE,
                    };
                    const navEvent = new CustomEvent('nav-marker-click', {
                        detail: {
                            wpt,
                            latlng: L.latLng(lat, lon),
                        },
                        cancelable: true,
                    });
                    navEvent.originalEvent = e.originalEvent;
                    globalThis.dispatchEvent(navEvent);

                    // If NavigationLayer handled it (found empty input), don't open info
                    if (navEvent.defaultPrevented) {
                        L.DomEvent.stopPropagation(e);
                        return;
                    }
                }
            }

            // Normal logic: open context info block
            ctx.selectedGpxFile = {};
            ctx.selectedGpxFile.trackData = { ...ctx.favorites.mapObjs[e.sourceTarget.options.groupId] };

            const groupWithOriginalFile = ctx.favorites.groups?.find((g) => g.id === e.sourceTarget.options.groupId);
            ctx.selectedGpxFile.file = groupWithOriginalFile.file;

            ctx.selectedGpxFile.prevState = cloneDeep(selectedGpxFileRef.current);
            ctx.selectedGpxFile.markerCurrent = {
                name: e.sourceTarget.options.name,
                icon: e.sourceTarget.options.icon.options.html,
                color: e.sourceTarget.options.color,
                background: e.sourceTarget.options.background,
                groupId: e.sourceTarget.options.groupId,
                iconSize: e.sourceTarget.options.icon?.options?.iconSize?.[0],
                layer: e.sourceTarget,
                latlng: e.sourceTarget.getLatLng?.() ?? e.sourceTarget._latlng,
                originalIconHtml:
                    e.sourceTarget.options.originalIcon?.options?.html ?? e.sourceTarget.options.icon?.options?.html,
            };
            ctx.selectedGpxFile.name = ctx.selectedGpxFile.markerCurrent.name;
            ctx.selectedGpxFile.nameGroup = e.sourceTarget.options.category
                ? e.sourceTarget.options.category
                : FavoritesManager.DEFAULT_GROUP_NAME;
            ctx.selectedGpxFile.id = e.sourceTarget.options.groupId;
            ctx.selectedGpxFile.key = `${ctx.selectedGpxFile.id}:${ctx.selectedGpxFile.name}`;

            ctx.selectedGpxFile.mapObj = true;

            openFavoriteObj(ctx, ctx.selectedGpxFile);
            ctx.setInfoBlockWidth(MENU_INFO_OPEN_SIZE + 'px');
        },
        [ctx, selectedGpxFileRef]
    );

    function updateSelectedFavoriteOnMap(file) {
        const layer = Object.values(file?.markers?._layers ?? {}).find(
            (m) => m.options?.name === ctx.selectedGpxFile.markerCurrent?.name
        );
        if (!layer) return;

        const opts = layer.options;
        const iconOpts = opts.icon?.options;
        ctx.selectedGpxFile.markerPrev = { ...ctx.selectedGpxFile.markerCurrent };
        ctx.selectedGpxFile.markerCurrent = {
            ...ctx.selectedGpxFile.markerCurrent,
            layer,
            icon: iconOpts?.html,
            color: opts.color,
            background: opts.background,
            groupId: opts.groupId,
            latlng: layer.getLatLng?.() ?? layer._latlng,
            originalIconHtml: opts.originalIcon?.options?.html ?? iconOpts?.html,
        };
        ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
    }

    useEffect(() => {
        setOpenAddDialog((ctx.addFavorite.location && !ctx.addFavorite.poi && !openAddDialog) ?? false);
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

    // main function for applying selection on favorite marker
    function applySelectionIfNeeded() {
        resetSelectionState();

        const current = getCurrentSelectionIfAllowed();
        if (!current) {
            return;
        }

        const { selectedLayer, centerLatLng } = findOrCreateSelectedLayer(current);
        hideMarkersAroundSelection(selectedLayer, centerLatLng);
        centerSelectedMarkerIfNeeded();
    }

    function resetSelectionState() {
        restoreHiddenMarkers(ctx.selectedHiddenLayersRef);
        if (ctx.selectedUpdatedLayerRef.current) {
            restoreOriginalIcon(ctx.selectedUpdatedLayerRef.current);
            ctx.selectedUpdatedLayerRef.current = null;
        }
        if (ctx.selectedCreatedLayerRef.current && map.hasLayer(ctx.selectedCreatedLayerRef.current)) {
            map.removeLayer(ctx.selectedCreatedLayerRef.current);
            ctx.selectedCreatedLayerRef.current = null;
        }
    }

    function getCurrentSelectionIfAllowed() {
        if (!ctx.configureMapState.showFavorites && !openGroupId) {
            return null;
        }

        const current = ctx.selectedGpxFile?.markerCurrent;
        if (!current?.name) {
            return null;
        }

        return current;
    }

    function findOrCreateSelectedLayer(current) {
        const layer = current.layer;
        let selectedLayer = null;

        if (layer && map.hasLayer(layer)) {
            current.latlng = layer.getLatLng?.() ?? layer._latlng;
            applySelectedWithUpdateMarker(layer, current);
            ctx.selectedUpdatedLayerRef.current = layer;
            selectedLayer = layer;
        } else if (current.latlng) {
            ctx.selectedCreatedLayerRef.current = applySelectedWithCreateMarker(map, current.latlng, current);
            selectedLayer = ctx.selectedCreatedLayerRef.current;
        }

        return { selectedLayer, centerLatLng: current.latlng };
    }

    function hideMarkersAroundSelection(selectedLayer, centerLatLng) {
        if (!selectedLayer || !centerLatLng) {
            return;
        }

        hideMarkersNearPoint(map, zoom, centerLatLng, selectedLayer, ctx.selectedHiddenLayersRef);
    }

    function centerSelectedMarkerIfNeeded() {
        const targetLatLng = ctx.selectedGpxFile?.markerCurrent?.latlng;
        if (!targetLatLng) {
            return;
        }
        const mapBounds = map.getBounds();
        const latlng = L.latLng(targetLatLng.lat, targetLatLng.lng);
        if (mapBounds.contains(latlng)) {
            return;
        }
        map.panTo(latlng);
    }

    return <AddFavoriteDialog dialogOpen={openAddDialog} setDialogOpen={setOpenAddDialog} />;
};

export default FavoriteLayer;

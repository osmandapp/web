import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import AppContext, { OBJECT_EXPLORE, OBJECT_SEARCH } from '../../context/AppContext';
import { useMap } from 'react-leaflet';
import { apiGet } from '../../util/HttpApi';
import L from 'leaflet';
import styles from '../../menu/search/search.module.css';
import 'leaflet-spin';
import { Box, IconButton, Modal, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import 'leaflet.markercluster';
import { useTranslation } from 'react-i18next';
import { areSetsEqual } from '../../util/Utils';
import { debouncer } from '../../context/TracksRoutingCache';
import { clusterMarkers, createHoverMarker, EXPLORE_BIG_ICON_SIZE, removeTooltip } from '../util/Clusterizer';
import { useSelectedPoiMarker } from '../../util/hooks/useSelectedPoiMarker';
import { getPhotoUrl } from '../../menu/search/explore/PhotoGallery';
import { getVisibleBbox } from '../util/MapManager';

export const EXPLORE_LAYER_ID = 'explore-layer';
export const EXPLORE_MIN_ZOOM = 6;

export function updateMarkerZIndex(layerGroup, zIndex) {
    layerGroup.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
            layer.setZIndexOffset(zIndex);
        }
    });
}

export function getImgByProps(props) {
    return props.photoTitle || props.depTitle;
}

export default function ExploreLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const GET_OBJ_DEBOUNCE_MS = 500;

    const timerRef = useRef(null);

    const filtersRef = useRef(null);
    const openedPoiRef = useRef(null);

    const { i18n } = useTranslation();

    const mainIconsLayerRef = useRef(null);
    const otherIconsLayerRef = useRef(null);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedObj, setSelectedObj] = useState(null);

    const zoom = map.getZoom();

    useEffect(() => {
        if (zoom < EXPLORE_MIN_ZOOM) {
            ctx.setWikiPlaces(null);
            removeLayers();
        }
    }, [zoom]);

    useSelectedPoiMarker(
        ctx,
        mainIconsLayerRef.current && otherIconsLayerRef.current
            ? [...mainIconsLayerRef.current.getLayers(), ...otherIconsLayerRef.current.getLayers()]
            : null,
        EXPLORE_LAYER_ID,
        map
    );

    function closeModal() {
        setModalIsOpen(false);
    }

    function removeLayers() {
        if (mainIconsLayerRef.current) {
            mainIconsLayerRef.current.clearLayers();
        }
        if (otherIconsLayerRef.current) {
            otherIconsLayerRef.current.clearLayers();
        }
        // remove lost markers
        map.eachLayer((layer) => {
            if (layer instanceof L.MarkerClusterGroup) {
                map.removeLayer(layer);
            }
        });

        removeTooltip(map, ctx.searchTooltipRef);

        if (ctx.searchPointerRef && ctx.searchPointerRef.current) {
            ctx.searchPointerRef.current.remove();
        }
    }

    useEffect(() => {
        const item = ctx.searchSettings.getPoi;
        async function getWikiPoi() {
            const response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/search/get-poi-by-osmid`, {
                apiCache: true,
                params: {
                    lat: item.geometry.coordinates[1],
                    lon: item.geometry.coordinates[0],
                    osmid: item.properties?.osmid,
                    type: item.properties?.osmtype,
                },
            });
            if (response?.data) {
                const poi = response.data;
                ctx.setSelectedWpt({ poi, wikidata: item });
            } else {
                ctx.setSelectedWpt({ wikidata: item });
            }
        }

        if (item) {
            getWikiPoi().then(() => {
                ctx.setLoadingContextMenu(false);
                ctx.setLoadingContextItem(null);
                map.spin(false);
            });
        } else {
            openedPoiRef.current = null;
        }
    }, [ctx.searchSettings.getPoi]);

    useEffect(() => {
        let ignore = false;
        let controller = new AbortController();
        const settings = ctx.searchSettings;
        const setLoadingContextMenu = ctx.setLoadingContextMenu;

        if (skippedObjectType()) {
            removeLayers();
            if (ctx.searchSettings.showOnMainSearch) {
                ctx.setSearchSettings({ ...ctx.searchSettings, showOnMainSearch: false });
            }
            ctx.setWikiPlaces(null);
            return;
        }

        const onMapMoveEnd = async () => {
            if (
                settings.useWikiImages ||
                settings.showOnMainSearch ||
                (ctx.currentObjectType === OBJECT_EXPLORE && (mainIconsLayerRef.current || otherIconsLayerRef.current))
            ) {
                debouncer(
                    () => getData({ controller, ignore, settings, setLoadingContextMenu }),
                    timerRef,
                    GET_OBJ_DEBOUNCE_MS
                );
            }
        };
        map.on('moveend', onMapMoveEnd);

        if (ctx.currentObjectType === OBJECT_EXPLORE || settings.useWikiImages || settings.showOnMainSearch) {
            if (
                !settings.selectedFilters ||
                !ctx.wikiPlaces ||
                !areSetsEqual(filtersRef.current, settings.selectedFilters)
            ) {
                filtersRef.current = settings.selectedFilters ?? null;
                removeLayers();
                debouncer(
                    () => getData({ controller, ignore, settings, setLoadingContextMenu }),
                    timerRef,
                    GET_OBJ_DEBOUNCE_MS
                );
            }
        }

        if (!settings.useWikiImages && ctx.currentObjectType !== OBJECT_EXPLORE && !settings.showOnMainSearch) {
            removeLayers();
            ctx.setWikiPlaces(null);
        }

        return () => {
            ignore = true;
            controller.abort();
            map.off('moveend', onMapMoveEnd);
        };
    }, [
        ctx.currentObjectType,
        ctx.searchSettings.useWikiImages,
        ctx.searchSettings.selectedFilters,
        ctx.searchSettings.showOnMainSearch,
        ctx.setLoadingContextMenu,
    ]);

    function skippedObjectType() {
        return (
            ctx.currentObjectType && ctx.currentObjectType !== OBJECT_EXPLORE && ctx.currentObjectType !== OBJECT_SEARCH
        );
    }

    /**
     * A debounced function to fetch place data from a specified API based on map boundaries and user-selected filters.
     * It only executes if not ignored and if at least one filter is selected.
     * The function also manages a loading spinner on the map during the data fetching process.
     *
     * @param {Object} params - Parameters for the fetch operation.
     * @param {AbortController.signal} params.controller - Used to abort the fetch request if necessary.
     * @param {boolean} params.ignore - If true, the fetch operation is skipped.
     * @param {Object} params.settings - Contains user settings such as `selectedFilters` and whether to use Wiki images.
     * @returns {Promise<void>} - A promise that resolves when the fetch operation is complete.
     */

    async function getData({ controller, ignore, settings, setLoadingContextMenu }) {
        const API_GET_OBJS = 'get-wiki-data';
        const API_GET_IMGS = 'get-wiki-images';
        if (!ignore) {
            if (map.getZoom() < EXPLORE_MIN_ZOOM || settings?.selectedFilters?.size === 0) {
                ctx.setWikiPlaces(null);
                return;
            }
            setLoadingContextMenu(true);
            const bbox = getVisibleBbox(map, ctx);
            const api = settings?.useWikiImages ? API_GET_IMGS : API_GET_OBJS;
            const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/search/${api}`, {
                apiCache: true,
                params: {
                    northWest: `${bbox.getNorthWest().lat},${bbox.getNorthWest().lng}`,
                    southEast: `${bbox.getSouthEast().lat},${bbox.getSouthEast().lng}`,
                    lang: settings?.useWikiImages ? null : i18n.language,
                    filters: settings?.selectedFilters ? [...settings.selectedFilters] : null,
                },
                signal: controller.signal,
            });
            if (response?.data) {
                let jsonData = response.data.features;
                ctx.setWikiPlaces(jsonData);
            } else {
                ctx.setWikiPlaces(null);
            }
            setLoadingContextMenu(false);
            removeTooltip(map, ctx.searchTooltipRef);
        }
    }

    function openInfo(feature) {
        if (ctx.searchSettings.useWikiImages) {
            setSelectedObj(feature);
            setModalIsOpen(true);
        } else {
            if (openedPoiRef.current !== feature) {
                openedPoiRef.current = feature;
                ctx.setLoadingContextMenu(true);
                map.spin(true, { color: '#1976d2' });
                ctx.setSearchSettings({ ...ctx.searchSettings, getPoi: feature });
            }
        }
        ctx.setPhotoGallery(null);
    }

    const markerClusterGroup = new L.MarkerClusterGroup({
        showCoverageOnHover: false,
        zoomToBoundsOnClick: false,
        maxClusterRadius: 100,
        iconCreateFunction: function (cluster) {
            let count = cluster.getChildCount();
            if (count === 1) {
                return cluster.getAllChildMarkers()[0].options.icon;
            } else {
                const childMarkers = cluster.getAllChildMarkers();
                const minIndexMarker = childMarkers.reduce((min, m) => (m.options.index < min.options.index ? m : min));
                for (const marker of childMarkers) {
                    if (marker.options.index === minIndexMarker.options.index && marker.options.icon) {
                        return marker.options.icon;
                    }
                }
            }
            return L.divIcon({
                className: 'dot-icon',
                iconSize: [8, 8],
                html: '<div class="dot"></div>',
            });
        },
    });

    const handleClusterClick = useCallback((cluster) => {
        const childMarkers = cluster.layer.getAllChildMarkers();
        const minIndexMarker = childMarkers.reduce((min, m) => (m.options.index < min.options.index ? m : min));
        const mainMarker = childMarkers.find((m) => m.options.index === minIndexMarker.options.index);
        if (mainMarker) {
            mainMarker.fire('click');
        }
    }, []);

    useEffect(() => {
        markerClusterGroup.on('clusterclick', handleClusterClick);

        return () => {
            markerClusterGroup.off('clusterclick', handleClusterClick);
        };
    }, [handleClusterClick]);

    function createGeoJsonData(places) {
        const sortedPlaces = [...places].sort((a, b) => a.properties.rowNum - b.properties.rowNum);
        return {
            type: 'FeatureCollection',
            features: sortedPlaces.map((place, index) => ({
                type: 'Feature',
                properties: { ...place.properties },
                index,
                geometry: {
                    type: 'Point',
                    coordinates: place.geometry.coordinates,
                },
            })),
        };
    }

    /**
     * Replaces old layers with new ones on the map. This function clears all layers in the provided oldLayers object before adding newLayers.
     * It is a more efficient approach when updating large sets of data, as it avoids the overhead of manually filtering through and updating individual layers.
     * @param {L.LayerGroup} oldLayers - The layer group to clear from the map.
     * @param {L.Layer} newLayers - The new layer to add to the map.
     * @returns {L.Layer} The newly added layers, allowing for further operations if needed.
     */
    function addLayers(oldLayers, newLayers) {
        if (oldLayers) {
            oldLayers.clearLayers();
        }
        map.addLayer(newLayers);
        return newLayers;
    }

    useEffect(() => {
        const abortController = new AbortController();

        if (ctx.currentObjectType !== OBJECT_EXPLORE && !ctx.searchSettings.showOnMainSearch) {
            abortController.abort();
            return;
        }

        if (ctx.wikiPlaces) {
            const zoom = map.getZoom();
            const center = map.getCenter();
            const latitude = center.lat;
            const geoJsonData = createGeoJsonData(ctx.wikiPlaces);
            const { mainMarkers, secondaryMarkers } = clusterMarkers({
                places: geoJsonData.features,
                zoom,
                latitude,
                isExplore: true,
            });

            let simpleMarkersArr = new L.geoJSON();
            let largeMarkersArr = new L.geoJSON();

            const markerPromises = mainMarkers.map((place) => {
                const latlng = L.latLng(place.geometry.coordinates[1], place.geometry.coordinates[0]);
                const imgTag = ctx.searchSettings.useWikiImages
                    ? place.properties.imageTitle
                    : getImgByProps(place.properties);
                const iconUrl = getPhotoUrl({ photoTitle: imgTag, size: 160 });
                const iconSize = [EXPLORE_BIG_ICON_SIZE, EXPLORE_BIG_ICON_SIZE];

                return new Promise((resolve, reject) => {
                    if (abortController.signal.aborted) {
                        return reject('Operation aborted');
                    }

                    const image = new Image();
                    image.onload = () => {
                        if (abortController.signal.aborted) {
                            return reject('Operation aborted');
                        }
                        const icon = L.icon({
                            iconUrl,
                            iconSize,
                            className: `${styles.wikiIconLarge} ${styles.wikiIcon}`,
                        });
                        const marker = L.marker(latlng, {
                            icon,
                            index: place.index,
                            idObj: place.properties.id,
                        });
                        addEventListeners({ marker, place, main: true, iconSize, latlng });
                        largeMarkersArr.addLayer(marker);
                        resolve();
                    };
                    image.onerror = () => {
                        if (abortController.signal.aborted) {
                            return reject('Operation aborted');
                        }
                        const circle = L.circleMarker(latlng, {
                            idObj: place.properties.id,
                            fillOpacity: 0.9,
                            radius: 5,
                            color: '#ffffff',
                            fillColor: '#fe8800',
                            weight: 1,
                            zIndex: 1000,
                        });
                        addEventListeners({ marker: circle, place, latlng });
                        largeMarkersArr.addLayer(circle);
                        resolve();
                    };
                    image.src = iconUrl;
                });
            });

            Promise.all(markerPromises)
                .then(() => {
                    for (const place of secondaryMarkers) {
                        const latlng = L.latLng(place.geometry.coordinates[1], place.geometry.coordinates[0]);
                        const circle = L.circleMarker(latlng, {
                            idObj: place.properties.id,
                            fillOpacity: 0.9,
                            radius: 5,
                            color: '#ffffff',
                            fillColor: '#fe8800',
                            weight: 1,
                            zIndex: 1000,
                        });
                        addEventListeners({ marker: circle, place, latlng });
                        simpleMarkersArr.addLayer(circle);
                    }

                    if (ctx.currentObjectType === OBJECT_EXPLORE || ctx.searchSettings.showOnMainSearch) {
                        otherIconsLayerRef.current = addLayers(otherIconsLayerRef.current, simpleMarkersArr);
                        mainIconsLayerRef.current = addLayers(mainIconsLayerRef.current, largeMarkersArr);
                        updateMarkerZIndex(mainIconsLayerRef.current, 2000);
                    }
                })
                .catch((error) => {
                    if (error !== 'Operation aborted') {
                        console.error(error);
                    }
                });
        }

        return () => {
            abortController.abort();
        };
    }, [ctx.wikiPlaces, ctx.currentObjectType, ctx.searchSettings.showOnMainSearch]);

    function addEventListeners({ marker, place, main = false, latlng, iconSize = [10, 10] }) {
        // Add click event to open information about the place
        marker.on('click', () => {
            openInfo(place);
        });

        const tooltipText = () => {
            if (place.properties.wikiTitle && place.properties.wikiTitle !== '') {
                return place.properties.wikiTitle;
            }
        };

        createHoverMarker({
            marker,
            setSelectedId: ctx.setSelectedPoiId,
            mainStyle: main,
            text: tooltipText(),
            latlng,
            iconSize,
            map,
            ctx,
        });
    }

    return (
        <>
            {selectedObj && (
                <Modal
                    open={modalIsOpen}
                    onClose={closeModal}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            border: '1px solid #000',
                            boxShadow: 24,
                            p: 4,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                        }}
                    >
                        <IconButton
                            variant="contained"
                            type="button"
                            sx={{ top: 0, right: 0, position: 'absolute' }}
                            onClick={closeModal}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Box>
                            <img src={getPhotoUrl({ photo: selectedObj })} alt="Selected" />
                        </Box>
                        <Box sx={{ marginTop: 2 }}>
                            <Table size="small" aria-label="properties table">
                                <TableBody>
                                    {Object.entries(selectedObj.properties).map(([key, value]) => (
                                        <TableRow key={key}>
                                            <TableCell component="th" scope="row">
                                                {key == null ? 'N/A' : key.toString()}
                                            </TableCell>
                                            <TableCell align="right">
                                                {value == null ? 'N/A' : value.toString()}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Box>
                </Modal>
            )}
        </>
    );
}

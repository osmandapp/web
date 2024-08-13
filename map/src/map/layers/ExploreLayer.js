import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import AppContext, { OBJECT_EXPLORE } from '../../context/AppContext';
import { useMap } from 'react-leaflet';
import { apiGet } from '../../util/HttpApi';
import { WIKI_IMAGE_BASE_URL } from '../../manager/SearchManager';
import L from 'leaflet';
import styles from '../../menu/search/search.module.css';
import 'leaflet-spin';
import { Box, IconButton, Modal, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import 'leaflet.markercluster';
import { useTranslation } from 'react-i18next';
import { areSetsEqual } from '../../util/Utils';
import { debouncer } from '../../context/TracksRoutingCache';
import { EXPLORE_BIG_ICON_SIZE, clusterMarkers } from '../util/Clusterizer';

export default function ExploreLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const GET_OBJ_DEBOUNCE_MS = 500;

    const timerRef = useRef(null);

    const filtersRef = useRef(null);
    const openedPoiRef = useRef(null);

    const { i18n } = useTranslation();

    const tooltipRef = useRef(null);
    const mainIconsLayerRef = useRef(null);
    const otherIconsLayerRef = useRef(null);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedObj, setSelectedObj] = useState(null);
    const pointerRef = useRef(null);

    useEffect(() => {
        if (ctx.selectedPoiId?.id) {
            let foundMarker = null;
            // Search for the marker in the main icons layer
            mainIconsLayerRef?.current?.eachLayer((layer) => {
                if (layer.options.id === ctx.selectedPoiId.id) {
                    foundMarker = layer;
                }
            });
            // If not found, search in the other icons layer
            if (!foundMarker) {
                otherIconsLayerRef?.current?.eachLayer((layer) => {
                    if (layer.options.id === ctx.selectedPoiId.id) {
                        foundMarker = layer;
                    }
                });
            }
            if (foundMarker) {
                if (ctx.selectedPoiId.show) {
                    foundMarker.fire('selectMarker'); // Show the selected marker
                } else {
                    foundMarker.fire('mouseout'); // Hide the marker
                }
            }
        }
    }, [ctx.selectedPoiId]);

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
        removeTooltip();
    }

    useEffect(() => {
        const item = ctx.searchSettings.getPoi;
        async function getWikiPoi() {
            const response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/search/get-poi-by-osmid`, {
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
        if (!ignore) {
            if (settings?.selectedFilters?.size === 0) {
                ctx.setWikiPlaces(null);
                return;
            }
            setLoadingContextMenu(true);
            const bbox = map.getBounds();
            const api = settings?.useWikiImages ? 'get-wiki-images' : 'get-wiki-data';
            const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/routing/search/${api}`, {
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
                console.error(`Places not found`);
            }
            setLoadingContextMenu(false);
            removeTooltip();
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

    function updateMarkerZIndex(layerGroup, zIndex) {
        layerGroup.eachLayer((layer) => {
            if (layer instanceof L.Marker) {
                layer.setZIndexOffset(zIndex);
            }
        });
    }

    useEffect(() => {
        if (ctx.wikiPlaces) {
            const zoom = map.getZoom();
            const center = map.getCenter();
            const latitude = center.lat;
            const geoJsonData = createGeoJsonData(ctx.wikiPlaces);
            const { mainMarkers, secondaryMarkers } = clusterMarkers({
                places: geoJsonData.features,
                zoom,
                latitude,
            });

            let simpleMarkersArr = new L.geoJSON();
            let largeMarkersArr = new L.geoJSON();

            const markerPromises = mainMarkers.map((place) => {
                const latlng = L.latLng(place.geometry.coordinates[1], place.geometry.coordinates[0]);
                const imgTag = ctx.searchSettings.useWikiImages
                    ? place.properties.imageTitle
                    : place.properties.photoTitle;
                const iconUrl = `${WIKI_IMAGE_BASE_URL}${imgTag}?width=200`;
                const iconSize = [EXPLORE_BIG_ICON_SIZE, EXPLORE_BIG_ICON_SIZE];

                return new Promise((resolve) => {
                    const image = new Image();
                    image.onload = () => {
                        const icon = L.icon({
                            iconUrl,
                            iconSize,
                            className: `${styles.wikiIconLarge} ${styles.wikiIcon}`,
                        });
                        const marker = L.marker(latlng, {
                            icon,
                            index: place.index,
                            id: place.properties.id,
                        });
                        addEventListeners({ marker, place, main: true, iconSize, latlng });
                        largeMarkersArr.addLayer(marker);
                        resolve();
                    };
                    image.onerror = () => {
                        const circle = L.circleMarker(latlng, {
                            id: place.properties.id,
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

            Promise.all(markerPromises).then(() => {
                for (const place of secondaryMarkers) {
                    const latlng = L.latLng(place.geometry.coordinates[1], place.geometry.coordinates[0]);
                    const circle = L.circleMarker(latlng, {
                        id: place.properties.id,
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

                otherIconsLayerRef.current = addLayers(otherIconsLayerRef.current, simpleMarkersArr);
                mainIconsLayerRef.current = addLayers(mainIconsLayerRef.current, largeMarkersArr);
                updateMarkerZIndex(mainIconsLayerRef.current, 2000);
            });
        }
    }, [ctx.wikiPlaces]);

    function addEventListeners({ marker, place, main = false, latlng, iconSize = [10, 10] }) {
        // Add click event to open information about the place
        marker.on('click', () => {
            openInfo(place);
        });

        map.on('zoomend', () => {
            removeTooltip();
        });

        // Add custom event to handle marker selection
        marker.on('selectMarker', () => {
            removeTooltip();
            if (pointerRef.current) {
                if (map?.hasLayer(pointerRef.current)) {
                    map.removeLayer(pointerRef.current);
                }
                pointerRef.current = null;
            }
            let newMarker;
            if (main) {
                newMarker = new L.Marker(latlng, {
                    icon: L.divIcon({
                        className: `${styles.wikiIconHover} ${styles.wikiIconLarge}`,
                        iconSize,
                    }),
                });
                newMarker.options.icon.options.className = `${styles.wikiIconHover} ${styles.wikiIconLarge}`;
                pointerRef.current = newMarker.addTo(map);
            } else {
                newMarker = L.circleMarker(latlng, {
                    id: place.properties.id,
                    fillOpacity: 0.9,
                    radius: 5,
                    color: '#ffffff',
                    fillColor: '#237bff',
                    weight: 1,
                    zIndex: 1000,
                });
            }
            pointerRef.current = newMarker.addTo(map);
        });

        // Add mouseover event to highlight the marker
        marker.on('mouseover', () => {
            removeTooltip();
            ctx.setSelectedPoiId({ id: marker.options.id });
            if (!main) {
                marker.setStyle({
                    fillColor: '#237bff',
                });
            }
            if (place.properties.wikiTitle && place.properties.wikiTitle !== '') {
                const offset = main ? [iconSize[1] / 10, iconSize[1] * 0.8] : [0, iconSize[1] * 0.8];
                const title = place.properties.wikiTitle;
                const shortTitle = title.length > 50 ? title.substring(0, 50) + '...' : title;

                tooltipRef.current = L.tooltip({
                    permanent: true,
                    direction: 'bottom',
                    offset: offset,
                    className: styles.tooltip,
                })
                    .setContent(shortTitle)
                    .setLatLng(latlng);
                map.addLayer(tooltipRef.current);
            }
        });

        // Add mouseout event to reset marker style and remove pointer
        marker.on('mouseout', (event) => {
            if (event.originalEvent) {
                removeTooltip();
                ctx.setSelectedPoiId({ id: -1 });
                if (!main) {
                    marker.setStyle({
                        fillColor: '#fe8800',
                    });
                }
            }
            if (pointerRef.current) {
                if (map?.hasLayer(pointerRef.current)) {
                    removeTooltip();
                    map.removeLayer(pointerRef.current);
                }
                pointerRef.current = null;
            }
        });
    }

    function removeTooltip() {
        if (tooltipRef.current && map.hasLayer(tooltipRef.current)) {
            map.removeLayer(tooltipRef.current);
            tooltipRef.current = null;
        }
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
                            <img
                                src={`${WIKI_IMAGE_BASE_URL}${selectedObj.properties.imageTitle}?width=300`}
                                alt="Selected"
                            />
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

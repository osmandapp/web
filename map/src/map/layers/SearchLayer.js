import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import AppContext, { OBJECT_SEARCH } from '../../context/AppContext';
import { useMap } from 'react-leaflet';
import { apiGet } from '../../util/HttpApi';
import { WIKI_IMAGE_BASE_URL } from '../../manager/SearchManager';
import L from 'leaflet';
import styles from '../../menu/search/search.module.css';
import 'leaflet-spin';
import _ from 'lodash';
import { Box, IconButton, Modal, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import 'leaflet.markercluster';
import { useTranslation } from 'react-i18next';
import { areSetsEqual } from '../../util/Utils';

export default function SearchLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const filtersRef = useRef(null);
    const openedPoiRef = useRef(null);

    const { i18n } = useTranslation();

    const mainIconsLayerRef = useRef(null);
    const otherIconsLayerRef = useRef(null);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedObj, setSelectedObj] = useState(null);

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
    }

    useEffect(() => {
        const item = ctx.searchSettings.getPoi;
        async function getWikiPoi() {
            const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/routing/search/get-poi-by-osmid`, {
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
                ctx.setSearchSettings({ ...ctx.searchSettings, getPoi: null });
                console.error(`Poi not found. Maybe it has wrong osmid: ${item.properties?.osmid}`);
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
        const loadingContextMenu = ctx.loadingContextMenu;

        const onMapMoveEnd = async () => {
            if (
                ctx.searchSettings.useWikiImages ||
                (ctx.currentObjectType === OBJECT_SEARCH && (mainIconsLayerRef.current || otherIconsLayerRef.current))
            ) {
                debouncedGetPlaces({ controller, ignore, settings, loadingContextMenu });
            }
        };
        map.on('moveend', onMapMoveEnd);

        if (ctx.currentObjectType === OBJECT_SEARCH || ctx.searchSettings.useWikiImages) {
            if (
                !ctx.searchSettings.selectedFilters ||
                !areSetsEqual(filtersRef.current, ctx.searchSettings.selectedFilters) ||
                !ctx.wikiPlaces
            ) {
                filtersRef.current = ctx.searchSettings.selectedFilters;
                removeLayers();
                debouncedGetPlaces({ controller, ignore, settings, loadingContextMenu });
            }
        }

        if (!ctx.searchSettings.useWikiImages && ctx.currentObjectType !== OBJECT_SEARCH) {
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
        ctx.loadingContextMenu,
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
    const debouncedGetPlaces = useRef(
        _.debounce(async ({ controller, ignore, settings, loadingContextMenu }) => {
            if (!ignore) {
                if (settings?.selectedFilters?.size === 0) {
                    ctx.setWikiPlaces(null);
                    return;
                }
                if (!loadingContextMenu) {
                    map.spin(true, { color: '#1976d2' });
                }
                let bbox = map.getBounds();
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
                map.spin(false);
            }
        }, 500)
    ).current;

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
        if (ctx.wikiPlaces) {
            let markerPromises = [];
            let simpleMarkersArr = new L.geoJSON();
            let geoJsonData = createGeoJsonData(ctx.wikiPlaces);
            L.geoJSON(geoJsonData, {
                pointToLayer: (feature, latlng) => {
                    const imgTag = ctx.searchSettings.useWikiImages
                        ? feature.properties.imageTitle
                        : feature.properties.photoTitle;
                    const iconUrl = `${WIKI_IMAGE_BASE_URL}${imgTag}?width=300`;
                    const iconSize = feature.index < 100 ? [46, 46] : null;
                    if (!iconSize) {
                        const circle = L.circleMarker(latlng, {
                            id: feature.properties.id,
                            fillOpacity: 0.9,
                            radius: 5,
                            color: '#ffffff',
                            fillColor: '#fe8800',
                            weight: 1,
                            zIndex: 1000,
                        });
                        circle.on('click', () => {
                            openInfo(feature);
                        });
                        simpleMarkersArr.addLayer(circle);
                    } else {
                        let markerPromise = new Promise((resolve) => {
                            const image = new Image();
                            image.onload = () => {
                                const icon = L.icon({
                                    iconUrl,
                                    iconSize,
                                    className: `${iconSize[0] === 46 ? styles.wikiIconLarge : styles.wikiIconSmall} ${styles.wikiIcon}`,
                                });
                                const marker = L.marker(latlng, {
                                    icon,
                                    index: feature.index,
                                    id: feature.properties.id,
                                });
                                marker.on('click', () => {
                                    openInfo(feature);
                                });
                                markerClusterGroup.addLayer(marker);
                                resolve();
                            };
                            image.onerror = () => {
                                const circle = L.circleMarker(latlng, {
                                    id: feature.properties.id,
                                    fillOpacity: 0.9,
                                    radius: 5,
                                    color: '#ffffff',
                                    fillColor: '#fe8800',
                                    weight: 1,
                                    zIndex: 1000,
                                });
                                circle.on('click', () => {
                                    openInfo(feature);
                                });
                                markerClusterGroup.addLayer(circle);
                                resolve();
                            };
                            image.src = iconUrl;
                        });
                        markerPromises.push(markerPromise);
                    }
                },
            });
            Promise.all(markerPromises).then(() => {
                otherIconsLayerRef.current = addLayers(otherIconsLayerRef.current, simpleMarkersArr);
                mainIconsLayerRef.current = addLayers(mainIconsLayerRef.current, markerClusterGroup);
            });
        }
    }, [ctx.wikiPlaces]);

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

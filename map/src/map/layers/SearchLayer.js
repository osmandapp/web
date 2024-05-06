import { useContext, useEffect, useRef } from 'react';
import AppContext, { OBJECT_SEARCH } from '../../context/AppContext';
import { useMap } from 'react-leaflet';
import { apiGet } from '../../util/HttpApi';
import { WIKI_IMAGE_BASE_URL } from '../../manager/SearchManager';
import L from 'leaflet';
import styles from '../../menu/search/search.module.css';
import 'leaflet-spin';
import _ from 'lodash';
import { renderToStaticMarkup } from 'react-dom/server';
import { Paper, Table, TableBody, TableCell, TableRow } from '@mui/material';
import 'leaflet.markercluster';

export default function SearchLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();
    const geoJsonLayerRef = useRef(null);
    const otherIconsLayerRef = useRef(null);

    function removeLayers() {
        if (geoJsonLayerRef.current) {
            geoJsonLayerRef.current.clearLayers();
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
        let ignore = false;
        let controller = new AbortController();
        const settings = ctx.searchSettings;

        const onMapMoveEnd = async () => {
            if (ctx.currentObjectType === OBJECT_SEARCH && (geoJsonLayerRef.current || otherIconsLayerRef.current)) {
                debouncedGetPlaces({ controller, ignore, settings });
            }
        };

        map.on('moveend', onMapMoveEnd);

        if (ctx.currentObjectType === OBJECT_SEARCH) {
            removeLayers();
            debouncedGetPlaces({ controller, ignore, settings });
        }

        return () => {
            ignore = true;
            controller.abort();
            map.off('moveend', onMapMoveEnd);
        };
    }, [ctx.currentObjectType, ctx.searchSettings.useWikiImages, ctx.searchSettings.selectedFilters]);

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
        _.debounce(async ({ controller, ignore, settings }) => {
            if (!ignore) {
                if (settings.selectedFilters.size === 0) {
                    ctx.setWikiPlaces(null);
                    return;
                }
                map.spin(true, { color: '#1976d2' });
                let bbox = map.getBounds();
                const api = settings.useWikiImages ? 'get-wiki-images' : 'get-wiki-data';
                const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/routing/search/${api}`, {
                    apiCache: true,
                    params: {
                        northWest: `${bbox.getNorthWest().lat},${bbox.getNorthWest().lng}`,
                        southEast: `${bbox.getSouthEast().lat},${bbox.getSouthEast().lng}`,
                        filters: [...settings.selectedFilters],
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
        }, 1000)
    ).current;

    function openInfo(feature) {
        console.log(feature);
    }

    function addPopup(feature, markers) {
        const popupContent = renderToStaticMarkup(<PopupContent properties={feature.properties} />);
        const popupOptions = {
            closeButton: true,
            autoClose: true,
            closeOnClick: false,
        };

        if (markers.length !== 0) {
            markers.forEach((marker) => {
                marker.bindPopup(popupContent, popupOptions);
            });
        }
    }

    function PopupContent({ properties }) {
        return (
            <Paper elevation={3} style={{ maxHeight: '150px', overflowY: 'auto' }}>
                <Table size="small" aria-label="properties table">
                    <TableBody>
                        {Object.entries(properties).map(([key, value]) => (
                            <TableRow key={key}>
                                <TableCell component="th" scope="row">
                                    {key == null ? 'N/A' : key.toString()}
                                </TableCell>
                                <TableCell align="right">{value == null ? 'N/A' : value.toString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
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

    markerClusterGroup.on('clusterclick', function (cluster) {
        const markers = cluster.layer.getAllChildMarkers();
        if (markers.length > 0) {
            markers[0].fire('click');
        }
    });

    function createGeoJsonData(places) {
        const sortedPlaces = [...places].sort((a, b) => b.properties.rowNum - a.properties.rowNum);
        return {
            type: 'FeatureCollection',
            features: sortedPlaces.map((place, index) => ({
                type: 'Feature',
                properties: { ...place.properties },
                index,
                geometry: {
                    type: 'Point',
                    coordinates: [place.geometry.coordinates[0], place.geometry.coordinates[1]],
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
                        addPopup(feature, [circle]);
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
                                addPopup(feature, [marker]);
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
                                addPopup(feature, [circle]);
                                markerClusterGroup.addLayer(circle);
                                resolve();
                            };
                            image.src = iconUrl;
                        });
                        markerPromises.push(markerPromise);
                    }
                },
            });
            otherIconsLayerRef.current = addLayers(otherIconsLayerRef.current, simpleMarkersArr);
            Promise.all(markerPromises).then(() => {
                geoJsonLayerRef.current = addLayers(geoJsonLayerRef.current, markerClusterGroup);
            });
        }
    }, [ctx.wikiPlaces]);
}

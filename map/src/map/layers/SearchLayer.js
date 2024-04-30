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

export default function SearchLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();
    const geoJsonLayerRef = useRef(null);

    useEffect(() => {
        let ignore = false;
        let controller = new AbortController();
        const settings = ctx.searchSettings;

        const onMapMoveEnd = async () => {
            if (ctx.currentObjectType === OBJECT_SEARCH && geoJsonLayerRef.current) {
                if (geoJsonLayerRef.current) {
                    geoJsonLayerRef.current.clearLayers();
                }
                debouncedGetPlaces({ controller, ignore, settings });
            }
        };

        map.on('moveend', onMapMoveEnd);

        if (ctx.currentObjectType === OBJECT_SEARCH) {
            if (geoJsonLayerRef.current) {
                geoJsonLayerRef.current.clearLayers();
            }
            debouncedGetPlaces({ controller, ignore, settings });
        }

        return () => {
            ignore = true;
            controller.abort();
            map.off('moveend', onMapMoveEnd);
        };
    }, [ctx.currentObjectType, ctx.searchSettings.useWikiImages]);

    const debouncedGetPlaces = useRef(
        _.debounce(async ({ controller, ignore, settings }) => {
            if (!ignore) {
                map.spin(true, { color: '#1976d2' });
                let bbox = map.getBounds();
                const api = settings.useWikiImages ? 'get-wiki-images' : 'get-wiki-data';
                const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/routing/search/${api}`, {
                    apiCache: true,
                    params: {
                        northWest: `${bbox.getNorthWest().lat},${bbox.getNorthWest().lng}`,
                        southEast: `${bbox.getSouthEast().lat},${bbox.getSouthEast().lng}`,
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

    useEffect(() => {
        if (ctx.wikiPlaces) {
            const sortedPlaces = [...ctx.wikiPlaces].sort((a, b) => b.properties.qrank - a.properties.qrank);
            const geoJsonData = {
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

            const geoJsonLayer = L.geoJSON(geoJsonData, {
                pointToLayer: (feature, latlng) => {
                    const imgTag = ctx.searchSettings.useWikiImages
                        ? feature.properties.imageTitle
                        : feature.properties.photoTitle;
                    const iconUrl = `${WIKI_IMAGE_BASE_URL}${imgTag}`;

                    const image = new Image();
                    const layerGroup = L.layerGroup();

                    image.onload = () => {
                        const iconSize = feature.index < 20 ? [46, 46] : [24, 24];
                        const icon = L.icon({
                            iconUrl,
                            iconSize,
                            className: `${iconSize[0] === 46 ? styles.wikiIconLarge : styles.wikiIconSmall} ${styles.wikiIcon}`,
                        });
                        const marker = L.marker(latlng, { icon });
                        marker.on('click', () => {
                            openInfo(feature);
                        });
                        marker.addTo(layerGroup);
                        addPopup(feature, [marker]);
                    };
                    image.onerror = () => {
                        const circle = L.circle(latlng, {
                            color: '#fe8800',
                            fillOpacity: 0.5,
                            radius: 100,
                        });
                        addPopup(feature, [circle]);
                        circle.addTo(layerGroup);
                    };
                    image.src = iconUrl;

                    return layerGroup;
                },
            });
            geoJsonLayerRef.current = geoJsonLayer;
            geoJsonLayer.addTo(map);
        }
    }, [ctx.wikiPlaces]);
}

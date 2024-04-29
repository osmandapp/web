import { useContext, useEffect, useRef } from 'react';
import AppContext, { OBJECT_SEARCH } from '../../context/AppContext';
import { useMap } from 'react-leaflet';
import { apiGet } from '../../util/HttpApi';
import { WIKI_IMAGE_BASE_URL } from '../../manager/SearchManager';
import L from 'leaflet';
import styles from '../../menu/search/search.module.css';
import 'leaflet-spin';
import _ from 'lodash';

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
    }, [ctx.currentObjectType, ctx.searchSettings.useCommonsGeoTags]);

    const debouncedGetPlaces = useRef(
        _.debounce(async ({ controller, ignore, settings }) => {
            if (!ignore) {
                map.spin(true, { color: '#1976d2' });
                let bbox = map.getBounds();
                const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/routing/search/get-wiki-data`, {
                    apiCache: true,
                    params: {
                        northWest: `${bbox.getNorthWest().lat},${bbox.getNorthWest().lng}`,
                        southEast: `${bbox.getSouthEast().lat},${bbox.getSouthEast().lng}`,
                        useCommonsGeoTags: settings.useCommonsGeoTags ?? false,
                    },
                    signal: controller.signal,
                });
                if (response?.data) {
                    const res = response.data;
                    let jsonData = [];
                    try {
                        jsonData = res.map((item) => JSON.parse(item));
                    } catch (error) {
                        console.error('Error parsing JSON data: ', res);
                    }
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
                    const iconUrl = `${WIKI_IMAGE_BASE_URL}${feature.properties.imageTitle}`;

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
                    };
                    image.onerror = () => {
                        console.error('Error loading image for marker:', iconUrl);
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

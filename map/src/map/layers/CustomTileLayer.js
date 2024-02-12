import { useMap } from 'react-leaflet';
import { useContext, useEffect } from 'react';
import L from 'leaflet';
import AppContext from '../../context/AppContext';
import 'leaflet.vectorgrid';
import MarkerOptions, { SHIELDS_FOLDER } from '../markers/MarkerOptions';
import { DYNAMIC_RENDERING, VECTOR_GRID } from '../../menu/configuremap/ConfigureMap';
import { apiGet } from '../../util/HttpApi';
import styles from './map.module.css';

export function CustomTileLayer({ ...props }) {
    const map = useMap();
    const ctx = useContext(AppContext);

    async function prepareGeoJsonData(data) {
        const dataArray = data.features;

        if (!Array.isArray(dataArray) || dataArray.length === 0) {
            console.log('Invalid input: expected a non-empty array of GeoJSON objects');
            return null;
        }

        let res = [];

        for (const obj of dataArray) {
            res = getPointsIcons(res, obj);
        }
        return { ...data, features: res };
    }

    function getPointsIcons(res, obj) {
        if (obj.geometry.type === 'point' && obj?.mainIcon !== '' && obj?.iconX && obj?.iconY) {
            let coordinates = [obj.iconX, obj.iconY];
            res.push({
                type: 'Feature',
                properties: {
                    id: obj.id,
                    iconSize: obj.iconSize,
                    shield: obj.shield,
                    mainIcon: obj.mainIcon,
                    iconUrl: `/map/images/${MarkerOptions.POI_ICONS_FOLDER}/mx_${obj.mainIcon}.svg`,
                },
                geometry: {
                    type: 'Point',
                    coordinates: coordinates,
                },
            });
        }
        return res;
    }

    function getIconStyle(properties) {
        let customIcon = new L.icon({
            iconUrl: properties.iconUrl,
            iconSize: [15, 15],
            iconAnchor: [8.5, 8.5],
        });
        return {
            icon: customIcon,
            radius: 15,
        };
    }

    function createIconLayerGroup(feature, latlng) {
        const createMarker = (iconUrl, iconSize, offset = [0, 0]) => {
            const icon = L.icon({
                iconUrl,
                iconSize,
                iconAnchor: [iconSize[0] / 2, iconSize[1] / 2],
                className: offset[0] !== 0 || offset[1] !== 0 ? styles.frontIcon : '',
            });

            const marker = L.marker(latlng, { icon });
            marker.on('click', () => console.log('Clicked on', feature));
            return marker;
        };

        const markers = [];

        if (feature.properties.shield) {
            const backIconUrl = `/map/images/${SHIELDS_FOLDER}/h_${feature.properties.shield}.svg`;
            markers.push(createMarker(backIconUrl, [20, 20]));
        }

        const frontIconUrl = `/map/images/${MarkerOptions.POI_ICONS_FOLDER}/mx_${feature.properties.mainIcon}.svg`;
        markers.push(createMarker(frontIconUrl, [12, 12], [0, 0]));

        return L.layerGroup(markers);
    }

    function addGeoJsonLayer(geoJsonData) {
        if (geoJsonData && map) {
            return L.geoJson(geoJsonData, {
                pointToLayer: function (feature, latlng) {
                    return createIconLayerGroup(feature, latlng);
                },
            }).addTo(map);
        }
    }

    function addVectorGrid(geoJsonData) {
        if (geoJsonData && map) {
            let vectorGridLayer = L.vectorGrid.slicer(geoJsonData, {
                rendererFactory: L.svg.tile,
                vectorTileLayerStyles: {
                    sliced: getIconStyle,
                },
                maxZoom: 22,
                indexMaxZoom: 5,
                interactive: true,
                getFeatureId: function (feature) {
                    return feature.properties['id'];
                },
            });

            vectorGridLayer.on('click', (e) => {
                let properties = e.layer.properties;
                console.log('Clicked on', properties['id']);
                let style = {
                    icon: L.icon({
                        iconUrl: properties.iconUrl,
                        iconSize: [12, 12],
                    }),
                };
                vectorGridLayer.setFeatureStyle(properties['id'], style);
            });

            vectorGridLayer.addTo(map);

            return () => {
                map.removeLayer(vectorGridLayer);
            };
        }
    }

    useEffect(() => {
        const rasterTileLayer = L.tileLayer(ctx.tileURL.url, props).addTo(map);
        let dataLayers = [];

        const removeDataLayers = (dataLayers) => {
            if (dataLayers.length > 0) {
                dataLayers.forEach((layer) => {
                    map.removeLayer(layer);
                });
            }
        };

        map.on('zoomstart', () => {
            removeDataLayers(dataLayers);
            dataLayers = [];
        });

        rasterTileLayer.on('tileload', async function (e) {
            if (ctx.tileURL.infoUrl === undefined || !ctx.renderingType) return;

            const { z, x, y } = e.coords;

            const geoJsonUrl = ctx.tileURL.infoUrl.replace('{z}', z).replace('{x}', x).replace('{y}', y);
            const response = await apiGet(geoJsonUrl, {});
            if (response.ok) {
                const geoJsonData = await response.json();
                const preparedGeoJsonData = await prepareGeoJsonData(geoJsonData);
                if (preparedGeoJsonData) {
                    if (ctx.renderingType === DYNAMIC_RENDERING) {
                        dataLayers.push(addGeoJsonLayer(preparedGeoJsonData));
                    } else if (ctx.renderingType === VECTOR_GRID) {
                        addVectorGrid(preparedGeoJsonData);
                    }
                }
            }
        });

        return () => {
            map.removeLayer(rasterTileLayer);
        };
    }, [ctx.tileURL.url, props]);
}

import { useMap } from 'react-leaflet';
import { useContext, useEffect } from 'react';
import L from 'leaflet';
import AppContext from '../../context/AppContext';
import 'leaflet.vectorgrid';
import MarkerOptions, { SHIELDS_FOLDER } from '../markers/MarkerOptions';
import { DYNAMIC_RENDERING, VECTOR_GRID } from '../../menu/configuremap/ConfigureMap';
import { apiGet } from '../../util/HttpApi';
import styles from './map.module.css';
import { Paper, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { renderToStaticMarkup } from 'react-dom/server';

export const INTERACTIVE_LAYER = 'int';

export function CustomTileLayer({ ...props }) {
    const map = useMap();
    const ctx = useContext(AppContext);

    async function prepareGeoJsonData(data) {
        const dataArray = data.features;
        if (!Array.isArray(dataArray) || dataArray.length === 0) {
            return null;
        }

        let res = [];

        for (const obj of dataArray) {
            res = getGeoJson(res, obj);
        }
        return { ...data, features: res };
    }

    function getGeoJson(res, obj) {
        let geoJson;
        if (obj.geometry.type === 'point') {
            geoJson = getPoint(obj);
        } else if (obj.geometry.type === 'polyline') {
            geoJson = getPolyline(obj);
        }
        if (geoJson) {
            res.push(geoJson);
        }
        return res;
    }

    function getPoint(obj) {
        if (obj?.iconX && obj?.iconY) {
            return {
                type: 'Feature',
                properties: getProperties(obj),
                geometry: {
                    type: 'Point',
                    coordinates: [obj.iconX, obj.iconY],
                },
            };
        }
    }

    function getPolyline(obj) {
        if (obj?.iconX && obj?.iconY) {
            const type = obj.mainIcon !== '' || obj.shield !== '' || obj.shieldRes !== '' ? 'Point' : 'LineString';
            if (type === 'Point') {
                return {
                    type: 'Feature',
                    properties: getProperties(obj),
                    geometry: {
                        type: type,
                        coordinates: [obj.iconX, obj.iconY],
                    },
                };
            } else if (type === 'LineString') {
                return {
                    type: 'Feature',
                    properties: getProperties(obj),
                    geometry: {
                        type: type,
                        coordinates: obj.geometry.coordinates,
                    },
                };
            }
        }
    }

    function getProperties(obj) {
        return {
            id: obj.id,
            iconSize: obj.iconSize,
            shield: obj.shield !== '' ? obj.shield : null,
            shieldRes: obj.shieldRes !== '' ? obj.shieldRes : null,
            mainIcon: obj.mainIcon !== '' ? obj.mainIcon : null,
            text: obj.text,
            textColor: convertDecimalToHex(obj.textColor),
            textShadow: obj.textShadow,
            textShadowColor: convertDecimalToHex(obj.textShadowColor),
            textSize: obj.textSize,
            bold: obj.bold,
            italic: obj.italic,
            iconUrl:
                obj.mainIcon !== '' ? `/map/images/${MarkerOptions.POI_ICONS_FOLDER}/mx_${obj.mainIcon}.svg` : null,
        };
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

    function createIconLayerGroup(feature, latlng) {
        const createMarker = (iconUrl, iconSize, offset = [0, 0]) => {
            const icon = L.icon({
                iconUrl,
                iconSize,
                iconAnchor: [iconSize[0] / 2, iconSize[1] / 2],
                className: offset[0] !== 0 || offset[1] !== 0 ? styles.frontIcon : '',
            });

            return L.marker(latlng, { icon });
        };

        const markers = [];

        if (feature.properties.shield) {
            const backIconUrl = `/map/images/${SHIELDS_FOLDER}/h_${feature.properties.shield}.svg`;
            markers.push(createMarker(backIconUrl, [20, 20]));
        }

        const frontIconUrl = `/map/images/${MarkerOptions.POI_ICONS_FOLDER}/mx_${feature.properties.mainIcon}.svg`;
        markers.push(createMarker(frontIconUrl, [12, 12], [0, 0]));

        addPopup(feature, markers);

        return L.layerGroup(markers);
    }

    function createTextLayerGroup(feature, latlng) {
        const splitTextIntoLines = (text, maxLineLength = 15) => {
            if (text.length > maxLineLength) {
                const words = text.split(' ');
                let lines = [''];
                let currentLineIndex = 0;

                words.forEach((word) => {
                    if ((lines[currentLineIndex] + word + ' ').length <= maxLineLength) {
                        lines[currentLineIndex] += `${word} `;
                    } else {
                        lines.push(`${word} `);
                        currentLineIndex++;
                    }
                });

                return lines;
            } else {
                return [text];
            }
        };

        function getIconPadding() {
            if (feature.properties.mainIcon !== null) {
                if (feature.properties.mainIcon.includes('_dot')) {
                    return [0, 0];
                }
                return [0, -5];
            }
            return [6, 9];
        }

        const createTextMarker = ({
            text,
            color = 'black',
            fontSize = '12',
            fontFamily = 'Arial',
            textShadow = 0,
            textShadowColor,
            bold = false,
            italic = false,
        }) => {
            const lines = splitTextIntoLines(text);
            const textShadowWeight = textShadow > 0 ? 1 : 0;
            const shieldedLines = lines.map((line) => {
                const style = `color: ${color}; text-shadow: ${textShadowWeight}px ${textShadowWeight}px 0px ${textShadowColor}; font-size: ${fontSize}px; font-family: ${fontFamily}; font-weight: ${bold ? 'bold' : 'normal'}; font-style: ${italic ? 'italic' : 'normal'}; white-space: nowrap;`;
                return `<span class="shield" style="${style}">${line}</span>`;
            });
            const divStyle = `display: flex; flex-direction: column; justify-content: center; align-items: center;`;
            const iconHtml = `<div style="${divStyle}">${shieldedLines.join('')}</div>`;
            const icon = L.divIcon({
                className: 'custom-text-icon',
                html: iconHtml,
                iconAnchor: getIconPadding(),
            });

            return new L.Marker(latlng, { icon, zIndexOffset: 1000 });
        };

        const markers = [];

        if (feature.geometry.type === 'Point' && feature.properties.text) {
            const textMarker = createTextMarker({
                text: feature.properties.text,
                color: feature.properties.textColor,
                fontSize: feature.properties.textSize / 2,
                fontFamily: feature.properties.fontFamily,
                textShadow: feature.properties.textShadow,
                textShadowColor: feature.properties.textShadowColor,
                bold: feature.properties.bold,
                italic: feature.properties.italic,
            });
            markers.push(textMarker);
        }

        addPopup(feature, markers);

        return L.layerGroup(markers);
    }

    function convertDecimalToHex(decimal) {
        let color = decimal >>> 0;
        let alpha = (color >> 24) & 0xff;
        let red = (color >> 16) & 0xff;
        let green = (color >> 8) & 0xff;
        let blue = color & 0xff;

        // Convert to hexadecimal and ensure 2 digits
        red = red.toString(16).padStart(2, '0');
        green = green.toString(16).padStart(2, '0');
        blue = blue.toString(16).padStart(2, '0');
        alpha = alpha.toString(16).padStart(2, '0');

        return `#${red}${green}${blue}${alpha}`;
    }

    function addGeoJsonLayer(geoJsonData) {
        if (geoJsonData && map) {
            return L.geoJson(geoJsonData, {
                pointToLayer: function (feature, latlng) {
                    const layers = [];

                    if (feature.properties.text) {
                        const textLayer = createTextLayerGroup(feature, latlng);
                        layers.push(textLayer);
                    }

                    if (feature.properties.mainIcon) {
                        const iconLayer = createIconLayerGroup(feature, latlng);
                        layers.push(iconLayer);
                    }

                    // case road shield
                    if (feature.properties.shieldRes) {
                        const iconLayer = createShieldLayerGroup(feature, latlng);
                        layers.push(iconLayer);
                    }

                    return L.layerGroup(layers);
                },
            }).addTo(map);
        }
    }

    function createShieldLayerGroup(feature, latlng) {
        const layerGroup = L.layerGroup();

        const createMarker = (iconUrl, layerGroup) => {
            const img = new Image();
            img.onload = () => {
                const iconWidth = img.width;
                const iconHeight = img.height;
                const iconAnchor = [iconWidth / 2, iconHeight / 2];

                const icon = L.icon({
                    iconUrl,
                    iconAnchor,
                });

                L.marker(latlng, { icon }).addTo(layerGroup);
            };
            img.src = iconUrl;
        };

        if (feature.properties.shieldRes) {
            const backIconUrl = `/map/images/${SHIELDS_FOLDER}/h_${feature.properties.shieldRes}.svg`;
            createMarker(backIconUrl, layerGroup);
        }

        return layerGroup;
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
                console.error('Clicked on', properties['id']);
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
            const response = await apiGet(geoJsonUrl, { apiCache: true });
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

        const onMapClick = () => {
            map.closePopup();
        };

        map.on('click', onMapClick);

        return () => {
            removeDataLayers(dataLayers);
            map.removeLayer(rasterTileLayer);
            map.off('click', onMapClick);
        };
    }, [ctx.tileURL.url, props, ctx.renderingType]);
}

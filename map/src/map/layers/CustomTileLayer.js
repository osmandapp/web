import { useMap } from 'react-leaflet';
import { forwardRef, useCallback, useContext, useEffect, useImperativeHandle, useRef } from 'react';
import L from 'leaflet';
import AppContext from '../../context/AppContext';
import 'leaflet.vectorgrid';
import { getIconUrlByName, getShaderUrlByName } from '../markers/MarkerOptions';
import { DYNAMIC_RENDERING } from '../../menu/configuremap/ConfigureMap';
import { apiGet } from '../../util/HttpApi';
import styles from './map.module.css';
import { Paper, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { renderToStaticMarkup } from 'react-dom/server';

export const INTERACTIVE_LAYER = 'int';

const CustomTileLayer = forwardRef((props, ref) => {
    const map = useMap();
    const ctx = useContext(AppContext);

    const rasterTileLayerRef = useRef(null);
    const dataLayersRef = useRef(null);
    const renderingTypeRef = useRef(ctx.renderingType);

    useImperativeHandle(ref, () => ({
        getLeafletLayer: () => rasterTileLayerRef.current,
    }));

    useEffect(() => {
        renderingTypeRef.current = ctx.renderingType;
    }, [ctx.renderingType]);

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
            iconUrl: obj.mainIcon !== '' ? getIconUrlByName('map', obj.mainIcon) : null,
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
            const backIconUrl = getShaderUrlByName(feature.properties.shield);
            markers.push(createMarker(backIconUrl, [20, 20]));
        }

        const frontIconUrl = getIconUrlByName('map', feature.properties.mainIcon);
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
                // icons
                return [0, -5];
            }
            // shields
            return [6, 9];
        }

        const createTextMarker = ({
            text,
            color = 'black',
            fontSize = '12',
            fontFamily = 'Roboto',
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
            const backIconUrl = getShaderUrlByName(feature.properties.shieldRes);
            createMarker(backIconUrl, layerGroup);
        }

        return layerGroup;
    }

    useEffect(() => {
        if (!rasterTileLayerRef.current) {
            rasterTileLayerRef.current = L.tileLayer(ctx.tileURL.url, props).addTo(map);
        } else {
            rasterTileLayerRef.current.setUrl(ctx.tileURL.url);
        }

        const tileChanged =
            dataLayersRef.current && dataLayersRef.current.rasterTileLayer !== rasterTileLayerRef.current;
        const noDataLayers = !renderingTypeRef.current && dataLayersRef?.current?.layers.length > 0;

        if (tileChanged || noDataLayers) {
            removeDataLayers(dataLayersRef.current.layers);
            dataLayersRef.current = { layers: [] };
        }

        map.on('zoomstart', () => {
            if (dataLayersRef.current) {
                removeDataLayers(dataLayersRef.current.layers);
                dataLayersRef.current = { layers: [] };
            }
        });

        rasterTileLayerRef.current.on('tileload', async function (e) {
            if (ctx.tileURL.infoUrl === undefined || !renderingTypeRef.current) return;

            const { z, x, y } = e.coords;

            const geoJsonUrl = ctx.tileURL.infoUrl.replace('{z}', z).replace('{x}', x).replace('{y}', y);
            const response = await apiGet(geoJsonUrl, { apiCache: true });
            if (response.ok) {
                const geoJsonData = await response.json();
                const preparedGeoJsonData = await prepareGeoJsonData(geoJsonData);
                if (preparedGeoJsonData && renderingTypeRef.current === DYNAMIC_RENDERING) {
                    if (!dataLayersRef.current) {
                        dataLayersRef.current = {
                            layers: [],
                        };
                    }
                    dataLayersRef.current.layers.push(addGeoJsonLayer(preparedGeoJsonData));
                    dataLayersRef.current.rasterTileLayer = rasterTileLayerRef.current;
                }
            }
        });

        map.on('click', onMapClick);

        return () => {
            map.off('click', onMapClick);
        };
    }, [ctx.tileURL.url, props, ctx.renderingType]);

    const removeDataLayers = (dataLayers) => {
        if (dataLayers.length > 0) {
            dataLayers.forEach((layer) => {
                map.removeLayer(layer);
            });
        }
    };

    useEffect(() => {
        return () => {
            if (map.hasLayer(rasterTileLayerRef.current)) {
                map.removeLayer(rasterTileLayerRef.current);
            }
            if (dataLayersRef.current && dataLayersRef.current.layers.length > 0) {
                removeDataLayers(dataLayersRef.current.layers);
            }
        };
    }, []);

    const onMapClick = useCallback(() => {
        map.closePopup();
    }, [map]);
});

CustomTileLayer.displayName = 'CustomTileLayer';
export default CustomTileLayer;

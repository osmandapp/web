import React, {useContext, useEffect} from 'react';
import {useMap} from "react-leaflet";
import AppContext from "../../context/AppContext";
import {TileLayer, LayersControl} from "react-leaflet";

function getWeatherTime(weatherDateObj) {
    let h = weatherDateObj.getUTCHours();
    if (h < 10) {
        h = '0' + h;
    }
    let m = weatherDateObj.getUTCMonth() + 1;
    if (m < 10) {
        m = '0' + m;
    }
    let d = weatherDateObj.getUTCDate();
    if (d < 10) {
        d = '0' + d;
    }
    return weatherDateObj.getUTCFullYear() + '' + m + '' + d + "_" + h + "00";
}

const WeatherLayer = () => {
    const map = useMap();
    const ctx = useContext(AppContext);
    useEffect(() => {
        if (map) {
            const enableFunc = updateLayerFunc(ctx.weatherLayers, ctx.updateWeatherLayers, true);
            const disableFunc = updateLayerFunc(ctx.weatherLayers, ctx.updateWeatherLayers, false);
            map.on('overlayadd', enableFunc);
            map.on('overlayremove', disableFunc);
            return () => {
                map.off('overlayadd', enableFunc);
                map.off('overlayremove', disableFunc);
            };
        }
    }, [map, ctx.weatherLayers, ctx.updateWeatherLayers])

    const updateLayerFunc = (layers, updateLayers, enable) => (event) => {
        Object.keys(layers).forEach(type => {
            const ind = layers[type].findIndex(l => l.name === event.name);
            if (ind >= 0) {
                let newlayers = {...layers};
                newlayers[type][ind].checked = enable;
                updateLayers(newlayers);
            }
        })
    }

    useEffect(() => {
        if (map) {
            map.eachLayer((layer) => {
                if (layer.options.tms) {
                    layer.options.time = getWeatherTime(ctx.weatherDate);
                    layer.redraw();
                }
            });
        }
    }, [ctx.weatherDate]);

    return <>
        <LayersControl>
            {ctx.weatherLayers[ctx.weatherType].map((item) => (
                <LayersControl.Overlay name={item.name} checked={item.checked} key={'overlay_' + item.key}>
                    <TileLayer
                        url={item.url}
                        time={getWeatherTime(ctx.weatherDate)}
                        tms={true}
                        minZoom={1}
                        opacity={item.opacity}
                        maxNativeZoom={item.maxNativeZoom}
                        maxZoom={item.maxZoom}
                    />
                </LayersControl.Overlay>
            ))}
        </LayersControl>
    </>;
};

export default WeatherLayer;

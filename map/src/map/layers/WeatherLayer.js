import React, { useContext, useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';
import AppContext from '../../context/AppContext';
import { TileLayer, LayersControl } from 'react-leaflet';

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
    return weatherDateObj.getUTCFullYear() + '' + m + '' + d + '_' + h + '00';
}

const WeatherLayer = () => {
    const map = useMap();
    const ctx = useContext(AppContext);

    const [time, setTime] = useState(null);

    useEffect(() => {
        if (map) {
            map.eachLayer((layer) => {
                if (layer.options.time) {
                    layer.options.time = getWeatherTime(ctx.weatherDate);
                    layer.redraw();
                }
            });
        }
        setTime(getWeatherTime(ctx.weatherDate));
    }, [ctx.weatherDate]);

    return (
        <>
            <LayersControl>
                {Object.keys(ctx.weatherLayers).map((k) => {
                    return ctx.weatherLayers[k].map((item) => (
                        <LayersControl.Overlay
                            name={item.name}
                            checked={item.checked}
                            key={'overlay_' + item.key + time}
                        >
                            <TileLayer
                                url={item.url}
                                time={time}
                                tms={true}
                                minZoom={1}
                                opacity={item.opacity}
                                maxNativeZoom={item.maxNativeZoom}
                                maxZoom={item.maxZoom}
                            />
                        </LayersControl.Overlay>
                    ));
                })}
            </LayersControl>
        </>
    );
};

export default WeatherLayer;

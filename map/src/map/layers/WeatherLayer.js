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
            map.on('zoomend', () => ctx.setMapBbox(map.getBounds()));
            map.on('dragend', () => ctx.setMapBbox(map.getBounds()));
        }
    }, [map]);

    useEffect(() => {
        if (map) {
            map.eachLayer((layer) => {
                if (layer.options?.name?.match(/^weather-/) && layer.options.time) {
                    const newTime = getWeatherTime(ctx.weatherDate);
                    const key = layer.options.name.split('-')[1];
                    map.eachLayer((fade) => {
                        if (fade.options?.name === 'fade-' + key) {
                            const FADE_INTERVAL_MS = 100;
                            let tries = 10; // maximum 1 second

                            const tryFade = () => {
                                if (layer.isLoading() === false || tries === 0) {
                                    if (fade.options.time !== newTime) {
                                        fade.options.time = newTime;
                                        fade.redraw();
                                    }
                                } else {
                                    tries--;
                                    setTimeout(tryFade, FADE_INTERVAL_MS);
                                }
                            };

                            setTimeout(tryFade, FADE_INTERVAL_MS);
                        }
                    });
                    if (layer.options.time !== newTime) {
                        layer.options.time = newTime;
                        layer.redraw();
                    }
                }
            });
        }
        setTime(getWeatherTime(ctx.weatherDate));
    }, [ctx.weatherDate]);

    const opacityDivider = 0.6; // main+fade layers (*0.5 + *0.5) result less opacity than 1 layer *1.0

    return (
        <>
            <LayersControl>
                {Object.keys(ctx.weatherLayers).map((k) => {
                    return ctx.weatherLayers[k].map((item) => (
                        <React.Fragment key={'weather_fader_' + item.key}>
                            <LayersControl.Overlay
                                key={'weather_main_' + item.key + item.checked}
                                checked={item.checked}
                            >
                                <TileLayer
                                    id={'se-weather-l-' + item.key}
                                    name={'weather-' + item.key}
                                    url={item.url}
                                    time={time}
                                    tms={true}
                                    minZoom={1}
                                    opacity={item.opacity * opacityDivider}
                                    maxNativeZoom={item.maxNativeZoom}
                                    maxZoom={item.maxZoom}
                                />
                            </LayersControl.Overlay>
                            <LayersControl.Overlay
                                key={'weather_fade_' + item.key + item.checked}
                                checked={item.checked}
                            >
                                <TileLayer
                                    name={'fade-' + item.key}
                                    url={item.url}
                                    time={time}
                                    tms={true}
                                    minZoom={1}
                                    opacity={item.opacity * opacityDivider}
                                    maxNativeZoom={item.maxNativeZoom}
                                    maxZoom={item.maxZoom}
                                />
                            </LayersControl.Overlay>
                        </React.Fragment>
                    ));
                })}
            </LayersControl>
        </>
    );
};

export default WeatherLayer;

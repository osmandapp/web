import React from 'react';
import { apiGet } from '../util/HttpApi';
import { OBJECT_TYPE_WEATHER } from '../context/AppContext';
import { ReactComponent as TemperatureIcon } from '../assets/icons/ic_action_thermometer.svg';
import { ReactComponent as PressureIcon } from '../assets/icons/ic_action_air_pressure.svg';
import { ReactComponent as WindIcon } from '../assets/icons/ic_action_wind.svg';
import { ReactComponent as CloudIcon } from '../assets/icons/ic_action_clouds.svg';
import { ReactComponent as PrecipitationIcon } from '../assets/icons/ic_action_precipitation.svg';
import styles from '../menu/weather/weather.module.css';
import i18n from '../i18n';

export const GFS_WEATHER_TYPE = 'gfs'; // step 1 hour, after 24 hours after the current time - 3 hours
export const ECWMF_WEATHER_TYPE = 'ecmwf'; // step 3 hour, after 5 days after the current day - 6 hours

function getLayers() {
    let allLayers = {};
    allLayers['gfs'] = getWeatherLayers('gfs');
    allLayers['ecmwf'] = getWeatherLayers('ecmwf');
    return allLayers;
}

function getWeatherDate() {
    // // "20211222_0600"
    const searchParams = new URLSearchParams(window.location.search);
    const weatherDateObj = new Date();
    if (searchParams.get('date')) {
        let weather_date = searchParams.get('date');
        weatherDateObj.setUTCFullYear(parseInt(weather_date.slice(0, 4)));
        weatherDateObj.setUTCMonth(parseInt(weather_date.slice(4, 6)) - 1);
        weatherDateObj.setUTCDate(parseInt(weather_date.slice(6, 8)));
        weatherDateObj.setUTCHours(parseInt(weather_date.slice(9, 11)));
    }
    weatherDateObj.setUTCMinutes(0);
    weatherDateObj.setUTCSeconds(0);
    return weatherDateObj;
}

async function displayWeatherForecast(ctx, setWeatherPoint, weatherType, setLoadingWeatherForecast = null) {
    let lat = 0;
    let lon = 0;
    if (window.location.hash) {
        let spl = window.location.hash.split('/');
        if (spl.length > 1) {
            lon = parseFloat(spl[spl.length - 1]);
            lat = parseFloat(spl[spl.length - 2]);
        }
    }
    setLoadingWeatherForecast && setLoadingWeatherForecast(true);
    let data = { lat: lat, lon: lon };
    const response = await apiGet(
        `${process.env.REACT_APP_WEATHER_API_SITE}/weather-api/point-info?lat=${data.lat}&lon=${data.lon}&weatherType=${weatherType}&week=false`,
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }
    );
    if (response.ok) {
        data.day = await response.json();
    }
    const responseWeek = await apiGet(
        `${process.env.REACT_APP_WEATHER_API_SITE}/weather-api/point-info?lat=${data.lat}&lon=${data.lon}&weatherType=${weatherType}&week=true`,
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }
    );
    if (responseWeek) {
        setLoadingWeatherForecast && setLoadingWeatherForecast(false);
    }
    if (responseWeek.ok) {
        data.week = await responseWeek.json();
    }
    setWeatherPoint(data);
    ctx.setCurrentObjectType(OBJECT_TYPE_WEATHER);
}

export function getWeatherLayers(type) {
    const layers = [
        {
            key: 'temperature',
            name: () => i18n?.t('map_settings_weather_temp'),
            opacity: 0.5,
            icon: <TemperatureIcon className={styles.icon} />,
        },
        {
            key: 'precip',
            name: () => i18n?.t('map_settings_weather_precip'),
            opacity: 0.7,
            icon: <PrecipitationIcon className={styles.icon} />,
        },
        {
            key: 'wind',
            name: () => i18n?.t('map_settings_weather_wind'),
            opacity: 0.6,
            icon: <WindIcon className={styles.icon} />,
        },
        {
            key: 'pressure',
            name: () => i18n?.t('map_settings_weather_air_pressure'),
            opacity: 0.6,
            icon: <PressureIcon className={styles.icon} />,
        },
        {
            key: 'cloud',
            name: () => i18n?.t('map_settings_weather_cloud'),
            opacity: 0.5,
            icon: <CloudIcon className={styles.icon} />,
        },
    ];
    layers.map((item) => {
        item.url = getWeatherUrl(item.key, type);
        item.maxNativeZoom = 3;
        item.maxZoom = 11;
        item.checked = false;

        return item;
    });
    return layers;
}

function getWeatherUrl(layer, type) {
    return `${process.env.REACT_APP_WEATHER_URL}${type}/tiles/${layer}/{time}/{z}/{x}/{y}.png`;
}

const WeatherManager = {
    getLayers,
    getWeatherDate,
    displayWeatherForecast,
};

export default WeatherManager;

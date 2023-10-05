import { Air, Cloud, Compress, Shower, Thermostat } from '@mui/icons-material';
import React from 'react';
import { apiGet } from '../util/HttpApi';
import { OBJECT_TYPE_WEATHER } from '../context/AppContext';

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
    let type = OBJECT_TYPE_WEATHER;
    ctx.setCurrentObjectType(type);
}

function getWeatherLayers(type) {
    const layers = [
        { key: 'temperature', name: 'Temperature', opacity: 0.5, iconComponent: <Thermostat fontSize="small" /> },
        { key: 'pressure', name: 'Pressure', opacity: 0.6, iconComponent: <Compress fontSize="small" /> },
        { key: 'wind', name: 'Wind', opacity: 0.6, iconComponent: <Air fontSize="small" /> },
        { key: 'cloud', name: 'Cloud', opacity: 0.5, iconComponent: <Cloud fontSize="small" /> },
        { key: 'precip', name: 'Precipitation', opacity: 0.7, iconComponent: <Shower fontSize="small" /> },
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

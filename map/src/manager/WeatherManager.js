import React from 'react';
import { ReactComponent as TemperatureIcon } from '../assets/icons/ic_action_thermometer.svg';
import { ReactComponent as PressureIcon } from '../assets/icons/ic_action_air_pressure.svg';
import { ReactComponent as WindIcon } from '../assets/icons/ic_action_wind.svg';
import { ReactComponent as CloudIcon } from '../assets/icons/ic_action_clouds.svg';
import { ReactComponent as PrecipitationIcon } from '../assets/icons/ic_action_precipitation.svg';
import styles from '../menu/weather/weather.module.css';
import i18n from '../i18n';
import { apiGet } from '../util/HttpApi';

export const GFS_WEATHER_TYPE = 'gfs'; // step 1 hour, after 24 hours after the current time - 3 hours
export const ECWMF_WEATHER_TYPE = 'ecmwf'; // step 3 hour, after 5 days after the current day - 6 hours

export const MIN_WEATHER_DAYS = -2;
export const MAX_WEATHER_DAYS = +7;
export const LOCAL_STORAGE_WEATHER_LOC = 'weatherLoc';
export const LOCAL_STORAGE_WEATHER_FORECAST_DAY = 'weatherForecastDay';
export const LOCAL_STORAGE_WEATHER_FORECAST_WEEK = 'weatherForecastWeek';
export const LOCAL_STORAGE_WEATHER_TYPE = 'weatherType';

function getLayers() {
    let allLayers = {};
    allLayers['gfs'] = getWeatherLayers('gfs');
    allLayers['ecmwf'] = getWeatherLayers('ecmwf');
    return allLayers;
}

export function getWeatherLayers(type) {
    const layers = [
        {
            key: 'temperature',
            name: () => i18n?.t('map_settings_weather_temp'),
            opacity: 0.5,
            icon: <TemperatureIcon className={styles.icon} />,
            units: '°C',
            mult: 1,
            fixed: 1,
            index: type === ECWMF_WEATHER_TYPE ? 2 : 3,
            checkValue: (value) => value,
        },
        {
            key: 'precip',
            name: () => i18n?.t('map_settings_weather_precip'),
            opacity: 0.7,
            icon: <PrecipitationIcon className={styles.icon} />,
            units: i18n?.t('weather_precip_mm'),
            mult: 1000 * 1000,
            fixed: 2,
            index: type === ECWMF_WEATHER_TYPE ? 4 : 6,
            checkValue: (value) => value,
        },
        {
            key: 'wind',
            name: () => i18n?.t('map_settings_weather_wind'),
            opacity: 0.6,
            icon: <WindIcon className={styles.icon} />,
            units: i18n?.t('weather_wind_ms'),
            mult: 1,
            fixed: 2,
            index: type === ECWMF_WEATHER_TYPE ? -1 : 5,
            checkValue: (value) => value,
        },
        {
            key: 'pressure',
            name: () => i18n?.t('map_settings_weather_air_pressure'),
            opacity: 0.6,
            icon: <PressureIcon className={styles.icon} />,
            units: i18n?.t('weather_pressure_mmhg'),
            mult: 0.001,
            fixed: 2,
            index: type === ECWMF_WEATHER_TYPE ? 3 : 4,
            checkValue: (value) => value,
        },
        {
            key: 'cloud',
            name: () => i18n?.t('map_settings_weather_cloud'),
            opacity: 0.5,
            icon: <CloudIcon className={styles.icon} />,
            units: '%',
            mult: 1,
            fixed: 2,
            index: type === ECWMF_WEATHER_TYPE ? -1 : 2,
            checkValue: (value) => value,
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

export function updateWeatherTime(ctx, hours) {
    const dt = new Date(ctx.weatherDate.getTime() + hours * 60 * 60 * 1000);
    ctx.setWeatherDate(dt);
}

export function dayFormatter(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return month + day;
}

export function timeFormatter(date) {
    const hours = String(date.getUTCHours()).padStart(2, '0');
    return hours + ':00';
}

export const currentDiffHours = (ctx, weatherDate) =>
    Math.trunc(weatherDate.getTime() / (3600 * 1000)) - Math.trunc(new Date().getTime() / (3600 * 1000));

export function getBaseStep(diffHours, ctx) {
    if (ctx.weatherType === ECWMF_WEATHER_TYPE) {
        return Math.abs(diffHours) + new Date().getUTCHours() >= 120 ? 6 : 3;
    }
    if (ctx.weatherType === GFS_WEATHER_TYPE) {
        return Math.abs(diffHours) >= 24 ? 3 : 1;
    }
    return 0;
}

// align-backward (<0) align-forward (>0) else just align if needed
export function getAlignedStep({ direction = null, weatherDate = null, ctx, diffHours = null, date = null }) {
    if (!weatherDate) {
        weatherDate = ctx.weatherDate;
    }
    if (!diffHours) {
        diffHours = currentDiffHours(ctx, weatherDate);
    }
    if (!date) {
        date = weatherDate;
    }
    const baseStep = getBaseStep(diffHours, ctx);
    const baseStepWithDirection = direction < 0 ? -baseStep : direction > 0 ? +baseStep : 0;
    const newHoursUTC = new Date(date.getTime() + baseStepWithDirection * 3600 * 1000).getUTCHours();
    if (newHoursUTC % baseStep === 0) {
        return baseStepWithDirection;
    }
    const currentHoursUTC = date.getUTCHours();
    return direction < 0 ? -(currentHoursUTC % baseStep) : +(baseStep - (currentHoursUTC % baseStep));
}

export function addShowDetailsFlag(ctx, index) {
    const newWeatherLayers = ctx.weatherLayers[ctx.weatherType].map((layerItem, layerIndex) => {
        if (index === layerIndex) {
            return { ...layerItem, showDetails: true };
        }
        return layerItem;
    });
    ctx.setWeatherLayers({ ...ctx.weatherLayers, [ctx.weatherType]: newWeatherLayers });
}

export function clearShowDetailsFlag(ctx) {
    const newWeatherLayers = ctx.weatherLayers[ctx.weatherType].map((layerItem) => {
        if (layerItem.showDetails) {
            const newLayerItem = { ...layerItem };
            delete newLayerItem.showDetails;
            return newLayerItem;
        }
        return layerItem;
    });
    ctx.setWeatherLayers({ ...ctx.weatherLayers, [ctx.weatherType]: newWeatherLayers });
}

export const fetchDayForecast = async ({ lat, lon, ctx, setDayForecast = null }) => {
    const responseDay = await apiGet(`${process.env.REACT_APP_WEATHER_API_SITE}/weather-api/point-info`, {
        apiCache: true,
        params: {
            lat: lat,
            lon: lon,
            weatherType: ctx.weatherType,
        },
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (responseDay.ok) {
        const forecast = await responseDay.json();
        localStorage.setItem(LOCAL_STORAGE_WEATHER_FORECAST_DAY, JSON.stringify(forecast));
        if (setDayForecast) {
            setDayForecast(forecast);
        }
    }
};

export const fetchWeekForecast = async ({ lat, lon, ctx, setWeekForecast = null }) => {
    const responseWeek = await apiGet(`${process.env.REACT_APP_WEATHER_API_SITE}/weather-api/point-info`, {
        apiCache: true,
        params: {
            lat: lat,
            lon: lon,
            weatherType: ctx.weatherType,
            week: true,
        },
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (responseWeek.ok) {
        const forecast = await responseWeek.json();
        localStorage.setItem(LOCAL_STORAGE_WEATHER_FORECAST_WEEK, JSON.stringify(forecast));
        if (setWeekForecast) {
            setWeekForecast(forecast);
        }
    }
};

export function changedWeatherType(weatherType) {
    if (weatherType) {
        let type = localStorage.getItem(LOCAL_STORAGE_WEATHER_TYPE);
        if (type !== weatherType) {
            localStorage.setItem(LOCAL_STORAGE_WEATHER_TYPE, weatherType);
            return true;
        }
    }
    return false;
}

const WeatherManager = {
    getLayers,
};

export default WeatherManager;

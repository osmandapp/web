import {
    fetchDayForecast,
    fetchWeekForecast,
    LOCAL_STORAGE_WEATHER_FORECAST_DAY,
    LOCAL_STORAGE_WEATHER_FORECAST_WEEK,
    LOCAL_STORAGE_WEATHER_LOC,
} from '../../manager/WeatherManager';
import { useEffect } from 'react';
import { LOCATION_UNAVAILABLE } from '../../manager/FavoritesManager';
import { getCenterMapLoc } from '../../manager/MapManager';
import { apiGet } from '../HttpApi';

export const useWeatherLocationChange = ({
    ctx,
    currentLoc,
    delayedHash,
    weatherLoc,
    setWeatherLoc,
    dayForecast = null,
    setDayForecast = null,
    weekForecast = null,
    setWeekForecast = null,
}) => {
    useEffect(() => {
        if (currentLoc && currentLoc !== LOCATION_UNAVAILABLE) {
            const useCache = getWeatherDataFromCache({ lat: currentLoc.lat, lon: currentLoc.lng });
            if (!useCache) {
                fetchAddress({ point: currentLoc }).then((obj) => {
                    if (obj) {
                        setWeatherLoc(obj);
                        getForecastData(obj.lat, obj.lon);
                    }
                });
            }
        } else if (currentLoc && currentLoc === LOCATION_UNAVAILABLE) {
            const center = getCenterMapLoc(delayedHash);
            if (center) {
                fetchAddress({ point: center, useMapBbox: true }).then((obj) => {
                    if (obj) {
                        const useCache = getWeatherDataFromCache({ lat: obj.lat, lon: obj.lon });
                        if (!useCache) {
                            ctx.setForecastLoading(true);
                            setWeatherLoc(obj);
                            getForecastData(obj.lat, obj.lon);
                        }
                    }
                });
            }
        }
    }, [currentLoc, delayedHash]);

    function getForecastData(lat, lon) {
        fetchDayForecast({ lat, lon, ctx, setDayForecast }).then();
        fetchWeekForecast({ lat, lon, ctx, setWeekForecast }).then(() => ctx.setForecastLoading(false));
    }

    const fetchAddress = async ({ point, useMapBbox = false }) => {
        const loc = {
            lat: point.lat.toFixed(6),
            lon: point.lng.toFixed(6),
        };
        let nw = null;
        let se = null;
        if (useMapBbox) {
            const bbox = ctx.mapBbox;
            if (bbox) {
                nw = `${bbox.getNorthWest().lat},${bbox.getNorthWest().lng}`;
                se = `${bbox.getSouthEast().lat},${bbox.getSouthEast().lng}`;
            }
        }

        const params = {
            lat: loc.lat,
            lon: loc.lon,
            apiCache: true,
        };

        if (nw !== null) {
            params.nw = nw;
        }

        if (se !== null) {
            params.se = se;
        }

        const response = await apiGet(`${process.env.REACT_APP_WEATHER_API_SITE}/weather-api/get-address-by-latlon`, {
            apiCache: true,
            params: params,
        });
        if (response.ok) {
            const obj = {
                lat: response.data.location.latitude.toFixed(6),
                lon: response.data.location.longitude.toFixed(6),
                address: response.data.cityLocalNames,
            };
            // add address to local storage
            if (localStorage.getItem(LOCAL_STORAGE_WEATHER_LOC)) {
                let savedWeatherLoc = JSON.parse(localStorage.getItem(LOCAL_STORAGE_WEATHER_LOC));
                savedWeatherLoc.address = obj.address;
                localStorage.setItem(LOCAL_STORAGE_WEATHER_LOC, JSON.stringify(savedWeatherLoc));
            } else {
                localStorage.setItem(LOCAL_STORAGE_WEATHER_LOC, JSON.stringify(obj));
            }
            return obj;
        }
        return null;
    };

    function getWeatherDataFromCache(currentLoc) {
        function isSameLocation(locFromCache, currentLoc) {
            return (
                parseFloat(locFromCache.lat).toFixed(3) === parseFloat(currentLoc.lat)?.toFixed(3) &&
                parseFloat(locFromCache.lon).toFixed(3) === parseFloat(currentLoc.lon)?.toFixed(3)
            );
        }

        function isSameDay() {
            let dayForecast = localStorage.getItem(LOCAL_STORAGE_WEATHER_FORECAST_DAY);
            if (dayForecast) {
                dayForecast = JSON.parse(dayForecast);
                if (
                    Array.isArray(dayForecast) &&
                    dayForecast.length > 0 &&
                    Array.isArray(dayForecast[0]) &&
                    dayForecast[0].length > 1 &&
                    typeof dayForecast[0][1] === 'string'
                ) {
                    const forecastDate = dayForecast[0][1].split(' ')[0];
                    return forecastDate === dayFormatter(new Date());
                }
            }
            return false;
        }

        function dayFormatter(date) {
            const isoString = date.toISOString();
            const parts = isoString.split('T')[0].split('-');
            return parts[1] + parts[2];
        }

        let savedWeatherLoc = localStorage.getItem(LOCAL_STORAGE_WEATHER_LOC);
        if (savedWeatherLoc && isSameDay()) {
            savedWeatherLoc = JSON.parse(savedWeatherLoc);
            if (isSameLocation(savedWeatherLoc, currentLoc)) {
                if (!weatherLoc) {
                    setWeatherLoc(savedWeatherLoc);
                }
                if (!dayForecast) {
                    let dayForecast = localStorage.getItem(LOCAL_STORAGE_WEATHER_FORECAST_DAY);
                    if (dayForecast && setDayForecast) {
                        setDayForecast(JSON.parse(dayForecast));
                    }
                }
                if (!weekForecast) {
                    let weekForecast = localStorage.getItem(LOCAL_STORAGE_WEATHER_FORECAST_WEEK);
                    if (weekForecast && setWeekForecast) {
                        setWeekForecast(JSON.parse(weekForecast));
                    }
                }
                return true;
            } else {
                localStorage.setItem(LOCAL_STORAGE_WEATHER_LOC, JSON.stringify(currentLoc));
            }
        }
        return false;
    }
};

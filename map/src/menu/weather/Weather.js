import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import AppContext from '../../context/AppContext';
import {
    updateWeatherTime,
    dayFormatter,
    getAlignedStep,
    timeFormatter,
    LOCAL_STORAGE_WEATHER_LOC,
    LOCAL_STORAGE_WEATHER_FORECAST_DAY,
    LOCAL_STORAGE_WEATHER_FORECAST_WEEK,
    LOCAL_STORAGE_WEATHER_TYPE,
} from '../../manager/WeatherManager';
import { useGeoLocation } from '../../util/hooks/useGeoLocation';
import { LOCATION_UNAVAILABLE } from '../../manager/FavoritesManager';
import { useDebouncedHash } from '../../util/hooks/useDebouncedHash';
import { apiGet } from '../../util/HttpApi';
import { getCenterMapLoc } from '../../manager/MapManager';
import TimeSlider from './TimeSlider';
import DayCardsCarousel from './DayCardsCarousel';
import ForecastTable from './ForecastTable';
import TopWeatherInfo from './TopWeatherInfo';
import WeatherInfo from './WeatherInfo';
import WeatherHeader from './WeatherHeader';
import Loading from '../errors/Loading';

export default function Weather() {
    const ctx = useContext(AppContext);

    const currentLoc = useGeoLocation(ctx);
    const hash = window.location.hash;
    const delayedHash = useDebouncedHash(hash, 5000);

    const [weatherLoc, setWeatherLoc] = useState(null);
    const [dayForecast, setDayForecast] = useState(null);
    const [weekForecast, setWeekForecast] = useState(null);
    const [headerForecast, setHeaderForecast] = useState(null);

    const [currentTimeForecast, setCurrentTimeForecast] = useState({
        day: null,
        week: null,
    });

    const setDayF = (newDay) => {
        setCurrentTimeForecast((prevState) => ({ ...prevState, day: newDay }));
    };

    const setWeekF = (newWeek) => {
        setCurrentTimeForecast((prevState) => ({ ...prevState, week: newWeek }));
    };

    const fetchAddress = async (point) => {
        const loc = {
            lat: point.lat.toFixed(6),
            lon: point.lng.toFixed(6),
        };
        const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/weather-api/get-address-by-latlon`, {
            apiCache: true,
            params: {
                lat: loc.lat,
                lon: loc.lon,
            },
        });
        if (response.ok) {
            const obj = {
                lat: loc.lat,
                lon: loc.lon,
                address: response.data,
            };
            localStorage.setItem(LOCAL_STORAGE_WEATHER_LOC, JSON.stringify(obj));
            setWeatherLoc(obj);
        }
    };

    const fetchDayForecast = async (point) => {
        const loc = {
            lat: point.lat.toFixed(6),
            lon: point.lng.toFixed(6),
        };
        const responseDay = await apiGet(`${process.env.REACT_APP_WEATHER_API_SITE}/weather-api/point-info`, {
            apiCache: true,
            params: {
                lat: loc.lat,
                lon: loc.lon,
                weatherType: ctx.weatherType,
            },
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        if (responseDay.ok) {
            const forecast = await responseDay.json();
            localStorage.setItem(LOCAL_STORAGE_WEATHER_FORECAST_DAY, JSON.stringify(forecast));
            setDayForecast(forecast);
        }
    };

    const fetchWeekForecast = async (point) => {
        const loc = {
            lat: point.lat.toFixed(6),
            lon: point.lng.toFixed(6),
        };
        const responseWeek = await apiGet(`${process.env.REACT_APP_WEATHER_API_SITE}/weather-api/point-info`, {
            apiCache: true,
            params: {
                lat: loc.lat,
                lon: loc.lon,
                weatherType: ctx.weatherType,
                week: true,
            },
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        if (responseWeek.ok) {
            const forecast = await responseWeek.json();
            localStorage.setItem(LOCAL_STORAGE_WEATHER_FORECAST_WEEK, JSON.stringify(forecast));
            setWeekForecast(forecast);
        }
    };

    function getWeatherDataFromCache(currentLoc) {
        function isSameLocation(locFromCache, currentLoc) {
            return (
                parseFloat(locFromCache.lat).toFixed(4) === currentLoc.lat?.toFixed(4) &&
                parseFloat(locFromCache.lon).toFixed(4) === currentLoc.lng?.toFixed(4)
            );
        }

        function isSameDay() {
            let dayForecast = localStorage.getItem(LOCAL_STORAGE_WEATHER_FORECAST_DAY);
            if (dayForecast && dayForecast.length > 0) {
                dayForecast = JSON.parse(dayForecast);
                return dayForecast[0][1].split(' ')[0] === dayFormatter(new Date());
            }
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
                    if (dayForecast) {
                        setDayForecast(JSON.parse(dayForecast));
                    }
                }
                if (!weekForecast) {
                    let weekForecast = localStorage.getItem(LOCAL_STORAGE_WEATHER_FORECAST_WEEK);
                    if (weekForecast) {
                        setWeekForecast(JSON.parse(weekForecast));
                    }
                }
                return true;
            }
        }
        return false;
    }

    function getForecastData(location) {
        fetchDayForecast(location).then();
        fetchWeekForecast(location).then(() => ctx.setForecastLoading(false));
    }

    function changedWeatherType(weatherType) {
        if (weatherType) {
            let type = localStorage.getItem(LOCAL_STORAGE_WEATHER_TYPE);
            if (type !== weatherType) {
                localStorage.setItem(LOCAL_STORAGE_WEATHER_TYPE, weatherType);
                return true;
            }
        }
        return false;
    }

    useEffect(() => {
        if (currentLoc && currentLoc !== LOCATION_UNAVAILABLE) {
            const useCache = getWeatherDataFromCache(currentLoc);
            if (!useCache) {
                fetchAddress(currentLoc).then();
                getForecastData(currentLoc);
            }
        } else if (currentLoc && currentLoc === LOCATION_UNAVAILABLE) {
            const center = getCenterMapLoc(delayedHash);
            if (center) {
                const useCache = getWeatherDataFromCache(center);
                if (!useCache) {
                    fetchAddress(center).then();
                    getForecastData(center);
                }
            }
        }
    }, [currentLoc, delayedHash]);

    useEffect(() => {
        if (changedWeatherType(ctx.weatherType)) {
            if (currentLoc && currentLoc !== LOCATION_UNAVAILABLE) {
                getForecastData(currentLoc);
            } else {
                const center = getCenterMapLoc(delayedHash);
                if (center) {
                    getForecastData(center);
                }
            }
            const alignedStep = getAlignedStep({ direction: 0, ctx });
            if (alignedStep) {
                updateWeatherTime(ctx, alignedStep); // step current when need
            }
        }
    }, [ctx.weatherType]);

    // get current forecast
    useEffect(() => {
        if (!currentTimeForecast) {
            const useDayForecast = ctx.weatherDate.getDay() === new Date().getDay();
            const forecast = useDayForecast ? dayForecast : weekForecast;
            const timeKey = `${dayFormatter(ctx.weatherDate)} ${timeFormatter(ctx.weatherDate)}`;
            const res = forecast?.filter((f) => f[1] === timeKey);
            useDayForecast ? setDayF(res) : setWeekF(res);
        }
    }, [ctx.weatherDate]);

    return (
        <Box minWidth={ctx.infoBlockWidth} maxWidth={ctx.infoBlockWidth} sx={{ overflow: 'hidden' }}>
            <WeatherHeader />
            {dayForecast || weekForecast ? (
                <>
                    <TopWeatherInfo headerForecast={headerForecast} weatherLoc={weatherLoc} useWeatherDate={true} />
                    <DayCardsCarousel />
                    <TimeSlider />
                    <ForecastTable
                        dayForecast={dayForecast}
                        weekForecast={weekForecast}
                        currentTimeForecast={currentTimeForecast}
                        setHeaderForecast={setHeaderForecast}
                    />
                    <WeatherInfo />
                </>
            ) : (
                <Loading />
            )}
        </Box>
    );
}

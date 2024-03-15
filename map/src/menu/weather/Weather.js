import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import AppContext from '../../context/AppContext';
import {
    dayFormatter,
    timeFormatter,
    LOCAL_STORAGE_WEATHER_LOC,
    LOCAL_STORAGE_WEATHER_FORECAST_DAY,
    LOCAL_STORAGE_WEATHER_FORECAST_WEEK,
    fetchDayForecast,
    fetchWeekForecast,
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
import { useWeatherTypeChange } from '../../util/hooks/useWeatherTypeChange';

export default function Weather() {
    const ctx = useContext(AppContext);

    const currentLoc = useGeoLocation(ctx, false);
    const delayedHash = useDebouncedHash(window.location.hash, 5000);

    const [weatherLoc, setWeatherLoc] = useState(null);
    const [dayForecast, setDayForecast] = useState(null);
    const [weekForecast, setWeekForecast] = useState(null);
    const [headerForecast, setHeaderForecast] = useState(null);

    useWeatherTypeChange({ ctx, currentLoc, delayedHash, setDayForecast, setWeekForecast });

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
        const response = await apiGet(`${process.env.REACT_APP_WEATHER_API_SITE}/weather-api/get-address-by-latlon`, {
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

    function getWeatherDataFromCache(currentLoc) {
        function isSameLocation(locFromCache, currentLoc) {
            return (
                parseFloat(locFromCache.lat).toFixed(3) === currentLoc.lat?.toFixed(3) &&
                parseFloat(locFromCache.lon).toFixed(3) === currentLoc.lng?.toFixed(3)
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
            return date.toISOString().split('T')[0];
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
        fetchDayForecast({ point: location, ctx, setDayForecast }).then();
        fetchWeekForecast({ point: location, ctx, setWeekForecast }).then(() => ctx.setForecastLoading(false));
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
        <Box
            minWidth={ctx.infoBlockWidth}
            maxWidth={ctx.infoBlockWidth}
            sx={{ overflowX: 'hidden !important', overflowY: 'auto !important' }}
        >
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

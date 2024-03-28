import { useEffect } from 'react';
import {
    changedWeatherType,
    fetchDayForecast,
    fetchWeekForecast,
    getAlignedStep,
    LOCAL_STORAGE_WEATHER_LOC,
    updateWeatherTime,
} from '../../manager/WeatherManager';
import { LOCATION_UNAVAILABLE } from '../../manager/FavoritesManager';

export const useWeatherTypeChange = ({ ctx, currentLoc, setDayForecast = null, setWeekForecast = null }) => {
    function getForecastData(location) {
        if (setDayForecast) {
            fetchDayForecast({ lat: location.lat, lon: location.lon, ctx, setDayForecast }).then();
        }
        if (setWeekForecast) {
            fetchWeekForecast({ lat: location.lat, lon: location.lon, ctx, setDayForecast }).then(() =>
                ctx.setForecastLoading(false)
            );
        }
    }

    useEffect(() => {
        if (changedWeatherType(ctx.weatherType)) {
            if (currentLoc && currentLoc !== LOCATION_UNAVAILABLE) {
                getForecastData(currentLoc);
            } else {
                let savedWeatherLoc = localStorage.getItem(LOCAL_STORAGE_WEATHER_LOC);
                if (savedWeatherLoc) {
                    savedWeatherLoc = JSON.parse(savedWeatherLoc);
                    getForecastData({ lat: savedWeatherLoc.lat, lon: savedWeatherLoc.lon });
                }
            }
            const alignedStep = getAlignedStep({ direction: 0, ctx });
            if (alignedStep) {
                updateWeatherTime(ctx, alignedStep); // step current when need
            }
        }
    }, [ctx.weatherType]);
};

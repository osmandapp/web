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
    function getForecastData({ lat, lon }) {
        if (setDayForecast && setWeekForecast) {
            fetchDayForecast({ lat, lon, ctx, setDayForecast }).then(() =>
                fetchWeekForecast({ lat, lon, ctx, setWeekForecast }).then(() => ctx.setForecastLoading(false))
            );
        } else {
            if (setDayForecast) {
                fetchDayForecast({ lat, lon, ctx, setDayForecast }).then();
            } else if (setWeekForecast) {
                fetchWeekForecast({ lat, lon, ctx, setWeekForecast }).then(() => ctx.setForecastLoading(false));
            }
        }
    }

    useEffect(() => {
        if (changedWeatherType(ctx.weatherType)) {
            if (currentLoc && currentLoc !== LOCATION_UNAVAILABLE) {
                getForecastData({ lat: currentLoc.lat, lon: currentLoc.lng });
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

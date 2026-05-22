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

export const useWeatherTypeChange = ({ wtx, currentLoc, setDayForecast = null, setWeekForecast = null }) => {
    function getForecastData({ lat, lon }) {
        if (setDayForecast && setWeekForecast) {
            Promise.allSettled([
                fetchDayForecast({ lat, lon, wtx, setDayForecast }),
                fetchWeekForecast({ lat, lon, wtx, setWeekForecast }),
            ]).then(() => wtx.setForecastLoading(false));
        } else {
            if (setDayForecast) {
                fetchDayForecast({ lat, lon, wtx, setDayForecast }).then();
            } else if (setWeekForecast) {
                fetchWeekForecast({ lat, lon, wtx, setWeekForecast }).then(() => wtx.setForecastLoading(false));
            }
        }
    }

    useEffect(() => {
        if (changedWeatherType(wtx.weatherType)) {
            if (currentLoc && currentLoc !== LOCATION_UNAVAILABLE) {
                getForecastData({ lat: currentLoc.lat, lon: currentLoc.lng });
            } else {
                let savedWeatherLoc = localStorage.getItem(LOCAL_STORAGE_WEATHER_LOC);
                if (savedWeatherLoc) {
                    savedWeatherLoc = JSON.parse(savedWeatherLoc);
                    getForecastData({ lat: savedWeatherLoc.lat, lon: savedWeatherLoc.lon });
                }
            }
            const alignedStep = getAlignedStep({ direction: 0, wtx });
            if (alignedStep) {
                updateWeatherTime(wtx, alignedStep); // step current when need
            }
        }
    }, [wtx.weatherType]);
};

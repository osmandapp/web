import { useEffect } from 'react';
import {
    changedWeatherType,
    fetchDayForecast,
    fetchWeekForecast,
    getAlignedStep,
    updateWeatherTime,
} from '../../manager/WeatherManager';
import { LOCATION_UNAVAILABLE } from '../../manager/FavoritesManager';
import { getCenterMapLoc } from '../../manager/MapManager';

export const useWeatherTypeChange = ({
    ctx,
    currentLoc,
    delayedHash,
    setDayForecast = null,
    setWeekForecast = null,
}) => {
    function getForecastData(location) {
        if (setDayForecast) {
            fetchDayForecast({ point: location, ctx, setDayForecast }).then();
        }
        if (setWeekForecast) {
            fetchWeekForecast({ point: location, ctx, setWeekForecast }).then(() => ctx.setForecastLoading(false));
        }
    }

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
};

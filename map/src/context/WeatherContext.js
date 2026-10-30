import React, { useState } from 'react';
import WeatherManager, { GFS_WEATHER_TYPE } from '../manager/WeatherManager';
import { MAIN_URL_WITH_SLASH, WEATHER_URL } from '../manager/GlobalManager';

const WEATHER_FORECAST_SOURCE_PARAM = 'source';

const WeatherContext = React.createContext();

export const WeatherContextProvider = ({ children }) => {
    const searchParams = new URLSearchParams(globalThis.location.search);
    const isWeatherPage = globalThis.location.pathname.startsWith(MAIN_URL_WITH_SLASH + WEATHER_URL);

    const [weatherLayers, setWeatherLayers] = useState(WeatherManager.getLayers());
    const [weatherDate, setWeatherDate] = useState(new Date());
    const [weatherType, setWeatherType] = useState(
        (isWeatherPage && searchParams.get(WEATHER_FORECAST_SOURCE_PARAM)) || GFS_WEATHER_TYPE
    );
    const [forecastLoading, setForecastLoading] = useState(false);

    return (
        <WeatherContext.Provider
            value={{
                weatherLayers,
                setWeatherLayers,
                weatherDate,
                setWeatherDate,
                weatherType,
                setWeatherType,
                forecastLoading,
                setForecastLoading,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherContext;

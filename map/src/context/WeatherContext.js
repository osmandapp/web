import React, { useState } from 'react';
import WeatherManager from '../manager/WeatherManager';

const WEATHER_FORECAST_SOURCE_PARAM = 'source';

const WeatherContext = React.createContext();

export const WeatherContextProvider = ({ children }) => {
    const searchParams = new URLSearchParams(globalThis.location.search);

    const [weatherLayers, setWeatherLayers] = useState(WeatherManager.getLayers());
    const [weatherDate, setWeatherDate] = useState(new Date());
    const [weatherType, setWeatherType] = useState(searchParams.get(WEATHER_FORECAST_SOURCE_PARAM) ?? 'gfs');
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

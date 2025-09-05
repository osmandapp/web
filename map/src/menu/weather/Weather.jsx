import React, { useContext, useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import AppContext from '../../context/AppContext';
import {
    openWeatherForecastDetails,
    dayFormatter,
    timeFormatter,
    LOCAL_STORAGE_WEATHER_FORECAST_WEEK,
} from '../../manager/WeatherManager';
import { useGeoLocation } from '../../util/hooks/useGeoLocation';
import TimeSlider from './TimeSlider';
import DayCardsCarousel from './DayCardsCarousel';
import ForecastTable from './ForecastTable';
import TopWeatherInfo from './TopWeatherInfo';
import WeatherInfo from './WeatherInfo';
import WeatherHeader from './WeatherHeader';
import Loading from '../errors/Loading';
import { useWeatherTypeChange } from '../../util/hooks/useWeatherTypeChange';
import { useWeatherLocationChange } from '../../util/hooks/useWeatherLocationChange';
import { matchPath, useLocation, useOutlet } from 'react-router-dom';
import { HEADER_SIZE, MAIN_URL_WITH_SLASH, WEATHER_FORECAST_URL, WEATHER_URL } from '../../manager/GlobalManager';
import { useWindowSize } from '../../util/hooks/useWindowSize';

export const FORECAST_TYPE_PARAM = 'type';
export const FORECAST_SOURCE_PARAM = 'source';

export const forecastParams = (urlLocation) => {
    const params = new URLSearchParams(urlLocation.search);
    const type = params.get(FORECAST_TYPE_PARAM);
    const source = params.get(FORECAST_SOURCE_PARAM);

    if (!type || !source) {
        return null;
    }

    return { type, source };
};

export function selectedForecastDetails(ctx) {
    return ctx.weatherLayers[ctx.weatherType].find((layer) => {
        return layer.showDetails;
    });
}

export default function Weather() {
    const ctx = useContext(AppContext);

    const [, height] = useWindowSize();

    const outlet = useOutlet();

    const urlLocation = useLocation();
    const location = useGeoLocation(ctx, false);
    const currentLoc = ctx.openMenu?.latlng ?? location;
    const hash = window.location.hash;
    const debouncerTimer = useRef(0);
    const [delayedHash, setDelayedHash] = useState(hash);
    const [loadingLocation, setLoadingLocation] = useState(false);

    const showForecastOutlet = matchPath(
        { path: MAIN_URL_WITH_SLASH + WEATHER_URL + WEATHER_FORECAST_URL + '*' },
        useLocation().pathname
    );

    // debounce map move/scroll
    useEffect(() => {
        if (!ctx.openMenu?.latlng) {
            setLoadingLocation(true);
            debouncerTimer.current > 0 && clearTimeout(debouncerTimer.current);
            debouncerTimer.current = setTimeout(() => {
                debouncerTimer.current = 0;
                setDelayedHash(hash);
                setLoadingLocation(false);
            }, 1000);
        }

        return () => {
            clearTimeout(debouncerTimer.current);
        };
    }, [hash]);

    const [weatherLoc, setWeatherLoc] = useState(null);
    const [dayForecast, setDayForecast] = useState(null);
    const [weekForecast, setWeekForecast] = useState(null);
    const [headerForecast, setHeaderForecast] = useState(null);

    useWeatherTypeChange({ ctx, currentLoc, setDayForecast, setWeekForecast });
    useWeatherLocationChange({
        ctx,
        currentLoc,
        delayedHash,
        weatherLoc,
        setWeatherLoc,
        dayForecast,
        setDayForecast,
        weekForecast,
        setWeekForecast,
    });

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

    // get current forecast
    useEffect(() => {
        if (!currentTimeForecast.day && !currentTimeForecast.week) {
            const useDayForecast = ctx.weatherDate.getDay() === new Date().getDay();
            const forecast = useDayForecast ? dayForecast : weekForecast;
            const timeKey = `${dayFormatter(ctx.weatherDate)} ${timeFormatter(ctx.weatherDate)}`;
            const res = forecast?.filter((f) => f[1] === timeKey);
            useDayForecast ? setDayF(res) : setWeekF(res);
        }
    }, [ctx.weatherDate]);

    useEffect(() => {
        if (!showForecastOutlet) return;

        const params = forecastParams(urlLocation);
        if (!params) return;

        if (params.source !== ctx.weatherType) {
            ctx.setWeatherType(params.source);
            localStorage.removeItem(LOCAL_STORAGE_WEATHER_FORECAST_WEEK);
        }

        openWeatherForecastDetails(ctx, Number(params.type), params.source);
    }, [urlLocation]);

    return (
        <>
            {showForecastOutlet && outlet ? (
                outlet
            ) : (
                <Box
                    minWidth={ctx.infoBlockWidth}
                    maxWidth={ctx.infoBlockWidth}
                    sx={{
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        height: `${height - HEADER_SIZE}px`,
                    }}
                >
                    <WeatherHeader />
                    {dayForecast || weekForecast ? (
                        <Box
                            sx={{
                                overflowX: 'hidden !important',
                                overflowY: 'auto !important',
                                flex: 1,
                            }}
                        >
                            <TopWeatherInfo
                                loadingLocation={loadingLocation}
                                headerForecast={headerForecast}
                                weatherLoc={weatherLoc}
                                useWeatherDate={true}
                            />
                            <DayCardsCarousel />
                            <TimeSlider />
                            <ForecastTable
                                dayForecast={dayForecast}
                                weekForecast={weekForecast}
                                currentTimeForecast={currentTimeForecast}
                                setHeaderForecast={setHeaderForecast}
                            />
                            <WeatherInfo dayForecast={dayForecast} weekForecast={weekForecast} />
                        </Box>
                    ) : (
                        <Loading />
                    )}
                </Box>
            )}
        </>
    );
}

import React, { useContext, useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import AppContext from '../../context/AppContext';
import { dayFormatter, timeFormatter } from '../../manager/WeatherManager';
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

export default function Weather() {
    const ctx = useContext(AppContext);

    const currentLoc = useGeoLocation(ctx, false);
    const hash = window.location.hash;
    const debouncerTimer = useRef(0);
    const [delayedHash, setDelayedHash] = useState(hash);
    const [loadingLocation, setLoadingLocation] = useState(false);

    // debounce map move/scroll
    useEffect(() => {
        setLoadingLocation(true);
        debouncerTimer.current > 0 && clearTimeout(debouncerTimer.current);
        debouncerTimer.current = setTimeout(() => {
            debouncerTimer.current = 0;
            setDelayedHash(hash);
            setLoadingLocation(false);
        }, 1000);

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
                </>
            ) : (
                <Loading />
            )}
        </Box>
    );
}

import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import AppContext from '../../context/AppContext';
import MapContext from '../../context/MapContext';
import WeatherContext from '../../context/WeatherContext';
import {
    openWeatherForecastDetails,
    dayFormatter,
    timeFormatter,
    LOCAL_STORAGE_WEATHER_FORECAST_WEEK,
    getAlignedStep,
    getSavedWeekForecast,
} from '../../manager/WeatherManager';
import { useGeoLocation } from '../../util/hooks/useGeoLocation';
import { useDebouncedHash } from '../../util/hooks/useDebouncedHash';
import TimeSlider from './TimeSlider';
import DayCardsCarousel from './DayCardsCarousel';
import ForecastTable from './ForecastTable';
import TopWeatherInfo from './TopWeatherInfo';
import WeatherInfo from './WeatherInfo';
import WeatherHeader from './WeatherHeader';
import Loading from '../errors/Loading';
import { useWeatherTypeChange } from '../../util/hooks/useWeatherTypeChange';
import { useWeatherLocationChange } from '../../util/hooks/useWeatherLocationChange';
import { matchPath, Outlet, useLocation } from 'react-router-dom';
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

export function selectedForecastDetails(wtx) {
    if (!wtx?.weatherLayers || !wtx?.weatherType) {
        return undefined;
    }
    return wtx.weatherLayers[wtx.weatherType]?.find((layer) => {
        return layer.showDetails;
    });
}

export default function Weather() {
    const ctx = useContext(AppContext);
    const wtx = useContext(WeatherContext);
    const mtx = useContext(MapContext);

    const [, height] = useWindowSize();

    const urlLocation = useLocation();
    const hash = urlLocation.hash;
    const geo = useGeoLocation(ctx, false);
    const currentLoc = ctx.openMenu?.latlng ?? geo;
    const { isPending, delayedHash } = useDebouncedHash({
        hash,
        durationMs: 1000,
        commitHash: true,
        blockWhen: !!ctx.openMenu?.latlng,
    });

    const showForecastOutlet = !!matchPath(
        { path: MAIN_URL_WITH_SLASH + WEATHER_URL + WEATHER_FORECAST_URL + '*' },
        useLocation().pathname
    );

    const showWeatherMain = !!matchPath({ path: MAIN_URL_WITH_SLASH + WEATHER_URL + '*' }, useLocation().pathname);

    const enabled = showWeatherMain || showForecastOutlet;

    const [weatherLoc, setWeatherLoc] = useState(null);
    const [dayForecast, setDayForecast] = useState(null);
    const [weekForecast, setWeekForecast] = useState(getSavedWeekForecast);
    const [headerForecast, setHeaderForecast] = useState(null);

    useWeatherTypeChange({ wtx, currentLoc, setDayForecast, setWeekForecast });
    useWeatherLocationChange({
        ctx,
        wtx,
        mtx,
        currentLoc,
        delayedHash,
        weatherLoc,
        setWeatherLoc,
        dayForecast,
        setDayForecast,
        weekForecast,
        setWeekForecast,
        enabled,
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
        if (!dayForecast && !weekForecast) return;
        if (wtx.weatherDate === null) return;

        const useDayForecast = wtx.weatherDate.getDay() === new Date().getDay();
        const forecast = useDayForecast ? dayForecast : weekForecast;

        const findForecast = (date) => {
            const timeKey = `${dayFormatter(date)} ${timeFormatter(date)}`;
            return forecast?.filter((f) => f.time === timeKey) ?? [];
        };

        let res = findForecast(wtx.weatherDate);

        if (res.length === 0) {
            const alignedStep = getAlignedStep({ direction: +1, weatherDate: wtx.weatherDate, wtx });
            if (alignedStep) {
                const shifted = new Date(wtx.weatherDate.getTime() + alignedStep * 60 * 60 * 1000);
                res = findForecast(shifted);
            }
        }

        if (res.length > 0) {
            useDayForecast ? setDayF(res) : setWeekF(res);
        }
    }, [wtx.weatherDate, weekForecast]);

    useEffect(() => {
        if (!showForecastOutlet) return;

        const params = forecastParams(urlLocation);
        if (params) {
            if (params.source !== wtx.weatherType) {
                wtx.setWeatherType(params.source);
                localStorage.removeItem(LOCAL_STORAGE_WEATHER_FORECAST_WEEK);
            }
            openWeatherForecastDetails(wtx, params.type, params.source);
            return;
        }

        const list = wtx.weatherLayers?.[wtx.weatherType];
        if (!list?.length) return;
        const layer = list.find((l) => l.showDetails) ?? list[0];

        openWeatherForecastDetails(wtx, layer.key, wtx.weatherType);
    }, [urlLocation, showForecastOutlet, wtx.weatherType]);

    return (
        <>
            {showForecastOutlet ? (
                <Outlet context={{ weekForecast, setWeekForecast, weatherLoc, setWeatherLoc }} />
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
                        <Box sx={{ overflowX: 'hidden', overflowY: 'auto', flex: 1 }}>
                            <TopWeatherInfo
                                loadingLocation={isPending}
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
                        enabled && <Loading />
                    )}
                </Box>
            )}
        </>
    );
}

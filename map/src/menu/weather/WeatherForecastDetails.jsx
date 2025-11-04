import { Box, Button, Divider, Icon, ListItemText, MenuItem, Typography } from '@mui/material';
import WeatherHeader from './WeatherHeader';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import AppContext from '../../context/AppContext';
import TopWeatherInfo from './TopWeatherInfo';
import {
    openWeatherForecastDetails,
    LOCAL_STORAGE_WEATHER_FORECAST_WEEK,
    LOCAL_STORAGE_WEATHER_LOC,
    ECWMF_WEATHER_TYPE,
    PRECIP_LAYER_KEY,
} from '../../manager/WeatherManager';
import styles from '../weather/weather.module.css';
import i18n from 'i18next';
import isEmpty from 'lodash-es/isEmpty';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import Loading from '../errors/Loading';
import { useWeatherTypeChange } from '../../util/hooks/useWeatherTypeChange';
import { useGeoLocation } from '../../util/hooks/useGeoLocation';
import { useWeatherLocationChange } from '../../util/hooks/useWeatherLocationChange';
import { FORECAST_TYPE_PARAM } from './Weather';
import { useUpdateQueryParam } from '../../util/hooks/menu/useUpdateQueryParam';
import { HEADER_SIZE } from '../../manager/GlobalManager';
import ForecastGraph from './ForecastGraph';
import Empty from '../errors/Empty';
import SquareIconBtn from '../../frame/components/btns/SquareIconBtn';

export default function WeatherForecastDetails({ setShowInfoBlock }) {
    const ctx = useContext(AppContext);
    const [, height] = useWindowSize();

    const updateQueryParam = useUpdateQueryParam();

    const [forecast, setForecast] = useState(getSavedForecast());
    const [weatherLoc, setWeatherLoc] = useState(getWeatherLoc());
    const currentLoc = useGeoLocation(ctx, false);
    const hash = window.location.hash;
    const [delayedHash, setDelayedHash] = useState(hash);
    const [isDisabledType, setIsDisabledType] = useState(false);
    const debouncerTimer = useRef(0);
    const [loadingLocation, setLoadingLocation] = useState(false);

    const DEFAULT_GRAPH_HEIGHT = 328;

    useWeatherTypeChange({ ctx, currentLoc, setWeekForecast: setForecast });
    useWeatherLocationChange({
        ctx,
        currentLoc,
        delayedHash,
        weatherLoc,
        setWeatherLoc,
        weekForecast: forecast,
        setWeekForecast: setForecast,
    });

    const [currentWeatherType, setCurrentWeatherType] = useState(null);
    const [currentWeatherUnits, setCurrentWeatherUnits] = useState(null);

    // debounce map move/scroll
    useEffect(() => {
        setLoadingLocation(true);
        debouncerTimer.current > 0 && clearTimeout(debouncerTimer.current);
        debouncerTimer.current = setTimeout(() => {
            debouncerTimer.current = 0;
            setDelayedHash(hash);
            setLoadingLocation(false);
        }, 2000);

        return () => {
            clearTimeout(debouncerTimer.current);
        };
    }, [hash]);

    useEffect(() => {
        const res = ctx.weatherLayers[ctx.weatherType].find((layer) => {
            return layer.showDetails;
        });
        if (res) {
            setCurrentWeatherType(res.key);
            setCurrentWeatherUnits(res.units);
        }
    }, [ctx.weatherLayers]);

    useEffect(() => {
        if (currentWeatherType) {
            const selectedType = ctx.weatherLayers[ctx.weatherType].find((layer) => currentWeatherType === layer.key);
            setIsDisabledType(ctx.weatherType === ECWMF_WEATHER_TYPE && selectedType.onlyGFS);
        }
    }, [ctx.weatherType, currentWeatherType]);

    const forecastPreparedData = useMemo(() => {
        if (!forecast || !ctx.weatherLayers || !ctx.weatherType) {
            return {};
        }

        let res = {};
        const uniqueDates = new Set();
        const layers = ctx.weatherLayers[ctx.weatherType].map((layer) => ({ ...layer }));

        forecast.forEach((item) => {
            const date = new Date(item.ts);
            const dateString = date.toISOString().split('T')[0];

            if (uniqueDates.size > 7) {
                return;
            }
            uniqueDates.add(dateString);

            const time = date.getHours();
            const isDay = time > 6 && time < 18;
            const period = isDay ? 'day' : 'night';

            if (!res[dateString]) {
                res[dateString] = { day: {}, night: {}, totalPrecipitation: 0 };
                layers.forEach((layer) => {
                    res[dateString][period][layer.key] = { max: item[layer.key], units: layer.units };
                });
            } else {
                layers.forEach((layer) => {
                    let entry = res[dateString][period][layer.key];
                    if (entry) {
                        entry.max = Math.max(entry.max, item[layer.key]);
                    } else {
                        res[dateString][period][layer.key] = {
                            max: item[layer.key],
                            units: layer.units,
                        };
                    }
                });
            }

            // Sum the precipitation values
            layers.forEach((layer) => {
                if (layer.key.includes(PRECIP_LAYER_KEY)) {
                    res[dateString].totalPrecipitation += item[layer.key];
                }
            });
        });

        // Limit the result to the first 7 dates.
        const firstSevenDates = Array.from(uniqueDates).slice(0, 7);
        res = Object.keys(res).reduce((acc, key) => {
            if (firstSevenDates.includes(key)) {
                acc[key] = res[key];
            }
            return acc;
        }, {});

        Object.keys(res).forEach((date) => {
            layers.forEach((layer) => {
                ['day', 'night'].forEach((period) => {
                    if (res[date][period][layer.key] !== undefined) {
                        const entry = res[date][period][layer.key];
                        entry.max = layer.checkValue(entry.max).toFixed(layer.fixed);
                    }
                });
            });
        });

        return res;
    }, [forecast, ctx.weatherLayers, ctx.weatherType]);

    function getWeatherLoc() {
        if (localStorage.getItem(LOCAL_STORAGE_WEATHER_LOC)) {
            return JSON.parse(localStorage.getItem(LOCAL_STORAGE_WEATHER_LOC));
        }
        return null;
    }

    function getSavedForecast() {
        if (localStorage.getItem(LOCAL_STORAGE_WEATHER_FORECAST_WEEK)) {
            const weatherData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_WEATHER_FORECAST_WEEK));

            // Check if the data is an array, not empty, contains only arrays, and has more than one element
            if (
                Array.isArray(weatherData) &&
                weatherData.length > 0 &&
                weatherData.every(Array.isArray) &&
                weatherData.length > 1
            ) {
                // Check if the first inner array contains exactly 8 elements
                if (weatherData[0].length === 8) {
                    return weatherData;
                } else {
                    console.debug('The first array does not contain 8 elements.');
                }
            } else {
                console.debug('The data does not meet the requirements.');
            }
        } else {
            console.debug('No data in local storage.');
        }
        return null;
    }

    const ForecastButtonItem = ({ item, index }) => {
        const disabled = ctx.weatherType === ECWMF_WEATHER_TYPE && item.onlyGFS;
        const selected = item.key === currentWeatherType;

        return (
            <SquareIconBtn
                index={index}
                icon={item.icon}
                selected={selected}
                disabled={disabled}
                onClick={() => {
                    setCurrentWeatherType(item.key);
                    setCurrentWeatherUnits(item.units);
                    updateQueryParam(FORECAST_TYPE_PARAM, item.key);
                    openWeatherForecastDetails(ctx, item.key, ctx.weatherType);
                }}
            />
        );
    };

    const ForecastWeekItem = ({ day, data, index }) => {
        const currentDay = new Date(day);
        const isLastItem = index === Object.entries(forecastPreparedData).length - 1;
        function formatDay(day) {
            const formattedDay = day.toLocaleString(i18n.language, { weekday: 'long' });
            return formattedDay.charAt(0).toUpperCase() + formattedDay.slice(1);
        }

        return (
            <>
                {!isEmpty(data.day) && (
                    <>
                        <MenuItem className={styles.forecastItem} key={day}>
                            <ListItemText>
                                <Typography className={styles.weekItemDataDay} variant="inherit">
                                    {formatDay(currentDay)}
                                </Typography>
                                <Typography className={styles.weekItemData} variant="inherit">
                                    {currentDay.toLocaleString(i18n.language, { day: 'numeric', month: 'short' })}
                                </Typography>
                            </ListItemText>
                            <div style={{ display: 'flex' }}>
                                {currentWeatherType === PRECIP_LAYER_KEY ? (
                                    <>
                                        <Typography className={styles.weekItemDay}>
                                            {data?.totalPrecipitation.toFixed(2)}
                                        </Typography>
                                    </>
                                ) : (
                                    <>
                                        <Typography className={styles.weekItemDay}>
                                            {data?.day[currentWeatherType]?.max}
                                        </Typography>
                                        <Typography className={styles.weekItemNight}>|</Typography>
                                        <Typography className={styles.weekItemNight}>
                                            {data?.night[currentWeatherType]?.max}
                                        </Typography>
                                    </>
                                )}
                                <Typography className={styles.weekItemUnit}>
                                    {data?.day[currentWeatherType]?.units}
                                </Typography>
                            </div>
                        </MenuItem>
                        {!isLastItem && <Divider className={styles.forecastDetailsDivider} />}
                    </>
                )}
            </>
        );
    };

    return (
        <Box
            id="se-weather-forecast-details"
            minWidth={ctx.infoBlockWidth}
            maxWidth={ctx.infoBlockWidth}
            sx={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <WeatherHeader setShowInfoBlock={setShowInfoBlock} isDetails={true} />
            <Box
                sx={{
                    overflowX: 'hidden !important',
                    overflowY: 'auto !important',
                    flex: 1,
                }}
            >
                <TopWeatherInfo loadingLocation={loadingLocation} weatherLoc={weatherLoc} />
                {!isEmpty(forecastPreparedData) && (
                    <Box className={styles.forecastButtonBox}>
                        {ctx.weatherLayers[ctx.weatherType].map((item, index) => (
                            <ForecastButtonItem item={item} index={index} key={item.id || item.name} />
                        ))}
                    </Box>
                )}
                {ctx.forecastLoading ? (
                    <Loading />
                ) : !isDisabledType ? (
                    <>
                        {!isEmpty(forecastPreparedData) && (
                            <Box id="se-weather-forecast-graph" sx={{ px: '16px' }}>
                                <ForecastGraph
                                    data={forecastPreparedData}
                                    weatherType={currentWeatherType}
                                    weatherUnits={currentWeatherUnits}
                                />
                            </Box>
                        )}
                        <Box
                            id="se-weather-forecast-week-details"
                            sx={{
                                overflowX: 'hidden',
                                overflowY: 'auto !important',
                                maxHeight: `${height - 2 * HEADER_SIZE - DEFAULT_GRAPH_HEIGHT + 30}px`,
                            }}
                        >
                            {currentWeatherType !== null &&
                                Object.entries(forecastPreparedData).map(([key, value], index) => (
                                    <ForecastWeekItem day={key} data={value} key={key} index={index} />
                                ))}
                        </Box>
                    </>
                ) : (
                    <Empty
                        title={'Empty data'}
                        text={"This weather type isn't supported for this weather source."}
                        checkLogin={false}
                    />
                )}
            </Box>
        </Box>
    );
}

import { Box, Button, Divider, Icon, ListItemText, MenuItem, Typography } from '@mui/material';
import WeatherHeader from './WeatherHeader';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import AppContext from '../../context/AppContext';
import TopWeatherInfo from './TopWeatherInfo';
import { LOCAL_STORAGE_WEATHER_FORECAST_WEEK, LOCAL_STORAGE_WEATHER_LOC } from '../../manager/WeatherManager';
import styles from '../weather/weather.module.css';
import i18n from 'i18next';
import { isEmpty } from 'lodash';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import ForecastGraph from './ForecastGraph';
import Loading from '../errors/Loading';
import { useWeatherTypeChange } from '../../util/hooks/useWeatherTypeChange';
import { useGeoLocation } from '../../util/hooks/useGeoLocation';
import Empty from '../errors/Empty';
import { useWeatherLocationChange } from '../../util/hooks/useWeatherLocationChange';

export default function WeatherForecastDetails({ setShowInfoBlock }) {
    const ctx = useContext(AppContext);
    const [, height] = useWindowSize();

    const [forecast, setForecast] = useState(getSavedForecast());
    const [weatherLoc, setWeatherLoc] = useState(getWeatherLoc());
    const currentLoc = useGeoLocation(ctx, false);
    const hash = window.location.hash;
    const [delayedHash, setDelayedHash] = useState(hash);
    const [isDisabledType, setIsDisabledType] = useState(false);
    const debouncerTimer = useRef(0);
    const [loadingLocation, setLoadingLocation] = useState(false);

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
            setIsDisabledType(selectedType.index === -1);
        }
    }, [ctx.weatherType, currentWeatherType]);

    const forecastPreparedData = useMemo(() => {
        if (!forecast || !ctx.weatherLayers || !ctx.weatherType) {
            return {};
        }

        let res = {};
        let uniqueDates = new Set();
        const layers = ctx.weatherLayers[ctx.weatherType].map((layer) => ({ ...layer }));

        // Iterate over each forecast item to process and organize data.
        forecast.forEach((item) => {
            const date = new Date(item[0]);
            const dateString = date.toISOString().split('T')[0];

            if (uniqueDates.size > 7) {
                return;
            }
            uniqueDates.add(dateString);

            const time = date.getHours();
            const isDay = time > 6 && time < 18;
            const period = isDay ? 'day' : 'night';

            // If the date isn't already in the result, initialize its structure.
            if (!res[dateString]) {
                res[dateString] = { day: {}, night: {} };
                layers.forEach((layer) => {
                    if (layer.index !== -1) {
                        res[dateString][period][layer.key] = { avg: item[layer.index], count: 1, units: layer.units };
                    }
                });
            } else {
                // For existing dates, update the average and count for each applicable layer.
                layers.forEach((layer) => {
                    if (layer.index !== -1) {
                        let entry = res[dateString][period][layer.key];
                        if (entry) {
                            entry.avg = (entry.avg * entry.count + item[layer.index]) / (entry.count + 1);
                            res[dateString][period][layer.key].count += 1;
                        } else {
                            res[dateString][period][layer.key] = {
                                avg: item[layer.index],
                                count: 1,
                                units: layer.units,
                            };
                        }
                    }
                });
            }
        });

        // Limit the result to the first 7 dates.
        const firstSevenDates = Array.from(uniqueDates).slice(0, 7);
        res = Object.keys(res).reduce((acc, key) => {
            if (firstSevenDates.includes(key)) {
                acc[key] = res[key];
            }
            return acc;
        }, {});

        // Adjust the average and formatting.
        Object.keys(res).forEach((date) => {
            layers.forEach((layer) => {
                ['day', 'night'].forEach((period) => {
                    if (res[date][period][layer.key] && layer.index !== -1) {
                        let entry = res[date][period][layer.key];
                        entry.avg = layer.checkValue(entry.avg * layer.mult).toFixed(layer.fixed);
                        delete entry.count;
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
            return JSON.parse(localStorage.getItem(LOCAL_STORAGE_WEATHER_FORECAST_WEEK));
        }
        return null;
    }

    function setForecastButtonStyles(item) {
        let res = [];
        if (item.key === currentWeatherType) {
            res.push(styles.forecastButtonItemSelected);
        } else {
            res.push(styles.forecastButtonItem);
        }
        return res.join(' ');
    }

    function setForecastButtonIconStyles(item) {
        let res = [];
        if (item.key === currentWeatherType) {
            res.push(styles.forecastButtonItemIconSelected);
        } else {
            res.push(styles.forecastButtonItemIcon);
        }
        return res.join(' ');
    }

    const ForecastButtonItem = ({ item, index }) => {
        return (
            <Button
                key={index}
                className={setForecastButtonStyles(item)}
                disabled={item.index === -1}
                onClick={() => {
                    setCurrentWeatherType(item.key);
                    setCurrentWeatherUnits(item.units);
                }}
            >
                <Icon className={setForecastButtonIconStyles(item)}>{item.icon}</Icon>
            </Button>
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
                                <Typography className={styles.weekItemDay}>
                                    {data?.day[currentWeatherType].avg}
                                </Typography>
                                <Typography className={styles.weekItemNight}>|</Typography>
                                <Typography className={styles.weekItemNight}>
                                    {data?.night[currentWeatherType].avg}
                                </Typography>
                                <Typography className={styles.weekItemUnit}>
                                    {data?.day[currentWeatherType].units}
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
            sx={{ overflow: 'hidden' }}
        >
            <WeatherHeader setShowInfoBlock={setShowInfoBlock} isDetails={true} />
            <TopWeatherInfo loadingLocation={loadingLocation} weatherLoc={weatherLoc} />
            <Box className={styles.forecastButtonBox}>
                {ctx.weatherLayers[ctx.weatherType].map((item, index) => (
                    <ForecastButtonItem item={item} index={index} key={index} />
                ))}
            </Box>
            {ctx.forecastLoading ? (
                <Loading />
            ) : !isDisabledType ? (
                <>
                    <Box id="se-weather-forecast-graph" sx={{ px: '16px' }}>
                        <ForecastGraph
                            data={forecastPreparedData}
                            weatherType={currentWeatherType}
                            weatherUnits={currentWeatherUnits}
                        />
                    </Box>
                    <Box
                        id="se-weather-forecast-week-details"
                        sx={{ overflowX: 'hidden', overflowY: 'auto !important', maxHeight: `${height - 450}px` }}
                    >
                        {currentWeatherType !== null &&
                            Object.entries(forecastPreparedData).map(([key, value], index) => (
                                <ForecastWeekItem day={key} data={value} key={index} index={index} />
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
    );
}

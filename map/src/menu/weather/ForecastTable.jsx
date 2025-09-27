import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import { CircularProgress, Divider, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import {
    openWeatherForecastDetails,
    dayFormatter,
    timeFormatter,
    PRECIP_LAYER_KEY,
    TEMP_LAYER_KEY,
    ECWMF_WEATHER_TYPE,
} from '../../manager/WeatherManager';
import styles from '../weather/weather.module.css';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { MAIN_URL_WITH_SLASH, WEATHER_FORECAST_URL, WEATHER_URL } from '../../manager/GlobalManager';
import { FORECAST_SOURCE_PARAM, FORECAST_TYPE_PARAM } from './Weather';

export default function ForecastTable({ dayForecast, weekForecast, currentTimeForecast, setHeaderForecast }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const navigate = useNavigate();
    const location = useLocation();

    const NOT_AVAILABLE = t('data_is_not_available');

    function getForecastValue(item) {
        function formatting(value) {
            return item.checkValue(value).toFixed(item.fixed);
        }
        const useDayForecast = ctx.weatherDate.getDay() === new Date().getDay();
        const forecast = useDayForecast ? dayForecast : weekForecast;
        if (ctx.weatherDate && forecast) {
            const timeKey = `${dayFormatter(ctx.weatherDate)} ${timeFormatter(ctx.weatherDate)}`;
            const currentF = useDayForecast ? currentTimeForecast?.day : currentTimeForecast?.week;
            const res = currentF ?? forecast?.filter((f) => f.time === timeKey);
            if (res?.length > 0) {
                if ((ctx.weatherType === ECWMF_WEATHER_TYPE && item.onlyGFS) || res[0][item.key] === undefined) {
                    return NOT_AVAILABLE;
                }
                const units = item.key === PRECIP_LAYER_KEY ? i18n?.t('web:weather_precip_mmh') : item.units;
                return `${formatting(res[0][item.key])} ${units}`;
            }
        }
    }

    const ForecastItem = ({ item, index }) => {
        const forecastValue = getForecastValue(item);
        const isLastItem = index === ctx.weatherLayers[ctx.weatherType].length - 1;

        useEffect(() => {
            if (forecastValue) {
                if (item.key === TEMP_LAYER_KEY) {
                    setHeaderForecast(forecastValue);
                }
            }
        }, [forecastValue]);

        return (
            <>
                <MenuItem
                    disabled={forecastValue === NOT_AVAILABLE}
                    className={styles.forecastItem}
                    id={'se-weather-forecast-' + item.name()}
                    key={index}
                    onClick={() => {
                        navigate({
                            pathname: MAIN_URL_WITH_SLASH + WEATHER_URL + WEATHER_FORECAST_URL,
                            search: `?${FORECAST_TYPE_PARAM}=${item.key}&${FORECAST_SOURCE_PARAM}=${ctx.weatherType}`,
                            hash: location.hash,
                        });
                        openWeatherForecastDetails(ctx, item.key, ctx.weatherType);
                    }}
                >
                    <ListItemIcon className={styles.forecastIcon}>{item.icon}</ListItemIcon>
                    <ListItemText>
                        <Typography
                            sx={{ color: forecastValue !== NOT_AVAILABLE ? '#237BFF' : '#727272' }}
                            variant="inherit"
                        >
                            {item.name()}
                        </Typography>
                    </ListItemText>
                    {ctx.forecastLoading ? (
                        <CircularProgress id="se-loading-weather-data" size={12} />
                    ) : (
                        <div style={{ display: 'flex' }}>
                            <Typography
                                id={
                                    'se-weather-forecast-data-' +
                                    item.name() +
                                    (forecastValue === NOT_AVAILABLE ? '-not-available' : '')
                                }
                                variant="body2"
                                className={styles.forecastData}
                            >
                                {forecastValue === NOT_AVAILABLE ? '' : forecastValue?.split(' ')[0]}
                            </Typography>
                            <Typography variant="body2" className={styles.forecastUnit}>
                                {forecastValue === NOT_AVAILABLE ? forecastValue : forecastValue?.split(' ')[1]}
                            </Typography>
                        </div>
                    )}
                </MenuItem>
                {!isLastItem && <Divider className={styles.forecastTableDivider} />}
            </>
        );
    };

    return (
        <>
            <Divider />
            {ctx.weatherLayers?.[ctx.weatherType].map((item, index) => (
                <ForecastItem item={item} index={index} key={item.id || item.name} />
            ))}
            <Divider sx={{ mt: '0px !important' }} />
        </>
    );
}

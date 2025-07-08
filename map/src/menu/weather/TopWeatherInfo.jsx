import { CircularProgress, ListItemText, Typography } from '@mui/material';
import i18n from 'i18next';
import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import styles from '../weather/weather.module.css';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

export default function TopWeatherInfo({
    loadingLocation,
    headerForecast = null,
    weatherLoc = null,
    useWeatherDate = false,
}) {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    function getSubInfo() {
        if (useWeatherDate) {
            let formattedDay = format(ctx.weatherDate, 'eeee', { locale: ctx.dateLocale });
            formattedDay = formattedDay.charAt(0).toUpperCase() + formattedDay.slice(1);
            return `${formattedDay}, ${ctx.weatherDate.toLocaleString(i18n.language, {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            })}`;
        } else {
            return t('web:weather_current');
        }
    }

    function getLocation() {
        if (weatherLoc?.address) {
            if (Object.keys(weatherLoc.address).length > 0) {
                const name = weatherLoc.address[i18n.language];
                if (name) {
                    return name;
                }
            }
        }
        return parseFloat(weatherLoc.lat).toFixed(4) + ', ' + parseFloat(weatherLoc.lon).toFixed(4);
    }

    return (
        <ListItemText>
            <div className={styles.topContainer}>
                <div>
                    {loadingLocation ? (
                        <CircularProgress size={20} />
                    ) : (
                        <>
                            {weatherLoc && (
                                <Typography id="se-weather-location" variant="body2" noWrap className={styles.address}>
                                    {getLocation()}
                                </Typography>
                            )}
                        </>
                    )}
                    <Typography variant="inherit" className={styles.currentDate}>
                        {getSubInfo()}
                    </Typography>
                </div>
                {headerForecast && (
                    <>
                        {ctx.forecastLoading ? (
                            <CircularProgress size={20} />
                        ) : (
                            <div style={{ display: 'flex' }}>
                                <Typography variant="body2" noWrap className={styles.headerForecastData}>
                                    {headerForecast?.split(' ')[0]}
                                </Typography>
                                <Typography variant="body2" noWrap className={styles.headerForecastUnit}>
                                    {headerForecast?.split(' ')[1]}
                                </Typography>
                            </div>
                        )}
                    </>
                )}
            </div>
        </ListItemText>
    );
}

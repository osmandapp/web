import { CircularProgress, ListItemText, Typography } from '@mui/material';
import i18n from 'i18next';
import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import styles from '../weather/weather.module.css';
import * as locales from 'date-fns/locale';
import { format } from 'date-fns';

export default function TopWeatherInfo({ headerForecast = null, weatherLoc = null, useWeatherDate = false }) {
    const ctx = useContext(AppContext);

    function getSubInfo() {
        if (useWeatherDate) {
            const locale = locales[i18n.language] || locales.enUS;
            let formattedDay = format(ctx.weatherDate, 'eeee', { locale });
            formattedDay = formattedDay.charAt(0).toUpperCase() + formattedDay.slice(1);
            return `${formattedDay}, ${ctx.weatherDate.toLocaleString(i18n.language, {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            })}`;
        } else {
            return 'Current location';
        }
    }

    return (
        <ListItemText>
            <div className={styles.topContainer}>
                <div>
                    {weatherLoc && (
                        <Typography id="se-weather-location" variant="body2" noWrap className={styles.address}>
                            {weatherLoc.address?.cityLocalNames[i18n.language]}
                        </Typography>
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

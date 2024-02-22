import { ListItemText, Typography } from '@mui/material';
import i18n from 'i18next';
import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import styles from '../weather/weather.module.css';

export default function TopWeatherInfo({ headerForecast, weatherLoc }) {
    const ctx = useContext(AppContext);

    return (
        <ListItemText>
            <div className={styles.topContainer}>
                <div>
                    <Typography variant="body2" noWrap className={styles.address}>
                        {weatherLoc?.address?.cityLocalNames[i18n.language]}
                    </Typography>
                    <Typography variant="inherit" className={styles.currentDate}>
                        {`${ctx.weatherDate.toLocaleString(i18n.language, { weekday: 'long' })}, ${ctx.weatherDate.toLocaleString(
                            i18n.language,
                            {
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: false,
                            }
                        )}`}
                    </Typography>
                </div>
                <div style={{ display: 'flex' }}>
                    <Typography variant="body2" noWrap className={styles.headerForecastData}>
                        {headerForecast?.split(' ')[0]}
                    </Typography>
                    <Typography variant="body2" noWrap className={styles.headerForecastUnit}>
                        {headerForecast?.split(' ')[1]}
                    </Typography>
                </div>
            </div>
        </ListItemText>
    );
}

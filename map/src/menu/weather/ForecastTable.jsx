import React, { useContext, useEffect } from 'react';
import AppContext, { OBJECT_TYPE_WEATHER } from '../../context/AppContext';
import { Divider, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import { addShowDetailsFlag, dayFormatter, timeFormatter } from '../../manager/WeatherManager';
import styles from '../weather/weather.module.css';

export default function ForecastTable({ dayForecast, weekForecast, currentTimeForecast, setHeaderForecast }) {
    const ctx = useContext(AppContext);

    const NOT_AVAILABLE = 'Not available';

    function getForecastValue(item) {
        function formatting(value) {
            return (value * item.mult).toFixed(item.fixed);
        }

        const useDayForecast = ctx.weatherDate.getDay() === new Date().getDay();
        const forecast = useDayForecast ? dayForecast : weekForecast;
        if (ctx.weatherDate && forecast) {
            const timeKey = `${dayFormatter(ctx.weatherDate)} ${timeFormatter(ctx.weatherDate)}`;
            const currentF = useDayForecast ? currentTimeForecast?.day : currentTimeForecast?.week;
            const res = currentF ?? forecast?.filter((f) => f[1] === timeKey);
            if (res?.length > 0) {
                if (item.index !== -1) {
                    return `${formatting(res[0][item.index])} ${item.units}`;
                } else {
                    return NOT_AVAILABLE;
                }
            }
        }
    }

    const ForecastItem = ({ item, index }) => {
        const forecastValue = getForecastValue(item);
        const isLastItem = index === ctx.weatherLayers[ctx.weatherType].length - 1;

        useEffect(() => {
            if (forecastValue) {
                if (item.key === 'temperature') {
                    setHeaderForecast(forecastValue);
                }
            }
        }, [forecastValue]);

        return (
            <>
                <MenuItem
                    disabled={forecastValue === NOT_AVAILABLE}
                    className={styles.forecastItem}
                    key={index}
                    onClick={() => {
                        ctx.setCurrentObjectType(OBJECT_TYPE_WEATHER);
                        addShowDetailsFlag(ctx, index);
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
                    <div style={{ display: 'flex' }}>
                        <Typography variant="body2" className={styles.forecastData}>
                            {forecastValue === NOT_AVAILABLE ? '' : forecastValue?.split(' ')[0]}
                        </Typography>
                        <Typography variant="body2" className={styles.forecastUnit}>
                            {forecastValue === NOT_AVAILABLE ? forecastValue : forecastValue?.split(' ')[1]}
                        </Typography>
                    </div>
                </MenuItem>
                {!isLastItem && <Divider className={styles.forecastTableDivider} />}
            </>
        );
    };

    return (
        <>
            <Divider />
            {ctx.weatherLayers &&
                ctx.weatherLayers[ctx.weatherType].map((item, index) => (
                    <ForecastItem item={item} index={index} key={index} />
                ))}
            <Divider sx={{ mt: '0px !important' }} />
        </>
    );
}

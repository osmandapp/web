import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import { ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import { dayFormatter, timeFormatter } from '../../manager/WeatherManager';

export default function ForecastTable({ dayForecast, weekForecast, currentTimeForecast, setHeaderForecast }) {
    const ctx = useContext(AppContext);

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
                }
            }
        }
    }

    const ForecastItem = ({ item, index }) => {
        const forecastValue = getForecastValue(item);

        useEffect(() => {
            if (forecastValue) {
                if (item.key === 'temperature') {
                    setHeaderForecast(forecastValue);
                }
            }
        }, [forecastValue]);

        return (
            <MenuItem key={index}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography variant="inherit" noWrap>
                            {item.name()}
                        </Typography>
                        <Typography variant="body2" noWrap>
                            {forecastValue}
                        </Typography>
                    </div>
                </ListItemText>
            </MenuItem>
        );
    };

    return (
        <>
            {ctx.weatherLayers &&
                ctx.weatherLayers[ctx.weatherType].map((item, index) => (
                    <ForecastItem item={item} index={index} key={index} />
                ))}
        </>
    );
}

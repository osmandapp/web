import { ListItem, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { currentDiffHours } from '../../manager/WeatherManager';
import AppContext from '../../context/AppContext';
import styles from '../weather/weather.module.css';

export default function WeatherInfo({ dayForecast, weekForecast }) {
    const ctx = useContext(AppContext);

    const [resultText, setResultText] = useState(null);

    useEffect(() => {
        const useDayForecast = ctx.weatherDate.getDay() === new Date().getDay();
        const forecast = useDayForecast ? dayForecast : weekForecast;
        if (ctx.weatherDate && forecast) {
            if (
                Array.isArray(forecast) &&
                forecast.length > 0 &&
                Array.isArray(forecast[0]) &&
                forecast[0].length > 7
            ) {
                const time = forecast[0][7];
                const weatherDateObj = new Date(time);
                let hourstr = 'now';
                let hours = currentDiffHours(ctx, weatherDateObj);

                if (hours !== 0) {
                    let day = 0;
                    while (hours >= 24) {
                        day++;
                        hours -= 24;
                    }
                    if (day > 0) {
                        if (day === 1) {
                            hourstr = '+ ' + day + ' day ';
                        } else {
                            hourstr = '+ ' + day + ' days ';
                        }
                        hours = hours - (hours % 3);
                    } else if (hours > 0) {
                        hourstr = '+';
                    }
                    if (hours > 0) {
                        hourstr += hours + ' hours';
                    } else if (hours < 0) {
                        hourstr = hours + ' hours';
                    }
                }
                setResultText(`${weatherDateObj.toDateString()}  ${weatherDateObj.getHours()}:00 [${hourstr}].`);
            }
        }
    }, [dayForecast, weekForecast]);

    return (
        <ListItem id="se-weather-info" className={styles.weatherInfoBlock}>
            <Typography className={styles.weatherInfo}>{`Weather generated: ${resultText}`}</Typography>
        </ListItem>
    );
}

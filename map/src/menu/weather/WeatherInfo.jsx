import { ListItem, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { currentDiffHours } from '../../manager/WeatherManager';
import AppContext from '../../context/AppContext';
import styles from '../weather/weather.module.css';

export default function WeatherInfo() {
    const ctx = useContext(AppContext);

    const [resultText, setResultText] = useState(null);

    useEffect(() => {
        let weatherDateObj = ctx.weatherDate;
        let hourstr = 'now';
        let hours = currentDiffHours(ctx, weatherDateObj);

        if (hours !== 0) {
            let day = 0;
            hours = hours % 24;
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
    }, [ctx.weatherDate, ctx.setWeatherDate, ctx.setWeatherLayers]);

    return (
        <ListItem className={styles.weatherInfoBlock}>
            <Typography className={styles.weatherInfo}>{`Weather generated: ${resultText}`}</Typography>
        </ListItem>
    );
}

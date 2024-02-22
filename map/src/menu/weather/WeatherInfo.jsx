import { Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { currentDiffHours } from '../../manager/WeatherManager';
import AppContext from '../../context/AppContext';

export default function WeatherInfo() {
    const ctx = useContext(AppContext);

    const [resultText, setResultText] = useState(null);

    useEffect(() => {
        let weatherDateObj = ctx.weatherDate;
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
    }, [ctx.weatherDate, ctx.setWeatherDate, ctx.setWeatherLayers]);

    return <Typography variant="inherit">{`Weather generated: ${resultText}`}</Typography>;
}

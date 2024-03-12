import React, { useContext, useEffect, useState } from 'react';
import { Box, Slider } from '@mui/material';
import AppContext from '../../context/AppContext';
import { getAlignedStep } from '../../manager/WeatherManager';

export default function TimeSlider() {
    const ctx = useContext(AppContext);

    const [availableMarks, setAvailableMarks] = useState([]);
    const [currentDay, setCurrentDay] = useState(null);
    const [currentWeatherType, setCurrentWeatherType] = useState(null);

    function calculateAvailableHours(ctx) {
        let currentHour = ctx.weatherDate.getHours();
        const alignedStep = getAlignedStep({ direction: 0, ctx });
        if (alignedStep) {
            currentHour = new Date(ctx.weatherDate.getTime() + alignedStep * 60 * 60 * 1000).getHours();
        }

        const availableHours = [{ value: currentHour, label: currentHour.toString().padStart(2, '0') }];

        const tryAddHour = (hour, direction) => {
            const alignedStep = getAlignedStep({ direction, ctx });
            if (alignedStep === direction) {
                let label = hour.toString().padStart(2, '0');
                availableHours.push({
                    value: hour,
                    label: label,
                });
                return true;
            }
            return false;
        };

        let lastAddedHour = currentHour;
        for (let hour = currentHour - 1; hour >= 0; hour--) {
            if (tryAddHour(hour, hour - lastAddedHour)) {
                lastAddedHour = hour;
            }
        }

        lastAddedHour = currentHour;
        for (let hour = currentHour + 1; hour < 24; hour++) {
            if (tryAddHour(hour, hour - lastAddedHour)) {
                lastAddedHour = hour;
            }
        }

        return availableHours.sort((a, b) => a.value - b.value);
    }

    // update available marks when day changes
    useEffect(() => {
        const newDay = ctx.weatherDate.getDate();
        if (newDay !== currentDay || currentWeatherType !== ctx.weatherType) {
            const newAvailableMarks = calculateAvailableHours(ctx);
            setAvailableMarks(newAvailableMarks);
            setCurrentDay(newDay);
            setCurrentWeatherType(ctx.weatherType);
        }
    }, [ctx.weatherDate]);

    const handleChange = (event, newValue) => {
        const newDate = new Date(ctx.weatherDate);
        newDate.setHours(newValue, 0, 0, 0);
        if (newDate.getTime() < new Date().getTime()) {
            return;
        }
        ctx.setWeatherDate(newDate);
    };

    const marks = Array.from({ length: 9 }, (_, index) => {
        const value = index * 3;
        let label = value.toString().padStart(2, '0');
        if (value === new Date().getHours()) {
            label = 'Now';
        }
        return { value, label };
    });

    return (
        <Box sx={{ width: 320, padding: 3 }}>
            <Slider
                track={false}
                size="small"
                step={availableMarks.length === 24 ? 1 : null}
                marks={availableMarks.length === 24 ? marks : availableMarks}
                min={0}
                max={23}
                value={ctx.weatherDate.getHours()}
                onChange={handleChange}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `${value}:00`}
                sx={{
                    color: '#237BFF',
                    '& .MuiSlider-thumb': {
                        color: '#237BFF',
                    },
                }}
            />
        </Box>
    );
}

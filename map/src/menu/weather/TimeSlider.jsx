import React, { useContext, useEffect, useState } from 'react';
import { Box, Slider } from '@mui/material';
import WeatherContext from '../../context/WeatherContext';
import { getAlignedStep } from '../../manager/WeatherManager';

export default function TimeSlider() {
    const wtx = useContext(WeatherContext);

    const [availableMarks, setAvailableMarks] = useState([]);
    const [currentDay, setCurrentDay] = useState(null);
    const [currentWeatherType, setCurrentWeatherType] = useState(null);

    function calculateAvailableHours(wtx) {
        let currentHour = wtx.weatherDate.getHours();
        const alignedStep = getAlignedStep({ direction: 0, wtx });
        if (alignedStep) {
            currentHour = new Date(wtx.weatherDate.getTime() + alignedStep * 60 * 60 * 1000).getHours();
        }

        const availableHours = [{ value: currentHour, label: currentHour.toString().padStart(2, '0') }];

        const tryAddHour = (hour, direction) => {
            const alignedStep = getAlignedStep({ direction, wtx });
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
        const newDay = wtx.weatherDate.getDate();
        if (newDay !== currentDay || currentWeatherType !== wtx.weatherType) {
            const newAvailableMarks = calculateAvailableHours(wtx);
            setAvailableMarks(newAvailableMarks);
            setCurrentDay(newDay);
            setCurrentWeatherType(wtx.weatherType);
        }
    }, [wtx.weatherDate]);

    const handleChange = (event, newValue) => {
        const newDate = new Date(wtx.weatherDate);
        newDate.setHours(newValue, 0, 0, 0);
        if (newDate.getTime() < new Date().getTime()) {
            return;
        }
        wtx.setWeatherDate(newDate);
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
                value={wtx.weatherDate.getHours()}
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

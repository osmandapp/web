import React, { useContext, useEffect, useState, useRef } from 'react';
import { Box, ListItemButton, Typography } from '@mui/material';
import i18n from 'i18next';
import { isEmpty } from 'lodash';
import AppContext from '../../context/AppContext';
import { getAlignedStep } from '../../manager/WeatherManager';
import styles from '../weather/weather.module.css';
import * as locales from 'date-fns/locale';
import { format } from 'date-fns';

export default function DayCardsCarousel() {
    const ctx = useContext(AppContext);

    const [dayList, setDayList] = useState({});
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const carouselRef = useRef(null);

    function formatDay(currentDay) {
        const locale = locales[i18n.language] || locales.enUS;
        const formattedDay = format(currentDay, 'eee', { locale });
        return formattedDay.charAt(0).toUpperCase() + formattedDay.slice(1);
    }

    useEffect(() => {
        const dates = Array.from({ length: 7 }, (_, i) => {
            const date = new Date();
            date.setDate(date.getDate() + i);
            return {
                date: date.toISOString(),
                day: formatDay(date),
                num: date.getDate(),
            };
        });

        const datesMap = dates.reduce((acc, curr) => {
            acc[curr.date] = {
                day: curr.day,
                num: curr.num,
            };
            return acc;
        }, {});

        setDayList(datesMap);
    }, []);

    const onMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const onMouseLeave = () => {
        setIsDragging(false);
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    const onMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 3;
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    const DayItem = (day) => (
        <>
            <Typography className={styles.dayItemDay}>{day.day}</Typography>
            <Typography className={styles.dayItemNum}>{day.num}</Typography>
        </>
    );

    function setDayStyles(currentDay) {
        let res = [];
        res.push(styles.dayItem);

        if (currentDay.getDay() === ctx.weatherDate.getDay()) {
            res.push(styles.selectedItemDay);
        }

        return res.join(' ');
    }

    return (
        <Box
            ref={carouselRef}
            className={styles.dayCarousel}
            sx={{
                cursor: isDragging ? 'grabbing' : 'grab',
            }}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
        >
            {!isEmpty(dayList) &&
                Object.entries(dayList).map(([key, value], index) => {
                    let currentDay = new Date(key);
                    return (
                        <ListItemButton
                            id={'se-weather-day-item-' + index}
                            key={index}
                            className={setDayStyles(currentDay)}
                            onClick={() => {
                                const alignedStep = getAlignedStep({ direction: 0, weatherDate: currentDay, ctx });
                                if (alignedStep) {
                                    currentDay = new Date(currentDay.getTime() + alignedStep * 60 * 60 * 1000);
                                }
                                ctx.setWeatherDate(currentDay);
                            }}
                        >
                            {DayItem(value)}
                        </ListItemButton>
                    );
                })}
        </Box>
    );
}

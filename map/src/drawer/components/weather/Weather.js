import React, { useState, useContext, useEffect } from 'react';
import { Typography, ListItemText, Switch, Collapse, Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { IconButton, Divider, MenuItem, ListItemIcon } from '@mui/material';
import { Air, ExpandLess, ExpandMore, Thermostat, NavigateNext, NavigateBefore, RestartAlt } from '@mui/icons-material';
import AppContext from '../../../context/AppContext';
import _ from 'lodash';
import WeatherManager from '../../../context/WeatherManager';

export default function Weather() {
    const ctx = useContext(AppContext);

    const GFS_WEATHER_TYPE = 'gfs'; // step 1 hour, after 24 hours after the current time - 3 hours
    const ECWMF_WEATHER_TYPE = 'ecmwf'; // step 3 hour, after 5 days after the current day - 6 hours

    const MIN_WEATHER_DAYS = -2;
    const MAX_WEATHER_DAYS = +7;

    const [weatherOpen, setWeatherOpen] = useState(false);

    const currentDiffHours =
        Math.trunc(ctx.weatherDate.getTime() / (3600 * 1000)) - Math.trunc(new Date().getTime() / (3600 * 1000));

    const handleWeatherType = (event, selectedType) => {
        if (selectedType !== null && selectedType !== ctx.weatherType) {
            ctx.setWeatherType(selectedType);
        }
    };

    const switchLayer = (ctx, index, weatherType) => (e) => {
        let newLayers = { ...ctx.weatherLayers };
        newLayers[weatherType][index].checked = e.target.checked;
        ctx.setWeatherLayers(newLayers);
    };

    function addWeatherHours(ctx, hours) {
        const dt = new Date(ctx.weatherDate.getTime() + hours * 60 * 60 * 1000);
        ctx.setWeatherDate(dt);
    }

    function resetWeatherDate() {
        const alignedStep = getAlignedStep({ direction: 0, diffHours: 0, date: new Date() });
        if (alignedStep) {
            const alignedDate = new Date(new Date().getTime() + alignedStep * 60 * 60 * 1000);
            ctx.setWeatherDate(alignedDate);
        } else {
            ctx.setWeatherDate(new Date());
        }
    }

    useEffect(() => {
        if (ctx.currentObjectType === ctx.OBJECT_TYPE_WEATHER) {
            WeatherManager.displayWeatherForecast(ctx, ctx.setWeatherPoint, ctx.weatherType).then();
        }
        if (ctx.weatherType) {
            const alignedStep = getAlignedStep({ direction: 0 });
            if (alignedStep) {
                // console.log('align-current', alignedStep);
                addWeatherHours(ctx, alignedStep); // step current when need
            }
        }
    }, [ctx.weatherType]);

    useEffect(() => {
        if (ctx.currentObjectType === ctx.OBJECT_TYPE_WEATHER) {
            WeatherManager.displayWeatherForecast(ctx, ctx.setWeatherPoint, ctx.weatherType).then();
        }
        let newLayers = { ...ctx.weatherLayers };
        Object.keys(newLayers).forEach((type) => {
            if (type !== ctx.weatherType) {
                newLayers[type].forEach((l) => {
                    if (l.checked) {
                        const index = _.indexOf(newLayers[type], l);
                        if (!disableLayers(newLayers[ctx.weatherType][index])) {
                            newLayers[ctx.weatherType][index].checked = true;
                        }
                        newLayers[type][index].checked = false;
                    }
                });
            }
        });
        ctx.setWeatherLayers(newLayers);
    }, [ctx.weatherType]);

    useEffect(() => {
        let resultText = '';
        let weatherDateObj = ctx.weatherDate;
        let hourstr = 'now';
        let hours = currentDiffHours;

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

        if (weatherOpen) {
            resultText = `${weatherDateObj.toDateString()}  ${weatherDateObj.getHours()}:00 [${hourstr}].`;
        }

        ctx.setHeaderText((prevState) => ({
            ...prevState,
            weather: { text: resultText },
        }));
    }, [ctx.weatherPoint, ctx.setWeatherPoint, ctx.weatherDate, ctx.setWeatherDate, ctx.setWeatherLayers, weatherOpen]);

    function disableLayers(item) {
        return (item.key === 'wind' || item.key === 'cloud') && ctx.weatherType === ECWMF_WEATHER_TYPE;
    }

    function getBaseStep(diffHours) {
        if (ctx.weatherType === ECWMF_WEATHER_TYPE) {
            return Math.abs(diffHours) + new Date().getUTCHours() >= 120 ? 6 : 3;
        }
        if (ctx.weatherType === GFS_WEATHER_TYPE) {
            return Math.abs(diffHours) >= 24 ? 3 : 1;
        }
        return 0;
    }

    // align-backward (<0) align-forward (>0) else just align if needed
    function getAlignedStep({ direction, diffHours = currentDiffHours, date = ctx.weatherDate }) {
        const baseStep = getBaseStep(diffHours);

        const baseStepWithDirection = direction < 0 ? -baseStep : direction > 0 ? +baseStep : 0;
        const newHoursUTC = new Date(date.getTime() + baseStepWithDirection * 3600 * 1000).getUTCHours();

        if (newHoursUTC % baseStep === 0) {
            // console.log('ideal', baseStepWithDirection);
            return baseStepWithDirection;
        }

        const currentHoursUTC = date.getUTCHours();
        const alignedStep = direction < 0 ? -(currentHoursUTC % baseStep) : +(baseStep - (currentHoursUTC % baseStep));
        // console.log('aligned', alignedStep);
        return alignedStep;
    }

    return (
        <>
            <MenuItem
                sx={{ mb: 1 }}
                onClick={() => {
                    setWeatherOpen(!weatherOpen);
                    if (!weatherOpen) {
                        ctx.setCurrentObjectType(null);
                    }
                }}
            >
                <ListItemIcon>
                    <Air fontSize="small" />
                </ListItemIcon>
                <ListItemText>Weather</ListItemText>
                {weatherOpen ? <ExpandLess /> : <ExpandMore />}
            </MenuItem>

            {ctx.weatherType && (
                <Collapse in={weatherOpen} timeout="auto" unmountOnExit>
                    <ToggleButtonGroup
                        color="primary"
                        value={ctx.weatherType}
                        exclusive
                        fullWidth={true}
                        onChange={handleWeatherType}
                        aria-label="Platform"
                    >
                        <ToggleButton value={GFS_WEATHER_TYPE}>GFS</ToggleButton>
                        <ToggleButton value={ECWMF_WEATHER_TYPE}>ECWMF</ToggleButton>
                    </ToggleButtonGroup>
                    {ctx.weatherLayers &&
                        ctx.weatherLayers[ctx.weatherType].map((item, index) => (
                            <MenuItem key={item.key}>
                                <ListItemIcon sx={{ ml: 2 }}>
                                    {item.iconComponent ? item.iconComponent : <Thermostat fontSize="small" />}
                                </ListItemIcon>
                                <ListItemText>{item.name}</ListItemText>
                                <Switch
                                    disabled={disableLayers(item)}
                                    checked={item.checked}
                                    onChange={switchLayer(ctx, index, ctx.weatherType)}
                                />
                            </MenuItem>
                        ))}
                    <MenuItem disableRipple={true}>
                        <IconButton sx={{ ml: 1 }} disabled={currentDiffHours === 0} onClick={resetWeatherDate}>
                            <RestartAlt />
                        </IconButton>
                        <IconButton
                            sx={{ ml: 1 }}
                            disabled={currentDiffHours <= MIN_WEATHER_DAYS * 24}
                            onClick={() => addWeatherHours(ctx, getAlignedStep({ direction: -1 }))}
                        >
                            <NavigateBefore />
                        </IconButton>
                        <Typography>
                            {ctx.weatherDate.toLocaleDateString() + ' ' + ctx.weatherDate.getHours() + ':00'}
                        </Typography>
                        <IconButton
                            disabled={currentDiffHours >= MAX_WEATHER_DAYS * 24}
                            onClick={() => addWeatherHours(ctx, getAlignedStep({ direction: +1 }))}
                        >
                            <NavigateNext />
                        </IconButton>
                    </MenuItem>
                    <MenuItem>
                        <Button
                            variant="contained"
                            component="span"
                            sx={{ ml: 3 }}
                            onClick={() =>
                                WeatherManager.displayWeatherForecast(ctx, ctx.setWeatherPoint, ctx.weatherType)
                            }
                        >
                            Weather Forecast
                        </Button>
                    </MenuItem>
                    <Divider />
                </Collapse>
            )}
        </>
    );
}

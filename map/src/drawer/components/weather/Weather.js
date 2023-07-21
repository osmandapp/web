import React, { useState, useContext, useEffect } from 'react';
import { Typography, ListItemText, Switch, Collapse, Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { IconButton, Divider, MenuItem, ListItemIcon } from '@mui/material';
import { Air, ExpandLess, ExpandMore, Thermostat, NavigateNext, NavigateBefore } from '@mui/icons-material';
import AppContext from '../../../context/AppContext';
import _ from 'lodash';
import WeatherManager from '../../../context/WeatherManager';

export default function Weather() {
    const ctx = useContext(AppContext);

    const GFS_WEATHER_TYPE = 'gfs';
    const ECWMF_WEATHER_TYPE = 'ecmwf';

    const [weatherOpen, setWeatherOpen] = useState(false);

    let diffHours = (-(new Date().getTime() - ctx.weatherDate.getTime()) / 3600000).toFixed(0); // diff between current and selected

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
        let dt = new Date(ctx.weatherDate.getTime() + hours * 60 * 60 * 1000);
        ctx.setWeatherDate(dt);
    }

    useEffect(() => {
        if (ctx.currentObjectType === ctx.OBJECT_TYPE_WEATHER) {
            WeatherManager.displayWeatherForecast(ctx, ctx.setWeatherPoint, ctx.weatherType).then();
        }
        if (ctx.weatherType === ECWMF_WEATHER_TYPE) {
            if (ctx.weatherDate.getHours() % 3 !== 0 || ctx.weatherDate.getHours() !== 0) {
                addWeatherHours(ctx, getStep(false));
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
        if (diffHours !== 0) {
            let day = 0;
            while (diffHours >= 24) {
                day++;
                diffHours -= 24;
            }
            if (day > 0) {
                if (day === 1) {
                    hourstr = '+ ' + day + ' day ';
                } else {
                    hourstr = '+ ' + day + ' days ';
                }
                diffHours = diffHours - (diffHours % 3);
            } else if (diffHours > 0) {
                hourstr = '+';
            }
            if (diffHours > 0) {
                hourstr += diffHours + ' hours';
            } else if (diffHours < 0) {
                hourstr = diffHours + ' hours';
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

    function getStep(increment) {
        let step = 1;
        const time = ctx.weatherDate.getUTCHours();
        if (ctx.weatherType === ECWMF_WEATHER_TYPE) {
            if (time !== 0 && time % 3 !== 0) {
                step = time % 3;
            } else {
                step = 3;
            }
            // step 6 after 5 days
            if (Math.abs(diffHours) + new Date().getUTCHours() >= 120) {
                step += 3;
            }
        } else {
            // step 3 after 1 day
            if (Math.abs(diffHours) + new Date().getUTCHours() >= 24) {
                step = 3;
            }
        }
        return increment ? step : -step;
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
                        <IconButton sx={{ ml: 1 }} onClick={() => addWeatherHours(ctx, getStep(false))}>
                            <NavigateBefore />
                        </IconButton>
                        <Typography>
                            {ctx.weatherDate.toLocaleDateString() + ' ' + ctx.weatherDate.getHours() + ':00'}
                        </Typography>
                        <IconButton onClick={() => addWeatherHours(ctx, getStep(true))}>
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

import React, {useState, useContext, useEffect} from 'react';
import {
    Typography, ListItemText, Switch, Collapse, Button, ToggleButton, ToggleButtonGroup,
} from "@mui/material";
import {
    IconButton, Divider, MenuItem, ListItemIcon
} from "@mui/material";
import {
    Air, ExpandLess, ExpandMore, Thermostat, NavigateNext, NavigateBefore,
} from '@mui/icons-material';
import AppContext from "../../../context/AppContext"
import { apiGet } from '../../../util/HttpApi';
import _ from "lodash";


async function displayWeatherForecast(ctx, setWeatherPoint, weatherType) {
    let lat = 0;
    let lon = 0;
    if (window.location.hash) {
        let spl = window.location.hash.split('/');
        if (spl.length > 1) {
            lon = parseFloat(spl[spl.length - 1]);
            lat = parseFloat(spl[spl.length - 2]);
        }
    }
    let data = {lat: lat, lon: lon}
    const response = await apiGet(`${process.env.REACT_APP_WEATHER_API_SITE}/weather-api/point-info?lat=${data.lat}&lon=${data.lon}&weatherType=${weatherType}&week=false`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
    if (response.ok) {
        data.day = await response.json();
    }
    const responseWeek = await apiGet(`${process.env.REACT_APP_WEATHER_API_SITE}/weather-api/point-info?lat=${data.lat}&lon=${data.lon}&weatherType=${weatherType}&week=true`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
    if (responseWeek.ok) {
        data.week = await responseWeek.json();
    }
    setWeatherPoint(data);
    let type = ctx.OBJECT_TYPE_WEATHER;
    ctx.setCurrentObjectType(type);
}

const switchLayer = (ctx, index, weatherType) => (e) => {
    let newLayers = {...ctx.weatherLayers};
    newLayers[weatherType][index].checked = e.target.checked;
    ctx.setWeatherLayers(newLayers);
}

export default function Weather() {

    const ctx = useContext(AppContext);

    const GFS_WEATHER_TYPE = 'gfs';
    const ECWMF_WEATHER_TYPE = 'ecmwf';

    let hours = (-(new Date().getTime() - ctx.weatherDate.getTime()) / 3600000).toFixed(0);
    let utcHours = new Date().getUTCHours();
    let gmt30Hours = 24 - (utcHours % 3); // here we need to align to GMT hours
    const [weatherOpen, setWeatherOpen] = useState(false);

    const handleWeatherType = (event, selectedType) => {
        if (selectedType !== null && selectedType !== ctx.weatherType) {
            ctx.setWeatherType(selectedType);
        }
    };

    function addWeatherHours(ctx, hours) {
        let dt = new Date(ctx.weatherDate.getTime() + (hours * 60 * 60 * 1000));
        ctx.setWeatherDate(dt);
    }

    useEffect(() => {
        if (ctx.currentObjectType === ctx.OBJECT_TYPE_WEATHER) {
            displayWeatherForecast(ctx, ctx.setWeatherPoint, ctx.weatherType).then();
        }
        if (ctx.weatherType === ECWMF_WEATHER_TYPE) {
            if ((ctx.weatherDate.getHours() % 3) !== 0 || ctx.weatherDate.getHours() !== 0) {
                addWeatherHours(ctx, getTime(false));
            }
        }
    }, [ctx.weatherType]);

    useEffect(() => {
        if (ctx.currentObjectType === ctx.OBJECT_TYPE_WEATHER) {
            displayWeatherForecast(ctx, ctx.setWeatherPoint, ctx.weatherType).then();
        }
        let newLayers = {...ctx.weatherLayers};
        Object.keys(newLayers).forEach(type => {
            if (type !== ctx.weatherType) {
                newLayers[type].forEach(l => {
                    if (l.checked) {
                        const index = _.indexOf(newLayers[type], l);
                        if (!disableLayers(newLayers[ctx.weatherType][index])) {
                            newLayers[ctx.weatherType][index].checked = true;
                        }
                        newLayers[type][index].checked = false;
                    }
                })
            }
        })
        ctx.setWeatherLayers(newLayers);
    }, [ctx.weatherType]);

    useEffect(() => {
        let resultText = '';
        let weatherDateObj = ctx.weatherDate;
        let hours = (-(new Date().getTime() - weatherDateObj.getTime()) / 3600000).toFixed(0);
        let hourstr = "now"
        if (hours !== 0) {
            let day = 0;
            while (hours >= 24) {
                day++;
                hours -= 24;
            }
            if (day > 0) {
                if (day === 1) {
                    hourstr = "+ " + day + " day ";
                } else {
                    hourstr = "+ " + day + " days ";
                }
                hours = hours - hours % 3;
            } else if (hours > 0) {
                hourstr = "+";
            }
            if (hours > 0) {
                hourstr += hours + " hours";
            } else if (hours < 0) {
                hourstr = hours + " hours";
            }
        }

        if (weatherOpen) {
            resultText = `${weatherDateObj.toDateString()}  ${weatherDateObj.getHours()}:00 [${hourstr}].`;
        }

        ctx.setHeaderText(prevState => ({
            ...prevState,
            weather: {text: resultText}
        }));

    }, [ctx.weatherPoint, ctx.setWeatherPoint, ctx.weatherDate, ctx.setWeatherDate, ctx.setWeatherLayers, weatherOpen]);

    function disableLayers(item) {
        return (item.key === 'wind' || item.key === 'cloud') && ctx.weatherType === ECWMF_WEATHER_TYPE;
    }

    function getTime(increment) {
        let step = 1;
        if (ctx.weatherType === ECWMF_WEATHER_TYPE) {
            const time = ctx.weatherDate.getHours()
            if (time !== 0 && time % 3 !== 0) {
                step = time % 3;
            } else {
                step = 3;
            }
        }
        step = hours >= gmt30Hours ? step + 2 : step;
        return increment ? step : -step;
    }


    return <>
        <MenuItem sx={{mb: 1}} onClick={() => {
            setWeatherOpen(!weatherOpen);
            if (!weatherOpen) {
                ctx.setCurrentObjectType(null);
            }
        }}>
            <ListItemIcon>
                <Air fontSize="small"/>
            </ListItemIcon>
            <ListItemText>Weather</ListItemText>
            {weatherOpen ? <ExpandLess/> : <ExpandMore/>}
        </MenuItem>

        {ctx.weatherType && <Collapse in={weatherOpen} timeout="auto" unmountOnExit>
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
            {ctx.weatherLayers && ctx.weatherLayers[ctx.weatherType].map((item, index) => (
                <MenuItem key={item.key}>
                    <ListItemIcon sx={{ml: 2}}>
                        {item.iconComponent ?
                            item.iconComponent :
                            <Thermostat fontSize="small"/>
                        }
                    </ListItemIcon>
                    <ListItemText>{item.name}</ListItemText>
                    <Switch
                        disabled={disableLayers(item)}
                        checked={item.checked}
                        onChange={switchLayer(ctx, index, ctx.weatherType)}/>
                </MenuItem>
            ))}
            <MenuItem disableRipple={true}>
                <IconButton sx={{ml: 1}} onClick={() => addWeatherHours(ctx, getTime(false))}>
                    <NavigateBefore/>
                </IconButton>
                <Typography>{ctx.weatherDate.toLocaleDateString() + " " + ctx.weatherDate.getHours() + ":00"}</Typography>
                <IconButton onClick={() => addWeatherHours(ctx, getTime(true))}>
                    <NavigateNext/>
                </IconButton>
            </MenuItem>
            <MenuItem>
                <Button variant="contained" component="span" sx={{ml: 3}}
                        onClick={() => displayWeatherForecast(ctx, ctx.setWeatherPoint, ctx.weatherType)}>
                    Weather Forecast
                </Button>
            </MenuItem>
            <Divider/>
        </Collapse>}
    </>
};

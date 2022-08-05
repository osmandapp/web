import React, {useState, useContext, useEffect} from 'react';
import {
    Typography, ListItemText, Switch, Collapse, Button,
} from "@mui/material";
import {
    IconButton, Divider, MenuItem, ListItemIcon
} from "@mui/material";
import {
    Air, ExpandLess, ExpandMore, Thermostat, NavigateNext, NavigateBefore,
} from '@mui/icons-material';
import AppContext, {toHHMMSS} from "../../../context/AppContext"


async function displayWeather(ctx, setWeatherPoint) {
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
    const response = await fetch(`${process.env.REACT_APP_WEATHER_API_SITE}/weather-api/point-info?lat=${data.lat}&lon=${data.lon}&week=false`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
    if (response.ok) {
        data.day = await response.json();
    }
    const responseWeek = await fetch(`${process.env.REACT_APP_WEATHER_API_SITE}/weather-api/point-info?lat=${data.lat}&lon=${data.lon}&week=true`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
    if (responseWeek.ok) {
        data.week = await responseWeek.json();
    }
    setWeatherPoint(data);
    ctx.setCurrentObjectType('weather');
}

const addWeatherHours = (ctx, hours) => () => {
    let dt = new Date(ctx.weatherDate.getTime() + (hours * 60 * 60 * 1000));
    ctx.setWeatherDate(dt);
}

const switchLayer = (ctx, index) => (e) => {
    let newlayers = [...ctx.weatherLayers];
    newlayers[index].checked = e.target.checked;
    ctx.updateWeatherLayers(newlayers);
}

export default function Weather() {
    const ctx = useContext(AppContext);
    let hours = (-(new Date().getTime() - ctx.weatherDate.getTime()) / 3600000).toFixed(0);
    let utcHours = new Date().getUTCHours();
    let gmt30Hours = 24 - (utcHours % 3); // here we need to align to GMT hours
    const [weatherOpen, setWeatherOpen] = useState(false);

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
            resultText = `${weatherDateObj.toDateString()}  ${weatherDateObj.getHours()}:00 [${hourstr}]`;
        }

        ctx.setHeaderText(prevState => ({
            ...prevState,
            weather: {text: resultText}
        }));

    }, [ctx.weatherPoint, ctx.setWeatherPoint, ctx.weatherDate, ctx.setWeatherDate, ctx.updateWeatherLayers, weatherOpen]);

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

        <Collapse in={weatherOpen} timeout="auto" unmountOnExit>
            {ctx.weatherLayers.map((item, index) => (
                <MenuItem key={item.key}>
                    <ListItemIcon sx={{ml: 2}}>
                        {item.iconComponent ?
                            item.iconComponent :
                            <Thermostat fontSize="small"/>
                        }
                    </ListItemIcon>
                    <ListItemText>{item.name}</ListItemText>
                    <Switch
                        checked={item.checked}
                        onChange={switchLayer(ctx, index)}/>
                </MenuItem>
            ))}
            <MenuItem disableRipple={true}>
                <IconButton sx={{ml: 1}} onClick={addWeatherHours(ctx, hours > gmt30Hours ? -3 : -1)}>
                    <NavigateBefore/>
                </IconButton>
                <Typography>{ctx.weatherDate.toLocaleDateString() + " " + ctx.weatherDate.getHours() + ":00"}</Typography>
                <IconButton onClick={addWeatherHours(ctx, hours >= gmt30Hours ? 3 : 1)}>
                    <NavigateNext/>
                </IconButton>
            </MenuItem>
            <MenuItem>
                <Button variant="contained" component="span" sx={{ml: 3}}
                        onClick={() => displayWeather(ctx, ctx.setWeatherPoint)}>
                    Weather Forecast
                </Button>
            </MenuItem>
            <Divider/>
        </Collapse>
    </>
};
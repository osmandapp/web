import {Box, Typography} from "@mui/material";
import React, {useContext, useEffect, useState} from "react";
import AppContext, {toHHMMSS} from "../../../context/AppContext";
import SearchInfo from "./SearchInfo";

export default function HeaderInfo() {

    const ctx = useContext(AppContext);

    const [textInfo, setTextInfo] = useState({
        tracks: {text: ''},
        weather: {text: ''},
        welcome: {text: ''}
    });

    useEffect(() => {
        if (ctx.selectedObjects.tracks) {
            let text = addTrackInfo();
            setTextInfo(prevState => ({
                ...prevState,
                tracks: {text: text},
                weather: {text: ''},
                welcome: {text: ''}
            }));
        } else if (ctx.selectedObjects.weather) {
            let text = addWeatherInfo();
            setTextInfo(prevState => ({
                ...prevState,
                tracks: {text: ''},
                weather: {text: text},
                welcome: {text: ''}
            }));
        } else {
            setTextInfo(prevState => ({
                ...prevState,
                tracks: {text: ''},
                weather: {text: ''},
                welcome: {text: process.env.REACT_APP_WEBSITE_NAME}
            }));
        }
    }, [ctx.selectedObjects, ctx.setSelectedObjects]);

    function addTrackInfo() {
        let dist = 0;
        let tracks = 0;
        let seg = 0;
        let wpts = 0;
        let time = 0;
        let diffUp = 0;
        let diffDown = 0;
        Object.values(ctx.gpxFiles).forEach((item) => {
            if (item.local !== true && item.summary && item.url) {
                if (item.summary.totalTracks) {
                    tracks += item.summary.totalTracks;
                }
                if (item.summary.points) {
                    seg += item.summary.points - 1;
                }
                if (item.summary.wptPoints) {
                    wpts += item.summary.wptPoints;
                }
                if (item.summary.totalDistance) {
                    dist += item.summary.totalDistance;
                }
                if (item.summary.timeMoving) {
                    time += item.summary.timeMoving;
                }
                if (item.summary.diffElevationUp) {
                    diffUp += item.summary.diffElevationUp;
                }
                if (item.summary.diffElevationDown) {
                    diffDown += item.summary.diffElevationDown;
                }
            }

            if (item.local === true && item.summary && item.url) {
                if (item.summary.totalTracks) {
                    tracks += item.summary.totalTracks;
                }
                if (item.summary.wptPoints) {
                    wpts += item.summary.wptPoints;
                }
                if (item.summary.totalDistance) {
                    dist += item.summary.totalDistance;
                }
            }
        });

        Object.values(ctx.localClientsTracks).forEach((item) => {
            if (item.selected) {
                tracks++;
            }
        });

        let segInfo = seg > 0 ? `: ${seg} segments` : ``;
        let distInfo = dist > 0 ? `, ${(dist / 1000.0).toFixed(1)} km` : ``;
        let wptInfo = wpts > 0 ? `, ${wpts} wpts.` : ``;
        let timeInfo = time > 0 ? ` Time moving: ${toHHMMSS(time)}.` : ``;
        let uphillDownhillInfo = diffUp > 0 || diffDown ? ` Uphill / Downhill: ${(diffUp).toFixed(0)} / ${(diffDown).toFixed(0)} m.` : ``;

        return `Selected ${tracks} Tracks${segInfo}${distInfo}${wptInfo}${timeInfo}${uphillDownhillInfo}`
    }

    function addWeatherInfo() {
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
        return `${weatherDateObj.toDateString()}  ${weatherDateObj.getHours()}:00 [${hourstr}]`;
    }

    return <Box>
        <Typography variant="h6" color="inherit" style={{display: 'inline'}}>
            <SearchInfo/>
            {textInfo.tracks.text + textInfo.weather.text + textInfo.welcome.text}
        </Typography>
    </Box>
}
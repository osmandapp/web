import {Box, Typography} from "@mui/material";
import React, {useContext, useEffect, useState} from "react";
import AppContext, {toHHMMSS} from "../../../context/AppContext";
import SearchInfo from "./SearchInfo";

export default function HeaderInfo() {

    const ctx = useContext(AppContext);

    const [textInfo, setTextInfo] = useState('');

    useEffect(() => {

        function selectedObjectsEmpty() {
            return !ctx.selectedObjects.cloudTracks && !ctx.selectedObjects.localServerTracks && !ctx.selectedObjects.localClientTracks && !ctx.selectedObjects.weather;
        }

        if (selectedObjectsEmpty()) {
            setTextInfo('');
        } else {
            setTextInfo(<div>
                {ctx.selectedObjects.cloudTracks && addCloudTrackInfo()}
                {ctx.selectedObjects.cloudTracks ?
                    <br/> : <></>} {ctx.selectedObjects.localServerTracks && addLocalServerInfo()}
                {ctx.selectedObjects.localServerTracks ?
                    <br/> : <></>} {ctx.selectedObjects.localClientTracks && addLocalClientInfo()}
                {ctx.selectedObjects.localClientTracks ?
                    <br/> : <></>} {ctx.selectedObjects.weather && addWeatherInfo()}
            </div>)
        }
    }, [ctx.selectedObjects, ctx.setSelectedObjects]);

    function addCloudTrackInfo() {
        let dist = 0;
        let tracks = 0;
        let wpts = 0;
        let time = 0;
        let diffUp = 0;
        let diffDown = 0;
        Object.values(ctx.gpxFiles).forEach((item) => {
            if (item.local !== true && item.summary && item.url) {
                if (item.summary.totalTracks) {
                    tracks += item.summary.totalTracks;
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
        });

        return `Selected GPX files: ${tracks} tracks, ${(dist / 1000.0).toFixed(1)} km, ${wpts} wpts. 
            Time moving: ${toHHMMSS(time)}. 
            Uphill / Downhill: ${(diffUp).toFixed(0)} / ${(diffDown).toFixed(0)} m.`
    }

    function addLocalServerInfo() {
        let dist = 0;
        let tracks = 0;
        let wpts = 0;
        Object.values(ctx.gpxFiles).forEach((item) => {
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
        return `Selected local saved GPX files: ${tracks} tracks, ${(dist / 1000.0).toFixed(1)} km, ${wpts} wpts`
    }

    function addLocalClientInfo() {
        let tracks = 0;
        Object.values(ctx.localClientsTracks).forEach((item) => {
            if (item.selected) {
                tracks++;
            }
        });
        return `Selected local GPX files: ${tracks} tracks`
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

    return <Box sx={{ml: 1}}>
        {textInfo === ''
            ? <SearchInfo/>
            : <Typography variant="h6" color="inherit">
                {textInfo}
            </Typography>}
    </Box>
}
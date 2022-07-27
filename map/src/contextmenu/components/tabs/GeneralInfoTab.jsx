import React from 'react';
import {Typography, Box, Button} from "@mui/material";
import {toHHMMSS} from "../../../context/AppContext"

export default function GeneralInfoTab({width, summary, url}) {
    let timeRange = '';
    let distance = '';
    let timeMoving = '';
    let updownhill = '';
    let speed = '';
    let elevation = '';
    // item.details?.analysis ?
    let info = summary;
    if (info?.startTime &&
        info?.startTime !== info?.endTime) {
        let stdate = new Date(info.startTime).toDateString();
        let edate = new Date(info.endTime).toDateString();
        timeRange = new Date(info.startTime).toDateString() + " " +
            new Date(info.startTime).toLocaleTimeString() + " - " +
            (edate !== stdate ? edate : '') +
            new Date(info.endTime).toLocaleTimeString();
    }
    if (info?.totalDistance) {
        distance = "Distance: " + (info?.totalDistance / 1000).toFixed(1) + " km";
    }
    if (info?.timeMoving) {
        timeMoving = "Time moving: " + toHHMMSS(info?.timeMoving);
    }
    if (info?.hasElevationData) {
        updownhill = "Uphill/downhill: " + info.diffElevationUp.toFixed(0)
            + "/" + info?.diffElevationDown.toFixed(0) + " m";
        elevation = "ElevationTab (min/avg/max): " +
            (info.minElevation).toFixed(1) + " / " +
            (info.avgElevation).toFixed(1) + " / " +
            (info.maxElevation).toFixed(1) + " m"
    }
    if (info?.hasSpeedData) {
        speed = "SpeedTab (min/avg/max): " +
            (info.minSpeed * 3.6).toFixed(0) + " / " +
            (info.avgSpeed * 3.6).toFixed(0) + " / " +
            (info.maxSpeed * 3.6).toFixed(0) + " km/h"
    }

    return (<Box width={width}>
        <Typography variant="subtitle1" color="inherit">
            {info?.name}
            {url ? <Button onClick={() => window.open(url)}>Download</Button> : <></>}
            {timeRange ? <><br/><br/>Time: </> : <></>} {timeRange}
            {distance ? <br/> : <></>} {distance}
            {speed ? <br/> : <></>} {speed}
            {timeMoving ? <br/> : <></>} {timeMoving}
            {elevation ? <br/> : <></>} {elevation}
            {updownhill ? <br/> : <></>} {updownhill}
        </Typography>

    </Box>);
};
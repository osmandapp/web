import React from 'react';
import {Typography, Box, Button, ListItemIcon, ListItemText, MenuItem, Grid} from "@mui/material";
import {toHHMMSS} from "../../../context/AppContext"
import {AccessTime, AvTimer, ImportExport, RouteOutlined, Speed, Terrain} from "@mui/icons-material";
import contextMenuStyles from "../../styles/ContextMenuStyles";

export default function GeneralInfoTab({width, summary, url}) {

    const styles = contextMenuStyles();

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
        elevation = "Elevation (min/avg/max): " +
            (info.minElevation).toFixed(1) + " / " +
            (info.avgElevation).toFixed(1) + " / " +
            (info.maxElevation).toFixed(1) + " m"
    }
    if (info?.hasSpeedData) {
        speed = "Speed (min/avg/max): " +
            (info.minSpeed * 3.6).toFixed(0) + " / " +
            (info.avgSpeed * 3.6).toFixed(0) + " / " +
            (info.maxSpeed * 3.6).toFixed(0) + " km/h"
    }

    return (<Box width={width}>
        <Typography className={styles.info} variant="subtitle1" color="inherit">
            <Grid container spacing={2}>
                <Grid className={styles.name} item xs={8}>
                    {info?.name}
                </Grid>
                <Grid item xs={4}>
                    <Box display="flex" justifyContent="flex-end">
                        <Button variant="contained" component="span" style={{backgroundColor: '#fbc73a'}}
                                onClick={() => window.open(url)}>Download gpx</Button><br/>
                    </Box>
                </Grid>
            </Grid>
            {timeRange && <MenuItem sx={{ml: -2}}>
                <ListItemIcon>
                    <AccessTime fontSize="small"/>
                </ListItemIcon>
                <ListItemText>
                    <Typography sx={{ml: 1}} variant="inherit" noWrap>
                        {"Time: " + timeRange}
                    </Typography>
                </ListItemText>
            </MenuItem>}
            {distance && <MenuItem sx={{ml: -2}}>
                <ListItemIcon>
                    <RouteOutlined fontSize="small"/>
                </ListItemIcon>
                <ListItemText>
                    <Typography sx={{ml: 1}} variant="inherit" noWrap>
                        {distance}
                    </Typography>
                </ListItemText>
            </MenuItem>}
            {speed && <MenuItem sx={{ml: -2}}>
                <ListItemIcon>
                    <Speed fontSize="small"/>
                </ListItemIcon>
                <ListItemText>
                    <Typography sx={{ml: 1}} variant="inherit" noWrap>
                        {speed}
                    </Typography>
                </ListItemText>
            </MenuItem>}
            {timeMoving && <MenuItem sx={{ml: -2}}>
                <ListItemIcon>
                    <AvTimer fontSize="small"/>
                </ListItemIcon>
                <ListItemText>
                    <Typography sx={{ml: 1}} variant="inherit" noWrap>
                        {timeMoving}
                    </Typography>
                </ListItemText>
            </MenuItem>}
            {elevation && <MenuItem sx={{ml: -2}}>
                <ListItemIcon>
                    <Terrain fontSize="small"/>
                </ListItemIcon>
                <ListItemText>
                    <Typography sx={{ml: 1}} variant="inherit" noWrap>
                        {elevation}
                    </Typography>
                </ListItemText>
            </MenuItem>}
            {updownhill && <MenuItem sx={{ml: -2}}>
                <ListItemIcon>
                    <ImportExport fontSize="small"/>
                </ListItemIcon>
                <ListItemText>
                    <Typography sx={{ml: 1}} variant="inherit" noWrap>
                        {updownhill}
                    </Typography>
                </ListItemText>
            </MenuItem>}
        </Typography>

    </Box>);
};
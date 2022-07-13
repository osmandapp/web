import AppContext, {toHHMMSS} from "../../../context/AppContext";
import {ListItemText, MenuItem, Switch, Tooltip, Typography} from "@mui/material";
import React, {useContext} from "react";
import Utils from "../../../util/Utils";

export default function TrackItem({file}) {

    const ctx = useContext(AppContext);

    const item = file;
    let localLayer = ctx.gpxFiles[item.name];
    let timeRange = '';
    let clienttime = '';
    let distance = '';
    let timeMoving = '';
    let updownhill = '';
    let speed = '';
    let summary = item.details?.analysis ?
        item.details?.analysis : localLayer?.summary;
    if (item.clienttimems) {
        clienttime = "Upload time: " + new Date(item.clienttimems).toDateString() +
            + " " + new Date(item.clienttimems).toLocaleTimeString();
    }
    if (summary?.startTime &&
        summary?.startTime !== summary?.endTime) {
        let stdate = new Date(summary.startTime).toDateString();
        let edate = new Date(summary.endTime).toDateString();
        timeRange = new Date(summary.startTime).toDateString() + " " +
            new Date(summary.startTime).toLocaleTimeString() + " - " +
            (edate !== stdate ? edate : '') +
            new Date(summary.endTime).toLocaleTimeString();
    }
    if (summary?.totalDistance) {
        distance = "Distance: " + (summary?.totalDistance / 1000).toFixed(1) + " km";
    }
    if (summary?.timeMoving) {
        timeMoving = "Time moving: " + toHHMMSS(summary?.timeMoving);
    }
    if (summary?.diffElevationDown) {
        updownhill = "Uphill/downhill: " + summary.diffElevationUp.toFixed(0)
            + "/" + summary?.diffElevationDown.toFixed(0) + " m";
    }
    if (summary?.maxSpeed && summary?.maxSpeed > 0) {
        speed = "Speed (min/avg/max): " +
            (summary.minSpeed * 3.6).toFixed(0) + " / " +
            (summary.avgSpeed * 3.6).toFixed(0) + " / " +
            (summary.maxSpeed * 3.6).toFixed(0) + " km/h"
    }

    async function enableLayer(item, ctx, setProgressVisible, visible) {
        let url = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file?type=${encodeURIComponent(item.type)}&name=${encodeURIComponent(item.name)}`;
        const newGpxFiles = Object.assign({}, ctx.gpxFiles);
        if (!visible) {
            // delete newGpxFiles[item.name];
            newGpxFiles[item.name].url = null;
            ctx.setGpxFiles(newGpxFiles);
            if (ctx.selectedGpxFile?.name === item.name) {
                ctx.setSelectedGpxFile(null);
                if (ctx.mapMarkerListener) {
                    ctx.mapMarkerListener(null, null);
                }
            }
            updateTextInfo(newGpxFiles, ctx);
        } else {
            newGpxFiles[item.name] = { 'url': url, 'clienttimems': item.clienttimems, 'name' : item.name };
            ctx.setGpxFiles(newGpxFiles);
            if (item.details?.analysis) {
                newGpxFiles[item.name].summary = item.details.analysis;
                updateTextInfo(newGpxFiles, ctx);
            }
            ctx.setSelectedGpxFile(newGpxFiles[item.name]);

            //loadGpxInfo
            let gpxInfoUrl = `${process.env.REACT_APP_USER_API_SITE}/mapapi/get-gpx-info?type=${encodeURIComponent(item.type)}&name=${encodeURIComponent(item.name)}`;
            const gpxInfo = await Utils.fetchUtilLoad(gpxInfoUrl, {}, setProgressVisible);
            if (gpxInfo.ok) {
                let data = await gpxInfo.json();
                newGpxFiles[item.name].summary = data.info;
                setProgressVisible(false);
            }

            //loadSrtmGpxInfo
            let srtmGpxInfoUrl = `${process.env.REACT_APP_USER_API_SITE}/mapapi/get-srtm-gpx-info?type=${encodeURIComponent(item.type)}&name=${encodeURIComponent(item.name)}`;
            const srtmGpxInfo = await Utils.fetchUtilLoad(srtmGpxInfoUrl, {}, setProgressVisible);
            if (srtmGpxInfo.ok) {
                let data = await srtmGpxInfo.json();
                newGpxFiles[item.name].srtmSummary = data.info;
                setProgressVisible(false);
            }

            updateTextInfo(newGpxFiles, ctx);
        }
    }

    function updateTextInfo(gpxFiles, ctx) {
        // Local GPX files: undefined tracks, NaN km, undefined wpts
        let dist = 0;
        let tracks = 0;
        let wpts = 0;
        let time = 0;
        let diffUp = 0;
        let diffDown = 0;
        Object.values(gpxFiles).forEach((item) => {
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
        ctx.setAppText(`Selected GPX files: ${tracks} tracks, ${(dist / 1000.0).toFixed(1)} km, ${wpts} wpts. 
            Time moving: ${toHHMMSS(time)}. 
            Uphill / Downhill: ${(diffUp).toFixed(0)} / ${(diffDown).toFixed(0)} m.`)
    }

    return (
        <MenuItem key={item.name} onClick={() => ctx.setSelectedGpxFile(file)}>
            <Tooltip title={<div>
                {item.name}
                {timeRange ? <><br /><br />Time: </> : <></>}  {timeRange}
                {distance ? <br /> : <></>} {distance}
                {timeMoving ? <br /> : <></>} {timeMoving}
                {updownhill ? <br /> : <></>} {updownhill}
                {speed ? <br /> : <></>} {speed}
                {clienttime ? <br /> : <></>} {clienttime}
            </div>}>
                <ListItemText inset>
                    <Typography variant="inherit" noWrap>
                        {item.name.slice(0, -4).replace('_', ' ')}
                    </Typography>
                </ListItemText>
            </Tooltip>
            <Switch
                checked={!!localLayer?.url}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => enableLayer(item, ctx, ctx.setGpxLoading, e.target.checked)} />
        </MenuItem>)
}

import React, {useContext, useEffect, useState} from 'react';
import {
    Typography,
    Box,
    Button,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Grid,
    Divider,
    TextareaAutosize
} from "@mui/material";
import AppContext, {toHHMMSS} from "../../../context/AppContext"
import {AccessTime, AvTimer, Commit, ImportExport, RouteOutlined, Speed, Terrain} from "@mui/icons-material";
import contextMenuStyles from "../../styles/ContextMenuStyles";
import TracksManager from "../../../context/TracksManager";

export default function GeneralInfoTab({width, srtm}) {

    const styles = contextMenuStyles();
    const ctx = useContext(AppContext);

    const [showMore, setShowMore] = useState(false);
    const [disableButton, setDisableButton] = useState(true);
    const [fileName, setFileName] = useState(ctx.selectedGpxFile && ctx.selectedGpxFile.name);
    const [points, setPoints] = useState(0);
    const [distance, setDistance] = useState('');
    const [timeRange, setTimeRange] = useState('');
    const [timeMoving, setTimeMoving] = useState('');
    const [upDownHill, setUpDownHill] = useState('');
    const [speed, setSpeed] = useState('');
    const [elevation, setElevation] = useState('');

    function getUrl() {
        const url = document.createElement('a');
        url.href = URL.createObjectURL(new Blob([ctx.selectedGpxFile.gpx]));
        url.download = `${ctx.selectedGpxFile.name}.gpx`;

        return url;
    }

    useEffect(() => {
        if (ctx.selectedGpxFile) {
            setFileName(ctx.selectedGpxFile.name);
            if (!disableButton) {
                setDisableButton(!disableButton);
            }
        }
    }, [ctx.selectedGpxFile])

    useEffect(() => {
        if (ctx.selectedGpxFile && ctx.selectedGpxFile.points) {
            setPoints(ctx.selectedGpxFile.points.length);
        }

        let info = srtm ? ctx.selectedGpxFile?.srtmSummary : ctx.selectedGpxFile?.summary;

        if (info?.startTime &&
            info?.startTime !== info?.endTime) {
            let stdate = new Date(info.startTime).toDateString();
            let edate = new Date(info.endTime).toDateString();
            setTimeRange(new Date(info.startTime).toDateString() + " " +
                new Date(info.startTime).toLocaleTimeString() + " - " +
                (edate !== stdate ? edate : '') +
                new Date(info.endTime).toLocaleTimeString());
        } else {
            setTimeRange('');
        }

        if (info?.totalDistance) {
            setDistance("Distance: " + (info?.totalDistance / 1000).toFixed(1) + " km");
        } else {
            if (ctx.selectedGpxFile && ctx.selectedGpxFile.points?.length > 0) {
                setDistance("Distance: " + (Math.round(ctx.selectedGpxFile.points[ctx.selectedGpxFile.points.length - 1].dist / 100) / 10.0) + " km");
            }
        }

        if (info?.timeMoving) {
            setTimeMoving("Time moving: " + toHHMMSS(info?.timeMoving));
        } else {
            setTimeMoving('');
        }

        if (info?.hasElevationData) {
            setUpDownHill("Uphill/downhill: " + info.diffElevationUp.toFixed(0)
                + "/" + info?.diffElevationDown.toFixed(0) + " m");
            setElevation("Elevation (min/avg/max): " +
                (info.minElevation).toFixed(1) + " / " +
                (info.avgElevation).toFixed(1) + " / " +
                (info.maxElevation).toFixed(1) + " m");
        } else {
            setUpDownHill('');
            setElevation('');
        }

        if (info?.hasSpeedData) {
            setSpeed("Speed (min/avg/max): " +
                (info.minSpeed * 3.6).toFixed(0) + " / " +
                (info.avgSpeed * 3.6).toFixed(0) + " / " +
                (info.maxSpeed * 3.6).toFixed(0) + " km/h");
        } else {
            setSpeed('');
        }
    }, [ctx.selectedGpxFile]);

    function changeFileName(e) {
        if (e.key === 'Enter' || e.type === 'click') {
            setDisableButton(!disableButton);
            let existName = ctx.localTracks.find(t => t.name === fileName);
            if (!existName) {
                let currentTrack = ctx.localTracks.find(t => t.name === ctx.selectedGpxFile.name);
                currentTrack.name = fileName;
                ctx.selectedGpxFile.name = fileName;
                ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
                ctx.setLocalTracks([...ctx.localTracks]);
                TracksManager.saveTracks(ctx.localTracks);
            }
        }
    }

    const Description = () => ({desc}) => {
        return (<ListItemText>
                <Typography component={'span'} variant="inherit">
                    {showMore ? desc : desc.substring(0, 140)}
                    {desc.length > 70 && <ListItemIcon onClick={() => setShowMore(!showMore)}>
                        {showMore ? "...less" : "...more"}
                    </ListItemIcon>}
                </Typography>
                <Divider light/>
            </ListItemText>
        )
    }

    const EditName = () => {
        return (
            <Grid container spacing={2}>
                <Grid item xs={11}>
                    {!disableButton && <TextareaAutosize
                        style={{maxWidth: '438px', width: fileName.length + "ch", resize: 'none'}}
                        className={styles.nameInput}
                        name="title"
                        onChange={(e) => setFileName(e.target.value)}
                        value={fileName}
                        disabled={disableButton}
                        onKeyDown={(e) => changeFileName(e)}
                        autoFocus={true}
                    />}
                    {
                        disableButton && <Typography className={styles.name} variant="inherit" maxWidth={'530px'}>
                            {fileName}
                        </Typography>
                    }
                </Grid>
                <Grid item xs={1}>
                    <Box display="flex" justifyContent="flex-end">
                        {disableButton &&
                            <Button variant="contained" style={{backgroundColor: '#fbc73a'}} onClick={() => {
                                setDisableButton(false);
                            }}>
                                edit
                            </Button>}
                        {!disableButton && <Button variant="contained" style={{backgroundColor: '#fbc73a'}}
                                                   onClick={(e) => changeFileName(e)}>
                            save
                        </Button>}
                        {!disableButton &&
                            <Button sx={{ml: 2}} variant="contained" style={{backgroundColor: '#aad3df'}}
                                    onClick={() => {
                                        setFileName(ctx.selectedGpxFile.name)
                                        setDisableButton(!disableButton)
                                    }}>
                                close
                            </Button>}
                    </Box>
                </Grid>
            </Grid>
        )
    }

    const NoEditName = () => {
        return (
            <Grid container spacing={2}>
                <Grid className={styles.name} item xs={8}>
                    <Typography className={styles.name} variant="inherit">
                        {ctx.selectedGpxFile?.summary && TracksManager.prepareName(ctx.selectedGpxFile.summary.name, false)}
                    </Typography>
                </Grid>
            </Grid>
        )
    }

    return (<Box className={styles.item} width={width}>
        <Typography className={styles.info} variant="subtitle1" color="inherit">
            {ctx.currentObjectType === 'local_client_track' ? EditName() : NoEditName()}
            {ctx.selectedGpxFile?.metadata?.desc && Description()({desc: ctx.selectedGpxFile?.metadata?.desc})}
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
            {points !== 0 && <MenuItem sx={{ml: -2, mt: -1}}>
                <ListItemIcon>
                    <Commit fontSize="small"/>
                </ListItemIcon>
                <ListItemText>
                    <Typography sx={{ml: 1}} variant="inherit" noWrap>
                        {"Points: " + points}
                    </Typography>
                </ListItemText>
            </MenuItem>}
            {timeRange && <MenuItem sx={{ml: -2, mt: -1}}>
                <ListItemIcon>
                    <AccessTime fontSize="small"/>
                </ListItemIcon>
                <ListItemText>
                    <Typography sx={{ml: 1}} variant="inherit" noWrap>
                        {"Time: " + timeRange}
                    </Typography>
                </ListItemText>
            </MenuItem>}
            {speed && <MenuItem sx={{ml: -2, mt: -1}}>
                <ListItemIcon>
                    <Speed fontSize="small"/>
                </ListItemIcon>
                <ListItemText>
                    <Typography sx={{ml: 1}} variant="inherit" noWrap>
                        {speed}
                    </Typography>
                </ListItemText>
            </MenuItem>}
            {timeMoving && <MenuItem sx={{ml: -2, mt: -1}}>
                <ListItemIcon>
                    <AvTimer fontSize="small"/>
                </ListItemIcon>
                <ListItemText>
                    <Typography sx={{ml: 1}} variant="inherit" noWrap>
                        {timeMoving}
                    </Typography>
                </ListItemText>
            </MenuItem>}
            {elevation && <MenuItem sx={{ml: -2, mt: -1}}>
                <ListItemIcon>
                    <Terrain fontSize="small"/>
                </ListItemIcon>
                <ListItemText>
                    <Typography sx={{ml: 1}} variant="inherit" noWrap>
                        {elevation}
                    </Typography>
                </ListItemText>
            </MenuItem>}
            {upDownHill && <MenuItem sx={{ml: -2, mt: -1}}>
                <ListItemIcon>
                    <ImportExport fontSize="small"/>
                </ListItemIcon>
                <ListItemText>
                    <Typography sx={{ml: 1}} variant="inherit" noWrap>
                        {upDownHill}
                    </Typography>
                </ListItemText>
            </MenuItem>}
        </Typography>
        <Button variant="contained" component="span" style={{backgroundColor: '#fbc73a'}}
                onClick={() => {
                    if (ctx.selectedGpxFile.url) {
                        window.open(ctx.selectedGpxFile.url)
                    } else {
                        getUrl().click()
                    }
                }}>Download gpx</Button><br/>

    </Box>);
};
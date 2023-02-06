import React, {useContext, useEffect, useState} from 'react';
import {
    Alert,
    Box,
    Button, CircularProgress,
    Divider,
    Grid,
    ListItemIcon,
    ListItemText,
    MenuItem,
    TextareaAutosize,
    Typography
} from "@mui/material";
import AppContext, {toHHMMSS} from "../../../context/AppContext"
import {AccessTime, AvTimer, Commit, ImportExport, RouteOutlined, Speed, Terrain} from "@mui/icons-material";
import contextMenuStyles from "../../styles/ContextMenuStyles";
import TracksManager from "../../../context/TracksManager";
import _ from "lodash";

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
    const [error, setError] = useState(false);

    const [loadingSrtm, setLoadingSrtm] = useState(false);

    useEffect(() => {
        if (ctx.selectedGpxFile) {
            setFileName(ctx.selectedGpxFile.name);
            if (!disableButton) {
                setDisableButton(!disableButton);
            }
        }
    }, [ctx.selectedGpxFile])

    useEffect(() => {
        if (ctx.selectedGpxFile) {
            setPoints(TracksManager.getEditablePoints(ctx.selectedGpxFile).length);
        }

        let info = ctx.selectedGpxFile?.analysis;

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

        if (ctx.selectedGpxFile?.analysis?.totalDistance) {
            setDistance("Distance: " + (ctx.selectedGpxFile.analysis?.totalDistance / 1000).toFixed(1) + " km");
        }

        if (ctx.selectedGpxFile?.analysis?.timeMoving) {
            setTimeMoving("Time moving: " + toHHMMSS(ctx.selectedGpxFile.analysis?.timeMoving));
        } else {
            setTimeMoving('');
        }

        if (ctx.selectedGpxFile && ctx.selectedGpxFile.analysis?.diffElevationUp && ctx.selectedGpxFile.analysis?.diffElevationDown) {
            setUpDownHill("Uphill/downhill: " + ctx.selectedGpxFile.analysis?.diffElevationUp.toFixed(0)
                + "/" + ctx.selectedGpxFile.analysis?.diffElevationDown.toFixed(0) + " m");
        } else {
            setUpDownHill('');
        }

        if (srtm && ctx.selectedGpxFile?.analysis.srtmAnalysis) {
            setElevation("Elevation (min/avg/max): " +
                (ctx.selectedGpxFile.analysis?.minElevationSrtm).toFixed(1) + " / " +
                (ctx.selectedGpxFile.analysis?.avgElevationSrtm).toFixed(1) + " / " +
                (ctx.selectedGpxFile.analysis?.maxElevationSrtm).toFixed(1) + " m");
        } else if (ctx.selectedGpxFile?.analysis?.hasElevationData) {
            setElevation("Elevation (min/avg/max): " +
                (ctx.selectedGpxFile.analysis?.minElevation).toFixed(1) + " / " +
                (ctx.selectedGpxFile.analysis?.avgElevation)?.toFixed(1) + " / " +
                (ctx.selectedGpxFile.analysis?.maxElevation).toFixed(1) + " m");
        } else {
            setElevation('');
        }

        if (ctx.selectedGpxFile?.analysis?.hasSpeedData) {
            setSpeed("Speed (min/avg/max): " +
                (ctx.selectedGpxFile.analysis?.minSpeed * 3.6).toFixed(0) + " / " +
                (ctx.selectedGpxFile.analysis?.avgSpeed * 3.6).toFixed(0) + " / " +
                (ctx.selectedGpxFile.analysis?.maxSpeed * 3.6).toFixed(0) + " km/h");
        } else {
            setSpeed('');
        }
    }, [ctx.selectedGpxFile]);

    function changeFileName(e) {
        if (e.key === 'Enter' || e.type === 'click') {
            setDisableButton(!disableButton);
            if (validName(fileName)) {
                let currentTrack = ctx.localTracks.find(t => t.name === ctx.selectedGpxFile.name);
                currentTrack.name = fileName;
                ctx.selectedGpxFile.name = fileName;
                ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
                ctx.setLocalTracks([...ctx.localTracks]);
                TracksManager.saveTracks(ctx.localTracks);
            } else {
                setFileName(ctx.selectedGpxFile.name);
                setError(true);
            }
        }
    }

    function validName(fileName) {
        let existName = ctx.localTracks.find(t => t.name === fileName);
        return fileName !== "" && fileName.trim().length > 0 && !existName;
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
                <Grid item xs={8}>
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
                            {"* " + fileName}
                        </Typography>
                    }
                    {error && <Alert onClose={() => {
                        setError(false)
                    }} severity="warning">You tried to save the wrong name!</Alert>}
                </Grid>
                <Grid item xs={4}>
                    <Box display="flex" justifyContent="flex-end">
                        {!ctx.createTrack && disableButton &&
                            <Button variant="contained" style={{backgroundColor: '#fbc73a'}}
                                    onClick={() => {
                                        setDisableButton(false);
                                    }}
                            >
                                edit name
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
                        {ctx.selectedGpxFile?.name && TracksManager.prepareName(ctx.selectedGpxFile.name, false)}
                    </Typography>
                </Grid>
            </Grid>
        )
    }

    const downloadGpx = async () => {
        let gpx = await TracksManager.getGpxTrack(ctx.selectedGpxFile);
        if (gpx) {
            gpx = gpx.data;
            const url = document.createElement('a');
            url.href = URL.createObjectURL(new Blob([gpx]));
            let name = TracksManager.prepareName(ctx.selectedGpxFile.name, ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK);
            url.download = `${name}.gpx`;
            url.click()
        }
    }

    function addToCollection() {
        if (!ctx.gpxCollection.find(name => name === ctx.selectedGpxFile.name.name)) {
            ctx.gpxCollection.push(ctx.selectedGpxFile.name);
        }
        ctx.setGpxCollection([...ctx.gpxCollection]);
    }

    function alreadyInEditing() {
        if (ctx.selectedGpxFile.name) {
            return ctx.localTracks.find(track =>
                track.id === TracksManager.prepareName(ctx.selectedGpxFile.name, false)) !== undefined;
        }
    }

    function save() {
        let ind = ctx.localTracks.findIndex(t => t.name === ctx.selectedGpxFile.name);
        if (ind !== -1) {
            let updatedTrack = _.cloneDeep(ctx.selectedGpxFile);
            delete updatedTrack.points;
            updatedTrack.updated = true;

            ctx.setSelectedGpxFile(updatedTrack);

            ctx.localTracks[ind] = updatedTrack;
            ctx.setLocalTracks([...ctx.localTracks]);
            TracksManager.saveTracks(ctx.localTracks);
        } else {
            TracksManager.addTrack(ctx, ctx.selectedGpxFile);
        }
    }

    return (<Box className={styles.item} minWidth={width}>
        <Typography className={styles.info} variant="subtitle1" color="inherit">
            {<Grid container spacing={2}>
                <Grid item xs={10}>
                    {ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK ? EditName() : NoEditName()}
                </Grid>
                <Grid item xs={2}>
                    {!ctx.createTrack?.enable && ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK &&
                        <Button variant="contained" style={{backgroundColor: '#fbc73a'}}
                                onClick={() => ctx.setCreateTrack({
                                    enable: true,
                                    edit: true
                                })}
                        >
                            edit
                        </Button>}
                </Grid>
            </Grid>}
            {ctx.selectedGpxFile?.metaData?.desc && Description()({desc: ctx.selectedGpxFile?.metaData?.desc})}
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
            {ctx.createTrack && !ctx.selectedGpxFile.newPoint &&
                <ListItemText>
                    <Typography variant="inherit" noWrap>
                        Click on map...
                    </Typography>
                </ListItemText>
            }
        </Typography>
        {ctx.createTrack && ctx.selectedGpxFile.newPoint &&
            <Button variant="contained" component="span" style={{backgroundColor: '#fbc73a'}}
                    onClick={() => {
                        TracksManager.getTrackWithAnalysis(TracksManager.GET_ANALYSIS, ctx, setLoadingSrtm)
                            .then(() => {
                                save();
                                ctx.createTrack.enable = false;
                                ctx.setCreateTrack({...ctx.createTrack});
                            });
                    }}
            >Save</Button>}
        {ctx.createTrack && ctx.selectedGpxFile.newPoint &&
            <Button sx={{ml: 2}} variant="contained" component="span" style={{backgroundColor: '#fbc73a'}}
                    onClick={() => ctx.setCreateTrack({...{enable: true}})}
            >Clear</Button>}
        {!ctx.createTrack && <Button variant="contained" component="span" style={{backgroundColor: '#fbc73a'}}
                                     onClick={downloadGpx}
        >Download</Button>}
        {!ctx.createTrack && <Button sx={{ml: 2}} style={{backgroundColor: '#fbc73a'}} variant="contained" component="span"
                onClick={addToCollection}>
            Add to Collection
        </Button>}
        {!ctx.createTrack && ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK &&
            <Button sx={{ml: 2}} variant="contained" component="span" style={{backgroundColor: '#fbc73a'}}
                    onClick={() => {
                        ctx.selectedGpxFile.save = true;
                        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
                    }}
            >Save to Cloud</Button>}
        {!ctx.createTrack && ctx.currentObjectType === ctx.OBJECT_TYPE_CLOUD_TRACK &&
            <Button sx={{ml: 2}} disabled={alreadyInEditing()} variant="contained" component="span"
                    style={{backgroundColor: '#fbc73a'}}
                    onClick={() => {
                        TracksManager.addTrack(ctx, Object.assign({}, ctx.selectedGpxFile));
                    }}
            >Edit</Button>}
        {!ctx.createTrack && !ctx.selectedGpxFile?.analysis?.srtmAnalysis &&
            <Button sx={{ml: 2}} variant="contained" component="span" style={{backgroundColor: '#fbc73a'}}
                    onClick={() => TracksManager.getTrackWithAnalysis(TracksManager.GET_SRTM_DATA, ctx, setLoadingSrtm)}
            >Get SRTM</Button>}
        {loadingSrtm || ctx.gpxLoading && <CircularProgress sx={{mb: -1, ml: 1}} size={20}/>}
    </Box>);
};
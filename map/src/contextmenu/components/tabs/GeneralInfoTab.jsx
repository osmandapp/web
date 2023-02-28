import React, {useContext, useEffect, useState} from 'react';
import {
    Alert,
    Box,
    Button,
    Divider,
    Grid, IconButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    TextareaAutosize,
    Typography
} from "@mui/material";
import AppContext, {toHHMMSS} from "../../../context/AppContext"
import {AccessTime, AvTimer, Commit, ImportExport, MoreVert, RouteOutlined, Speed, Terrain} from "@mui/icons-material";
import contextMenuStyles from "../../styles/ContextMenuStyles";
import TracksManager from "../../../context/TracksManager";
import _ from "lodash";
import PopperMenu from "../../../drawer/components/tracks/PopperMenu";
import DeleteTrackDialog from "../track/DeleteTrackDialog";

export default function GeneralInfoTab({width, srtm, setShowContextMenu}) {

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
    const [openPointAlert, setOpenPointAlert] = useState(true);
    const [openWptAlert, setOpenWptAlert] = useState(true);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    const [loadingSrtm, setLoadingSrtm] = useState(false);

    const anchorEl = React.useRef(null);
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

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
            if (ctx.selectedGpxFile.points) {
                setPoints(ctx.selectedGpxFile.points.length);
            } else {
                setPoints(TracksManager.getEditablePoints(ctx.selectedGpxFile).length);
            }
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
        } else {
            setDistance('');
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
                    {disableButton &&
                        <Typography className={styles.name} style={{color: '#666666', fontWeight: 'bold'}}
                                    variant="inherit" maxWidth={'530px'}>
                            {"* " + fileName}
                        </Typography>
                    }
                    {error && <Alert onClose={() => {
                        setError(false)
                    }} severity="warning">You tried to save the wrong name!</Alert>}
                </Grid>
                <Grid item xs={4}>
                    <Box display="flex" justifyContent="flex-end">
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

    function saveCreatedTrack() {
        if (ctx.selectedGpxFile.newPoint) {
            TracksManager.getTrackWithAnalysis(TracksManager.GET_ANALYSIS, ctx, setLoadingSrtm)
                .then(() => {
                    save();
                    ctx.createTrack.enable = false;
                    ctx.setCreateTrack({...ctx.createTrack});
                });
        } else {
            save();
            ctx.createTrack.enable = false;
            ctx.setCreateTrack({...ctx.createTrack});
        }
    }

    function addWaypoint() {
        ctx.selectedGpxFile.addWpt = true;
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }

    const Buttons = () => {
        return (
            <div>
                {ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK &&
                    <MenuItem onClick={(e) => {
                        e.stopPropagation();
                        ctx.selectedGpxFile.save = true;
                        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
                        setOpen(false);
                    }}>
                        Save to Cloud</MenuItem>}

                <MenuItem onClick={(e) => {
                    e.stopPropagation();
                    downloadGpx().then();
                    setOpen(false);
                }}>
                    Download</MenuItem>

                {!ctx.createTrack && ctx.currentObjectType === ctx.OBJECT_TYPE_CLOUD_TRACK &&
                    <MenuItem onClick={(e) => {
                        e.stopPropagation();
                        TracksManager.addTrack(ctx, Object.assign({}, ctx.selectedGpxFile));
                        ctx.setUpdateContextMenu(true);
                        setOpen(false);
                    }}>
                        Edit</MenuItem>}

                {!ctx.createTrack && ctx.currentObjectType === ctx.OBJECT_TYPE_CLOUD_TRACK &&
                    <MenuItem onClick={(e) => {
                        e.stopPropagation();
                        addToCollection()
                        setOpen(false);
                    }}>
                        Add to Collection</MenuItem>}

                {ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK && <MenuItem onClick={(e) => {
                    e.stopPropagation();
                    addWaypoint();
                    setOpen(false);
                }}>
                    Add waypoint</MenuItem>}

                {<MenuItem onClick={(e) => {
                    e.stopPropagation();
                    TracksManager.getTrackWithAnalysis(TracksManager.GET_SRTM_DATA, ctx, setLoadingSrtm, ctx.selectedGpxFile.points).then();
                    setOpen(false);
                }}>
                    Recalculate Elevation (SRTM)</MenuItem>}

                {ctx.currentObjectType !== ctx.OBJECT_TYPE_CLOUD_TRACK && disableButton && <MenuItem onClick={(e) => {
                    e.stopPropagation();
                    setDisableButton(false);
                    setOpen(false);
                }}>
                    Edit name</MenuItem>}

                {!ctx.createTrack && ctx.currentObjectType === ctx.OBJECT_TYPE_CLOUD_TRACK &&
                    <MenuItem onClick={(e) => {
                        e.stopPropagation();
                        setOpenDeleteDialog(true);
                        setOpen(false);
                    }}>
                        Delete</MenuItem>}

                {ctx.createTrack && ctx.selectedGpxFile.newPoint && <MenuItem onClick={(e) => {
                    e.stopPropagation();
                    let emptyFile = TracksManager.clearTrack(ctx.selectedGpxFile);
                    ctx.setSelectedGpxFile({...emptyFile});
                    ctx.setUpdateContextMenu(true);
                    setOpen(false);
                }}>
                    Clear</MenuItem>}
            </div>
        )
    }

    return (<Box className={styles.item} minWidth={width}>
        <Typography className={styles.info} variant="subtitle1" color="inherit">
            {<Grid container spacing={2}>
                <Grid item xs={11}>
                    {ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK ? EditName() : NoEditName()}
                </Grid>
                <Grid item xs={1}>
                    <IconButton
                        variant="contained"
                        type="button"
                        ref={anchorEl}
                        onClick={(e) => {
                            handleToggle();
                            e.stopPropagation();
                        }}
                    >
                        <MoreVert fontSize="small"/>
                    </IconButton>
                    <Box>
                        <PopperMenu anchorEl={anchorEl} open={open} setOpen={setOpen} Buttons={Buttons}/>
                    </Box>
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
            {openPointAlert && ctx.createTrack && !ctx.selectedGpxFile.newPoint &&
                <Alert severity="info" onClose={() => {
                    setOpenPointAlert(false)
                }}>Click on the map to add a point...</Alert>}
            {openWptAlert && ctx.createTrack && !ctx.selectedGpxFile.wpts &&
                <Alert severity="info" onClose={() => {
                    setOpenWptAlert(false)
                }}>Use the right menu to add a waypoint...</Alert>}
        </Typography>
        {openDeleteDialog && <DeleteTrackDialog
            dialogOpen={openDeleteDialog}
            setDialogOpen={setOpenDeleteDialog}
            setShowContextMenu={setShowContextMenu}/>}
    </Box>);
};
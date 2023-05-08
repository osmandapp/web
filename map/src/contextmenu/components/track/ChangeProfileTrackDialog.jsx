import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {Dialog} from "@material-ui/core";
import React, {useContext, useEffect, useState} from "react";
import SelectTrackProfile from "./SelectTrackProfile";
import DialogActions from "@mui/material/DialogActions";
import AppContext from "../../../context/AppContext";
import TracksManager from "../../../context/TracksManager";
import {Button, Grid, IconButton, LinearProgress, ToggleButton, ToggleButtonGroup} from "@mui/material";
import {Close} from "@mui/icons-material";
import _ from "lodash";
import {makeStyles} from "@material-ui/core/styles";
import TrackLayerProvider from "../../../map/TrackLayerProvider";
import RoutingManager from "../../../context/RoutingManager";

const useStyles = makeStyles({
    dialog: {
        '& .MuiDialog-paper': {
            overflow: 'hidden'
        }
    }
})


export default function ChangeProfileTrackDialog({open}) {

    const ctx = useContext(AppContext);
    const classes = useStyles();

    const [profile, setProfile] = useState(ctx.creatingRouteMode);
    const [changeOne, setChangeOne] = useState(false);
    const [changeAll, setChangeAll] = useState(false);
    const [change, setChange] = React.useState('one');
    const [process, setProcess] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(open);

    const handleChange = (event, change) => {
        setChange(change);
    };

    const toggleShowDialog = () => {
        setDialogOpen(!dialogOpen);
    };

    useEffect(() => {
        if (change === 'one') {
            setChangeOne(true);
            setChangeAll(false);
        } else if (change === 'all') {
            setChangeAll(true);
            setChangeOne(false);
        }
    }, [change])

    const partialEdit = ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_BEFORE ? 'Previous' :
        ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_AFTER ? 'Next' : null;

    async function changeProfile() {
        let polylines = TrackLayerProvider.getPolylines(ctx.selectedGpxFile.layers.getLayers());
        if (!partialEdit) {
            if (changeAll) {
                if (ctx.selectedGpxFile.points.length > 1) {
                    for (let i = 0; i < ctx.selectedGpxFile.points.length - 1; i++) {
                        const start = ctx.selectedGpxFile.points[i];
                        const end = ctx.selectedGpxFile.points[i + 1];
                        if (start.profile !== TracksManager.PROFILE_GAP) {
                            start.routeMode = profile;
                            start.profile = profile.mode;
                            let currentPolyline = TrackLayerProvider.updatePolyline(start, end, polylines, start, end);
                            RoutingManager.addRoutingToCash(start, end, currentPolyline, ctx);
                        }
                    }
                } else {
                    ctx.selectedGpxFile.points[0].routeMode = profile;
                    ctx.selectedGpxFile.points[0].profile = profile.mode;
                    updateGlobalProfileState();
                }
            } else {
                updateGlobalProfileState();
            }
        } else {
            if (changeOne) {
                let currentPoint = ctx.selectedGpxFile.points[ctx.trackProfileManager.pointInd];
                let prevPoint = ctx.selectedGpxFile.points[ctx.trackProfileManager.pointInd - 1];
                let nextPoint = ctx.selectedGpxFile.points[ctx.trackProfileManager.pointInd + 1];
                if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_BEFORE) {
                    prevPoint.profile = profile.mode;
                    prevPoint.routeMode = profile;
                    let currentPolyline = TrackLayerProvider.updatePolyline(prevPoint, currentPoint, polylines, prevPoint, currentPoint);
                    RoutingManager.addRoutingToCash(prevPoint, currentPoint, currentPolyline, ctx);
                } else if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_AFTER) {
                    currentPoint.profile = profile.mode;
                    currentPoint.routeMode = profile;
                    let currentPolyline = TrackLayerProvider.updatePolyline(currentPoint, nextPoint, polylines, currentPoint, nextPoint);
                    RoutingManager.addRoutingToCash(currentPoint, nextPoint, currentPolyline, ctx);
                }
            } else if (changeAll) {
                if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_BEFORE) {
                    for (let i = 0; i < ctx.trackProfileManager.pointInd; i++) {
                        const start = ctx.selectedGpxFile.points[i];
                        const end = ctx.selectedGpxFile.points[i + 1];
                        if (start.profile !== TracksManager.PROFILE_GAP) {
                            start.routeMode = profile;
                            start.profile = profile.mode;
                            let currentPolyline = TrackLayerProvider.updatePolyline(start, end, polylines, start, end);
                            RoutingManager.addRoutingToCash(start, end, currentPolyline, ctx);
                        }
                    }
                } else if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_AFTER) {
                    for (let i = ctx.trackProfileManager.pointInd; i < ctx.selectedGpxFile.points.length - ctx.trackProfileManager.pointInd + 1; i++) {
                        const start = ctx.selectedGpxFile.points[i];
                        const end = ctx.selectedGpxFile.points[i + 1];
                        if (start.profile !== TracksManager.PROFILE_GAP) {
                            start.routeMode = profile;
                            start.profile = profile.mode;
                            let currentPolyline = TrackLayerProvider.updatePolyline(start, end, polylines, start, end);
                            RoutingManager.addRoutingToCash(start, end, currentPolyline, ctx);
                        }
                    }
                }
            }
        }
    }

    function getPrevPoints() {
        if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_BEFORE) {
            return ctx.selectedGpxFile.points.filter(p => ctx.selectedGpxFile.points.indexOf(p) < ctx.trackProfileManager.pointInd);
        } else if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_AFTER) {
            return ctx.selectedGpxFile.points.filter(p => ctx.selectedGpxFile.points.indexOf(p) <= ctx.trackProfileManager.pointInd);
        }
    }

    function getNextPoints() {
        if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_BEFORE) {
            return ctx.selectedGpxFile.points.filter(p => ctx.selectedGpxFile.points.indexOf(p) >= ctx.trackProfileManager.pointInd);
        } else if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_AFTER) {
            return ctx.selectedGpxFile.points.filter(p => ctx.selectedGpxFile.points.indexOf(p) > ctx.trackProfileManager.pointInd);
        }
    }

    function createArrWithGeo(points) {
        let p1 = points[0];
        p1.geometry = p1.geometry ? p1.geometry : [];
        p1.profile = TracksManager.PROFILE_LINE;
        let p2 = points[points.length - 1];
        let geo = _.cloneDeep(points);
        geo.forEach(p => {
            delete p.profile;
            delete p.geometry;
        })
        p2.geometry = geo;
        p2.profile = p2.profile ? p2.profile : TracksManager.PROFILE_LINE;

        return [p1, p2];
    }

    function updateGlobalProfileState() {
        ctx.setCreatingRouteMode({
            mode: profile.mode,
            modes: ctx.creatingRouteMode.modes,
            opts: ctx.creatingRouteMode.modes[profile.mode]?.params,
            colors: ctx.creatingRouteMode.colors
        })
    }

    return <Dialog disableEnforceFocus open={open} onClose={toggleShowDialog} className={classes.dialog}>
        {process ? <LinearProgress/> : <></>}
        <Grid container spacing={2}>
            <Grid item xs={11}>
                <DialogTitle>Change profile</DialogTitle>
            </Grid>
            <Grid item xs={1} sx={{ml: -4, mt: 1.5}}>
                <IconButton
                    variant="contained"
                    type="button"
                    onClick={() => ctx.setTrackProfileManager({})}
                >
                    <Close fontSize="small"/>
                </IconButton>
            </Grid>
        </Grid>
        {partialEdit && <DialogActions style={{justifyContent: 'center', overflowY: 'hidden'}}>
            <ToggleButtonGroup
                value={change}
                exclusive
                fullWidth={true}
                onChange={handleChange}
                aria-label="text alignment">
                <ToggleButton value="one">
                    {partialEdit} segment
                </ToggleButton>
                <ToggleButton value="all">
                    All {partialEdit} segments
                </ToggleButton>
            </ToggleButtonGroup>
        </DialogActions>}
        {!partialEdit && <DialogActions style={{justifyContent: 'center', overflowY: 'hidden'}}>
            <ToggleButtonGroup
                value={change}
                exclusive
                fullWidth={true}
                onChange={handleChange}
                aria-label="text alignment">
                <ToggleButton value="one">
                    Next segments
                </ToggleButton>
                <ToggleButton value="all">
                    All segments
                </ToggleButton>
            </ToggleButtonGroup>
        </DialogActions>}
        <DialogContent sx={{minWidth: 500, padding: '0px 0px', marginLeft: '-15px', marginRight: '-23px'}}>
            <SelectTrackProfile profile={profile} setProfile={setProfile} label={"Route profile"}/>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => ctx.setTrackProfileManager({})}>Cancel</Button>
            <Button onClick={() => {
                changeProfile().then(() => {
                    ctx.setTrackProfileManager({});
                    ctx.trackState.update = true;
                    ctx.setTrackState({...ctx.trackState});
                })
            }}>Change</Button>
        </DialogActions>
    </Dialog>
}
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
        setProcess(true);
        if (!partialEdit) {
            ctx.selectedGpxFile.points.forEach(point => {
                point.profile = profile.mode;
            })
            if (ctx.selectedGpxFile.points.length > 1) {
                await TracksManager.updateRoute(ctx, ctx.selectedGpxFile.points).then((points) => {
                    ctx.selectedGpxFile.points = points;
                    ctx.setCreatingRouteMode({
                        mode: profile.mode,
                        modes: ctx.creatingRouteMode.modes,
                        opts: ctx.creatingRouteMode.modes[profile.mode]?.params,
                        colors: ctx.creatingRouteMode.colors
                    })
                });
            } else {
                ctx.setCreatingRouteMode({
                    mode: profile.mode,
                    modes: ctx.creatingRouteMode.modes,
                    opts: ctx.creatingRouteMode.modes[profile.mode]?.params,
                    colors: ctx.creatingRouteMode.colors
                })
            }
        } else {
            if (changeOne) {
                let currentPoint = ctx.selectedGpxFile.points[ctx.trackProfileManager.pointInd];
                let prevPoint = ctx.selectedGpxFile.points[ctx.trackProfileManager.pointInd - 1];
                let nextPoint = ctx.selectedGpxFile.points[ctx.trackProfileManager.pointInd + 1];
                if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_BEFORE) {
                    prevPoint.profile = profile.mode;
                    currentPoint.geometry = await TracksManager.updateRouteBetweenPoints(ctx, prevPoint, currentPoint);
                } else if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_AFTER) {
                    currentPoint.profile = profile.mode;
                    nextPoint.geometry = await TracksManager.updateRouteBetweenPoints(ctx, currentPoint, nextPoint);
                }
                if (!ctx.selectedGpxFile.points[0].geometry) {
                    let prevArr = createArrWithGeo(getPrevPoints());
                    let nextArr = createArrWithGeo(getNextPoints());
                    ctx.selectedGpxFile.points = prevArr.concat(nextArr);
                }
            } else if (changeAll) {
                if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_BEFORE) {
                    let changePoints = ctx.selectedGpxFile.points.splice(0, ctx.trackProfileManager.pointInd + 1);
                    changePoints.forEach(point => {
                        if (_.indexOf(changePoints, point) !== changePoints.length - 1) {
                            point.profile = profile.mode;
                        }
                    })
                    await TracksManager.updateRoute(ctx, changePoints).then((points) => {
                        if (ctx.selectedGpxFile.points.length > 0 && !ctx.selectedGpxFile.points[0].geometry) {
                            let nextArr = createArrWithGeo([points[points.length - 1]].concat(ctx.selectedGpxFile.points));
                            ctx.selectedGpxFile.points = points.concat(nextArr);
                        } else {
                            ctx.selectedGpxFile.points = points.concat(ctx.selectedGpxFile.points);
                        }
                    });
                } else if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_AFTER) {
                    let changePoints = ctx.selectedGpxFile.points.splice(ctx.trackProfileManager.pointInd, ctx.selectedGpxFile.points.length - ctx.trackProfileManager.pointInd);
                    changePoints.forEach(point => {
                        point.profile = profile.mode;
                    })
                    await TracksManager.updateRoute(ctx, changePoints).then((points) => {
                        if (ctx.selectedGpxFile.points.length > 0 && !ctx.selectedGpxFile.points[0].geometry) {
                            let prevArr = createArrWithGeo(ctx.selectedGpxFile.points.concat([points[0]]));
                            ctx.selectedGpxFile.points = prevArr.concat(points);
                        } else {
                            ctx.selectedGpxFile.points = ctx.selectedGpxFile.points.concat(points);
                        }
                    });
                }
            }
        }

        if (ctx.selectedGpxFile.points.length > 0) {
            TracksManager.getTrackWithAnalysis(TracksManager.GET_ANALYSIS, ctx, ctx.setLoadingContextMenu, ctx.selectedGpxFile.points).then(res => {
                ctx.setTrackProfileManager({});
                res.updateLayers = true;
                ctx.setSelectedGpxFile({...res});
                setProcess(false);
            });
        } else {
            ctx.setTrackProfileManager({});
            setProcess(false);
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
        <DialogContent sx={{minWidth: 500, padding: '0px 0px', marginLeft: '-15px', marginRight: '-23px'}}>
            <SelectTrackProfile profile={profile} setProfile={setProfile}/>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => ctx.setTrackProfileManager({})}>Cancel</Button>
            <Button onClick={changeProfile}>Change</Button>
        </DialogActions>
    </Dialog>
}
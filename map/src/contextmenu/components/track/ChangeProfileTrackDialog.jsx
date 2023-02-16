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


export default function ChangeProfileTrackDialog({open, close}) {

    const ctx = useContext(AppContext);

    const [profile, setProfile] = useState(ctx.creatingRouteMode);
    const [changeOne, setChangeOne] = useState(false);
    const [changeAll, setChangeAll] = useState(false);
    const [change, setChange] = React.useState('one');
    const [process, setProcess] = useState(false);

    const handleChange = (event, change) => {
        setChange(change);
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
            await TracksManager.updateRoute(ctx, ctx.selectedGpxFile.points).then((points) => {
                ctx.selectedGpxFile.points = ctx.selectedGpxFile.points.concat(points);
                ctx.setCreatingRouteMode({
                    mode: profile.mode,
                    modes: ctx.creatingRouteMode.modes,
                    opts: ctx.creatingRouteMode.modes[profile.mode]?.params,
                    colors: ctx.creatingRouteMode.colors
                })
            });
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
            } else if (changeAll) {
                if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_BEFORE) {
                    let changePoints = ctx.selectedGpxFile.points.splice(0, ctx.trackProfileManager.pointInd + 1);
                    changePoints.forEach(point => {
                        if (_.indexOf(changePoints, point) !== changePoints.length - 1) {
                            point.profile = profile.mode;
                        }
                    })
                    await TracksManager.updateRoute(ctx, changePoints).then((points) => {
                        ctx.selectedGpxFile.points = points.concat(ctx.selectedGpxFile.points);
                    });
                } else if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_AFTER) {
                    let changePoints = ctx.selectedGpxFile.points.splice(ctx.trackProfileManager.pointInd, ctx.selectedGpxFile.points.length - ctx.trackProfileManager.pointInd);
                    changePoints.forEach(point => {
                        point.profile = profile.mode;
                    })
                    await TracksManager.updateRoute(ctx, changePoints).then((points) => {
                        ctx.selectedGpxFile.points = ctx.selectedGpxFile.points.concat(points);
                    });
                }
            }
        }

        TracksManager.getTrackWithAnalysis(TracksManager.GET_ANALYSIS, ctx, ctx.setLoadingContextMenu, ctx.selectedGpxFile.points).then(res => {
            ctx.setTrackProfileManager({});
            res.updateLayers = true;
            ctx.setSelectedGpxFile({...res});
            setProcess(false);
        });
    }

    return <Dialog disableEnforceFocus open={open} onClose={close}>
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
        {partialEdit && <DialogActions>
            <ToggleButtonGroup
                value={change}
                exclusive
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
        <DialogContent sx={{minWidth: 400}}>
            <SelectTrackProfile profile={profile} setProfile={setProfile}/>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => ctx.setTrackProfileManager({})}>Cancel</Button>
            <Button onClick={changeProfile}>Change</Button>
        </DialogActions>
    </Dialog>
}
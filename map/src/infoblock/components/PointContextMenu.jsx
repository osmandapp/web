import { ClickAwayListener, Grid, IconButton, MenuItem, MenuList, Paper, Popper } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import TracksManager from '../../manager/track/TracksManager';
import AppContext from '../../context/AppContext';
import { makeStyles } from '@material-ui/core/styles';
import PointManager from '../../manager/PointManager';
import { Close } from '@mui/icons-material';
import _ from 'lodash';

const useStyles = makeStyles({
    drawerItem: {
        '& .MuiMenuItem-root': {
            minHeight: 'auto !important',
            maxHeight: 'auto !important',
            fontSize: '0.7rem',
        },
    },
});

export default function PointContextMenu({ anchorEl }) {
    const ctx = useContext(AppContext);
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [pointInd, setPointInd] = useState(-1);

    useEffect(() => {
        if (anchorEl) {
            let ind = ctx.selectedGpxFile.points.findIndex(
                (point) => point.lat === ctx.pointContextMenu.coord.lat && point.lng === ctx.pointContextMenu.coord.lng
            );
            if (ind !== -1) {
                setPointInd(ind);
            }
        }
    }, [anchorEl]);

    function closeContextMenu() {
        ctx.setPointContextMenu({});
    }

    function deletePoint() {
        closeContextMenu();
        if (pointInd !== -1) {
            PointManager.deletePoint(pointInd, ctx).then(() => {
                ctx.trackState.update = true;
                ctx.setTrackState({ ...ctx.trackState });
            });
        } else {
            deleteWpt(ctx.pointContextMenu.coord);
        }
    }

    function deleteWpt(coord) {
        let ind = ctx.selectedGpxFile.wpts.findIndex((point) => point.lat === coord.lat && point.lon === coord.lng);
        if (ind !== -1) {
            PointManager.deleteWpt(ind, ctx);
        }
    }

    function trimBefore() {
        closeContextMenu();
        if (pointInd !== -1 && pointInd !== 0) {
            ctx.selectedGpxFile.points.splice(0, pointInd);
            let geo = ctx.selectedGpxFile.points[0].geometry;
            if (geo?.length > 0) {
                ctx.selectedGpxFile.points[0].geometry = [];
            }
            ctx.selectedGpxFile.updateLayers = true;
            ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
            ctx.trackState.update = true;
            ctx.setTrackState({ ...ctx.trackState });
        }
    }

    function trimAfter() {
        closeContextMenu();
        if (pointInd !== -1 && pointInd !== ctx.selectedGpxFile.points.length - 1) {
            ctx.selectedGpxFile.points.splice(pointInd + 1, ctx.selectedGpxFile.points.length - pointInd);
            ctx.selectedGpxFile.updateLayers = true;
            ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
            ctx.trackState.update = true;
            ctx.setTrackState({ ...ctx.trackState });
        }
    }

    function changeProfileBefore() {
        closeContextMenu();
        ctx.trackProfileManager.pointInd = pointInd;
        ctx.trackProfileManager.change = TracksManager.CHANGE_PROFILE_BEFORE;
        ctx.setTrackProfileManager({ ...ctx.trackProfileManager });
    }

    function changeProfileAfter() {
        closeContextMenu();
        ctx.trackProfileManager.pointInd = pointInd;
        ctx.trackProfileManager.change = TracksManager.CHANGE_PROFILE_AFTER;
        ctx.setTrackProfileManager({ ...ctx.trackProfileManager });
    }

    function splitBefore() {
        closeContextMenu();
        split(pointInd - 1, pointInd);
    }

    function splitAfter() {
        closeContextMenu();
        split(pointInd, pointInd + 1);
    }

    async function joinBefore() {
        closeContextMenu();
        let currentPoint = ctx.selectedGpxFile.points[pointInd];
        let prevPoint = ctx.selectedGpxFile.points[pointInd - 1];
        await join(prevPoint, currentPoint);
    }

    async function joinAfter() {
        closeContextMenu();
        let currentPoint = ctx.selectedGpxFile.points[pointInd];
        let nextPoint = ctx.selectedGpxFile.points[pointInd + 1];
        await join(currentPoint, nextPoint);
    }

    function split(ind, nextInd) {
        const geometryLength = ctx.selectedGpxFile.points[ind].geometry.length;
        ctx.selectedGpxFile.points[ind].geometry[geometryLength - 1].profile = TracksManager.PROFILE_GAP;
        ctx.selectedGpxFile.points[ind].profile = TracksManager.PROFILE_GAP;

        ctx.selectedGpxFile.points[nextInd].geometry = [];

        ctx.selectedGpxFile.updateLayers = true;
        ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });

        ctx.trackState.update = true;
        ctx.setTrackState({ ...ctx.trackState });
    }

    async function join(point1, point2) {
        point2.geometry = await ctx.trackRouter.updateRouteBetweenPoints(ctx, point1, point2);
        point1.profile = point2.profile;
        point1.geoProfile = point2.geoProfile;
        delete point1.geometry[point1.geometry.length - 1].profile;
        ctx.selectedGpxFile.updateLayers = true;
        ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
        ctx.trackState.update = true;
        ctx.setTrackState({ ...ctx.trackState });
    }

    function isGap(pointInd) {
        return ctx.selectedGpxFile.points[pointInd]?.profile === TracksManager.PROFILE_GAP;
    }

    function isPointAfterGap(pointInd) {
        return isGap(pointInd - 1);
    }

    function showTrimBefore() {
        return pointInd > 0 && !isGap(pointInd) && !isPointAfterGap(pointInd);
    }

    function showSplitBefore() {
        return (
            pointInd >= 2 &&
            pointInd < ctx.selectedGpxFile.points.length - 1 &&
            !isGap(pointInd) &&
            !isPointAfterGap(pointInd) &&
            !isPointAfterGap(pointInd - 1) &&
            !_.isEmpty(ctx.selectedGpxFile.points[pointInd].geometry)
        );
    }

    function showJoinBefore() {
        return isPointAfterGap(pointInd);
    }

    function showProfileBefore() {
        return pointInd > 0 && !isPointAfterGap(pointInd);
    }

    function showTrimAfter() {
        return pointInd < ctx.selectedGpxFile.points.length - 1 && !isGap(pointInd) && !isPointAfterGap(pointInd);
    }

    function showSplitAfter() {
        return (
            pointInd >= 1 &&
            pointInd < ctx.selectedGpxFile.points.length - 2 &&
            !isGap(pointInd) &&
            !isPointAfterGap(pointInd) &&
            !isGap(pointInd + 1) &&
            !_.isEmpty(ctx.selectedGpxFile.points[pointInd].geometry)
        );
    }

    function showJoinAfter() {
        return isGap(pointInd);
    }

    function showProfileAfter() {
        return pointInd < ctx.selectedGpxFile.points.length - 1 && !isGap(pointInd);
    }

    const Buttons = () => {
        return (
            <div>
                {<MenuItem onClick={deletePoint}>Delete point</MenuItem>}
                {showTrimBefore() && <MenuItem onClick={trimBefore}>Trim before</MenuItem>}
                {showSplitBefore() && <MenuItem onClick={splitBefore}>Split before</MenuItem>}
                {showJoinBefore() && <MenuItem onClick={joinBefore}>Join before</MenuItem>}
                {showProfileBefore() && <MenuItem onClick={changeProfileBefore}>Profile before</MenuItem>}
                {showTrimAfter() && <MenuItem onClick={trimAfter}>Trim after</MenuItem>}
                {showSplitAfter() && <MenuItem onClick={splitAfter}>Split after</MenuItem>}
                {showJoinAfter() && <MenuItem onClick={joinAfter}>Join after</MenuItem>}
                {showProfileAfter() && <MenuItem onClick={changeProfileAfter}>Profile after</MenuItem>}
            </div>
        );
    };

    const handleClose = (event) => {
        event.preventDefault();
        closeContextMenu();
        if (anchorEl) {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            {pointInd !== -1 && (
                <Popper open={!!anchorEl} anchorEl={anchorEl}>
                    <ClickAwayListener onClickAway={handleClose}>
                        <Grid container spacing={2}>
                            <Grid item xs={10}>
                                <Paper>
                                    <div style={{ maxHeight: '30vh', overflow: 'auto' }}>
                                        <MenuList
                                            className={classes.drawerItem}
                                            autoFocusItem={open}
                                            id="menu-list-grow"
                                        >
                                            <Buttons />
                                        </MenuList>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={2}>
                                <IconButton
                                    sx={{
                                        backgroundColor: 'white',
                                        padding: '3px !important',
                                        ml: -4,
                                        mt: -1,
                                        '&:hover': { backgroundColor: 'white' },
                                    }}
                                    variant="contained"
                                    type="button"
                                    onClick={() => ctx.setPointContextMenu({})}
                                >
                                    <Close sx={{ fontSize: '0.8rem !important' }} fontSize="small" />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </ClickAwayListener>
                </Popper>
            )}
        </>
    );
}

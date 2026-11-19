import { ClickAwayListener, Grid, IconButton, MenuItem, MenuList, Paper, Popper } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import TracksManager from '../../manager/track/TracksManager';
import AppContext from '../../context/AppContext';
import PointManager from '../../manager/PointManager';
import { Close } from '@mui/icons-material';

export default function PointContextMenu({ anchorEl }) {
    const ctx = useContext(AppContext);

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
        PointManager.trimBefore(pointInd, ctx);
    }

    function trimAfter() {
        closeContextMenu();
        PointManager.trimAfter(pointInd, ctx);
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
        PointManager.split(pointInd - 1, ctx);
    }

    function splitAfter() {
        closeContextMenu();
        PointManager.split(pointInd, ctx);
    }

    async function joinBefore() {
        closeContextMenu();
        let currentPoint = ctx.selectedGpxFile.points[pointInd];
        let prevPoint = ctx.selectedGpxFile.points[pointInd - 1];
        await PointManager.join(prevPoint, currentPoint, ctx);
    }

    async function joinAfter() {
        closeContextMenu();
        let currentPoint = ctx.selectedGpxFile.points[pointInd];
        let nextPoint = ctx.selectedGpxFile.points[pointInd + 1];
        await PointManager.join(currentPoint, nextPoint, ctx);
    }

    const Buttons = () => {
        const items = PointManager.getPointMenuItems(ctx.selectedGpxFile.points, pointInd);

        return (
            <div>
                <MenuItem id="se-point-context-menu-delete" onClick={deletePoint}>
                    Delete point
                </MenuItem>
                {items.trimBefore && (
                    <MenuItem id="se-point-context-menu-trim-before" onClick={trimBefore}>
                        Trim before
                    </MenuItem>
                )}
                {items.splitBefore && (
                    <MenuItem id="se-point-context-menu-split-before" onClick={splitBefore}>
                        Split before
                    </MenuItem>
                )}
                {items.joinBefore && (
                    <MenuItem id="se-point-context-menu-join-before" onClick={joinBefore}>
                        Join before
                    </MenuItem>
                )}
                {items.profileBefore && (
                    <MenuItem id="se-point-context-menu-profile-before" onClick={changeProfileBefore}>
                        Profile before
                    </MenuItem>
                )}
                {items.trimAfter && (
                    <MenuItem id="se-point-context-menu-trim-after" onClick={trimAfter}>
                        Trim after
                    </MenuItem>
                )}
                {items.splitAfter && (
                    <MenuItem id="se-point-context-menu-split-after" onClick={splitAfter}>
                        Split after
                    </MenuItem>
                )}
                {items.joinAfter && (
                    <MenuItem id="se-point-context-menu-join-after" onClick={joinAfter}>
                        Join after
                    </MenuItem>
                )}
                {items.profileAfter && (
                    <MenuItem id="se-point-context-menu-profile-after" onClick={changeProfileAfter}>
                        Profile after
                    </MenuItem>
                )}
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
                                <Paper id="se-point-context-menu">
                                    <div style={{ maxHeight: '30vh', overflow: 'auto' }}>
                                        <MenuList
                                            autoFocusItem={open}
                                            id="menu-list-grow"
                                            sx={{
                                                '& .MuiMenuItem-root': {
                                                    minHeight: 'auto !important',
                                                    maxHeight: 'auto !important',
                                                    fontSize: '0.7rem',
                                                },
                                            }}
                                        >
                                            <Buttons />
                                        </MenuList>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={2}>
                                <IconButton
                                    id="se-point-context-menu-close"
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

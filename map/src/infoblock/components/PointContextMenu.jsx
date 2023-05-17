import {ClickAwayListener, Grid, IconButton, MenuItem, MenuList, Paper, Popper} from "@mui/material";
import React, {useContext, useEffect, useState} from "react";
import TracksManager from "../../context/TracksManager";
import AppContext from "../../context/AppContext";
import {makeStyles} from "@material-ui/core/styles";
import PointManager from "../../context/PointManager";
import EditFavoriteDialog from "./favorite/EditFavoriteDialog";
import {Close} from "@mui/icons-material";
import _ from "lodash";

const useStyles = makeStyles({
    drawerItem: {
        '& .MuiMenuItem-root': {
            minHeight: 'auto !important',
            maxHeight: 'auto !important',
            fontSize: '0.7rem'
        }
    }
})
export default function PointContextMenu({anchorEl}) {

    const ctx = useContext(AppContext);
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [pointInd, setPointInd] = useState(-1);
    const [wptInd, setWptInd] = useState(-1);
    const [editDialogOpen, setEditDialogOpen] = useState(false);

    useEffect(() => {
        if (anchorEl) {
            let ind = ctx.selectedGpxFile.points.findIndex(point => point.lat === ctx.pointContextMenu.coord.lat && point.lng === ctx.pointContextMenu.coord.lng);
            if (ind !== -1) {
                setWptInd(-1);
                setPointInd(ind);
            } else {
                let ind = ctx.selectedGpxFile.wpts.findIndex(point => point.lat === ctx.pointContextMenu.coord.lat && point.lon === ctx.pointContextMenu.coord.lng);
                if (ind !== -1) {
                    setPointInd(-1);
                    setWptInd(ind);
                }
            }
        }
    }, [anchorEl])

    function deletePoint() {
        if (pointInd !== -1) {
            PointManager.deletePoint(pointInd, ctx).then(() => {
                ctx.trackState.update = true;
                ctx.setTrackState({...ctx.trackState});
            });
        } else {
            deleteWpt(ctx.pointContextMenu.coord);
        }
    }

    function deleteWpt(coord) {
        let ind = ctx.selectedGpxFile.wpts.findIndex(point => point.lat === coord.lat && point.lon === coord.lng);
        if (ind !== -1) {
            PointManager.deleteWpt(ind, ctx);
        }
    }

    function trimBefore() {
        if (pointInd !== -1 && pointInd !== 0) {
            ctx.selectedGpxFile.points.splice(0, pointInd);
            let geo = ctx.selectedGpxFile.points[0].geometry;
            if (geo?.length > 0) {
                ctx.selectedGpxFile.points[0].geometry = [];
            }
            ctx.selectedGpxFile.updateLayers = true;
            ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
            ctx.trackState.update = true;
            ctx.setTrackState({...ctx.trackState});
        }
    }

    function trimAfter() {
        if (pointInd !== -1 && pointInd !== ctx.selectedGpxFile.points.length - 1) {
            ctx.selectedGpxFile.points.splice(pointInd + 1, ctx.selectedGpxFile.points.length - pointInd);
            ctx.selectedGpxFile.updateLayers = true;
            ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
            ctx.trackState.update = true;
            ctx.setTrackState({...ctx.trackState});
        }
    }

    function changeProfileBefore() {
        ctx.trackProfileManager.pointInd = pointInd;
        ctx.trackProfileManager.change = TracksManager.CHANGE_PROFILE_BEFORE;
        ctx.setTrackProfileManager({...ctx.trackProfileManager});
    }

    function changeProfileAfter() {
        ctx.trackProfileManager.pointInd = pointInd;
        ctx.trackProfileManager.change = TracksManager.CHANGE_PROFILE_AFTER;
        ctx.setTrackProfileManager({...ctx.trackProfileManager});
    }

    function splitBefore() {
        split(pointInd - 1, pointInd);
    }

    function splitAfter() {
        split(pointInd, pointInd + 1);
    }

    async function joinBefore() {
        let currentPoint = ctx.selectedGpxFile.points[pointInd];
        let prevPoint = ctx.selectedGpxFile.points[pointInd - 1];
        await join(prevPoint, currentPoint);
    }

    async function joinAfter() {
        let currentPoint = ctx.selectedGpxFile.points[pointInd];
        let nextPoint = ctx.selectedGpxFile.points[pointInd + 1];
        await join(currentPoint, nextPoint);
    }

    function split(ind, nextInd) {
        ctx.selectedGpxFile.points[nextInd].geometry = [];
        ctx.selectedGpxFile.points[ind].geometry[ctx.selectedGpxFile.points[ind].geometry.length - 1].profile = TracksManager.PROFILE_GAP;
        ctx.selectedGpxFile.points[ind].profile = TracksManager.PROFILE_GAP;
        ctx.selectedGpxFile.updateLayers = true;
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
        ctx.trackState.update = true;
        ctx.setTrackState({...ctx.trackState});
    }

    async function join(point1, point2) {
        point2.geometry = await TracksManager.updateRouteBetweenPoints(ctx, point1, point2);
        point1.profile = point2.profile;
        delete point1.geometry[point1.geometry.length - 1].profile;
        ctx.selectedGpxFile.updateLayers = true;
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
        ctx.trackState.update = true;
        ctx.setTrackState({...ctx.trackState});
    }

    function isGap(pointInd) {
        return ctx.selectedGpxFile.points[pointInd]?.profile === TracksManager.PROFILE_GAP;
    }

    function isPointAfterGap(pointInd) {
        return isGap(pointInd - 1);
    }

    const Buttons = () => {
        return (
            <div>
                {<MenuItem onClick={() => {
                    deletePoint();
                    ctx.setPointContextMenu({});
                }}>
                    Delete point</MenuItem>
                }
                {pointInd > 0 && !isGap(pointInd) && !isPointAfterGap(pointInd) && <MenuItem onClick={() => {
                    trimBefore();
                    ctx.setPointContextMenu({});
                }}>
                    Trim before</MenuItem>
                }
                {pointInd < ctx.selectedGpxFile.points.length - 1 && !isGap(pointInd) && !isPointAfterGap(pointInd) &&
                    <MenuItem onClick={() => {
                        trimAfter();
                        ctx.setPointContextMenu({});
                    }}>
                        Trim after</MenuItem>
                }
                {pointInd > 0 && !isPointAfterGap(pointInd) && <MenuItem onClick={() => {
                    changeProfileBefore();
                    ctx.setPointContextMenu({});
                }}>
                    Change route type before this point</MenuItem>
                }
                {pointInd < ctx.selectedGpxFile.points.length - 1 && !isGap(pointInd) && <MenuItem onClick={() => {
                    changeProfileAfter();
                    ctx.setPointContextMenu({});
                }}>
                    Change route type after this point</MenuItem>
                }
                {pointInd >= 2 && pointInd < ctx.selectedGpxFile.points.length - 1 && !isGap(pointInd) && !isPointAfterGap(pointInd) && !isPointAfterGap(pointInd - 1)
                    && !_.isEmpty(ctx.selectedGpxFile.points[pointInd].geometry) &&
                    <MenuItem onClick={() => {
                        splitBefore();
                        ctx.setPointContextMenu({});
                    }}>
                        Split before</MenuItem>
                }
                {pointInd >= 1 && pointInd < ctx.selectedGpxFile.points.length - 2 && !isGap(pointInd) && !isPointAfterGap(pointInd) && !isGap(pointInd + 1)
                    && !_.isEmpty(ctx.selectedGpxFile.points[pointInd].geometry) &&
                    <MenuItem onClick={() => {
                        splitAfter();
                        ctx.setPointContextMenu({});
                    }}>
                        Split after</MenuItem>
                }
                {isPointAfterGap(pointInd) && <MenuItem onClick={() => {
                    joinBefore();
                    ctx.setPointContextMenu({});
                }}>
                    Join before</MenuItem>}
                {isGap(pointInd) && <MenuItem onClick={() => {
                    joinAfter();
                    ctx.setPointContextMenu({});
                }}>
                    Join after</MenuItem>}
            </div>
        )
    }

    const WptButtons = () => {
        return (
            <div>
                {<MenuItem onClick={() => {
                    deletePoint();
                    ctx.setPointContextMenu({});
                }}>
                    Delete wpt</MenuItem>}
                {<MenuItem onClick={() => {
                    setEditDialogOpen(true);
                }}>
                    Edit wpt</MenuItem>
                }
            </div>
        )
    }


    const handleClose = () => {
        if (anchorEl) {
            return;
        }
        setOpen(false);
    };


    return <>
        <Popper open={anchorEl !== undefined} anchorEl={anchorEl} transition
                style={{
                    zIndex: 1000,
                    left: ctx.pointContextMenu?.left + 330,
                    top: ctx.pointContextMenu?.top + 50
                }}
        >
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <Paper>
                        <div style={{maxHeight: '15vh', overflow: 'auto'}}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList className={classes.drawerItem} autoFocusItem={open} id="menu-list-grow">
                                    {pointInd !== -1 && wptInd === -1 && <Buttons/>}
                                    {wptInd !== -1 && pointInd === -1 && <WptButtons/>}
                                </MenuList>
                            </ClickAwayListener>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                    <IconButton sx={{
                        backgroundColor: "white",
                        padding: "3px !important",
                        ml: -4,
                        mt: -1,
                        "&:hover": {backgroundColor: "white"}
                    }}
                                variant="contained"
                                type="button"
                                onClick={() => ctx.setPointContextMenu({})}
                    >
                        <Close sx={{fontSize: "0.8rem !important"}} fontSize="small"/>
                    </IconButton>
                </Grid>
            </Grid>
        </Popper>
        {editDialogOpen && <EditFavoriteDialog
            favorite={ctx.selectedGpxFile.wpts[wptInd]}
            editFavoritesDialogOpen={editDialogOpen}
            setEditFavoritesDialogOpen={setEditDialogOpen}
        />}
    </>
}
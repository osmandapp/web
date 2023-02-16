import {Box, ClickAwayListener, MenuItem, MenuList, Paper, Popper} from "@mui/material";
import React, {useContext, useEffect, useState} from "react";
import TracksManager from "../../context/TracksManager";
import AppContext from "../../context/AppContext";
import {makeStyles} from "@material-ui/core/styles";
import PointManager from "../../context/PointManager";

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

    useEffect(() => {
        if (anchorEl) {
            let ind = ctx.selectedGpxFile.points.findIndex(point => point.lat === ctx.pointContextMenu.coord.lat && point.lng === ctx.pointContextMenu.coord.lng);
            setPointInd(ind);
        }
    }, [anchorEl])

    function deletePoint() {
        if (pointInd !== -1) {
            PointManager.deletePoint(pointInd, ctx).then();
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
        }
    }

    function trimAfter() {
        if (pointInd !== -1 && pointInd !== ctx.selectedGpxFile.points.length - 1) {
            ctx.selectedGpxFile.points.splice(pointInd + 1, ctx.selectedGpxFile.points.length - pointInd);
            ctx.selectedGpxFile.updateLayers = true;
            ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
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

    const Buttons = () => {
        return (
            <div>
                {<MenuItem onClick={() => {
                    deletePoint();
                    ctx.setPointContextMenu({});
                }}>
                    Delete point</MenuItem>
                }
                {pointInd > 0 && <MenuItem onClick={() => {
                    trimBefore();
                    ctx.setPointContextMenu({});
                }}>
                    Trim before</MenuItem>
                }
                {pointInd < ctx.selectedGpxFile.points.length - 1 && <MenuItem onClick={() => {
                    trimAfter();
                    ctx.setPointContextMenu({});
                }}>
                    Trim after</MenuItem>
                }
                {pointInd > 0 && <MenuItem onClick={() => {
                    changeProfileBefore();
                    ctx.setPointContextMenu({});
                }}>
                    Change route type before this point</MenuItem>
                }
                {pointInd < ctx.selectedGpxFile.points.length - 1 && <MenuItem onClick={() => {
                    changeProfileAfter();
                    ctx.setPointContextMenu({});
                }}>
                    Change route type after this point</MenuItem>
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

    return <Popper open={anchorEl !== undefined} anchorEl={anchorEl} transition
                   style={{
                       zIndex: 1000,
                       left: ctx.pointContextMenu?.left + 330,
                       top: ctx.pointContextMenu?.top + 50
                   }}
    >

        <Paper>
            <div style={{maxHeight: '15vh', overflow: 'auto'}}>
                <ClickAwayListener onClickAway={handleClose}>
                    <MenuList className={classes.drawerItem} autoFocusItem={open} id="menu-list-grow">
                        <Buttons/>
                    </MenuList>
                </ClickAwayListener>
            </div>
        </Paper>

    </Popper>
}
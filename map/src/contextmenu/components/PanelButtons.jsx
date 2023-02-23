import {ButtonGroup, IconButton, Paper} from "@mui/material";
import {Close, Delete, Folder, Redo, Undo} from "@mui/icons-material";
import React, {useContext, useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppContext from "../../context/AppContext";
import SaveTrackDialog from "./track/SaveTrackDialog";
import DeleteTrackDialog from "./track/DeleteTrackDialog";
import DeleteFavoriteDialog from "./favorite/DeleteFavoriteDialog";
import _ from "lodash";
import Utils, {getProfileIcon} from "../../util/Utils";
import TracksManager from "../../context/TracksManager";
import useUndoRedo from "../useUndoRedo";

const useStyles = makeStyles({
    buttongroup: {
        top: '20%',
        width: '10px',
        height: '10px',
    }
})

const PanelButtons = ({drawerWidth, showContextMenu, setShowContextMenu, clearState}) => {

    const classes = useStyles();

    const ctx = useContext(AppContext);

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    const {
        state,
        setState,
        undo,
        redo,
        clear,
        isUndoPossible,
        isRedoPossible,
        pastStates,
        futureStates
    } = useUndoRedo({});

    useEffect(() => {
        if (clearState) {
            clear()
        }
    }, [clearState])

    console.log(_.cloneDeep(ctx.selectedGpxFile))
    console.log(_.cloneDeep(state))
    console.log(_.cloneDeep(pastStates))
    console.log(_.cloneDeep(futureStates))

    useEffect(() => {
        if (ctx.selectedGpxFile && (ctx.selectedGpxFile.points?.length >= 1 || ctx.selectedGpxFile.wpts?.length >= 1)) {
            console.log(!isEqualState(ctx.selectedGpxFile, state))
            console.log(!hasSameState(pastStates, ctx.selectedGpxFile))
            let needUpdateState = !ctx.selectedGpxFile.updateState && !isEqualState(ctx.selectedGpxFile, state)
                && !hasSameState(pastStates, ctx.selectedGpxFile) && !hasSameState(futureStates, ctx.selectedGpxFile);
            if (needUpdateState) {
                state.updateState = false;
                setState(_.cloneDeep(ctx.selectedGpxFile));
            }
            ctx.selectedGpxFile.updateState = false;
            if (hasSameState(pastStates, ctx.selectedGpxFile)) {
                pastStates.forEach(s => {
                    if (isEqualState(s, ctx.selectedGpxFile)) {
                        pastStates.splice(_.indexOf(pastStates, s), 1);
                    }
                })
            }
        }
    }, [ctx.selectedGpxFile])

    function isEqualState(state1, state2) {
        let checkState1 = {};
        checkState1.points = _.cloneDeep(state1.points);
        checkState1.wpts = _.cloneDeep(state1.wpts);

        let checkState2 = {};
        checkState2.points = _.cloneDeep(state2.points);
        checkState2.wpts = _.cloneDeep(state2.wpts);

        if (state1.updateState !== undefined && state2.updateState !== undefined) {
            checkState1.updateState = _.cloneDeep(state1.updateState);
            checkState2.updateState = _.cloneDeep(state2.updateState);
        }
        return _.isEqual(checkState1, checkState2);
    }

    function hasSameState(states, state1) {
        return !!states.find(s => isEqualState(s, state1));
    }

    function getState(currentState) {
        let oldLayers = _.cloneDeep(ctx.selectedGpxFile.layers);
        ctx.selectedGpxFile = currentState;
        ctx.selectedGpxFile.updateLayers = true;
        ctx.selectedGpxFile.layers = oldLayers;
        ctx.selectedGpxFile.updateState = true;

        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }

    return (ctx.selectedGpxFile &&
        <div>{showContextMenu &&
            <div style={{left: drawerWidth + 10}} className={`${classes.buttongroup} ${'leaflet-bottom'}`}>
                <div className="leaflet-control leaflet-bar padding-container">
                    <Paper>
                        <ButtonGroup
                            orientation="vertical"
                            color="primary">
                            {ctx.createTrack &&
                                <IconButton
                                    variant="contained"
                                    type="button"
                                    onClick={() => {
                                        ctx.trackProfileManager.change = TracksManager.CHANGE_PROFILE_ALL;
                                        ctx.setTrackProfileManager({...ctx.trackProfileManager});
                                    }}
                                >
                                    {Utils.getProfileIcon(_.lowerCase(ctx.creatingRouteMode.mode),
                                        ctx.creatingRouteMode.colors[_.lowerCase(ctx.creatingRouteMode.mode)])}
                                </IconButton>}
                            {ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK && <IconButton
                                variant="contained"
                                type="button"
                                onClick={() => {
                                    ctx.selectedGpxFile.save = true;
                                    ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
                                }}
                            >
                                <Folder fontSize="small"/>
                            </IconButton>}
                            {ctx.currentObjectType !== ctx.OBJECT_TYPE_WEATHER && <IconButton
                                variant="contained"
                                type="button"
                                onClick={() => setOpenDeleteDialog(true)}
                            >
                                <Delete fontSize="small"/>
                            </IconButton>}
                            <IconButton
                                variant="contained"
                                type="button"
                                disabled={!isUndoPossible}
                                onClick={(e) => {
                                    undo();
                                    getState(pastStates[pastStates.length - 1]);
                                    e.stopPropagation();
                                }}
                            >
                                <Undo fontSize="small"/>
                            </IconButton>
                            <IconButton
                                variant="contained"
                                type="button"
                                disabled={!isRedoPossible}
                                onClick={(e) => {
                                    redo();
                                    getState(futureStates[0]);
                                    e.stopPropagation();
                                }}
                            >
                                <Redo fontSize="small"/>
                            </IconButton>
                            <IconButton
                                variant="contained"
                                type="button"
                                onClick={() => {
                                    setShowContextMenu(false);
                                    clear();
                                }}
                            >
                                <Close fontSize="small"/>
                            </IconButton>
                        </ButtonGroup>
                    </Paper>
                </div>
            </div>
        }
            {ctx.selectedGpxFile.save && <SaveTrackDialog/>}
            {openDeleteDialog && (ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK || ctx.currentObjectType === ctx.OBJECT_TYPE_CLOUD_TRACK)
                && <DeleteTrackDialog
                    dialogOpen={openDeleteDialog}
                    setDialogOpen={setOpenDeleteDialog}
                    setShowContextMenu={setShowContextMenu}/>}
            {openDeleteDialog && ctx.currentObjectType === ctx.OBJECT_TYPE_FAVORITE
                && <DeleteFavoriteDialog
                    dialogOpen={openDeleteDialog}
                    setDialogOpen={setOpenDeleteDialog}/>}
        </div>);
};

export default PanelButtons;
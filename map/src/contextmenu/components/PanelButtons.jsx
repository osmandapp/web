import {ButtonGroup, IconButton, Paper, Tooltip} from "@mui/material";
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
        top: '30vh',
        width: '10px',
        height: '10px',
    }
})

const PanelButtons = ({drawerWidth, showContextMenu, setShowContextMenu, clearState}) => {

    const classes = useStyles();

    const ctx = useContext(AppContext);

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [useSavedState, setUseSavedState] = useState(false);

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
            clear();
        }
    }, [clearState])

    useEffect(() => {
        if (useSavedState) {
            ctx.trackState.block = false;
            getState(state);
        }
    }, [state])


    useEffect(() => {
        if (!useSavedState) {
            if (ctx.trackState.update) {
                addFirstState();
                setState(_.cloneDeep(ctx.selectedGpxFile));
                ctx.trackState.update = false;
                ctx.setTrackState({...ctx.trackState});
            }
        }
    }, [ctx.trackState])


    function addFirstState() {
        if (pastStates.length === 0) {
            state.tracks = TracksManager.createGpxTracks();
            state.points = [];
            state.name = ctx.selectedGpxFile.name;
        }
    }

    function getState(currentState) {
        let oldLayers = _.cloneDeep(ctx.selectedGpxFile.layers);
        let objFromState = _.cloneDeep(currentState);
        objFromState.updateLayers = true;
        objFromState.layers = oldLayers;
        setUseSavedState(false)
        ctx.setSelectedGpxFile({...objFromState});
    }

    return (ctx.selectedGpxFile &&
        <div>{showContextMenu &&
            <div style={{left: drawerWidth + 10}} className={`${classes.buttongroup} ${'leaflet-bottom'}`}>
                <div className="leaflet-control leaflet-bar padding-container">
                    <Paper>
                        <ButtonGroup
                            orientation="vertical"
                            color="primary"
                            sx={{maxWidth: 36}}>
                            {ctx.createTrack &&
                                <Tooltip title="Change profile" arrow placement="right">
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
                                    </IconButton>
                                </Tooltip>}
                            {ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK &&
                                <Tooltip title="Save" arrow placement="right">
                                    <IconButton
                                        variant="contained"
                                        type="button"
                                        onClick={() => {
                                            ctx.selectedGpxFile.save = true;
                                            ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
                                        }}
                                    >
                                        <Folder fontSize="small"/>
                                    </IconButton>
                                </Tooltip>}
                            {ctx.currentObjectType !== ctx.OBJECT_TYPE_WEATHER && ctx.currentObjectType !== ctx.OBJECT_TYPE_POI &&
                                <Tooltip title="Delete" arrow placement="right">
                                    <IconButton
                                        variant="contained"
                                        type="button"
                                        onClick={() => setOpenDeleteDialog(true)}
                                    >
                                        <Delete fontSize="small"/>
                                    </IconButton>
                                </Tooltip>}
                            {ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK && <IconButton
                                variant="contained"
                                type="button"
                                disabled={!isUndoPossible || ctx.trackState.block}
                                onClick={(e) => {
                                    undo();
                                    setUseSavedState(true);
                                    e.stopPropagation();
                                }}
                            >
                                <Undo fontSize="small"/>
                            </IconButton>}
                            {ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK && <IconButton
                                variant="contained"
                                type="button"
                                disabled={!isRedoPossible}
                                onClick={(e) => {
                                    redo();
                                    setUseSavedState(true);
                                    e.stopPropagation();
                                }}
                            >
                                <Redo fontSize="small"/>
                            </IconButton>}
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
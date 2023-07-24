import { ButtonGroup, IconButton, Paper, Tooltip } from '@mui/material';
import { Close, Delete, CloudUpload, Redo, Undo } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppContext from '../../context/AppContext';
import SaveTrackDialog from './track/dialogs/SaveTrackDialog';
import DeleteTrackDialog from './track/dialogs/DeleteTrackDialog';
import DeleteFavoriteDialog from './favorite/DeleteFavoriteDialog';
import _ from 'lodash';
import TracksManager from '../../context/TracksManager';
import useUndoRedo from '../useUndoRedo';
import { isMobile } from 'react-device-detect';

const useStyles = makeStyles({
    buttongroup: {
        top: '30vh',
        width: '10px',
        height: '10px',
    },
});

const PanelButtons = ({ showContextMenu, setShowContextMenu, clearState }) => {
    const classes = useStyles();

    const ctx = useContext(AppContext);

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [useSavedState, setUseSavedState] = useState(false);

    const { state, setState, undo, redo, clear, isUndoPossible, isRedoPossible, pastStates } = useUndoRedo(
        {},
        ctx.trackState.pastStates,
        ctx.trackState.futureStates
    );
    //futureStates for logs

    useEffect(() => {
        if (clearState) {
            doClear();
        }
    }, [clearState]);

    useEffect(() => {
        if (useSavedState) {
            getState(state);
            ctx.trackState.block = false;
            ctx.setTrackState({ ...ctx.trackState });
        }
    }, [state]);

    useEffect(() => {
        if (!useSavedState) {
            if (ctx.trackState.update) {
                setState(_.cloneDeep(ctx.selectedGpxFile));
                ctx.trackState.update = false;
                ctx.setTrackState({ ...ctx.trackState });
            }
        }
    }, [ctx.trackState]);

    function doClear() {
        clear(); // setState() can't be used inside dispatch()
        ctx.setTrackState({ pastStates: [], futureStates: [] });
    }

    function getState(currentState) {
        getTrack(currentState);
        setUseSavedState(false);
    }

    function getTrack(currentState) {
        let oldLayers = _.cloneDeep(ctx.selectedGpxFile.layers);
        let objFromState = _.cloneDeep(currentState);
        objFromState.updateLayers = true;
        objFromState.layers = oldLayers;
        objFromState.getRouting = true;

        ctx.setSelectedGpxFile({ ...objFromState });
    }

    return (
        ctx.selectedGpxFile && (
            <div>
                {showContextMenu && (
                    <div
                        style={{ marginTop: isMobile ? '-130px' : '-50px' }}
                        className={`${classes.buttongroup} ${'leaflet-bottom'}`}
                    >
                        <div className="leaflet-control leaflet-bar padding-container">
                            <Paper>
                                <ButtonGroup orientation="vertical" color="primary" sx={{ maxWidth: 36 }}>
                                    {ctx.createTrack && (
                                        <Tooltip title="Change profile" arrow placement="right">
                                            <IconButton
                                                variant="contained"
                                                type="button"
                                                onClick={() => {
                                                    ctx.trackProfileManager.change = TracksManager.CHANGE_PROFILE_ALL;
                                                    ctx.setTrackProfileManager({ ...ctx.trackProfileManager });
                                                }}
                                            >
                                                {ctx.trackRouter.getProfile()?.icon}
                                            </IconButton>
                                        </Tooltip>
                                    )}
                                    {ctx.loginUser && ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK && (
                                        <Tooltip title="Save to cloud" arrow placement="right">
                                            <IconButton
                                                variant="contained"
                                                type="button"
                                                onClick={() => {
                                                    ctx.selectedGpxFile.save = true;
                                                    ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
                                                }}
                                            >
                                                <CloudUpload fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                    )}
                                    {ctx.currentObjectType !== ctx.OBJECT_TYPE_WEATHER &&
                                        ctx.currentObjectType !== ctx.OBJECT_TYPE_POI && (
                                            <Tooltip title="Delete" arrow placement="right">
                                                <IconButton
                                                    variant="contained"
                                                    type="button"
                                                    onClick={() => setOpenDeleteDialog(true)}
                                                >
                                                    <Delete fontSize="small" />
                                                </IconButton>
                                            </Tooltip>
                                        )}
                                    {ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK && (
                                        <IconButton
                                            variant="contained"
                                            type="button"
                                            disabled={
                                                !isUndoPossible ||
                                                ctx.trackState.block ||
                                                (pastStates.length === 1 && _.isEmpty(pastStates[0]))
                                            }
                                            onClick={(e) => {
                                                undo();
                                                setUseSavedState(true);
                                                e.stopPropagation();
                                            }}
                                        >
                                            <Undo fontSize="small" />
                                        </IconButton>
                                    )}
                                    {ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK && (
                                        <IconButton
                                            variant="contained"
                                            type="button"
                                            disabled={!isRedoPossible}
                                            onClick={(e) => {
                                                redo();
                                                setUseSavedState(true);
                                                e.stopPropagation();
                                            }}
                                        >
                                            <Redo fontSize="small" />
                                        </IconButton>
                                    )}
                                    <IconButton
                                        variant="contained"
                                        type="button"
                                        onClick={() => {
                                            doClear();
                                            setShowContextMenu(false);
                                        }}
                                    >
                                        <Close fontSize="small" />
                                    </IconButton>
                                </ButtonGroup>
                            </Paper>
                        </div>
                    </div>
                )}
                {ctx.selectedGpxFile.save && <SaveTrackDialog />}
                {openDeleteDialog &&
                    (ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK ||
                        ctx.currentObjectType === ctx.OBJECT_TYPE_CLOUD_TRACK) && (
                        <DeleteTrackDialog
                            dialogOpen={openDeleteDialog}
                            setDialogOpen={setOpenDeleteDialog}
                            setShowContextMenu={setShowContextMenu}
                        />
                    )}
                {openDeleteDialog && ctx.currentObjectType === ctx.OBJECT_TYPE_FAVORITE && (
                    <DeleteFavoriteDialog dialogOpen={openDeleteDialog} setDialogOpen={setOpenDeleteDialog} />
                )}
            </div>
        )
    );
};

export default PanelButtons;

import { ButtonGroup, IconButton, Paper, Tooltip, CircularProgress } from '@mui/material';
import { Delete, Redo, Undo } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react';
import AppContext, { isLocalTrack, OBJECT_TYPE_WEATHER, OBJECT_TYPE_POI } from '../../context/AppContext';
import SaveTrackDialog from '../../dialogs/tracks/SaveTrackDialog';
import DeleteTrackDialog from '../../dialogs/tracks/DeleteTrackDialog';
import isEmpty from 'lodash-es/isEmpty';
import cloneDeep from 'lodash-es/cloneDeep';
import TracksManager from '../../manager/track/TracksManager';
import useUndoRedo from '../../infoblock/useUndoRedo';
const PanelButtons = ({ orientation, tooltipOrientation, setShowInfoBlock, clearState, bsize }) => {
    const ctx = useContext(AppContext);

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [useSavedState, setUseSavedState] = useState(false);

    const { state, setState, undo, redo, clear, isUndoPossible, isRedoPossible, pastStates } = useUndoRedo();

    const isUndoDisabled =
        !isUndoPossible || (pastStates.length === 1 && isEmpty(pastStates[0])) || ctx.selectedGpxFile.syncRouting;
    const isRedoDisabled = !isRedoPossible || ctx.selectedGpxFile.syncRouting;
    const isProfileProgress = ctx.processRouting;

    useEffect(() => {
        if (clearState) {
            doClear();
        }
    }, [clearState]);

    useEffect(() => {
        if (useSavedState) {
            getState(state);
            ctx.setTrackState({ ...ctx.trackState });
        }
    }, [state]);

    useEffect(() => {
        if (!useSavedState) {
            if (ctx.trackState.update) {
                setState(cloneDeep(ctx.selectedGpxFile));
                ctx.trackState.update = false;
                ctx.setTrackState({ ...ctx.trackState });
            }
        }
    }, [ctx.trackState]);

    function doClear() {
        clear(); // setState() can't be used inside dispatch()
        ctx.setTrackState({ update: false });
    }

    function getState(nextState) {
        getTrack(nextState);
        setUseSavedState(false);
    }

    function getTrack(nextState) {
        const objFromState = nextState;
        objFromState.syncRouting = true; // will be 1st effect
        objFromState.updateLayers = true; // will be 2nd effect
        objFromState.layers = ctx.selectedGpxFile.layers;
        ctx.setSelectedGpxFile(objFromState);
    }

    function getMarginTop() {
        return orientation === 'vertical' ? `-${bsize * 0.2}px` : 0;
    }

    function getMarginLeft() {
        return orientation === 'vertical' ? 0 : `${bsize}px`;
    }

    // little align elements with "disabled" attr, which must be covered with <span>, due to Tooltip warnings
    const styleSpan = {
        marginTop: orientation === 'vertical' ? 0 : '2px',
        marginLeft: orientation === 'vertical' ? '2px' : 0,
    };

    return (
        ctx.selectedGpxFile &&
        isLocalTrack(ctx) && (
            <div
                style={{
                    marginTop: getMarginTop(),
                    marginLeft: getMarginLeft(),
                    marginBottom: 'auto',
                }}
            >
                <Paper>
                    <ButtonGroup
                        sx={{
                            boxShadow: '0 1px 5px rgba(0,0,0,0.65)',
                            borderRadius: '4px',
                            width: orientation === 'vertical' ? bsize : 'auto',
                            height: orientation === 'vertical' ? 'auto' : bsize,
                        }}
                        orientation={orientation}
                        color="primary"
                    >
                        {ctx.createTrack && (
                            <Tooltip title="Change profile" arrow placement={tooltipOrientation}>
                                <IconButton
                                    id="se-panel-button-change-profile"
                                    sx={{ width: 40, height: 40 }}
                                    variant="contained"
                                    type="button"
                                    onClick={() => {
                                        ctx.trackProfileManager.change = TracksManager.CHANGE_PROFILE_ALL;
                                        ctx.setTrackProfileManager({ ...ctx.trackProfileManager });
                                    }}
                                >
                                    {isProfileProgress ? (
                                        <CircularProgress size={40 - 16} />
                                    ) : (
                                        ctx.trackRouter.getProfile()?.icon
                                    )}
                                </IconButton>
                            </Tooltip>
                        )}
                        <Tooltip title="Undo" arrow placement={tooltipOrientation}>
                            <span style={styleSpan}>
                                <IconButton
                                    id="se-panel-button-undo"
                                    variant="contained"
                                    type="button"
                                    disabled={isUndoDisabled}
                                    onClick={(e) => {
                                        undo();
                                        setUseSavedState(true);
                                        e.stopPropagation();
                                    }}
                                >
                                    <Undo fontSize="small" />
                                </IconButton>
                            </span>
                        </Tooltip>
                        <Tooltip title="Redo" arrow placement={tooltipOrientation}>
                            <span style={styleSpan}>
                                <IconButton
                                    id="se-panel-button-redo"
                                    variant="contained"
                                    type="button"
                                    disabled={isRedoDisabled}
                                    onClick={(e) => {
                                        redo();
                                        setUseSavedState(true);
                                        e.stopPropagation();
                                    }}
                                >
                                    <Redo fontSize="small" />
                                </IconButton>
                            </span>
                        </Tooltip>
                        {ctx.currentObjectType !== OBJECT_TYPE_WEATHER && ctx.currentObjectType !== OBJECT_TYPE_POI && (
                            <Tooltip title="Delete" arrow placement={tooltipOrientation}>
                                <IconButton
                                    id="se-panel-button-delete-track"
                                    sx={{ mb: '1px' }}
                                    variant="contained"
                                    type="button"
                                    onClick={() => setOpenDeleteDialog(true)}
                                >
                                    <Delete fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        )}
                    </ButtonGroup>
                </Paper>
                {ctx.selectedGpxFile.save && <SaveTrackDialog />}
                {openDeleteDialog && (
                    <DeleteTrackDialog
                        dialogOpen={openDeleteDialog}
                        setDialogOpen={setOpenDeleteDialog}
                        setShowInfoBlock={setShowInfoBlock}
                    />
                )}
            </div>
        )
    );
};

export default PanelButtons;

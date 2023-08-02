import { ButtonGroup, IconButton, Paper, Tooltip } from '@mui/material';
import { Close, Delete, CloudUpload, Redo, Undo, MenuOpen } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import SaveTrackDialog from './track/dialogs/SaveTrackDialog';
import DeleteTrackDialog from './track/dialogs/DeleteTrackDialog';
import DeleteFavoriteDialog from './favorite/DeleteFavoriteDialog';
import _ from 'lodash';
import TracksManager from '../../context/TracksManager';
import useUndoRedo from '../useUndoRedo';

const PanelButtons = ({
    orientation,
    setShowInfoBlock,
    infoBlockOpen,
    setInfoBlockOpen,
    clearState,
    mobile,
    bsize,
}) => {
    const ctx = useContext(AppContext);

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [useSavedState, setUseSavedState] = useState(false);

    const toggleInfoBlock = () => {
        setInfoBlockOpen(!infoBlockOpen);
    };

    const { state, setState, undo, redo, clear, isUndoPossible, isRedoPossible, pastStates } = useUndoRedo();

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
                setState(_.cloneDeep(ctx.selectedGpxFile));
                ctx.trackState.update = false;
                ctx.setTrackState({ ...ctx.trackState });
            }
        }
    }, [ctx.trackState]);

    function doClear() {
        clear(); // setState() can't be used inside dispatch()
        ctx.setTrackState({ update: false });
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

    function getMarginTop() {
        if (mobile) {
            return orientation === 'vertical' ? `${bsize * 3.5}px` : 0;
        } else {
            return orientation === 'vertical' ? `-${bsize * 3}px` : 0;
        }
    }

    function getMarginLeft() {
        if (mobile) {
            return orientation === 'vertical' ? `-${bsize}px` : `${bsize}px`;
        } else {
            return orientation === 'vertical' ? 0 : `${bsize}px`;
        }
    }

    return (
        ctx.selectedGpxFile && (
            <div
                style={{
                    marginTop: getMarginTop(),
                    marginLeft: getMarginLeft(),
                    marginBottom: !mobile && 'auto',
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
                                disabled={!isUndoPossible || (pastStates.length === 1 && _.isEmpty(pastStates[0]))}
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
                        {ctx.currentObjectType && !infoBlockOpen && !mobile && (
                            <Tooltip title="Open info" arrow placement="right">
                                <IconButton onClick={toggleInfoBlock} sx={{ transform: 'scaleX(1)' }}>
                                    <MenuOpen fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        )}
                        {ctx.currentObjectType && infoBlockOpen && !mobile && (
                            <Tooltip title="Close info" arrow placement="right">
                                <IconButton onClick={toggleInfoBlock} sx={{ transform: 'scaleX(-1)' }}>
                                    <MenuOpen fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        )}
                        <IconButton
                            variant="contained"
                            type="button"
                            onClick={() => {
                                doClear();
                                setShowInfoBlock(false);
                            }}
                        >
                            <Close fontSize="small" />
                        </IconButton>
                    </ButtonGroup>
                </Paper>
                {ctx.selectedGpxFile.save && <SaveTrackDialog />}
                {openDeleteDialog &&
                    (ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK ||
                        ctx.currentObjectType === ctx.OBJECT_TYPE_CLOUD_TRACK) && (
                        <DeleteTrackDialog
                            dialogOpen={openDeleteDialog}
                            setDialogOpen={setOpenDeleteDialog}
                            setShowInfoBlock={setShowInfoBlock}
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

import { ButtonGroup, IconButton, Paper, Tooltip, CircularProgress } from '@mui/material';
import { Close, Delete, Cloud, CloudUpload, Redo, Undo, Create, MenuOpen, Download } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import SaveTrackDialog from './track/dialogs/SaveTrackDialog';
import DeleteTrackDialog from './track/dialogs/DeleteTrackDialog';
import DeleteFavoriteDialog from './favorite/DeleteFavoriteDialog';
import _ from 'lodash';
import TracksManager, { isEmptyTrack } from '../../context/TracksManager';
import useUndoRedo from '../useUndoRedo';
import { confirm } from '../../dialogs/GlobalConfirmationDialog';
import { downloadGpx } from '../../infoblock/components/track/GeneralInfo';

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

    const isUndoDisabled = !isUndoPossible || (pastStates.length === 1 && _.isEmpty(pastStates[0])); // || ctx.processRouting
    const isRedoDisabled = !isRedoPossible; // || ctx.processRouting
    const isProfileDisabled = false; // ctx.processRouting;

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

    // little align elements with "disabled" attr, which must be covered with <span>, due to Tooltip warnings
    const styleSpan = {
        marginTop: orientation === 'vertical' ? 0 : '2px',
        marginLeft: orientation === 'vertical' ? '2px' : 0,
    };

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
                        {ctx.currentObjectType === ctx.OBJECT_TYPE_CLOUD_TRACK && (
                            <>
                                <Tooltip title="Cloud track" arrow placement="right">
                                    <IconButton
                                        variant="contained"
                                        type="button"
                                        onClick={() =>
                                            confirm({
                                                ctx,
                                                text: 'This is Cloud track. Open Local editor?',
                                                callback: () => TracksManager.handleEditCloudTrack(ctx),
                                            })
                                        }
                                    >
                                        <Cloud fontSize="medium" color="primary" />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Edit" arrow placement="right">
                                    <IconButton
                                        variant="contained"
                                        type="button"
                                        onClick={() => TracksManager.handleEditCloudTrack(ctx)}
                                    >
                                        <Create fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                            </>
                        )}
                        {ctx.createTrack && (
                            <Tooltip title="Change profile" arrow placement="right">
                                <IconButton
                                    sx={{ width: 40, height: 40 }}
                                    variant="contained"
                                    type="button"
                                    onClick={() => {
                                        if (!isProfileDisabled) {
                                            ctx.trackProfileManager.change = TracksManager.CHANGE_PROFILE_ALL;
                                            ctx.setTrackProfileManager({ ...ctx.trackProfileManager });
                                        }
                                    }}
                                >
                                    {isProfileDisabled ? (
                                        <CircularProgress size={40 - 16} />
                                    ) : (
                                        ctx.trackRouter.getProfile()?.icon
                                    )}
                                </IconButton>
                            </Tooltip>
                        )}
                        {ctx.loginUser && ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK && (
                            <Tooltip title="Save to cloud" arrow placement="right">
                                <span style={styleSpan}>
                                    <IconButton
                                        variant="contained"
                                        type="button"
                                        disabled={isEmptyTrack(ctx.selectedGpxFile, true)}
                                        onClick={() => {
                                            ctx.selectedGpxFile.save = true;
                                            ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
                                        }}
                                    >
                                        <CloudUpload fontSize="small" />
                                    </IconButton>
                                </span>
                            </Tooltip>
                        )}
                        {ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK && (
                            <Tooltip title="Undo" arrow placement="right">
                                <span style={styleSpan}>
                                    <IconButton
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
                        )}
                        {ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK && (
                            <Tooltip title="Redo" arrow placement="right">
                                <span style={styleSpan}>
                                    <IconButton
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
                        )}
                        {ctx.currentObjectType !== ctx.OBJECT_TYPE_WEATHER &&
                            ctx.currentObjectType !== ctx.OBJECT_TYPE_POI && (
                                <Tooltip title="Download GPX" arrow placement="right">
                                    <span style={styleSpan}>
                                        <IconButton
                                            variant="contained"
                                            type="button"
                                            disabled={isEmptyTrack(ctx.selectedGpxFile, true)}
                                            onClick={() => downloadGpx(ctx)}
                                        >
                                            <Download fontSize="small" />
                                        </IconButton>
                                    </span>
                                </Tooltip>
                            )}
                        {ctx.currentObjectType !== ctx.OBJECT_TYPE_WEATHER &&
                            ctx.currentObjectType !== ctx.OBJECT_TYPE_POI && (
                                <Tooltip title="Delete" arrow placement="right">
                                    <IconButton
                                        sx={{ mb: '1px' }}
                                        variant="contained"
                                        type="button"
                                        onClick={() => setOpenDeleteDialog(true)}
                                    >
                                        <Delete fontSize="small" />
                                    </IconButton>
                                </Tooltip>
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
                        <Tooltip title="Close" arrow placement="right">
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
                        </Tooltip>
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

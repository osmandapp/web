import { ButtonGroup, IconButton, Paper, Tooltip, CircularProgress } from '@mui/material';
import { Close, Delete, Cloud, CloudUpload, Redo, Undo, Create, Download } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react';
import AppContext, {
    isRouteTrack,
    isLocalTrack,
    isCloudTrack,
    OBJECT_TYPE_FAVORITE,
    OBJECT_TYPE_WEATHER,
    OBJECT_TYPE_POI,
} from '../../../context/AppContext';
import SaveTrackDialog from '../../../dialogs/tracks/SaveTrackDialog';
import DeleteTrackDialog from '../../../dialogs/tracks/DeleteTrackDialog';
import DeleteWptDialog from '../../../dialogs/favorites/DeleteWptDialog';
import _ from 'lodash';
import TracksManager, { isEmptyTrack } from '../../../manager/track/TracksManager';
import useUndoRedo from '../../../infoblock/useUndoRedo';
import { confirm } from '../../../dialogs/GlobalConfirmationDialog';
import { downloadGpx } from '../../../infoblock/components/tabs/GeneralInfoTab';
import RouteIcon from '@mui/icons-material/Route';
import { FREE_ACCOUNT } from '../../../manager/LoginManager';
import RouteProfileSettings from '../../../menu/route/RouteProfileSettings';

const PanelButtons = ({ orientation, tooltipOrientation, setShowInfoBlock, clearState, bsize }) => {
    const ctx = useContext(AppContext);

    const [openRoutingSettings, setOpenRoutingSettings] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [useSavedState, setUseSavedState] = useState(false);

    const { state, setState, undo, redo, clear, isUndoPossible, isRedoPossible, pastStates } = useUndoRedo();

    const isUndoDisabled =
        !isUndoPossible || (pastStates.length === 1 && _.isEmpty(pastStates[0])) || ctx.selectedGpxFile.syncRouting;
    const isRedoDisabled = !isRedoPossible || ctx.selectedGpxFile.syncRouting;
    const isProfileProgress = ctx.processRouting;

    useEffect(() => {
        openRoutingSettings ? ctx.routeObject.onOpenSettings() : ctx.routeObject.onCloseSettings();
    }, [openRoutingSettings]);

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

    function getState(nextState) {
        getTrack(nextState);
        setUseSavedState(false);
    }

    function getTrack(nextState) {
        const currentLayers = _.cloneDeep(ctx.selectedGpxFile.layers);
        const objFromState = _.cloneDeep(nextState);
        objFromState.syncRouting = true; // will be 1st effect
        objFromState.updateLayers = true; // will be 2nd effect
        objFromState.layers = currentLayers; // use actual layers
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
        ctx.currentObjectType !== OBJECT_TYPE_WEATHER && (
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
                        {(isCloudTrack(ctx) || isRouteTrack(ctx)) && (
                            <>
                                {isRouteTrack(ctx) && (
                                    <Tooltip title="Routing profile" placement={tooltipOrientation} arrow>
                                        <IconButton
                                            id="se-panel-button-profile-icon"
                                            type="button"
                                            variant="contained"
                                            onClick={() => setOpenRoutingSettings(true)}
                                        >
                                            {ctx.routeObject.getProfile()?.icon}
                                        </IconButton>
                                    </Tooltip>
                                )}
                                {isCloudTrack(ctx) && (
                                    <Tooltip
                                        title={isCloudTrack(ctx) ? 'Cloud track' : 'Route track'}
                                        placement={tooltipOrientation}
                                        arrow
                                    >
                                        <IconButton
                                            id="se-panel-button-edit-icon"
                                            variant="contained"
                                            type="button"
                                            onClick={() =>
                                                confirm({
                                                    ctx,
                                                    text:
                                                        'Open ' +
                                                        (isCloudTrack(ctx) ? 'Cloud' : 'Route') +
                                                        ' track in Local editor?',
                                                    callback: () => TracksManager.handleEditCloudTrack(ctx),
                                                })
                                            }
                                        >
                                            {isCloudTrack(ctx) ? (
                                                <Cloud fontSize="medium" color="primary" />
                                            ) : (
                                                <RouteIcon fontSize="medium" color="primary" />
                                            )}
                                        </IconButton>
                                    </Tooltip>
                                )}
                                <Tooltip title="Edit locally" arrow placement={tooltipOrientation}>
                                    <IconButton
                                        id="se-panel-button-edit-track"
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
                        {ctx.loginUser &&
                            ctx.accountInfo?.account !== FREE_ACCOUNT &&
                            (isLocalTrack(ctx) || isRouteTrack(ctx)) && (
                                <Tooltip title="Save to cloud" arrow placement={tooltipOrientation}>
                                    <span style={styleSpan}>
                                        <IconButton
                                            id="se-panel-button-save-to-cloud"
                                            variant="contained"
                                            type="button"
                                            disabled={isEmptyTrack(ctx.selectedGpxFile)}
                                            onClick={() => {
                                                ctx.setUpdateInfoBlock(true);
                                                ctx.selectedGpxFile.save = true;
                                                ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
                                            }}
                                        >
                                            <CloudUpload fontSize="small" />
                                        </IconButton>
                                    </span>
                                </Tooltip>
                            )}
                        {isLocalTrack(ctx) && (
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
                        )}
                        {isLocalTrack(ctx) && (
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
                        )}
                        {ctx.currentObjectType !== OBJECT_TYPE_WEATHER && ctx.currentObjectType !== OBJECT_TYPE_POI && (
                            <Tooltip title="Download GPX" arrow placement={tooltipOrientation}>
                                <span style={styleSpan}>
                                    <IconButton
                                        id="se-panel-button-download-gpx"
                                        variant="contained"
                                        type="button"
                                        disabled={isEmptyTrack(ctx.selectedGpxFile)}
                                        onClick={() => downloadGpx(ctx)}
                                    >
                                        <Download fontSize="small" />
                                    </IconButton>
                                </span>
                            </Tooltip>
                        )}
                        {ctx.currentObjectType !== OBJECT_TYPE_WEATHER &&
                            ctx.currentObjectType !== OBJECT_TYPE_POI &&
                            isRouteTrack(ctx) === false && (
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
                        {isRouteTrack(ctx) === false && (
                            <Tooltip title="Close" arrow placement={tooltipOrientation}>
                                <IconButton
                                    id="se-panel-button-close-track"
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
                        )}
                    </ButtonGroup>
                </Paper>
                {ctx.selectedGpxFile.save && <SaveTrackDialog />}
                {openDeleteDialog && (isLocalTrack(ctx) || isCloudTrack(ctx)) && (
                    <DeleteTrackDialog
                        dialogOpen={openDeleteDialog}
                        setDialogOpen={setOpenDeleteDialog}
                        setShowInfoBlock={setShowInfoBlock}
                    />
                )}
                {openDeleteDialog && ctx.currentObjectType === OBJECT_TYPE_FAVORITE && (
                    <DeleteWptDialog dialogOpen={openDeleteDialog} setDialogOpen={setOpenDeleteDialog} />
                )}
                {openRoutingSettings && (
                    <RouteProfileSettings key="routesettingsdialog" setOpenSettings={setOpenRoutingSettings} />
                )}
            </div>
        )
    );
};

export default PanelButtons;

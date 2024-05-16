import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { Dialog } from '@material-ui/core';
import React, { useContext, useEffect, useState, useRef } from 'react';
import SelectTrackProfile from '../../infoblock/components/track/SelectTrackProfile';
import DialogActions from '@mui/material/DialogActions';
import AppContext from '../../context/AppContext';
import TracksManager from '../../manager/track/TracksManager';
import { Button, IconButton, ToggleButton, ToggleButtonGroup, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@material-ui/core/styles';
import TrackLayerProvider from '../../map/util/TrackLayerProvider';
import TracksRoutingCache from '../../context/TracksRoutingCache';
import RouteProfileSettings from '../../menu/route/RouteProfileSettings';
import { Settings } from '@mui/icons-material';
import { useWindowSize } from '../../util/hooks/useWindowSize';

const useStyles = makeStyles({
    dialog: {
        '& .MuiDialog-paper': {
            overflow: 'hidden',
        },
    },
});

export default function ChangeProfileTrackDialog({ open }) {
    const ctx = useContext(AppContext);
    const classes = useStyles();
    const [width] = useWindowSize();

    const geoRouters = {
        [TracksManager.CHANGE_PROFILE_ALL]: ctx.trackRouter,
        [TracksManager.CHANGE_PROFILE_AFTER]: ctx.afterPointRouter,
        [TracksManager.CHANGE_PROFILE_BEFORE]: ctx.beforePointRouter,
    };

    const geoRouter = geoRouters[ctx.trackProfileManager.change] ?? null;

    if (!geoRouter) {
        throw new Error('Invalid geoRouter in ChangeProfileTrackDialog');
    }

    const geoProfile = geoRouter.getGeoProfile();

    const [changeOne, setChangeOne] = useState(false);
    const [changeAll, setChangeAll] = useState(false);
    const [change, setChange] = React.useState('one');

    const [openSettings, setOpenSettings] = useState(false);

    const handleToggleChange = (event, change) => {
        setChange(change);
    };

    const closeDialog = () => {
        ctx.setTrackProfileManager({});
    };

    const handleCancel = () => {
        if (geoProfileOnCancel.current) {
            geoRouter.onGeoProfile(geoProfileOnCancel.current);
        }
        closeDialog();
    };

    const geoProfileOnCancel = useRef(null);

    useEffect(() => {
        geoProfileOnCancel.current = geoRouter.getGeoProfile();
    }, []);

    useEffect(() => {
        if (change === 'one') {
            setChangeOne(true);
            setChangeAll(false);
        } else if (change === 'all') {
            setChangeAll(true);
            setChangeOne(false);
        }
    }, [change]);

    const partialEdit =
        ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_BEFORE
            ? 'Previous'
            : ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_AFTER
              ? 'Next'
              : null;

    useEffect(() => {
        /*
            Set geoRouter type/profile/base based on pointInd in case of partialEdit.
            See also: editCurrentTrack() onGeoProfile() in LocalClientTrackLayer
            Used when Profile before/after was selected in Point Context menu.
        */
        if (partialEdit) {
            const currentPoint = ctx.selectedGpxFile.points[ctx.trackProfileManager.pointInd];

            const usePoint =
                ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_BEFORE
                    ? ctx.selectedGpxFile.points[ctx.trackProfileManager.pointInd - 1]
                    : currentPoint;

            const finalPoint = usePoint ?? currentPoint;

            if (finalPoint.geoProfile || finalPoint.profile) {
                geoRouter.onGeoProfile(finalPoint);
            }
        }
    }, [ctx.trackProfileManager?.pointInd]);

    function updateLastPointProfile() {
        const track = ctx.selectedGpxFile;
        if (track.points?.length > 0) {
            const last = track.points.length - 1;
            if (track.points[last].profile !== TracksManager.PROFILE_GAP) {
                track.points[last].geoProfile = geoProfile;
                track.points[last].profile = geoProfile.profile;
            }
        }
    }

    async function changeProfile() {
        if (!ctx.selectedGpxFile.layers) {
            return false; // on empty track
        }
        let polylines = TrackLayerProvider.getPolylines(ctx.selectedGpxFile.layers.getLayers());
        if (!partialEdit) {
            if (changeAll) {
                // whole track - all segments
                if (ctx.selectedGpxFile.points?.length > 1) {
                    for (let i = 0; i < ctx.selectedGpxFile.points.length - 1; i++) {
                        const start = ctx.selectedGpxFile.points[i];
                        const end = ctx.selectedGpxFile.points[i + 1];
                        if (start.profile !== TracksManager.PROFILE_GAP) {
                            const currentPolyline = TrackLayerProvider.updatePolyline(
                                start,
                                end,
                                polylines,
                                start,
                                end
                            );
                            if (currentPolyline) {
                                start.geoProfile = geoProfile;
                                start.profile = geoProfile.profile;
                                TracksRoutingCache.addRoutingToCache(start, end, currentPolyline, ctx);
                            }
                        }
                    }
                    updateLastPointProfile();
                    return true;
                } else {
                    if (ctx.selectedGpxFile.points?.length > 0) {
                        ctx.selectedGpxFile.points[0].geoProfile = geoProfile;
                        ctx.selectedGpxFile.points[0].profile = geoProfile.profile;
                    }
                    return true;
                }
            } else {
                updateLastPointProfile(); // just update last point's profile
            }
        } else {
            if (changeOne) {
                // before or after - one segment
                let currentPoint = ctx.selectedGpxFile.points[ctx.trackProfileManager.pointInd];
                let prevPoint = ctx.selectedGpxFile.points[ctx.trackProfileManager.pointInd - 1];
                let nextPoint = ctx.selectedGpxFile.points[ctx.trackProfileManager.pointInd + 1];
                if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_BEFORE) {
                    const currentPolyline = TrackLayerProvider.updatePolyline(
                        prevPoint,
                        currentPoint,
                        polylines,
                        prevPoint,
                        currentPoint
                    );
                    if (currentPolyline) {
                        prevPoint.geoProfile = geoProfile;
                        prevPoint.profile = geoProfile.profile;
                        TracksRoutingCache.addRoutingToCache(prevPoint, currentPoint, currentPolyline, ctx);
                    }
                    return true;
                } else if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_AFTER) {
                    const currentPolyline = TrackLayerProvider.updatePolyline(
                        currentPoint,
                        nextPoint,
                        polylines,
                        currentPoint,
                        nextPoint
                    );
                    if (currentPolyline) {
                        currentPoint.geoProfile = geoProfile;
                        currentPoint.profile = geoProfile.profile;
                        TracksRoutingCache.addRoutingToCache(currentPoint, nextPoint, currentPolyline, ctx);
                    }
                    return true;
                }
            } else if (changeAll) {
                // before or after - all segments
                if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_BEFORE) {
                    for (let i = 0; i < ctx.trackProfileManager.pointInd; i++) {
                        const start = ctx.selectedGpxFile.points[i];
                        const end = ctx.selectedGpxFile.points[i + 1];
                        if (start.profile !== TracksManager.PROFILE_GAP) {
                            const currentPolyline = TrackLayerProvider.updatePolyline(
                                start,
                                end,
                                polylines,
                                start,
                                end
                            );
                            if (currentPolyline) {
                                start.geoProfile = geoProfile;
                                start.profile = geoProfile.profile;
                                TracksRoutingCache.addRoutingToCache(start, end, currentPolyline, ctx);
                            }
                        }
                    }
                    return true;
                } else if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_AFTER) {
                    for (let i = ctx.trackProfileManager.pointInd; i < ctx.selectedGpxFile.points.length - 1; i++) {
                        const start = ctx.selectedGpxFile.points[i];
                        const end = ctx.selectedGpxFile.points[i + 1];
                        if (start.profile !== TracksManager.PROFILE_GAP) {
                            const currentPolyline = TrackLayerProvider.updatePolyline(
                                start,
                                end,
                                polylines,
                                start,
                                end
                            );
                            if (currentPolyline) {
                                start.geoProfile = geoProfile;
                                start.profile = geoProfile.profile;
                                TracksRoutingCache.addRoutingToCache(start, end, currentPolyline, ctx);
                            }
                        }
                    }
                    updateLastPointProfile();
                    return true;
                }
            }
        }
        return false;
    }

    return (
        <>
            {openSettings && (
                <RouteProfileSettings
                    key="trackroutesettingsdialog"
                    geoRouter={geoRouter}
                    setOpenSettings={setOpenSettings}
                />
            )}
            <Dialog disableEnforceFocus open={open} onClose={handleCancel} className={classes.dialog}>
                <Box display="flex">
                    <Box flexGrow={1}>
                        <DialogTitle>Change profile</DialogTitle>
                    </Box>
                    <Box>
                        <IconButton variant="contained" type="button" onClick={handleCancel}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </Box>
                <DialogContent
                    sx={{ minWidth: width / 4, padding: '0px 0px', marginLeft: '-15px', marginRight: '-23px' }}
                >
                    <SelectTrackProfile
                        hideSettings={true}
                        geoRouter={geoRouter}
                        label={`Plan route profile (${geoProfile.type})`}
                    />
                </DialogContent>
                {partialEdit && (
                    <DialogActions style={{ justifyContent: 'center', overflowY: 'hidden' }}>
                        <ToggleButtonGroup
                            value={change}
                            exclusive
                            fullWidth={true}
                            onChange={handleToggleChange}
                            aria-label="text alignment"
                        >
                            <ToggleButton value="one">{partialEdit} segment</ToggleButton>
                            <ToggleButton value="all">All {partialEdit} segments</ToggleButton>
                        </ToggleButtonGroup>
                    </DialogActions>
                )}
                {!partialEdit && (
                    <DialogActions style={{ justifyContent: 'center', overflowY: 'hidden' }}>
                        <ToggleButtonGroup
                            value={change}
                            exclusive
                            fullWidth={true}
                            onChange={handleToggleChange}
                            aria-label="text alignment"
                        >
                            <ToggleButton value="one">Next segments</ToggleButton>
                            <ToggleButton value="all">All segments</ToggleButton>
                        </ToggleButtonGroup>
                    </DialogActions>
                )}
                <DialogActions>
                    <Box display="flex" flexGrow={1}>
                        <IconButton
                            onClick={() => {
                                setOpenSettings(true);
                            }}
                        >
                            <Settings fontSize="medium" />
                        </IconButton>
                    </Box>
                    <Button onClick={handleCancel}>Cancel</Button>
                    <Button
                        onClick={() => {
                            changeProfile().then((changed) => {
                                if (changed) {
                                    ctx.trackState.update = true;
                                    ctx.setTrackState({ ...ctx.trackState });
                                }
                            });
                            closeDialog(); // don't wait for changeProfile's promise
                        }}
                        sx={{ fontWeight: 'bold' }}
                    >
                        Change
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

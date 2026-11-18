import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import React, { useContext, useEffect, useState, useRef } from 'react';
import SelectTrackProfile from '../../infoblock/components/track/SelectTrackProfile';
import DialogActions from '@mui/material/DialogActions';
import AppContext from '../../context/AppContext';
import TracksManager from '../../manager/track/TracksManager';
import { Button, IconButton, ToggleButton, ToggleButtonGroup, Box, Dialog } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PointManager from '../../manager/PointManager';
import RouteProfileSettings from '../../menu/navigation/RouteProfileSettings';
import { Settings } from '@mui/icons-material';
import { useWindowSize } from '../../util/hooks/useWindowSize';

export default function ChangeProfileTrackDialog({ open }) {
    const ctx = useContext(AppContext);
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

    return (
        <>
            {openSettings && (
                <RouteProfileSettings
                    key="trackroutesettingsdialog"
                    geoRouter={geoRouter}
                    setOpenSettings={setOpenSettings}
                />
            )}
            <Dialog
                id="se-change-profile-dialog"
                disableEnforceFocus
                open={open}
                onClose={handleCancel}
                PaperProps={{
                    sx: {
                        overflow: 'hidden',
                    },
                }}
            >
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
                    <Button id="se-change-profile-dialog-cancel" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button
                        id="se-change-profile-dialog-change"
                        onClick={() => {
                            PointManager.changeProfile({ ctx, geoProfile, changeOne, changeAll }).then((changed) => {
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

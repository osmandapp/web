import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { Dialog } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import SelectTrackProfile from '../SelectTrackProfile';
import DialogActions from '@mui/material/DialogActions';
import AppContext from '../../../../context/AppContext';
import TracksManager from '../../../../context/TracksManager';
import { Button, Grid, IconButton, ToggleButton, ToggleButtonGroup, Box } from '@mui/material';
import { Close } from '@mui/icons-material';
import { makeStyles } from '@material-ui/core/styles';
import TrackLayerProvider from '../../../../map/TrackLayerProvider';
import RoutingManager from '../../../../context/RoutingManager';
import RouteProfileSettingsDialog from '../../../../drawer/components/route/RouteProfileSettingsDialog';
import { Settings } from '@mui/icons-material';

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
    // const [profile, setProfile] = useState(ctx.creatingRouteMode);

    const [changeOne, setChangeOne] = useState(false);
    const [changeAll, setChangeAll] = useState(false);
    const [change, setChange] = React.useState('one');
    const [dialogOpen, setDialogOpen] = useState(open);

    const [openSettings, setOpenSettings] = useState(false);

    const handleChange = (event, change) => {
        setChange(change);
    };

    const toggleShowDialog = () => {
        setDialogOpen(!dialogOpen);
    };

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
        if (partialEdit) {
            const currentPoint = ctx.selectedGpxFile.points[ctx.trackProfileManager.pointInd];

            const point =
                ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_BEFORE
                    ? ctx.selectedGpxFile.points[ctx.trackProfileManager.pointInd - 1]
                    : currentPoint;

            geoRouter.onRouterProfileSelected(point ?? currentPoint);
        }
    }, [ctx.trackProfileManager?.pointInd]);

    async function changeProfile() {
        if (!ctx.selectedGpxFile.layers) {
            // TracksManager.updateGlobalProfileState(ctx, profile.mode);
            return; // on empty track
        }
        let polylines = TrackLayerProvider.getPolylines(ctx.selectedGpxFile.layers.getLayers());
        if (!partialEdit) {
            if (changeAll) {
                if (ctx.selectedGpxFile.points.length > 1) {
                    for (let i = 0; i < ctx.selectedGpxFile.points.length - 1; i++) {
                        const start = ctx.selectedGpxFile.points[i];
                        const end = ctx.selectedGpxFile.points[i + 1];
                        if (start.profile !== TracksManager.PROFILE_GAP) {
                            start.geoProfile = geoProfile;
                            start.profile = geoProfile.profile;
                            let currentPolyline = TrackLayerProvider.updatePolyline(start, end, polylines, start, end);
                            RoutingManager.addRoutingToCash(start, end, currentPolyline, ctx);
                        }
                    }
                } else {
                    ctx.selectedGpxFile.points[0].geoProfile = geoProfile;
                    ctx.selectedGpxFile.points[0].profile = geoProfile.profile;
                }
            }
            // TracksManager.updateGlobalProfileState(ctx, profile.mode);
        } else {
            if (changeOne) {
                let currentPoint = ctx.selectedGpxFile.points[ctx.trackProfileManager.pointInd];
                let prevPoint = ctx.selectedGpxFile.points[ctx.trackProfileManager.pointInd - 1];
                let nextPoint = ctx.selectedGpxFile.points[ctx.trackProfileManager.pointInd + 1];
                if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_BEFORE) {
                    prevPoint.geoProfile = geoProfile;
                    prevPoint.profile = geoProfile.profile;
                    let currentPolyline = TrackLayerProvider.updatePolyline(
                        prevPoint,
                        currentPoint,
                        polylines,
                        prevPoint,
                        currentPoint
                    );
                    RoutingManager.addRoutingToCash(prevPoint, currentPoint, currentPolyline, ctx);
                } else if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_AFTER) {
                    currentPoint.geoProfile = geoProfile;
                    currentPoint.profile = geoProfile.profile;
                    let currentPolyline = TrackLayerProvider.updatePolyline(
                        currentPoint,
                        nextPoint,
                        polylines,
                        currentPoint,
                        nextPoint
                    );
                    RoutingManager.addRoutingToCash(currentPoint, nextPoint, currentPolyline, ctx);
                }
            } else if (changeAll) {
                if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_BEFORE) {
                    for (let i = 0; i < ctx.trackProfileManager.pointInd; i++) {
                        const start = ctx.selectedGpxFile.points[i];
                        const end = ctx.selectedGpxFile.points[i + 1];
                        if (start.profile !== TracksManager.PROFILE_GAP) {
                            start.geoProfile = geoProfile;
                            start.profile = geoProfile.profile;
                            let currentPolyline = TrackLayerProvider.updatePolyline(start, end, polylines, start, end);
                            RoutingManager.addRoutingToCash(start, end, currentPolyline, ctx);
                        }
                    }
                } else if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_AFTER) {
                    for (
                        let i = ctx.trackProfileManager.pointInd;
                        i < ctx.selectedGpxFile.points.length - ctx.trackProfileManager.pointInd + 1;
                        i++
                    ) {
                        const start = ctx.selectedGpxFile.points[i];
                        const end = ctx.selectedGpxFile.points[i + 1];
                        if (start.profile !== TracksManager.PROFILE_GAP) {
                            start.geoProfile = geoProfile;
                            start.profile = geoProfile.profile;
                            let currentPolyline = TrackLayerProvider.updatePolyline(start, end, polylines, start, end);
                            RoutingManager.addRoutingToCash(start, end, currentPolyline, ctx);
                        }
                    }
                }
            }
        }
    }

    return (
        <>
            {openSettings && (
                <RouteProfileSettingsDialog
                    key="trackroutesettingsdialog"
                    geoRouter={geoRouter}
                    setOpenSettings={setOpenSettings}
                    useDev={true}
                />
            )}
            <Dialog disableEnforceFocus open={open} onClose={toggleShowDialog} className={classes.dialog}>
                <Grid container spacing={2}>
                    <Grid item xs={11}>
                        <DialogTitle>Change profile</DialogTitle>
                    </Grid>
                    <Grid item xs={1} sx={{ ml: -4, mt: 1.5 }}>
                        <IconButton variant="contained" type="button" onClick={() => ctx.setTrackProfileManager({})}>
                            <Close fontSize="small" />
                        </IconButton>
                    </Grid>
                </Grid>
                <DialogContent sx={{ minWidth: 500, padding: '0px 0px', marginLeft: '-15px', marginRight: '-23px' }}>
                    <SelectTrackProfile
                        hideSettings={true}
                        geoRouter={geoRouter}
                        label={`Plan route profile (${geoProfile.type})`}
                    />
                    {/* <SelectTrackProfile profile={profile} setProfile={setProfile} label={'Route profile'} /> */}
                </DialogContent>
                {partialEdit && (
                    <DialogActions style={{ justifyContent: 'center', overflowY: 'hidden' }}>
                        <ToggleButtonGroup
                            value={change}
                            exclusive
                            fullWidth={true}
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            sx={{ ml: 1 }}
                            onClick={() => {
                                setOpenSettings(true);
                            }}
                        >
                            <Settings fontSize="medium" />
                        </IconButton>
                    </Box>
                    <Button onClick={() => ctx.setTrackProfileManager({})}>Cancel</Button>
                    <Button
                        onClick={() => {
                            changeProfile().then(() => {
                                ctx.setTrackProfileManager({});
                                ctx.trackState.update = true;
                                ctx.setTrackState({ ...ctx.trackState });
                            });
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

// export default function ChangeProfileTrackDialog({ open }) {
//     const ctx = useContext(AppContext);
//     const classes = useStyles();

//     const [profile, setProfile] = useState(ctx.creatingRouteMode);
//     const [changeOne, setChangeOne] = useState(false);
//     const [changeAll, setChangeAll] = useState(false);
//     const [change, setChange] = React.useState('one');
//     const [dialogOpen, setDialogOpen] = useState(open);

//     const handleChange = (event, change) => {
//         setChange(change);
//     };

//     const toggleShowDialog = () => {
//         setDialogOpen(!dialogOpen);
//     };

//     useEffect(() => {
//         if (change === 'one') {
//             setChangeOne(true);
//             setChangeAll(false);
//         } else if (change === 'all') {
//             setChangeAll(true);
//             setChangeOne(false);
//         }
//     }, [change]);

//     const partialEdit =
//         ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_BEFORE
//             ? 'Previous'
//             : ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_AFTER
//             ? 'Next'
//             : null;

//     async function changeProfile() {
//         if (!ctx.selectedGpxFile.layers) {
//             TracksManager.updateGlobalProfileState(ctx, profile.mode);
//             return; // on empty track
//         }
//         let polylines = TrackLayerProvider.getPolylines(ctx.selectedGpxFile.layers.getLayers());
//         if (!partialEdit) {
//             if (changeAll) {
//                 if (ctx.selectedGpxFile.points.length > 1) {
//                     for (let i = 0; i < ctx.selectedGpxFile.points.length - 1; i++) {
//                         const start = ctx.selectedGpxFile.points[i];
//                         const end = ctx.selectedGpxFile.points[i + 1];
//                         if (start.profile !== TracksManager.PROFILE_GAP) {
//                             start.routeMode = profile;
//                             start.profile = profile.mode;
//                             let currentPolyline = TrackLayerProvider.updatePolyline(start, end, polylines, start, end);
//                             RoutingManager.addRoutingToCash(start, end, currentPolyline, ctx);
//                         }
//                     }
//                 } else {
//                     ctx.selectedGpxFile.points[0].routeMode = profile;
//                     ctx.selectedGpxFile.points[0].profile = profile.mode;
//                 }
//             }
//             TracksManager.updateGlobalProfileState(ctx, profile.mode);
//         } else {
//             if (changeOne) {
//                 let currentPoint = ctx.selectedGpxFile.points[ctx.trackProfileManager.pointInd];
//                 let prevPoint = ctx.selectedGpxFile.points[ctx.trackProfileManager.pointInd - 1];
//                 let nextPoint = ctx.selectedGpxFile.points[ctx.trackProfileManager.pointInd + 1];
//                 if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_BEFORE) {
//                     prevPoint.profile = profile.mode;
//                     prevPoint.routeMode = profile;
//                     let currentPolyline = TrackLayerProvider.updatePolyline(
//                         prevPoint,
//                         currentPoint,
//                         polylines,
//                         prevPoint,
//                         currentPoint
//                     );
//                     RoutingManager.addRoutingToCash(prevPoint, currentPoint, currentPolyline, ctx);
//                 } else if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_AFTER) {
//                     currentPoint.profile = profile.mode;
//                     currentPoint.routeMode = profile;
//                     let currentPolyline = TrackLayerProvider.updatePolyline(
//                         currentPoint,
//                         nextPoint,
//                         polylines,
//                         currentPoint,
//                         nextPoint
//                     );
//                     RoutingManager.addRoutingToCash(currentPoint, nextPoint, currentPolyline, ctx);
//                 }
//             } else if (changeAll) {
//                 if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_BEFORE) {
//                     for (let i = 0; i < ctx.trackProfileManager.pointInd; i++) {
//                         const start = ctx.selectedGpxFile.points[i];
//                         const end = ctx.selectedGpxFile.points[i + 1];
//                         if (start.profile !== TracksManager.PROFILE_GAP) {
//                             start.routeMode = profile;
//                             start.profile = profile.mode;
//                             let currentPolyline = TrackLayerProvider.updatePolyline(start, end, polylines, start, end);
//                             RoutingManager.addRoutingToCash(start, end, currentPolyline, ctx);
//                         }
//                     }
//                 } else if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_AFTER) {
//                     for (
//                         let i = ctx.trackProfileManager.pointInd;
//                         i < ctx.selectedGpxFile.points.length - ctx.trackProfileManager.pointInd + 1;
//                         i++
//                     ) {
//                         const start = ctx.selectedGpxFile.points[i];
//                         const end = ctx.selectedGpxFile.points[i + 1];
//                         if (start.profile !== TracksManager.PROFILE_GAP) {
//                             start.routeMode = profile;
//                             start.profile = profile.mode;
//                             let currentPolyline = TrackLayerProvider.updatePolyline(start, end, polylines, start, end);
//                             RoutingManager.addRoutingToCash(start, end, currentPolyline, ctx);
//                         }
//                     }
//                 }
//             }
//         }
//     }

//     return (
//         <Dialog disableEnforceFocus open={open} onClose={toggleShowDialog} className={classes.dialog}>
//             <Grid container spacing={2}>
//                 <Grid item xs={11}>
//                     <DialogTitle>Change profile</DialogTitle>
//                 </Grid>
//                 <Grid item xs={1} sx={{ ml: -4, mt: 1.5 }}>
//                     <IconButton variant="contained" type="button" onClick={() => ctx.setTrackProfileManager({})}>
//                         <Close fontSize="small" />
//                     </IconButton>
//                 </Grid>
//             </Grid>
//             {partialEdit && (
//                 <DialogActions style={{ justifyContent: 'center', overflowY: 'hidden' }}>
//                     <ToggleButtonGroup
//                         value={change}
//                         exclusive
//                         fullWidth={true}
//                         onChange={handleChange}
//                         aria-label="text alignment"
//                     >
//                         <ToggleButton value="one">{partialEdit} segment</ToggleButton>
//                         <ToggleButton value="all">All {partialEdit} segments</ToggleButton>
//                     </ToggleButtonGroup>
//                 </DialogActions>
//             )}
//             {!partialEdit && (
//                 <DialogActions style={{ justifyContent: 'center', overflowY: 'hidden' }}>
//                     <ToggleButtonGroup
//                         value={change}
//                         exclusive
//                         fullWidth={true}
//                         onChange={handleChange}
//                         aria-label="text alignment"
//                     >
//                         <ToggleButton value="one">Next segments</ToggleButton>
//                         <ToggleButton value="all">All segments</ToggleButton>
//                     </ToggleButtonGroup>
//                 </DialogActions>
//             )}
//             <DialogContent sx={{ minWidth: 500, padding: '0px 0px', marginLeft: '-15px', marginRight: '-23px' }}>
//                 <SelectTrackProfile profile={profile} setProfile={setProfile} label={'Route profile'} />
//             </DialogContent>
//             <DialogActions>
//                 <Button onClick={() => ctx.setTrackProfileManager({})}>Cancel</Button>
//                 <Button
//                     onClick={() => {
//                         changeProfile().then(() => {
//                             ctx.setTrackProfileManager({});
//                             ctx.trackState.update = true;
//                             ctx.setTrackState({ ...ctx.trackState });
//                         });
//                     }}
//                 >
//                     Change
//                 </Button>
//             </DialogActions>
//         </Dialog>
//     );
// }

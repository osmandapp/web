import { FormControl, InputLabel, MenuItem, IconButton, Select, Box } from '@mui/material';
import { Settings } from '@mui/icons-material';
// import Utils from '../../../util/Utils';
import { useState } from 'react';
// import AppContext from '../../../context/AppContext';
import { makeStyles } from '@material-ui/core/styles';
import RouteProfileSettingsDialog from '../../../drawer/components/route/RouteProfileSettingsDialog';

const useStyles = makeStyles({
    grid: {
        '& .MuiGrid-root': {
            marginTop: '0px !important',
            marginLeft: '0px !important',
        },
    },
});

export default function SelectTrackProfile({ geoRouter, label, hideSettings = false } = {}) {
    // const ctx = useContext(AppContext);
    const classes = useStyles();

    const [openSettings, setOpenSettings] = useState(false);

    const { profile } = geoRouter.getProfile();

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
            <MenuItem className={classes.grid} key="trackrouteprofile" sx={{ ml: 1, mr: 2, mt: 1 }}>
                <FormControl fullWidth>
                    <InputLabel id="route-mode-label">{label}</InputLabel>
                    <Select
                        labelid="route-mode-label"
                        label={label}
                        value={profile}
                        onChange={(e) => geoRouter.onRouterProfileSelected({ profile: e.target.value })}
                    >
                        {geoRouter.listProfiles().map(({ key, name, icon }) => (
                            <MenuItem key={key} value={key}>
                                <Box display="flex" width="100%" alignItems="center">
                                    <Box display="flex" width={25} justifyContent="center" alignItems="center">
                                        {icon}
                                    </Box>
                                    <Box display="flex" sx={{ ml: 1 }}>
                                        <Box sx={{ mt: '3px' }}>{name}</Box>
                                    </Box>
                                </Box>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {hideSettings === false && (
                    <IconButton
                        sx={{ ml: 1 }}
                        onClick={() => {
                            setOpenSettings(true);
                        }}
                    >
                        <Settings fontSize="medium" />
                    </IconButton>
                )}
            </MenuItem>
        </>
    );
}

// export default function SelectTrackProfile({ profile, setProfile, label }) {
//     const ctx = useContext(AppContext);
//     const classes = useStyles();

//     return (
//         <MenuItem className={classes.grid} key="routeprofile" sx={{ ml: 1, mr: 2 }}>
//             <FormControl fullWidth>
//                 <InputLabel id="route-mode-label">{label}</InputLabel>
//                 <Select
//                     labelid="route-mode-label"
//                     label={label}
//                     value={profile.mode}
//                     onChange={(e) =>
//                         setProfile({
//                             mode: e.target.value,
//                             modes: ctx.creatingRouteMode.modes,
//                             opts: ctx.creatingRouteMode.modes[e.target.value]?.params,
//                             colors: ctx.creatingRouteMode.colors,
//                         })
//                     }
//                 >
//                     {Object.entries(ctx.creatingRouteMode.modes).map(([key, vl]) => (
//                         <MenuItem className={classes.grid} key={key} value={key}>
//                             <Grid container spacing={2}>
//                                 <ListItemIcon>
//                                     {Utils.getProfileIcon(key, ctx.creatingRouteMode.colors[key])}
//                                 </ListItemIcon>
//                                 <Typography>{vl.name}</Typography>
//                             </Grid>
//                         </MenuItem>
//                     ))}
//                 </Select>
//             </FormControl>
//         </MenuItem>
//     );
// }

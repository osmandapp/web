import { FormControl, InputLabel, MenuItem, IconButton, Select, Box } from '@mui/material';
import { Settings } from '@mui/icons-material';
import { useState } from 'react';
import RouteProfileSettings from '../../../menu/navigation/RouteProfileSettings';

export default function SelectTrackProfile({ geoRouter, label, hideSettings = false } = {}) {
    const [openSettings, setOpenSettings] = useState(false);

    const { profile } = geoRouter.getProfile();

    return (
        <>
            {openSettings && (
                <RouteProfileSettings
                    key="trackroutesettingsdialog"
                    geoRouter={geoRouter}
                    setOpenSettings={setOpenSettings}
                />
            )}
            <MenuItem
                key="trackrouteprofile"
                sx={{
                    ml: 1,
                    mr: 2,
                    mt: 1,
                    '& .MuiGrid-root': {
                        marginTop: 0,
                        marginLeft: 0,
                    },
                }}
            >
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

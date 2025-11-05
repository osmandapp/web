import React from 'react';
import { Menu, MenuItem, ListItemIcon, ListItemText, Divider } from '@mui/material';

const PROFILES_ORDER = {
    main: ['car', 'truck', 'motorcycle', 'bicycle', 'pedestrian', 'horsebackriding', 'boat', 'ski', 'moped', 'train'],
    line: ['line'],
    rescue: ['rescuetrack', 'rescuetrack-emergency'],
};

export default function ProfilesMenu({ anchorEl, onClose, onProfileSelect, routeObject }) {
    const handleProfileClick = (profileKey) => {
        onProfileSelect(profileKey);
        onClose();
    };

    return (
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            slotProps={{
                paper: {
                    sx: {
                        mt: '5px',
                    },
                },
            }}
        >
            {Object.entries(PROFILES_ORDER).map(([groupKey, profileKeys], groupIndex) => (
                <React.Fragment key={groupKey}>
                    {groupIndex > 0 && <Divider />}
                    {profileKeys.map((profileKey) => {
                        const profile = routeObject.listProfiles().find((p) => p.key === profileKey);
                        if (!profile) return null;

                        const { key, name, icon, color } = profile;
                        return (
                            <MenuItem
                                key={key}
                                selected={routeObject.getProfile().profile === key}
                                onClick={() => handleProfileClick(key)}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 40,
                                        '& svg, & path': {
                                            fill: color || 'var(--selected-color)',
                                        },
                                    }}
                                >
                                    {icon}
                                </ListItemIcon>
                                <ListItemText primary={name} />
                            </MenuItem>
                        );
                    })}
                </React.Fragment>
            ))}
        </Menu>
    );
}

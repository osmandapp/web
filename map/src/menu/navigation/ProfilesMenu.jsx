import React from 'react';
import { Menu, MenuItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { PROFILE_GROUPS } from '../../store/geoRouter/profileConstants';

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
            {Object.entries(PROFILE_GROUPS)
                .map(([groupKey, profileKeys]) => {
                    const availableProfiles = profileKeys
                        .map((profileKey) => routeObject.listProfiles().find((p) => p.key === profileKey))
                        .filter(Boolean);
                    return { groupKey, profiles: availableProfiles };
                })
                .filter(({ profiles }) => profiles.length > 0)
                .map(({ groupKey, profiles }, groupIndex) => (
                    <React.Fragment key={groupKey}>
                        {groupIndex > 0 && <Divider />}
                        {profiles.map(({ key, name, icon, color }) => (
                            <MenuItem
                                key={key}
                                id={`se-route-profile-menu-${key}`}
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
                        ))}
                    </React.Fragment>
                ))}
        </Menu>
    );
}

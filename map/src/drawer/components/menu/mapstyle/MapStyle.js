import React, { useState, useContext } from 'react';
import { MenuItem, IconButton, FormControl, InputLabel, Select } from '@mui/material';
import { Settings } from '@mui/icons-material';
import AppContext from '../../../../context/AppContext';
import RenderingSettingsDialog from '../route/RenderingSettingsDialog';

export default function MapStyle() {
    const ctx = useContext(AppContext);
    const [openSettings, setOpenSettings] = useState(false);

    return (
        <>
            <MenuItem sx={{ ml: 1, mr: 2 }} disableRipple={true}>
                <FormControl fullWidth>
                    <InputLabel id="rendering-style-selector-label">Map Style</InputLabel>
                    <Select
                        labelid="rendering-style-selector-label"
                        label="Map Style"
                        value={ctx.tileURL.key}
                        onChange={(e) => ctx.setTileURL(ctx.allTileURLs[e.target.value])}
                    >
                        {Object.values(ctx.allTileURLs).map((item) => {
                            return (
                                <MenuItem key={item.key} value={item.key}>
                                    {item.uiname}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
                <IconButton sx={{ ml: 1 }} onClick={() => setOpenSettings(true)}>
                    <Settings fontSize="small" />
                </IconButton>
            </MenuItem>
            {openSettings && <RenderingSettingsDialog setOpenSettings={setOpenSettings} />}
        </>
    );
}

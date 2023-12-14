import React, { useState, useContext } from 'react';
import {
    MenuItem,
    IconButton,
    FormControl,
    InputLabel,
    Select,
    Switch,
    Typography,
    ListItemText,
    ListItemIcon,
    AppBar,
    Toolbar,
    Tooltip,
    Divider,
} from '@mui/material';
import { Settings } from '@mui/icons-material';
import AppContext, { defaultConfigureMapStateValues } from '../../context/AppContext';
import RenderingSettingsDialog from '../route/RenderingSettingsDialog';
import headerStyles from '../trackfavmenu.module.css';
import styles from '../configuremap/configuremap.module.css';
import { ReactComponent as StarIcon } from '../../assets/icons/ic_action_favorite.svg';
import { ReactComponent as ResetIcon } from '../../assets/icons/ic_action_reset_to_default_dark.svg';
import { cloneDeep } from 'lodash';

export default function ConfigureMap() {
    const ctx = useContext(AppContext);
    const [openSettings, setOpenSettings] = useState(false);

    const handleFavoritesSwitchChange = () => {
        let newConfigureMap = cloneDeep(ctx.configureMapState);
        newConfigureMap.showFavorites = !ctx.configureMapState.showFavorites;
        ctx.setConfigureMapState(newConfigureMap);
    };

    return (
        <>
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <Typography id="se-configure-map-menu-name" component="div" className={headerStyles.title}>
                        Configure map
                    </Typography>
                    {ctx.loginUser && (
                        <Tooltip key={'reset'} title="Reset settings" arrow placement="bottom-end">
                            <span>
                                <IconButton
                                    id="se-reset"
                                    variant="contained"
                                    type="button"
                                    className={headerStyles.appBarIcon}
                                    onClick={() => ctx.setConfigureMapState({ ...defaultConfigureMapStateValues })}
                                >
                                    <ResetIcon />
                                </IconButton>
                            </span>
                        </Tooltip>
                    )}
                </Toolbar>
            </AppBar>
            {ctx.loginUser && (
                <>
                    <MenuItem className={styles.item} onClick={handleFavoritesSwitchChange}>
                        <ListItemIcon className={styles.icon}>
                            <StarIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography variant="inherit" noWrap>
                                    Favorites
                                </Typography>
                                <Switch
                                    checked={ctx.configureMapState.showFavorites}
                                    onClick={(e) => e.stopPropagation()}
                                    onChange={handleFavoritesSwitchChange}
                                />
                            </div>
                        </ListItemText>
                    </MenuItem>
                    <Divider className={styles.dividerItem} />
                </>
            )}
            {ctx.develFeatures && (
                <MenuItem sx={{ ml: 1, mr: 2, mt: 2 }} disableRipple={true}>
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
            )}
            {openSettings && <RenderingSettingsDialog setOpenSettings={setOpenSettings} />}
        </>
    );
}

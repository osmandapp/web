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
import AppContext, { defaultConfigureMapStateValues, LOCAL_STORAGE_CONFIGURE_MAP } from '../../context/AppContext';
import RenderingSettingsDialog from '../route/RenderingSettingsDialog';
import headerStyles from '../trackfavmenu.module.css';
import styles from '../configuremap/configuremap.module.css';
import { ReactComponent as StarIcon } from '../../assets/icons/ic_action_favorite.svg';
import { ReactComponent as ResetIcon } from '../../assets/icons/ic_action_reset_to_default_dark.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import { ReactComponent as TracksIcon } from '../../assets/menu/ic_action_track.svg';
import { cloneDeep } from 'lodash';
import EmptyLogin from '../errors/EmptyLogin';
import { MENU_INFO_CLOSE_SIZE } from '../../manager/GlobalManager';

export default function ConfigureMap() {
    const ctx = useContext(AppContext);
    const [openSettings, setOpenSettings] = useState(false);

    const handleFavoritesSwitchChange = () => {
        let newConfigureMap = cloneDeep(ctx.configureMapState);
        newConfigureMap.showFavorites = !ctx.configureMapState.showFavorites;
        localStorage.setItem(LOCAL_STORAGE_CONFIGURE_MAP, JSON.stringify(newConfigureMap));
        ctx.setConfigureMapState(newConfigureMap);
    };

    function close() {
        ctx.setInfoBlockWidth(MENU_INFO_CLOSE_SIZE);
        ctx.setCurrentObjectType(null);
    }

    function setIconStyles() {
        let res = [];
        // disabled
        !ctx.configureMapState.showFavorites && res.push(styles.iconDisabled);
        // enabled
        ctx.configureMapState.showFavorites && res.push(styles.iconEnabled);

        return res.join(' ');
    }

    function openVisibleTracks() {}

    return (
        <>
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton variant="contained" type="button" className={styles.closeIcon} onClick={close}>
                        <CloseIcon />
                    </IconButton>
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
            {!ctx.loginUser && !ctx.develFeatures ? (
                <EmptyLogin />
            ) : (
                <>
                    {ctx.loginUser && (
                        <>
                            <MenuItem className={styles.item}>
                                <Typography className={styles.title} noWrap>
                                    Show
                                </Typography>
                            </MenuItem>
                            <MenuItem className={styles.item} onClick={handleFavoritesSwitchChange}>
                                <ListItemIcon className={setIconStyles()}>
                                    <StarIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Typography variant="inherit" noWrap>
                                            Favorites
                                        </Typography>
                                        <Switch
                                            id="se-configure-map-menu-favorite-switch"
                                            checked={ctx.configureMapState.showFavorites}
                                            onClick={(e) => e.stopPropagation()}
                                            onChange={handleFavoritesSwitchChange}
                                        />
                                    </div>
                                </ListItemText>
                            </MenuItem>
                            <Divider className={styles.dividerItem} />
                            <MenuItem divider className={styles.item} onClick={openVisibleTracks}>
                                <ListItemIcon className={styles.iconEnabled}>
                                    <TracksIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Typography variant="inherit" noWrap>
                                            Tracks
                                        </Typography>
                                    </div>
                                </ListItemText>
                            </MenuItem>
                        </>
                    )}
                    {ctx.develFeatures && (
                        <>
                            <MenuItem className={styles.item}>
                                <Typography className={styles.title} noWrap>
                                    Appearance
                                </Typography>
                            </MenuItem>
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
                        </>
                    )}
                </>
            )}
            {openSettings && <RenderingSettingsDialog setOpenSettings={setOpenSettings} />}
        </>
    );
}

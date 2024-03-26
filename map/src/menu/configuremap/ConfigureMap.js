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
import { useTranslation } from 'react-i18next';
import { closeHeader } from '../actions/HeaderHelper';
import { INTERACTIVE_LAYER } from '../../map/layers/CustomTileLayer';

export const DYNAMIC_RENDERING = 'dynamic';
export const VECTOR_GRID = 'vector_grid';

export default function ConfigureMap({ setOpenVisibleMenu }) {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();
    const [openSettings, setOpenSettings] = useState(false);

    const handleFavoritesSwitchChange = () => {
        let newConfigureMap = cloneDeep(ctx.configureMapState);
        newConfigureMap.showFavorites = !ctx.configureMapState.showFavorites;
        localStorage.setItem(LOCAL_STORAGE_CONFIGURE_MAP, JSON.stringify(newConfigureMap));
        ctx.setConfigureMapState(newConfigureMap);
    };

    function setIconStyles() {
        let res = [];
        // disabled
        !ctx.configureMapState.showFavorites && res.push(styles.iconDisabled);
        // enabled
        ctx.configureMapState.showFavorites && res.push(styles.iconEnabled);

        return res.join(' ');
    }

    return (
        <>
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton
                        variant="contained"
                        type="button"
                        className={styles.closeIcon}
                        onClick={() => closeHeader({ ctx })}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography id="se-configure-map-menu-name" component="div" className={headerStyles.title}>
                        {t('configure_map')}
                    </Typography>
                    {ctx.loginUser && (
                        <Tooltip key={'reset'} title={t('reset_to_default')} arrow placement="bottom-end">
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
                                    {t('shared_string_show')}
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
                                            {t('shared_string_favorites')}
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
                            <MenuItem divider className={styles.item} onClick={() => setOpenVisibleMenu(true)}>
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
                                            {t('shared_string_tracks')}
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
                                    {t('shared_string_appearance')}
                                </Typography>
                            </MenuItem>
                            <MenuItem sx={{ ml: 1, mr: 2, mt: 2 }} disableRipple={true}>
                                <FormControl fullWidth>
                                    <InputLabel id="rendering-style-selector-label">
                                        {t('map_widget_renderer')}
                                    </InputLabel>
                                    <Select
                                        labelid="rendering-style-selector-label"
                                        label={t('map_widget_renderer')}
                                        value={ctx.tileURL.key}
                                        onChange={(e) => {
                                            ctx.setTileURL(ctx.allTileURLs[e.target.value]);
                                            if (e.target.value === INTERACTIVE_LAYER) {
                                                ctx.setRenderingType(DYNAMIC_RENDERING);
                                            } else if (ctx.renderingType) {
                                                ctx.setRenderingType(null);
                                            }
                                        }}
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

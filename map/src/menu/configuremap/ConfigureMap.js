import React, { useState, useContext, useEffect } from 'react';
import {
    MenuItem,
    IconButton,
    FormControl,
    Select,
    Typography,
    ListItemText,
    ListItemIcon,
    AppBar,
    Toolbar,
    Tooltip,
    Box,
    Button,
} from '@mui/material';
import { Layers } from '@mui/icons-material';
import AppContext, { defaultConfigureMapStateValues, updateConfigureMapCache } from '../../context/AppContext';
import MapContext from '../../context/MapContext';
import RenderingSettingsDialog from '../navigation/RenderingSettingsDialog';
import headerStyles from '../trackfavmenu.module.css';
import styles from '../configuremap/configuremap.module.css';
import { ReactComponent as StarIcon } from '../../assets/icons/ic_action_favorite.svg';
import { ReactComponent as ResetIcon } from '../../assets/icons/ic_action_reset_to_default_dark.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import { ReactComponent as TracksIcon } from '../../assets/menu/ic_action_track.svg';
import { ReactComponent as PoiIcon } from '../../assets/icons/ic_action_info_outlined.svg';
import { ReactComponent as TerrainIcon } from '../../assets/icons/ic_action_terrain.svg';
import { ReactComponent as TransportStopIcon } from '../../assets/icons/ic_action_transport_stop.svg';
import cloneDeep from 'lodash-es/cloneDeep';
import EmptyLogin from '../../login/EmptyLogin';
import { useTranslation } from 'react-i18next';
import { closeHeader } from '../actions/HeaderHelper';
import { INTERACTIVE_LAYER } from '../../map/layers/CustomTileLayer';
import { TRACK_VISIBLE_FLAG } from '../../manager/track/TracksManager';
import PoiCategoriesConfig from './PoiCategoriesConfig';
import capitalize from 'lodash-es/capitalize';
import TerrainConfig, { getCurrentColorScheme } from './TerrainConfig';
import ButtonPro from '../../frame/pro/ButtonPro';
import { FREE_ACCOUNT } from '../../manager/LoginManager';
import TopographyProFeatures from '../../frame/pro/TopographyProFeatures';
import DividerWithMargin from '../../frame/components/dividers/DividerWithMargin';
import SubTitleMenu from '../../frame/components/titles/SubTitleMenu';
import SimpleItemWithSwitch from '../../frame/components/items/SimpleItemWithSwitch';
import LoginContext from '../../context/LoginContext';
import gStyles from '../gstylesmenu.module.css';
import { HEADER_SIZE, MAIN_URL_WITH_SLASH, MENU_IDS, VISIBLE_TRACKS_URL, liveHash } from '../../manager/GlobalManager';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import VisibleTracks from '../visibletracks/VisibleTracks';
import { useLocation, useNavigate } from 'react-router-dom';
import { osmandTileURL } from '../../map/baseTileURL';
import { isMvtTileURL, mvtOsmAndURL } from '../../map/mvt/MvtDemoConfig';
import { toggleHybridUnderlayUrl, useHybridUnderlayUrl } from '../../map/layers/MvtHybridDemo';

export const DYNAMIC_RENDERING = 'dynamic';
export const VECTOR_GRID = 'vector_grid';
const DEFAULT_MAP_STYLE_OPTIONS = [osmandTileURL, mvtOsmAndURL];

export default function ConfigureMap() {
    const ctx = useContext(AppContext);
    const mtx = useContext(MapContext);
    const ltx = useContext(LoginContext);

    const [, height] = useWindowSize();

    const navigate = useNavigate();
    const location = useLocation();

    const { t } = useTranslation();
    const [openSettings, setOpenSettings] = useState(false);
    const [openedTracks, setOpenedTracks] = useState(null);
    const [openPoiConfig, setOpenPoiConfig] = useState(false);
    const [openTerrainConfig, setOpenTerrainConfig] = useState(false);
    const [openVisibleTracks, setOpenVisibleTracks] = useState(false);
    const hybridUnderlayUrl = useHybridUnderlayUrl();

    const handleFavoritesSwitchChange = () => {
        const newConfigureMap = cloneDeep(ctx.configureMapState);
        newConfigureMap.showFavorites = !ctx.configureMapState.showFavorites;
        updateConfigureMapCache(newConfigureMap);
        ctx.setConfigureMapState(newConfigureMap);
    };

    const handleTransportStopsSwitchChange = () => {
        const newConfigureMap = cloneDeep(ctx.configureMapState);
        newConfigureMap.showTransportStops = !ctx.configureMapState.showTransportStops;
        updateConfigureMapCache(newConfigureMap);
        ctx.setConfigureMapState(newConfigureMap);
    };

    function setIconStyles(active) {
        let res = [];
        // disabled
        !active && res.push(styles.iconDisabled);
        // enabled
        active && res.push(styles.iconEnabled);

        return res.join(' ');
    }

    useEffect(() => {
        let savedVisible = JSON.parse(localStorage.getItem(TRACK_VISIBLE_FLAG));
        setOpenedTracks(savedVisible?.open?.length);
    }, [ctx.gpxFiles, ctx.visibleTracks]);

    useEffect(() => {
        if (ctx.configureMapState.terrain && ctx.configureMapState.terrain.key !== mtx.heightmap?.key) {
            mtx.setHeightmap(ctx.configureMapState.terrain);
        }
    }, [ctx.configureMapState.terrain]);

    function setDefaultConfigureMap() {
        const defaultConfigureMap = defaultConfigureMapStateValues;
        ctx.setConfigureMapState({ ...defaultConfigureMap });
        updateConfigureMapCache(defaultConfigureMap);
    }

    function showProButton() {
        return ltx.accountInfo?.account === FREE_ACCOUNT;
    }

    const mapStyleOptions = ctx.develFeatures ? Object.values(ctx.allTileURLs) : DEFAULT_MAP_STYLE_OPTIONS;
    const mapStyleKey = mapStyleOptions.some((item) => item.key === mtx.tileURL.key) ? mtx.tileURL.key : '';
    const mapStyleLabel = mapStyleOptions.find((item) => item.key === mapStyleKey)?.uiname ?? mtx.tileURL?.uiname ?? '';
    const hasRenderingSettings = Boolean(ctx.allTileURLs[mtx.tileURL.key]?.properties?.length);

    function handleMapStyleSelect(e) {
        const selected = mapStyleOptions.find((item) => item.key === e.target.value);
        if (!selected) {
            return;
        }

        mtx.setTileURL(selected);
        const renderingType = selected.key === INTERACTIVE_LAYER ? DYNAMIC_RENDERING : null;
        mtx.setRenderingType(renderingType);
        const newConfigureMap = cloneDeep(ctx.configureMapState);
        newConfigureMap.mapStyle = { tileURL: selected, renderingType };
        updateConfigureMapCache(newConfigureMap);
        ctx.setConfigureMapState(newConfigureMap);
    }

    function renderMapStyleSelect() {
        return (
            <MenuItem className={styles.item} disableRipple={true}>
                <ListItemIcon className={styles.iconEnabled}>
                    <Layers />
                </ListItemIcon>
                <FormControl fullWidth variant="standard">
                    <Select
                        variant="standard"
                        disableUnderline
                        displayEmpty
                        value={mapStyleKey}
                        onChange={handleMapStyleSelect}
                        renderValue={(selectedKey) => (
                            <Typography variant="inherit" noWrap>
                                {mapStyleOptions.find((item) => item.key === selectedKey)?.uiname ?? mapStyleLabel}
                            </Typography>
                        )}
                        sx={{
                            '& .MuiSelect-select': {
                                padding: 0,
                            },
                        }}
                    >
                        {mapStyleOptions.map((item) => (
                            <MenuItem key={item.key} value={item.key}>
                                {item.uiname}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </MenuItem>
        );
    }

    const DEFAULT_CONFIGURE = () => {
        return (
            <>
                {!ltx.loginUser ? (
                    <EmptyLogin />
                ) : (
                    <>
                        {ltx.loginUser && (
                            <>
                                <SubTitleMenu text={t('shared_string_show')} />
                                <MenuItem
                                    id="se-configure-map-menu-poi-categories"
                                    className={styles.item}
                                    onClick={() => {
                                        setOpenPoiConfig(true);
                                    }}
                                >
                                    <ListItemIcon
                                        className={setIconStyles((ctx.configureMapState.pois?.length ?? 0) > 0)}
                                    >
                                        <PoiIcon />
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
                                                {t('layer_poi')}
                                            </Typography>
                                            {(ctx.configureMapState.pois?.length ?? 0) > 0 && (
                                                <Typography variant="body2" className={styles.poiCategoriesInfo} noWrap>
                                                    {ctx.configureMapState.pois?.length ?? 0}
                                                </Typography>
                                            )}
                                        </div>
                                    </ListItemText>
                                </MenuItem>
                                <DividerWithMargin margin={'64px'} />
                                <SimpleItemWithSwitch
                                    icon={<StarIcon />}
                                    text={t('shared_string_favorites')}
                                    checked={ctx.configureMapState.showFavorites}
                                    onChange={handleFavoritesSwitchChange}
                                    id="se-configure-map-menu-favorite-switch"
                                    className={styles.item}
                                    iconClassName={setIconStyles(ctx.configureMapState.showFavorites)}
                                />
                                <DividerWithMargin margin={'64px'} />
                                <MenuItem
                                    id={'se-configure-map-visible-tracks'}
                                    className={styles.item}
                                    onClick={() => {
                                        setOpenVisibleTracks(true);
                                        navigate(MAIN_URL_WITH_SLASH + VISIBLE_TRACKS_URL + liveHash());
                                        ctx.setOpenVisibleMenu((prev) => ({
                                            ...prev,
                                            open: true,
                                            showConfig: true,
                                        }));
                                    }}
                                >
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
                                            {openedTracks !== 0 && (
                                                <Typography variant="body2" className={styles.poiCategoriesInfo} noWrap>
                                                    {openedTracks?.toString()}
                                                </Typography>
                                            )}
                                        </div>
                                    </ListItemText>
                                </MenuItem>
                                <DividerWithMargin margin={'64px'} />
                                <SimpleItemWithSwitch
                                    icon={<TransportStopIcon />}
                                    text={t('web:transport_stops_title')}
                                    checked={ctx.configureMapState.showTransportStops}
                                    onChange={handleTransportStopsSwitchChange}
                                    id="se-configure-map-menu-transport_stops"
                                    className={styles.item}
                                    iconClassName={setIconStyles(ctx.configureMapState.showTransportStops)}
                                />
                                <DividerWithMargin margin={'64px'} />
                                <MenuItem
                                    className={styles.item}
                                    onClick={() => {
                                        if (!showProButton()) {
                                            setOpenTerrainConfig(true);
                                        }
                                    }}
                                >
                                    <ListItemIcon className={setIconStyles(ctx.configureMapState.terrain?.key)}>
                                        <TerrainIcon />
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
                                                {t('shared_string_terrain')}
                                            </Typography>
                                            {showProButton() ? (
                                                <ButtonPro type={<TopographyProFeatures />} />
                                            ) : (
                                                <Typography variant="body2" className={styles.poiCategoriesInfo} noWrap>
                                                    {capitalize(getCurrentColorScheme(t, ctx))}
                                                </Typography>
                                            )}
                                        </div>
                                    </ListItemText>
                                </MenuItem>
                                <DividerWithMargin margin={'64px'} />
                                {renderMapStyleSelect()}
                            </>
                        )}
                        {ctx.develFeatures && (
                            <>
                                {hasRenderingSettings && (
                                    <Box sx={{ ml: 1, mr: 2, mt: 1 }}>
                                        <Button variant="outlined" fullWidth onClick={() => setOpenSettings(true)}>
                                            Rendering Props
                                        </Button>
                                    </Box>
                                )}
                                {isMvtTileURL(mtx.tileURL) && (
                                    <Box sx={{ ml: 1, mr: 2, mt: 1 }}>
                                        <Button variant="outlined" fullWidth onClick={toggleHybridUnderlayUrl}>
                                            {hybridUnderlayUrl
                                                ? 'Deactivate hybrid layer'
                                                : 'Activate hybrid MVT layer'}
                                        </Button>
                                    </Box>
                                )}
                            </>
                        )}
                    </>
                )}
                {openSettings && <RenderingSettingsDialog setOpenSettings={setOpenSettings} />}
            </>
        );
    };

    if (openVisibleTracks) {
        return <VisibleTracks source={MENU_IDS.config} open={setOpenVisibleTracks} />;
    }

    return (
        <Box sx={{ height: `${height - HEADER_SIZE}px` }} className={gStyles.scrollMainBlock}>
            {openPoiConfig || openTerrainConfig ? (
                <>
                    {openPoiConfig && <PoiCategoriesConfig setOpenPoiConfig={setOpenPoiConfig} />}
                    {openTerrainConfig && <TerrainConfig setOpenTerrainConfig={setOpenTerrainConfig} />}
                </>
            ) : (
                <>
                    <AppBar position="static" className={headerStyles.appbar}>
                        <Toolbar className={headerStyles.toolbar}>
                            <IconButton
                                id={'se-configure-map-menu-close'}
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
                            {ltx.loginUser && (
                                <Tooltip key={'reset'} title={t('reset_to_default')} arrow placement="bottom-end">
                                    <span>
                                        <IconButton
                                            id="se-reset"
                                            variant="contained"
                                            type="button"
                                            className={headerStyles.appBarIcon}
                                            onClick={setDefaultConfigureMap}
                                        >
                                            <ResetIcon />
                                        </IconButton>
                                    </span>
                                </Tooltip>
                            )}
                        </Toolbar>
                    </AppBar>
                    <Box className={gStyles.scrollActiveBlock}>
                        <DEFAULT_CONFIGURE />
                    </Box>
                </>
            )}
        </Box>
    );
}

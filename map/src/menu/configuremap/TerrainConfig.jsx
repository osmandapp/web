import headerStyles from '../trackfavmenu.module.css';
import {
    AppBar,
    Box,
    CircularProgress,
    IconButton,
    ListItemText,
    MenuItem,
    Paper,
    Slider,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material';
import styles from './configuremap.module.css';
import AppContext, { LOCAL_STORAGE_CONFIGURE_MAP } from '../../context/AppContext';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ReactComponent as ResetIcon } from '../../assets/icons/ic_action_reset_to_default_dark.svg';
import { ReactComponent as BackIcon } from '../../assets/icons/ic_arrow_back.svg';
import { useTranslation } from 'react-i18next';
import { ExpandMore } from '@mui/icons-material';
import SubTitle from '../components/SubTitle';
import ActionsMenu from '../actions/ActionsMenu';
import capitalize from 'lodash/capitalize';
import { cloneDeep } from 'lodash';

export default function TerrainConfig({ setOpenTerrainConfig }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [openMenu, setOpenMenu] = useState(false);
    const [value, setValue] = useState(ctx.heightmap?.capacity * 100);

    const OPACITY_HEIGHTMAP = 'opacity_heightmap';

    const heightmaps = ['hillshade', 'slope', 'height'];
    const heightmapsLayers = heightmaps.map((item) => {
        return {
            key: item,
            name: capitalize(item),
            url: `${process.env.REACT_APP_TILES_API_SITE}/heightmap/${item}/{z}/{x}/{y}.png`,
            capacity: 1,
        };
    });

    useEffect(() => {
        if (ctx.heightmap) {
            let newConfigureMap = cloneDeep(ctx.configureMapState);
            newConfigureMap.terrain = ctx.heightmap;
            localStorage.setItem(LOCAL_STORAGE_CONFIGURE_MAP, JSON.stringify(newConfigureMap));
            ctx.setConfigureMapState(newConfigureMap);
            setValue(getCapacity(ctx.heightmap.key));
        }
    }, [ctx.heightmap]);

    const anchorEl = useRef(null);

    const handleSliderChange = (e, newValue) => {
        ctx.setHeightmap({ ...ctx.heightmap, capacity: newValue / 100 });
        saveCapacity(newValue, ctx.heightmap.key);
        setValue(newValue);
    };

    function saveCapacity(value, key) {
        let obj = JSON.parse(localStorage.getItem(OPACITY_HEIGHTMAP));
        if (!obj) {
            obj = {};
        }
        obj[key] = value;
        localStorage.setItem(OPACITY_HEIGHTMAP, JSON.stringify(obj));
    }

    function getCapacity(key) {
        const obj = JSON.parse(localStorage.getItem(OPACITY_HEIGHTMAP));
        if (!obj) {
            return 100;
        }
        return obj[key] ?? 100;
    }

    function closeConfig() {
        setOpenTerrainConfig(false);
    }

    return (
        <>
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton variant="contained" className={styles.closeIcon} onClick={() => closeConfig()}>
                        <BackIcon />
                    </IconButton>
                    <Typography component="div" className={headerStyles.title}>
                        {t('shared_string_terrain')}
                    </Typography>
                    {ctx.loginUser && (
                        <Tooltip key={'reset'} title={t('reset_to_default')} arrow placement="bottom-end">
                            <span>
                                <IconButton
                                    id="se-reset"
                                    variant="contained"
                                    type="button"
                                    className={headerStyles.appBarIcon}
                                    onClick={() => ctx.setHeightmap('none')}
                                >
                                    <ResetIcon />
                                </IconButton>
                            </span>
                        </Tooltip>
                    )}
                </Toolbar>
            </AppBar>
            <MenuItem className={styles.item}>
                <ListItemText>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Typography className={styles.colorSchemeTitleText}>Color scheme</Typography>
                            {ctx.processHeightmaps && <CircularProgress size={16} sx={{ ml: 1 }} />}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body2" className={styles.poiCategoriesInfo} noWrap>
                                {capitalize(ctx.configureMapState.terrain?.key ?? ctx.configureMapState.terrain)}
                            </Typography>
                            <ExpandMore
                                sx={{ color: 'var(--text-secondary)', ml: 1 }}
                                ref={anchorEl}
                                onClick={() => setOpenMenu(true)}
                            />
                        </div>
                    </div>
                </ListItemText>
            </MenuItem>
            <ActionsMenu
                open={openMenu}
                setOpen={setOpenMenu}
                anchorEl={anchorEl}
                actions={
                    <Box>
                        <Paper>
                            <MenuItem
                                divider
                                onClick={() => {
                                    ctx.setHeightmap('none');
                                    setOpenMenu(false);
                                }}
                            >
                                None
                            </MenuItem>
                            {Object.values(heightmapsLayers).map((item) => {
                                return (
                                    <MenuItem
                                        key={item.key}
                                        onClick={() => {
                                            const selectedHeightmap = heightmapsLayers.find(
                                                (layer) => layer.key === item.key
                                            );
                                            selectedHeightmap.capacity = getCapacity(selectedHeightmap.key) / 100;
                                            ctx.setHeightmap(selectedHeightmap ?? 'none');
                                            setOpenMenu(false);
                                        }}
                                    >
                                        {item.name}
                                    </MenuItem>
                                );
                            })}
                        </Paper>
                    </Box>
                }
            />
            {ctx.heightmap?.key ? (
                <>
                    <SubTitle title={'shared_string_appearance'} />
                    <Box sx={{ m: 2 }}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography className={styles.terrainSliderTitle}>Visibility</Typography>
                            <Typography className={styles.terrainSliderValue}>{`${value}%`}</Typography>
                        </div>
                        <Slider
                            value={typeof value === 'number' ? value : 0}
                            onChange={handleSliderChange}
                            size="small"
                            aria-label="Small"
                            valueLabelDisplay="off"
                        />
                    </Box>
                </>
            ) : (
                <Box sx={{ mx: 2 }}>
                    <Typography className={styles.terrainInfo}>
                        Select one of visualization options: Altitude, Hillshade, Slope.
                    </Typography>
                </Box>
            )}
        </>
    );
}

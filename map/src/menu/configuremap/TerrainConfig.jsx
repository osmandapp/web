import headerStyles from '../trackfavmenu.module.css';
import { AppBar, Box, IconButton, Slider, Toolbar, Tooltip, Typography } from '@mui/material';
import styles from './configuremap.module.css';
import gStyles from '../gstylesmenu.module.css';
import AppContext, { updateConfigureMapCache } from '../../context/AppContext';
import MapContext from '../../context/MapContext';
import React, { useContext, useEffect, useState } from 'react';
import { ReactComponent as ResetIcon } from '../../assets/icons/ic_action_reset_to_default_dark.svg';
import { ReactComponent as BackIcon } from '../../assets/icons/ic_arrow_back.svg';
import { useTranslation } from 'react-i18next';
import cloneDeep from 'lodash-es/cloneDeep';
import ThickDivider from '../../frame/components/dividers/ThickDivider';
import SubTitleMenu from '../../frame/components/titles/SubTitleMenu';
import IconBtn from '../../frame/components/btns/IconBtn';
import LoginContext from '../../context/LoginContext';
import SelectItem from '../../frame/components/items/SelectItem';

export const NO_HEIGHTMAP = {
    key: 'none',
    name: 'shared_string_none',
};

export const heightmaps = {
    hillshade: 'shared_string_hillshade',
    slope: 'shared_string_slope',
    height: 'shared_string_height',
};

export function getCurrentColorScheme(t, ctx) {
    const key = ctx.configureMapState.terrain?.key ?? ctx.configureMapState.terrain;
    if (heightmaps[key]) {
        return t(heightmaps[key]);
    }
    return t(NO_HEIGHTMAP.name);
}

export default function TerrainConfig({ setOpenTerrainConfig }) {
    const ctx = useContext(AppContext);
    const mtx = useContext(MapContext);
    const ltx = useContext(LoginContext);

    const { t } = useTranslation();

    const [value, setValue] = useState((mtx.heightmap?.opacity ?? 1) * 100);

    const OPACITY_HEIGHTMAP = 'opacity_heightmap';

    function getHeightmapLayers() {
        return Object.entries(heightmaps).map(([key, i18nKey]) => ({
            key,
            name: t(i18nKey),
            url: `${process.env.REACT_APP_TILES_API_SITE}/heightmap/${key}/{z}/{x}/{y}.png`,
            opacity: 1,
        }));
    }

    useEffect(() => {
        if ((mtx.heightmap && !sameHeightmap()) || (sameHeightmap() && needUpdateOpacity())) {
            let newConfigureMap = cloneDeep(ctx.configureMapState);
            newConfigureMap.terrain = mtx.heightmap;
            updateConfigureMapCache(newConfigureMap);
            ctx.setConfigureMapState(newConfigureMap);
            // set slider value
            setValue(getOpacity(mtx.heightmap.key));
        }

        function sameHeightmap() {
            return mtx.heightmap?.key === ctx.configureMapState.terrain?.key;
        }

        function needUpdateOpacity() {
            return mtx.heightmap?.opacity !== ctx.configureMapState.terrain?.opacity;
        }
    }, [mtx.heightmap]);

    const localizedNone = { ...NO_HEIGHTMAP, name: t(NO_HEIGHTMAP.name), divider: true };
    const heightmapOptions = [localizedNone, ...getHeightmapLayers()];

    const handleSliderChange = (e, newValue) => {
        mtx.setHeightmap({ ...mtx.heightmap, opacity: newValue / 100 });
        saveOpacity(newValue, mtx.heightmap.key);
        setValue(newValue);
    };

    const handleHeightmapSelect = (selectedKey) => {
        if (selectedKey === NO_HEIGHTMAP.key) {
            mtx.setHeightmap(NO_HEIGHTMAP.key);
            return;
        }

        const selectedHeightmap = heightmapOptions.find((layer) => layer.key === selectedKey);
        if (selectedHeightmap) {
            selectedHeightmap.opacity = getOpacity(selectedHeightmap.key) / 100;
            mtx.setHeightmap(selectedHeightmap);
        }
    };

    // save opacity for each heightmap to local storage
    function saveOpacity(value, key) {
        let obj = JSON.parse(localStorage.getItem(OPACITY_HEIGHTMAP)) ?? {};
        obj[key] = value;
        localStorage.setItem(OPACITY_HEIGHTMAP, JSON.stringify(obj));
    }

    // get opacity for each heightmap from local storage
    function getOpacity(key) {
        const obj = JSON.parse(localStorage.getItem(OPACITY_HEIGHTMAP)) ?? {};
        return obj[key] ?? 100;
    }

    function closeConfig() {
        setOpenTerrainConfig(false);
    }

    return (
        <Box className={gStyles.scrollMainBlock}>
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconBtn variant="contained" className={styles.closeIcon} onClick={() => closeConfig()}>
                        <BackIcon />
                    </IconBtn>
                    <Typography component="div" className={headerStyles.title}>
                        {t('shared_string_terrain')}
                    </Typography>
                    {ltx.loginUser && (
                        <Tooltip key={'reset'} title={t('reset_to_default')} arrow placement="bottom-end">
                            <span>
                                <IconButton
                                    id="se-reset"
                                    variant="contained"
                                    type="button"
                                    className={headerStyles.appBarIcon}
                                    onClick={() => mtx.setHeightmap(NO_HEIGHTMAP.key)}
                                >
                                    <ResetIcon />
                                </IconButton>
                            </span>
                        </Tooltip>
                    )}
                </Toolbar>
            </AppBar>
            <Box className={gStyles.scrollActiveBlock}>
                <SelectItem
                    title={t('web:terrain_color_scheme')}
                    value={mtx.heightmap?.key ?? NO_HEIGHTMAP.key}
                    options={heightmapOptions}
                    loading={mtx.processHeightmaps}
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option.key}
                    onSelect={handleHeightmapSelect}
                />
                {mtx.heightmap?.key ? (
                    <Box>
                        <ThickDivider />
                        <SubTitleMenu text={t('shared_string_appearance')} />
                        <Box sx={{ m: 2 }}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography className={styles.terrainSliderTitle}>
                                    {t('web:terrain_visibility')}
                                </Typography>
                                <Typography className={styles.terrainSliderValue}>{`${value}%`}</Typography>
                            </div>
                            {value !== undefined && (
                                <Slider
                                    value={typeof value === 'number' ? value : 0}
                                    onChange={handleSliderChange}
                                    size="small"
                                    aria-label="Small"
                                    valueLabelDisplay="off"
                                    sx={{
                                        color: '#237BFF',
                                    }}
                                />
                            )}
                        </Box>
                    </Box>
                ) : (
                    <Box sx={{ mx: 2 }}>
                        <Typography className={styles.terrainInfo}>{t('web:terrain_desc')}</Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
}

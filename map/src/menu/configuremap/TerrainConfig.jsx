import headerStyles from '../trackfavmenu.module.css';
import { AppBar, Box, IconButton, Slider, Toolbar, Tooltip, Typography } from '@mui/material';
import styles from './configuremap.module.css';
import AppContext, { LOCAL_STORAGE_CONFIGURE_MAP } from '../../context/AppContext';
import React, { useContext, useEffect, useState } from 'react';
import { ReactComponent as ResetIcon } from '../../assets/icons/ic_action_reset_to_default_dark.svg';
import { ReactComponent as BackIcon } from '../../assets/icons/ic_arrow_back.svg';
import { useTranslation } from 'react-i18next';
import cloneDeep from 'lodash-es/cloneDeep';
import ThickDivider from '../../frame/components/dividers/ThickDivider';
import SubTitleMenu from '../../frame/components/titles/SubTitleMenu';
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
    const ltx = useContext(LoginContext);

    const { t } = useTranslation();

    const [value, setValue] = useState((ctx.heightmap?.opacity ?? 1) * 100);

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
        if ((ctx.heightmap && !sameHeightmap()) || (sameHeightmap() && needUpdateOpacity())) {
            // save selected terrain to local storage
            let newConfigureMap = cloneDeep(ctx.configureMapState);
            newConfigureMap.terrain = ctx.heightmap;
            localStorage.setItem(LOCAL_STORAGE_CONFIGURE_MAP, JSON.stringify(newConfigureMap));
            ctx.setConfigureMapState(newConfigureMap);
            // set slider value
            setValue(getOpacity(ctx.heightmap.key));
        }

        function sameHeightmap() {
            return ctx.heightmap?.key === ctx.configureMapState.terrain?.key;
        }

        function needUpdateOpacity() {
            return ctx.heightmap?.opacity !== ctx.configureMapState.terrain?.opacity;
        }
    }, [ctx.heightmap]);

    const localizedNone = { ...NO_HEIGHTMAP, name: t(NO_HEIGHTMAP.name), divider: true };
    const heightmapOptions = [localizedNone, ...getHeightmapLayers()];

    const handleSliderChange = (e, newValue) => {
        ctx.setHeightmap({ ...ctx.heightmap, opacity: newValue / 100 });
        saveOpacity(newValue, ctx.heightmap.key);
        setValue(newValue);
    };

    const handleHeightmapSelect = (selectedKey) => {
        if (selectedKey === NO_HEIGHTMAP.key) {
            ctx.setHeightmap(NO_HEIGHTMAP.key);
            return;
        }

        const selectedHeightmap = heightmapOptions.find((layer) => layer.key === selectedKey);
        if (selectedHeightmap) {
            selectedHeightmap.opacity = getOpacity(selectedHeightmap.key) / 100;
            ctx.setHeightmap(selectedHeightmap);
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
        <>
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton variant="contained" className={styles.closeIcon} onClick={() => closeConfig()}>
                        <BackIcon />
                    </IconButton>
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
                                    onClick={() => ctx.setHeightmap(NO_HEIGHTMAP.key)}
                                >
                                    <ResetIcon />
                                </IconButton>
                            </span>
                        </Tooltip>
                    )}
                </Toolbar>
            </AppBar>
            <SelectItem
                title={t('web:terrain_color_scheme')}
                value={ctx.heightmap?.key ?? NO_HEIGHTMAP.key}
                options={heightmapOptions}
                loading={ctx.processHeightmaps}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.key}
                onSelect={(selectedKey) => handleHeightmapSelect(selectedKey)}
            />
            {ctx.heightmap?.key ? (
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
                            <Typography className={styles.terrainSliderTitle}>{t('web:terrain_visibility')}</Typography>
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
        </>
    );
}

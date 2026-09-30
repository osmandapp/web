import React, { useContext, useState } from 'react';
import { Box, Slider, Tooltip, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import isEqual from 'lodash-es/isEqual';
import AppContext, { TRAVEL_HEATMAP_APPEARANCE_STORAGE_KEY } from '../../context/AppContext';
import SecondaryMenuDrawer from '../../frame/components/other/SecondaryMenuDrawer';
import HeaderWithUnderline from '../../frame/components/header/HeaderWithUnderline';
import ActionIconBtn from '../../frame/components/btns/ActionIconBtn';
import SelectItem from '../../frame/components/items/SelectItem';
import ThickDivider from '../../frame/components/dividers/ThickDivider';
import SimpleItemWithSwitch from '../../frame/components/items/SimpleItemWithSwitch';
import { ReactComponent as ResetIcon } from '../../assets/icons/ic_action_reset_to_default_dark.svg';
import styles from './travel.module.css';

export const HEATMAP_PALETTES = {
    vivid: {
        name: 'web:travel_heatmap_palette_vivid',
        stops: [
            [0, '#2b6cff'],
            [0.35, '#9b30d9'],
            [0.7, '#e8114a'],
            [1, '#6e0016'],
        ],
    },
    turbo: {
        name: 'web:travel_heatmap_palette_turbo',
        stops: [
            [0, '#3b4cc0'],
            [0.2, '#1f9ede'],
            [0.4, '#2fd18a'],
            [0.6, '#e2c62a'],
            [0.8, '#f7881e'],
            [1, '#c3121d'],
        ],
    },
    hot: {
        name: 'web:travel_heatmap_palette_hot',
        stops: [
            [0, '#9b0000'],
            [0.35, '#ff2a00'],
            [0.65, '#ff9a00'],
            [0.85, '#ffe100'],
            [1, '#fff6b0'],
        ],
    },
    blue: {
        name: 'web:travel_heatmap_palette_blue',
        stops: [
            [0, '#1b3a9e'],
            [0.45, '#2f7bff'],
            [0.8, '#6fd0ff'],
            [1, '#e8fbff'],
        ],
    },
};

export const HEATMAP_SCALE_EQUALIZED = 'equalized';
export const HEATMAP_SCALE_LOG = 'log';

const HEATMAP_STYLE_GAUSS = 'gauss';
export const HEATMAP_STYLE_HYBRID = 'hybrid';
export const HEATMAP_STYLE_CELLS = 'cells';

export const DEFAULT_HEATMAP_APPEARANCE = {
    style: HEATMAP_STYLE_GAUSS,
    palette: 'vivid',
    scale: HEATMAP_SCALE_EQUALIZED,
    width: 3,
    glow: 0.6,
    opacity: 0.9,
    minTracks: 1,
    greyMap: false,
};

const HEATMAP_SCALES = {
    [HEATMAP_SCALE_EQUALIZED]: 'web:travel_heatmap_scale_equalized',
    [HEATMAP_SCALE_LOG]: 'web:travel_heatmap_scale_log',
};

const HEATMAP_STYLES = {
    [HEATMAP_STYLE_GAUSS]: 'web:travel_heatmap_style_gauss',
    [HEATMAP_STYLE_HYBRID]: 'web:travel_heatmap_style_hybrid',
    [HEATMAP_STYLE_CELLS]: 'web:travel_heatmap_style_cells',
};

function resetHeatmapAppearance(ctx) {
    ctx.setTravelHeatmapAppearance(DEFAULT_HEATMAP_APPEARANCE);
    localStorage.removeItem(TRAVEL_HEATMAP_APPEARANCE_STORAGE_KEY);
}

export default function HeatmapAppearance({ onClose }) {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    const [draft, setDraft] = useState(null);

    function setAppearance(key, value) {
        const appearance = { ...ctx.travelHeatmapAppearance, [key]: value };
        ctx.setTravelHeatmapAppearance(appearance);
        localStorage.setItem(TRAVEL_HEATMAP_APPEARANCE_STORAGE_KEY, JSON.stringify(appearance));
    }

    // width and glow repaint every tile, so they apply on release; opacity is cheap and follows the thumb
    const slider = ({ key, title, min, max, step, format, live = false }) => {
        const value = draft?.key === key ? draft.value : ctx.travelHeatmapAppearance[key];

        return (
            <Box className={styles.sliderContainer} key={key}>
                <div className={styles.sliderHeader}>
                    <Typography className={styles.sliderTitle}>{title}</Typography>
                    <Typography className={styles.sliderValue}>{format(value)}</Typography>
                </div>
                <Slider
                    value={value}
                    onChange={(e, v) => (live ? setAppearance(key, v) : setDraft({ key, value: v }))}
                    onChangeCommitted={(e, v) => {
                        setDraft(null);
                        setAppearance(key, v);
                    }}
                    min={min}
                    max={max}
                    step={step}
                    valueLabelDisplay="off"
                />
            </Box>
        );
    };

    const percent = (v) => `${Math.round(v * 100)}%`;
    const hasLines = ctx.travelHeatmapAppearance.style !== HEATMAP_STYLE_CELLS;

    return (
        <SecondaryMenuDrawer onClose={onClose}>
            <HeaderWithUnderline
                title={t('shared_string_appearance')}
                onClose={onClose}
                showBackButton
                titleId="se-travel-appearance-title"
                rightContent={
                    <Tooltip title={t('reset_to_default')} arrow>
                        <span>
                            <ActionIconBtn
                                id="se-travel-appearance-reset"
                                icon={<ResetIcon />}
                                onClick={() => resetHeatmapAppearance(ctx)}
                                disabled={isEqual(ctx.travelHeatmapAppearance, DEFAULT_HEATMAP_APPEARANCE)}
                            />
                        </span>
                    </Tooltip>
                }
            />
            <Box className={styles.filtersBody}>
                <Box className={styles.filtersScroll}>
                    <SelectItem
                        title={t('web:travel_heatmap_style')}
                        value={ctx.travelHeatmapAppearance.style}
                        options={Object.entries(HEATMAP_STYLES).map(([key, name]) => ({ key, name: t(name) }))}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.key}
                        onSelect={(key) => setAppearance('style', key)}
                        showDivider={false}
                    />
                    <SelectItem
                        title={t('web:travel_heatmap_colors')}
                        value={ctx.travelHeatmapAppearance.palette}
                        options={Object.entries(HEATMAP_PALETTES).map(([key, palette]) => ({
                            key,
                            name: t(palette.name),
                        }))}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.key}
                        onSelect={(key) => setAppearance('palette', key)}
                        showDivider={false}
                    />
                    <Box
                        className={styles.heatmapPalette}
                        style={{ background: paletteGradient(ctx.travelHeatmapAppearance.palette) }}
                    />
                    <SelectItem
                        title={t('web:travel_heatmap_scale')}
                        value={ctx.travelHeatmapAppearance.scale}
                        options={Object.entries(HEATMAP_SCALES).map(([key, name]) => ({ key, name: t(name) }))}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.key}
                        onSelect={(key) => setAppearance('scale', key)}
                        showDivider={false}
                    />
                    <SimpleItemWithSwitch
                        id="se-travel-grey-map"
                        text={t('web:travel_heatmap_grey_map')}
                        checked={ctx.travelHeatmapAppearance.greyMap}
                        onChange={() => setAppearance('greyMap', !ctx.travelHeatmapAppearance.greyMap)}
                    />
                    <ThickDivider mt={0} />
                    {hasLines &&
                        slider({
                            key: 'width',
                            title: t('shared_string_width'),
                            min: 0.5,
                            max: 10,
                            step: 0.25,
                            format: String,
                        })}
                    {hasLines &&
                        slider({
                            key: 'glow',
                            title: t('web:travel_heatmap_glow'),
                            min: 0,
                            max: 1,
                            step: 0.05,
                            format: percent,
                        })}
                    {slider({
                        key: 'opacity',
                        title: t('web:travel_heatmap_opacity'),
                        min: 0.2,
                        max: 1,
                        step: 0.05,
                        format: percent,
                        live: true,
                    })}
                    {slider({
                        key: 'minTracks',
                        title: t('web:travel_heatmap_min_tracks'),
                        min: 1,
                        max: 50,
                        step: 1,
                        format: String,
                    })}
                </Box>
            </Box>
        </SecondaryMenuDrawer>
    );
}

function paletteGradient(palette) {
    const stops = HEATMAP_PALETTES[palette].stops.map(([at, colour]) => `${colour} ${at * 100}%`);

    return `linear-gradient(90deg, ${stops.join(', ')})`;
}

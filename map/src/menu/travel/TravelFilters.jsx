import React, { useContext, useState } from 'react';
import { Box, Collapse, Divider, Slider, ToggleButton, ToggleButtonGroup, Tooltip, Typography } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import AppContext from '../../context/AppContext';
import SecondaryMenuDrawer from '../../frame/components/other/SecondaryMenuDrawer';
import HeaderWithUnderline from '../../frame/components/header/HeaderWithUnderline';
import ActionIconBtn from '../../frame/components/btns/ActionIconBtn';
import { ReactComponent as ResetIcon } from '../../assets/icons/ic_action_reset_to_default_dark.svg';
import SelectItemWithoutOptions from '../../frame/components/items/SelectItemWithoutOptions';
import ThickDivider from '../../frame/components/dividers/ThickDivider';
import TagFilter from './TagFilter';
import { TAG_MATCH_MODES } from './TravelMenu';
import styles from './travel.module.css';
import {
    convertMeters,
    convertSpeedMS,
    getLargeLengthUnit,
    getSpeedUnit,
    LARGE_UNIT,
} from '../settings/units/UnitsConverter';

export default function TravelFilters({ onClose, onReset, hasActiveFilters, filters, bounds, setFilter }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [showTagFilters, setShowTagFilters] = useState(true);
    const [showAdvancedFilters, setShowAdvancedFilters] = useState(true);

    // One range slider driven by `filters[key]` (null when not applied → shows full bounds).
    const rangeSlider = ({ key, title, step, format, unit }) => {
        const [lo, hi] = bounds[key];
        const range = filters[key] ?? bounds[key];
        const active = filters[key] != null;

        return (
            <Box className={styles.sliderContainer} key={key}>
                <div className={styles.sliderHeader}>
                    <Typography className={styles.sliderTitle}>{title}</Typography>
                    <Typography className={styles.sliderValue}>
                        {format(range[0])} - {format(range[1])} {unit}
                    </Typography>
                </div>
                <Slider
                    value={range}
                    onChange={(e, value) => setFilter(key, value)}
                    min={lo}
                    max={hi}
                    step={step}
                    valueLabelDisplay="off"
                    sx={{
                        '& .MuiSlider-thumb': { opacity: active ? 1 : 0.5 },
                        '& .MuiSlider-track': { opacity: active ? 1 : 0.5 },
                    }}
                />
                <div className={styles.sliderBounds}>
                    <Typography className={styles.sliderBoundValue}>{format(lo)}</Typography>
                    <Typography className={styles.sliderBoundValue}>{format(hi)}</Typography>
                </div>
            </Box>
        );
    };

    const meters = (v) => convertMeters(v, ctx.unitsSettings.len, LARGE_UNIT).toFixed(0);
    const speed = (v) => convertSpeedMS(v / 3.6, ctx.unitsSettings.speed).toFixed(0);
    const plain = (v) => v;

    const rangeFilterGroups = [
        [
            { key: 'distance', title: t('distance'), step: 1000, format: meters, unit: t(getLargeLengthUnit(ctx)) },
            {
                key: 'maxDistBetweenPoints',
                title: t('web:max_distance_between_points'),
                step: 10,
                format: plain,
                unit: t('m'),
            },
        ],
        [
            { key: 'speed', title: t('shared_string_speed'), step: 1, format: speed, unit: t(getSpeedUnit(ctx)) },
            {
                key: 'maxSpeed',
                title: t('shared_string_max_speed'),
                step: 1,
                format: speed,
                unit: t(getSpeedUnit(ctx)),
            },
        ],
        [
            {
                key: 'timeMinutes',
                title: t('shared_string_time_span'),
                step: 1,
                format: plain,
                unit: t('shared_string_minute_lowercase'),
            },
            { key: 'waypoints', title: t('web:waypoints'), step: 1, format: plain, unit: '' },
        ],
    ];

    return (
        <SecondaryMenuDrawer onClose={onClose}>
            <HeaderWithUnderline
                title={t('shared_string_filters')}
                onClose={onClose}
                showBackButton
                titleId="se-travel-filters-title"
                rightContent={
                    <Tooltip title={t('reset_to_default')} arrow>
                        <span>
                            <ActionIconBtn
                                id="se-travel-filters-reset"
                                icon={<ResetIcon />}
                                onClick={onReset}
                                disabled={!hasActiveFilters}
                            />
                        </span>
                    </Tooltip>
                }
            />
            <Box className={styles.filtersBody}>
                <Box className={styles.filtersScroll}>
                    <SelectItemWithoutOptions
                        title="Tag filters"
                        onClick={() => setShowTagFilters(!showTagFilters)}
                        endIcon={
                            showTagFilters ? (
                                <ExpandLessIcon sx={{ color: 'var(--text-secondary)' }} />
                            ) : (
                                <ExpandMoreIcon sx={{ color: 'var(--text-secondary)' }} />
                            )
                        }
                        showValue={false}
                    />
                    <Collapse in={showTagFilters}>
                        <TagFilter
                            selectedTags={filters.tags}
                            onChangeTags={(tags) => setFilter('tags', tags)}
                            selectedYear={filters.year}
                            selectedActivity={filters.activity}
                        />
                        <Box className={styles.tagMatchBox}>
                            <ToggleButtonGroup
                                fullWidth
                                size="small"
                                className={styles.tagMatchToggleGroup}
                                exclusive
                                value={filters.tagMatchMode}
                                onChange={(event, value) => {
                                    if (value) {
                                        setFilter('tagMatchMode', value);
                                    }
                                }}
                            >
                                <ToggleButton value={TAG_MATCH_MODES.OR}>Matches any tag</ToggleButton>
                                <ToggleButton value={TAG_MATCH_MODES.AND}>Contains all tags</ToggleButton>
                            </ToggleButtonGroup>
                        </Box>
                    </Collapse>
                    <ThickDivider mt={0} />
                    <SelectItemWithoutOptions
                        title="Advanced filters"
                        onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                        endIcon={
                            showAdvancedFilters ? (
                                <ExpandLessIcon sx={{ color: 'var(--text-secondary)' }} />
                            ) : (
                                <ExpandMoreIcon sx={{ color: 'var(--text-secondary)' }} />
                            )
                        }
                        showValue={false}
                    />
                    <Collapse in={showAdvancedFilters}>
                        {rangeFilterGroups.map((group, i) => (
                            <React.Fragment key={i}>
                                {i > 0 && <Divider className={styles.filterSubDivider} />}
                                {group.map(rangeSlider)}
                            </React.Fragment>
                        ))}
                    </Collapse>
                </Box>
            </Box>
        </SecondaryMenuDrawer>
    );
}

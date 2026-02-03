import headerStyles from '../trackfavmenu.module.css';
import {
    AppBar,
    Box,
    CircularProgress,
    Collapse,
    IconButton,
    Slider,
    SvgIcon,
    ToggleButton,
    ToggleButtonGroup,
    Toolbar,
    Typography,
} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import { ReactComponent as SortDateIcon } from '../../assets/icons/ic_action_sort_by_date.svg';
import { ReactComponent as ActivityAllIcon } from '../../assets/icons/ic_action_activity.svg';
import debounce from 'lodash-es/debounce';
import { HEADER_SIZE, MENU_INFO_CLOSE_SIZE } from '../../manager/GlobalManager';
import AppContext from '../../context/AppContext';
import activities from '../../resources/activities.json';
import {
    DEFAULT_TAG_ICON_COLOR,
    DEFAULT_TAG_ICON_SIZE,
    getIcon,
    getSvgIcon,
} from '../../infoblock/components/wpt/WptTagsProvider';
import styles from './travel.module.css';
import CustomSelect from './CustomSelect';
import { useTranslation } from 'react-i18next';
import EmptyTravel from '../errors/EmptyTravel';
import EmptyLogin from '../../login/EmptyLogin';
import TravelRoutesResult from './TravelRoutesResult';
import { ReactComponent as LongToShortIcon } from '../../assets/icons/ic_action_sort_long_to_short.svg';
import { ReactComponent as ShortToLongIcon } from '../../assets/icons/ic_action_sort_short_to_long.svg';
import capitalize from 'lodash-es/capitalize';
import PrimaryBtn from '../../frame/components/btns/PrimaryBtn';
import SelectItemWithoutOptions from '../../frame/components/items/SelectItemWithoutOptions';
import LoginContext from '../../context/LoginContext';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import gStyles from '../gstylesmenu.module.css';
import TagFilter from './TagFilter';
import {
    convertMeters,
    convertSpeedMS,
    getLargeLengthUnit,
    getSpeedUnit,
    LARGE_UNIT,
} from '../settings/units/UnitsConverter';
import { apiGet } from '../../util/HttpApi';
import ThickDivider from '../../frame/components/dividers/ThickDivider';

export const ALL_YEARS = 'all';
export const ACTIVITY_ALL = 'all';
export const TAG_MATCH_MODES = {
    OR: 'OR',
    AND: 'AND',
};

export default function TravelMenu() {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);
    const { t } = useTranslation();

    const DEFAULT_ACTIVITY = ACTIVITY_ALL;
    const DEFAULT_YEAR = new Date().getFullYear();
    const MIN_YEAR = 2005;

    const [, height] = useWindowSize();

    const [selectedActivityType, setSelectedActivityType] = useState(DEFAULT_ACTIVITY);
    const [selectedYear, setSelectedYear] = useState(DEFAULT_YEAR);
    const [updatedActivities, setUpdatedActivities] = useState([]);
    const [travelResult, setTravelResult] = useState(null);
    const [loadingResult, setLoadingResult] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]);
    const [tagMatchMode, setTagMatchMode] = useState(TAG_MATCH_MODES.OR);
    const [sortByDistance, setSortByDistance] = useState(null); // 'asc' | 'desc' | null

    const DEFAULT_MAX_DISTANCE = 500000; // 500 km in meters
    const DEFAULT_MAX_SPEED = 100; // 100 km/h

    const [minDistance, setMinDistance] = useState(0);
    const [maxDistance, setMaxDistance] = useState(DEFAULT_MAX_DISTANCE);
    const [minSpeed, setMinSpeed] = useState(0);
    const [maxSpeed, setMaxSpeed] = useState(DEFAULT_MAX_SPEED);

    const [distanceRange, setDistanceRange] = useState([0, DEFAULT_MAX_DISTANCE]);
    const [speedRange, setSpeedRange] = useState([0, DEFAULT_MAX_SPEED]);

    const [distanceSliderTouched, setDistanceSliderTouched] = useState(false);
    const [speedSliderTouched, setSpeedSliderTouched] = useState(false);
    const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
    const [showTagFilters, setShowTagFilters] = useState(true);

    useEffect(() => {
        const res = ctx.searchTravelRoutes?.res;
        if (res !== undefined) {
            setTravelResult(res ?? null);
            setLoadingResult(false);
        }
    }, [ctx.searchTravelRoutes?.res]);

    useEffect(() => {
        ctx.setTravelFilter({
            activity: selectedActivityType,
            year: selectedYear,
            tags: selectedTags,
            tagMatchMode,
        });
    }, [selectedActivityType, selectedYear, selectedTags, tagMatchMode]);

    useEffect(() => {
        if (ctx.travelFilter) {
            setSelectedActivityType(ctx.travelFilter.activity);
            setSelectedYear(ctx.travelFilter.year);
            setSelectedTags(ctx.travelFilter.tags || []);
            setTagMatchMode(ctx.travelFilter.tagMatchMode || TAG_MATCH_MODES.OR);
        }
    }, []);

    const debouncedFetchRanges = useRef(
        debounce(async ({ bounds, year, activity, distTouched, speedTouched }) => {
            const minLat = bounds.getSouth();
            const maxLat = bounds.getNorth();
            const minLon = bounds.getWest();
            const maxLon = bounds.getEast();

            const params = {
                minLat,
                maxLat,
                minLon,
                maxLon,
            };

            if (year && year !== ALL_YEARS) {
                params.year = year;
            }
            if (activity && activity !== ACTIVITY_ALL) {
                params.activity = activity;
            }

            try {
                const response = await apiGet(`${process.env.REACT_APP_OSM_GPX_URL}/osmgpx/ranges`, {
                    apiCache: true,
                    params,
                });
                if (response?.data) {
                    const data = response.data;
                    const newMinDist = data.minDist || 0;
                    const newMaxDist = data.maxDist || DEFAULT_MAX_DISTANCE;
                    const newMinSpeed = data.minSpeed || 0;
                    const newMaxSpeed = data.maxSpeed || DEFAULT_MAX_SPEED;

                    setMinDistance(newMinDist);
                    setMaxDistance(newMaxDist);
                    setMinSpeed(newMinSpeed);
                    setMaxSpeed(newMaxSpeed);

                    setDistanceRange((prev) => {
                        if (!distTouched) {
                            return [newMinDist, newMaxDist];
                        }
                        // Clamp user's selection to new boundaries
                        return [
                            Math.max(newMinDist, Math.min(prev[0], newMaxDist)),
                            Math.max(newMinDist, Math.min(prev[1], newMaxDist)),
                        ];
                    });

                    setSpeedRange((prev) => {
                        if (!speedTouched) {
                            return [newMinSpeed, newMaxSpeed];
                        }
                        // Clamp user's selection to new boundaries
                        return [
                            Math.max(newMinSpeed, Math.min(prev[0], newMaxSpeed)),
                            Math.max(newMinSpeed, Math.min(prev[1], newMaxSpeed)),
                        ];
                    });
                }
            } catch (error) {
                console.error('Error fetching ranges:', error);
            }
        }, 500)
    ).current;

    useEffect(() => {
        if (!ctx.visibleBounds) {
            return;
        }

        debouncedFetchRanges({
            bounds: ctx.visibleBounds,
            year: selectedYear,
            activity: selectedActivityType,
            distTouched: distanceSliderTouched,
            speedTouched: speedSliderTouched,
        });
    }, [ctx.visibleBounds, selectedYear, selectedActivityType]);

    const years = useMemo(() => {
        const currentYear = new Date().getFullYear();
        const items = [];
        for (let year = currentYear; year >= MIN_YEAR; year--) {
            items.push({ id: year, label: `${year}` });
        }
        return [{ id: ALL_YEARS, label: capitalize(ALL_YEARS) }, ...items];
    }, []);

    // Create activities array
    const activitiesArr = useMemo(() => {
        if (!ctx.openTravel) return [];

        return activities?.groups.reduce((act, group) => {
            if (act.length === 0) {
                act.push({
                    id: ACTIVITY_ALL,
                    label: 'All activities',
                    type: 'group',
                    icon: <ActivityAllIcon />,
                });
                act.push({
                    id: 'nospeed',
                    label: 'Unidentified tracks',
                    type: 'nospeed',
                });
            }
            act.push({
                id: group.id,
                label: group.label,
                type: 'group',
                icon: null,
            });
            group?.activities.forEach((activity) => {
                act.push({
                    id: activity.id,
                    label: activity.label,
                    type: 'activity',
                    iconName: activity?.icon_name,
                });
            });
            return act;
        }, []);
    }, [activities, ctx.openTravel]);

    // Fetch icons for activities
    useEffect(() => {
        async function getActivityIcon(activityIconName) {
            if (!activityIconName || activityIconName === 'ic_sample') {
                return null;
            }
            const svgData = await getSvgIcon({ icon: activityIconName, ctx });
            if (!svgData) {
                return null;
            }
            return getIcon(svgData, DEFAULT_TAG_ICON_SIZE, DEFAULT_TAG_ICON_COLOR);
        }

        const fetchIcons = async () => {
            const updatedActivities = await Promise.all(
                activitiesArr.map(async (activity) => {
                    if (!activity.iconName) {
                        return activity;
                    }
                    const icon = await getActivityIcon(activity.iconName);
                    return { ...activity, icon };
                })
            );
            setUpdatedActivities(updatedActivities);
        };

        if (activitiesArr && activitiesArr.length > 0) {
            fetchIcons().then();
        }
    }, [activitiesArr]);

    function close() {
        ctx.setInfoBlockWidth(`${MENU_INFO_CLOSE_SIZE}px`);
        ctx.setCurrentObjectType(null);
        ctx.setSearchTravelRoutes({
            clear: true,
        });
        setDefaultState();
    }

    function setDefaultState() {
        setTravelResult(null);
        setSelectedActivityType(DEFAULT_ACTIVITY);
        setSelectedYear(DEFAULT_YEAR);
        setSelectedTags([]);
        setTagMatchMode(TAG_MATCH_MODES.OR);
        ctx.setOpenTravel(false);
    }

    function handleActivitySelect(activityId) {
        setSelectedActivityType(activityId);
    }

    function handleYearSelect(year) {
        setSelectedYear(year);
    }

    async function showRoutes() {
        setLoadingResult(true);
        setTravelResult(null);

        ctx.setSearchTravelRoutes({
            activity: selectedActivityType,
            year: selectedYear,
            tags: selectedTags,
            tagMatchMode,
            distanceRange: distanceSliderTouched ? distanceRange : undefined,
            speedRange: speedSliderTouched ? speedRange : undefined,
        });
    }

    function resetSearch() {
        setTravelResult(null);
        setSelectedActivityType(DEFAULT_ACTIVITY);
        setSelectedYear(DEFAULT_YEAR);
        setSelectedTags([]);
        setTagMatchMode(TAG_MATCH_MODES.OR);
        setSortByDistance(null);
        setDistanceRange([minDistance, maxDistance]);
        setSpeedRange([minSpeed, maxSpeed]);
        setDistanceSliderTouched(false);
        setSpeedSliderTouched(false);
    }

    const sortedRoutes = useMemo(() => {
        const features = travelResult?.features;
        if (!features?.length) {
            return [];
        }
        if (!sortByDistance) {
            return features;
        }
        const hasDistance = features.some((r) => Number.isFinite(r.properties?.dist));
        if (!hasDistance) {
            return features;
        }
        const copy = [...features];
        copy.sort((a, b) => {
            const da = Number.isFinite(a.properties?.dist) ? a.properties.dist : Infinity;
            const db = Number.isFinite(b.properties?.dist) ? b.properties.dist : Infinity;
            return sortByDistance === 'asc' ? da - db : db - da;
        });
        return copy;
    }, [travelResult, sortByDistance]);

    return (
        <Box sx={{ height: `${height - HEADER_SIZE}px` }} className={gStyles.scrollMainBlock}>
            {ltx.isLoggedIn() ? (
                <>
                    <AppBar position="static" className={headerStyles.appbar}>
                        <Toolbar className={headerStyles.toolbar}>
                            <IconButton variant="contained" type="button" className={styles.closeIcon} onClick={close}>
                                <CloseIcon />
                            </IconButton>
                            <Typography id="se-travel-menu-name" component="div" className={headerStyles.title}>
                                Travel
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
                        <Box>
                            {updatedActivities?.length > 0 && (
                                <CustomSelect
                                    name="Activity"
                                    value={selectedActivityType}
                                    onChange={(value) => setSelectedActivityType(value)}
                                    options={updatedActivities}
                                    renderLabel={(option) => option?.label}
                                    renderIcon={(option) => option?.icon}
                                    handleSelect={(id) => handleActivitySelect(id)}
                                />
                            )}
                            <CustomSelect
                                name="Year"
                                value={selectedYear}
                                onChange={(value) => setSelectedYear(value)}
                                options={years}
                                renderLabel={(option) => option?.label}
                                handleSelect={(year) => handleYearSelect(year)}
                                menuWidth={'auto'}
                                hasIcons={false}
                                defaultIcon={SortDateIcon}
                                my={'0px'}
                                marginLeft={'250px'}
                            />
                            <ThickDivider mt={16} />
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
                                    selectedTags={selectedTags}
                                    onChangeTags={setSelectedTags}
                                    selectedYear={selectedYear}
                                    selectedActivity={selectedActivityType}
                                />
                                <Box sx={{ mx: 2, mt: 2, mb: 2 }}>
                                    <ToggleButtonGroup
                                        fullWidth
                                        size="small"
                                        className={styles.tagMatchToggleGroup}
                                        exclusive
                                        value={tagMatchMode}
                                        onChange={(event, value) => {
                                            if (value) {
                                                setTagMatchMode(value);
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
                                <Box className={styles.sliderContainer}>
                                    <div className={styles.sliderHeader}>
                                        <Typography className={styles.sliderTitle}>Distance</Typography>
                                        <Typography className={styles.sliderValue}>
                                            {convertMeters(distanceRange[0], ctx.unitsSettings.len, LARGE_UNIT).toFixed(
                                                0
                                            )}{' '}
                                            -{' '}
                                            {convertMeters(distanceRange[1], ctx.unitsSettings.len, LARGE_UNIT).toFixed(
                                                0
                                            )}{' '}
                                            {t(getLargeLengthUnit(ctx))}
                                        </Typography>
                                    </div>
                                    <Slider
                                        value={distanceRange}
                                        onChange={(e, newValue) => {
                                            setDistanceRange(newValue);
                                            setDistanceSliderTouched(
                                                newValue[0] !== minDistance || newValue[1] !== maxDistance
                                            );
                                        }}
                                        min={minDistance}
                                        max={maxDistance}
                                        step={1000}
                                        valueLabelDisplay="off"
                                        sx={{
                                            '& .MuiSlider-thumb': {
                                                opacity: distanceSliderTouched ? 1 : 0.5,
                                            },
                                            '& .MuiSlider-track': {
                                                opacity: distanceSliderTouched ? 1 : 0.5,
                                            },
                                        }}
                                    />
                                    <div className={styles.sliderBounds}>
                                        <Typography className={styles.sliderBoundValue}>
                                            {convertMeters(minDistance, ctx.unitsSettings.len, LARGE_UNIT).toFixed(0)}
                                        </Typography>
                                        <Typography className={styles.sliderBoundValue}>
                                            {convertMeters(maxDistance, ctx.unitsSettings.len, LARGE_UNIT).toFixed(0)}
                                        </Typography>
                                    </div>
                                </Box>
                                <Box className={styles.sliderContainer}>
                                    <div className={styles.sliderHeader}>
                                        <Typography className={styles.sliderTitle}>Speed</Typography>
                                        <Typography className={styles.sliderValue}>
                                            {convertSpeedMS(speedRange[0] / 3.6, ctx.unitsSettings.speed).toFixed(0)} -{' '}
                                            {convertSpeedMS(speedRange[1] / 3.6, ctx.unitsSettings.speed).toFixed(0)}{' '}
                                            {t(getSpeedUnit(ctx))}
                                        </Typography>
                                    </div>
                                    <Slider
                                        value={speedRange}
                                        onChange={(e, newValue) => {
                                            setSpeedRange(newValue);
                                            setSpeedSliderTouched(newValue[0] !== minSpeed || newValue[1] !== maxSpeed);
                                        }}
                                        min={minSpeed}
                                        max={maxSpeed}
                                        step={1}
                                        valueLabelDisplay="off"
                                        sx={{
                                            '& .MuiSlider-thumb': {
                                                opacity: !speedSliderTouched ? 0.5 : 1,
                                            },
                                            '& .MuiSlider-track': {
                                                opacity: !speedSliderTouched ? 0.5 : 1,
                                            },
                                        }}
                                    />
                                    <div className={styles.sliderBounds}>
                                        <Typography className={styles.sliderBoundValue}>
                                            {convertSpeedMS(minSpeed / 3.6, ctx.unitsSettings.speed).toFixed(0)}
                                        </Typography>
                                        <Typography className={styles.sliderBoundValue}>
                                            {convertSpeedMS(maxSpeed / 3.6, ctx.unitsSettings.speed).toFixed(0)}
                                        </Typography>
                                    </div>
                                </Box>
                            </Collapse>
                            <ThickDivider mt={0} />
                            <Box sx={{ m: 2 }}>
                                <PrimaryBtn
                                    action={showRoutes}
                                    id={'se-submit-show-travel'}
                                    text={t('shared_string_show')}
                                />
                            </Box>
                            {loadingResult && <CircularProgress sx={{ mt: 10, ml: 20 }} size={36} />}
                        </Box>
                        <Box sx={{ flex: 1, overflow: 'hidden' }}>
                            {travelResult &&
                                (travelResult?.features?.length > 0 ? (
                                    <>
                                        <Box
                                            sx={{
                                                mt: 2,
                                                mx: 2,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <Typography variant="body2">
                                                Results: {travelResult?.features?.length || 0}
                                            </Typography>
                                            {travelResult.features.some((r) => Number.isFinite(r.properties?.dist)) && (
                                                <ToggleButtonGroup
                                                    size="small"
                                                    exclusive
                                                    value={sortByDistance}
                                                    className={styles.distanceSortToggleGroup}
                                                    onChange={(event, value) => {
                                                        if (!value) {
                                                            return;
                                                        }
                                                        setSortByDistance(value);
                                                    }}
                                                >
                                                    <ToggleButton value="asc">
                                                        <SvgIcon
                                                            className={styles.distanceSortIcon}
                                                            component={ShortToLongIcon}
                                                            inheritViewBox
                                                        />
                                                    </ToggleButton>
                                                    <ToggleButton value="desc">
                                                        <SvgIcon
                                                            className={styles.distanceSortIcon}
                                                            component={LongToShortIcon}
                                                            inheritViewBox
                                                        />
                                                    </ToggleButton>
                                                </ToggleButtonGroup>
                                            )}
                                        </Box>
                                        <TravelRoutesResult routes={sortedRoutes} />
                                    </>
                                ) : (
                                    <EmptyTravel reset={resetSearch} />
                                ))}
                        </Box>
                    </Box>
                </>
            ) : (
                <EmptyLogin />
            )}
        </Box>
    );
}

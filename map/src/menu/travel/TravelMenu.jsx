import {
    Box,
    CircularProgress,
    IconButton,
    SvgIcon,
    ToggleButton,
    ToggleButtonGroup,
    Tooltip,
    Typography,
} from '@mui/material';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { ReactComponent as ResetIcon } from '../../assets/icons/ic_action_reset_to_default_dark.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/ic_action_settings_outlined.svg';
import { ReactComponent as SortDateIcon } from '../../assets/icons/ic_action_sort_by_date.svg';
import { ReactComponent as ActivityAllIcon } from '../../assets/icons/ic_action_activity.svg';
import debounce from 'lodash-es/debounce';
import { HEADER_SIZE, MAIN_URL_WITH_SLASH, MENU_INFO_CLOSE_SIZE, TRAVEL_URL } from '../../manager/GlobalManager';
import AppContext from '../../context/AppContext';
import activities from '../../resources/activities.json';
import { getActivityIcon } from '../../infoblock/components/common/ActivityType';
import styles from './travel.module.css';
import CustomSelect from './CustomSelect';
import ActivitySelect from './ActivitySelect';
import { useTranslation } from 'react-i18next';
import EmptyTravel from '../errors/EmptyTravel';
import EmptyLogin from '../../login/EmptyLogin';
import TravelRoutesResult from './TravelRoutesResult';
import TravelFilters from './TravelFilters';
import HeaderNoUnderline from '../../frame/components/header/HeaderNoUnderline';
import headerStyles from '../trackfavmenu.module.css';
import { ReactComponent as LongToShortIcon } from '../../assets/icons/ic_action_sort_long_to_short.svg';
import { ReactComponent as ShortToLongIcon } from '../../assets/icons/ic_action_sort_short_to_long.svg';
import capitalize from 'lodash-es/capitalize';
import PrimaryBtn from '../../frame/components/btns/PrimaryBtn';
import LoginContext from '../../context/LoginContext';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import gStyles from '../gstylesmenu.module.css';
import { apiGet } from '../../util/HttpApi';
import { createUrlParams } from '../../util/Utils';
import ThickDivider from '../../frame/components/dividers/ThickDivider';

export const ALL_YEARS = 'all';
export const ACTIVITY_ALL = 'all';
export const TAG_MATCH_MODES = {
    OR: 'OR',
    AND: 'AND',
};

const RANGE_FILTER_KEYS = ['distance', 'speed', 'maxSpeed', 'maxDistBetweenPoints', 'timeMinutes', 'waypoints'];

export default function TravelMenu() {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { t } = useTranslation();

    const DEFAULT_ACTIVITY = ACTIVITY_ALL;
    const DEFAULT_YEAR = new Date().getFullYear();
    const MIN_YEAR = 2005;

    const [, height] = useWindowSize();

    const [updatedActivities, setUpdatedActivities] = useState([]);
    const [travelResult, setTravelResult] = useState(null);
    const [loadingResult, setLoadingResult] = useState(false);
    const [sortByDistance, setSortByDistance] = useState(null); // 'asc' | 'desc' | null
    const [activityCounts, setActivityCounts] = useState(null); // [{ id, count }]
    const [openFilters, setOpenFilters] = useState(false); // secondary filters drawer

    const DEFAULT_MAX_DISTANCE = 500000; // 500 km in meters
    const DEFAULT_MAX_SPEED = 100; // 100 km/h
    const MAX_SPEED_DEFAULT = 300; // km/h, default upper bound for the max-speed filter
    const MAX_DIST_BETWEEN_POINTS_DEFAULT = 1000; // 1000 m
    const TIME_MINUTES_DEFAULT = 1440; // minutes (24h)
    const WAYPOINTS_DEFAULT = 10000;
    const DEFAULT_FILTERS = {
        activity: DEFAULT_ACTIVITY,
        year: DEFAULT_YEAR,
        tags: [],
        tagMatchMode: TAG_MATCH_MODES.OR,
        distance: null,
        speed: null,
        maxSpeed: null,
        maxDistBetweenPoints: null,
        timeMinutes: null,
        waypoints: null,
    };
    // Initial filters come from the URL query
    const [filters, setFilters] = useState(() => ({
        ...DEFAULT_FILTERS,
        ...paramsToFilters(new URLSearchParams(globalThis.location.search)),
    }));
    const setFilter = (key, value) => setFilters((prev) => ({ ...prev, [key]: value }));

    // Slider bounds (min/max) fetched from /ranges
    const [bounds, setBounds] = useState({
        distance: [0, DEFAULT_MAX_DISTANCE],
        speed: [0, DEFAULT_MAX_SPEED],
        maxSpeed: [0, MAX_SPEED_DEFAULT],
        maxDistBetweenPoints: [0, MAX_DIST_BETWEEN_POINTS_DEFAULT],
        timeMinutes: [0, TIME_MINUTES_DEFAULT],
        waypoints: [0, WAYPOINTS_DEFAULT],
    });

    useEffect(() => {
        const res = ctx.searchTravelRoutes?.res;
        if (res !== undefined) {
            setTravelResult(res ?? null);
            setLoadingResult(false);
        }
    }, [ctx.searchTravelRoutes?.res]);

    function navigateToFilters(f) {
        const search = createUrlParams(filtersToParams(f));
        if (search === location.search) {
            return;
        }
        navigate(
            { pathname: location.pathname, search, hash: globalThis.location.hash || '' },
            { replace: true, preventScrollReset: true }
        );
    }

    // On load with filter params in the URL, open Travel and run the search automatically.
    useEffect(() => {
        if (!location.pathname.startsWith(MAIN_URL_WITH_SLASH + TRAVEL_URL)) {
            return;
        }
        if (Object.keys(paramsToFilters(searchParams)).length > 0) {
            ctx.setOpenTravel(true);
            runSearch(filters);
        }
    }, []);

    const debouncedFetchRanges = useRef(
        debounce(async ({ mapBounds, year, activity }) => {
            const params = {
                minLat: mapBounds.getSouth(),
                maxLat: mapBounds.getNorth(),
                minLon: mapBounds.getWest(),
                maxLon: mapBounds.getEast(),
            };

            if (year && year !== ALL_YEARS) {
                params.year = year;
            }

            const paramsActivities = { ...params };

            try {
                const activitiesResponse = await apiGet(`${process.env.REACT_APP_OSM_GPX_URL}/osmgpx/activities`, {
                    apiCache: true,
                    params: paramsActivities,
                });

                if (activity && activity !== ACTIVITY_ALL) {
                    params.activityArr = activity;
                }

                const rangesResponse = await apiGet(`${process.env.REACT_APP_OSM_GPX_URL}/osmgpx/ranges`, {
                    apiCache: true,
                    params,
                });

                setActivityCounts(activitiesResponse?.data || null);

                if (rangesResponse?.data) {
                    const data = rangesResponse.data;
                    const newBounds = {
                        distance: [data.minDist || 0, data.maxDist || DEFAULT_MAX_DISTANCE],
                        speed: [data.minSpeed || 0, data.maxSpeed || DEFAULT_MAX_SPEED],
                        maxSpeed: [data.maxSpeedMin || 0, data.maxSpeedMax || MAX_SPEED_DEFAULT],
                        maxDistBetweenPoints: [
                            data.maxDistBetweenPointsMin || 0,
                            data.maxDistBetweenPointsMax || MAX_DIST_BETWEEN_POINTS_DEFAULT,
                        ],
                        timeMinutes: [data.timeMinutesMin || 0, data.timeMinutesMax || TIME_MINUTES_DEFAULT],
                        waypoints: [data.waypointsMin || 0, data.waypointsMax || WAYPOINTS_DEFAULT],
                    };
                    setBounds(newBounds);

                    const clamp = (range, [lo, hi]) => [
                        Math.max(lo, Math.min(range[0], hi)),
                        Math.max(lo, Math.min(range[1], hi)),
                    ];
                    setFilters((prev) => {
                        const clamped = { ...prev };
                        RANGE_FILTER_KEYS.forEach((key) => {
                            clamped[key] = prev[key] ? clamp(prev[key], newBounds[key]) : null;
                        });
                        return clamped;
                    });
                }
            } catch (error) {
                console.error('Error fetching ranges/activities:', error);
                setActivityCounts(null);
            }
        }, 500)
    ).current;

    useEffect(() => {
        if (!ctx.visibleBounds || !location.pathname.startsWith(MAIN_URL_WITH_SLASH + TRAVEL_URL)) {
            return;
        }

        debouncedFetchRanges({
            mapBounds: ctx.visibleBounds,
            year: filters.year,
            activity: filters.activity,
        });
    }, [ctx.visibleBounds, filters.year, filters.activity]);

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
        if (!ctx.openTravel && !location.pathname.startsWith(MAIN_URL_WITH_SLASH + TRAVEL_URL)) return [];

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
        const fetchIcons = async () => {
            const updatedActivities = await Promise.all(
                activitiesArr.map(async (activity) => {
                    if (!activity.iconName) {
                        return activity;
                    }
                    const icon = await getActivityIcon(activity.iconName, ctx);
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
        setFilters(DEFAULT_FILTERS);
        ctx.setOpenTravel(false);
    }

    function handleYearSelect(year) {
        setFilter('year', year);
    }

    function runSearch(f) {
        setLoadingResult(true);
        setTravelResult(null);

        const body = { activity: f.activity, year: f.year, tags: f.tags, tagMatchMode: f.tagMatchMode };
        RANGE_FILTER_KEYS.forEach((key) => {
            body[`${key}Range`] = f[key] ?? undefined;
        });
        ctx.setSearchTravelRoutes(body);
    }

    function showRoutes() {
        navigateToFilters(filters);
        runSearch(filters);
    }

    function resetSearch() {
        setTravelResult(null);
        setSortByDistance(null);
        setFilters(DEFAULT_FILTERS);
        ctx.setTravelShowStartFinish(false);
    }

    function resetFilters() {
        setFilters((prev) => ({
            ...prev,
            tags: [],
            tagMatchMode: TAG_MATCH_MODES.OR,
            ...Object.fromEntries(RANGE_FILTER_KEYS.map((key) => [key, null])),
        }));
        ctx.setTravelShowStartFinish(false);
    }

    const hasActiveFilters =
        filters.tags.length > 0 || RANGE_FILTER_KEYS.some((key) => filters[key] != null) || ctx.travelShowStartFinish;

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
                    <HeaderNoUnderline
                        title="Travel"
                        onClose={close}
                        titleId="se-travel-menu-name"
                        rightContent={
                            <>
                                <Tooltip title={t('reset_to_default')} arrow placement="bottom-end">
                                    <span>
                                        <IconButton
                                            id="se-travel-reset"
                                            variant="contained"
                                            type="button"
                                            className={headerStyles.appBarIcon}
                                            onClick={resetSearch}
                                        >
                                            <ResetIcon />
                                        </IconButton>
                                    </span>
                                </Tooltip>
                                <Tooltip title={t('shared_string_filters')} arrow placement="bottom-end">
                                    <span>
                                        <IconButton
                                            id="se-travel-filters"
                                            variant="contained"
                                            type="button"
                                            className={headerStyles.appBarIcon}
                                            onClick={() => setOpenFilters((prev) => !prev)}
                                        >
                                            <SettingsIcon />
                                        </IconButton>
                                    </span>
                                </Tooltip>
                            </>
                        }
                    />
                    <Box className={styles.contentColumn}>
                        {updatedActivities?.length > 0 && (
                            <ActivitySelect
                                name="Activity"
                                value={filters.activity}
                                onChange={(value) => setFilter('activity', value)}
                                activities={activities}
                                updatedActivities={updatedActivities}
                                activityCounts={activityCounts}
                                defaultIcon={ActivityAllIcon}
                            />
                        )}
                        <CustomSelect
                            name="Year"
                            value={filters.year}
                            onChange={(value) => setFilter('year', value)}
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
                        <Box className={styles.showButtonBox}>
                            <PrimaryBtn
                                action={showRoutes}
                                id={'se-submit-show-travel'}
                                text={t('shared_string_show')}
                            />
                        </Box>
                        {loadingResult && <CircularProgress className={styles.resultsSpinner} size={36} />}
                        {travelResult &&
                            (travelResult?.features?.length > 0 ? (
                                <>
                                    <Box className={styles.resultsHeader}>
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
                    {openFilters && (
                        <TravelFilters
                            onClose={() => setOpenFilters(false)}
                            onReset={resetFilters}
                            hasActiveFilters={hasActiveFilters}
                            filters={filters}
                            bounds={bounds}
                            setFilter={setFilter}
                        />
                    )}
                </>
            ) : (
                <EmptyLogin />
            )}
        </Box>
    );
}

// Serialize the current filters into URL query params
function filtersToParams(filters) {
    const params = {
        activity: Array.isArray(filters.activity) ? filters.activity.join(',') : filters.activity,
        year: String(filters.year),
    };
    if (filters.tags.length > 0) {
        params.tags = filters.tags.join(',');
        params.tagMatchMode = filters.tagMatchMode;
    }
    RANGE_FILTER_KEYS.forEach((key) => {
        if (filters[key]) {
            params[key] = `${filters[key][0]}-${filters[key][1]}`;
        }
    });
    return params;
}

// Parse filter query params back into a partial filters object (merged over defaults).
function paramsToFilters(searchParams) {
    const parsed = {};
    const activity = searchParams.get('activity');
    if (activity) {
        parsed.activity = activity === ACTIVITY_ALL ? ACTIVITY_ALL : activity.split(',');
    }
    const year = searchParams.get('year');
    if (year) {
        parsed.year = year === ALL_YEARS ? ALL_YEARS : Number(year);
    }
    const tags = searchParams.get('tags');
    if (tags) {
        parsed.tags = tags.split(',');
        parsed.tagMatchMode =
            searchParams.get('tagMatchMode') === TAG_MATCH_MODES.AND ? TAG_MATCH_MODES.AND : TAG_MATCH_MODES.OR;
    }
    RANGE_FILTER_KEYS.forEach((key) => {
        const value = searchParams.get(key);
        if (value) {
            const [min, max] = value.split('-').map(Number);
            if (Number.isFinite(min) && Number.isFinite(max)) {
                parsed[key] = [min, max];
            }
        }
    });
    return parsed;
}

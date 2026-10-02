import {
    Box,
    CircularProgress,
    IconButton,
    Slider,
    SvgIcon,
    ToggleButton,
    ToggleButtonGroup,
    Tooltip,
    Typography,
} from '@mui/material';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as ResetIcon } from '../../assets/icons/ic_action_reset_to_default_dark.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/ic_action_settings_outlined.svg';
import { ReactComponent as AppearanceIcon } from '../../assets/icons/ic_action_appearance.svg';
import { ReactComponent as ActivityAllIcon } from '../../assets/icons/ic_action_activity.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/ic_action_search_dark.svg';
import { ReactComponent as ReviewIcon } from '../../assets/icons/ic_action_edit_outlined.svg';
import debounce from 'lodash-es/debounce';
import isEqual from 'lodash-es/isEqual';
import { HEADER_SIZE, MAIN_URL_WITH_SLASH, MENU_INFO_CLOSE_SIZE, TRAVEL_URL } from '../../manager/GlobalManager';
import AppContext from '../../context/AppContext';
import TravelContext from '../../context/TravelContext';
import activities from '../../resources/activities.json';
import { getActivityIcon } from '../../infoblock/components/common/ActivityType';
import styles from './travel.module.css';
import ActivitySelect from './ActivitySelect';
import { useTranslation } from 'react-i18next';
import EmptyTravel from '../errors/EmptyTravel';
import EmptyLogin from '../../login/EmptyLogin';
import TravelRoutesResult from './TravelRoutesResult';
import TravelFilters from './TravelFilters';
import HeatmapAppearance from './HeatmapAppearance';
import HeaderNoUnderline from '../../frame/components/header/HeaderNoUnderline';
import headerStyles from '../trackfavmenu.module.css';
import { ReactComponent as LongToShortIcon } from '../../assets/icons/ic_action_sort_long_to_short.svg';
import { ReactComponent as ShortToLongIcon } from '../../assets/icons/ic_action_sort_short_to_long.svg';
import LoginContext from '../../context/LoginContext';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import gStyles from '../gstylesmenu.module.css';
import { apiGet } from '../../util/HttpApi';
import { createUrlParams } from '../../util/Utils';
import ThickDivider from '../../frame/components/dividers/ThickDivider';
import DividerWithMargin from '../../frame/components/dividers/DividerWithMargin';
import TextWithLeftIcon from '../../frame/components/other/TextWithLeftIcon';
import ColorBlock from '../../frame/components/other/ColorBlock';
import TextLeftIconBtn from '../../frame/components/other/TextLeftIconBtn';
import GrayBtnWithBlueHover from '../../frame/components/btns/GrayBtnWithBlueHover';
import { convertMeters, getSmallLengthUnit, SMALL_UNIT } from '../settings/units/UnitsConverter';

export const ACTIVITY_ALL = 'all';
export const IGNORED_GROUP = 'ignored';
export const TAG_MATCH_MODES = {
    OR: 'OR',
    AND: 'AND',
};

export const OSM_GPX_ABORT_KEYS = {
    routesList: 'osmgpx-get-routes-list',
    routeInfo: 'osmgpx-get-route-info',
    osmRoute: 'osmgpx-get-osm-route',
    activities: 'osmgpx-activities',
    reviews: 'osmgpx-reviews',
};

export const TRAVEL_REVIEWS_URL = `${process.env.REACT_APP_OSM_GPX_URL}/api/pubtracks`;

// since: ISO time, only the tracks reviewed from then on; all reviewed tracks without it
export function downloadTravelReviews(since = null) {
    const link = document.createElement('a');
    link.href = `${TRAVEL_REVIEWS_URL}/reviews.csv.gz${since ? `?since=${encodeURIComponent(since)}` : ''}`;
    link.click();
}

const OTHER_GROUP = 'other';
// months are counted from 2004-01, the same way the tiles count them
const MONTHS_BASE_YEAR = 2004;
const LAST_MONTH = monthIndex(new Date().toISOString().slice(0, 7));
const MONTH_KEY = /^\d{4}-\d{2}$/;

// 'YYYY-MM' of a month index
export function monthKey(index) {
    return `${MONTHS_BASE_YEAR + Math.floor(index / 12)}-${String((index % 12) + 1).padStart(2, '0')}`;
}

export function monthIndex(key, baseYear = MONTHS_BASE_YEAR) {
    const [year, month] = key.split('-').map(Number);

    return (year - baseYear) * 12 + month - 1;
}

// tracks without a label that the speed puts in a group are stored with the group id, the same way the tiles count them
export function hasSpeedOnlyTracks(group) {
    return group.id !== OTHER_GROUP && group.id !== IGNORED_GROUP;
}

// "All" as the tiles count it: activities plus the groups given by speed
export const ALL_ACTIVITY_IDS = activities.groups.flatMap((g) => [
    ...g.activities.map((a) => a.id),
    ...(hasSpeedOnlyTracks(g) ? [g.id] : []),
]);

const RANGE_FILTER_KEYS = ['distance', 'speed', 'maxSpeed', 'maxDistBetweenPoints', 'timeMinutes', 'waypoints'];
const RANGE_PROPERTIES = {
    distance: 'dist',
    speed: 'speed',
    maxSpeed: 'maxSpeed',
    maxDistBetweenPoints: 'maxDistBetweenPoints',
    timeMinutes: 'timeMinutes',
    waypoints: 'waypoints',
};
// the part of the search the server answers; the ranges and the tags apply to the tracks it returned
const SERVER_QUERY_KEYS = ['activity', 'dateFrom', 'dateTo'];

export function routeMatchesFilters(route, search) {
    const props = route.properties;
    const inRanges = RANGE_FILTER_KEYS.every((key) => {
        const range = search[`${key}Range`];
        const value = props[RANGE_PROPERTIES[key]] ?? 0;

        return !range || (value >= range[0] && value <= range[1]);
    });
    if (!inRanges || !search.tags?.length) {
        return inRanges;
    }
    const tags = props.tags ?? [];

    return search.tagMatchMode === TAG_MATCH_MODES.AND
        ? search.tags.every((tag) => tags.includes(tag))
        : search.tags.some((tag) => tags.includes(tag));
}

export default function TravelMenu() {
    const ctx = useContext(AppContext);
    const ttx = useContext(TravelContext);
    const ltx = useContext(LoginContext);
    const location = useLocation();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const DEFAULT_ACTIVITY = ACTIVITY_ALL;

    const [, height] = useWindowSize();

    const [updatedActivities, setUpdatedActivities] = useState([]);
    const [travelResult, setTravelResult] = useState(null);
    const [loadingResult, setLoadingResult] = useState(false);
    const [sortByDistance, setSortByDistance] = useState(null); // 'asc' | 'desc' | null
    const [activityCounts, setActivityCounts] = useState(null); // [{ id, count }]
    const [openFilters, setOpenFilters] = useState(false); // secondary filters drawer
    const [openAppearance, setOpenAppearance] = useState(false);

    const DEFAULT_MAX_DISTANCE = 500000; // 500 km in meters
    const DEFAULT_MAX_SPEED = 100; // 100 km/h
    const MAX_SPEED_DEFAULT = 300; // km/h, default upper bound for the max-speed filter
    const MAX_DIST_BETWEEN_POINTS_DEFAULT = 1000; // 1000 m
    const TIME_MINUTES_DEFAULT = 1440; // minutes (24h)
    const WAYPOINTS_DEFAULT = 10000;
    const DEFAULT_FILTERS = {
        activity: DEFAULT_ACTIVITY,
        months: null,
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
    const setFilter = (key, value) => {
        const next = { ...filters, [key]: value };
        setFilters(next);
        navigateToFilters(next);
        runSearch(next);
    };
    const previewFilter = (key, value) => setFilters((prev) => ({ ...prev, [key]: value }));

    const DEFAULT_BOUNDS = {
        distance: [0, DEFAULT_MAX_DISTANCE],
        speed: [0, DEFAULT_MAX_SPEED],
        maxSpeed: [0, MAX_SPEED_DEFAULT],
        maxDistBetweenPoints: [0, MAX_DIST_BETWEEN_POINTS_DEFAULT],
        timeMinutes: [0, TIME_MINUTES_DEFAULT],
        waypoints: [0, WAYPOINTS_DEFAULT],
    };
    // slider bounds: min and max over the tracks around the point
    const bounds = useMemo(() => boundsOf(travelResult?.features, DEFAULT_BOUNDS), [travelResult]);

    useEffect(() => {
        const clamp = (range, [lo, hi]) => [Math.max(lo, Math.min(range[0], hi)), Math.max(lo, Math.min(range[1], hi))];
        setFilters((prev) => {
            const clamped = { ...prev };
            RANGE_FILTER_KEYS.forEach((key) => {
                clamped[key] = prev[key] ? clamp(prev[key], bounds[key]) : null;
            });
            return clamped;
        });
    }, [bounds]);

    useEffect(() => {
        const res = ttx.searchTravelRoutes?.res;
        if (res !== undefined) {
            setTravelResult(res ?? null);
            setLoadingResult(false);
        }
    }, [ttx.searchTravelRoutes?.res]);

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

    useEffect(() => {
        if (ttx.openTravel) {
            runSearch(filters);
        }
    }, [ttx.openTravel]);

    useEffect(() => {
        ttx.setOpenTravelFilters(openFilters);
    }, [openFilters]);

    useEffect(() => {
        if (!ttx.openTravel) {
            setOpenAppearance(false);
        }
    }, [ttx.openTravel]);

    useEffect(() => {
        if (!ttx.openTravelFilters) {
            setOpenFilters(false);
        }
    }, [ttx.openTravelFilters]);

    useEffect(() => {
        const { point, res } = ttx.searchTravelRoutes ?? {};
        if (!point) {
            setOpenFilters(false);
        } else if (res === undefined) {
            setLoadingResult(true);
            setTravelResult(null);
        }
    }, [ttx.searchTravelRoutes?.point]);

    const debouncedFetchActivityCounts = useRef(
        debounce(async ({ mapBounds, months }) => {
            const params = {
                minLat: mapBounds.getSouth(),
                maxLat: mapBounds.getNorth(),
                minLon: mapBounds.getWest(),
                maxLon: mapBounds.getEast(),
            };

            if (months) {
                params.dateFrom = monthKey(months[0]);
                params.dateTo = monthKey(months[1]);
            }

            try {
                const response = await apiGet(`${process.env.REACT_APP_OSM_GPX_URL}/osmgpx/activities`, {
                    apiCache: true,
                    params,
                    abortControllerKey: OSM_GPX_ABORT_KEYS.activities,
                });
                if (response?.aborted) {
                    return;
                }
                setActivityCounts(response?.data || null);
            } catch (error) {
                console.error('Error fetching activities:', error);
                setActivityCounts(null);
            }
        }, 500)
    ).current;

    useEffect(() => {
        if (!ctx.visibleBounds || !location.pathname.startsWith(MAIN_URL_WITH_SLASH + TRAVEL_URL)) {
            return;
        }

        debouncedFetchActivityCounts({ mapBounds: ctx.visibleBounds, months: filters.months });
    }, [ctx.visibleBounds, filters.months]);

    // Create activities array
    const activitiesArr = useMemo(() => {
        if (!ttx.openTravel && !location.pathname.startsWith(MAIN_URL_WITH_SLASH + TRAVEL_URL)) return [];

        return activities?.groups.reduce((act, group) => {
            if (act.length === 0) {
                act.push({
                    id: ACTIVITY_ALL,
                    label: t('web:all_activities'),
                    type: 'group',
                    icon: <ActivityAllIcon />,
                });
                act.push({
                    id: 'nospeed',
                    label: t('web:unidentified_tracks'),
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
    }, [activities, ttx.openTravel]);

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
        ttx.setSearchTravelRoutes({
            clear: true,
        });
        setDefaultState();
    }

    function setDefaultState() {
        setTravelResult(null);
        setFilters(DEFAULT_FILTERS);
        ttx.setOpenTravel(false);
    }

    function runSearch(f) {
        const body = {
            activity: f.activity,
            dateFrom: f.months ? monthKey(f.months[0]) : undefined,
            dateTo: f.months ? monthKey(f.months[1]) : undefined,
            tags: f.tags,
            tagMatchMode: f.tagMatchMode,
        };
        RANGE_FILTER_KEYS.forEach((key) => {
            body[`${key}Range`] = f[key] ?? undefined;
        });
        const prev = ttx.searchTravelRoutes;
        const sameTracks = !!prev?.res && isEqual(serverQuery(prev), serverQuery(body));
        if (!sameTracks) {
            setLoadingResult(true);
            setTravelResult(null);
        }
        ttx.setSearchTravelRoutes({ ...body, point: prev?.point, ...(sameTracks ? { res: prev.res } : {}) });
    }

    function clearSearchPoint() {
        ttx.setSearchTravelRoutes((prev) => ({ ...prev, point: null, res: null }));
    }

    function searchPointTitle() {
        const { point, res } = ttx.searchTravelRoutes;
        const radius = `${Math.round(convertMeters(point.radius, ctx.unitsSettings.len, SMALL_UNIT))} ${t(getSmallLengthUnit(ctx))}`;
        if (res === undefined) {
            return t('web:travel_tracks_searching', { radius });
        }
        if (res === null) {
            return t('web:travel_tracks_error');
        }
        if (res.tooMany) {
            return t('web:travel_tracks_too_many', { count: res.maxRoutes, radius });
        }

        return t('web:travel_tracks_nearby', { count: visibleRoutes.length, radius });
    }

    function resetSearch() {
        setSortByDistance(null);
        setFilters(DEFAULT_FILTERS);
        ttx.setTravelShowStartFinish(false);
        navigateToFilters(DEFAULT_FILTERS);
        runSearch(DEFAULT_FILTERS);
    }

    function resetFilters() {
        const next = {
            ...filters,
            tags: [],
            tagMatchMode: TAG_MATCH_MODES.OR,
            ...Object.fromEntries(RANGE_FILTER_KEYS.map((key) => [key, null])),
        };
        setFilters(next);
        ttx.setTravelShowStartFinish(false);
        navigateToFilters(next);
        runSearch(next);
    }

    const uploadMonths = filters.months ?? [0, LAST_MONTH];

    const hasActiveFilters =
        filters.tags.length > 0 || RANGE_FILTER_KEYS.some((key) => filters[key] != null) || ttx.travelShowStartFinish;

    const visibleRoutes = useMemo(
        () => travelResult?.features?.filter((route) => routeMatchesFilters(route, ttx.searchTravelRoutes)) ?? [],
        [travelResult, ttx.searchTravelRoutes]
    );

    const sortedRoutes = useMemo(() => {
        const features = visibleRoutes;
        if (!features.length) {
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
    }, [visibleRoutes, sortByDistance]);

    return (
        <Box sx={{ height: `${height - HEADER_SIZE}px` }} className={gStyles.scrollMainBlock}>
            {ltx.isLoggedIn() ? (
                <>
                    <HeaderNoUnderline
                        title={t('web:shared_string_travel')}
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
                                <Tooltip title={t('shared_string_appearance')} arrow placement="bottom-end">
                                    <span>
                                        <IconButton
                                            id="se-travel-appearance"
                                            variant="contained"
                                            type="button"
                                            className={headerStyles.appBarIcon}
                                            onClick={() => {
                                                setOpenFilters(false);
                                                setOpenAppearance((prev) => !prev);
                                            }}
                                        >
                                            <AppearanceIcon />
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
                                            disabled={!ttx.searchTravelRoutes?.point}
                                            onClick={() => {
                                                setOpenAppearance(false);
                                                setOpenFilters((prev) => !prev);
                                            }}
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
                                name={t('web:shared_string_activity')}
                                value={filters.activity}
                                onChange={(value) => setFilter('activity', value)}
                                activities={activities}
                                updatedActivities={updatedActivities}
                                activityCounts={activityCounts}
                                defaultIcon={ActivityAllIcon}
                            />
                        )}
                        <Box className={`${styles.sliderContainer} ${styles.dateSliderContainer}`}>
                            <div className={styles.sliderHeader}>
                                <Typography className={styles.sliderTitle}>{t('shared_string_date')}</Typography>
                                <Typography className={styles.sliderValue}>
                                    {monthKey(uploadMonths[0])} - {monthKey(uploadMonths[1])}
                                </Typography>
                            </div>
                            <Slider
                                value={uploadMonths}
                                min={0}
                                max={LAST_MONTH}
                                step={1}
                                onChange={(e, value) => previewFilter('months', toMonthsFilter(value))}
                                onChangeCommitted={(e, value) => setFilter('months', toMonthsFilter(value))}
                                valueLabelDisplay="off"
                            />
                        </Box>
                        {ctx.develFeatures && ttx.travelHeatmapMatch && (
                            <Typography className={styles.matchCount}>
                                {t('web:travel_tracks_match', {
                                    matched: ttx.travelHeatmapMatch.matched.toLocaleString(),
                                    total: ttx.travelHeatmapMatch.total.toLocaleString(),
                                })}
                            </Typography>
                        )}
                        <ThickDivider mt={16} />
                        {ttx.searchTravelRoutes?.point ? (
                            <>
                                <TextLeftIconBtn
                                    id="se-travel-remove-point"
                                    icon={<SearchIcon />}
                                    text={searchPointTitle()}
                                    desc={
                                        ttx.searchTravelRoutes.res?.tooMany
                                            ? t('web:travel_tracks_too_many_desc')
                                            : t('web:travel_search_point_desc')
                                    }
                                    btnText={t('web:travel_remove_point')}
                                    onClick={clearSearchPoint}
                                />
                                <ThickDivider mt={0} mb={0} />
                            </>
                        ) : (
                            <>
                                <TextWithLeftIcon icon={<SearchIcon />} text={t('web:travel_click_map_hint')} />
                                <DividerWithMargin dashed={true} />
                                <TextWithLeftIcon icon={<ReviewIcon />} text={t('web:travel_review_hint')} />
                                {ltx.isAdmin() && (
                                    <GrayBtnWithBlueHover
                                        id="se-travel-reviews-download"
                                        action={() => downloadTravelReviews()}
                                        text={t('web:travel_reviews_download')}
                                        additionalStyle={{ ml: '48px', mr: 2, mb: 2, maxWidth: '280px' }}
                                    />
                                )}
                                <ThickDivider mt={0} mb={0} />
                                <ColorBlock color={'#f0f0f0'} />
                            </>
                        )}
                        {loadingResult && <CircularProgress className={styles.resultsSpinner} size={36} />}
                        {travelResult &&
                            !travelResult.tooMany &&
                            (visibleRoutes.length > 0 ? (
                                <>
                                    {visibleRoutes.some((r) => Number.isFinite(r.properties?.dist)) && (
                                        <Box className={styles.resultsHeader}>
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
                                        </Box>
                                    )}
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
                            previewFilter={previewFilter}
                        />
                    )}
                    {openAppearance && <HeatmapAppearance onClose={() => setOpenAppearance(false)} />}
                </>
            ) : (
                <EmptyLogin />
            )}
        </Box>
    );
}

function serverQuery(search) {
    return SERVER_QUERY_KEYS.map((key) => search[key]);
}

function boundsOf(features, defaults) {
    if (!features?.length) {
        return defaults;
    }

    return Object.fromEntries(
        RANGE_FILTER_KEYS.map((key) => {
            const values = features.map((route) => route.properties[RANGE_PROPERTIES[key]] ?? 0);

            return [key, [Math.min(...values), Math.max(...values) || defaults[key][1]]];
        })
    );
}

// the whole range is no filter
function toMonthsFilter([from, to]) {
    return from === 0 && to === LAST_MONTH ? null : [from, to];
}

// Serialize the current filters into URL query params
function filtersToParams(filters) {
    const params = {
        activity: Array.isArray(filters.activity) ? filters.activity.join(',') : filters.activity,
    };
    if (filters.months) {
        params.dateFrom = monthKey(filters.months[0]);
        params.dateTo = monthKey(filters.months[1]);
    }
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
    const dateFrom = searchParams.get('dateFrom');
    const dateTo = searchParams.get('dateTo');
    if (MONTH_KEY.test(dateFrom) && MONTH_KEY.test(dateTo)) {
        parsed.months = [monthIndex(dateFrom), monthIndex(dateTo)];
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

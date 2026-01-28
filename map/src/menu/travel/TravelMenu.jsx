import headerStyles from '../trackfavmenu.module.css';
import {
    AppBar,
    Box,
    CircularProgress,
    IconButton,
    ToggleButton,
    ToggleButtonGroup,
    Toolbar,
    Typography,
} from '@mui/material';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import { ReactComponent as SortDateIcon } from '../../assets/icons/ic_action_sort_by_date.svg';
import { ReactComponent as ActivityAllIcon } from '../../assets/icons/ic_action_activity.svg';
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
import capitalize from 'lodash-es/capitalize';
import PrimaryBtn from '../../frame/components/btns/PrimaryBtn';
import LoginContext from '../../context/LoginContext';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import gStyles from '../gstylesmenu.module.css';
import TagFilter from './TagFilter';

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

    useEffect(() => {
        if (ctx.searchTravelRoutes?.res) {
            setTravelResult(ctx.searchTravelRoutes?.res);
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

    // Create years array
    const years = [
        { id: ALL_YEARS, label: capitalize(ALL_YEARS) },
        ...Array.from({ length: new Date().getFullYear() - MIN_YEAR + 1 }, (_, i) => {
            const year = MIN_YEAR + i;
            return { id: year, label: `${year}` };
        }),
    ];

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
        });
    }

    function resetSearch() {
        setTravelResult(null);
        setSelectedActivityType(DEFAULT_ACTIVITY);
        setSelectedYear(DEFAULT_YEAR);
        setSelectedTags([]);
        setTagMatchMode(TAG_MATCH_MODES.OR);
    }

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
                            <TagFilter selectedTags={selectedTags} onChangeTags={setSelectedTags} />
                            <Box sx={{ mx: 2, mt: 1 }}>
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
                            <Box sx={{ m: 2 }}>
                                <PrimaryBtn
                                    action={showRoutes}
                                    id={'se-submit-show-travel'}
                                    text={t('shared_string_show')}
                                />
                            </Box>
                            {loadingResult && <CircularProgress sx={{ mt: 2, ml: 2 }} size={36} />}
                        </Box>
                        <Box className={gStyles.scrollActiveBlock}>
                            {travelResult &&
                                (travelResult?.features?.length > 0 ? (
                                    <>
                                        <Typography variant="body2" sx={{ mt: 2, ml: 2 }}>
                                            Results: {travelResult?.features?.length || 0}
                                        </Typography>
                                        <TravelRoutesResult routes={travelResult.features} />
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

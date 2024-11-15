import headerStyles from '../trackfavmenu.module.css';
import { AppBar, Box, Button, CircularProgress, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import { ReactComponent as SortDateIcon } from '../../assets/icons/ic_action_sort_by_date.svg';
import { MENU_INFO_CLOSE_SIZE } from '../../manager/GlobalManager';
import AppContext from '../../context/AppContext';
import activities from '../../resources/activities.json';
import {
    DEFAULT_TAG_ICON_COLOR,
    DEFAULT_TAG_ICON_SIZE,
    getIcon,
    getSvgIcon,
} from '../../infoblock/components/wpt/WptTagsProvider';
import styles from './travel.module.css';
import buttonStyles from '../login/login.module.css';
import CustomSelect from './CustomSelect';
import { useTranslation } from 'react-i18next';
import EmptyTravel from '../errors/EmptyTravel';
import EmptyLogin from '../login/EmptyLogin';
import TravelRoutesResult from './TravelRoutesResult';
import capitalize from 'lodash/capitalize';

export const ALL_YEARS = 'all';

export default function TravelMenu() {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const DEFAULT_ACTIVITY = 'hiking';
    const DEFAULT_YEAR = new Date().getFullYear();
    const MIN_YEAR = 2005;

    const [selectedActivityType, setSelectedActivityType] = useState(DEFAULT_ACTIVITY);
    const [selectedYear, setSelectedYear] = useState(DEFAULT_YEAR);
    const [updatedActivities, setUpdatedActivities] = useState([]);
    const [travelResult, setTravelResult] = useState(null);
    const [loadingResult, setLoadingResult] = useState(false);

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
        });
    }, [selectedActivityType, selectedYear]);

    useEffect(() => {
        if (ctx.travelFilter) {
            setSelectedActivityType(ctx.travelFilter.activity);
            setSelectedYear(ctx.travelFilter.year);
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
        return activities?.groups.reduce((act, group) => {
            if (act.length === 0) {
                act.push({
                    id: 'nospeed',
                    label: 'No speed',
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
    }, [activities]);

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
        ctx.setInfoBlockWidth(MENU_INFO_CLOSE_SIZE);
        ctx.setCurrentObjectType(null);
        ctx.setSearchTravelRoutes({
            clear: true,
        });
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
        });
    }

    function resetSearch() {
        setTravelResult(null);
        setSelectedActivityType(DEFAULT_ACTIVITY);
        setSelectedYear(DEFAULT_YEAR);
    }

    return (
        <>
            {ctx.loginUser ? (
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
                    <Box sx={{ m: 2 }}>
                        <Button id="se-submit-show-travel" className={buttonStyles.primaryButton} onClick={showRoutes}>
                            {t('shared_string_show')}
                        </Button>
                    </Box>
                    {loadingResult && <CircularProgress sx={{ mt: 10, ml: 20 }} size={36} />}
                    {travelResult &&
                        (travelResult?.features.length > 0 ? (
                            <>
                                <Typography variant="body2" sx={{ mt: 2, ml: 2 }}>
                                    Results: {travelResult?.features?.length || 0}
                                </Typography>
                                <TravelRoutesResult routes={travelResult.features} />
                            </>
                        ) : (
                            <EmptyTravel reset={resetSearch} />
                        ))}
                </>
            ) : (
                <EmptyLogin />
            )}
        </>
    );
}

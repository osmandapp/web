import React, { useEffect, useState, useContext } from 'react';
import { Box, Typography } from '@mui/material';
import AppContext from '../../../context/AppContext';
import activities from '../../../resources/activities.json';
import { ReactComponent as DotIcon } from '../../../assets/icons/ic_action_dot_16.svg';
import { getSvgIcon, getIcon, DEFAULT_TAG_ICON_COLOR } from '../wpt/WptTagsProvider';
import wptStyles from '../wpt/wptDetails.module.css';

const DEFAULT_ACTIVITY_ICON_SIZE = 16;
const ACTIVITIES_ARR = activities?.groups?.flatMap((group) => group.activities) ?? [];

export default function ActivityType({ track }) {
    const ctx = useContext(AppContext);
    const [activity, setActivity] = useState(null);

    useEffect(() => {
        if (!track) {
            setActivity(null);
            return;
        }

        const activityId = track.details?.metadata?.activity;
        if (!activityId) {
            setActivity(null);
            return;
        }

        const activityData = ACTIVITIES_ARR.find((act) => act.id === activityId);
        if (!activityData) {
            setActivity(null);
            return;
        }

        (async () => {
            if (!activityData.icon_name || activityData.icon_name === 'ic_sample') {
                setActivity({ label: activityData.label, icon: null });
                return;
            }

            const svgData = await getSvgIcon({ icon: activityData.icon_name, ctx });
            if (svgData) {
                const icon = getIcon(svgData, DEFAULT_ACTIVITY_ICON_SIZE, DEFAULT_TAG_ICON_COLOR);
                setActivity({ label: activityData.label, icon });
            } else {
                setActivity({ label: activityData.label, icon: null });
            }
        })();
    }, [track, ctx]);

    if (!activity) return null;

    return (
        <>
            {activity.icon && <Box className={wptStyles.activityIcon}>{activity.icon}</Box>}
            <Typography component="span" className={wptStyles.activityLabel}>
                {activity.label}
            </Typography>
            <DotIcon className={wptStyles.dotInfoIcon} />
        </>
    );
}

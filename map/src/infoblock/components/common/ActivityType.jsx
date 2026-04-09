import React, { useEffect, useState, useContext } from 'react';
import { Box, Typography } from '@mui/material';
import AppContext from '../../../context/AppContext';
import activities from '../../../resources/activities.json';
import { ReactComponent as DotIcon } from '../../../assets/icons/ic_action_dot_16.svg';
import { DEFAULT_TAG_ICON_COLOR, DEFAULT_TAG_ICON_SIZE, getIcon, getSvgIcon } from '../wpt/WptTagsProvider';
import wptStyles from '../wpt/wptDetails.module.css';

const ACTIVITIES_ARR = activities?.groups?.flatMap((group) => group.activities) ?? [];

export async function getActivityIcon(activityIconName, ctx) {
    if (!activityIconName || activityIconName === 'ic_sample') {
        return null;
    }
    const svgData = await getSvgIcon({ icon: activityIconName, ctx });
    if (!svgData) {
        return null;
    }
    return getIcon(svgData, DEFAULT_TAG_ICON_SIZE, DEFAULT_TAG_ICON_COLOR);
}

export default function ActivityType({ track }) {
    const ctx = useContext(AppContext);
    const [activity, setActivity] = useState(null);

    useEffect(() => {
        const activityId = track?.details?.metadata?.activity;
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
            const icon = await getActivityIcon(activityData.icon_name, ctx);
            setActivity({ label: activityData.label, icon });
        })();
    }, [track]);

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

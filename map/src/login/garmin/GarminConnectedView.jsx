import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as FolderIcon } from '../../assets/icons/ic_action_folder.svg';
import { ReactComponent as SyncIcon } from '../../assets/icons/ic_action_update.svg';
import { ReactComponent as LogoutIcon } from '../../assets/icons/ic_action_logout.svg';
import { ReactComponent as ExternalLinkIcon } from '../../assets/icons/ic_action_external_link.svg';
import { ReactComponent as ChevronIcon } from '../../assets/icons/ic_action_arrow_up.svg';
import { ReactComponent as FilterIcon } from '../../assets/icons/ic_action_filter.svg';
import ThickDivider from '../../frame/components/dividers/ThickDivider';
import SubTitleMenu from '../../frame/components/titles/SubTitleMenu';
import DefaultItem from '../../frame/components/items/DefaultItem';
import DividerWithMargin from '../../frame/components/dividers/DividerWithMargin';
import { MAIN_URL_WITH_SLASH, TRACKS_URL } from '../../manager/GlobalManager';
import { fmt } from '../../util/dateFmt';
import { EMPTY_FILE_NAME, openTrackOnMap } from '../../manager/track/TracksManager';
import AppContext from '../../context/AppContext';
import { GARMIN_FOLDER_NAME } from './garminApi';
import { GARMIN_ACTIVITY_GROUPS } from './GarminActivitiesToSync';
import { useRecentDataSaver } from '../../util/hooks/menu/useRecentDataSaver';
import styles from '../../frame/components/items/items.module.css';

export default function GarminConnectedView({
    syncTimeMs,
    disconnecting,
    onDisconnectClick,
    allActivityTypes,
    selectedActivityTypes,
    onActivitiesToSyncClick,
}) {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    const navigate = useNavigate();

    const recentSaver = useRecentDataSaver();

    const garminGroup = ctx.tracksGroups?.find((g) => g.name === GARMIN_FOLDER_NAME);
    const validFiles =
        garminGroup?.groupFiles?.filter((f) => !(f.name?.endsWith(EMPTY_FILE_NAME) && f.filesize === 0)) ?? [];
    const activitiesCount = validFiles.length;
    const lastActivity = validFiles.reduce(
        (latest, f) => (!latest || (f.updatetimems ?? 0) > (latest.updatetimems ?? 0) ? f : latest),
        null
    );

    function handleActivitiesClick() {
        if (garminGroup) {
            ctx.setOpenGroups((prev) => {
                const lastOpenGroup = prev[prev.length - 1];
                return lastOpenGroup?.name === garminGroup.name ? prev : [...prev, garminGroup];
            });
        }
        navigate(MAIN_URL_WITH_SLASH + TRACKS_URL);
    }

    async function handleLastActivityClick() {
        if (!lastActivity) return;
        await openTrackOnMap({
            file: lastActivity,
            showOnMap: true,
            showInfo: true,
            zoomToTrack: true,
            ctx,
            recentSaver,
        });
    }

    const staticTotal = GARMIN_ACTIVITY_GROUPS.flatMap((g) => g.types).length;
    const totalCount = allActivityTypes?.length > 0 ? allActivityTypes.length : staticTotal;
    const selectedCount = selectedActivityTypes?.length ?? 0;
    const activityTypesLabel = `${selectedCount}/${totalCount}`;

    return (
        <>
            <SubTitleMenu text={t('web:my_data')} />
            <DefaultItem
                icon={<FolderIcon />}
                name={t('web:garmin_activities')}
                onClick={handleActivitiesClick}
                rightSlot={<RightWithChevron text={String(activitiesCount)} />}
            />
            <DividerWithMargin margin={'64px'} />
            <DefaultItem
                icon={<SyncIcon />}
                name={t('web:garmin_last_sync')}
                onClick={handleLastActivityClick}
                rightSlot={<RightWithChevron text={syncTimeMs ? formatTimeAgo(syncTimeMs, t) : '—'} />}
            />
            <DividerWithMargin margin={'64px'} />
            <DefaultItem
                icon={<ExternalLinkIcon />}
                name={t('web:garmin_view_on_garmin_connect')}
                additionalInfo="https://connect.garmin.com"
                onClick={handleViewOnGarminClick}
            />
            <ThickDivider mt={'0px'} mb={'0px'} />
            <SubTitleMenu text={t('shared_string_settings')} />
            <DefaultItem
                icon={<FilterIcon />}
                name={t('web:garmin_activities_to_sync')}
                onClick={onActivitiesToSyncClick}
                rightSlot={<RightWithChevron text={activityTypesLabel} />}
            />
            <ThickDivider mt={'0px'} mb={'0px'} />
            <DefaultItem
                id="se-garmin-disconnect"
                icon={<LogoutIcon />}
                name={t('web:shared_string_disconnect')}
                component="div"
                onClick={onDisconnectClick}
                disabled={disconnecting}
            />
            <ThickDivider mt={'0px'} mb={'0px'} />
        </>
    );
}

function RightWithChevron({ text }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Typography className={styles.addInfo}>{text}</Typography>
            <ChevronIcon className={styles.sectionRowChevron} />
        </Box>
    );
}

function handleViewOnGarminClick() {
    globalThis.open('https://connect.garmin.com/app/activities', '_blank');
}

function formatTimeAgo(ms, t) {
    if (!ms) return null;
    const diffMs = Date.now() - ms;
    const diffMin = Math.floor(diffMs / 60000);
    if (diffMin < 60) return t('web:garmin_time_min_ago', { n: Math.max(diffMin, 1) });
    const diffH = Math.floor(diffMin / 60);
    if (diffH < 24) return t('web:garmin_time_h_ago', { n: diffH });
    const diffD = Math.floor(diffH / 24);
    if (diffD <= 30) return t('web:garmin_time_days_ago', { n: diffD });

    return fmt.dMMMM(ms);
}

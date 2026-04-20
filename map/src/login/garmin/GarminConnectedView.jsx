import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as FolderIcon } from '../../assets/icons/ic_action_folder.svg';
import { ReactComponent as SyncIcon } from '../../assets/icons/ic_action_update.svg';
import { ReactComponent as LogoutIcon } from '../../assets/icons/ic_action_logout.svg';
import ThickDivider from '../../frame/components/dividers/ThickDivider';
import SubTitleMenu from '../../frame/components/titles/SubTitleMenu';
import SimpleItemWithRightInfo from '../../frame/components/items/SimpleItemWithRightInfo';
import DefaultItem from '../../frame/components/items/DefaultItem';
import DividerWithMargin from '../../frame/components/dividers/DividerWithMargin';
import { MAIN_URL_WITH_SLASH, TRACKS_URL } from '../../manager/GlobalManager';
import { EMPTY_FILE_NAME } from '../../manager/track/TracksManager';
import AppContext from '../../context/AppContext';

const GARMIN_FOLDER_NAME = 'Garmin';

export default function GarminConnectedView({ syncTimeMs, disconnecting, onDisconnectClick }) {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    const navigate = useNavigate();

    const garminGroup = ctx.tracksGroups?.find((g) => g.name === GARMIN_FOLDER_NAME);
    const activitiesCount = garminGroup
        ? (garminGroup.groupFiles?.filter((f) => !(f.name?.endsWith(EMPTY_FILE_NAME) && f.filesize === 0)).length ?? 0)
        : 0;

    function handleActivitiesClick() {
        if (garminGroup) {
            ctx.setOpenGroups((prev) => [...prev, garminGroup]);
        }
        navigate(MAIN_URL_WITH_SLASH + TRACKS_URL);
    }

    return (
        <>
            <SubTitleMenu text={t('web:my_data')} />
            <SimpleItemWithRightInfo
                icon={<FolderIcon />}
                name={t('web:garmin_activities')}
                rightText={String(activitiesCount)}
                onClick={handleActivitiesClick}
            />
            <DividerWithMargin margin={'64px'} />
            <SimpleItemWithRightInfo
                icon={<SyncIcon />}
                name={t('web:garmin_last_sync')}
                rightText={syncTimeMs ? formatTimeAgo(syncTimeMs, t) : '—'}
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

function formatTimeAgo(ms, t) {
    if (!ms) return null;
    const diffMs = Date.now() - ms;
    const diffMin = Math.floor(diffMs / 60000);
    if (diffMin < 60) return t('web:garmin_time_min_ago', { n: Math.max(diffMin, 1) });
    const diffH = Math.floor(diffMin / 60);
    if (diffH < 24) return t('web:garmin_time_h_ago', { n: diffH });
    const diffD = Math.floor(diffH / 24);
    if (diffD <= 30) return t('web:garmin_time_days_ago', { n: diffD });

    return new Date(ms).toLocaleDateString('en-GB', { day: 'numeric', month: 'long' });
}

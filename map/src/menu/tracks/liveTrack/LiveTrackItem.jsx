import React, { useContext, useRef, useState } from 'react';
import { ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../../context/AppContext';
import { LIVE_TRACKS_URL, MAIN_URL_WITH_SLASH } from '../../../manager/GlobalManager';
import { ReactComponent as LocationIcon } from '../../../assets/icons/ic_action_location_marker_outlined.svg';
import styles from '../../trackfavmenu.module.css';
import ThreeDotsButton from '../../../frame/components/btns/ThreeDotsButton';
import ActionsMenu from '../../actions/ActionsMenu';
import LiveTrackItemActions from '../../actions/LiveTrackItemActions';
import DividerWithMargin from '../../../frame/components/dividers/DividerWithMargin';
import MenuItemWithLines from '../../components/MenuItemWithLines';

export default function LiveTrackItem({
    translation,
    isLastItem,
    removeTranslation,
    deleteTranslationForAll,
    startSharing,
    pauseSharing,
}) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();
    const navigate = useNavigate();

    const anchorEl = useRef(null);

    const [openActions, setOpenActions] = useState(false);

    const isOwner = translation.isOwner === true;
    const isSharing = ctx.myBroadcastTid === translation.id;
    const isParticipant = isSharing && !isOwner;

    const participants = ctx.liveParticipants?.[translation.id];
    const participantCount = participants ? Object.values(participants).filter((p) => p.active !== false).length : 0;
    const infoText =
        participantCount > 0 ? `${participantCount} ${t('web:live_track_online')}` : t('web:live_track_inactive');

    function handleClick(e) {
        if (anchorEl.current?.contains(e.target)) return;
        ctx.setSelectedLiveTranslation(translation);
        const params = new URLSearchParams({ tid: translation.id, name: translation.name });
        navigate(`${MAIN_URL_WITH_SLASH}${LIVE_TRACKS_URL}?${params}`);
    }

    function handleRemoveBookmark() {
        setOpenActions(false);
        removeTranslation(translation.id);
    }

    function handleOwnerSharingAction() {
        setOpenActions(false);
        if (!isSharing || ctx.isMyBroadcastPaused) {
            startSharing(translation.id);
        } else {
            pauseSharing();
        }
    }

    function handleParticipantStop() {
        setOpenActions(false);
        pauseSharing();
    }

    function handleDeleteForAll() {
        setOpenActions(false);
        deleteTranslationForAll(translation.id);
    }

    return (
        <>
            <MenuItem
                className={styles.item}
                onClick={handleClick}
                selected={ctx.selectedLiveTranslation?.id === translation.id}
            >
                <ListItemIcon className={styles.icon}>
                    <LocationIcon style={{ fill: participantCount > 0 ? '#4CAF50' : '#F44336' }} />
                </ListItemIcon>
                <ListItemText>
                    <MenuItemWithLines name={translation.name} maxLines={2} />
                    <Typography variant="body2" className={styles.groupInfo} noWrap>
                        {infoText}
                    </Typography>
                </ListItemText>
                <ThreeDotsButton
                    name={'action_menu_live_item'}
                    tip={'shared_string_menu'}
                    id={`se-live-track-actions-${translation.id}`}
                    setOpenActions={setOpenActions}
                    anchorEl={anchorEl}
                />
            </MenuItem>
            {!isLastItem && <DividerWithMargin margin={'64px'} />}
            <ActionsMenu
                open={openActions}
                setOpen={setOpenActions}
                anchorEl={anchorEl}
                actions={
                    <LiveTrackItemActions
                        isOwner={isOwner}
                        isSharing={isSharing}
                        isParticipant={isParticipant}
                        handleOwnerSharingAction={handleOwnerSharingAction}
                        handleParticipantStop={handleParticipantStop}
                        handleRemoveBookmark={handleRemoveBookmark}
                        handleDeleteForAll={handleDeleteForAll}
                    />
                }
            />
        </>
    );
}

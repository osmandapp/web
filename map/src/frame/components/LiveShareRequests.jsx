import React, { useContext } from 'react';
import { Alert, IconButton, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AppContext from '../../context/AppContext';
import { ReactComponent as DoneIcon } from '../../assets/icons/ic_action_done.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import styles from './liveShareRequests.module.css';

// Map notifications shown to a live-track owner when viewers ask to share their location.
// ✓ approves, ✗ (dismiss) denies. Pending requests are restored from the server on reload,
// so they reappear until the owner reacts.
export default function LiveShareRequests() {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const requests = ctx.liveShareRequests;
    if (!requests?.length) {
        return null;
    }

    const trackName = (translationId) =>
        ctx.liveTranslations?.find((tr) => tr.id === translationId)?.name ?? translationId;

    return (
        <div className={styles.container}>
            {requests.map((req) => (
                <Alert
                    key={`${req.translationId}-${req.userId}`}
                    severity="info"
                    action={
                        <>
                            <Tooltip title={t('shared_string_apply')} arrow>
                                <IconButton
                                    color="inherit"
                                    size="small"
                                    onClick={() => ctx.liveShareActions?.approve(req.translationId, req.userId)}
                                >
                                    <DoneIcon className={styles.approveIcon} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={t('shared_string_close')} arrow>
                                <IconButton
                                    color="inherit"
                                    size="small"
                                    onClick={() => ctx.liveShareActions?.deny(req.translationId, req.userId)}
                                >
                                    <CloseIcon className={styles.denyIcon} />
                                </IconButton>
                            </Tooltip>
                        </>
                    }
                >
                    {t('web:live_track_share_request', {
                        nickname: req.nickname,
                        track: trackName(req.translationId),
                    })}
                </Alert>
            ))}
        </div>
    );
}

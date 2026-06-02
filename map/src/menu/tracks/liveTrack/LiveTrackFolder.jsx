import React, { useContext, useState } from 'react';
import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../../context/AppContext';
import { ReactComponent as BackIcon } from '../../../assets/icons/ic_arrow_back.svg';
import { ReactComponent as AddIcon } from '../../../assets/icons/ic_action_add.svg';
import LiveTrackItem from './LiveTrackItem';
import Empty from '../../errors/Empty';
import CreateLiveTrackDialog from './CreateLiveTrackDialog';
import styles from '../../trackfavmenu.module.css';
import { useWindowSize } from '../../../util/hooks/useWindowSize';
import { HEADER_SIZE, MAIN_URL_WITH_SLASH, TRACKS_URL } from '../../../manager/GlobalManager';
import gStyles from '../../gstylesmenu.module.css';

export default function LiveTrackFolder({
    removeTranslation,
    createTranslation,
    deleteTranslationForAll,
    startSharing,
    pauseSharing,
}) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [, height] = useWindowSize();
    const [dialogOpen, setDialogOpen] = useState(false);

    function handleBack() {
        ctx.setSelectedLiveTranslation(null);
        navigate(MAIN_URL_WITH_SLASH + TRACKS_URL);
    }

    return (
        <Box sx={{ height: `${height - HEADER_SIZE}px` }} className={gStyles.scrollMainBlock}>
            <AppBar position="static" className={styles.appbar}>
                <Toolbar className={styles.toolbar}>
                    <IconButton
                        id="se-live-tracks-back"
                        variant="contained"
                        type="button"
                        className={styles.appBarIcon}
                        onClick={handleBack}
                    >
                        <BackIcon />
                    </IconButton>
                    <Typography id="se-live-tracks-title" component="div" className={styles.title}>
                        {t('web:live_tracks')}
                    </Typography>
                    <Tooltip title={t('web:live_track_create')} arrow placement="bottom">
                        <IconButton
                            id="se-live-tracks-create"
                            className={styles.appBarIcon}
                            onClick={() => setDialogOpen(true)}
                        >
                            <AddIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            <CreateLiveTrackDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                createTranslation={createTranslation}
            />
            {ctx.liveTranslations.length === 0 ? (
                <Empty title={t('web:live_track_empty')} text={t('web:live_track_empty_desc')} />
            ) : (
                <Box className={styles.liveTrackList} sx={{ maxHeight: `${height - 120}px` }}>
                    {ctx.liveTranslations.map((translation, index) => (
                        <LiveTrackItem
                            key={translation.id}
                            translation={translation}
                            isLastItem={index === ctx.liveTranslations.length - 1}
                            removeTranslation={removeTranslation}
                            deleteTranslationForAll={deleteTranslationForAll}
                            startSharing={startSharing}
                            pauseSharing={pauseSharing}
                        />
                    ))}
                </Box>
            )}
        </Box>
    );
}

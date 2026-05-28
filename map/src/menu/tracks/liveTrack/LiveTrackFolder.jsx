import React, { useContext } from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../../context/AppContext';
import { ReactComponent as BackIcon } from '../../../assets/icons/ic_arrow_back.svg';
import LiveTrackItem from './LiveTrackItem';
import Empty from '../../errors/Empty';
import styles from '../../trackfavmenu.module.css';
import { useWindowSize } from '../../../util/hooks/useWindowSize';
import { HEADER_SIZE, MAIN_URL_WITH_SLASH, TRACKS_URL } from '../../../manager/GlobalManager';
import gStyles from '../../gstylesmenu.module.css';

export default function LiveTrackFolder({ removeTranslation }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [, height] = useWindowSize();

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
                </Toolbar>
            </AppBar>
            {ctx.liveTranslations.length === 0 ? (
                <Empty title={t('web:live_track_empty')} text={t('web:live_track_empty_desc')} />
            ) : (
                <Box sx={{ overflowX: 'hidden', overflowY: 'auto', maxHeight: `${height - 120}px` }}>
                    {ctx.liveTranslations.map((translation, index) => (
                        <LiveTrackItem
                            key={translation.id}
                            translation={translation}
                            isLastItem={index === ctx.liveTranslations.length - 1}
                            removeTranslation={removeTranslation}
                        />
                    ))}
                </Box>
            )}
        </Box>
    );
}

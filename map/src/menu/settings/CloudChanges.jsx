import headerStyles from '../trackfavmenu.module.css';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import styles from './settings.module.css';
import React from 'react';
import { ReactComponent as BackIcon } from '../../assets/icons/ic_arrow_back.svg';
import { useTranslation } from 'react-i18next';

export default function CloudChanges({ setOpenCloudSettings }) {
    const { t } = useTranslation();

    function closeChanges() {
        setOpenCloudSettings(false);
    }

    return (
        <>
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton
                        variant="contained"
                        type="button"
                        className={styles.closeIcon}
                        onClick={() => closeChanges()}
                    >
                        <BackIcon />
                    </IconButton>
                    <Typography id="se-configure-map-menu-name" component="div" className={headerStyles.title}>
                        {t('web:cloud_changes')}
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

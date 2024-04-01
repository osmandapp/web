import { useTranslation } from 'react-i18next';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import headerStyles from '../trackfavmenu.module.css';
import styles from './settings.module.css';
import React from 'react';
import { ReactComponent as BackIcon } from '../../assets/icons/ic_arrow_back.svg';

export default function CloudTrash({ setOpenCloudSettings }) {
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
                    <Typography component="div" className={headerStyles.title}>
                        {t('shared_string_trash')}
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

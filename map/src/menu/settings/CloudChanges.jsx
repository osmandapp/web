import React, { useContext, useEffect, useState } from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { ReactComponent as BackIcon } from '../../assets/icons/ic_arrow_back.svg';
import AppContext from '../../context/AppContext';
import headerStyles from '../trackfavmenu.module.css';
import styles from './settings.module.css';
import { useTranslation } from 'react-i18next';
import Loading from '../errors/Loading';
import { closeCloudSettings } from '../../manager/SettingsManager';
import Empty from '../errors/Empty';
import ChangesItem from './ChangesItem';

export default function CloudChanges({ files, setOpenCloudSettings, filesLoading }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [changes, setChanges] = useState(null);

    useEffect(() => {
        if (files) {
            setChanges(files);
        }
    }, [files]);

    return (
        <>
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton
                        variant="contained"
                        className={styles.closeIcon}
                        onClick={() => closeCloudSettings(true, setOpenCloudSettings, ctx)}
                    >
                        <BackIcon />
                    </IconButton>
                    <Typography component="div" className={headerStyles.title}>
                        {t('shared_string_changes')}
                    </Typography>
                </Toolbar>
            </AppBar>
            {filesLoading || !changes ? (
                <Loading id={'se-loading-page'} />
            ) : changes?.length === 0 ? (
                <Empty title={'Changes are empty'} />
            ) : (
                <Box
                    id={'se-cloud_changes-items'}
                    minWidth={ctx.infoBlockWidth}
                    maxWidth={ctx.infoBlockWidth}
                    sx={{ overflow: 'auto', overflowX: 'hidden' }}
                >
                    {changes.map((item) => (
                        <ChangesItem key={item.id} item={item} changes={changes} setChanges={setChanges} />
                    ))}
                </Box>
            )}
        </>
    );
}

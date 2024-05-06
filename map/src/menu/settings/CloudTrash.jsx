import { useTranslation } from 'react-i18next';
import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import headerStyles from '../trackfavmenu.module.css';
import styles from './settings.module.css';
import React, { useContext, useEffect, useState } from 'react';
import { ReactComponent as BackIcon } from '../../assets/icons/ic_arrow_back.svg';
import { ReactComponent as TrashIcon } from '../../assets/icons/ic_action_delete_outlined.svg';
import Loading from '../errors/Loading';
import { closeCloudSettings } from '../../manager/SettingsManager';
import AppContext from '../../context/AppContext';
import EmptyTrash from '../errors/EmptyTrash';
import EmptyTrashDialog from './EmptyTrashDialog';
import TrashItem from './TrashItem';

export default function CloudTrash({ files, setOpenCloudSettings, filesLoading }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [changes, setChanges] = useState(null);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

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
                        type="button"
                        className={styles.closeIcon}
                        onClick={() => closeCloudSettings(true, setOpenCloudSettings, ctx)}
                    >
                        <BackIcon />
                    </IconButton>
                    <Typography component="div" className={headerStyles.title}>
                        {t('shared_string_trash')}
                    </Typography>
                    <Tooltip key={'empty_trash'} title={t('shared_string_empty_trash')} arrow placement="bottom-end">
                        <IconButton
                            id={'se-empty_trash'}
                            component="span"
                            variant="contained"
                            type="button"
                            className={headerStyles.appBarIcon}
                            disabled={changes?.length === 0}
                            onClick={() => setOpenDeleteDialog(true)}
                        >
                            <TrashIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            {filesLoading || !changes ? (
                <Loading id={'se-loading-page'} />
            ) : changes?.length === 0 ? (
                <EmptyTrash />
            ) : (
                <Box
                    id={'se-cloud_trash-items'}
                    minWidth={ctx.infoBlockWidth}
                    maxWidth={ctx.infoBlockWidth}
                    sx={{ overflow: 'auto', overflowX: 'hidden' }}
                >
                    {changes.map((item) => (
                        <TrashItem key={item.id} item={item} changes={changes} setChanges={setChanges} />
                    ))}
                </Box>
            )}
            {openDeleteDialog && (
                <EmptyTrashDialog
                    dialogOpen={openDeleteDialog}
                    setDialogOpen={setOpenDeleteDialog}
                    changes={changes}
                    setChanges={setChanges}
                />
            )}
        </>
    );
}

import React, { forwardRef } from 'react';
import { Box, Divider, ListItemIcon, ListItemText, MenuItem, Paper, Typography } from '@mui/material';
import styles from '../trackfavmenu.module.css';
import { ReactComponent as DownloadIcon } from '../../assets/icons/ic_action_gsave_dark.svg';
import { ReactComponent as ShowIcon } from '../../assets/icons/ic_show_on_map_outlined.svg';
import { useTranslation } from 'react-i18next';

const SmartFolderActions = forwardRef(({ files, folder, folderType, setOpenActions, setProcessDownload }, ref) => {
    const { t } = useTranslation();

    async function downloadOsf() {
        //todo
    }

    async function downloadObf() {
        //todo
    }

    function showAll() {
        //todo
    }

    return (
        <>
            <Box ref={ref}>
                <Paper id="se-smart-folder-actions" className={styles.actions}>
                    <MenuItem
                        disabled={files.realSize === 0}
                        className={styles.action}
                        onClick={() => {
                            showAll();
                            setOpenActions(false);
                        }}
                    >
                        <ListItemIcon className={styles.iconAction}>
                            <ShowIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.actionName} noWrap>
                                {t('web:show_all_tracks_on_map')}
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                    <Divider className={styles.dividerActions} />
                    <MenuItem
                        disabled={files.realSize === 0}
                        className={styles.action}
                        onClick={() => {
                            downloadOsf().then();
                            setOpenActions(false);
                        }}
                    >
                        <ListItemIcon className={styles.iconAction}>
                            <DownloadIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.actionName} noWrap>
                                {t('web:download_as_osf')}
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                    <MenuItem
                        disabled={files.realSize === 0}
                        className={styles.action}
                        onClick={() => {
                            downloadObf().then();
                            setOpenActions(false);
                        }}
                    >
                        <ListItemIcon className={styles.iconAction}>
                            <DownloadIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.actionName} noWrap>
                                {t('web:download_as_obf')}
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                </Paper>
            </Box>
        </>
    );
});

SmartFolderActions.displayName = 'SmartFolderActions';
export default SmartFolderActions;

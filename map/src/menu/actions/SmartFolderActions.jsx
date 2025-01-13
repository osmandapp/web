import React, { forwardRef, useContext } from 'react';
import { Box, Divider, ListItemIcon, ListItemText, MenuItem, Paper, Typography } from '@mui/material';
import styles from '../trackfavmenu.module.css';
import { ReactComponent as DownloadIcon } from '../../assets/icons/ic_action_gsave_dark.svg';
import { ReactComponent as ShowIcon } from '../../assets/icons/ic_show_on_map_outlined.svg';
import { useTranslation } from 'react-i18next';
import { apiPost } from '../../util/HttpApi';
import AppContext from '../../context/AppContext';

const SmartFolderActions = forwardRef(({ files, folder, folderType, setOpenActions, setProcessDownload }, ref) => {
    const { t } = useTranslation();
    const ctx = useContext(AppContext);

    async function downloadOsf() {
        setProcessDownload(true);
        const res = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/download-backup-folder`, [], {
            params: {
                format: '.osf',
                shared: true,
                type: 'GPX',
            },
            headers: {
                'Content-Type': 'application/json',
            },
            responseType: 'arraybuffer',
            throwErrors: true,
        }).catch(() => {
            setProcessDownload(false);
            ctx.setTrackErrorMsg({
                title: 'Get OSF error',
                msg: `We couldn't download osf for Shared With Me folder. Please contact us at support@osmand.net`,
            });
        });
        if (res.status === 200) {
            setProcessDownload(false);
            let name = res.headers['content-disposition'].split('filename=')[1];
            const url = document.createElement('a');
            url.href = URL.createObjectURL(new Blob([res.data], { type: 'octet/stream' }));
            url.download = `${name}`;
            url.click();
        }
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

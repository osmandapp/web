import React, { forwardRef, useContext, useState } from 'react';
import { Box, Divider, ListItemIcon, ListItemText, MenuItem, Paper, Typography } from '@mui/material';
import styles from '../trackfavmenu.module.css';
import { ReactComponent as TimeIcon } from '../../assets/icons/ic_action_gsave_dark.svg';
import { ReactComponent as RenameIcon } from '../../assets/icons/ic_action_edit_outlined.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/ic_action_delete_outlined.svg';
import GpxCollection from '../tracks/GpxCollection';
import RenameDialog from '../../dialogs/tracks/RenameDialog';
import DeleteFolderDialog from '../../dialogs/tracks/DeleteFolderDialog';
import { apiPost } from '../../util/HttpApi';
import AppContext from '../../context/AppContext';
import { useTranslation } from 'react-i18next';
import { SMART_TYPE } from '../share/shareConstants';
import { populateSmartFolderFiles } from '../../context/AppContext';

const GroupActions = forwardRef(({ group, setOpenActions, setProcessDownload }, ref) => {
    const ctx = useContext(AppContext);

    const [newCollection, setNewCollection] = useState([]);
    const [openRenameDialog, setOpenRenameDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const { t } = useTranslation();

    const getGroupFiles = () => {
        if (group.type === SMART_TYPE && group.files?.length === 0) {
            const populated = populateSmartFolderFiles(
                group,
                ctx.listFiles?.uniqueFiles,
                ctx.smartFoldersCache,
                ctx.setSmartFoldersCache
            );
            return populated.files;
        }
        return group.files;
    };

    async function downloadFolderBackup() {
        setProcessDownload(true);
        const res = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/download-backup-folder`, [], {
            params: {
                format: '.osf',
                folderName: group.fullName,
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
                msg: `We couldn't download osf for folder ${group.name}. Please contact us at support@osmand.net`,
            });
        });
        if (res.status === 200) {
            setProcessDownload(false);
            let name = res.headers['content-disposition'].split('filename=')[1];
            const url = document.createElement('a');
            url.href = URL.createObjectURL(new Blob([res.data], { type: 'octet/stream' }));
            url.download = name;
            url.click();
        }
    }

    return (
        <>
            <Box ref={ref}>
                <Paper id="se-folder-actions" className={styles.actions}>
                    {group.type !== SMART_TYPE && (
                        <MenuItem
                            disabled={group.realSize === 0}
                            className={styles.action}
                            onClick={() => {
                                downloadFolderBackup().then();
                                setOpenActions(false);
                            }}
                        >
                            <ListItemIcon className={styles.iconAction}>
                                <TimeIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography variant="inherit" className={styles.actionName} noWrap>
                                    {t('web:download_as_osf')}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    )}
                    <MenuItem
                        disabled={group.realSize === 0}
                        className={styles.action}
                        onClick={() => {
                            setNewCollection(getGroupFiles);
                            setOpenActions(false);
                        }}
                    >
                        <ListItemIcon className={styles.iconAction}>
                            <TimeIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.actionName} noWrap>
                                {t('web:download_as_obf')}
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                    {group.type !== SMART_TYPE && (
                        <>
                            <Divider className={styles.dividerActions} />
                            <MenuItem
                                id="se-folder-actions-rename"
                                className={styles.action}
                                onClick={() => setOpenRenameDialog(true)}
                            >
                                <ListItemIcon className={styles.iconAction}>
                                    <RenameIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography variant="inherit" className={styles.actionName} noWrap>
                                        {t('shared_string_rename')}
                                    </Typography>
                                </ListItemText>
                            </MenuItem>
                            <Divider className={styles.dividerActions} />
                            <MenuItem
                                id="se-folder-actions-delete"
                                className={styles.action}
                                onClick={() => setOpenDeleteDialog(true)}
                            >
                                <ListItemIcon className={styles.iconAction}>
                                    <DeleteIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography variant="inherit" className={styles.actionName} noWrap>
                                        {t('shared_string_delete')}
                                    </Typography>
                                </ListItemText>
                            </MenuItem>
                        </>
                    )}
                </Paper>
            </Box>
            {newCollection.length > 0 && (
                <GpxCollection tracks={newCollection} setProcessDownload={setProcessDownload} />
            )}
            {openRenameDialog && (
                <RenameDialog setOpenDialog={setOpenRenameDialog} group={group} setOpenActions={setOpenActions} />
            )}
            {openDeleteDialog && (
                <DeleteFolderDialog
                    setOpenDialog={setOpenDeleteDialog}
                    folder={group}
                    setOpenActions={setOpenActions}
                />
            )}
        </>
    );
});

GroupActions.displayName = 'GroupActions';
export default GroupActions;

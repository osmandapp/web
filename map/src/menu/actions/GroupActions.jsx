import React, { forwardRef, useContext, useEffect, useState } from 'react';
import { Box, Divider, ListItemIcon, ListItemText, MenuItem, Paper, Typography } from '@mui/material';
import styles from '../trackfavmenu.module.css';
import { ReactComponent as TimeIcon } from '../../assets/icons/ic_action_gsave_dark.svg';
import { ReactComponent as RenameIcon } from '../../assets/icons/ic_action_edit_outlined.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/ic_action_delete_outlined.svg';
import RenameDialog from '../../dialogs/tracks/RenameDialog';
import DeleteFolderDialog from '../../dialogs/tracks/DeleteFolderDialog';
import AppContext from '../../context/AppContext';
import { useTranslation } from 'react-i18next';
import { SMART_TYPE } from '../share/shareConstants';
import { populateSmartFolderFiles } from '../../manager/SmartFoldersManager';
import { GARMIN_FOLDER_NAME, fetchGarminStatus } from '../../login/garmin/garminApi';
import { downloadObfCollection, downloadOsfBackup } from '../../manager/track/TracksManager';

const GroupActions = forwardRef(({ group, setOpenActions, setProcessDownload }, ref) => {
    const ctx = useContext(AppContext);

    const [openRenameDialog, setOpenRenameDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [garminLinked, setGarminLinked] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        if (group.name === GARMIN_FOLDER_NAME) {
            fetchGarminStatus().then((data) => setGarminLinked(!!data?.linked));
        }
    }, [group.name]);

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

    async function downloadFolderBackup(isSmart) {
        await downloadOsfBackup({
            params: {
                folderName: group.fullName,
                smart: isSmart,
            },
            displayName: group.name,
            ctx,
            setProcessDownload,
        });
    }

    async function downloadObf() {
        const files = getGroupFiles();
        if (files.length === 0) return;

        await downloadObfCollection({
            names: files.map((file) => file.name),
            fileName: 'OsmAndCollection.travel.obf',
            displayName: group.name,
            ctx,
            setProcessDownload,
        });
    }

    return (
        <>
            <Box ref={ref}>
                <Paper id="se-folder-actions" className={styles.actions}>
                    <MenuItem
                        disabled={group.realSize === 0}
                        className={styles.action}
                        onClick={() => {
                            downloadFolderBackup(group.type === SMART_TYPE).then();
                            setOpenActions(false);
                        }}
                    >
                        <ListItemIcon className={styles.iconAction}>
                            <TimeIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography className={styles.actionName} noWrap>
                                {t('web:download_as_osf')}
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                    <MenuItem
                        disabled={group.realSize === 0}
                        className={styles.action}
                        onClick={() => {
                            downloadObf().then();
                            setOpenActions(false);
                        }}
                    >
                        <ListItemIcon className={styles.iconAction}>
                            <TimeIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography className={styles.actionName} noWrap>
                                {t('web:download_as_obf')}
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                    <>
                        <Divider className={styles.dividerActions} />
                        <MenuItem
                            id="se-folder-actions-rename"
                            className={styles.action}
                            disabled={garminLinked}
                            onClick={() => setOpenRenameDialog(true)}
                        >
                            <ListItemIcon className={styles.iconAction}>
                                <RenameIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography className={styles.actionName} noWrap>
                                    {t('shared_string_rename')}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                        <Divider className={styles.dividerActions} />
                        <MenuItem
                            id="se-folder-actions-delete"
                            className={styles.action}
                            disabled={garminLinked}
                            onClick={() => setOpenDeleteDialog(true)}
                        >
                            <ListItemIcon className={styles.iconAction}>
                                <DeleteIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography className={styles.actionName} noWrap>
                                    {t('shared_string_delete')}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    </>
                </Paper>
            </Box>
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

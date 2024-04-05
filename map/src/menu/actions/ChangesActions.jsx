import React, { forwardRef, useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import { useTranslation } from 'react-i18next';
import { ReactComponent as RestoreIcon } from '../../assets/icons/ic_action_history.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/ic_action_delete_outlined.svg';
import { ReactComponent as DownloadIcon } from '../../assets/icons/ic_action_gsave_dark.svg';
import { Box, Divider, ListItemIcon, ListItemText, MenuItem, Paper, Typography } from '@mui/material';
import styles from '../trackfavmenu.module.css';
import {
    deleteFileVersion,
    downloadFile,
    isFileRestrictedForDownload,
    restoreFile,
} from '../../manager/SettingsManager';
import DeleteFileVersionDialog from '../settings/DeleteFileVersionDialog';

const ChangesActions = forwardRef(({ item, setOpenActions, changes, setChanges }, ref) => {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    return (
        <>
            <Box ref={ref}>
                <Paper id="se-changes-actions" className={styles.actions}>
                    <MenuItem
                        className={styles.action}
                        disabled={isFileRestrictedForDownload(item.file)}
                        onClick={() => {
                            downloadFile(item.file).then();
                            setOpenActions(false);
                        }}
                    >
                        <ListItemIcon className={styles.iconAction}>
                            <DownloadIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.actionName} noWrap>
                                {t('shared_string_download')}
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                    {item?.file.zipSize <= 0 && (
                        <>
                            <Divider className={styles.dividerActions} />
                            <MenuItem
                                id={'se-changes-actions-restore'}
                                className={styles.action}
                                onClick={() => {
                                    restoreFile({ file: item.file, ctx, changes, setChanges }).then();
                                    setOpenActions(false);
                                }}
                            >
                                <ListItemIcon className={styles.iconAction}>
                                    <RestoreIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography variant="inherit" className={styles.actionName} noWrap>
                                        {t('shared_string_restore')}
                                    </Typography>
                                </ListItemText>
                            </MenuItem>
                        </>
                    )}
                    <Divider className={styles.dividerActions} />
                    <MenuItem
                        id={'se-changes-actions-delete'}
                        className={styles.action}
                        onClick={() => {
                            deleteFileVersion({ file: item.file, changes, setChanges }).then();
                            setOpenActions(false);
                        }}
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
                </Paper>
            </Box>
            {openDeleteDialog && (
                <DeleteFileVersionDialog
                    file={item.file}
                    dialogOpen={openDeleteDialog}
                    setDialogOpen={setOpenDeleteDialog}
                    changes={changes}
                    setChanges={setChanges}
                    deleteVersion={true}
                />
            )}
        </>
    );
});

ChangesActions.displayName = 'ChangesActions';
export default ChangesActions;

import { AppBar, Button, IconButton, TextField, Toolbar, Tooltip, Typography } from '@mui/material';
import CloudGpxUploader from '../../../frame/components/util/CloudGpxUploader';
import React, { useContext, useState } from 'react';
import AppContext from '../../../context/AppContext';
import { ReactComponent as CloseIcon } from '../../../assets/icons/ic_action_close.svg';
import { ReactComponent as BackIcon } from '../../../assets/icons/ic_arrow_back.svg';
import { ReactComponent as ImportIcon } from '../../../assets/icons/ic_action_folder_import_outlined.svg';
import { ReactComponent as AddFolderIcon } from '../../../assets/icons/ic_action_folder_add_outlined.svg';
import { MENU_INFO_CLOSE_SIZE } from '../../../manager/GlobalManager';
import { Dialog } from '@material-ui/core';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import styles from '../trackmenu.module.css';
import dialogStyles from '../../../dialogs/dialog.module.css';
import { prepareFileName } from '../../../util/Utils';
import { saveEmptyTrack } from '../../../manager/track/SaveTrackManager';
import { DEFAULT_GROUP_NAME } from '../../../manager/track/TracksManager';

export default function TracksHeader({ trackGroup, sortIcon, setOpenSort, anchorEl }) {
    const ctx = useContext(AppContext);

    const [openAddFolderDialog, setOpenAddFolderDialog] = useState(false);

    function closeTrackMenu() {
        ctx.setInfoBlockWidth(MENU_INFO_CLOSE_SIZE);
    }

    function prevTrackMenu() {
        ctx.openTrackGroups.pop();
        ctx.setOpenTrackGroups([...ctx.openTrackGroups]);
    }

    function isFolderExist(name) {
        return trackGroup.subfolders.some((folder) => folder.name === name);
    }

    const DialogAddFolder = () => {
        const [folderNameError, setFolderNameError] = useState('');
        const [folderName, setFolderName] = useState('');

        function validationFolderName(name) {
            if (!name || name === '' || name.trim().length === 0) {
                setFolderNameError('Empty folder name.');
            } else if (isFolderExist(name)) {
                setFolderNameError('Folder already exists.');
            } else {
                setFolderNameError('');
            }
        }

        async function addFolder() {
            let folderPart;
            if (trackGroup.fullName === DEFAULT_GROUP_NAME) {
                folderPart = '';
            } else {
                folderPart = `${trackGroup.fullName}/`;
            }
            const newFolderName = `${folderPart}${folderName}`;
            saveEmptyTrack(newFolderName, ctx).then();
            setOpenAddFolderDialog(false);
        }

        return (
            <Dialog open={true} onClose={() => setOpenAddFolderDialog(false)}>
                <DialogTitle className={dialogStyles.title}>Add new folder</DialogTitle>
                <DialogContent className={dialogStyles.content}>
                    <TextField
                        autoFocus
                        onChange={(e) => {
                            const name = prepareFileName(e.target.value);
                            validationFolderName(name);
                            setFolderName(name);
                        }}
                        id="folderName"
                        type="folderName"
                        fullWidth
                        error={folderNameError !== ''}
                        helperText={folderNameError !== '' ? folderNameError : ' '}
                        variant="filled"
                        value={folderName ? folderName : ''}
                    ></TextField>
                </DialogContent>
                <DialogActions>
                    <Button className={dialogStyles.button} onClick={() => setOpenAddFolderDialog(false)}>
                        Cancel
                    </Button>
                    <Button className={dialogStyles.button} onClick={() => addFolder()}>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };

    return (
        <>
            <AppBar position="static" className={styles.appbar}>
                <Toolbar className={styles.toolbar}>
                    {ctx.openTrackGroups.length > 0 ? (
                        <IconButton
                            variant="contained"
                            type="button"
                            className={styles.appBarIcon}
                            onClick={prevTrackMenu}
                        >
                            <BackIcon />
                        </IconButton>
                    ) : (
                        <IconButton
                            variant="contained"
                            type="button"
                            className={styles.appBarIcon}
                            onClick={closeTrackMenu}
                        >
                            <CloseIcon />
                        </IconButton>
                    )}
                    <Typography component="div" className={styles.title}>
                        {trackGroup.name}
                    </Typography>
                    <Tooltip key={'sort_tracks'} title="Sort tracks" arrow placement="bottom-end">
                        <span>
                            <IconButton
                                variant="contained"
                                type="button"
                                className={styles.appBarIcon}
                                onClick={() => setOpenSort(true)}
                                ref={anchorEl}
                                disabled={!trackGroup || trackGroup.files?.length === 0}
                            >
                                {sortIcon}
                            </IconButton>
                        </span>
                    </Tooltip>
                    <Tooltip key={'import_track'} title="Import track" arrow placement="bottom-end">
                        <span>
                            <CloudGpxUploader folder={trackGroup.fullName}>
                                <IconButton
                                    component="span"
                                    variant="contained"
                                    type="button"
                                    className={styles.appBarIcon}
                                >
                                    <ImportIcon />
                                </IconButton>
                            </CloudGpxUploader>
                        </span>
                    </Tooltip>
                    <Tooltip key={'add_folder'} title="Add folder" arrow placement="bottom-end">
                        <span>
                            <IconButton
                                variant="contained"
                                type="button"
                                className={styles.appBarIcon}
                                onClick={() => setOpenAddFolderDialog(true)}
                                ref={anchorEl}
                                disabled={!trackGroup || trackGroup.files?.length === 0}
                            >
                                <AddFolderIcon />
                            </IconButton>
                        </span>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            {openAddFolderDialog && <DialogAddFolder />}
        </>
    );
}

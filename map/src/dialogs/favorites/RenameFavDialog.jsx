import { Dialog } from '@material-ui/core';
import DialogTitle from '@mui/material/DialogTitle';
import dialogStyles from '../dialog.module.css';
import DialogContent from '@mui/material/DialogContent';
import { Button, TextField } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import React, { useContext, useState } from 'react';
import AppContext, { OBJECT_TYPE_FAVORITE } from '../../context/AppContext';
import { prepareFileName } from '../../util/Utils';
import { apiGet } from '../../util/HttpApi';
import { refreshGlobalFiles } from '../../manager/track/SaveTrackManager';
import FavoritesManager, {
    getGroupNameForFile,
    getGroupNameFromFile,
    prepareFavGroupName,
} from '../../manager/FavoritesManager';
import { updateSortList } from '../../menu/actions/SortActions';

export default function RenameFavDialog({ setOpenDialog, group, setOpenActions }) {
    const ctx = useContext(AppContext);

    const [nameError, setNameError] = useState('');
    const [name, setName] = useState(getGroupNameFromFile(prepareFavGroupName(group.file.name)));

    const renameError = {
        title: 'Rename error',
        msg: 'Favorites not found.',
    };

    async function rename() {
        const newName = prepareFileName(name, true);
        if (validationName(newName)) {
            if (group) {
                await renameFavGroup(group, newName, ctx);
            } else {
                ctx.setTrackErrorMsg(renameError);
            }
            if (setOpenActions) {
                setOpenActions(false);
            }
        }
    }

    async function renameFavGroup(group, newName, ctx) {
        let newGroupName = FavoritesManager.FAV_FILE_PREFIX + newName + '.gpx';
        const oldName = getGroupNameFromFile(prepareFavGroupName(group.file.name));
        newGroupName = getGroupNameForFile(newGroupName);
        if (newGroupName !== group.file.name) {
            const res = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/fav/rename-fav-group`, {
                params: {
                    fullOldName: group.file.name,
                    oldName: oldName,
                    fullNewName: newGroupName,
                    newName: newName,
                    oldUpdatetime: group.updatetimems,
                },
                dataOnErrors: true,
            });
            if (res && res?.data?.status === 'ok') {
                updateSortList({ oldName, newName, isFavorites: true, ctx });
                refreshGlobalFiles({ ctx, currentFileName: newGroupName, type: OBJECT_TYPE_FAVORITE }).then();
            } else {
                ctx.setTrackErrorMsg({
                    title: 'Rename error',
                    msg: res.data,
                });
            }
        }
    }

    function validationName(name) {
        if (group) {
            return validationFolderName(name);
        } else {
            ctx.setTrackErrorMsg(renameError);
            setOpenDialog(false);
            if (setOpenActions) {
                setOpenActions(false);
            }
            return false;
        }
    }

    function validationFolderName(name) {
        if (!name || name === '' || name.trim().length === 0) {
            setNameError('Empty favorite group name.');
            return false;
        } else if (isFolderExist(name)) {
            setNameError('Favorite group already exists.');
            return false;
        } else {
            setNameError('');
            return true;
        }
    }

    function isFolderExist(name) {
        return ctx.favorites?.groups.some((g) => g.name === name);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            rename().then();
        }
    };

    function closeDialogs() {
        setOpenDialog(false);
        if (setOpenActions) {
            setOpenActions(false);
        }
    }

    return (
        <Dialog
            id={`se-rename-fav-dialog`}
            open={true}
            onClose={() => setOpenDialog(false)}
            onClick={(e) => e.stopPropagation()}
        >
            <DialogTitle className={dialogStyles.title}>Rename</DialogTitle>
            <DialogContent className={dialogStyles.content}>
                <TextField
                    sx={{
                        '& label.Mui-focused': {
                            color: 'var(--svg-icon-color)',
                        },
                        '& .MuiFilledInput-underline:after': {
                            borderBottomColor: 'var(--svg-icon-color)',
                        },
                    }}
                    autoFocus
                    label={'Name:'}
                    onChange={(e) => {
                        const name = e.target.value;
                        validationName(name);
                        setName(name);
                    }}
                    id={`se-rename-fav-input`}
                    type={`fav-name`}
                    fullWidth
                    error={nameError !== ''}
                    helperText={nameError !== '' ? nameError : ' '}
                    variant="filled"
                    value={name ? name : ''}
                    onKeyDown={(e) => handleKeyPress(e)}
                ></TextField>
            </DialogContent>
            <DialogActions>
                <Button id={`se-rename-fav-cancel`} className={dialogStyles.button} onClick={closeDialogs}>
                    Cancel
                </Button>
                <Button
                    disabled={nameError !== ''}
                    id={`se-rename-fav-submit`}
                    className={dialogStyles.button}
                    onClick={() => rename()}
                >
                    Apply
                </Button>
            </DialogActions>
        </Dialog>
    );
}

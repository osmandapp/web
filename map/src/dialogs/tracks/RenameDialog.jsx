import { Dialog } from '@material-ui/core';
import DialogTitle from '@mui/material/DialogTitle';
import dialogStyles from '../dialog.module.css';
import DialogContent from '@mui/material/DialogContent';
import { Button, TextField } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import React, { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import { DEFAULT_GROUP_NAME, findGroupByName, prepareName } from '../../manager/track/TracksManager';
import { renameFolder, renameTrack } from '../../manager/track/SaveTrackManager';
import { prepareFileName } from '../../util/Utils';
import { useTranslation } from 'react-i18next';

export default function RenameDialog({ setOpenDialog, track = null, group = null, setOpenActions }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [nameError, setNameError] = useState('');
    const [name, setName] = useState(track ? prepareName(track.name) : group.name);

    const groupByTrack = track && getTrackGroupByTrackName(track.name);
    const state = `${track ? 'track' : group ? 'group' : 'error'}`;

    const renameError = {
        title: 'Rename error',
        msg: 'Folder/track is not found.',
    };

    async function rename() {
        const newName = prepareFileName(name);
        if (validationName(newName)) {
            if (track) {
                let folder = groupByTrack.fullName === DEFAULT_GROUP_NAME ? '' : groupByTrack.fullName + '/';
                await renameTrack(track.name, folder, newName, ctx);
            } else if (group) {
                await renameFolder(group, newName, ctx);
            } else {
                ctx.setTrackErrorMsg(renameError);
            }
            if (setOpenActions) {
                setOpenActions(false);
            }
        }
    }

    function validationName(name) {
        if (track) {
            return validationTrackName(name);
        } else if (group) {
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

    function validationTrackName(name) {
        if (!name || name === '' || name.trim().length === 0) {
            setNameError('Empty track name.');
            return false;
        } else if (isTrackExist(name)) {
            setNameError('Track already exists.');
            return false;
        } else {
            setNameError('');
            return true;
        }
    }

    function validationFolderName(name) {
        if (!name || name === '' || name.trim().length === 0) {
            setNameError('Empty folder name.');
            return false;
        } else if (isFolderExist(name)) {
            setNameError('Folder already exists.');
            return false;
        } else {
            setNameError('');
            return true;
        }
    }

    function isTrackExist(name) {
        return groupByTrack.groupFiles.some((f) => prepareName(f.name) === name);
    }

    function isFolderExist(name) {
        return getParentFolder(group).subfolders.some((f) => f.name === name);
    }

    function getParentFolder(folder) {
        let parentName = folder.fullName.split('/').slice(0, -1).join('/');
        return findGroupByName(ctx.tracksGroups, parentName);
    }

    function getTrackGroupByTrackName(name) {
        const parts = name.split('/');
        if (parts.length > 0) {
            const pathToGroup = parts.slice(0, -1).join('/');
            return findGroupByName(ctx.tracksGroups, pathToGroup);
        } else {
            return ctx.tracksGroups[DEFAULT_GROUP_NAME];
        }
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
            id={`se-rename-${state}-dialog`}
            open={true}
            onClose={() => setOpenDialog(false)}
            onClick={(e) => e.stopPropagation()}
        >
            <DialogTitle className={dialogStyles.title}>{t('shared_string_rename')}</DialogTitle>
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
                    id={`se-rename-${state}-input`}
                    type={`${state}Name`}
                    fullWidth
                    error={nameError !== ''}
                    helperText={nameError !== '' ? nameError : ' '}
                    variant="filled"
                    value={name ? name : ''}
                    onKeyDown={(e) => handleKeyPress(e)}
                ></TextField>
            </DialogContent>
            <DialogActions>
                <Button className={dialogStyles.button} onClick={closeDialogs}>
                    {t('shared_string_cancel')}
                </Button>
                <Button
                    disabled={nameError !== ''}
                    id={`se-rename-${state}-submit`}
                    className={dialogStyles.button}
                    onClick={() => rename()}
                >
                    {t('shared_string_apply')}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

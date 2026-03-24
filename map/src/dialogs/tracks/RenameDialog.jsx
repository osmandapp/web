import DialogTitle from '@mui/material/DialogTitle';
import dialogStyles from '../dialog.module.css';
import DialogContent from '@mui/material/DialogContent';
import { Button, LinearProgress, TextField, Dialog } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import React, { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import { DEFAULT_GROUP_NAME, findGroupByName, GPX_FILE_EXT, prepareName } from '../../manager/track/TracksManager';
import { renameFolder, renameLocalTrack, renameTrack } from '../../manager/track/SaveTrackManager';
import { sanitizedFileName } from '../../util/Utils';
import { useTranslation } from 'react-i18next';

export default function RenameDialog({
    setOpenDialog,
    track = null,
    group = null,
    setOpenActions,
    isLocalTrack = false,
}) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [nameError, setNameError] = useState('');
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState(
        track ? (isLocalTrack ? prepareName(track.name, true) : prepareName(track.name)) : (group?.name ?? '')
    );

    const groupByTrack = track && !isLocalTrack ? getTrackGroupByTrackName(track.name, ctx) : null;
    const state = track ? 'track' : group ? 'group' : 'error';

    function validateName(value) {
        if (track) {
            const err = isLocalTrack
                ? validateLocalTrackName(value, track, ctx, t)
                : validateCloudTrackName(value, groupByTrack, t);
            setNameError(err);
            return err === '';
        }
        if (group) {
            const err = validateFolderName(value, group, ctx, t);
            setNameError(err);
            return err === '';
        }
        ctx.setTrackErrorMsg({
            title: t('web:rename_error_title'),
            msg: t('web:rename_item_not_found'),
        });
        setOpenDialog(false);
        setOpenActions?.(false);
        return false;
    }

    async function rename() {
        const sanitized = sanitizedFileName(name);
        if (!validateName(sanitized)) return;

        setLoading(true);
        try {
            if (track) {
                if (isLocalTrack) {
                    performRenameLocal(ctx, track, sanitized, setOpenDialog, t);
                } else {
                    await performRenameCloud(ctx, track, sanitized, groupByTrack);
                }
            } else if (group) {
                await renameFolder(group, sanitized, ctx);
            } else {
                ctx.setTrackErrorMsg({
                    title: t('web:rename_error_title'),
                    msg: t('web:rename_item_not_found'),
                });
            }
            setOpenActions?.(false);
        } finally {
            setLoading(false);
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
            {loading && <LinearProgress />}
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
                        const value = e.target.value;
                        validateName(value);
                        setName(value);
                    }}
                    id={`se-rename-${state}-input`}
                    type={`${state}Name`}
                    fullWidth
                    error={nameError !== ''}
                    helperText={nameError !== '' ? nameError : ' '}
                    variant="filled"
                    value={name || ''}
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

// --- Local track rename ---
function validateLocalTrackName(name, track, ctx, t) {
    if (!name?.trim()) return t('web:rename_empty_track_name');
    const candidate = prepareName(sanitizedFileName(name), true);
    if (ctx.localTracks.some((tr) => tr?.name && tr.name !== track.name && tr.name === candidate)) {
        return t('web:rename_track_already_exists');
    }
    return '';
}

function performRenameLocal(ctx, track, rawNewName, setOpenDialog, t) {
    const result = renameLocalTrack(ctx, track.name, rawNewName);
    if (result.error) {
        ctx.setTrackErrorMsg({ title: t('web:rename_error_title'), msg: result.error });
        return false;
    }
    setOpenDialog(false);
    return true;
}

// --- Cloud track rename ---
function getTrackGroupByTrackName(name, ctx) {
    const parts = name.split('/');
    const pathToGroup = parts.length > 1 ? parts.slice(0, -1).join('/') : '';
    return findGroupByName(ctx.tracksGroups, pathToGroup) ?? ctx.tracksGroups[DEFAULT_GROUP_NAME];
}

function validateCloudTrackName(name, groupByTrack, t) {
    if (!name?.trim()) return t('web:rename_empty_track_name');
    if (groupByTrack.groupFiles.some((f) => prepareName(f.name) === name)) {
        return t('web:rename_track_already_exists');
    }
    return '';
}

async function performRenameCloud(ctx, track, rawNewName, groupByTrack) {
    const folder = groupByTrack.fullName === DEFAULT_GROUP_NAME ? '' : groupByTrack.fullName + '/';
    const newFileName = folder + rawNewName + GPX_FILE_EXT;
    await renameTrack(track.name, folder, rawNewName, ctx);
    if (ctx.selectedGpxFile?.name === track.name) {
        ctx.setSelectedGpxFile((prev) => ({ ...prev, name: newFileName }));
    }
}

// --- Folder rename ---
function getParentFolder(folder, ctx) {
    const parentName = folder.fullName.split('/').slice(0, -1).join('/');
    return findGroupByName(ctx.tracksGroups, parentName);
}

function validateFolderName(name, group, ctx, t) {
    if (!name?.trim()) return t('web:rename_empty_folder_name');
    const parent = getParentFolder(group, ctx);
    if (parent?.subfolders?.some((f) => f.name === name)) return t('web:rename_folder_already_exists');
    return '';
}

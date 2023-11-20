import { Dialog } from '@material-ui/core';
import DialogTitle from '@mui/material/DialogTitle';
import dialogStyles from '../dialog.module.css';
import DialogContent from '@mui/material/DialogContent';
import { Button, TextField } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import React, { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import { DEFAULT_GROUP_NAME, findGroupByName, prepareName } from '../../manager/track/TracksManager';
import { renameTrack } from '../../manager/track/SaveTrackManager';

export default function RenameTrackDialog({ setOpenDialog, track, setOpenActions }) {
    const ctx = useContext(AppContext);

    const [trackNameError, setTrackNameError] = useState('');
    const [trackName, setTrackName] = useState(prepareName(track.name));

    const group = getTrackGroupByName(track.name);

    async function rename() {
        let folder = group.fullName === DEFAULT_GROUP_NAME ? '' : group.fullName + '/';
        await renameTrack(track.name, folder, trackName, ctx);
        if (setOpenActions) {
            setOpenActions(false);
        }
    }

    function validationTrackName(name) {
        if (!name || name === '' || name.trim().length === 0) {
            setTrackNameError('Empty track name.');
        } else if (isTrackExist(name)) {
            setTrackNameError('Track already exists.');
        } else {
            setTrackNameError('');
        }
    }

    function isTrackExist(name) {
        return group.groupFiles.some((f) => prepareName(f.name) === name);
    }

    function getTrackGroupByName(name) {
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

    return (
        <Dialog open={true} onClose={() => setOpenDialog(false)} onClick={(e) => e.stopPropagation()}>
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
                        validationTrackName(name);
                        setTrackName(name);
                    }}
                    id="se-rename-track-input"
                    type="trackName"
                    fullWidth
                    error={trackNameError !== ''}
                    helperText={trackNameError !== '' ? trackNameError : ' '}
                    variant="filled"
                    value={trackName ? trackName : ''}
                    onKeyDown={(e) => handleKeyPress(e)}
                ></TextField>
            </DialogContent>
            <DialogActions>
                <Button className={dialogStyles.button} onClick={() => setOpenDialog(false)}>
                    Cancel
                </Button>
                <Button
                    disabled={trackNameError !== ''}
                    id="se-rename-track-submit"
                    className={dialogStyles.button}
                    onClick={() => rename()}
                >
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
}

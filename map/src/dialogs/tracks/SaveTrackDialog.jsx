import React, { useContext, useState, useEffect } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { Alert, Autocomplete, Button, createFilterOptions, LinearProgress, TextField } from '@mui/material';
import AppContext, { isRouteTrack, OBJECT_TYPE_CLOUD_TRACK } from '../../context/AppContext';
import TracksManager, {
    DEFAULT_GROUP_NAME,
    getAllGroupNames,
    isTrackExists,
    validName,
} from '../../manager/track/TracksManager';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import { sanitizedFileName } from '../../util/Utils';
import { saveTrackToCloud } from '../../manager/track/SaveTrackManager';
import Dialog from '@mui/material/Dialog';
import LoginContext from '../../context/LoginContext';

export default function SaveTrackDialog() {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    const [folder, setFolder] = useState(getOldGroup);
    const [fileName, setFileName] = useState(ctx.selectedGpxFile.name);
    const [error, setError] = useState(false);
    const [existError, setExistError] = useState(false);
    const [existTrack, setExistTrack] = useState(false);
    const [process, setProcess] = useState(false);

    const cloudAutoSave = !!ctx.createTrack?.cloudAutoSave;
    const folders = getAllGroupNames(ctx.tracksGroups);

    function getOldGroup() {
        return ctx.selectedGpxFile.originalName
            ? TracksManager.getGroup(ctx.selectedGpxFile.originalName, false)
            : DEFAULT_GROUP_NAME;
    }

    const closeDialog = ({ uploaded }) => {
        setProcess(false);
        if (uploaded) {
            if (isRouteTrack(ctx)) {
                ctx.setCurrentObjectType(OBJECT_TYPE_CLOUD_TRACK);
            }
        }
        const updatedSelectedGpxFile = {
            ...ctx.selectedGpxFile,
            save: false,
        };
        ctx.setSelectedGpxFile(updatedSelectedGpxFile);
    };

    const getFolderName = (folder) => {
        if (folder === null) {
            return null;
        } else {
            if (typeof folder === 'string') {
                return folder;
            }
            if (folder.inputValue) {
                return folder.inputValue;
            }
            return folder.title;
        }
    };

    const filter = createFilterOptions();

    async function saveTrack() {
        const preparedName = sanitizedFileName(fileName);
        if (preparedName !== fileName) {
            setFileName(preparedName);
        }
        if (validName(preparedName)) {
            setProcess(true);
            ctx.setProcessingSaveTrack(true);
            if (!isTrackExists(preparedName, folder, null, ctx.tracksGroups)) {
                const uploaded = !!(await saveTrackToCloud({
                    ctx,
                    ltx,
                    currentFolder: getFolderName(folder),
                    fileName: preparedName,
                    type: TracksManager.GPX_FILE_TYPE,
                }));
                closeDialog({ uploaded });
            } else {
                setExistTrack(true);
            }
        } else {
            ctx.setProcessingSaveTrack(false);
            setError(true);
        }
    }

    async function confirmedSaveTrack() {
        const preparedName = sanitizedFileName(fileName);
        if (preparedName !== fileName) {
            setFileName(preparedName);
        }
        if (validName(preparedName)) {
            setProcess(true);
            const uploaded = !!(await saveTrackToCloud({
                ctx,
                ltx,
                currentFolder: getFolderName(folder),
                fileName: preparedName,
                type: TracksManager.GPX_FILE_TYPE,
            }));
            closeDialog({ uploaded });
        } else {
            setError(true);
        }
    }

    useEffect(() => {
        if (cloudAutoSave) {
            confirmedSaveTrack().then();
        }
    }, []);

    const DialogUpdateTrack = ({ open, close }) => {
        return (
            <Dialog open={open} onClose={close}>
                <DialogContentText sx={{ margin: '10px' }}>{`Do you want to update the track?`}</DialogContentText>
                <DialogActions>
                    <Button
                        onClick={() => {
                            setExistError(true);
                            setExistTrack(false);
                        }}
                    >
                        No
                    </Button>
                    <Button
                        id="se-overwrite-cloud-track"
                        onClick={() => {
                            setExistTrack(false);
                            confirmedSaveTrack().then();
                        }}
                    >
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };

    return (
        <div>
            <Dialog
                id={'se-save-track-dialog'}
                open={true}
                onClose={() => cloudAutoSave === false && closeDialog({ uploaded: false })}
            >
                {process ? <LinearProgress /> : <></>}
                {cloudAutoSave && <DialogContent>Uploading to cloud...</DialogContent>}
                {cloudAutoSave === false && (
                    <>
                        <DialogUpdateTrack open={existTrack} onClose={!existTrack} />
                        <DialogTitle>Save track</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Are you sure you want to save the track to the cloud tracks?
                            </DialogContentText>
                            {error && (
                                <Alert
                                    onClose={() => {
                                        setError(false);
                                    }}
                                    severity="warning"
                                >
                                    You tried to save the wrong name!
                                </Alert>
                            )}
                            {existError && (
                                <Alert
                                    onClose={() => {
                                        setExistError(false);
                                    }}
                                    severity="warning"
                                >
                                    Select other name!
                                </Alert>
                            )}
                            <TextField
                                autoFocus
                                margin="dense"
                                onChange={(e) => {
                                    setFileName(e.target.value);
                                }}
                                label="Name"
                                id="se-save-track-name"
                                type="fileName"
                                fullWidth
                                error={fileName === ''}
                                helperText={fileName === '' ? 'Empty name!' : ' '}
                                variant="standard"
                                value={fileName ? fileName : ''}
                            ></TextField>
                            <Autocomplete
                                value={folder}
                                onChange={(event, newValue) => {
                                    setFolder(newValue);
                                }}
                                filterOptions={(options, params) => {
                                    const filtered = filter(options, params);
                                    const { inputValue } = params;
                                    const isExisting = options.some((option) => inputValue === option.title);
                                    if (inputValue !== '' && !isExisting) {
                                        filtered.push({
                                            inputValue,
                                            title: `Add "${inputValue}"`,
                                        });
                                    }
                                    return filtered;
                                }}
                                selectOnFocus
                                clearOnBlur
                                handleHomeEndKeys
                                id="folder"
                                options={folders}
                                getOptionLabel={(option) => getFolderName(option)}
                                renderOption={(props, option) => {
                                    if (folders.length > 0 || option.inputValue) {
                                        if (option.title === '') {
                                            return null;
                                        }
                                        const { key, ...restProps } = props;
                                        return (
                                            <li key={key} {...restProps} id={`option-${option.title}`}>
                                                {option.title}
                                            </li>
                                        );
                                    }
                                    return null;
                                }}
                                freeSolo
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Folder"
                                        error={folder == null}
                                        helperText={folder == null ? 'Empty folder!' : ' '}
                                    />
                                )}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => closeDialog({ uploaded: false })}>Cancel</Button>
                            <Button
                                id="se-submit-save-to-cloud"
                                disabled={getFolderName(folder) === null || fileName === '' || error}
                                onClick={saveTrack}
                            >
                                Save
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </div>
    );
}

import React, { useContext, useState } from 'react';
import { DEFAULT_GROUP_NAME } from '../../manager/track/TracksManager';
import { sanitizedFileName } from '../../util/Utils';
import { saveEmptyTrack } from '../../manager/track/SaveTrackManager';
import DialogTitle from '@mui/material/DialogTitle';
import dialogStyles from '../dialog.module.css';
import DialogContent from '@mui/material/DialogContent';
import { TextField, Dialog } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import AppContext from '../../context/AppContext';
import { useTranslation } from 'react-i18next';
import PrimaryBtn from '../../frame/components/btns/PrimaryBtn';

export default function AddFolderDialog({ trackGroup, setOpenAddFolderDialog }) {
    const ctx = useContext(AppContext);

    const [folderNameError, setFolderNameError] = useState('');
    const [folderName, setFolderName] = useState('');

    const { t } = useTranslation();

    function isFolderExist(name) {
        return trackGroup?.subfolders.some((folder) => folder.name === name);
    }

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
        if (!trackGroup || trackGroup.fullName === DEFAULT_GROUP_NAME) {
            folderPart = '';
        } else {
            folderPart = `${trackGroup.fullName}/`;
        }
        const newFolderName = `${folderPart}${sanitizedFileName(folderName)}`;
        saveEmptyTrack(newFolderName, ctx).then();
        setOpenAddFolderDialog(false);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addFolder().then();
        }
    };

    return (
        <Dialog open={true} onClose={() => setOpenAddFolderDialog(false)}>
            <DialogTitle className={dialogStyles.title}>{t('add_new_folder')}</DialogTitle>
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
                    label={`${t('shared_string_name')}:`}
                    onChange={(e) => {
                        const name = e.target.value;
                        validationFolderName(name);
                        setFolderName(name);
                    }}
                    id="se-add-folder-input"
                    type="folderName"
                    fullWidth
                    error={folderNameError !== ''}
                    helperText={folderNameError !== '' ? folderNameError : ' '}
                    variant="filled"
                    value={folderName ?? ''}
                    onKeyDown={(e) => handleKeyPress(e)}
                ></TextField>
            </DialogContent>
            <DialogActions>
                <PrimaryBtn
                    action={() => setOpenAddFolderDialog(false)}
                    text={t('shared_string_cancel')}
                    span={true}
                    additionalStyle={{ ml: 2 }}
                />
                <PrimaryBtn
                    action={() => addFolder()}
                    text={t('shared_string_add')}
                    span={true}
                    id="se-add-folder-submit"
                    disabled={!folderName || folderNameError !== ''}
                    additionalStyle={{ mr: 2 }}
                />
            </DialogActions>
        </Dialog>
    );
}

import React, { useContext, useState, useMemo } from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    LinearProgress,
    List,
    ListItemButton,
    ListItemText,
    Popover,
    TextField,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import AppContext from '../../../context/AppContext';
import MarkerOptions from '../../../map/markers/MarkerOptions';
import FavoritesManager, { decodeGroupNameFromFile, saveFavoriteGroup } from '../../../manager/FavoritesManager';
import { sanitizedFileName } from '../../../util/Utils';
import AppRadio from '../../../frame/components/items/AppRadio';
import dialogStyles from '../../../dialogs/dialog.module.css';
import itemStyles from '../../../frame/components/items/items.module.css';
import styles from './addFolderDialog.module.css';
import { groupTreeToList } from './FavoriteGroupTree';
import AddNewGroupDialog from './AddNewGroupDialog';

export default function AddFolderDialog({ dialogOpen, setDialogOpen, parentGroup, groupTree, onCreated }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const groups = ctx.favorites.groups;
    const defaultGroup = groups?.find((g) => g.name === FavoritesManager.DEFAULT_GROUP_NAME) ?? null;

    const [folderName, setFolderName] = useState('');
    const [folderNameError, setFolderNameError] = useState('');
    const [selectedParent, setSelectedParent] = useState(parentGroup ?? defaultGroup);
    const [locationAnchorEl, setLocationAnchorEl] = useState(null);
    const [process, setProcess] = useState(false);
    const [advancedOpen, setAdvancedOpen] = useState(false);

    const flatGroups = useMemo(() => groupTreeToList(groupTree ?? []), [groupTree]);

    const locationOpen = Boolean(locationAnchorEl);
    const parentDisplayName = getDisplayName(selectedParent, t);
    const canSave = folderName.trim() !== '' && !process;

    function handleClose() {
        setDialogOpen(false);
    }

    function validateName(name) {
        if (!name || name.trim() === '') {
            setFolderNameError(t('web:rename_empty_folder_name'));
            return false;
        }
        const fullPath = buildFullPath(selectedParent, sanitizedFileName(name.trim()));
        if (groups?.some((g) => g.name === fullPath)) {
            setFolderNameError(t('web:folder_already_exists'));
            return false;
        }
        setFolderNameError('');
        return true;
    }

    function handleNameChange(e) {
        const val = e.target.value;
        setFolderName(val);
        if (folderNameError) validateName(val);
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSave();
        }
    }

    async function handleSave() {
        if (!validateName(folderName)) return;

        setProcess(true);
        const fullPath = buildFullPath(selectedParent, sanitizedFileName(folderName.trim()));
        const pointsGroups = {
            [fullPath]: {
                name: fullPath,
                iconName: MarkerOptions.DEFAULT_WPT_ICON,
                backgroundType: MarkerOptions.BACKGROUND_WPT_SHAPE_CIRCLE,
                color: MarkerOptions.DEFAULT_WPT_COLOR,
                points: [],
            },
        };

        try {
            const group = await saveFavoriteGroup({ pointsGroups }, fullPath, ctx);
            if (group) {
                const decodedName = decodeGroupNameFromFile(group.name);
                onCreated?.({ ...group, name: decodedName });
                setDialogOpen(false);
            }
        } finally {
            setProcess(false);
        }
    }

    return (
        <>
            <Dialog
                id="se-add-fav-folder-dialog"
                className={dialogStyles.dialog}
                open={dialogOpen}
                onClose={handleClose}
                PaperProps={{ sx: { overflow: 'visible' } }}
            >
                {process && <LinearProgress />}
                <DialogTitle className={dialogStyles.title}>{t('add_new_folder')}</DialogTitle>
                <DialogContent className={dialogStyles.content}>
                    <TextField
                        id="se-add-fav-folder-name-input"
                        autoFocus
                        fullWidth
                        variant="filled"
                        label={t('web:fav_folder_name')}
                        placeholder={t('add_new_folder')}
                        value={folderName}
                        onChange={handleNameChange}
                        onKeyDown={handleKeyDown}
                        error={folderNameError !== ''}
                        helperText={folderNameError || undefined}
                    />
                    <TextField
                        id="se-add-fav-folder-location"
                        fullWidth
                        variant="filled"
                        label={t('web:fav_folder_location')}
                        value={parentDisplayName}
                        onClick={(e) => setLocationAnchorEl(locationAnchorEl ? null : e.currentTarget)}
                        inputProps={{ readOnly: true, style: { cursor: 'pointer' } }}
                        InputLabelProps={{ shrink: true }}
                        InputProps={{
                            endAdornment: (
                                <ExpandMoreIcon
                                    sx={{
                                        fill: 'var(--svg-icon-color)',
                                        transition: 'transform 0.2s',
                                        transform: locationOpen ? 'rotate(180deg)' : 'none',
                                    }}
                                />
                            ),
                        }}
                        className={styles.locationField}
                    />
                    <Popover
                        open={locationOpen}
                        anchorEl={locationAnchorEl}
                        onClose={() => setLocationAnchorEl(null)}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                        disableAutoFocus
                        disableEnforceFocus
                        disablePortal
                        transitionDuration={0}
                        slotProps={{
                            paper: {
                                sx: {
                                    width: locationAnchorEl?.offsetWidth,
                                    maxHeight: 380,
                                    mt: '10px',
                                },
                            },
                        }}
                    >
                        <List dense disablePadding>
                            {flatGroups.map((item, idx) => {
                                const effectiveGroup = item.group ?? { name: item.fullName };
                                const isSelected =
                                    selectedParent?.name === item.fullName ||
                                    (!selectedParent && item.fullName === FavoritesManager.DEFAULT_GROUP_NAME);
                                const showDivider = idx > 0 && item.level === 0;
                                const prefix = item.level >= 1 ? '↳ ' : '';

                                return (
                                    <Box key={item.fullName}>
                                        {showDivider && <Divider />}
                                        <ListItemButton
                                            selected={isSelected}
                                            className={styles.dropdownItem}
                                            onClick={() => {
                                                setSelectedParent(effectiveGroup);
                                                setLocationAnchorEl(null);
                                            }}
                                        >
                                            <ListItemText
                                                primary={`${prefix}${item.displayName}`}
                                                primaryTypographyProps={{
                                                    noWrap: true,
                                                    className: styles.dropdownItemText,
                                                }}
                                            />
                                            <Box className={itemStyles.selectRadioControl}>
                                                <AppRadio
                                                    checked={isSelected}
                                                    onChange={() => {
                                                        setSelectedParent(effectiveGroup);
                                                        setLocationAnchorEl(null);
                                                    }}
                                                    onClick={(e) => e.stopPropagation()}
                                                />
                                            </Box>
                                        </ListItemButton>
                                    </Box>
                                );
                            })}
                        </List>
                    </Popover>
                </DialogContent>
                <DialogActions className={styles.dialogActions}>
                    <Button className={styles.appearanceBtn} onClick={() => setAdvancedOpen(true)}>
                        {t('web:shared_string_advanced')}
                    </Button>
                    <Box className={styles.dialogActionsRight}>
                        <Button className={dialogStyles.button} onClick={handleClose}>
                            {t('shared_string_cancel')}
                        </Button>
                        <Button
                            id="se-add-fav-folder-save-btn"
                            className={dialogStyles.button}
                            onClick={handleSave}
                            disabled={!canSave}
                        >
                            {t('web:shared_string_save')}
                        </Button>
                    </Box>
                </DialogActions>
            </Dialog>
            {advancedOpen && (
                <AddNewGroupDialog
                    dialogOpen={advancedOpen}
                    setDialogOpen={setAdvancedOpen}
                    setFavoriteGroup={(group) => {
                        onCreated?.(group);
                        setDialogOpen(false);
                    }}
                />
            )}
        </>
    );
}

function buildFullPath(parentGroup, name) {
    if (!parentGroup || parentGroup.name === FavoritesManager.DEFAULT_GROUP_NAME) {
        return name;
    }
    return `${parentGroup.name}/${name}`;
}

function getDisplayName(group, t) {
    if (!group || group.name === FavoritesManager.DEFAULT_GROUP_NAME) return t('shared_string_my_favorites');
    const parts = group.name.split('/');
    return parts[parts.length - 1];
}

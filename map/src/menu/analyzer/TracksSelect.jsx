import React, { useContext, useEffect, useState } from 'react';
import { DEFAULT_GROUP_NAME, getAllGroupNames } from '../../manager/track/TracksManager';
import AppContext from '../../context/AppContext';
import {
    Box,
    FormControl,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Select,
    Switch,
    Checkbox,
    Typography,
} from '@mui/material';
import styles from './trackanalyzer.module.css';
import { ReactComponent as AllTracksIcon } from '../../assets/icons/ic_action_folder.svg';
import { ReactComponent as FolderIcon } from '../../assets/icons/ic_action_folder.svg';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { ALL_GROUP_MARKER } from './TrackAnalyzerMenu';
import { useTranslation } from 'react-i18next';

const DEFAULT_GROUP_MARKER = '_default_';

export default function TrackSelect({ setTracksFolders }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [, height] = useWindowSize();

    const [groups, setGroups] = useState(null);

    const [selectedGroupsNames, setSelectedGroupsNames] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    useEffect(() => {
        const folders = getAllGroupNames(ctx.tracksGroups);
        const defaultGroup = getDefaultGroup(ctx.tracksGroups);
        setGroups(defaultGroup ? [defaultGroup, ...folders] : folders);
    }, [ctx.tracksGroups]);

    const handleSelectAll = (checked) => {
        setSelectAll(checked);
        if (checked) {
            const allGroups = [DEFAULT_GROUP_MARKER, ...getAllGroupNames(ctx.tracksGroups).map((group) => group.title)];
            setSelectedGroupsNames(allGroups);
            setTracksFolders([ALL_GROUP_MARKER]);
        } else {
            setSelectedGroupsNames([]);
            setTracksFolders([]);
        }
    };

    const handleToggleGroup = (groupName) => {
        let updatedGroups;
        if (selectedGroupsNames.includes(groupName)) {
            updatedGroups = selectedGroupsNames.filter((group) => group !== groupName);
        } else {
            updatedGroups = [...selectedGroupsNames, groupName];
        }
        if (updatedGroups.length === Object.values(groups).length + 1) {
            setSelectAll(true);
            setSelectedGroupsNames([ALL_GROUP_MARKER]);
            setTracksFolders([ALL_GROUP_MARKER]);
        } else {
            setSelectAll(false);
            setSelectedGroupsNames(updatedGroups);
            setTracksFolders(updatedGroups.length > 0 ? updatedGroups : []);
        }
    };

    function getDefaultGroup(groups) {
        const defaultG = groups.find((group) => group.fullName === DEFAULT_GROUP_NAME);
        if (defaultG) {
            return {
                title: DEFAULT_GROUP_MARKER,
                size: defaultG.files.length,
            };
        }
        return null;
    }

    function getSize(selectedGroupsNames) {
        let sum = 0;
        selectedGroupsNames.forEach((name) => {
            const size = groups.find((group) => group.title === name).size;
            sum += size;
        });
        return sum;
    }

    return (
        <>
            {groups !== null && (
                <Box sx={{ mx: 2, my: 2 }}>
                    <FormControl fullWidth>
                        <Select
                            variant="filled"
                            sx={{
                                '& .MuiFilledInput-input': {
                                    padding: '8px 0',
                                    backgroundColor: 'transparent !important',
                                },
                                height: '48px',
                                '&::before': {
                                    borderBottom: 'none',
                                },
                                '&::after': {
                                    borderBottom: 'none',
                                },
                                '&:hover:not(.Mui-disabled)::before': {
                                    borderBottom: 'none',
                                },
                            }}
                            displayEmpty
                            value={selectedGroupsNames}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return (
                                        <MenuItem className={styles.tracksSelectItem}>
                                            <ListItemIcon className={styles.icon}>
                                                <FolderIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <Typography variant="inherit" noWrap>
                                                    Select tracks
                                                </Typography>
                                            </ListItemText>
                                        </MenuItem>
                                    );
                                }
                                return (
                                    <MenuItem className={styles.tracksSelectItem}>
                                        <ListItemIcon className={styles.iconSelected}>
                                            <FolderIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography variant="inherit" noWrap>
                                                {`${t('shared_string_tracks')}: ${getSize(selected)}`}
                                            </Typography>
                                        </ListItemText>
                                    </MenuItem>
                                );
                            }}
                            multiple
                            MenuProps={{
                                anchorOrigin: {
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                },
                                transformOrigin: {
                                    vertical: 'top',
                                    horizontal: 'left',
                                },
                                PaperProps: {
                                    style: {
                                        marginTop: '8px',
                                        maxWidth: '360px',
                                        maxHeight: height / 2,
                                    },
                                },
                            }}
                        >
                            <Box>
                                <MenuItem className={styles.tracksSelectItem}>
                                    <ListItemIcon className={styles.icon}>
                                        <AllTracksIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <Typography variant="inherit" noWrap>
                                                {t('shared_string_all_tracks')}
                                            </Typography>
                                            <Switch
                                                checked={selectAll}
                                                onChange={(e) => handleSelectAll(e.target.checked)}
                                                onClick={(e) => e.stopPropagation()}
                                            />
                                        </div>
                                    </ListItemText>
                                </MenuItem>
                                {groups.map((folder) => (
                                    <MenuItem className={styles.tracksSelectItem} key={folder.title}>
                                        <ListItemIcon
                                            className={
                                                selectedGroupsNames.includes(folder.title)
                                                    ? styles.iconSelected
                                                    : styles.icon
                                            }
                                        >
                                            <FolderIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                }}
                                            >
                                                <Typography variant="inherit" noWrap>
                                                    {folder.title === DEFAULT_GROUP_MARKER ? 'Tracks' : folder.title}
                                                </Typography>
                                                <Checkbox
                                                    checked={selectedGroupsNames.includes(folder.title)}
                                                    onChange={() => handleToggleGroup(folder.title)}
                                                    onClick={(e) => e.stopPropagation()}
                                                />
                                            </div>
                                        </ListItemText>
                                    </MenuItem>
                                ))}
                            </Box>
                        </Select>
                    </FormControl>
                </Box>
            )}
        </>
    );
}

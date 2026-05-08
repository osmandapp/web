import React, { useState, useMemo, useContext } from 'react';
import { Box, Divider, IconButton, List, ListItemButton, ListItemIcon, Radio, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AppContext from '../../../../context/AppContext';
import SecondaryMenuDrawer from '../../../../frame/components/other/SecondaryMenuDrawer';
import HeaderWithUnderline from '../../../../frame/components/header/HeaderWithUnderline';
import FavoritesManager from '../../../../manager/FavoritesManager';
import { hexToRgba } from '../../../../util/ColorUtil';
import { buildGroupTree } from '../FavoriteGroupTree';
import { ReactComponent as FolderIcon } from '../../../../assets/icons/ic_action_folder.svg';
import { ReactComponent as FolderAddIcon } from '../../../../assets/icons/ic_action_folder_add_v2.svg';
import ThickDivider from '../../../../frame/components/dividers/ThickDivider';
import AddFolderDialog from '../AddFolderDialog';
import isEmpty from 'lodash-es/isEmpty';
import values from 'lodash-es/values';
import styles from './folderSelectionPanel.module.css';
import menuStyles from '../../../../menu/trackfavmenu.module.css';

export default function FolderSelectionPanel({ selectedGroup, defaultGroup, isTrackWpt, onSelect }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const groups = isTrackWpt ? ctx.selectedGpxFile?.pointsGroups : ctx.favorites.groups;

    const [pendingGroup, setPendingGroup] = useState(selectedGroup);
    const [expanded, setExpanded] = useState(() => {
        const set = new Set();
        if (selectedGroup?.name?.includes('/')) {
            const parts = selectedGroup.name.split('/');
            for (let i = 1; i < parts.length; i++) {
                set.add(parts.slice(0, i).join('/'));
            }
        }
        return set;
    });
    const [hoveredItem, setHoveredItem] = useState(null);
    const [addFolderDialogOpen, setAddFolderDialogOpen] = useState(false);
    const [addFolderParent, setAddFolderParent] = useState(null);

    const groupTree = useMemo(() => buildTree(groups, isTrackWpt, t), [groups, isTrackWpt, t]);
    function toggleExpanded(name, e) {
        e.stopPropagation();
        setExpanded((prev) => {
            const next = new Set(prev);
            next.has(name) ? next.delete(name) : next.add(name);
            return next;
        });
    }

    function handleBack() {
        onSelect(pendingGroup);
    }

    function handleAddFolder(parentGroup) {
        setAddFolderParent(parentGroup ?? null);
        setAddFolderDialogOpen(true);
    }

    function handleAddFolderRoot() {
        handleAddFolder(null);
    }

    function isSelected(folder) {
        const sel = pendingGroup;
        if (!sel) {
            return folder.name === defaultGroup || folder.name === FavoritesManager.DEFAULT_GROUP_NAME;
        }
        if (sel.id !== undefined) return sel.id === folder.group?.id;
        return sel.name === folder.name;
    }

    function renderFolder(folder, level) {
        const hasSubfolders = folder.subfolders?.length > 0;
        const isOpen = expanded.has(folder.name);
        const selected = isSelected(folder);
        const isHovered = hoveredItem === folder.name;
        const isVirtual = folder.virtual === true;

        return (
            <Box>
                <ListItemButton
                    id={`se-fav-group-item-${folder.name}`}
                    className={styles.folderItem}
                    style={{ paddingLeft: 4 + level * 24 }}
                    onMouseEnter={() => setHoveredItem(folder.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={() => !isVirtual && setPendingGroup(folder.group ?? { name: folder.name })}
                    selected={selected}
                >
                    <Box className={styles.arrowBox}>
                        {hasSubfolders && (
                            <IconButton
                                size="small"
                                className={styles.arrowBtn}
                                sx={{
                                    color: isOpen ? 'var(--selected-color)' : 'var(--svg-icon-color)',
                                    '&:hover': {
                                        color: 'var(--selected-color)',
                                        backgroundColor: '#f5f5f5',
                                    },
                                }}
                                onClick={(e) => toggleExpanded(folder.name, e)}
                            >
                                {isOpen ? (
                                    <KeyboardArrowDownIcon className={styles.arrowIcon} />
                                ) : (
                                    <KeyboardArrowRightIcon className={styles.arrowIcon} />
                                )}
                            </IconButton>
                        )}
                    </Box>
                    <ListItemIcon className={styles.folderIconBox}>
                        <FolderIcon className={styles.folderSvg} style={{ fill: folder.color ?? '#888888' }} />
                    </ListItemIcon>
                    <Typography noWrap className={selected ? styles.folderNameSelected : styles.folderName}>
                        {folder.displayName}
                    </Typography>
                    {isHovered && !isTrackWpt ? (
                        <IconButton
                            onClick={(e) => {
                                e.stopPropagation();
                                handleAddFolder(folder.group);
                            }}
                            title={t('add_new_folder')}
                            className={styles.addFolderInsideBtn}
                        >
                            <FolderAddIcon />
                        </IconButton>
                    ) : (
                        !isVirtual &&
                        folder.size != null && <Typography className={styles.folderCount}>{folder.size}</Typography>
                    )}
                    {!isVirtual ? (
                        <Radio
                            checked={selected}
                            onChange={() => setPendingGroup(folder.group ?? { name: folder.name })}
                            onClick={(e) => e.stopPropagation()}
                            size="small"
                            className={styles.radio}
                        />
                    ) : (
                        <Box className={styles.radioPlaceholder} />
                    )}
                </ListItemButton>
                {hasSubfolders &&
                    isOpen &&
                    folder.subfolders.map((subfolder, idx) => (
                        <React.Fragment key={subfolder.name}>
                            {idx > 0 && <Divider />}
                            {renderFolder(subfolder, level + 1)}
                        </React.Fragment>
                    ))}
            </Box>
        );
    }

    return (
        <>
            <SecondaryMenuDrawer onClose={handleBack}>
                <Box className={styles.panel}>
                    <HeaderWithUnderline
                        title={t('folder')}
                        onClose={handleBack}
                        showBackButton
                        appBarProps={{ id: 'se-back-folder-selection-panel' }}
                        rightContent={
                            !isTrackWpt ? (
                                <IconButton
                                    id="se-add-folder-btn"
                                    className={menuStyles.appBarIcon}
                                    onClick={handleAddFolderRoot}
                                    size="small"
                                >
                                    <FolderAddIcon />
                                </IconButton>
                            ) : null
                        }
                    />
                    <List className={styles.list} disablePadding>
                        {groupTree.map((folder) => (
                            <React.Fragment key={folder.name}>
                                <ThickDivider />
                                {renderFolder(folder, 0)}
                            </React.Fragment>
                        ))}
                    </List>
                </Box>
            </SecondaryMenuDrawer>
            {addFolderDialogOpen && (
                <AddFolderDialog
                    dialogOpen={addFolderDialogOpen}
                    setDialogOpen={setAddFolderDialogOpen}
                    parentGroup={addFolderParent}
                    groupTree={groupTree}
                    onCreated={(newGroup) => {
                        setPendingGroup(newGroup);
                        if (addFolderParent) {
                            setExpanded((prev) => new Set([...prev, addFolderParent.name]));
                        }
                    }}
                />
            )}
        </>
    );
}

function buildTree(groups, isTrackWpt, t) {
    if (!groups || (Array.isArray(groups) && groups.length === 0) || isEmpty(groups)) {
        return [];
    }

    if (isTrackWpt) {
        return values(groups).map((g) => ({
            name: g.name ?? '',
            displayName: g.name === '' || g.name === undefined ? t('shared_string_my_favorites') : g.name,
            color: g.color ? hexToRgba(g.color) : undefined,
            size: g.points?.length ?? 0,
            group: g,
            subfolders: [],
        }));
    }

    return buildGroupTree(groups, t);
}

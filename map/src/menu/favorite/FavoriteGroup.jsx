import { CircularProgress, IconButton, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../../context/AppContext';
import FavoritesManager from '../../manager/FavoritesManager';
import styles from '../tracks/trackmenu.module.css';
import ActionsMenu from '../actions/ActionsMenu';
import { ReactComponent as FolderIcon } from '../../assets/icons/ic_action_folder.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/ic_overflow_menu_white.svg';
import { ReactComponent as MenuIconHover } from '../../assets/icons/ic_overflow_menu_with_background.svg';
import FavoriteGroupActions from '../actions/FavoriteGroupActions';

export default function FavoriteGroup({ index, group }) {
    const ctx = useContext(AppContext);

    const [openActions, setOpenActions] = useState(false);
    const [processDownload, setProcessDownload] = useState(false);
    const [hoverIconInfo, setHoverIconInfo] = useState(false);
    const anchorEl = useRef(null);

    useEffect(() => {
        if (ctx.favorites[group.name]?.markers && group.name === ctx.selectedGpxFile.file?.name) {
            ctx.selectedGpxFile.file.markers = ctx.favorites[group.name].markers;
            ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
        }
    }, [ctx.favorites, ctx.setFavorites]);

    function getSize() {
        return FavoritesManager.getGroupSize(group) > 0 ? `${FavoritesManager.getGroupSize(group)} points` : 'empty';
    }

    return (
        <>
            <MenuItem
                className={styles.group}
                key={'group' + group.name + index}
                id={'se-menu-fav-' + group.name}
                divider
                onClick={(e) => {
                    if (e.target !== 'path') {
                        ctx.setOpenGroups((prevState) => [...prevState, group]);
                    }
                }}
            >
                <ListItemIcon className={styles.icon}>
                    <FolderIcon
                        style={{ fill: group.name && FavoritesManager.getColorGroup(ctx, group.name, false) }}
                    />
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="inherit" className={styles.groupName} noWrap>
                        {group.name}
                    </Typography>
                    <Typography variant="body2" className={styles.groupInfo} noWrap>
                        {getSize()}
                    </Typography>
                </ListItemText>
                <IconButton
                    className={styles.sortIcon}
                    id={`se-folder-actions-button-${group.name}`}
                    onMouseEnter={() => setHoverIconInfo(true)}
                    onMouseLeave={() => setHoverIconInfo(false)}
                    onClick={(e) => {
                        setOpenActions(true);
                        ctx.setOpenedPopper(anchorEl);
                        e.stopPropagation();
                    }}
                    ref={anchorEl}
                >
                    {processDownload ? (
                        <CircularProgress size={24} />
                    ) : hoverIconInfo ? (
                        <MenuIconHover />
                    ) : (
                        <MenuIcon />
                    )}
                </IconButton>
            </MenuItem>
            <ActionsMenu
                open={openActions}
                setOpen={setOpenActions}
                anchorEl={anchorEl}
                actions={
                    <FavoriteGroupActions
                        group={group}
                        setOpenActions={setOpenActions}
                        setProcessDownload={setProcessDownload}
                    />
                }
            />
        </>
    );
}

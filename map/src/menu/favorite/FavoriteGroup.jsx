import { CircularProgress, Divider, IconButton, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../../context/AppContext';
import FavoritesManager from '../../manager/FavoritesManager';
import styles from '../trackfavmenu.module.css';
import ActionsMenu from '../actions/ActionsMenu';
import { ReactComponent as FolderIcon } from '../../assets/icons/ic_action_folder.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/ic_overflow_menu_white.svg';
import { ReactComponent as MenuIconHover } from '../../assets/icons/ic_overflow_menu_with_background.svg';
import { ReactComponent as FolderHiddenIcon } from '../../assets/icons/ic_action_folder_hidden.svg';
import FavoriteGroupActions from '../actions/FavoriteGroupActions';
import MenuItemsTitle from '../components/MenuItemsTitle';

export default function FavoriteGroup({ index, group }) {
    const ctx = useContext(AppContext);

    const [openActions, setOpenActions] = useState(false);
    const [processDownload, setProcessDownload] = useState(false);
    const [hoverIconInfo, setHoverIconInfo] = useState(false);
    const anchorEl = useRef(null);

    useEffect(() => {
        if (ctx.favorites.mapObjs[group.name]?.markers && group.name === ctx.selectedGpxFile.file?.name) {
            ctx.selectedGpxFile.file.markers = ctx.favorites.mapObjs[group.name].markers;
            ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
        }
    }, [ctx.favorites]);

    function getSize() {
        return FavoritesManager.getGroupSize(group) > 0 ? `${FavoritesManager.getGroupSize(group)} points` : 'empty';
    }

    function getLastModificationDate() {
        const currentDate = new Date(group.clienttimems);
        const month = currentDate.toLocaleString('default', { month: 'short' });
        const day = currentDate.getDate();
        return `${month} ${day}`;
    }

    return (
        <>
            <MenuItem
                className={styles.group}
                key={'group' + group.name + index}
                id={'se-menu-fav-' + group.name}
                onClick={(e) => {
                    if (e.target !== 'path') {
                        ctx.setOpenGroups((prevState) => [...prevState, group]);
                        ctx.setZoomToFavGroup(group.name);
                    }
                }}
            >
                <ListItemIcon className={styles.icon}>
                    {group.hidden === 'true' ? (
                        <FolderHiddenIcon id={'se-fav-menu-icon-hidden-' + group.name} />
                    ) : (
                        <FolderIcon
                            style={{ fill: group.name && FavoritesManager.getColorGroup(ctx, group.name, false) }}
                        />
                    )}
                </ListItemIcon>
                <ListItemText>
                    <MenuItemsTitle name={group.name} maxLines={2} />
                    <Typography variant="body2" className={styles.groupInfo} noWrap>
                        {`${getLastModificationDate()}, ${getSize()}`}
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
                        <CircularProgress id={'se-progress'} size={24} />
                    ) : hoverIconInfo ? (
                        <MenuIconHover />
                    ) : (
                        <MenuIcon />
                    )}
                </IconButton>
            </MenuItem>
            <Divider className={styles.dividerItem} />
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

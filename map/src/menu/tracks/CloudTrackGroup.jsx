import { IconButton, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../../context/AppContext';
import { ReactComponent as FolderIcon } from '../../assets/icons/ic_action_folder.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/ic_overflow_menu_white.svg';
import { ReactComponent as MenuIconHover } from '../../assets/icons/ic_overflow_menu_with_background.svg';
import styles from './trackmenu.module.css';
import GroupActions from './actions/GroupActions';
import ActionsMenu from './actions/ActionsMenu';

export default function CloudTrackGroup({ index, group }) {
    const ctx = useContext(AppContext);

    const [hoverIconInfo, setHoverIconInfo] = useState(false);
    const [openActions, setOpenActions] = useState(false);
    const anchorEl = useRef(null);

    useEffect(() => {
        if (ctx.openedPopper && ctx.openedPopper !== anchorEl) {
            setOpenActions(false);
        }
    }, [ctx.openedPopper]);

    return (
        <>
            <MenuItem
                className={styles.group}
                key={'group' + group.name + index}
                id={'se-menu-cloud-' + group.name}
                divider
                onClick={(e) => {
                    if (e.target !== 'path') {
                        ctx.setOpenTrackGroups((prevState) => [...prevState, group]);
                    }
                }}
            >
                <ListItemIcon className={styles.icon}>
                    <FolderIcon />
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="inherit" className={styles.groupName} noWrap>
                        {group.name}
                    </Typography>
                    <Typography variant="body2" className={styles.groupInfo} noWrap>
                        {`${group.lastModifiedData.split(',')[0]}, tracks ${group.files.length}`}
                    </Typography>
                </ListItemText>
                <IconButton
                    className={styles.sortIcon}
                    onMouseEnter={() => setHoverIconInfo(true)}
                    onMouseLeave={() => setHoverIconInfo(false)}
                    onClick={(e) => {
                        setOpenActions(true);
                        ctx.setOpenedPopper(anchorEl);
                        e.stopPropagation();
                    }}
                    ref={anchorEl}
                >
                    {hoverIconInfo ? <MenuIconHover /> : <MenuIcon />}
                </IconButton>
            </MenuItem>
            <ActionsMenu
                open={openActions}
                setOpen={setOpenActions}
                anchorEl={anchorEl}
                actions={<GroupActions group={group} setOpenActions={setOpenActions} />}
            />
        </>
    );
}

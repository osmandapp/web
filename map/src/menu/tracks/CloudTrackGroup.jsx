import { CircularProgress, Divider, IconButton, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../../context/AppContext';
import { ReactComponent as FolderIcon } from '../../assets/icons/ic_action_folder.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/ic_overflow_menu_white.svg';
import { ReactComponent as MenuIconHover } from '../../assets/icons/ic_overflow_menu_with_background.svg';
import styles from '../trackfavmenu.module.css';
import GroupActions from '../actions/GroupActions';
import ActionsMenu from '../actions/ActionsMenu';
import MenuItemWithLines from '../components/MenuItemWithLines';
import { Tooltip } from '@mui/material/';
import { useTranslation } from 'react-i18next';
import { getLocalizedTimeUpdate } from '../settings/SettingsMenu';

export default function CloudTrackGroup({ index, group }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [hoverIconInfo, setHoverIconInfo] = useState(false);
    const [openActions, setOpenActions] = useState(false);
    const [processDownload, setProcessDownload] = useState(false);
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
                onClick={(e) => {
                    if (e.target !== 'path') {
                        ctx.setOpenGroups((prevState) => [...prevState, group]);
                    }
                }}
            >
                <ListItemIcon className={styles.icon}>
                    <FolderIcon />
                </ListItemIcon>
                <ListItemText>
                    <MenuItemWithLines name={group.name} maxLines={2} />
                    <Typography variant="body2" className={styles.groupInfo} noWrap>
                        {`${getLocalizedTimeUpdate(group.lastModifiedData)}, ${t('shared_string_gpx_files').toLowerCase()} ${group.realSize}`}
                    </Typography>
                </ListItemText>
                <Tooltip key={'action_menu_group'} title={'Menu'} arrow placement="bottom-end">
                    <IconButton
                        id={`se-folder-actions-button-${group.name}`}
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
                        {processDownload ? (
                            <CircularProgress size={24} />
                        ) : hoverIconInfo ? (
                            <MenuIconHover />
                        ) : (
                            <MenuIcon />
                        )}
                    </IconButton>
                </Tooltip>
            </MenuItem>
            <Divider className={styles.dividerItem} />
            <ActionsMenu
                open={openActions}
                setOpen={setOpenActions}
                anchorEl={anchorEl}
                actions={
                    <GroupActions
                        group={group}
                        setOpenActions={setOpenActions}
                        setProcessDownload={setProcessDownload}
                    />
                }
            />
        </>
    );
}

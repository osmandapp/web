import {
    CircularProgress,
    Divider,
    IconButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Tooltip,
    Typography,
} from '@mui/material';
import styles from '../trackfavmenu.module.css';
import MenuItemWithLines from './MenuItemWithLines';
import ActionsMenu from '../actions/ActionsMenu';
import React, { useContext, useRef, useState } from 'react';
import { ReactComponent as ShareIcon } from '../../assets/icons/ic_action_folder_share.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/ic_overflow_menu_white.svg';
import { ReactComponent as MenuIconHover } from '../../assets/icons/ic_overflow_menu_with_background.svg';
import { useTranslation } from 'react-i18next';
import AppContext from '../../context/AppContext';
import SmartFolderActions from '../actions/SmartFolderActions';

const types = {
    share: {
        name: 'web:shared_with_me',
        icon: <ShareIcon />,
        subtypes: {
            track: {
                substring: 'shared_string_tracks',
            },
            favorite: {},
        },
    },
};

export default function SmartFolder({ type, subtype, files }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [hoverIconInfo, setHoverIconInfo] = useState(false);
    const [processDownload, setProcessDownload] = useState(false);
    const [openActions, setOpenActions] = useState(false);

    const anchorEl = useRef(null);

    const folder = types[type] ?? types.share;
    const group = folder.subtypes[subtype] ?? folder.subtypes.track;

    return (
        <>
            <MenuItem className={styles.group} key={'smartFolder' + type + index}>
                <ListItemIcon className={styles.icon}>{folder.icon}</ListItemIcon>
                <ListItemText>
                    <MenuItemWithLines name={t(folder.name)} maxLines={2} />
                    <Typography variant="body2" className={styles.groupInfo} noWrap>
                        {`${t(group.substring)} ${files.length}`}
                    </Typography>
                </ListItemText>
                <Tooltip key={'action_menu_group'} title={'Menu'} arrow placement="bottom-end">
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
                    <SmartFolderActions
                        folder={folder}
                        group={group}
                        setOpenActions={setOpenActions}
                        setProcessDownload={setProcessDownload}
                    />
                }
            />
        </>
    );
}
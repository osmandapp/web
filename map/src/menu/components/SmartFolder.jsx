import { CircularProgress, IconButton, ListItemIcon, ListItemText, MenuItem, Tooltip, Typography } from '@mui/material';
import styles from '../trackfavmenu.module.css';
import MenuItemWithLines from './MenuItemWithLines';
import ActionsMenu from '../actions/ActionsMenu';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ReactComponent as ShareIcon } from '../../assets/icons/ic_action_folder_share.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/ic_overflow_menu_white.svg';
import { ReactComponent as MenuIconHover } from '../../assets/icons/ic_overflow_menu_with_background.svg';
import { useTranslation } from 'react-i18next';
import AppContext from '../../context/AppContext';
import SmartFolderActions from '../actions/SmartFolderActions';
import DividerWithMargin from '../../frame/components/dividers/DividerWithMargin';
import { SHARE_TYPE } from '../share/shareConstants';

const types = {
    [SHARE_TYPE]: {
        name: 'web:shared_with_me',
        icon: <ShareIcon />,
        subtypes: {
            track: {
                substring: 'shared_string_tracks',
            },
            favorite: {
                substring: 'shared_string_favorites',
            },
        },
    },
};

export default function SmartFolder({ type, subtype, files }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [hoverIconInfo, setHoverIconInfo] = useState(false);
    const [processDownload, setProcessDownload] = useState(false);
    const [openActions, setOpenActions] = useState(false);
    const [showAllTracks, setShowAllTracks] = useState(false);

    const anchorEl = useRef(null);

    const folder = types[type] ?? types.share;
    const folderType = folder.subtypes[subtype] ?? folder.subtypes.track;

    useEffect(() => {
        if (!openActions) {
            setTimeout(() => document.activeElement?.blur(), 0);
        }
    }, [openActions]);

    function openFiles() {
        ctx.setOpenGroups((prevState) => [...prevState, { files: Object.values(files), type }]);
    }

    return (
        <>
            <MenuItem
                id={`se-smart-folder-${type}-${subtype}`}
                onClick={openFiles}
                className={styles.group}
                key={'smartFolder' + type}
            >
                <ListItemIcon className={styles.icon}>{folder.icon}</ListItemIcon>
                <ListItemText>
                    <MenuItemWithLines name={t(folder.name)} maxLines={2} />
                    <Typography variant="body2" className={styles.groupInfo} noWrap>
                        {`${Object.entries(files).length} ${t(folderType.substring).toLowerCase()}`}
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
            <DividerWithMargin margin={'64px'} />
            <ActionsMenu
                open={openActions}
                setOpen={setOpenActions}
                anchorEl={anchorEl}
                actions={
                    <SmartFolderActions
                        files={files}
                        type={type}
                        subtype={subtype}
                        setOpenActions={setOpenActions}
                        setProcessDownload={setProcessDownload}
                        showAllTracks={showAllTracks}
                        setShowAllTracks={setShowAllTracks}
                    />
                }
            />
        </>
    );
}

import { ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import styles from '../trackfavmenu.module.css';
import MenuItemWithLines from './MenuItemWithLines';
import ActionsMenu from '../actions/ActionsMenu';
import React, { useContext, useRef, useState } from 'react';
import { ReactComponent as ShareIcon } from '../../assets/icons/ic_action_folder_share.svg';
import { useTranslation } from 'react-i18next';
import AppContext from '../../context/AppContext';
import SharedFolderActions from '../actions/SharedFolderActions';
import DividerWithMargin from '../../frame/components/dividers/DividerWithMargin';
import { SHARE_TYPE } from '../share/shareConstants';
import ThreeDotsButton from '../../frame/components/btns/ThreeDotsButton';
import { useProcessDownload } from '../../util/hooks/menu/useProcessDownload';

const subtypes = {
    track: {
        substring: 'shared_string_tracks',
    },
    favorite: {
        substring: 'shared_string_favorites',
    },
};

export default function SharedFolder({ subtype, files, onOpenFolder = null }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [processDownload, setProcessDownload] = useProcessDownload(SHARE_TYPE, subtype);

    const [openActions, setOpenActions] = useState(false);
    const [showAllTracks, setShowAllTracks] = useState(false);

    const anchorEl = useRef(null);

    const folderType = subtypes[subtype] ?? subtypes.track;

    function openFiles() {
        if (subtype === 'favorite') {
            if (onOpenFolder) {
                onOpenFolder({ files: Object.values(files), type: SHARE_TYPE });
            }
        } else if (subtype === 'track') {
            ctx.setOpenGroups((prevState) => [...prevState, { files: Object.values(files), type: SHARE_TYPE }]);
        }
    }

    return (
        <>
            <MenuItem
                id={`se-shared-folder-${subtype}`}
                onClick={openFiles}
                className={styles.group}
                key={'sharedFolder-share'}
            >
                <ListItemIcon className={styles.icon}>
                    <ShareIcon />
                </ListItemIcon>
                <ListItemText>
                    <MenuItemWithLines name={t('web:shared_with_me')} maxLines={2} />
                    <Typography variant="body2" className={styles.groupInfo} noWrap>
                        {`${Object.entries(files).length} ${t(folderType.substring).toLowerCase()}`}
                    </Typography>
                </ListItemText>
                <ThreeDotsButton
                    name={'action_menu_group'}
                    tip={'shared_string_menu'}
                    setOpenActions={setOpenActions}
                    anchorEl={anchorEl}
                    processDownload={processDownload}
                />
            </MenuItem>
            <DividerWithMargin margin={'64px'} />
            <ActionsMenu
                open={openActions}
                setOpen={setOpenActions}
                anchorEl={anchorEl}
                actions={
                    <SharedFolderActions
                        files={files}
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

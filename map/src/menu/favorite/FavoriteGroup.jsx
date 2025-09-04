import { ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../../context/AppContext';
import FavoritesManager, { getSize } from '../../manager/FavoritesManager';
import styles from '../trackfavmenu.module.css';
import ActionsMenu from '../actions/ActionsMenu';
import { ReactComponent as FolderIcon } from '../../assets/icons/ic_action_folder.svg';
import { ReactComponent as FolderHiddenIcon } from '../../assets/icons/ic_action_folder_hidden.svg';
import FavoriteGroupActions from '../actions/FavoriteGroupActions';
import MenuItemWithLines from '../components/MenuItemWithLines';
import { useTranslation } from 'react-i18next';
import FileShareIcon from '../share/FileShareIcon.jsx';
import { getShare } from '../../manager/track/TracksManager';
import DividerWithMargin from '../../frame/components/dividers/DividerWithMargin';
import ThreeDotsButton from '../../frame/components/btns/ThreeDotsButton';
import { SHARE_TYPE } from '../share/shareConstants';
import { fmt } from '../../util/dateFmt';

export default function FavoriteGroup({ index, group, smartf = null }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [openActions, setOpenActions] = useState(false);
    const [processDownload, setProcessDownload] = useState(false);
    const anchorEl = useRef(null);
    const share = getShare(group.file, ctx);
    const groupSize = getSize(group, t);

    const sharedFile = smartf?.type === SHARE_TYPE;

    useEffect(() => {
        if (ctx.favorites.mapObjs?.[group.id]?.markers && group.name === ctx.selectedGpxFile.file?.name) {
            const updatedFile = {
                ...ctx.selectedGpxFile.file,
                markers: ctx.favorites.mapObjs[group.id].markers,
            };
            ctx.setSelectedGpxFile({
                ...ctx.selectedGpxFile,
                file: updatedFile,
            });
        }
    }, [ctx.favorites]);

    return (
        <>
            <MenuItem
                className={styles.group}
                key={'group' + group.id + index}
                id={'se-menu-fav-' + group.name}
                onClick={(e) => {
                    if (e.target !== 'path') {
                        if (sharedFile) {
                            ctx.setOpenFavGroups((prevState) => [...prevState, { group, type: smartf?.type }]);
                        } else {
                            ctx.setOpenFavGroups((prevState) => [...prevState, group]);
                        }
                        ctx.setZoomToFavGroup(group.id);
                    }
                }}
            >
                <ListItemIcon className={styles.icon}>
                    {group.hidden === 'true' ? (
                        <FolderHiddenIcon id={'se-fav-menu-icon-hidden-' + group.name} />
                    ) : (
                        <FolderIcon
                            style={{
                                fill:
                                    group.name &&
                                    FavoritesManager.getColorGroup({
                                        favoritesGroup: group,
                                        groupName: group.name,
                                    }),
                            }}
                        />
                    )}
                </ListItemIcon>
                <ListItemText id={`se-fav-group-size-${groupSize}`}>
                    <MenuItemWithLines name={group.name} maxLines={2} />
                    <Typography variant="body2" component="div" className={styles.groupInfo} noWrap>
                        {share && !sharedFile && <FileShareIcon />}
                        {`${fmt.MMMdY(Number(group.clienttimems))}, ${groupSize}`}
                    </Typography>
                </ListItemText>
                <ThreeDotsButton
                    name={'action_menu_group'}
                    tip={'shared_string_menu'}
                    id={`se-folder-actions-button-${group.name}`}
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
                    <FavoriteGroupActions
                        group={group}
                        setOpenActions={setOpenActions}
                        setProcessDownload={setProcessDownload}
                        smartf={smartf}
                    />
                }
            />
        </>
    );
}

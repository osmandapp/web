import { ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../../context/AppContext';
import { ReactComponent as FolderIcon } from '../../assets/icons/ic_action_folder.svg';
import styles from '../trackfavmenu.module.css';
import GroupActions from '../actions/GroupActions';
import ActionsMenu from '../actions/ActionsMenu';
import MenuItemWithLines from '../components/MenuItemWithLines';
import { useTranslation } from 'react-i18next';
import DividerWithMargin from '../../frame/components/dividers/DividerWithMargin';
import ThreeDotsButton from '../../frame/components/btns/ThreeDotsButton';
import { fmt } from '../../util/dateFmt';

export default function CloudTrackGroup({ index, group }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

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
                        {`${fmt.monthShortDay(group.lastModifiedData)}, ${t('shared_string_gpx_files').toLowerCase()} ${group.realSize}`}
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

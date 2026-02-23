import { ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../../context/AppContext';
import { ReactComponent as FolderIcon } from '../../assets/icons/ic_action_folder.svg';
import { ReactComponent as SmartIcon } from '../../assets/icons/ic_action_folder_smart.svg';
import styles from '../trackfavmenu.module.css';
import GroupActions from '../actions/GroupActions';
import ActionsMenu from '../actions/ActionsMenu';
import MenuItemWithLines from '../components/MenuItemWithLines';
import { useTranslation } from 'react-i18next';
import DividerWithMargin from '../../frame/components/dividers/DividerWithMargin';
import ThreeDotsButton from '../../frame/components/btns/ThreeDotsButton';
import { fmt } from '../../util/dateFmt';
import { SMART_TYPE } from '../share/shareConstants';

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

    const getFolderIcon = () => {
        if (group.type === SMART_TYPE) {
            return <SmartIcon />;
        }
        return <FolderIcon />;
    };

    const handleClick = (e) => {
        if (e.target !== 'path') {
            if (group.type === SMART_TYPE) {
                ctx.setOpenGroups((prevState) => [...prevState, { files: group.files, type: group.type, name: group.name }]);
            } else {
                ctx.setOpenGroups((prevState) => [...prevState, group]);
            }
        }
    };

    const getInfoText = () => {
        if (group.type === SMART_TYPE) {
            const fileCount = Array.isArray(group.files) ? group.files.length : Object.values(group.files).length;
            return `${fileCount} ${t('shared_string_gpx_files').toLowerCase()}`;
        }
        return `${fmt.monthShortDay(group.lastModifiedData)}, ${t('shared_string_gpx_files').toLowerCase()} ${group.realSize}`;
    };

    return (
        <>
            <MenuItem
                className={styles.group}
                key={'group' + group.name + index}
                id={'se-menu-cloud-' + group.name}
                onClick={handleClick}
            >
                <ListItemIcon className={styles.icon}>
                    {getFolderIcon()}
                </ListItemIcon>
                <ListItemText>
                    <MenuItemWithLines name={group.name} maxLines={2} />
                    <Typography variant="body2" className={styles.groupInfo} noWrap>
                        {getInfoText()}
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

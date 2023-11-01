import { IconButton, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import { ReactComponent as FolderIcon } from '../../assets/icons/ic_action_folder.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/ic_overflow_menu_white.svg';
import { ReactComponent as MenuIconHover } from '../../assets/icons/ic_overflow_menu_with_background.svg';
import styles from './trackmenu.module.css';

export default function CloudTrackGroup({ index, group }) {
    const ctx = useContext(AppContext);
    const [hoverIconInfo, setHoverIconInfo] = useState(false);

    return (
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
            <ListItemIcon className={styles.groupIcon}>
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
                className={styles.icon}
                onMouseEnter={() => setHoverIconInfo(true)}
                onMouseLeave={() => setHoverIconInfo(false)}
            >
                {hoverIconInfo ? <MenuIconHover /> : <MenuIcon />}
            </IconButton>
        </MenuItem>
    );
}

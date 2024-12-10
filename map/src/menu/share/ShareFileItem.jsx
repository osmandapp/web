import { Divider, IconButton, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import trackStyles from '../trackfavmenu.module.css';
import { getDist, getFileName, getTime, getWptPoints, setTrackIconStyles } from '../../manager/track/TracksManager';
import MenuItemWithLines from '../components/MenuItemWithLines';
import React, { useContext } from 'react';
import { ReactComponent as TrackIcon } from '../../assets/icons/ic_action_polygom_dark.svg';
import { ReactComponent as TrackInfoIcon } from '../../assets/icons/ic_action_info.svg';
import AppContext from '../../context/AppContext';

export default function ShareFileItem({ file }) {
    const ctx = useContext(AppContext);

    const dist = getDist(file);
    const time = getTime(file);
    const wptPoints = getWptPoints(file);
    const trackName = getFileName(file);

    return (
        <>
            <MenuItem className={trackStyles.item}>
                <ListItemIcon className={setTrackIconStyles(ctx, file, trackStyles)}>
                    <TrackIcon />
                </ListItemIcon>
                <ListItemText>
                    <MenuItemWithLines name={trackName} maxLines={2} />
                    <Typography variant="body2" className={trackStyles.groupInfo} noWrap>
                        {dist && `${dist} km`}
                        {' · '}
                        {time && `${time}`}
                        {wptPoints && ` · ${wptPoints}`}
                    </Typography>
                </ListItemText>
                <IconButton className={trackStyles.sortIcon}>
                    <TrackInfoIcon />
                </IconButton>
            </MenuItem>
            <Divider className={trackStyles.dividerItem} />
        </>
    );
}

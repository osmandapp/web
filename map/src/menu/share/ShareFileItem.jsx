import { Divider, IconButton, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import trackStyles from '../trackfavmenu.module.css';
import { getDist, getFileName, getTime, getWptPoints, setTrackIconStyles } from '../../manager/track/TracksManager';
import MenuItemWithLines from '../components/MenuItemWithLines';
import React, { useContext } from 'react';
import { ReactComponent as TrackIcon } from '../../assets/icons/ic_action_polygom_dark.svg';
import { ReactComponent as TrackInfoIcon } from '../../assets/icons/ic_action_info.svg';
import { ReactComponent as FolderHiddenIcon } from '../../assets/icons/ic_action_folder_hidden.svg';
import { ReactComponent as FolderIcon } from '../../assets/icons/ic_action_folder.svg';
import AppContext from '../../context/AppContext';
import { FAVOURITES, GPX } from '../../manager/GlobalManager';
import FavoritesManager, { getSize } from '../../manager/FavoritesManager';
import { getLocalizedTimeUpdate } from '../settings/SettingsMenu';
import { useTranslation } from 'react-i18next';

export default function ShareFileItem({ file, type }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const favGroup = type === FAVOURITES && ctx.favorites?.groups.find((g) => g.name === file.folder);

    const dist = type === GPX && getDist(file);
    const time = type === GPX && getTime(file);
    const wptPoints = type === GPX && getWptPoints(file);
    const name = type === GPX ? getFileName(file) : type === FAVOURITES ? favGroup.name : '';

    return (
        <>
            <MenuItem className={trackStyles.item}>
                <ListItemIcon className={setTrackIconStyles(ctx, file, trackStyles)}>
                    {type === GPX && <TrackIcon />}
                    {type === FAVOURITES && (
                        <>
                            {favGroup.hidden === 'true' ? (
                                <FolderHiddenIcon />
                            ) : (
                                <FolderIcon
                                    style={{
                                        fill:
                                            favGroup.name &&
                                            FavoritesManager.getColorGroup({
                                                favoritesGroup: favGroup,
                                                groupName: favGroup.name,
                                            }),
                                    }}
                                />
                            )}
                        </>
                    )}
                </ListItemIcon>
                <ListItemText>
                    <MenuItemWithLines name={name} maxLines={2} />
                    {type === GPX && (
                        <Typography variant="body2" className={trackStyles.groupInfo} noWrap>
                            {dist && `${dist} km`}
                            {' · '}
                            {time && `${time}`}
                            {wptPoints && ` · ${wptPoints}`}
                        </Typography>
                    )}
                    {type === FAVOURITES && (
                        <Typography variant="body2" className={trackStyles.groupInfo} noWrap>
                            {`${getLocalizedTimeUpdate(favGroup.clienttimems)}, ${getSize(favGroup, t)}`}
                        </Typography>
                    )}
                </ListItemText>
                <IconButton className={trackStyles.sortIcon}>
                    <TrackInfoIcon />
                </IconButton>
            </MenuItem>
            <Divider className={trackStyles.dividerItem} />
        </>
    );
}
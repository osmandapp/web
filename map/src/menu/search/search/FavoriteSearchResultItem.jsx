import React from 'react';
import { ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import MenuItemWithLines from '../../components/MenuItemWithLines';
import { CustomIcon, FavInfo } from '../../favorite/FavoriteItem';
import DividerWithMargin from '../../../frame/components/dividers/DividerWithMargin';
import favMenuStyles from '../../trackfavmenu.module.css';

export default function FavoriteSearchResultItem({
    id,
    name,
    favoriteListMarker,
    currentLoc,
    unitsSettings,
    isHovered,
    onMouseEnter,
    onMouseLeave,
    onClick,
}) {
    return (
        <>
            <MenuItem
                id={id}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={`${favMenuStyles.item} ${isHovered ? favMenuStyles.itemHovered : ''}`}
                onClick={onClick}
            >
                <ListItemIcon className={favMenuStyles.icon}>
                    <CustomIcon marker={favoriteListMarker} />
                </ListItemIcon>
                <ListItemText>
                    <MenuItemWithLines name={name} maxLines={1} />
                    <FavInfo marker={favoriteListMarker} currentLoc={currentLoc} unitsSettings={unitsSettings} />
                </ListItemText>
            </MenuItem>
            <DividerWithMargin margin={'64px'} />
        </>
    );
}

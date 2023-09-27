import React, { useState } from 'react';
import { Avatar, Box, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import FavoritesManager from '../../../../manager/FavoritesManager';

export default function FavoriteColor({ favoriteColor, setFavoriteColor, defaultColor, widthDialog }) {
    const [selectFavoriteColor, setSelectFavoriteColor] = useState(false);

    let prepareColors = FavoritesManager.orderList(FavoritesManager.colors, defaultColor);

    return (
        <>
            <ListItemText>
                <Typography variant="inherit" noWrap>
                    Select color
                </Typography>
            </ListItemText>
            <Box
                sx={{
                    display: 'flex',
                    maxWidth: `${widthDialog}px`,
                    overflowX: 'scroll',
                }}
            >
                {prepareColors.map((color, index) => {
                    return (
                        <ListItem key={index} component="div" disablePadding>
                            <ListItemButton
                                selected={favoriteColor === color || (!selectFavoriteColor && color === defaultColor)}
                                onClick={() => {
                                    setSelectFavoriteColor(true);
                                    setFavoriteColor(color);
                                }}
                            >
                                <Avatar sx={{ bgcolor: color }}> </Avatar>
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </Box>
        </>
    );
}

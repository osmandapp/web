import React, { useState } from 'react';
import { Box, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import favoriteEditMenuStyles from '../../../styles/FavoriteEditMenuStyles';
import FavoritesManager from '../../../../manager/FavoritesManager';

export default function FavoriteShape({ color, favoriteShape, setFavoriteShape, defaultBackground }) {
    const favoriteStyles = favoriteEditMenuStyles();

    const [selectFavoriteShape, setSelectFavoriteShape] = useState(false);
    let shapesSvg = FavoritesManager.getShapesSvg(color);

    return (
        <>
            <ListItemText>
                <Typography variant="inherit" noWrap>
                    Select shape
                </Typography>
            </ListItemText>
            <Box
                sx={{
                    display: 'flex',
                }}
            >
                {Object.entries(shapesSvg).map((shape, index) => {
                    return (
                        <ListItem style={{ maxWidth: 71 }} component="div" key={index} disablePadding>
                            <ListItemButton
                                sx={{ maxHeight: 50 }}
                                selected={
                                    favoriteShape === shape[0] ||
                                    (!selectFavoriteShape && shape[0] === defaultBackground)
                                }
                                onClick={() => {
                                    setSelectFavoriteShape(true);
                                    setFavoriteShape(shape[0]);
                                }}
                            >
                                <div
                                    className={favoriteStyles.background}
                                    dangerouslySetInnerHTML={{ __html: shape[1] + '' }}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </Box>
        </>
    );
}

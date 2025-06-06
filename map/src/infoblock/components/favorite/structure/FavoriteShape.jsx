import React, { useState } from 'react';
import { Box, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import FavoritesManager from '../../../../manager/FavoritesManager';

export default function FavoriteShape({ color, favoriteShape, setFavoriteShape, defaultBackground }) {
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
                                id={`se-favorite-shape-${index}`}
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
                                <Box
                                    component="div"
                                    sx={{
                                        '& .background': {
                                            left: '-20px',
                                            top: '2px',
                                            width: '80px',
                                            height: '80px',
                                            filter: 'drop-shadow(0 0 0 gray)',
                                        },
                                    }}
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

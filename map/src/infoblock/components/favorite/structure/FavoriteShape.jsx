import React, { useState } from 'react';
import { Box, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import FavoritesManager from '../../../../manager/FavoritesManager';

export default function FavoriteShape({ color, favoriteShape, setFavoriteShape, defaultBackground }) {
    const { t } = useTranslation();
    const [selectFavoriteShape, setSelectFavoriteShape] = useState(false);
    let shapesSvg = FavoritesManager.getShapesSvg(color);

    return (
        <>
            <ListItemText>
                <Typography noWrap>{t('web:wpt_select_shape')}</Typography>
            </ListItemText>
            <Box
                sx={{
                    display: 'flex',
                }}
            >
                {Object.entries(shapesSvg).map((shape, index) => {
                    return (
                        <ListItem style={{ maxWidth: 71 }} component="div" key={shape[0]} disablePadding>
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

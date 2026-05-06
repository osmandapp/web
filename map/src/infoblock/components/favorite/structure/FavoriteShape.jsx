import React from 'react';
import { Box, ListItemText, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import MarkerOptions from '../../../../map/markers/MarkerOptions';
import { ReactComponent as CircleIcon } from '../../../../assets/icons/ic_action_bg_shape_circle.svg';
import { ReactComponent as SquareIcon } from '../../../../assets/icons/ic_action_bg_shape_square.svg';
import { ReactComponent as OctagonIcon } from '../../../../assets/icons/ic_action_bg_shape_octagon.svg';
import MenuItemWithLines from '../../../../menu/components/MenuItemWithLines';
import styles from '../wptEditPanel.module.css';

const SHAPES = [
    {
        value: MarkerOptions.BACKGROUND_WPT_SHAPE_CIRCLE,
        Icon: CircleIcon,
        id: 'se-favorite-shape-0',
    },
    {
        value: MarkerOptions.BACKGROUND_WPT_SHAPE_OCTAGON,
        Icon: OctagonIcon,
        id: 'se-favorite-shape-1',
    },
    {
        value: MarkerOptions.BACKGROUND_WPT_SHAPE_SQUARE,
        Icon: SquareIcon,
        id: 'se-favorite-shape-2',
    },
];

export default function FavoriteShape({ favoriteShape, setFavoriteShape }) {
    const { t } = useTranslation();

    return (
        <MenuItem disableRipple className={styles.shapeRow}>
            <ListItemText className={styles.shapeRowText}>
                <MenuItemWithLines name={t('web:wpt_appearance_shape_label')} maxLines={1} />
            </ListItemText>
            <Box className={styles.shapeToggleGroup}>
                {SHAPES.map(({ value, Icon, id }) => {
                    const isSelected = favoriteShape === value;
                    return (
                        <Box
                            key={value}
                            id={id}
                            className={clsx(styles.shapeToggleBtn, isSelected && styles.shapeToggleBtnSelected)}
                            onClick={() => setFavoriteShape(value)}
                        >
                            <Icon
                                className={clsx(styles.shapeToggleIcon, isSelected && styles.shapeToggleIconSelected)}
                            />
                        </Box>
                    );
                })}
            </Box>
        </MenuItem>
    );
}

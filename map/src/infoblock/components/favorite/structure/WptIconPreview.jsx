import React from 'react';
import { Box } from '@mui/material';
import MarkerOptions, { getIconUrlByName } from '../../../../map/markers/MarkerOptions';
import { ReactComponent as SelectionRing } from '../../../../assets/wpt/selection.svg';
import { hexToRgba } from '../../../../util/ColorUtil';
import styles from '../wptEditPanel.module.css';

const DEFAULT_BG_SIZE = 32;
const DEFAULT_ICON_SIZE = 18;
const DEFAULT_BG_COLOR = '#e6e6e6';
// CSS filter to convert white SVG icons to ~#727272 gray
const ICON_GRAY_FILTER = 'invert(45%) brightness(0.95)';

export function SelectedMarker({ size }) {
    return <SelectionRing className={styles.wptIconPreviewRing} style={{ width: size, height: size }} />;
}

export function getShapeSvg(shape, color, size) {
    const fill = color ? hexToRgba(color) : DEFAULT_BG_COLOR;
    if (shape === MarkerOptions.BACKGROUND_WPT_SHAPE_SQUARE) {
        return `<svg width="${size}" height="${size}" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="22" height="22" rx="3" fill="${fill}"/>
        </svg>`;
    }
    if (shape === MarkerOptions.BACKGROUND_WPT_SHAPE_OCTAGON) {
        return `<svg width="${size}" height="${size}" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6L6 0H16L22 6V16L16 22H6L0 16V6Z" fill="${fill}"/>
        </svg>`;
    }

    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="${fill}"/>
    </svg>`;
}

export default function WptIconPreview({
    icon,
    color,
    shape,
    size = DEFAULT_BG_SIZE,
    iconSize = DEFAULT_ICON_SIZE,
    selected = false,
    selectionSize = 48,
    whiteIcon = true,
}) {
    const containerSize = selected ? selectionSize : size;

    return (
        <Box className={styles.wptIconPreview} sx={{ width: containerSize, height: containerSize }}>
            <Box
                className={styles.wptIconPreviewShape}
                sx={{ width: size, height: size }}
                dangerouslySetInnerHTML={{ __html: getShapeSvg(shape, color, size) }}
            />
            <Box
                component="img"
                className={styles.wptIconPreviewIcon}
                src={getIconUrlByName('poi', icon)}
                sx={{
                    width: iconSize,
                    height: iconSize,
                    filter: whiteIcon ? 'none' : ICON_GRAY_FILTER,
                }}
            />
            {selected && <SelectedMarker size={selectionSize} />}
        </Box>
    );
}

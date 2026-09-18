import React, { useContext, useEffect } from 'react';
import { IconButton, Paper, SvgIcon } from '@mui/material';
import AppContext from '../../../context/AppContext';
import mapStyles from '../../../map/map.module.css';
import { ReactComponent as CloseIcon } from '../../../assets/icons/ic_action_close.svg';

const ESC_IGNORE_TARGETS = 'input, textarea, [contenteditable="true"], [role="dialog"], [role="presentation"]';

// Closes the menu with the opened object; render it only while Close is available
export default function CloseMenuBtn() {
    const ctx = useContext(AppContext);

    // close the menu by Esc
    useEffect(() => {
        const closeMenuByEsc = (e) => {
            if (e.key !== 'Escape') return;
            if (e.defaultPrevented) return;
            if (e.target.closest?.(ESC_IGNORE_TARGETS)) return;
            ctx.setCloseSelectedMenu(true);
        };
        window.addEventListener('keydown', closeMenuByEsc);

        return () => window.removeEventListener('keydown', closeMenuByEsc);
    }, []);

    return (
        <Paper className={`${mapStyles.button} ${mapStyles.closeMenuButton}`}>
            <IconButton id="se-close-menu-button" onClick={() => ctx.setCloseSelectedMenu(true)}>
                <SvgIcon className={mapStyles.customIconPath} component={CloseIcon} inheritViewBox />
            </IconButton>
        </Paper>
    );
}

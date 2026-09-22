import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import AppContext from '../../../context/AppContext';
import headerStyles from '../../../menu/trackfavmenu.module.css';
import { ReactComponent as CloseIcon } from '../../../assets/icons/ic_action_close.svg';
import { FAVORITES_URL, MAIN_URL_WITH_SLASH, POI_URL, SEARCH_URL, TRACKS_URL } from '../../../manager/GlobalManager';

const CLOSE_MENU_URLS = [SEARCH_URL, POI_URL, TRACKS_URL, FAVORITES_URL].map((url) => MAIN_URL_WITH_SLASH + url);
const ESC_IGNORE_TARGETS = 'input, textarea, [contenteditable="true"], [role="dialog"], [role="presentation"]';

// Closes the currently selected menu with the opened object; place it in the app bar of a menu opened from a list
export default function CloseMenuBtn() {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();
    const location = useLocation();

    const canCloseMenu = CLOSE_MENU_URLS.some((url) => location.pathname.startsWith(url));

    // close the selected menu by Esc, available together with the Close button
    useEffect(() => {
        if (!canCloseMenu) return;
        const closeMenuByEsc = (e) => {
            if (e.key !== 'Escape') return;
            if (e.defaultPrevented) return;
            if (e.target.closest?.(ESC_IGNORE_TARGETS)) return;
            ctx.setCloseSelectedMenu(true);
        };
        window.addEventListener('keydown', closeMenuByEsc);

        return () => window.removeEventListener('keydown', closeMenuByEsc);
    }, [canCloseMenu]);

    if (!canCloseMenu) {
        return null;
    }

    const tip = t('shared_string_close');

    return (
        <Tooltip title={tip} arrow placement="bottom-end">
            <IconButton
                id="se-close-menu-button"
                aria-label={tip}
                variant="contained"
                type="button"
                className={headerStyles.appBarIcon}
                onClick={() => ctx.setCloseSelectedMenu(true)}
            >
                <CloseIcon />
            </IconButton>
        </Tooltip>
    );
}

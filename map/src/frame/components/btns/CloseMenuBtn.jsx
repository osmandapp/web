import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, Tooltip } from '@mui/material';
import AppContext from '../../../context/AppContext';
import headerStyles from '../../../menu/trackfavmenu.module.css';
import { ReactComponent as CloseIcon } from '../../../assets/icons/ic_action_close.svg';

const ESC_IGNORE_TARGETS = 'input, textarea, [contenteditable="true"], [role="dialog"], [role="presentation"]';

export default function CloseMenuBtn() {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    // close the selected menu by Esc, available together with the Close button
    useEffect(() => {
        if (!ctx.closableMenu) return;
        const closeMenuByEsc = (e) => {
            if (e.key !== 'Escape') return;
            if (e.defaultPrevented) return;
            if (e.target.closest?.(ESC_IGNORE_TARGETS)) return;
            ctx.setCloseSelectedMenu(true);
        };
        window.addEventListener('keydown', closeMenuByEsc);

        return () => window.removeEventListener('keydown', closeMenuByEsc);
    }, [ctx.closableMenu]);

    if (!ctx.closableMenu) {
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

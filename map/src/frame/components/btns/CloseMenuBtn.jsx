import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, Tooltip } from '@mui/material';
import AppContext from '../../../context/AppContext';
import headerStyles from '../../../menu/trackfavmenu.module.css';
import { ReactComponent as CloseIcon } from '../../../assets/icons/ic_action_close.svg';

// Esc for the same Close is handled by the screen that renders the button, see useCloseMenuByEsc
export default function CloseMenuBtn() {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

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

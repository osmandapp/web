import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, Tooltip } from '@mui/material';
import AppContext from '../../../context/AppContext';
import headerStyles from '../../../menu/trackfavmenu.module.css';
import { CLOSE_MENU_BUTTON_ID } from '../../../util/hooks/menu/useCloseMenuByEsc';
import CloseIcon from '@mui/icons-material/Close';

// rendered by the shared headers next to Back; Esc does the same, see useCloseMenuByEsc
export default function CloseMenuBtn() {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const editingFavorite = !!ctx.addFavorite?.location || !!ctx.addFavorite?.editWpt;
    if (!ctx.closableMenu || editingFavorite) {
        return null;
    }

    const tip = t('shared_string_close');

    return (
        <Tooltip title={tip} arrow placement="bottom-end">
            <IconButton
                id={CLOSE_MENU_BUTTON_ID}
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

import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, Paper, SvgIcon, Tooltip } from '@mui/material';
import AppContext from '../../../context/AppContext';
import mapStyles from '../../../map/map.module.css';
import { ReactComponent as CloseIcon } from '../../../assets/icons/ic_action_close.svg';

// Closes the currently selected menu with the opened object
export default function CloseMenuBtn() {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const tip = t('shared_string_close');

    return (
        <Tooltip title={tip} arrow placement="bottom">
            <Paper className={`${mapStyles.button} ${mapStyles.closeMenuButton}`}>
                <IconButton id="se-close-menu-button" aria-label={tip} onClick={() => ctx.setCloseSelectedMenu(true)}>
                    <SvgIcon className={mapStyles.customIconPath} component={CloseIcon} inheritViewBox />
                </IconButton>
            </Paper>
        </Tooltip>
    );
}

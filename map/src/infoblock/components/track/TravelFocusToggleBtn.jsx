import React, { useContext } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from '../../../menu/trackfavmenu.module.css';
import AppContext from '../../../context/AppContext';
import { ReactComponent as FocusOnIcon } from '../../../assets/icons/ic_action_points_focus_on.svg';
import { ReactComponent as FocusOffIcon } from '../../../assets/icons/ic_action_points_focus_off.svg';

// Header button that hides / shows the other travel routes on the map, with a matching icon.
export default function TravelFocusToggleBtn() {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const hidden = ctx.travelRoutesHidden;
    const Icon = hidden ? FocusOffIcon : FocusOnIcon;
    const tip = t(hidden ? 'web:show_other_tracks' : 'web:hide_other_tracks');

    return (
        <Tooltip title={tip} arrow placement="bottom-end" disableInteractive>
            <IconButton
                id="se-travel-focus-toggle"
                className={styles.sortIcon}
                aria-label={tip}
                onClick={() => ctx.setTravelRoutesHidden((v) => !v)}
            >
                <Icon />
            </IconButton>
        </Tooltip>
    );
}

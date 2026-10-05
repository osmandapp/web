import React, { useContext } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from '../../../menu/trackfavmenu.module.css';
import TravelContext from '../../../context/TravelContext';
import { ReactComponent as FocusOnIcon } from '../../../assets/icons/ic_action_points_focus_on.svg';
import { ReactComponent as FocusOffIcon } from '../../../assets/icons/ic_action_points_focus_off.svg';

// Header button that hides / shows the other travel routes on the map, with a matching icon.
export default function TravelFocusToggleBtn() {
    const ttx = useContext(TravelContext);
    const { t } = useTranslation();

    const hidden = ttx.travelRoutesHidden;
    const Icon = hidden ? FocusOffIcon : FocusOnIcon;
    const tip = t(hidden ? 'web:show_other_tracks' : 'web:hide_other_tracks');

    return (
        <Tooltip title={tip} arrow placement="bottom-end" disableInteractive>
            <IconButton
                id="se-travel-focus-toggle"
                className={styles.sortIcon}
                aria-label={tip}
                onClick={() => ttx.setTravelRoutesHidden((v) => !v)}
            >
                <Icon />
            </IconButton>
        </Tooltip>
    );
}

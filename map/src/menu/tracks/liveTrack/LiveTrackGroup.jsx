import React, { useContext } from 'react';
import { ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LiveTrackingContext from '../../../context/LiveTrackingContext';
import { ReactComponent as LiveIcon } from '../../../assets/icons/ic_action_folder_location.svg';
import styles from '../../trackfavmenu.module.css';
import MenuItemWithLines from '../../components/MenuItemWithLines';
import { LIVE_TRACKS_URL, MAIN_URL_WITH_SLASH } from '../../../manager/GlobalManager';

export default function LiveTrackGroup() {
    const lttx = useContext(LiveTrackingContext);
    const { t } = useTranslation();

    const navigate = useNavigate();

    const count = lttx.liveTranslations.length;
    const infoText = count > 0 ? `${count} ${t('web:live_tracks').toLowerCase()}` : '';

    function handleClick() {
        navigate(MAIN_URL_WITH_SLASH + LIVE_TRACKS_URL);
    }

    return (
        <MenuItem divider className={styles.group} onClick={handleClick}>
            <ListItemIcon className={styles.icon}>
                <LiveIcon />
            </ListItemIcon>
            <ListItemText>
                <MenuItemWithLines name={t('web:live_tracks')} maxLines={2} />
                {infoText && (
                    <Typography variant="body2" className={styles.groupInfo} noWrap>
                        {infoText}
                    </Typography>
                )}
            </ListItemText>
        </MenuItem>
    );
}

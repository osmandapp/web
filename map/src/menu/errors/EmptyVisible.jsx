import { Box, Button, Icon, ListItemText } from '@mui/material';
import styles from './errors.module.css';
import EmptyLogin from '../../login/EmptyLogin';
import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { ReactComponent as EmptyIcon } from '../../assets/icons/ic_action_track_disabled.svg';
import LoginContext from '../../context/LoginContext';
import { useNavigate } from 'react-router-dom';
import { MAIN_URL_WITH_SLASH, MENU_IDS, TRACKS_URL, liveHash } from '../../manager/GlobalManager';
import { resetCloudTracksMenu } from '../../manager/track/TracksManager';

export default function EmptyVisible({ id = null }) {
    const ltx = useContext(LoginContext);
    const ctx = useContext(AppContext);

    const navigate = useNavigate();

    function showAllTracks() {
        ctx.setOpenVisibleMenu((prev) => ({
            ...prev,
            open: false,
        }));

        resetCloudTracksMenu(ctx);

        ctx.setOpenMenu({ id: MENU_IDS.tracks });
        navigate(MAIN_URL_WITH_SLASH + TRACKS_URL + liveHash());
    }

    return (
        <>
            {ltx.loginUser ? (
                <Box className={styles.block} id={id ?? 'se-empty-page'}>
                    <Icon className={styles.icon}>
                        <EmptyIcon className={styles.icon} />
                    </Icon>
                    <Box className={styles.info}>
                        <ListItemText disableTypography={true} className={styles.title}>
                            No tracks on map
                        </ListItemText>
                        <ListItemText disableTypography={true} className={styles.text}>
                            Select tracks to display them on the map.
                        </ListItemText>
                    </Box>
                    <Button className={styles.button} component="span" onClick={showAllTracks}>
                        Show all tracks
                    </Button>
                </Box>
            ) : (
                <EmptyLogin />
            )}
        </>
    );
}

import { Box, Button, Icon, ListItemText } from '@mui/material';
import styles from './errors.module.css';
import EmptyLogin from '../../login/EmptyLogin';
import React, { useContext } from 'react';
import { OBJECT_TYPE_CLOUD_TRACK } from '../../context/AppContext';
import { ReactComponent as EmptyIcon } from '../../assets/icons/ic_action_track_disabled.svg';
import TracksMenu from '../tracks/TracksMenu';
import LoginContext from '../../context/LoginContext';

export default function EmptyVisible({ id = null, setMenuInfo, setOpenVisibleMenu, setSelectedType }) {
    const ltx = useContext(LoginContext);

    function showAllTracks() {
        if (setMenuInfo) {
            setSelectedType(OBJECT_TYPE_CLOUD_TRACK);
            setMenuInfo(<TracksMenu setOpenVisibleMenu={setOpenVisibleMenu} />);
        }
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

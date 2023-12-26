import { Box, Button, Icon, ListItemText } from '@mui/material';
import styles from './errors.module.css';
import EmptyLogin from './EmptyLogin';
import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { ReactComponent as EmptyIcon } from '../../assets/icons/ic_action_folder_open.svg';
import TracksMenu from '../tracks/TracksMenu';

export default function EmptyVisible({ setMenuInfo }) {
    const ctx = useContext(AppContext);

    function showAllTracks() {
        if (setMenuInfo) {
            setMenuInfo(<TracksMenu />);
        }
    }

    return (
        <>
            {ctx.loginUser ? (
                <Box className={styles.block} id="se-empty-page">
                    <Icon className={styles.icon}>
                        <EmptyIcon className={styles.icon} />
                    </Icon>
                    <Box className={styles.info}>
                        <ListItemText disableTypography={true} className={styles.title}>
                            No tracks on map
                        </ListItemText>
                        <ListItemText disableTypography={true} className={styles.text}>
                            {`Select tracks you won't to make visible on the map.`}
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

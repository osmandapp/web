import { Box, IconButton, Typography } from '@mui/material';
import styles from './frame.module.css';
import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { ReactComponent as Cancel } from '../../assets/icons/ic_action_cancel.svg';
import { HEADER_SIZE } from '../../manager/GlobalManager';

export default function GlobalAlert({ width }) {
    const ctx = useContext(AppContext);
    const ALERT_SIZE = 300;

    return (
        ctx.routingErrorMsg && (
            <Box className={styles.alert} sx={{ mt: HEADER_SIZE, ml: `${width - ALERT_SIZE - 20}px` }}>
                <Box className={styles.alertBox}>
                    <Typography className={styles.alertText}>{ctx.routingErrorMsg}</Typography>
                    <IconButton className={styles.alertButton} onClick={() => ctx.setRoutingErrorMsg(null)}>
                        <Cancel />
                    </IconButton>
                </Box>
            </Box>
        )
    );
}

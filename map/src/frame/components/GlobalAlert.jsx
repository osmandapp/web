import { Box, IconButton, Typography } from '@mui/material';
import styles from '../frame.module.css';
import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { ReactComponent as Cancel } from '../../assets/icons/ic_action_cancel.svg';
import { HEADER_SIZE } from '../../manager/GlobalManager';
import { useTranslation } from 'react-i18next';

export default function GlobalAlert({ width }) {
    const ctx = useContext(AppContext);
    const ALERT_SIZE = 300;

    const { t } = useTranslation();

    return (
        ctx.routingErrorMsg && (
            <Box className={styles.alert} sx={{ mt: `${HEADER_SIZE}px`, ml: `${width - ALERT_SIZE - 20}px` }}>
                <Box className={styles.alertBox}>
                    <Typography className={styles.alertText}>{`${t('web:router_error_message')} ${ctx.routingErrorMsg}`}</Typography>
                    <IconButton className={styles.alertButton} onClick={() => ctx.setRoutingErrorMsg(null)}>
                        <Cancel />
                    </IconButton>
                </Box>
            </Box>
        )
    );
}

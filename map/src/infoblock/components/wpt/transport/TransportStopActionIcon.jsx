import React from 'react';
import { Box } from '@mui/material';
import { ReactComponent as BgIcon } from '../../../../assets/icons/ic_action_transport_stop_bg.svg';
import { ReactComponent as StrokeIcon } from '../../../../assets/icons/ic_action_transport_stop_stroke.svg';
import { ReactComponent as StopActionIcon } from '../../../../assets/icons/ic_action_transport_stop.svg';
import styles from './transport.module.css';

export default function TransportStopActionIcon() {
    return (
        <Box
            className={styles.stopActionIconWrapper}
            sx={{
                width: 24,
                height: 24,
                position: 'relative',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <StrokeIcon style={{ position: 'absolute', width: 24, height: 24 }} />
            <BgIcon style={{ position: 'absolute', width: 20, height: 20 }} />
            <StopActionIcon style={{ position: 'relative', width: 16, height: 16 }} />
        </Box>
    );
}

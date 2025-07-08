import { Box } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const statusMap = {
    active: {
        text: 'web:active_state',
        color: '#14CC70',
        textColor: '#FFFFFF',
    },
    cancelled: {
        text: 'web:cancelled_state',
        color: '#F0F0F0',
        textColor: '#E71D36',
    },
    in_grace_period: {
        text: 'web:in_grace_period_state',
        color: '#F0F0F0',
        textColor: '#E71D36',
    },
    on_hold: {
        text: 'web:on_hold_state',
        color: '#F0F0F0',
        textColor: '#E71D36',
    },
    paused: {
        text: 'web:paused_state',
        color: '#F0F0F0',
        textColor: '#E71D36',
    },
    expired: {
        text: 'web:expired_state',
        color: '#E71D36',
        textColor: '#FFFFFF',
    },
};

export default function PurchaseStatus({ id, status }) {
    const { t } = useTranslation();
    const { text, color, textColor } = statusMap[status] || {
        text: 'web:unknown_state',
        color: '#9E9E9E',
        textColor: '#FFFFFF',
    };

    return (
        <Box
            component="span"
            id={id}
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                backgroundColor: color,
                color: textColor,
                borderRadius: '53px',
                padding: '3px 12px',
                textTransform: 'none',
                boxShadow: 'none',
                cursor: 'default',
                textAlign: 'center',
                fontFamily: 'Roboto',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '140%',
                letterSpacing: '0.28px',
            }}
        >
            {t(text)}
        </Box>
    );
}

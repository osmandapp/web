import { Box } from '@mui/material';
import React from 'react';

const statusMap = {
    active: {
        text: 'Active',
        color: '#14CC70',
        textColor: '#FFFFFF',
    },
    cancelled: {
        text: 'Cancelled',
        color: '#F0F0F0',
        textColor: '#E71D36',
    },
    in_grace_period: {
        text: 'In Grace Period',
        color: '#F0F0F0',
        textColor: '#E71D36',
    },
    on_hold: {
        text: 'On Hold',
        color: '#F0F0F0',
        textColor: '#E71D36',
    },
    paused: {
        text: 'Paused',
        color: '#F0F0F0',
        textColor: '#E71D36',
    },
    expired: {
        text: 'Expired',
        color: '#E71D36',
        textColor: '#FFFFFF',
    },
};

export default function PurchaseStatus({ id, status }) {
    const { text, color, textColor } = statusMap[status] || { text: 'Unknown', color: '#9E9E9E', textColor: '#FFFFFF' };

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
            {text}
        </Box>
    );
}

import { Button, IconButton, Tooltip } from '@mui/material';
import React from 'react';

export default function BaseButton({
    action,
    id = null,
    text = null,
    icon = null,
    className,
    additionalStyle = {},
    tooltipTitle = null,
    tooltipPlacement = 'bottom',
    disabled = false,
    span = false,
}) {
    const btn = text ? (
        <Button
            id={id}
            className={className}
            sx={additionalStyle}
            onClick={action}
            disabled={disabled}
            component={span ? 'span' : 'button'}
        >
            {text}
        </Button>
    ) : (
        <IconButton
            id={id}
            className={className}
            sx={additionalStyle}
            onClick={action}
            disabled={disabled}
            component={span ? 'span' : 'button'}
        >
            {icon}
        </IconButton>
    );

    return tooltipTitle ? (
        <Tooltip title={tooltipTitle} arrow placement={tooltipPlacement}>
            {btn}
        </Tooltip>
    ) : (
        btn
    );
}

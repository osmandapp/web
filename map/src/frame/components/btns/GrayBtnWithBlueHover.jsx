import style from './buttons.module.css';
import { Button, IconButton } from '@mui/material';
import React from 'react';

export default function GrayBtnWithBlueHover({
    action,
    id = null,
    text = null,
    icon = null,
    additionalStyle = {},
    span = false,
}) {
    if (text) {
        return (
            <Button
                id={id}
                className={style.grayButton}
                sx={additionalStyle}
                onClick={action}
                component={span ? 'span' : 'button'}
            >
                {text}
            </Button>
        );
    }
    return (
        <IconButton
            id={id}
            className={style.grayButton}
            sx={additionalStyle}
            onClick={action}
            component={span ? 'span' : 'button'}
        >
            {icon}
        </IconButton>
    );
}

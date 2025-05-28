import { Button } from '@mui/material';
import React from 'react';
import style from './buttons.module.css';

export default function BlueButtonWithIcon({ action, id = null, text = null, icon = null }) {
    return (
        <Button id={id} endIcon={icon} className={style.blueButtonWithIcon} onClick={action}>
            {text}
        </Button>
    );
}

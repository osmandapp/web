import { Button } from '@mui/material';
import React from 'react';
import styles from './buttons.module.css';

export default function SquareTextBtn({ id, text, selected = false, disabled = false, onClick }) {
    return (
        <Button
            id={id}
            className={`${styles.squareTextBtn} ${selected ? styles.selected : ''}`}
            disabled={disabled}
            onClick={onClick}
            disableRipple
        >
            {text}
        </Button>
    );
}

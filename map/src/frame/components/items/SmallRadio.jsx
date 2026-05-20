import React from 'react';
import { Radio } from '@mui/material';

export default function SmallRadio({ checked, onChange, onClick, className }) {
    return (
        <Radio
            checked={checked}
            onChange={onChange}
            onClick={onClick}
            size="small"
            className={className}
        />
    );
}

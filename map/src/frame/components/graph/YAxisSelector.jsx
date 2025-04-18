import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';
import { Y_AXIS_OPTIONS } from './GlobalGraph';
import { useTranslation } from 'react-i18next';

export default function YAxisSelector({ yAxisOption, setYAxisOption }) {
    const { t } = useTranslation();

    return (
        <FormControl fullWidth>
            <Select
                variant="filled"
                sx={{
                    '& .MuiFilledInput-input': {
                        p: '8px 4px 8px 12px',
                    },
                    '&::before': {
                        borderBottom: 'none',
                    },
                    '&::after': {
                        borderBottom: 'none',
                    },
                    '&:hover:not(.Mui-disabled)::before': {
                        borderBottom: 'none',
                    },
                }}
                labelId="y-axis-select-label"
                value={yAxisOption}
                onChange={(e) => setYAxisOption(e.target.value)}
            >
                {Y_AXIS_OPTIONS(t).map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

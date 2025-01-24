import { TextField } from '@mui/material/';
import { Box, Divider, InputAdornment } from '@mui/material';
import { ReactComponent as PointAIcon } from '../../assets/icons/ic_action_point_a.svg';
import { ReactComponent as PointBIcon } from '../../assets/icons/ic_action_point_b.svg';
import { useEffect, useState } from 'react';
import styles from './trackanalyzer.module.css';

const START_POINT = 'start';
const FINISH_POINT = 'finish';

export default function PointField({ name, setPoint, setStartAnalysis }) {
    const [pointValue, setPointValue] = useState('');

    useEffect(() => {
        setPoint(pointValue === '' ? null : pointValue);
    }, [pointValue]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (pointValue !== '') {
                setStartAnalysis(true);
            }
        }
    };

    return (
        <Box sx={{ width: '100%', mt: '-1px' }}>
            <TextField
                variant="filled"
                placeholder={name === START_POINT ? 'Point A' : 'Point B'}
                fullWidth
                value={pointValue}
                sx={{
                    '& .MuiFilledInput-input': {
                        padding: '8px 0',
                        ml: '10px',
                    },
                }}
                onChange={(e) => {
                    setPointValue(e.target.value);
                }}
                onKeyDown={(e) => handleKeyPress(e)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment className={styles.icon} sx={{ my: 2 }} position="start">
                            {name === START_POINT ? <PointAIcon /> : <PointBIcon />}
                        </InputAdornment>
                    ),
                    className: styles.pointInput,
                    sx: {
                        '&::before': {
                            borderBottom: 'none',
                        },
                        '&::after': {
                            borderBottom: 'none',
                        },
                        '&:hover:not(.Mui-disabled)::before': {
                            borderBottom: 'none',
                        },
                    },
                }}
            ></TextField>
            {name === START_POINT && <Divider className={styles.divider} />}
        </Box>
    );
}

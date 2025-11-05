import { TextField, Box, InputAdornment } from '@mui/material';
import { ReactComponent as PointAIcon } from '../../assets/icons/ic_action_point_a.svg';
import { ReactComponent as PointBIcon } from '../../assets/icons/ic_action_point_b.svg';
import { useEffect, useState } from 'react';
import styles from './trackanalyzer.module.css';
import { formatLatLon } from '../navigation/NavigationPointsManager';
import { parseCoordinate } from './util/PointsManager';
import DividerWithMargin from '../../frame/components/dividers/DividerWithMargin';
import { useTranslation } from 'react-i18next';

const START_POINT = 'start';
const FINISH_POINT = 'finish';

export default function PointField({ name, point, setPoint, setStartAnalysis }) {
    const [pointValue, setPointValue] = useState('');
    const { t } = useTranslation();

    useEffect(() => {
        if (pointValue === '') {
            setPoint(null);
        }
    }, [pointValue]);

    useEffect(() => {
        if (!point) {
            setPointValue('');
        }
    }, [point]);

    useEffect(() => {
        if (point) {
            if (typeof point === 'object') {
                point = formatLatLon(point);
            }
            setPointValue(point);
        }
    }, [point]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && pointValue !== '') {
            setStartAnalysis(true);
            //validate point only after pressing enter
            setPoint(pointValue === '' ? null : parseCoordinate(pointValue));
        } else if (e.key === 'Backspace' && pointValue.length > 0) {
            const input = e.target;
            if (input.selectionStart === input.selectionEnd && input.selectionStart === pointValue.length) {
                setPointValue('');
                e.preventDefault();
            }
        }
    };

    return (
        <Box sx={{ width: '100%', mt: '-1px' }}>
            <TextField
                variant="filled"
                placeholder={name === START_POINT ? t('web:track_analyzer_a') : t('web:track_analyzer_b')}
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
                        <InputAdornment
                            className={pointValue ? styles.iconSelected : styles.icon}
                            sx={{ my: 2 }}
                            position="start"
                        >
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
            {name === START_POINT && <DividerWithMargin margin={'52px'} />}
        </Box>
    );
}

import React from 'react';
import { ListItemIcon, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ReactComponent as DirectionIcon } from '../../../assets/icons/ic_direction_arrow.svg';
import styles from '../search.module.css';
import { convertMeters, getLargeLengthUnit, getSmallLengthUnit, LARGE_UNIT } from '../../settings/units/UnitsConverter';

export default function DistanceAndDirection({ distance, bearing, isUserLocation, ctx }) {
    const { t } = useTranslation();
    function addDistance() {
        if (!distance) return '';
        if (distance < 1000) {
            return `${convertMeters(distance, ctx.unitsSettings.len).toFixed(0)} ${t(getSmallLengthUnit(ctx))}`;
        }
        return `${convertMeters(distance, ctx.unitsSettings.len, LARGE_UNIT).toFixed(1)} ${t(getLargeLengthUnit(ctx))}`;
    }

    return (
        <span style={{ display: 'inline-flex', gap: '4px' }}>
            <DirectionIcon
                style={{
                    width: '16px',
                    height: '16px',
                    flexShrink: 0,
                    transform: `rotate(${bearing ?? 0}deg)`,
                    transformOrigin: 'center',
                    fill: isUserLocation ? '#237bff' : '#727272',
                }}
            />
            <span
                className={styles.placeDistance}
                style={{
                    color: isUserLocation ? '#237bff' : '#727272',
                    whiteSpace: 'nowrap',
                }}
            >
                {addDistance()}
            </span>
        </span>
    );
}

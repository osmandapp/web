import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as DirectionIcon } from '../../../assets/icons/ic_direction_arrow.svg';
import styles from './wptDetails.module.css';
import {
    convertMeters,
    getLargeLengthUnit,
    getSmallLengthUnit,
    LARGE_UNIT,
} from '../../../menu/settings/units/UnitsConverter';
import AppContext from '../../../context/AppContext';

export default function DistanceInfo({ distance, bearing, isUserLocation }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();
    const DISTANCE_THRESHOLD_LARGE_UNIT = 1000;

    function addDistance() {
        if (!distance) return '';
        if (distance < DISTANCE_THRESHOLD_LARGE_UNIT) {
            return `${convertMeters(distance, ctx.unitsSettings.len).toFixed(0)} ${t(getSmallLengthUnit(ctx))}`;
        }
        return `${convertMeters(distance, ctx.unitsSettings.len, LARGE_UNIT).toFixed(1)} ${t(getLargeLengthUnit(ctx))}`;
    }

    return (
        <span className={styles.distanceInfo}>
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

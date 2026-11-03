import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as DirectionIcon } from '../../../assets/icons/ic_direction_arrow_16.svg';
import styles from '../wpt/wptDetails.module.css';
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
    const locationClass = isUserLocation ? styles.userLocationDistance : styles.mapCenterDistance;

    function addDistance() {
        if (!distance) return '';
        if (distance < DISTANCE_THRESHOLD_LARGE_UNIT) {
            return `${convertMeters(distance, ctx.unitsSettings.len).toFixed(0)} ${t(getSmallLengthUnit(ctx))}`;
        }
        return `${convertMeters(distance, ctx.unitsSettings.len, LARGE_UNIT).toFixed(1)} ${t(getLargeLengthUnit(ctx))}`;
    }

    return (
        <>
            <DirectionIcon
                className={`${styles.directionIcon} ${locationClass}`}
                style={{
                    transform: `rotate(${bearing ?? 0}deg)`,
                }}
            />
            <span
                className={`${styles.placeDistance} ${locationClass}`}
                style={{
                    whiteSpace: 'nowrap',
                }}
            >
                {addDistance()}
            </span>
        </>
    );
}

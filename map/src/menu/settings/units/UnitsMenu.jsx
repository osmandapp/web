import React from 'react';
import { ReactComponent as UnitsLengthIcon } from '../../../assets/icons/ic_action_ruler_unit.svg';
import { ReactComponent as UnitsSpeedIcon } from '../../../assets/icons/ic_action_speed.svg';
import UnitsMenuItem from './UnitsMenuItem';

export const units = {
    len: {
        type: 'len',
        title: 'unit_of_length',
        icon: <UnitsLengthIcon />,
        list: {
            si_km_m: 'si_km_m',
            si_mi_feet: 'si_mi_feet',
            si_mi_meters: 'si_mi_meters',
            si_mi_yard: 'si_mi_yard',
            si_nm_mt: 'si_nm_mt',
            si_nm_ft: 'si_nm_ft',
        },
        defaultValue: getDefaultLength(),
    },
    speed: {
        type: 'speed',
        title: 'default_speed_system',
        icon: <UnitsSpeedIcon />,
        list: {
            si_kmh: 'si_kmh',
            si_mph: 'si_mph',
            si_m_s: 'si_m_s',
            si_min_m: 'si_min_m',
            si_min_km: 'si_min_km',
            si_nm_h: 'si_nm_h',
        },
        defaultValue: getDefaultSpeed(),
    },
};

export function getDefaultLength() {
    return 'si_km_m';
}

export function getDefaultSpeed() {
    return 'si_kmh';
}

export default function UnitsMenu() {
    return (
        <>
            {Object.entries(units).map(([key, value], ind) => {
                return (
                    <UnitsMenuItem
                        key={'unit-item' + key + ind}
                        unit={value}
                        isLastItem={ind === Object.entries(units).length - 1}
                    />
                );
            })}
        </>
    );
}

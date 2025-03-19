import React from 'react';
import { ReactComponent as UnitsLengthIcon } from '../../../assets/icons/ic_action_ruler_unit.svg';
import { ReactComponent as UnitsSpeedIcon } from '../../../assets/icons/ic_action_speed.svg';
import UnitsMenuItem from './UnitsMenuItem';
import i18n from '../../../i18n';

export const units = {
    length: {
        type: 'length',
        title: 'Units of length',
        icon: <UnitsLengthIcon />,
        list: {
            si_km_m: i18n?.t('si_km_m'),
            si_mi_feet: i18n?.t('si_mi_feet'),
            si_mi_meters: i18n?.t('si_mi_meters'),
            si_mi_yard: i18n?.t('si_mi_yard'),
            si_nm_mt: i18n?.t('si_nm_mt'),
            si_nm_ft: i18n?.t('si_nm_ft'),
        },
        defaultValue: getDefaultLength(),
    },
    speed: {
        type: 'speed',
        title: 'Unit of speed',
        icon: <UnitsSpeedIcon />,
        list: {
            si_kmh: i18n?.t('si_kmh'),
            si_mph: i18n?.t('si_mph'),
            si_m_s: i18n?.t('si_m_s'),
            si_min_m: i18n?.t('si_min_m'),
            si_min_km: i18n?.t('si_min_km'),
            si_nm_h: i18n?.t('si_nm_h'),
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

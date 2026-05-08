import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AppBar, Box, Button, Checkbox, Toolbar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SecondaryMenuDrawer from '../../frame/components/other/SecondaryMenuDrawer';
import HeaderWithUnderline from '../../frame/components/header/HeaderWithUnderline';
import SubTitleMenu from '../../frame/components/titles/SubTitleMenu';
import ThickDivider from '../../frame/components/dividers/ThickDivider';
import ColorBlock from '../../frame/components/other/ColorBlock';
import DefaultItem from '../../frame/components/items/DefaultItem';
import { saveGarminActivityTypes } from './garminApi';
import { getActivityIcon } from '../../infoblock/components/common/ActivityType';
import { ReactComponent as DefaultActivityIcon } from '../../assets/icons/ic_action_activity.svg';
import AppContext from '../../context/AppContext';
import activities from '../../resources/activities.json';
import cmStyles from '../../menu/configuremap/configuremap.module.css';
import headerStyles from '../../menu/trackfavmenu.module.css';
import gStyles from '../../menu/gstylesmenu.module.css';
import styles from './garmin.module.css';

const ACTIVITIES_ARR = activities?.groups?.flatMap((g) => g.activities) ?? [];

// Activity type groups matching the spec, keys match GARMIN_TRACK_ACTIVITY_TYPES on the server
export const GARMIN_ACTIVITY_GROUPS = [
    {
        key: 'cycling',
        labelKey: 'web:garmin_group_cycling',
        types: ['BIKING', 'CYCLING', 'CYCLOCROSS', 'E_BIKE', 'MTB', 'BMX'],
    },
    {
        key: 'walking_running',
        labelKey: 'web:garmin_group_walking_running',
        types: ['WALKING', 'HIKING', 'RUCKING', 'RUNNING', 'RUN', 'TRACK'],
    },
    {
        key: 'water_sports',
        labelKey: 'web:garmin_group_water_sports',
        types: ['SWIMMING', 'KAYAK', 'ROWING'],
    },
    {
        key: 'winter_other',
        labelKey: 'web:garmin_group_winter_other',
        types: ['SKIING', 'SNOW', 'SKATING', 'BOARD', 'RIDE', 'MULTI'],
    },
];

// Maps each Garmin activity type to the corresponding id in activities.json
const TYPE_ACTIVITY_ID = {
    BIKING: 'road_cycling',
    CYCLING: 'road_cycling',
    CYCLOCROSS: 'gravel_biking',
    E_BIKE: 'e_biking',
    MTB: 'mountain_biking',
    BMX: 'road_cycling',
    WALKING: 'walking',
    HIKING: 'hiking',
    RUCKING: 'backpacking',
    RUNNING: 'road_running',
    RUN: 'road_running',
    TRACK: 'road_running',
    SWIMMING: 'swimming_outdoor',
    KAYAK: 'kayak',
    ROWING: 'canoe',
    SKIING: 'skiing',
    SNOW: 'snowboarding',
    SKATING: 'ice_skating',
    BOARD: 'snowboarding',
    RIDE: 'touring',
    MULTI: 'multisport',
};

const TYPE_LABEL_KEY = {
    BIKING: 'web:garmin_type_biking',
    CYCLING: 'web:garmin_type_cycling',
    CYCLOCROSS: 'web:garmin_type_cyclocross',
    E_BIKE: 'web:garmin_type_e_bike',
    MTB: 'web:garmin_type_mtb',
    BMX: 'web:garmin_type_bmx',
    WALKING: 'web:garmin_type_walking',
    HIKING: 'web:garmin_type_hiking',
    RUCKING: 'web:garmin_type_rucking',
    RUNNING: 'web:garmin_type_running',
    RUN: 'web:garmin_type_run',
    TRACK: 'web:garmin_type_track',
    SWIMMING: 'web:garmin_type_swimming',
    KAYAK: 'web:garmin_type_kayak',
    ROWING: 'web:garmin_type_rowing',
    SKIING: 'web:garmin_type_skiing',
    SNOW: 'web:garmin_type_snow',
    SKATING: 'web:garmin_type_skating',
    BOARD: 'web:garmin_type_board',
    RIDE: 'web:garmin_type_ride',
    MULTI: 'web:garmin_type_multi',
};

export default function GarminActivitiesToSync({ selectedActivityTypes, onClose, onSaved }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const allTypes = GARMIN_ACTIVITY_GROUPS.flatMap((g) => g.types);

    const [selected, setSelected] = useState(() => new Set(selectedActivityTypes ?? []));
    const [saving, setSaving] = useState(false);
    const [icons, setIcons] = useState({});

    useEffect(() => {
        setSelected(new Set(selectedActivityTypes ?? []));
    }, [selectedActivityTypes]);

    useEffect(() => {
        let cancelled = false;
        const allTypes = GARMIN_ACTIVITY_GROUPS.flatMap((g) => g.types);
        const typeIconName = Object.fromEntries(
            allTypes.map((type) => {
                const actId = TYPE_ACTIVITY_ID[type];
                const iconName = actId ? ACTIVITIES_ARR.find((a) => a.id === actId)?.icon_name : null;
                return [type, iconName && iconName !== 'ic_sample' ? iconName : null];
            })
        );
        const uniqueIconNames = [...new Set(Object.values(typeIconName).filter(Boolean))];
        Promise.all(
            uniqueIconNames.map(async (iconName) => {
                const icon = await getActivityIcon(iconName, ctx);
                return [iconName, icon];
            })
        ).then((iconEntries) => {
            if (cancelled) return;
            const iconByName = Object.fromEntries(iconEntries);
            setIcons(Object.fromEntries(allTypes.map((type) => [type, iconByName[typeIconName[type]] ?? null])));
        });
        return () => {
            cancelled = true;
        };
    }, []);

    const allSelected = allTypes.every((type) => selected.has(type));

    const toggleType = useCallback((type) => {
        setSelected((prev) => {
            const next = new Set(prev);
            if (next.has(type)) {
                next.delete(type);
            } else {
                next.add(type);
            }
            return next;
        });
    }, []);

    function handleSelectAll() {
        if (allSelected) {
            setSelected(new Set());
        } else {
            setSelected(new Set(allTypes));
        }
    }

    async function handleApply() {
        setSaving(true);
        try {
            const list = Array.from(selected);
            const ok = await saveGarminActivityTypes(list);
            if (!ok) {
                ctx.setNotification({ text: t('web:garmin_save_activity_types_error'), severity: 'error' });
                return;
            }
            onSaved?.(list);
            onClose();
        } finally {
            setSaving(false);
        }
    }

    return (
        <SecondaryMenuDrawer onClose={onClose}>
            <HeaderWithUnderline
                title={t('web:garmin_activities_to_sync')}
                onClose={onClose}
                appBarProps={{ id: 'se-close-garmin-activity-types' }}
            />
            <ThickDivider />
            <Box className={gStyles.scrollActiveBlock}>
                {GARMIN_ACTIVITY_GROUPS.map((group, gi) => (
                    <Box key={group.key}>
                        {gi > 0 && <ThickDivider mt={'0px'} mb={'0px'} />}
                        <SubTitleMenu text={t(group.labelKey)} />
                        {group.types.map((type) => (
                            <DefaultItem
                                key={type}
                                icon={icons[type] ?? <DefaultActivityIcon />}
                                name={t(TYPE_LABEL_KEY[type])}
                                onClick={() => toggleType(type)}
                                className={styles.activityTypeItem}
                                rightSlot={
                                    <Checkbox
                                        checked={selected.has(type)}
                                        onChange={() => toggleType(type)}
                                        onClick={(e) => e.stopPropagation()}
                                        className={styles.activityTypeCheckbox}
                                    />
                                }
                            />
                        ))}
                    </Box>
                ))}
                <ColorBlock color={'#f0f0f0'} />
            </Box>
            <AppBar position="static" className={cmStyles.footer}>
                <Toolbar className={`${headerStyles.toolbar} ${styles.activityTypesToolbar}`}>
                    <Button className={cmStyles.buttonSelectAll} onClick={handleSelectAll}>
                        {allSelected ? t('shared_string_deselect_all') : t('shared_string_select_all')}
                    </Button>
                    <Button
                        className={cmStyles.buttonApply}
                        onClick={handleApply}
                        disabled={saving}
                        id="se-garmin-activity-types-apply"
                    >
                        {t('shared_string_apply')}
                    </Button>
                </Toolbar>
            </AppBar>
        </SecondaryMenuDrawer>
    );
}

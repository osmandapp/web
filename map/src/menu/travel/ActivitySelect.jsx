import {
    Box,
    Checkbox,
    Collapse,
    Divider,
    FormControl,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Radio,
    Select,
    SvgIcon,
    Typography,
} from '@mui/material';
import styles from './travel.module.css';
import MenuItemWithLines from '../components/MenuItemWithLines';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { ACTIVITY_ALL, hasSpeedOnlyTracks, IGNORED_GROUP } from './TravelMenu';
import { activityLabel } from '../../map/util/activities';

export const UNIDENTIFIED_TRACKS_KEY = 'nospeed';
export const ACTIVITY_GARBAGE_SHORT = 'garbage_short';
export const ACTIVITY_GARBAGE_SPARSE = 'garbage_sparse';
export const ACTIVITY_ERROR = 'error';

// tracks the classifier leaves out, off by default
const IGNORED_ACTIVITIES = [
    { id: ACTIVITY_GARBAGE_SHORT, name: 'web:ignored_short' },
    { id: ACTIVITY_GARBAGE_SPARSE, name: 'web:ignored_sparse' },
    { id: ACTIVITY_ERROR, name: 'web:ignored_error' },
    { id: UNIDENTIFIED_TRACKS_KEY, name: 'web:ignored_no_timing' },
];

const PRESETS = [
    { id: 'foot_cycling', name: 'web:activities_foot_cycling', groups: (id) => id === 'foot' || id === 'cycling' },
    {
        id: 'no_motor',
        name: 'web:activities_no_motor',
        groups: (id) => !['driving', 'motorcycling', 'air_sports'].includes(id),
    },
];

export default function ActivitySelect({
    name = null,
    value,
    onChange,
    activities,
    updatedActivities,
    activityCounts = null,
    defaultIcon = null,
}) {
    const { t } = useTranslation();
    const [, height] = useWindowSize();
    const [expandedGroups, setExpandedGroups] = useState({});

    const getActivityCount = (activityId) => {
        if (!activityCounts || !Array.isArray(activityCounts)) return undefined;
        return activityCounts.find((activity) => activity.id === activityId)?.count;
    };

    const getUpdatedActivity = (activityId) => updatedActivities?.find((a) => a.id === activityId);

    const selectedActivities = Array.isArray(value) ? value : value === ACTIVITY_ALL ? [] : [value];
    const isAllSelected = value === ACTIVITY_ALL || (Array.isArray(value) && value.length === 0);

    const groups = [
        ...(activities?.groups ?? []).map((group) => ({ ...group, label: activityLabel(group.id, t) })),
        {
            id: IGNORED_GROUP,
            label: t('web:ignored_tracks'),
            activities: IGNORED_ACTIVITIES.map((a) => ({ id: a.id, label: t(a.name) })),
        },
    ];

    const getGroupItems = (group) => {
        const items = group.activities.map((activity) => ({ ...activity, label: activityLabel(activity.id, t) }));

        return hasSpeedOnlyTracks(group)
            ? [...items, { id: group.id, label: t('web:classified_by_speed_only') }]
            : items;
    };

    const getGroupActivityIds = (groupId) => {
        const group = groups.find((g) => g.id === groupId);
        return group ? getGroupItems(group).map((a) => a.id) : [];
    };

    const getPresetIds = (preset) =>
        (activities?.groups ?? []).filter((g) => preset.groups(g.id)).flatMap((g) => getGroupActivityIds(g.id));

    const isPresetSelected = (preset) => {
        const presetIds = getPresetIds(preset);

        return (
            presetIds.length === selectedActivities.length && presetIds.every((id) => selectedActivities.includes(id))
        );
    };

    const selectPreset = (preset, event) => {
        event.stopPropagation();
        onChange(getPresetIds(preset));
    };

    const isGroupSelected = (groupId) => {
        if (isAllSelected) return false;

        const activityIds = getGroupActivityIds(groupId);
        return activityIds.length > 0 && activityIds.every((id) => selectedActivities.includes(id));
    };

    const isGroupPartiallySelected = (groupId) => {
        if (isAllSelected) return false;

        const activityIds = getGroupActivityIds(groupId);
        const selectedCount = activityIds.filter((id) => selectedActivities.includes(id)).length;
        return selectedCount > 0 && selectedCount < activityIds.length;
    };

    const toggleGroup = (groupId, event) => {
        event.stopPropagation();
        const activityIds = getGroupActivityIds(groupId);

        if (isGroupSelected(groupId)) {
            const newSelection = selectedActivities.filter((id) => !activityIds.includes(id));
            onChange(newSelection.length === 0 ? ACTIVITY_ALL : newSelection);
        } else {
            const newSelection = [...new Set([...selectedActivities, ...activityIds])];
            onChange(newSelection);
        }
    };

    const toggleActivity = (activityId, event) => {
        event.stopPropagation();

        if (selectedActivities.includes(activityId)) {
            const newSelection = selectedActivities.filter((id) => id !== activityId);
            onChange(newSelection.length === 0 ? ACTIVITY_ALL : newSelection);
        } else {
            onChange([...selectedActivities, activityId]);
        }
    };

    const selectAll = (event) => {
        event.stopPropagation();
        onChange(ACTIVITY_ALL);
    };

    const toggleExpand = (groupId, event) => {
        event.stopPropagation();
        setExpandedGroups((prev) => ({
            ...prev,
            [groupId]: !prev[groupId],
        }));
    };

    const getSelectedLabel = () => {
        if (isAllSelected) return t('web:all_activities');
        const preset = PRESETS.find(isPresetSelected);
        if (preset) return t(preset.name);

        // Check if all selected activities belong to a single group
        for (const group of groups) {
            const groupActivityIds = getGroupActivityIds(group.id);
            if (
                groupActivityIds.length === selectedActivities.length &&
                groupActivityIds.every((id) => selectedActivities.includes(id))
            ) {
                // All activities from this group are selected
                return group.label;
            }
        }

        if (selectedActivities.length === 1) {
            const activityId = selectedActivities[0];
            const ignored = IGNORED_ACTIVITIES.find((a) => a.id === activityId);
            if (ignored) {
                return t(ignored.name);
            }
            const speedGroup = activities?.groups?.find((g) => g.id === activityId);
            if (speedGroup) {
                return `${activityLabel(speedGroup.id, t)}: ${t('web:classified_by_speed_only')}`;
            }
            const activity = getUpdatedActivity(activityId);
            if (activity) {
                return activity.label;
            }
            return t('web:shared_string_select');
        }

        return `${selectedActivities.length} ${t('web:shared_string_selected')}`;
    };

    return (
        <Box className={styles.activitySelectContainer}>
            <FormControl fullWidth>
                <Select
                    variant="filled"
                    className={styles.activitySelect}
                    value={isAllSelected ? ACTIVITY_ALL : 'selected'}
                    displayEmpty
                    renderValue={() => {
                        let iconElement = null;
                        if (isAllSelected || selectedActivities.length > 1) {
                            if (defaultIcon) {
                                iconElement = <SvgIcon component={defaultIcon} inheritViewBox />;
                            }
                        } else if (selectedActivities.length === 1) {
                            const activity = getUpdatedActivity(selectedActivities[0]);
                            if (activity?.icon) {
                                iconElement = activity.icon;
                            } else if (defaultIcon) {
                                iconElement = <SvgIcon component={defaultIcon} inheritViewBox />;
                            }
                        }

                        return (
                            <Box className={styles.selectedOption}>
                                {iconElement && (
                                    <ListItemIcon className={styles.optionIcon}>{iconElement}</ListItemIcon>
                                )}
                                <div>
                                    {name && (
                                        <Typography variant="caption" noWrap>
                                            {name}
                                        </Typography>
                                    )}
                                    <Typography variant="inherit" noWrap>
                                        {getSelectedLabel()}
                                    </Typography>
                                </div>
                            </Box>
                        );
                    }}
                    MenuProps={{
                        anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                        transformOrigin: { vertical: 'top', horizontal: 'left' },
                        PaperProps: {
                            className: styles.activityDropdownPaper,
                            style: {
                                maxHeight: height - 300,
                                marginTop: '-50px',
                                marginLeft: '45px',
                            },
                        },
                    }}
                >
                    {/* Hidden option for selected state */}
                    <MenuItem value="selected" sx={{ display: 'none' }} />
                    <MenuItem className={styles.optionItem} value="all" onClick={selectAll}>
                        <Radio checked={isAllSelected} />
                        <ListItemText>
                            <MenuItemWithLines name={t('web:all_activities')} maxLines={1} />
                        </ListItemText>
                    </MenuItem>
                    {PRESETS.map((preset) => (
                        <MenuItem
                            key={preset.id}
                            className={styles.optionItem}
                            value={preset.id}
                            onClick={(e) => selectPreset(preset, e)}
                        >
                            <Radio checked={isPresetSelected(preset)} />
                            <ListItemText>
                                <MenuItemWithLines name={t(preset.name)} maxLines={1} />
                            </ListItemText>
                        </MenuItem>
                    ))}
                    <Divider sx={{ my: '0px !important' }} />
                    {groups.map((group) => {
                        // When activityCounts is null (no data loaded or error), groups stay enabled.
                        // When activityCounts exists: disable group only if it has no tracks in view (sum null or 0).
                        const groupSum =
                            activityCounts != null && group.activities?.length
                                ? getGroupItems(group).reduce((sum, a) => sum + (getActivityCount(a.id) ?? 0), 0)
                                : null;
                        const groupLabelWithCount =
                            groupSum != null && groupSum > 0 ? `${group.label} (${groupSum})` : group.label;
                        const groupDisabled = activityCounts != null && (groupSum == null || groupSum === 0);
                        return (
                            <Box key={group.id}>
                                <MenuItem
                                    className={styles.optionItem}
                                    value={`group_${group.id}`}
                                    onClick={(e) => !groupDisabled && toggleGroup(group.id, e)}
                                    disabled={groupDisabled}
                                >
                                    <Checkbox
                                        checked={isGroupSelected(group.id)}
                                        indeterminate={isGroupPartiallySelected(group.id)}
                                        disabled={groupDisabled}
                                    />
                                    <ListItemText className={styles.groupTitle}>
                                        <MenuItemWithLines name={groupLabelWithCount} maxLines={1} />
                                    </ListItemText>
                                    <Box onClick={(e) => toggleExpand(group.id, e)} className={styles.expandIcon}>
                                        {expandedGroups[group.id] ? (
                                            <ExpandLessIcon fontSize="small" />
                                        ) : (
                                            <ExpandMoreIcon fontSize="small" />
                                        )}
                                    </Box>
                                </MenuItem>

                                <Collapse in={expandedGroups[group.id]} timeout="auto">
                                    {getGroupItems(group).map((activity) => {
                                        const count = getActivityCount(activity.id);
                                        const hasCount = count != null && count > 0;
                                        const disabled = activityCounts != null && !hasCount;
                                        const labelWithCount = hasCount
                                            ? `${activity.label} (${count})`
                                            : activity.label;
                                        return (
                                            <MenuItem
                                                key={activity.id}
                                                className={styles.optionItem}
                                                value={`activity_${activity.id}`}
                                                onClick={(e) => !disabled && toggleActivity(activity.id, e)}
                                                disabled={disabled}
                                            >
                                                <Checkbox
                                                    checked={selectedActivities.includes(activity.id)}
                                                    className={styles.nestedActivityCheckbox}
                                                    disabled={disabled}
                                                />
                                                <ListItemText>
                                                    <MenuItemWithLines name={labelWithCount} maxLines={2} />
                                                </ListItemText>
                                            </MenuItem>
                                        );
                                    })}
                                </Collapse>
                            </Box>
                        );
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}

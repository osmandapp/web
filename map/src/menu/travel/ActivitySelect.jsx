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
import { useWindowSize } from '../../util/hooks/useWindowSize';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { ACTIVITY_ALL } from './TravelMenu';

const UNIDENTIFIED_TRACKS_KEY = 'nospeed';

export default function ActivitySelect({
    name = null,
    value,
    onChange,
    activities,
    updatedActivities,
    activityCounts = null,
    defaultIcon = null,
}) {
    const [, height] = useWindowSize();
    const [expandedGroups, setExpandedGroups] = useState({});

    const getActivityCount = (activityId) => {
        if (!activityCounts || !Array.isArray(activityCounts)) return undefined;
        return activityCounts.find((activity) => activity.id === activityId)?.count;
    };

    const getUpdatedActivity = (activityId) => updatedActivities?.find((a) => a.id === activityId);

    const selectedActivities = Array.isArray(value) ? value : value === ACTIVITY_ALL ? [] : [value];
    const isAllSelected = value === ACTIVITY_ALL || (Array.isArray(value) && value.length === 0);

    const unidentified = (() => {
        const count = getActivityCount(UNIDENTIFIED_TRACKS_KEY);
        const hasCount = count != null && count > 0;
        const disabled = activityCounts != null && !hasCount;
        const label = hasCount ? `Unidentified tracks (${count})` : 'Unidentified tracks';
        return { count, hasCount, disabled, label };
    })();

    const getGroupActivityIds = (groupId) => {
        const group = activities?.groups?.find((g) => g.id === groupId);
        return group?.activities?.map((a) => a.id) || [];
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
        if (isAllSelected) return 'All activities';

        // Check if all selected activities belong to a single group
        for (const group of activities?.groups || []) {
            const groupActivityIds = group.activities.map((a) => a.id);
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
            if (activityId === UNIDENTIFIED_TRACKS_KEY) {
                return 'Unidentified tracks';
            }
            const activity = getUpdatedActivity(activityId);
            if (activity) {
                return activity.label;
            }
            return 'Select';
        }

        return `${selectedActivities.length} selected`;
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
                            <MenuItemWithLines name="All activities" maxLines={1} />
                        </ListItemText>
                    </MenuItem>
                    <Divider sx={{ my: '0px !important' }} />
                    {activities?.groups?.map((group) => {
                        const groupSum =
                            activityCounts != null && group.activities?.length
                                ? group.activities.reduce((sum, a) => sum + (getActivityCount(a.id) ?? 0), 0)
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
                                    {group.activities.map((activity) => {
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
                    <Divider />
                    {/* Unidentified tracks option */}
                    <MenuItem
                        className={styles.optionItem}
                        value={UNIDENTIFIED_TRACKS_KEY}
                        onClick={(e) => !unidentified.disabled && toggleActivity(UNIDENTIFIED_TRACKS_KEY, e)}
                        disabled={unidentified.disabled}
                    >
                        <Checkbox
                            checked={selectedActivities.includes(UNIDENTIFIED_TRACKS_KEY)}
                            disabled={unidentified.disabled}
                        />
                        <ListItemText>
                            <MenuItemWithLines name={unidentified.label} maxLines={1} />
                        </ListItemText>
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

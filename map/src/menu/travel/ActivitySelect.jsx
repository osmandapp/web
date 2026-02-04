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

export default function ActivitySelect({
    name = null,
    value,
    onChange,
    activities,
    updatedActivities,
    defaultIcon = null,
}) {
    const [, height] = useWindowSize();
    const [expandedGroups, setExpandedGroups] = useState({});

    const selectedActivities = Array.isArray(value) ? value : value === ACTIVITY_ALL ? [] : [value];
    const isAllSelected = value === ACTIVITY_ALL || (Array.isArray(value) && value.length === 0);

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
            if (activityId === 'nospeed') {
                return 'Unidentified tracks';
            }
            const activity = updatedActivities?.find((a) => a.id === activityId);
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
                    onChange={() => {}}
                    displayEmpty
                    renderValue={() => {
                        let iconElement = null;
                        if (isAllSelected || selectedActivities.length > 1) {
                            if (defaultIcon) {
                                iconElement = <SvgIcon component={defaultIcon} inheritViewBox />;
                            }
                        } else if (selectedActivities.length === 1) {
                            const activity = updatedActivities?.find((a) => a.id === selectedActivities[0]);
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
                    {activities?.groups?.map((group) => (
                        <React.Fragment key={group.id}>
                            <MenuItem
                                className={styles.optionItem}
                                value={`group_${group.id}`}
                                onClick={(e) => toggleGroup(group.id, e)}
                            >
                                <Checkbox
                                    checked={isGroupSelected(group.id)}
                                    indeterminate={isGroupPartiallySelected(group.id)}
                                />
                                <ListItemText className={styles.groupTitle}>
                                    <MenuItemWithLines name={group.label} maxLines={1} />
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
                                    return (
                                        <MenuItem
                                            key={activity.id}
                                            className={styles.optionItem}
                                            value={`activity_${activity.id}`}
                                            onClick={(e) => toggleActivity(activity.id, e)}
                                        >
                                            <Checkbox
                                                checked={selectedActivities.includes(activity.id)}
                                                className={styles.nestedActivityCheckbox}
                                            />
                                            <ListItemText>
                                                <MenuItemWithLines name={activity.label} maxLines={2} />
                                            </ListItemText>
                                        </MenuItem>
                                    );
                                })}
                            </Collapse>
                        </React.Fragment>
                    ))}
                    <Divider />
                    <MenuItem
                        className={styles.optionItem}
                        value="nospeed"
                        onClick={(e) => toggleActivity('nospeed', e)}
                    >
                        <Checkbox checked={selectedActivities.includes('nospeed')} />
                        <ListItemText>
                            <MenuItemWithLines name="Unidentified tracks" maxLines={1} />
                        </ListItemText>
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

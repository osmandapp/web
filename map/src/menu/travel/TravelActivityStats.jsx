import React, { useContext, useMemo, useState } from 'react';
import { Box, Checkbox, Collapse, ListItemText, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ActivityIcon } from '../../assets/icons/ic_action_activity.svg';
import AppContext from '../../context/AppContext';
import TravelContext from '../../context/TravelContext';
import DefaultItem from '../../frame/components/items/DefaultItem';
import SubTitleMenu from '../../frame/components/titles/SubTitleMenu';
import MenuItemWithLines from '../components/MenuItemWithLines';
import {
    ACTIVITY_ALL,
    ALL_ACTIVITY_IDS,
    activityGroups,
    groupActivityIds,
    groupItems,
    groupLabel,
    sumCounts,
} from './TravelMenu';
import styles from './travel.module.css';

const TOP_PARTS = 2;

export default function TravelActivityStats({ activityCounts, activityCountsAllDates, value, onChange }) {
    const ctx = useContext(AppContext);
    const ttx = useContext(TravelContext);
    const { t } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);
    const [maxHeight, setMaxHeight] = useState(null);
    const [expanded, setExpanded] = useState({});

    const selected = useMemo(() => new Set(value === ACTIVITY_ALL ? ALL_ACTIVITY_IDS : value), [value]);

    const groups = useMemo(() => {
        if (!Array.isArray(activityCounts)) {
            return null;
        }
        const counts = new Map(activityCounts.map((a) => [a.id, a.count ?? 0]));

        return activityGroups(ctx.develFeatures)
            .map((group) => {
                const items = groupItems(group, t).map((item) => ({ ...item, count: counts.get(item.id) ?? 0 }));
                const shown = items.filter((a) => a.count > 0).sort((a, b) => b.count - a.count);

                return {
                    id: group.id,
                    label: groupLabel(group.id, t),
                    ids: items.map((a) => a.id),
                    shown,
                    count: shown.reduce((sum, a) => sum + a.count, 0),
                };
            })
            .filter((group) => group.count > 0)
            .sort((a, b) => b.count - a.count);
    }, [activityCounts, ctx.develFeatures, t]);

    const isAll = value === ACTIVITY_ALL;
    const databaseMatch =
        ctx.develFeatures &&
        ttx.travelHeatmapMatch &&
        t('web:travel_tracks_match', {
            matched: ttx.travelHeatmapMatch.matched.toLocaleString(),
            total: ttx.travelHeatmapMatch.total.toLocaleString(),
        });

    if (!groups?.length) {
        return databaseMatch ? <Typography className={styles.matchCount}>{databaseMatch}</Typography> : null;
    }

    const maxCount = groups[0].count;

    const selectedGroups = groups
        .map((g) => ({ ...g, shown: g.shown.filter((a) => selected.has(a.id)) }))
        .filter((g) => g.shown.length > 0)
        .map((g) => ({ ...g, count: g.shown.reduce((sum, a) => sum + a.count, 0) }))
        .sort((a, b) => b.count - a.count);
    const matched = selectedGroups.reduce((sum, g) => sum + g.count, 0);
    const matchedAllDates = Array.isArray(activityCountsAllDates)
        ? sumCounts(
              activityCountsAllDates,
              activityGroups(ctx.develFeatures)
                  .flatMap(groupActivityIds)
                  .filter((id) => selected.has(id))
          )
        : matched;
    const breakdown = selectedGroups.length === 1 && !isAll ? selectedGroups[0].shown : selectedGroups;
    const topParts = breakdown.slice(0, TOP_PARTS);
    const moreCount = breakdown.length - topParts.length;

    function toggle(ids, shownIds) {
        const allOn = shownIds.every((id) => selected.has(id));
        const next = new Set(selected);
        ids.forEach((id) => (allOn ? next.delete(id) : next.add(id)));
        const groupIds = ALL_ACTIVITY_IDS.filter((id) => next.has(id));
        const ignoredIds = [...next].filter((id) => !ALL_ACTIVITY_IDS.includes(id));
        const nextIds = [...groupIds, ...ignoredIds];
        const isEverything = groupIds.length === ALL_ACTIVITY_IDS.length && ignoredIds.length === 0;
        onChange(nextIds.length === 0 || isEverything ? ACTIVITY_ALL : nextIds);
    }

    function openStats(e) {
        setMaxHeight(window.innerHeight - e.currentTarget.getBoundingClientRect().bottom - 16);
        if (selectedGroups.length === 1 && !isAll) {
            setExpanded((prev) => ({ ...prev, [selectedGroups[0].id]: true }));
        }
        setAnchorEl(e.currentTarget);
    }

    function row({ id, label, count, ids, shownIds = ids, sub = false, expandable = false }) {
        const selectedCount = shownIds.filter((a) => selected.has(a)).length;

        return (
            <MenuItem
                key={id}
                className={`${styles.optionItem} ${styles.statsRow}`}
                onClick={() => toggle(ids, shownIds)}
            >
                <Checkbox
                    checked={selectedCount === shownIds.length}
                    indeterminate={selectedCount > 0 && selectedCount < shownIds.length}
                    className={sub ? styles.nestedActivityCheckbox : undefined}
                />
                <ListItemText>
                    <MenuItemWithLines name={label} maxLines={sub ? 2 : 1} />
                </ListItemText>
                <span className={styles.statsBar}>
                    <span
                        className={styles.statsBarFill}
                        style={{ width: `${Math.max(2, (count / maxCount) * 100)}%` }}
                    />
                </span>
                <Typography className={styles.statsCount}>{count.toLocaleString()}</Typography>
                {expandable && (
                    <Box
                        className={styles.expandIcon}
                        onClick={(e) => {
                            e.stopPropagation();
                            setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
                        }}
                    >
                        {expanded[id] ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
                    </Box>
                )}
            </MenuItem>
        );
    }

    const summary = (
        <DefaultItem
            id="se-travel-activity-stats"
            icon={<ActivityIcon />}
            name={
                matchedAllDates > matched
                    ? t('web:travel_tracks_here_of', {
                          matched: matched.toLocaleString(),
                          total: matchedAllDates.toLocaleString(),
                      })
                    : t('web:travel_tracks_here', { count: matched.toLocaleString() })
            }
            additionalInfo={
                topParts.length > 0 ? (
                    <>
                        {topParts.map((p) => `${p.label} ${p.count.toLocaleString()}`).join(' · ')}
                        {moreCount > 0 && (
                            <span className={styles.statsMore}>
                                {' · '}
                                {t('web:travel_more_activities', { count: moreCount })}
                            </span>
                        )}
                    </>
                ) : null
            }
            onClick={openStats}
        />
    );

    return (
        <>
            {databaseMatch ? (
                <Tooltip arrow placement="bottom-start" title={databaseMatch}>
                    <div>{summary}</div>
                </Tooltip>
            ) : (
                summary
            )}
            <Menu
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={() => setAnchorEl(null)}
                disableAutoFocusItem
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                slotProps={{ paper: { className: styles.statsPaper, style: { maxHeight } } }}
            >
                <SubTitleMenu text={t('web:travel_tracks_in_view')} />
                {groups.map((group) => (
                    <Box key={group.id}>
                        {row({
                            ...group,
                            shownIds: group.shown.map((a) => a.id),
                            expandable: group.shown.length > 1,
                        })}
                        {group.shown.length > 1 && (
                            <Collapse in={!!expanded[group.id]} timeout="auto">
                                {group.shown.map((a) => row({ ...a, ids: [a.id], sub: true }))}
                            </Collapse>
                        )}
                    </Box>
                ))}
            </Menu>
        </>
    );
}

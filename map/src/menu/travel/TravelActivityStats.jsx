import React, { useContext, useMemo, useRef, useState } from 'react';
import { Box, ButtonBase, Checkbox, Collapse, Popover, Tooltip, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useTranslation } from 'react-i18next';
import AppContext from '../../context/AppContext';
import TravelContext from '../../context/TravelContext';
import { activityLabel } from '../../map/util/activities';
import { ACTIVITY_ALL, ALL_ACTIVITY_IDS, groupActivityIds, hasSpeedOnlyTracks } from './TravelMenu';
import styles from './travel.module.css';

const TOP_GROUPS = 2;

// tracks of the map view that pass the filter, the two biggest parts of them, and every activity in a popover where they also filter
export default function TravelActivityStats({ activities, activityCounts, activityCountsAllDates, value, onChange }) {
    const ctx = useContext(AppContext);
    const ttx = useContext(TravelContext);
    const { t } = useTranslation();
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [maxHeight, setMaxHeight] = useState(null);
    const [expanded, setExpanded] = useState({});

    const isAll = value === ACTIVITY_ALL;
    const selected = useMemo(() => new Set(isAll ? ALL_ACTIVITY_IDS : value), [value]);

    const groups = useMemo(() => {
        if (!Array.isArray(activityCounts)) {
            return null;
        }
        const counts = new Map(activityCounts.map((a) => [a.id, a.count ?? 0]));
        return (activities?.groups ?? [])
            .map((group) => {
                const items = groupActivityIds(group).map((id) => ({
                    id,
                    label:
                        hasSpeedOnlyTracks(group) && id === group.id
                            ? t('web:classified_by_speed_only')
                            : activityLabel(id, t),
                    count: counts.get(id) ?? 0,
                }));
                return {
                    id: group.id,
                    label: activityLabel(group.id, t),
                    items,
                    count: items.reduce((sum, a) => sum + a.count, 0),
                };
            })
            .filter((group) => group.count > 0)
            .sort((a, b) => b.count - a.count);
    }, [activityCounts, activities]);

    if (!groups?.length) {
        return null;
    }

    const maxCount = groups[0].count;

    // what the filter keeps: its groups, or the subtypes when it stays inside one group
    const kept = groups
        .map((g) => ({ ...g, items: g.items.filter((a) => selected.has(a.id) && a.count > 0) }))
        .filter((g) => g.items.length > 0)
        .map((g) => ({ ...g, count: g.items.reduce((sum, a) => sum + a.count, 0) }));
    const matched = kept.reduce((sum, g) => sum + g.count, 0);
    // the same filter without the date range
    const matchedAllDates = Array.isArray(activityCountsAllDates)
        ? activityCountsAllDates.reduce((sum, a) => sum + (selected.has(a.id) ? (a.count ?? 0) : 0), 0)
        : matched;
    const parts = (kept.length === 1 && !isAll ? kept[0].items : kept).sort((a, b) => b.count - a.count);
    const top = parts.slice(0, TOP_GROUPS);
    const more = parts.length - top.length;

    function toggle(ids) {
        const allOn = ids.every((id) => selected.has(id));
        const next = new Set(selected);
        ids.forEach((id) => (allOn ? next.delete(id) : next.add(id)));
        const nextIds = ALL_ACTIVITY_IDS.filter((id) => next.has(id));
        onChange(nextIds.length === 0 || nextIds.length === ALL_ACTIVITY_IDS.length ? ACTIVITY_ALL : nextIds);
    }

    function row({ id, label, count, ids, sub = false, group = null }) {
        const on = ids.filter((a) => selected.has(a)).length;
        return (
            <Box key={id} className={`${styles.statsRow} ${sub ? styles.statsSubRow : ''}`} onClick={() => toggle(ids)}>
                <Checkbox
                    checked={on === ids.length}
                    indeterminate={on > 0 && on < ids.length}
                    className={styles.statsCheckbox}
                />
                <Typography className={styles.statsLabel}>{label}</Typography>
                {group && group.items.length > 1 ? (
                    <Box
                        className={styles.expandIcon}
                        onClick={(e) => {
                            e.stopPropagation();
                            setExpanded((prev) => ({ ...prev, [group.id]: !prev[group.id] }));
                        }}
                    >
                        {expanded[group.id] ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
                    </Box>
                ) : (
                    <span />
                )}
                <span className={styles.statsBar}>
                    <i style={{ width: `${Math.max(2, (count / maxCount) * 100)}%` }} />
                </span>
                <Typography className={styles.statsCount}>{count.toLocaleString()}</Typography>
            </Box>
        );
    }

    const summary = (
        <ButtonBase
            id="se-travel-activity-stats"
            ref={anchorRef}
            className={styles.statsSummary}
            onClick={() => {
                // all the room below the line, so the list opens under it instead of covering it
                setMaxHeight(window.innerHeight - anchorRef.current.getBoundingClientRect().bottom - 16);
                // a filter inside one group opens with that group's subtypes shown
                if (kept.length === 1 && !isAll) {
                    setExpanded((prev) => ({ ...prev, [kept[0].id]: true }));
                }
                setOpen(true);
            }}
        >
            <Typography className={styles.statsTotal}>
                {matchedAllDates > matched
                    ? t('web:travel_tracks_here_of', {
                          matched: matched.toLocaleString(),
                          total: matchedAllDates.toLocaleString(),
                      })
                    : t('web:travel_tracks_here', { count: matched.toLocaleString() })}
            </Typography>
            {top.length > 0 && (
                <Typography component="div" className={styles.statsTop}>
                    <span className={styles.statsTopList}>
                        {top.map((p) => `${p.label} ${p.count.toLocaleString()}`).join(' · ')}
                    </span>
                    {more > 0 && (
                        <span className={styles.statsMore}>· {t('web:travel_more_activities', { count: more })}</span>
                    )}
                </Typography>
            )}
        </ButtonBase>
    );

    return (
        <>
            {ctx.develFeatures && ttx.travelHeatmapMatch ? (
                <Tooltip
                    arrow
                    placement="bottom-start"
                    title={t('web:travel_tracks_match', {
                        matched: ttx.travelHeatmapMatch.matched.toLocaleString(),
                        total: ttx.travelHeatmapMatch.total.toLocaleString(),
                    })}
                >
                    {summary}
                </Tooltip>
            ) : (
                summary
            )}
            <Popover
                open={open}
                anchorEl={anchorRef.current}
                onClose={() => setOpen(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                slotProps={{ paper: { className: styles.statsPaper, style: { maxHeight } } }}
            >
                <Typography className={styles.statsHeader}>{t('web:travel_tracks_in_view')}</Typography>
                {groups.map((group) => (
                    <Box key={group.id}>
                        {row({ ...group, ids: group.items.map((a) => a.id), group })}
                        {group.items.length > 1 && (
                            <Collapse in={!!expanded[group.id]} timeout="auto">
                                {group.items
                                    .filter((a) => a.count > 0)
                                    .sort((a, b) => b.count - a.count)
                                    .map((a) => row({ ...a, ids: [a.id], sub: true }))}
                            </Collapse>
                        )}
                    </Box>
                ))}
            </Popover>
        </>
    );
}

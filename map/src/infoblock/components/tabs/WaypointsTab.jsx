import { useContext, useEffect, useMemo, useState, useRef } from 'react';
import AppContext, { isLocalTrack } from '../../../context/AppContext';
import {
    Box,
    Button,
    Collapse,
    Grid,
    Icon,
    IconButton,
    ListItemText,
    MenuItem,
    Switch,
    Tooltip,
    Typography,
} from '@mui/material';
import { Cancel, ExpandLess, ExpandMore, KeyboardDoubleArrowDown, KeyboardDoubleArrowUp } from '@mui/icons-material';
import PointManager from '../../../manager/PointManager';
import TracksManager, { getResolvedPointsGroups, isWptGroupShown } from '../../../manager/track/TracksManager';
import { confirm } from '../../../dialogs/GlobalConfirmationDialog';
import { useWindowSize } from '../../../util/hooks/useWindowSize';
import { createPoiIcon } from '../../../map/markers/MarkerOptions';
import isEmpty from 'lodash-es/isEmpty';
import { updateGroupsVisibility } from '../../../manager/track/TrackAppearanceManager';
import { ReactComponent as EmptyIcon } from '../../../assets/icons/ic_action_track_disabled.svg';
import styles from '../../../menu/errors/errors.module.css';

// distinct component
const WaypointGroup = ({
    ctx,
    group,
    points,
    defaultOpen,
    defaultVisible = true,
    massOpen,
    massVisible,
    debouncerTimer,
}) => {
    const [open, setOpen] = useState(defaultOpen);
    const switchOpen = () => setOpen(!open);

    const [visible, setVisible] = useState(defaultVisible);

    const switchVisible = (e) => {
        e.stopPropagation();
        const newVisible = !visible;
        setVisible(newVisible);
        updateGroupsVisibility(ctx, [group], !newVisible, debouncerTimer);
    };

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    useEffect(() => {
        mounted && setOpen(massOpen);
    }, [massOpen]);

    useEffect(() => {
        setVisible(defaultVisible);
    }, [defaultVisible, massVisible]);

    const point = points[0].wpt;
    const iconHTML = createPoiIcon({ point, color: point.color, background: point.background, icon: point.icon })
        .options.html;

    return (
        <>
            <MenuItem divider sx={{ px: 1, py: 1 }} onClick={switchOpen}>
                <Grid container alignItems="center">
                    <Grid item xs={2}>
                        <Box
                            component="div"
                            sx={{
                                '& .icon': {
                                    left: 10,
                                    top: 25,
                                },
                                '& .background': {
                                    filter: 'drop-shadow(0 0 0 gray)',
                                    left: -12,
                                    top: 4,
                                },
                            }}
                            dangerouslySetInnerHTML={{ __html: iconHTML }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography
                            sx={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                width: '100%',
                                pr: '20px',
                                ml: '14px',
                            }}
                        >
                            {group || 'Waypoints'}
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Button sx={{ borderRadius: 28, minWidth: '30px !important' }} size="small">
                            <Typography variant="body2" color="textSecondary">
                                {points.length}
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton id={`se-wpt-group-visibility-${group || 'waypoints'}`} onClick={switchVisible}>
                            <Switch checked={visible} />
                        </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton>{open ? <ExpandLess /> : <ExpandMore />}</IconButton>
                    </Grid>
                </Grid>
            </MenuItem>
            <Collapse in={open}>
                <Box
                    sx={{
                        '& .MuiMenuItem-root': {
                            userSelect: 'text',
                            maxWidth: '800px',
                        },
                        '& .MuiTypography-root': {
                            marginLeft: '1px !important',
                            overflow: 'visible !important',
                        },
                    }}
                >
                    {points.map((point, keyIndex) => (
                        <WaypointRow key={'wpt' + point.index + keyIndex} point={point} index={point.index} ctx={ctx} />
                    ))}
                </Box>
            </Collapse>
        </>
    );
};

// distinct component
const WaypointRow = ({ point, index, ctx }) => {
    const [, , mobile] = useWindowSize();

    function showPoint(point) {
        ctx.setSelectedWpt({
            ...point.wpt,
            trackWpt: true,
        });
        ctx.setSelectedGpxFile((o) => ({ ...o, showPoint: point }));
    }

    function pointLines(point) {
        const line = ({ key, font, str }) =>
            str && (
                <Box
                    key={'box' + key}
                    sx={{
                        fontSize: `${font}rem`,
                        maxWidth: '100%',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    {str.replace(/\n/g, ' ')}
                </Box>
            );
        const lines = [];
        lines.push(line({ key: 'name', font: 1.0, str: point.wpt.name ?? 'unknown' }));
        lines.push(line({ key: 'desc', font: 0.75, str: point.wpt.desc }));
        lines.push(line({ key: 'addr', font: 0.75, str: point.wpt.address }));
        return lines;
    }

    function pointTooltip(point) {
        const line = ({ key, font, str }) =>
            str && (
                <Box
                    key={'box' + key}
                    sx={{
                        fontSize: `${font}rem`,
                        marginTop: '4px',
                        whiteSpace: 'pre-line',
                    }}
                >
                    {str}
                </Box>
            );
        const lines = [];
        lines.push(line({ key: 'name', font: 1.0, str: point.wpt.name ?? 'unknown' }));
        lines.push(line({ key: 'desc', font: 0.75, str: point.wpt.desc }));
        lines.push(line({ key: 'addr', font: 0.75, str: point.wpt.address }));
        return lines;
    }

    return useMemo(() => {
        const allowDelete = isLocalTrack(ctx);
        return (
            <MenuItem key={'marker' + index} divider sx={{ px: 1, py: 1 }} onClick={() => showPoint(point)}>
                <Grid container alignItems="center" warp="nowrap">
                    <Tooltip
                        arrow
                        disableInteractive={true}
                        placement={mobile ? 'top' : 'left'}
                        title={pointTooltip(point)}
                    >
                        <Grid item xs={allowDelete ? 11 : 12}>
                            {pointLines(point)}
                        </Grid>
                    </Tooltip>
                    {allowDelete && (
                        <Grid item xs={1}>
                            <IconButton
                                sx={{ p: 0 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    confirm({
                                        ctx,
                                        text: 'Delete this waypoint?',
                                        callback: () => PointManager.deleteWpt(index, ctx),
                                    });
                                }}
                            >
                                <Cancel fontSize="small" />
                            </IconButton>
                        </Grid>
                    )}
                </Grid>
            </MenuItem>
        );
    }, [index, mobile, point]);
};

export default function WaypointsTab() {
    const ctx = useContext(AppContext);
    const hasWaypoints = !!ctx.selectedGpxFile?.wpts && !isEmpty(ctx.selectedGpxFile.wpts);

    function deleteAllWpts() {
        confirm({
            ctx,
            text: 'Delete all waypoints?',
            callback: () => {
                const updatedSelectedGpxFile = {
                    ...ctx.selectedGpxFile,
                    wpts: [],
                    updateLayers: true,
                };
                TracksManager.updateState(ctx);
                ctx.setSelectedGpxFile(updatedSelectedGpxFile);
            },
        });
    }

    function getLayers() {
        if (ctx.selectedGpxFile.layers && Object.keys(ctx.selectedGpxFile.layers).length > 0) {
            return ctx.selectedGpxFile.layers.getLayers();
        }
        if (ctx.selectedGpxFile.gpx) {
            return ctx.selectedGpxFile.gpx.getLayers();
        }
        return [];
    }

    function getSortedPoints() {
        const az = (a, b) => (a > b) - (a < b);
        return (ctx.selectedGpxFile.wpts || [])
            .map((wpt, index) => ({ wpt, index }))
            .filter(({ wpt }) => wpt.lat != null && wpt.lon != null && !Number.isNaN(wpt.lat) && !Number.isNaN(wpt.lon))
            .sort((a, b) => az(a.wpt.category, b.wpt.category) || az(a.wpt.name, b.wpt.name));
    }

    function getSortedGroups() {
        const groups = {};
        const points = getSortedPoints();

        points.forEach((p) => {
            const g = p.wpt?.category ?? '';
            if (!groups[g]) {
                groups[g] = [];
            }
            groups[g].push(p);
        });

        return groups;
    }

    function isMassVisible() {
        const pointsGroups = getResolvedPointsGroups(ctx.selectedGpxFile);
        const groupKeys = Object.keys(pointsGroups || {});
        return groupKeys.length > 0 && groupKeys.some((g) => isWptGroupShown(pointsGroups, g));
    }

    const [showMass, setShowMass] = useState(false);
    const [massOpen, setMassOpen] = useState(false);
    const [massVisible, setMassVisible] = useState(isMassVisible());
    const debouncerTimer = useRef(null);

    useEffect(() => {
        setMassVisible(isMassVisible());
    }, [ctx.selectedGpxFile?.info?.pointsGroups]);

    const switchMassOpen = () => setMassOpen(!massOpen);
    const switchMassVisible = () => {
        const newMassVisible = !massVisible;
        setMassVisible(newMassVisible);
        const groupNames = Object.keys(getResolvedPointsGroups(ctx.selectedGpxFile) || {});
        updateGroupsVisibility(ctx, groupNames, !newMassVisible, debouncerTimer);
    };

    const pointsChangedString = useMemo(() => {
        const name = ctx.selectedGpxFile.name;
        const nLayers = getLayers().length; // used to react to undo/redo
        const wptsString = JSON.stringify(ctx.selectedGpxFile.wpts); // slow
        return name + nLayers + wptsString;
    }, [ctx.selectedGpxFile.name, ctx.selectedGpxFile.wptChangedFlag]);

    const allGroups = useMemo(() => {
        const groups = getSortedGroups();
        const keys = Object.keys(groups);
        const trackName = ctx.selectedGpxFile.name;
        const pointsGroups = getResolvedPointsGroups(ctx.selectedGpxFile);

        setShowMass(keys.length > 1);

        return (
            <Box>
                {keys.map((g) => (
                    <WaypointGroup
                        key={'wpg' + trackName + g}
                        ctx={ctx}
                        group={g}
                        points={groups[g]}
                        defaultOpen={keys.length === 1}
                        defaultVisible={isWptGroupShown(pointsGroups, g)}
                        massVisible={massVisible}
                        massOpen={massOpen}
                        debouncerTimer={debouncerTimer}
                    />
                ))}
            </Box>
        );
    }, [pointsChangedString, massOpen, massVisible]);

    return (
        <>
            {hasWaypoints && (
                <MenuItem id="se-waypoints-tab-content" divider sx={{ px: 1, py: 1 }}>
                    <Grid container alignItems="center">
                        <Grid item xs={7}>
                            {ctx.createTrack && (
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#fbc73a',
                                        fontSize: '12px',
                                        minWidth: '20px',
                                        padding: '3px 5px',
                                        marginLeft: '5px',
                                    }}
                                    onClick={deleteAllWpts}
                                >
                                    Clear all waypoints
                                </Button>
                            )}
                        </Grid>
                        <Grid item xs={2} sx={{ mb: '-4px' }} onClick={switchMassVisible}>
                            {showMass && (massVisible ? 'Hide All' : 'Show All')}
                        </Grid>
                        <Grid item xs={2}>
                            {showMass && (
                                <IconButton onClick={switchMassVisible}>
                                    <Switch id={'se-wpt-mass-visibility-switch'} checked={massVisible} />
                                </IconButton>
                            )}
                        </Grid>
                        <Grid item xs={1}>
                            {showMass && (
                                <IconButton onClick={switchMassOpen}>
                                    {massOpen ? <KeyboardDoubleArrowUp /> : <KeyboardDoubleArrowDown />}
                                </IconButton>
                            )}
                        </Grid>
                    </Grid>
                </MenuItem>
            )}

            {!hasWaypoints && (
                <Box className={styles.block} id="se-empty-waypoints-tab">
                    <Icon className={styles.icon}>
                        <EmptyIcon className={styles.icon} />
                    </Icon>
                    <Box className={styles.info}>
                        <ListItemText disableTypography={true} className={styles.title}>
                            No waypoints yet
                        </ListItemText>
                        <ListItemText disableTypography={true} className={styles.text}>
                            {isLocalTrack(ctx)
                                ? 'Use the context menu to add a waypoint. You can use "Plan a Route" tool to add waypoint.'
                                : 'You can use "Plan a Route" tool to add waypoint.'}
                        </ListItemText>
                    </Box>
                </Box>
            )}
            {allGroups}
        </>
    );
}

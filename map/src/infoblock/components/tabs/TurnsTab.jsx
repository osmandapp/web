import { styled } from '@mui/material/styles';
import { useContext, useState, useRef, useMemo } from 'react';
import { Box, Grid, IconButton, Typography, MenuItem, Switch } from '@mui/material';
import AppContext, { isRouteTrack } from '../../../context/AppContext';
import { hasSegmentTurns } from '../../../manager/track/TracksManager';
import { formatMeters } from '../../../util/Utils';

import Straight from '@mui/icons-material/StraightOutlined';

import TurnRight from '@mui/icons-material/TurnRightOutlined';
import TurnLeft from '@mui/icons-material/TurnLeftOutlined';

import TurnSlightRight from '@mui/icons-material/TurnSlightRightOutlined';
import TurnSlightLeft from '@mui/icons-material/TurnSlightLeftOutlined';

import TurnSharpRight from '@mui/icons-material/TurnSharpRightOutlined';
import TurnSharpLeft from '@mui/icons-material/TurnSharpLeftOutlined';

import Pause from '@mui/icons-material/PauseOutlined';
import Finish from '@mui/icons-material/SportsScoreOutlined';
import RoundaboutLeft from '@mui/icons-material/RoundaboutLeftOutlined';
import UTurnLeft from '@mui/icons-material/UTurnLeftOutlined';

import KeepRight from '@mui/icons-material/RampRightOutlined';
import KeepLeft from '@mui/icons-material/RampLeftOutlined';

const DoubleSwitch = styled(Switch)(() => ({
    width: 68,
    height: 34,
    padding: 9,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        color: '#1769aa',
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(34px)',
        },
    },
    '&.MuiSwitch-root .MuiSwitch-switchBase': {
        color: '#1769aa',
    },
    '& .MuiSwitch-thumb': {
        width: 24,
        height: 24,
        marginTop: 4,
    },
    '& .MuiSwitch-track': {
        borderRadius: 20 / 2,
        backgroundColor: '#1976d2',
    },
}));

// TurnType.java toString()
const CODES = {
    C: 'Go ahead',
    KL: 'Keep left',
    KR: 'Keep right',
    TRU: 'Make uturn',
    TU: 'Make uturn',
    OFFR: 'Off route',
    RNDB1: 'Take 1 exit',
    RNLB1: 'Take 1 exit',
    RNDB2: 'Take 2 exit',
    RNLB2: 'Take 2 exit',
    RNDB3: 'Take 3 exit',
    RNLB3: 'Take 3 exit',
    RNDB4: 'Take 4 exit',
    RNLB4: 'Take 4 exit',
    RNDB5: 'Take 5 exit',
    RNLB5: 'Take 5 exit',
    RNDB6: 'Take 6 exit',
    RNLB6: 'Take 6 exit',
    RNDB7: 'Take 7 exit',
    RNLB7: 'Take 7 exit',
    RNDB8: 'Take 8 exit',
    RNLB8: 'Take 8 exit',
    RNDB9: 'Take 9 exit',
    RNLB9: 'Take 9 exit',
    RNDB: 'Take exit',
    RNLB: 'Take exit',
    TL: 'Turn left',
    TR: 'Turn right',
    TSHL: 'Turn sharply left',
    TSHR: 'Turn sharply right',
    TSLL: 'Turn slightly left',
    TSLR: 'Turn slightly right',
};

const codeToString = (code) => CODES[code] ?? code;

const TURN = '^(Turn|Depart|Go ahead|Arrive|End of road|New name|Continue|Merge|On ramp|Fork)';
const SL = '(Slight|slightly)';
const SH = '(Sharp|sharply)';
const R = '(Right|right)';
const L = '(Left|left)';

const STRAIGHT = '(Depart|Straight|Go ahead)';

const ICONS = [
    [new RegExp(`${TURN} ${SH} ${R}`), <TurnSharpRight key="TSHR" />],
    [new RegExp(`${TURN} ${SH} ${L}`), <TurnSharpLeft key="TSHL" />],
    [new RegExp(`${TURN} ${SL} ${R}`), <TurnSlightRight key="TSLR" />],
    [new RegExp(`${TURN} ${SL} ${L}`), <TurnSlightLeft key="TSLL" />],
    [new RegExp(`${TURN} ${R}`), <TurnRight key="TR" />],
    [new RegExp(`${TURN} ${L}`), <TurnLeft key="TL" />],

    [new RegExp(`${STRAIGHT}`), <Straight key="C" />],

    // OsmAnd
    [/^Keep right/, <KeepRight key="KR" />],
    [/^Keep left/, <KeepLeft key="KL" />],

    // OsmAnd/OSRM
    [/^Make uturn/, <UTurnLeft key="TU" />],
    [/^(Take|Rotary|Exit rotary|Roundabout|Exit roundabout)/, <RoundaboutLeft key="RNLB" />],

    // viaPoints
    [/^Arrive/, <Pause key="ARRIVE" />],

    // enforced on last point
    [/^FINISH/, <Finish key="FINISH" />],

    // Straight as default
    [/./, <Straight key="DEFAULT" />],
];

const MUTE = '[MUTE]';

function getIconByTurnDescription({ description, finish }) {
    description = description.trim();
    const muted = description.includes(MUTE);
    muted && (description = description.replace(MUTE + ' ', ''));
    const found = ICONS.find(([r]) => (finish ? 'FINISH' : description).match(r));
    if (found) {
        const [, icon] = found; // [regexp, icon]
        const color = muted ? '' : 'primary';
        return { icon, color };
    }
    return { icon: null, color: null };
}

function reformatDescription(description) {
    const d = description.trim().replace(MUTE + ' ', '');
    const found = d.match(/and go ([\d.]+) meters/);
    const meters = (found && found[1]) ?? 0;
    if (meters > 0) {
        return d.replace(found[0], `and go ${formatMeters(meters)}`);
    } else {
        return d;
    }
}

export default function TurnsTab() {
    const ctx = useContext(AppContext);

    const hideTimerRef = useRef(0);
    const showPointOnMap = (lat, lng) => {
        clearTimeout(hideTimerRef.current);
        ctx.mapMarkerListener(lat, lng);
    };
    // setTimeout is used to prevent marker flickering on the map (on fast mouse enter/leave)
    const hidePointOnMap = () => (hideTimerRef.current = setTimeout(() => ctx.mapMarkerListener(null), 500));

    const route = isRouteTrack(ctx) && ctx.routeObject.getRoute();
    const routeHasTurns =
        route &&
        route.features &&
        route.features.some(
            (f) => f.geometry?.type === 'Point' && f.properties?.description && f.geometry?.coordinates
        );
    const routeTurnItems = useMemo(
        () => (routeHasTurns ? getRouteTurnItems({ route }) : null),
        [routeHasTurns, ctx.routeObject.getTrack()]
    ); // dep to getTrack not getRoute

    const track = ctx.selectedGpxFile;
    const trackHasTurns = hasSegmentTurns({ track });
    const trackTurnItems = useMemo(() => (trackHasTurns ? getTrackTurnItems({ track }) : null), [trackHasTurns, track]);

    function getTrackTurnItems({ track }) {
        function getPointsGeometrySegments(points) {
            const turns = [];
            points.forEach((p) => {
                p.geometry.forEach((g /*, i, all*/) => {
                    if (g.segment?.ext?.turnType) {
                        const { lat, lng } = g;
                        const turnType = g.segment.ext.turnType;
                        // const meters =
                        //     i === all.length - 1 ? 0 : Number(all[i + 1].distanceTotal - g.distanceTotal).toFixed(0);
                        // const description = `${codeToString(turnType)} and go ${meters > 0 ? meters + ' meters' : ''}`;
                        const description = codeToString(turnType);
                        turns.push({ lat, lng, description, turnType });
                    }
                });
            });
            const items = turns.map((t, i, all) => {
                const { lat, lng, description } = t;
                return turnItem({ n: i + 1, max: all.length, description, lat, lng });
            });
            return items;
        }
        if (track && track.points && track.points.length > 0) {
            return getPointsGeometrySegments(track.points);
        }
        if (
            track &&
            track.tracks &&
            track.tracks.length > 0 &&
            track.tracks[0].points &&
            track.tracks[0].points.length > 0
        ) {
            return getPointsGeometrySegments(track.tracks[0].points);
        }
        return null;
    }

    function getRouteTurnItems({ route }) {
        const items = route.features
            .filter((f) => f.geometry?.type === 'Point' && f.properties?.description && f.geometry?.coordinates)
            .map((f, i, all) => {
                const [lng, lat] = f.geometry.coordinates;
                const description = f.properties.description;
                return turnItem({ n: i + 1, max: all.length, description, lat, lng });
            });
        return items;
    }

    function turnItem({ n, max, lat, lng, description }) {
        const { icon, color } = getIconByTurnDescription({ description, finish: n === max });
        const prettyDescription = reformatDescription(description);
        return (
            <MenuItem
                key={n}
                sx={{ p: 0 }}
                onMouseEnter={() => showPointOnMap(lat, lng)}
                onMouseLeave={() => hidePointOnMap()}
            >
                <Grid container alignItems="center" spacing={0}>
                    <Grid item xs={1} textAlign="right">
                        <Typography variant="body2" noWrap>
                            {n}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} textAlign="center" sx={{ mb: '4px' }}>
                        {icon && (
                            <IconButton size="small" color={color}>
                                {icon}
                            </IconButton>
                        )}
                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant="body2" noWrap>
                            {prettyDescription}
                        </Typography>
                    </Grid>
                </Grid>
            </MenuItem>
        );
    }

    const [showRouteTurns, setShowRouteTurns] = useState(true);
    const [showTrackTurns, setShowTrackTurns] = useState(false);

    function handleSwitch() {
        setShowRouteTurns(!showRouteTurns);
        setShowTrackTurns(!showTrackTurns);
    }

    const alone = trackHasTurns === false || routeHasTurns === false;

    return (
        <>
            {alone === false && ctx.develFeatures && (
                <>
                    <MenuItem onClick={handleSwitch}>
                        <Grid container alignItems="center" spacing={0}>
                            <Grid item xs={4} textAlign="right">
                                <Typography sx={showRouteTurns ? { color: '#1769aa' } : {}}>Router turns</Typography>
                            </Grid>
                            <Grid item xs={3} textAlign="center">
                                <DoubleSwitch checked={!showRouteTurns} />
                            </Grid>
                            <Grid item xs={5} textAlign="left">
                                <Typography sx={showTrackTurns ? { color: '#1769aa' } : {}}>
                                    Approximate turns
                                </Typography>
                            </Grid>
                        </Grid>
                    </MenuItem>
                </>
            )}
            <div id="se-turns-all">
                {routeHasTurns && (alone || showRouteTurns) && (
                    <Box>
                        <Typography sx={{ color: '#666666', fontWeight: 'bold', ml: 2, my: 2 }}>
                            Navigation turns (accurate)
                        </Typography>
                        {routeTurnItems}
                    </Box>
                )}
                {trackHasTurns && (alone || showTrackTurns) && (
                    <Box>
                        <Typography sx={{ color: '#666666', fontWeight: 'bold', ml: 2, my: 2 }}>
                            Segment turns (approximate)
                        </Typography>
                        {trackTurnItems}
                    </Box>
                )}
            </div>
        </>
    );
}

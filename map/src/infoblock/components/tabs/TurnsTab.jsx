import { useContext, useRef } from 'react';
import { Grid, IconButton, Typography, MenuItem } from '@mui/material';
import AppContext, { isRouteTrack } from '../../../context/AppContext';
// import contextMenuStyles from '../../styles/ContextMenuStyles';

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
    [/^(Take|Rotary|Exit rotary)/, <RoundaboutLeft key="RNLB" />],

    // viaPoints
    [/^Arrive/, <Pause key="ARRIVE" />],

    // enforced on last point
    [/^FINISH/, <Finish key="FINISH" />],

    // Straight as default
    [/./, <Straight key="DEFAULT" />],
];

const MUTE = '[MUTE]';

function getIconByTurnDescription({ description, finish }) {
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

export default function TurnsTab() {
    const ctx = useContext(AppContext);
    // const styles = contextMenuStyles();

    const route = isRouteTrack(ctx) && ctx.routeObject.getRoute();

    const hideTimerRef = useRef(0);
    const showPointOnMap = (lat, lng) => {
        clearTimeout(hideTimerRef.current);
        ctx.mapMarkerListener(lat, lng);
    };
    // setTimeout is used to prevent marker flickering on the map (on fast mouse enter/leave)
    const hidePointOnMap = () => (hideTimerRef.current = setTimeout(() => ctx.mapMarkerListener(null), 500));

    if (route) {
        const items = route.features
            .filter((f) => f.geometry?.type === 'Point' && f.properties?.description && f.geometry?.coordinates)
            .map((f, i, all) => {
                const [lng, lat] = f.geometry.coordinates;
                const description = f.properties.description;
                const { icon, color } = getIconByTurnDescription({ description, finish: i === all.length - 1 });
                return (
                    <MenuItem
                        key={i}
                        sx={{ p: 0 }}
                        onMouseEnter={() => showPointOnMap(lat, lng)}
                        onMouseLeave={() => hidePointOnMap()}
                    >
                        <Grid container alignItems="center" spacing={0}>
                            <Grid item xs={1} textAlign="right">
                                <Typography variant="body2" noWrap>
                                    {i + 1}
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
                                    {description}
                                </Typography>
                            </Grid>
                        </Grid>
                    </MenuItem>
                );
            });

        return <>{items}</>;
    }

    return null;
}

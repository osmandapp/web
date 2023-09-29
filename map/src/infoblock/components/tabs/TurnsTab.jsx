// import { Alert, Box, Button, IconButton, MenuItem, Typography } from '@mui/material';
import { useContext } from 'react';
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
// import Finish from '@mui/icons-material/SportsScoreOutlined';
import RoundaboutLeft from '@mui/icons-material/RoundaboutLeftOutlined';
import UTurnLeft from '@mui/icons-material/UTurnLeftOutlined';

import KeepRight from '@mui/icons-material/RampRightOutlined';
import KeepLeft from '@mui/icons-material/RampLeftOutlined';

const TURN = '^(Turn|Depart|Go ahead|Arrive|End of road|New name|Continue|Merge|On ramp|Fork)';
const SL = '(Slight|slightly)';
const SH = '(Sharp|sharply)';
const R = '(Right|right)';
const L = '(Left|left)';

const icons = [
    [new RegExp(`${TURN} ${SH} ${R}`), TurnSharpRight],
    [new RegExp(`${TURN} ${SH} ${L}`), TurnSharpLeft],
    [new RegExp(`${TURN} ${SL} ${R}`), TurnSlightRight],
    [new RegExp(`${TURN} ${SL} ${L}`), TurnSlightLeft],
    [new RegExp(`${TURN} ${R}`), TurnRight],
    [new RegExp(`${TURN} ${L}`), TurnLeft],

    // OsmAnd
    [/^Keep right/, KeepRight],
    [/^Keep left/, KeepLeft],

    // OsmAnd
    [/^Make uturn/, UTurnLeft],
    [/^Take/, RoundaboutLeft],

    // viaPoints
    [/^Arrive/, Pause],

    [/./, Straight], // Straight is default
    // <Finish> is enforced for the last point
];

// const MUTE = '[MUTE]';

export default function TurnsTab() {
    const ctx = useContext(AppContext);
    // const styles = contextMenuStyles();

    const out = [];

    if (icons && isRouteTrack(ctx)) {
        // FIXME
        const route = ctx.routeObject.getRoute();
        if (route) {
            route.features
                .filter((f) => f.geometry.type === 'Point')
                .map((f) => f.properties.description)
                .forEach((d) => out.push(d));
        }
    }

    return out.map((s, i) => (
        <p key={i}>
            {i}: {s}
        </p>
    ));
}

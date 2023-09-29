// import { Alert, Box, Button, IconButton, MenuItem, Typography } from '@mui/material';
import { useContext } from 'react';
import AppContext, { isRouteTrack } from '../../../context/AppContext';
// import contextMenuStyles from '../../styles/ContextMenuStyles';

export default function TurnsTab() {
    const ctx = useContext(AppContext);
    // const styles = contextMenuStyles();

    const out = [];

    if (isRouteTrack(ctx)) {
        const route = ctx.routeObject.getRoute();
        route.features
            .filter((f) => f.geometry.type === 'Point')
            .map((f) => f.properties.description)
            .forEach((d) => out.push(d));
    }

    return out.map((s, i) => (
        <p key={i}>
            {i}: {s}
        </p>
    ));
}

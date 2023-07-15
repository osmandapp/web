import { FormControl, Grid, InputLabel, ListItemIcon, MenuItem, Select, Typography } from '@mui/material';
import Utils from '../../../util/Utils';
import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    grid: {
        '& .MuiGrid-root': {
            marginTop: '0px !important',
            marginLeft: '0px !important',
        },
    },
});

export default function SelectTrackProfile({ profile, setProfile, label }) {
    const ctx = useContext(AppContext);
    const classes = useStyles();

    return (
        <MenuItem className={classes.grid} key="routeprofile" sx={{ ml: 1, mr: 2 }}>
            <FormControl fullWidth>
                <InputLabel id="route-mode-label">{label}</InputLabel>
                <Select
                    labelid="route-mode-label"
                    label={label}
                    value={profile.mode}
                    onChange={(e) =>
                        setProfile({
                            mode: e.target.value,
                            modes: ctx.creatingRouteMode.modes,
                            opts: ctx.creatingRouteMode.modes[e.target.value]?.params,
                            colors: ctx.creatingRouteMode.colors,
                        })
                    }
                >
                    {Object.entries(ctx.creatingRouteMode.modes).map(([key, vl]) => (
                        <MenuItem className={classes.grid} key={key} value={key}>
                            <Grid container spacing={2}>
                                <ListItemIcon>
                                    {Utils.getProfileIcon(key, ctx.creatingRouteMode.colors[key])}
                                </ListItemIcon>
                                <Typography>{vl.name}</Typography>
                            </Grid>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </MenuItem>
    );
}

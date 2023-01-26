import {
    Box,
    FormControl, Grid,
    InputLabel, ListItemIcon,
    MenuItem,
    Select, Typography,
} from "@mui/material";
import React, {useContext} from "react";
import AppContext from "../../../context/AppContext";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
        grid: {
            '& .MuiGrid-root': {
                marginTop: '0px !important',
                marginLeft: '0px !important'
            },
        }
    }
)
const SettingsTab = ({width}) => {

    const ctx = useContext(AppContext);
    const classes = useStyles();

    return <Box width={width}>
        <MenuItem className={classes.grid} key='routeprofile' sx={{ml: 1, mr: 2}}>
            <FormControl fullWidth>
                <InputLabel id="route-mode-label">Route profile</InputLabel>
                <Select
                    labelid="route-mode-label"
                    label="Route profile"
                    value={ctx.routeMode.mode}
                    onChange={(e) => ctx.setRouteMode({
                        mode: e.target.value, modes: ctx.routeMode.modes,
                        opts: ctx.routeMode.modes[e.target.value]?.params,
                        colors: ctx.routeMode.colors
                    })}
                >
                    {Object.entries(ctx.routeMode.modes).map(([key, vl]) =>
                        <MenuItem className={classes.grid} key={key} value={key}>
                            <Grid container spacing={2}>
                                <ListItemIcon>
                                    <img color={ctx.routeMode.colors[key]}
                                         src={"/map/images/profile_icons/" + key + ".svg"} height={25} width={25}/>
                                </ListItemIcon>
                                <Typography>{vl.name}
                                </Typography>
                            </Grid>
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
        </MenuItem>
    </Box>
}

export default SettingsTab;
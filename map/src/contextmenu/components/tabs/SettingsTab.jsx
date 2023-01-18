import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import React, {useContext} from "react";
import AppContext from "../../../context/AppContext";

const SettingsTab = ({width}) => {

    const ctx = useContext(AppContext);

    return <Box width={width}>
            <MenuItem key='routeprofile' sx={{ ml: 1, mr: 2 }}>
                <FormControl fullWidth>
                    <InputLabel id="route-mode-label">Route profile</InputLabel>
                    <Select
                        labelid="route-mode-label"
                        label="Route profile"
                        value={ctx.routeMode.mode}
                        onChange={(e) => ctx.setRouteMode({
                            mode: e.target.value, modes: ctx.routeMode.modes,
                            opts: ctx.routeMode.modes[e.target.value]?.params})}
                    >
                        {Object.entries(ctx.routeMode.modes).map(([key, vl]) =>
                            <MenuItem key={key} value={key}>{vl.name}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            </MenuItem>
    </Box>
}

export default SettingsTab;
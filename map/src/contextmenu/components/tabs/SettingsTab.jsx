import {Box} from "@mui/material";
import React, {useContext} from "react";
import SelectTrackProfile from "../track/SelectTrackProfile";
import AppContext from "../../../context/AppContext";


const SettingsTab = ({width}) => {

    const ctx = useContext(AppContext);

    return <Box width={width}>
        <SelectTrackProfile profile={ctx.creatingRouteMode} setProfile={ctx.setCreatingRouteMode}/>
    </Box>
}

export default SettingsTab;
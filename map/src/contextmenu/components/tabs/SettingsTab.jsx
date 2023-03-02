import {Box, Grid, IconButton} from "@mui/material";
import React, {useContext, useState} from "react";
import SelectTrackProfile from "../track/SelectTrackProfile";
import AppContext from "../../../context/AppContext";
import {Settings} from "@mui/icons-material";
import RouteSettingsDialog from "../../../drawer/components/route/RouteSettingsDialog";


const SettingsTab = ({width}) => {

    const ctx = useContext(AppContext);

    const [openSettings, setOpenSettings] = useState(false);

    return <Box width={width}>
        {openSettings && <RouteSettingsDialog key='routesettingsdialog' setOpenSettings={setOpenSettings}
                                              profile={ctx.creatingRouteMode} setProfile={ctx.setCreatingRouteMode} useDev={false}/>}
        <Grid container spacing={2}>
            <Grid item xs={11.5}>
                <SelectTrackProfile profile={ctx.creatingRouteMode} setProfile={ctx.setCreatingRouteMode}
                                    label={"Route profile next segment"}/>
            </Grid>
            <Grid item xs={0.5}>
                <IconButton sx={{ml: -4, mt: 2}} onClick={() => {
                    setOpenSettings(true)
                }}>
                    <Settings fontSize="medium"/>
                </IconButton>
            </Grid>
        </Grid>
    </Box>
}

export default SettingsTab;
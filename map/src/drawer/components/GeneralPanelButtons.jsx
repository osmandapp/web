import {ButtonGroup, IconButton, Paper, Tooltip} from "@mui/material";
import TracksManager from "../../context/TracksManager";
import {Create, MapsUgc, Upload} from "@mui/icons-material";
import React, {useContext, useState} from "react";
import AppContext from "../../context/AppContext";
import {makeStyles} from "@material-ui/core/styles";
import {styled} from "@mui/material/styles";

const useStyles = makeStyles({
    buttongroup: {
        top: '10vh',
        width: '10px',
        height: '10px',
    }
})
export default function GeneralPanelButtons({drawerWidth}) {

    const ctx = useContext(AppContext);
    const classes = useStyles();
    const StyledInput = styled('input')({
        display: 'none',
    });

    const fileSelected = () => async (e) => {
        Array.from(e.target.files).forEach((file) => {
            const reader = new FileReader();
            reader.addEventListener('load', async (event) => {
                let track = await TracksManager.getTrackData(file);
                if (track) {
                    track.name = file.name;
                    TracksManager.addTrack(ctx, track);
                }
            });
            reader.readAsText(file);
        });
    }

    return (
        <div style={{left: drawerWidth + 10}} className={`${classes.buttongroup} ${'leaflet-bottom'}`}>
            <div className="leaflet-control leaflet-bar padding-container">
                <Paper>
                    <ButtonGroup
                        orientation="vertical"
                        color="primary">
                        <Tooltip title="Create track" arrow placement="right">
                            <IconButton variant="contained"
                                        type="button"
                                        onClick={() => TracksManager.createTrack(ctx)}>
                                <Create fontSize="small"/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Upload track" arrow placement="right">
                            <label htmlFor="contained-button-file">
                                <StyledInput accept=".gpx" id="contained-button-file" multiple type="file"
                                             onChange={fileSelected(ctx)}/>
                                <IconButton variant="contained"
                                            component="span">
                                    <Upload fontSize="small"/>
                                </IconButton>
                            </label>
                        </Tooltip>
                        <Tooltip title="Poi icons" arrow placement="right">
                            <IconButton variant="contained"
                                        type="button"
                                        onClick={() => ctx.setShowPoi(!ctx.showPoi)}>
                                <MapsUgc fontSize="small"/>
                            </IconButton>
                        </Tooltip>
                    </ButtonGroup>
                </Paper>
            </div>
        </div>);
}
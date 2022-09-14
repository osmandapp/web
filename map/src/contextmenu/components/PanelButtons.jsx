import {ButtonGroup, IconButton, Paper} from "@mui/material";
import {Close, Delete} from "@mui/icons-material";
import React, {useContext, useEffect, useRef} from "react";
import {makeStyles} from "@material-ui/core/styles";
import L from "leaflet";
import AppContext from "../../context/AppContext";
import TracksManager from "../../context/TracksManager";

const useStyles = makeStyles({
    buttongroup: {
        top: '20%',
        left: '5px',
        width: '10px',
        height: '10px',
    }
})

const PanelButtons = ({showContextMenu, setShowContextMenu}) => {

    const classes = useStyles();

    const ctx = useContext(AppContext);
    const divContainer = useRef(null);

    useEffect(() => {
        if (divContainer.current) {
            L.DomEvent.disableClickPropagation(divContainer.current);
            L.DomEvent.disableScrollPropagation(divContainer.current);
        }
    });

    function deleteCurrentTrack() {
        let currentTrackIndex = ctx.localTracks.findIndex(t => t.name === ctx.selectedGpxFile.name);
        if (currentTrackIndex !== -1) {
            ctx.localTracks.splice(currentTrackIndex, 1);
            ctx.setSelectedGpxFile(null);
            TracksManager.saveTracks(ctx.localTracks);
            ctx.setLocalTracks([...ctx.localTracks]);
            setShowContextMenu(false);
        }
    }

    return (<div>{showContextMenu && <div className={`${classes.buttongroup} ${'leaflet-bottom'}`} ref={divContainer}>
        <div className="leaflet-control leaflet-bar padding-container">
            <Paper>
                <ButtonGroup
                    orientation="vertical"
                    color="primary">
                    {ctx.currentObjectType !== 'cloud_track' && <IconButton
                        variant="contained"
                        type="button"
                        onClick={() => deleteCurrentTrack()}
                    >
                        <Delete fontSize="small"/>
                    </IconButton>}
                    <IconButton
                        variant="contained"
                        type="button"
                        onClick={() => setShowContextMenu(false)}
                    >
                        <Close fontSize="small"/>
                    </IconButton>
                </ButtonGroup>
            </Paper>
        </div>
    </div>
    }</div>);
};

export default PanelButtons;
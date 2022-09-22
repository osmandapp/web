import {ButtonGroup, IconButton, Paper} from "@mui/material";
import {Close, Delete, Folder} from "@mui/icons-material";
import React, {useContext, useEffect, useRef} from "react";
import {makeStyles} from "@material-ui/core/styles";
import L from "leaflet";
import AppContext from "../../context/AppContext";
import TracksManager from "../../context/TracksManager";
import {post} from "axios";

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

    async function saveTrack() {
        if (ctx.loginUser) {
            let gpx = await TracksManager.getGpxTrack(ctx);
            if (gpx) {
                let convertedData = new TextEncoder().encode(gpx.data);
                let zippedResult = require('pako').gzip(convertedData, {to : "Uint8Array"});
                let convertedZipped = zippedResult.buffer;
                let oMyBlob = new Blob([convertedZipped] , {type : "gpx"} );
                let file = new FormData();
                file.append('file', oMyBlob, ctx.selectedGpxFile.name);

                await post(`${process.env.REACT_APP_GPX_API}/userdata/upload-file`, file,
                    {
                        params: {
                            name: ctx.selectedGpxFile.name + ".gpx",
                            type: 'gpx',
                        }
                    }
                );
            }
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
                        onClick={() => saveTrack()}
                    >
                        <Folder fontSize="small"/>
                    </IconButton>}
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
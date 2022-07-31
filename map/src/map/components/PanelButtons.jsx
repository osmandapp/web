import {ButtonGroup, IconButton, Paper} from "@mui/material";
import {AutoGraph, Close, Create, Delete, Download} from "@mui/icons-material";
import React, {useContext, useEffect, useRef, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import L from "leaflet";
import AppContext from "../../context/AppContext";
import EditTrackAction from "../../data/tracks/editTrack/EditTrackAction";

const useStyles = makeStyles({
    buttongroup: {
        top: '20%',
        left: '5px',
        width: '10px',
        height: '10px',
    }
})

const PanelButtons = ({setOpenSaveDialog, setShowContextMenu}) => {

    const classes = useStyles();

    const ctx = useContext(AppContext);

    const divContainer = useRef(null);
    const [openPanelButtons, setOpenPanelButtons] = useState(false);

    useEffect(() => {
        if (divContainer.current) {
            L.DomEvent.disableClickPropagation(divContainer.current);
            L.DomEvent.disableScrollPropagation(divContainer.current);
        }
    });

    useEffect(() => {
        if (ctx.currentlyEditTrack) {
            if (ctx.currentlyEditTrack.prepareMap || ctx.currentlyEditTrack.showTrack || ctx.currentlyEditTrack.startDraw){
                setOpenPanelButtons(true);
            } else if (ctx.currentlyEditTrack.stopDraw || !ctx.currentlyEditTrack.newRouteLayer){
                setOpenPanelButtons(false);
            }
        }

    }, [ctx.currentlyEditTrack, ctx.currentlyEditTrackDispatch]);

    return (openPanelButtons &&
        <div className={`${classes.buttongroup} ${'leaflet-bottom'}`} ref={divContainer}>
            <div className="leaflet-control leaflet-bar padding-container">
                <Paper>
                    <ButtonGroup
                        orientation="vertical"
                        color="primary">
                        <IconButton
                            variant="contained"
                            type="button"
                            onClick={() => {
                                ctx.currentlyEditTrackDispatch({
                                    type: EditTrackAction.chooseStartDraw,
                                })
                            }}
                        >
                            <Create fontSize="small"/>
                        </IconButton>
                        <IconButton
                            variant="contained"
                            type="button"
                            onClick={() => {
                                setOpenSaveDialog(true);
                            }}
                        >
                            <Download fontSize="small"/>
                        </IconButton>
                        <IconButton
                            variant="contained"
                            type="button"
                            onClick={() => {
                                ctx.currentlyEditTrackDispatch({
                                    type: EditTrackAction.chooseDeleteTrack,
                                })
                            }}
                        >
                            <Delete fontSize="small"/>
                        </IconButton>
                        { ctx.contextMenuObjectType && <IconButton
                            variant="contained"
                            type="button"
                            onClick={() => {setShowContextMenu(true)}}
                        >
                            <AutoGraph fontSize="small"/>
                        </IconButton>}
                        <IconButton
                            variant="contained"
                            type="button"
                            onClick={() => {
                                ctx.currentlyEditTrackDispatch({
                                    type: EditTrackAction.stopDraw,
                                })
                            }}
                        >
                            <Close fontSize="small"/>
                        </IconButton>
                    </ButtonGroup>
                </Paper>
            </div>
        </div>
    );
};

export default PanelButtons;